import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'
import Navbar from '../sections/Navbar'
import Footer from '../sections/Footer'
import { ChevronLeft, ShoppingBag, CreditCard, Truck } from 'lucide-react'

export default function Checkout() {
  const { cartItems, cartTotal, clearCart } = useCart()
  const [isOrdered, setIsOrdered] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    notes: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsOrdered(true)
    clearCart()
  }

  if (isOrdered) {
    return (
      <div className="min-h-screen bg-main text-white flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center p-4">
          <div className="max-w-md w-full text-center">
            <div className="size-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-primary/30">
              <span className="text-4xl text-primary font-bold italic">MK</span>
            </div>
            <h1 className="font-display text-4xl uppercase tracking-widest text-white">Order Received!</h1>
            <p className="mt-6 font-sans text-white/60 leading-relaxed">
              Your authentic Indian delicacies are being prepared. We will contact you at <strong>{formData.phone}</strong> for delivery/pickup updates.
            </p>
            <Link
              to="/"
              className="mt-10 inline-block border border-primary px-8 py-3 font-sans text-sm uppercase tracking-widest text-primary hover:bg-primary hover:text-main transition-all"
            >
              Back to Home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-main text-white font-sans">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <Link to="/menu" className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors mb-8 text-sm uppercase tracking-widest">
            <ChevronLeft size={16} /> Back to Shop
          </Link>

          <div className="grid gap-12 lg:grid-cols-12">
            {/* Form Side */}
            <div className="lg:col-span-7">
              <h1 className="font-display text-3xl uppercase tracking-widest text-white mb-8 border-b border-primary/20 pb-4 flex items-center gap-3">
                <Truck size={24} className="text-primary" /> Delivery Details
              </h1>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-white/40 mb-2">Full Name</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-main/50 border border-primary/20 rounded-none p-4 text-white focus:border-primary focus:outline-none transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-white/40 mb-2">Phone Number</label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-main/50 border border-primary/20 rounded-none p-4 text-white focus:border-primary focus:outline-none transition-colors"
                    placeholder="+49 123 456 789"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-white/40 mb-2">Delivery Address</label>
                  <textarea
                    required
                    rows={3}
                    value={formData.address}
                    onChange={e => setFormData({...formData, address: e.target.value})}
                    className="w-full bg-main/50 border border-primary/20 rounded-none p-4 text-white focus:border-primary focus:outline-none transition-colors"
                    placeholder="Your complete address in Frankfurt"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-white/40 mb-2">Special Instructions (Optional)</label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={e => setFormData({...formData, notes: e.target.value})}
                    className="w-full bg-main/50 border border-primary/20 rounded-none p-4 text-white focus:border-primary focus:outline-none transition-colors"
                    placeholder="Gate codes, delivery preferences, etc."
                  />
                </div>

                <div className="pt-6">
                  <h2 className="font-display text-xl uppercase tracking-widest text-white mb-6 flex items-center gap-3">
                    <CreditCard size={20} className="text-primary" /> Payment Method
                  </h2>
                  <div className="border border-primary bg-primary/5 p-4 flex items-center justify-between">
                    <span className="font-sans text-sm text-white font-medium italic">Standard Checkout</span>
                    <span className="text-xs text-primary uppercase font-bold tracking-widest">Active</span>
                  </div>
                  <p className="mt-3 text-xs text-white/40 italic">Secure payment processing will be handled on the next step.</p>
                </div>

                <button
                  type="submit"
                  disabled={cartItems.length === 0}
                  className="w-full bg-primary text-main py-5 font-display text-lg uppercase tracking-[0.3em] font-bold hover:bg-white border border-primary transition-all mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Confirm Order
                </button>
              </form>
            </div>

            {/* Summary Side */}
            <div className="lg:col-span-5">
              <div className="bg-white/5 border border-primary/20 p-8 sticky top-32">
                <h2 className="font-display text-2xl uppercase tracking-widest text-primary mb-8 flex items-center gap-3">
                  <ShoppingBag size={20} /> Your Cart
                </h2>
                
                <div className="space-y-6 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                  {cartItems.map(item => (
                    <div key={item.name} className="flex justify-between gap-4">
                      <div className="flex-1">
                        <p className="font-sans text-white font-medium">{item.name}</p>
                        <p className="text-xs text-white/40 mt-1 uppercase tracking-widest">Quantity: {item.quantity}</p>
                      </div>
                      <p className="font-sans text-primary">{item.price}</p>
                    </div>
                  ))}
                  {cartItems.length === 0 && (
                    <p className="text-center py-8 text-white/40 italic">Your cart is empty.</p>
                  )}
                </div>

                <div className="mt-8 pt-8 border-t border-primary/20">
                  <div className="flex justify-between items-center text-lg">
                    <span className="font-display uppercase tracking-widest text-white/60 text-sm">Subtotal</span>
                    <span className="font-sans text-white">€{cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-lg mt-2">
                    <span className="font-display uppercase tracking-widest text-white/60 text-sm">Delivery</span>
                    <span className="font-sans text-white">FREE</span>
                  </div>
                  <div className="flex justify-between items-center text-xl mt-6 pt-6 border-t border-primary font-bold">
                    <span className="font-display uppercase tracking-widest text-primary">Total</span>
                    <span className="font-sans text-primary">€{cartTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
