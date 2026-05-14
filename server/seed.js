const mongoose = require('mongoose');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/magicknife_db';

const menuItemSchema = new mongoose.Schema({
  name: String,
  price: String,
  desc: String,
  category: String,
  image: String
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema);

const menuData = [
 {
   "name": "SOUP IT UP!",
    "items": [
      {"name": "Tomato Soup", "desc": "Creamy tomato & basil soup.", "price": "€6.50"},
      {"name": "Sweet Corn Soup", "desc": "Creamy corn & veggie soup.", "price": "€6.90"},
      {"name": "Manchow Soup", "desc": "Spicy veg soup with soya & ginger-garlic.", "price": "€6.90"},
      {"name": "Hot 'N' Sour Soup", "desc": "Tangy spicy veg soup with chili & vinegar.", "price": "€6.90"},
      {"name": "Khow Suey Soup", "desc": "Creamy coconut noodle soup with veggies & spices.", "price": "€7.50"}
    ]
  },
  {
    "name": "STREET HEAT / Chaat Central",
    "items": [
      {"name": "Pani Puri (8 pieces)", "desc": "Crispy puris with spiced potato filling, tamarind & seasoned water.", "price": "€7.50"},
      {"name": "Bhel Puri", "desc": "Puffed rice with onions, tomatoes, chutneys, lime, masala & peanuts.", "price": "€7.90"},
      {"name": "Sev Puri", "desc": "Mini puris topped with potatoes, onions, chutneys & crispy sev.", "price": "€7.90"},
      {"name": "Dahi Puri", "desc": "Puris with yogurt, potatoes, sweet & spicy chutneys & sev.", "price": "€7.90"},
      {"name": "Papdi Chaat", "desc": "Crispy wheat chips with chickpeas, potatoes, yogurt & chutneys.", "price": "€7.90"},
      {"name": "Samosa Chaat", "desc": "Crushed samosas in yogurt with tamarind & mint chutneys.", "price": "€8.90"},
      {"name": "Vada Pav (1 piece)", "desc": "Spicy potato fritter in a bun with chutneys & fried green chili.", "price": "€4.50"},
      {"name": "Dabeli (1 piece)", "desc": "Spiced potato bun with chutneys, peanuts & pomegranate.", "price": "€4.50"},
      {"name": "Paneer Pakora", "desc": "Crispy spiced paneer bites.", "price": "€7.50"},
      {"name": "Samosa (2 pieces)", "desc": "Crispy pastry with spiced potatoes, peas & mint chutney.", "price": "€8.50"},
      {"name": "Frankie (Bombay-Wrap)", "desc": "Spiced potato roll with onion salad & masala in flatbread.", "price": "€9.50"},
      {"name": "Paneer Wrap", "desc": "Grilled paneer with vegetables, chutneys & masala in paratha.", "price": "€10.90"},
      {"name": "Steamed Momo (5 pieces)", "desc": "Steamed dumplings with spicy vegetable filling & chili dip.", "price": "€8.90"},
      {"name": "Fried Momo (5 pieces)", "desc": "Crispy fried dumplings with spiced filling & hot dip.", "price": "€9.90"},
      {"name": "Chole Bhature", "desc": "Fluffy deep-fried bhature bread served with spicy chickpea curry.", "price": "€11.90"},
      {"name": "Pav Bhaji", "desc": "Buttered buns with spicy mashed vegetable curry.", "price": "€11.90"},
      {"name": "Kachori Chaat", "desc": "Lentil dumplings in creamy yogurt with chutneys & spices.", "price": "€8.90"},
      {"name": "Dahi Vada", "desc": "Lentil dumplings in creamy yogurt with chutneys & spices.", "price": "€8.50"}
    ]
  },
  {
    "name": "Southside Delights",
    "items": [
      {"name": "Idli – Sambar", "desc": "Steamed rice–lentil cakes with spicy lentil soup.", "price": "€8.50"},
      {"name": "Medu Vada", "desc": "Crispy lentil donuts, golden outside & fluffy inside.", "price": "€9.50"},
      {"name": "Idli & Vada", "desc": "Fluffy idlis & crispy lentil vadas with spicy lentil soup.", "price": "€10.50"},
      {"name": "Plain Uttapam", "desc": "Fluffy, thick rice-lentil base, prepared with mild spices.", "price": "€9.90"},
      {"name": "Onion Uttapam", "desc": "Fluffy rice–lentil base with spicy, golden-brown fried onions.", "price": "€12.50"},
      {"name": "Tomato Uttapam", "desc": "Fluffy rice-lentil base with juicy, freshly chopped tomatoes.", "price": "€12.50"},
      {"name": "Onion Tomato Uttapam", "desc": "Fluffy rice-lentil base with onions & tomatoes.", "price": "€12.90"},
      {"name": "Magic Knife Uttapam (spicy)", "desc": "Fluffy rice-lentil base, prepared according to a secret recipe.", "price": "€13.50"},
      {"name": "Rava Dosa", "desc": "Thin, crispy semolina dosa with mild Indian spices.", "price": "€9.50"},
      {"name": "Onion Rava Dosa", "desc": "Crispy semolina dosa with onions and spices.", "price": "€9.90"}
    ]
  },
  {
    "name": "AUTHENTIC DOSAS",
    "items": [
      {"name": "Plain Dosa", "desc": "Thin crispy rice & lentil crepe with sambar & chutneys.", "price": "€9.50"},
      {"name": "Ghee Dosa", "desc": "Crispy dosa with clarified butter (ghee) & sambar.", "price": "€9.90"},
      {"name": "Cheese Dosa", "desc": "Crispy dosa filled with melted cheese & sambar.", "price": "€9.90"},
      {"name": "Mysore Dosa", "desc": "Spicy garlic chutney spread on crispy dosa & sambar.", "price": "€10.90"},
      {"name": "Garlic Dosa", "desc": "Crispy dosa with roasted garlic flavor & sambar.", "price": "€10.90"},
      {"name": "Garlic Cheese Chilli Dosa", "desc": "Dosa with garlic, cheese, and spicy green chilies.", "price": "€11.50"},
      {"name": "Paneer Dosa", "desc": "Crispy dosa filled with spiced crumbled cottage cheese.", "price": "€10.90"},
      {"name": "Masala Dosa", "desc": "Crispy dosa filled with spiced potato masala & sambar.", "price": "€10.50"},
      {"name": "Cheese Masala Dosa", "desc": "Dosa with potato masala and a layer of melted cheese.", "price": "€10.90"},
      {"name": "Mysore Masala Dosa", "desc": "Spicy garlic chutney spread on dosa with potato filling.", "price": "€10.90"},
      {"name": "Garlic Masala Dosa", "desc": "Dosa with roasted garlic and spiced potato filling.", "price": "€10.90"},
      {"name": "Cheese Garlic Masala Dosa", "desc": "Dosa with garlic, cheese and potato masala.", "price": "€11.50"},
      {"name": "Nilgiri Dosa", "desc": "Dosa with a fresh mint and coriander paste.", "price": "€10.90"},
      {"name": "Nilgiri Masala Dosa", "desc": "Dosa with mint-coriander paste and potato filling.", "price": "€11.50"},
      {"name": "Cheese Nilgiri Masala Dosa", "desc": "Dosa with mint-coriander paste, cheese and potato masala.", "price": "€11.90"},
      {"name": "Spring Dosa", "desc": "Dosa filled with crunchy vegetables and spicy chutneys.", "price": "€11.90"},
      {"name": "Cheese Sweetcorn Dosa", "desc": "Dosa filled with cheese and sweetcorn.", "price": "€10.90"}
    ]
  },
  {
    "name": "North Indian Delights",
    "items": [
      {"name": "Dal Makhani", "desc": "Black lentils cooked with spices, butter & cream.", "price": "€13.90"},
      {"name": "Yellow Dal", "desc": "Lentil curry cooked with spices.", "price": "€13.90"},
      {"name": "Dal Palak", "desc": "Lentil curry cooked with spices & spinach.", "price": "€13.90"},
      {"name": "Palak Paneer", "desc": "Paneer cooked with spinach, curry & spices.", "price": "€14.90"},
      {"name": "Kadai Paneer", "desc": "Paneer with onions, tomatoes, bell peppers, Indian spices & chili flakes.", "price": "€14.90"},
      {"name": "Mutter Mushroom", "desc": "Green peas with mushroom cooked in onion paste with North Indian spices.", "price": "€14.90"}
    ]
  },
  {
    "name": "Wok & Roll – Indo-Chinese",
    "items": [
      {"name": "Veg Hakka Noodles", "desc": "Classic fried noodles with fresh vegetables, soy sauce and Chinese spices.", "price": "€10.90"},
      {"name": "Schezwan Noodles", "desc": "Spicy fried noodles with fiery Schezwan sauce, fresh vegetables and a hint of garlic.", "price": "€11.90"},
      {"name": "Manchurian Noodles", "desc": "Fried noodles with spicy, fried vegetable balls and Indo-Chinese sauce.", "price": "€11.90"}
    ]
  },
  {
    "name": "Wok the Rice way",
    "items": [
      {"name": "Veg Fried Rice", "desc": "Classic fried rice with fresh vegetables, soy sauce and Chinese spices.", "price": "€10.90"},
      {"name": "Schezwan Fried Rice", "desc": "Spicy fried rice with fiery Schezwan sauce, fresh vegetables and a hint of garlic.", "price": "€11.90"},
      {"name": "Manchurian Fried Rice", "desc": "Fried rice with spicy, fried vegetable balls and Indo-Chinese sauce.", "price": "€11.90"}
    ]
  },
  {
    "name": "Kids' Munchies",
    "items": [
      {"name": "Chocolate Dosa", "desc": "Sweet dosa with chocolate spread.", "price": "€7.50"},
      {"name": "Cheese Dosa", "desc": "Small crispy dosa with melted cheese.", "price": "€7.50"},
      {"name": "French Fries", "desc": "Crispy fried potato strips.", "price": "€4.50"}
    ]
  },
  {
    "name": "Desserts to melt into",
    "items": [
      {"name": "Gulab Jamun (2 pieces)", "desc": "Sweet fried dough balls in sugar syrup.", "price": "€4.50"},
      {"name": "Ras Malai (2 pieces)", "desc": "Soft cheese dumplings in creamy milk syrup.", "price": "€5.50"}
    ]
  }
];

const seedDB = async () => {}
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB for seeding...');
    await MenuItem.deleteMany({});
    await MenuItem.insertMany(menuData);
    console.log('Database seeded successfully!');
    process.exit();
  } catch (err) {
    console.error('Error seeding database:', err);
    process.exit(1);
  
  }


seedDB();
