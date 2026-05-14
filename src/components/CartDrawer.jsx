import { useCart } from '../context/CartContext'
import { X, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CartDrawer({ isOpen, onClose }) {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-main/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
        <div className="w-screen max-w-md transform transition duration-500 ease-in-out sm:duration-700">
          <div className="flex h-full flex-col bg-main border-l border-primary/20 shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-primary/10">
              <h2 className="font-display text-xl uppercase tracking-widest text-white flex items-center gap-3">
                <ShoppingBag size={20} className="text-primary" /> Your Cart
                <span className="text-xs bg-primary text-main px-2 py-0.5 rounded-full font-bold ml-2">
                  {cartCount}
                </span>
              </h2>
              <button onClick={onClose} className="text-white/60 hover:text-primary transition-colors">
                <X size={24} />
              </button>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                  <ShoppingBag size={64} className="mb-4 stroke-[1px]" />
                  <p className="font-sans text-lg uppercase tracking-widest font-light">Your cart is empty</p>
                  <button onClick={onClose} className="mt-6 text-primary hover:underline text-sm uppercase tracking-widest">
                    Start Adding Items
                  </button>
                </div>
              ) : (
                <ul className="space-y-8">
                  {cartItems.map((item) => (
                    <li key={item.name} className="flex gap-4 pb-8 border-b border-primary/5">
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h3 className="font-sans text-base font-light text-white">{item.name}</h3>
                          <p className="font-sans text-primary ml-4">{item.price}</p>
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex items-center border border-primary/20 rounded-none bg-white/5">
                            <button 
                              onClick={() => updateQuantity(item.name, -1)}
                              className="p-1.5 hover:text-primary transition-colors"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="px-3 text-sm font-sans font-bold text-white border-x border-primary/10">
                              {item.quantity}
                            </span>
                            <button 
                              onClick={() => updateQuantity(item.name, 1)}
                              className="p-1.5 hover:text-primary transition-colors"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          <button 
                            onClick={() => removeFromCart(item.name)}
                            className="text-xs uppercase tracking-widest text-white/30 hover:text-red-400 transition-colors"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-primary/20 bg-primary/5">
                <div className="flex justify-between text-base font-medium text-white mb-6">
                  <p className="font-display uppercase tracking-widest text-sm text-white/60">Subtotal</p>
                  <p className="font-sans text-xl text-primary font-bold">€{cartTotal.toFixed(2)}</p>
                </div>
                <Link
                  to="/checkout"
                  onClick={onClose}
                  className="flex items-center justify-center gap-3 w-full bg-primary text-main py-4 font-display text-sm uppercase tracking-[0.3em] font-bold hover:bg-transparent hover:text-primary border border-primary transition-all"
                >
                  Checkout Now <ArrowRight size={18} />
                </Link>
                <p className="mt-4 text-center text-xs text-white/40 italic">
                  Taxes and delivery calculated at checkout.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
