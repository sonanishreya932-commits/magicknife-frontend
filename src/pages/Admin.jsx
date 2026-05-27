import { useState } from "react";
import axios from "axios";

export default function Admin() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    desc: "",
    category: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addItem = async () => {
    try {
      await axios.post(
        "https://magicknife-backend.onrender.com/api/menu",
        form
      );
      alert("Item Added!");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ padding: "20px", color: "white" }}>
      <h2>Admin Panel</h2>

      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="price" placeholder="Price" onChange={handleChange} />
      <input name="desc" placeholder="Description" onChange={handleChange} />
      <input name="category" placeholder="Category" onChange={handleChange} />

      <button onClick={addItem}>Add Menu Item</button>
    </div>
  );
}