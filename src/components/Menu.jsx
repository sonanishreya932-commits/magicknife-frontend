import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MenuPage() {
  const [menuItems, setMenuItems] = useState([]);

  const fetchMenu = async () => {
    try {
      // Apne backend ka URL yahan dalein
      // Pehle: axios.get('http://localhost:5000/menu')
// Ab aise karein:
const response = await axios.get('https://magicknife-backend.onrender.com/menu');
      setMenuItems(response.data);
    } catch (error) {
      console.error("Data fetch nahi ho raha:", error);
    }
  };

  useEffect(() => {
    // Pehli baar data lane ke liye
    fetchMenu();

    // Har 5 second mein database check karne ke liye
    const interval = setInterval(() => {
      fetchMenu();
    }, 5000); 

    // Jab component band ho toh interval saaf karne ke liye
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Magicknife Menu</h1>
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