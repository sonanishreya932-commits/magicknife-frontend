const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/magicknife_db';

mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB Compass'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

// Menu Item Schema
const menuItemSchema = new mongoose.Schema({
  name: String,
  price: String,
  desc: String,
  category: String,
  image: String
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema);

// API Routes
app.get('/api/menu', async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    
    // Group items by category for the frontend
    const groupedMenu = menuItems.reduce((acc, item) => {
      const category = item.category || 'Other';
      if (!acc[category]) {
        acc[category] = { name: category, items: [] };
      }
      acc[category].items.push({
        name: item.name,
        price: item.price,
        desc: item.desc,
        image: item.image
      });
      return acc;
    }, {});

    res.json(Object.values(groupedMenu));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Seed Initial Data
app.post('/api/seed', async (req, res) => {
  try {
    await MenuItem.deleteMany({});
    const items = req.body;
    const insertedItems = await MenuItem.insertMany(items);
    res.json({ message: 'Database Seeded!', count: insertedItems.length });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
