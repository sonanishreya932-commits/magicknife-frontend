export const SITE = {
  name: 'Magic Knife',
  tagline: 'Authentic Indian Cuisine',
  address: {
    street: 'Waldschulstr. 11',
    city: '65933 Frankfurt am Main',
    country: 'Germany',
    full: 'Waldschulstr. 11, 65933 Frankfurt am Main, Germany',
  },
  phone: {
    landline: '069391840',
    mobile: '+49 160 7655368',
  },
  email: 'info@themagicknife.com',
  hours: '11:00 - 14:00, 17:00 - 22:00',
  whatsapp: '491607655368',
  instagram: 'https://www.instagram.com/themagicknife/',
  facebook: 'https://www.facebook.com/themagicknife/',
  googleReviews:
    'https://www.google.com/search?q=Magic+Knife+Frankfurt+reviews',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.886!2d8.591!3d50.091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd096f5c5c5c5d%3A0x0!2sWaldschulstra%C3%9Fe+11%2C+65933+Frankfurt!5e0!3m2!1sen!2sde!4v1620000000000!5m2!1sen!2sde',
  // Dev: empty string → Vite proxy forwards /api to localhost:5000 (MongoDB Compass)
  apiBase: import.meta.env.DEV
    ? ''
    : (import.meta.env.VITE_API_BASE || 'https://magicknife-backend.onrender.com'),
}
