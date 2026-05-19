import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MenuPage() {
  const [menuItems, setMenuItems] = useState([]);

  const fetchMenu = async () => {
    try {
      const response = await axios.get(
        'https://magicknife-backend.onrender.com/api/menu'
      );

      console.log("API DATA:", response.data);

      setMenuItems(response.data);
    } catch (error) {
      console.error("Data fetch nahi ho raha:", error);
    }
  };

  useEffect(() => {
    fetchMenu();

    const interval = setInterval(() => {
      fetchMenu();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1 style={{ color: "red" }}>LIVE MENU TEST 123</h1>

      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuPage;