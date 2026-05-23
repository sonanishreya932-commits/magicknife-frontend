import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Plus } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Navbar from '../sections/Navbar'
import Footer from '../sections/Footer'
import { useCart } from '../context/CartContext'

export default function FullMenu() {
  const { t } = useTranslation()
  const { addToCart } = useCart()

  const [activeTab, setActiveTab] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [menuData, setMenuData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log("🔥 FULLMENU MOUNTED")
    fetchMenuItems()
  }, [])

  const fetchMenuItems = async () => {
    try {
      console.log("🔥 FETCHING MENU")

     const res = await axios.get(
     "https://magicknife-backend.onrender.com/api/menu",
  {
        
          headers: {
            "Cache-Control": "no-cache",
            "Pragma": "no-cache"
          }
        }
      )

      console.log("🔥 MENU DATA:", res.data)

      setMenuData(Array.isArray(res.data) ? res.data : [])
    } catch (error) {
      console.log("❌ ERROR:", error)
      setMenuData([])
    } finally {
      setLoading(false)
    }
  }

  // Categories from MongoDB
  const categories = [
    'All',
    ...new Set(menuData.map(item => item?.category).filter(Boolean))
  ]

  // Filter logic
  const filteredData = menuData.filter(item =>
    (activeTab === 'All' || item?.category === activeTab) &&
    (
      item?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item?.desc?.toLowerCase().includes(searchQuery.toLowerCase())
    )
  )

  return (
    <div className="min-h-screen bg-[#080d0e] text-white">
      <Navbar />

      <main className="pt-32 pb-24">

        {/* Debug */}
        <div className="text-center text-red-500 mb-6">
          LIVE MENU TEST
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded border ${
                activeTab === cat
                  ? 'bg-green-500 text-black'
                  : 'border-gray-600 text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Search menu..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-md px-4 py-2 rounded bg-[#111] border border-gray-700 text-white"
          />
        </div>

        {loading ? (
          <h1 className="text-center text-white">Loading Menu...</h1>
        ) : (
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">

            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <div
                  key={item?._id || index}
                  className="border border-gray-700 rounded p-4"
                >
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-semibold">
                      {item?.name}
                    </h4>

                    <span className="text-green-400 font-bold">
                      {item?.price}
                    </span>
                  </div>

                  <p className="text-sm text-gray-400 mt-2">
                    {item?.desc}
                  </p>

                  <div className="mt-3 flex justify-between items-center">
                    <span className="text-xs text-gray-500">
                      {item?.category}
                    </span>

                    <button
                      onClick={() => addToCart(item)}
                      className="bg-green-500 text-black p-2 rounded"
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <h2 className="text-center col-span-2 text-gray-400">
                No menu items found
              </h2>
            )}

          </div>
        )}

      </main>

      <Footer />
    </div>
  )
}