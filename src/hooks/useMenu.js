import { useEffect, useState } from "react";
import { fetchMenu } from "../api/menuApi";

export default function useMenu() {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMenu();
  }, []);

  const loadMenu = async () => {
    try {
      const data = await fetchMenu();
      setMenu(data);
    } catch (err) {
      console.log("Menu API error:", err);
    } finally {
      setLoading(false);
    }
  };

  return { menu, loading };
}