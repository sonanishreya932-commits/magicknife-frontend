import { useEffect, useState } from "react";
import { fetchGallery } from "../api/galleryApi";

export default function useGallery() {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    loadGallery();
  }, []);

  const loadGallery = async () => {
    try {
      const data = await fetchGallery();
      setGallery(data);
    } catch (err) {
      console.log(err);
    }
  };

  return gallery;
}