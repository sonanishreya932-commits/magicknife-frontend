import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MenuPage() {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMenu = async () => {
    try {
      const response = await axios.get(
        'https://magicknife-backend.onrender.com/api/menu?ts=' + Date.now(),
        {
          headers: {
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
          }
        }
      );

      console.log("🔥 MENU API DATA:", response.data);

      setMenuItems(response.data);
      setLoading(false);
      setError(null);

    } catch (error) {
      console.error("Data fetch nahi ho raha:", error);
      setError("Menu load nahi ho raha");
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("🔥 MENU.JSX IS RUNNING");

    fetchMenu();

    const interval = setInterval(() => {
      fetchMenu();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ color: "red" }}>LIVE MENU TEST 123</h1>

      {/* Loading */}
      {loading && <p>Loading menu...</p>}

      {/* Error */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Menu List */}
      {!loading && !error && (
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              {item.name} - ₹{item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MenuPage;