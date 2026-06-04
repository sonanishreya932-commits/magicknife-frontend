import { useState, useEffect } from "react";
import axios from "axios";
import { 
  Plus, Edit2, Trash2, Lock, LogOut, CheckCircle, 
  XCircle, Loader2, Sparkles, Search, RefreshCw, Undo2
} from "lucide-react";

export default function Admin() {
  // Authorization State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [authError, setAuthError] = useState("");

  // Menu Data State
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Form State
  const [form, setForm] = useState({
    name: "",
    price: "",
    desc: "",
    category: ""
  });
  const [editingId, setEditingId] = useState(null); // ID of item being edited

  // Toast notification state
  const [toast, setToast] = useState({ show: false, message: "", type: "success" });

  const API_URL = "https://magicknife-backend.onrender.com/api/menu";

  // Check login state on mount
  useEffect(() => {
    const authStatus = localStorage.getItem("magicknife_admin_auth");
    if (authStatus === "true") {
      setIsAuthenticated(true);
      fetchMenu();
    }
  }, []);

  // Show customized feedback
  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: "", type: "success" });
    }, 4000);
  };

  // Fetch Menu Items
  const fetchMenu = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_URL}?flat=true&ts=${Date.now()}`, {
        headers: {
          "Cache-Control": "no-cache",
          Pragma: "no-cache",
        }
      });
      setMenuItems(res.data || []);
    } catch (err) {
      console.error(err);
      showToast("Could not load menu items. Please check backend connection.", "error");
    } finally {
      setLoading(false);
    }
  };

  // Handle Passcode Login
  const handleLogin = (e) => {
    e.preventDefault();
    // Default passcode is admin123
    if (passcode === "admin123") {
      setIsAuthenticated(true);
      setAuthError("");
      localStorage.setItem("magicknife_admin_auth", "true");
      fetchMenu();
      showToast("Access Granted. Welcome to MagicKnife Admin Panel!", "success");
    } else {
      setAuthError("Wrong passcode. Please try again.");
      showToast("Access Denied!", "error");
    }
  };

  // Handle Logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    setPasscode("");
    localStorage.removeItem("magicknife_admin_auth");
    showToast("Logged out successfully.", "info");
  };

  // Form Input Change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add or Update Item
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.price || !form.category) {
      showToast("Please fill in Name, Price, and Category.", "error");
      return;
    }

    setSubmitting(true);
    try {
      if (editingId) {
        // Update existing item
        await axios.put(`${API_URL}/${editingId}`, form);
        showToast("Menu Item updated successfully!", "success");
      } else {
        // Create new item
        await axios.post(API_URL, form);
        showToast("New Menu Item added successfully!", "success");
      }
      
      // Reset Form and Refresh List
      setForm({ name: "", price: "", desc: "", category: "" });
      setEditingId(null);
      fetchMenu();
    } catch (err) {
      console.error(err);
      showToast("Failed to save changes. Please try again.", "error");
    } finally {
      setSubmitting(false);
    }
  };

  // Edit action
  const handleEdit = (item) => {
    setForm({
      name: item.name || "",
      price: item.price || "",
      desc: item.desc || "",
      category: item.category || ""
    });
    setEditingId(item._id);
    // Scroll form into view on mobile
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Cancel edit mode
  const handleCancelEdit = () => {
    setForm({ name: "", price: "", desc: "", category: "" });
    setEditingId(null);
  };

  // Delete action
  const handleDelete = async (id, itemName) => {
    if (!window.confirm(`Are you sure you want to delete "${itemName}"?`)) {
      return;
    }

    try {
      await axios.delete(`${API_URL}/${id}`);
      showToast(`"${itemName}" deleted successfully!`, "success");
      fetchMenu();
    } catch (err) {
      console.error(err);
      showToast("Failed to delete item.", "error");
    }
  };

  // Unique Categories computed dynamically
  const categories = ["All", ...new Set(menuItems.map(item => item.category).filter(Boolean))];

  // Filter and search logic
  const filteredItems = menuItems.filter(item => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = 
      item.name?.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.desc?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Login Screen (Unauthenticated)
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0b1315] font-sans flex items-center justify-center px-4 relative overflow-hidden">
        {/* Decorative background light rays */}
        <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] rounded-full bg-primary/5 blur-[120px]"></div>
        <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] rounded-full bg-primary/5 blur-[120px]"></div>

        <div className="max-w-md w-full bg-white/[0.02] border border-primary/20 rounded-3xl p-8 backdrop-blur-md shadow-2xl relative">
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/30">
              <Lock className="text-primary" size={28} />
            </div>
            <h1 className="font-display text-2xl tracking-[0.2em] uppercase text-white">
              MagicKnife
            </h1>
            <p className="text-primary text-xs uppercase tracking-widest mt-1">
              Admin Portal
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-white/60 text-xs uppercase tracking-wider mb-2 font-medium">
                Enter Portal Passcode
              </label>
              <input
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-primary/50 text-white placeholder-white/20 focus:outline-none transition-all duration-300"
                required
              />
              {authError && (
                <p className="text-red-400 text-xs mt-2 flex items-center gap-1">
                  <XCircle size={14} /> {authError}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-primary text-main font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-white hover:text-main transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Access Control</span>
              <Sparkles size={14} />
            </button>
          </form>

          <p className="text-center text-white/30 text-[10px] uppercase tracking-widest mt-8">
            Secured Database Operations Only
          </p>
        </div>

        {/* Global Toast inside login */}
        {toast.show && (
          <div className={`fixed bottom-6 right-6 p-4 rounded-xl shadow-2xl border transition-all duration-300 flex items-center gap-3 z-50 ${
            toast.type === "error" ? "bg-red-950/90 border-red-500/30 text-red-200" : "bg-green-950/90 border-green-500/30 text-green-200"
          }`}>
            {toast.type === "error" ? <XCircle size={20} className="text-red-400" /> : <CheckCircle size={20} className="text-green-400" />}
            <span className="text-sm font-semibold">{toast.message}</span>
          </div>
        )}
      </div>
    );
  }

  // Dashboard Screen (Authenticated)
  return (
    <div className="min-h-screen bg-[#0b1315] text-white font-sans antialiased">
      {/* TEST BANNER - REMOVE LATER */}
      <div style={{backgroundColor: "#ff0000", color: "#fff", fontSize: "24px", fontWeight: "bold", textAlign: "center", padding: "20px"}}>
        🚀 ADMIN PANEL DEPLOYED SUCCESSFULLY! 🚀
      </div>
      {/* HEADER NAVBAR */}
      <header className="border-b border-white/10 bg-[#080d0e]/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-display text-xl tracking-[0.2em] uppercase text-white">
              MagicKnife
            </span>
            <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded border border-primary/20 uppercase tracking-widest">
              Admin
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={fetchMenu} 
              className="p-2 text-white/60 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl transition-all"
              title="Refresh database"
            >
              <RefreshCw size={18} className={loading ? "animate-spin text-primary" : ""} />
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 border border-red-500/20 hover:border-red-500 bg-red-950/20 hover:bg-red-500 text-red-400 hover:text-white rounded-xl text-xs uppercase tracking-widest font-bold transition-all duration-300"
            >
              <LogOut size={14} />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* STATS SECTION */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-5">
            <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Total Items</p>
            <p className="text-2xl font-bold text-primary font-display">{menuItems.length}</p>
          </div>
          <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-5">
            <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Categories</p>
            <p className="text-2xl font-bold text-primary font-display">{categories.length - 1}</p>
          </div>
          <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-5">
            <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Database status</p>
            <p className="text-sm font-semibold text-green-400 flex items-center gap-1.5 mt-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
              Live Connected
            </p>
          </div>
          <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-5">
            <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Database Engine</p>
            <p className="text-sm font-semibold text-primary/80 mt-2 uppercase tracking-widest">
              MongoDB Atlas
            </p>
          </div>
        </section>

        {/* WORKSPACE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: ADD / EDIT FORM */}
          <section className="lg:col-span-4 bg-white/[0.02] border border-primary/10 rounded-3xl p-6 backdrop-blur-sm sticky top-24">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-lg tracking-wider uppercase text-white flex items-center gap-2">
                <Sparkles size={18} className="text-primary" />
                {editingId ? "Edit Menu Item" : "Create Menu Item"}
              </h2>
              {editingId && (
                <button 
                  onClick={handleCancelEdit}
                  className="text-white/40 hover:text-white flex items-center gap-1 text-xs uppercase tracking-wider"
                >
                  <Undo2 size={12} /> Cancel
                </button>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-white/55 text-xs uppercase tracking-wider mb-2">Item Name *</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Garlic Herb Ribeye"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-primary/50 text-white placeholder-white/20 focus:outline-none transition-all"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/55 text-xs uppercase tracking-wider mb-2">Price *</label>
                  <input
                    type="text"
                    name="price"
                    value={form.price}
                    onChange={handleChange}
                    placeholder="e.g. $42 or ₹450"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-primary/50 text-white placeholder-white/20 focus:outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white/55 text-xs uppercase tracking-wider mb-2">Category *</label>
                  <input
                    type="text"
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    placeholder="e.g. Steaks"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-primary/50 text-white placeholder-white/20 focus:outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/55 text-xs uppercase tracking-wider mb-2">Description</label>
                <textarea
                  name="desc"
                  value={form.desc}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Describe ingredients, cooking details, or notes..."
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-primary/50 text-white placeholder-white/20 focus:outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className={`w-full py-4 bg-primary text-main font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 ${
                  submitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {submitting ? (
                  <>
                    <Loader2 className="animate-spin" size={16} />
                    <span>Saving to Database...</span>
                  </>
                ) : (
                  <>
                    {editingId ? <CheckCircle size={16} /> : <Plus size={16} />}
                    <span>{editingId ? "Update Menu Item" : "Add Menu Item"}</span>
                  </>
                )}
              </button>
            </form>
          </section>

          {/* RIGHT COLUMN: ITEMS LIST & FILTER */}
          <section className="lg:col-span-8 space-y-6">
            
            {/* SEARCH AND CATEGORY BAR */}
            <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/30" size={18} />
                <input
                  type="text"
                  placeholder="Search by name, category or description..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-2xl focus:border-primary/50 text-white placeholder-white/30 focus:outline-none transition-all"
                />
              </div>

              {/* Category selector pills */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs uppercase tracking-wider font-semibold border transition-all ${
                      selectedCategory === cat
                        ? "bg-primary border-primary text-main"
                        : "bg-white/5 border-white/10 text-white/70 hover:border-white/20 hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* LOADER */}
            {loading ? (
              <div className="flex flex-col items-center justify-center py-20 bg-white/[0.01] border border-white/5 rounded-3xl">
                <Loader2 className="animate-spin text-primary mb-4" size={32} />
                <p className="text-white/40 text-sm uppercase tracking-widest">Fetching live menu database...</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredItems.length > 0 ? (
                  filteredItems.map((item) => (
                    <article 
                      key={item._id} 
                      className={`p-6 rounded-3xl bg-white/[0.02] border transition-all duration-300 group ${
                        editingId === item._id 
                          ? "border-primary/50 bg-primary/[0.02] shadow-[0_0_15px_rgba(201,171,129,0.05)]" 
                          : "border-white/5 hover:border-white/10"
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                        <div className="space-y-2">
                          <div className="flex flex-wrap items-center gap-2.5">
                            <h3 className="font-display text-lg tracking-wider uppercase text-white group-hover:text-primary transition-colors">
                              {item.name}
                            </h3>
                            <span className="text-[10px] font-bold uppercase tracking-widest bg-white/5 text-white/50 px-2 py-0.5 rounded border border-white/10">
                              {item.category}
                            </span>
                          </div>
                          <p className="text-white/50 text-sm leading-relaxed max-w-2xl font-light">
                            {item.desc || <span className="italic text-white/20">No description provided</span>}
                          </p>
                        </div>

                        {/* Price & Actions */}
                        <div className="flex sm:flex-col items-end justify-between sm:justify-start gap-4 border-t sm:border-t-0 border-white/5 pt-4 sm:pt-0">
                          <span className="font-display text-lg text-primary font-semibold">
                            {item.price}
                          </span>
                          
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleEdit(item)}
                              className="p-2.5 bg-white/5 hover:bg-primary/20 text-white/70 hover:text-primary rounded-xl border border-white/5 transition-all"
                              title="Edit Item"
                            >
                              <Edit2 size={15} />
                            </button>
                            <button
                              onClick={() => handleDelete(item._id, item.name)}
                              className="p-2.5 bg-red-950/20 hover:bg-red-500/20 text-red-400 hover:text-red-300 rounded-xl border border-red-500/10 hover:border-red-500/30 transition-all"
                              title="Delete Item"
                            >
                              <Trash2 size={15} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))
                ) : (
                  <div className="text-center py-20 bg-white/[0.01] border border-white/5 rounded-3xl">
                    <p className="text-white/40 text-sm uppercase tracking-widest mb-2">No menu items found</p>
                    <p className="text-white/20 text-xs">Try adjusting your search query or category filters.</p>
                  </div>
                )}
              </div>
            )}
          </section>

        </div>
      </main>

      {/* GLOBAL TOAST NOTIFICATION CONTAINER */}
      {toast.show && (
        <div className={`fixed bottom-6 right-6 p-4 rounded-xl shadow-2xl border transition-all duration-300 flex items-center gap-3 z-50 animate-fade-up ${
          toast.type === "error" 
            ? "bg-red-950/95 border-red-500/30 text-red-200" 
            : toast.type === "info"
              ? "bg-slate-900/95 border-slate-500/30 text-slate-200"
              : "bg-green-950/95 border-green-500/30 text-green-200"
        }`}>
          {toast.type === "error" ? (
            <XCircle size={20} className="text-red-400" />
          ) : toast.type === "info" ? (
            <Sparkles size={20} className="text-primary" />
          ) : (
            <CheckCircle size={20} className="text-green-400" />
          )}
          <span className="text-sm font-semibold">{toast.message}</span>
        </div>
      )}
    </div>
  );
}