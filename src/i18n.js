import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        menu: 'Menu',
        gallery: 'Gallery',
        about: 'About',
        testimonials: 'Reviews',
        reservation: 'Reservation',
        contact: 'Contact',
        order: 'Order Online'
      },
      hero: {
        slide1: {
          title: 'MAGIC KNIFE',
          subtitle: 'The Art of Indian Cuisine'
        },
        slide2: {
          title: 'AUTHENTIC SPICES',
          subtitle: 'Taste of Tradition'
        },
        slide3: {
          title: 'PREMIUM DINING',
          subtitle: 'Experience Excellence'
        },
        button1: 'DISCOVER MENU',
        button2: 'BOOK A TABLE'
      },
      contact: {
        title: 'CONTACT US',
        name: 'Name',
        email: 'E-mail',
        message: 'Message',
        send: 'SEND'
      },
      about: {
        subtitle: 'Our Story',
        title: 'AUTHENTIC INDIAN CUISINE',
        description: 'Magic Knife brings the soul of Indian street food to Frankfurt. Our journey started with a simple mission: to serve authentic, high-quality vegetarian Indian dishes that remind you of home. From the bustling streets of Mumbai to the serene landscapes of South India, we bring you a curated menu of flavors that are both traditional and innovative.',
        quote: 'Experience the authentic taste of India, where every dish tells a story of heritage and passion.',
        stats: {
          heritage: '15+ Years',
          heritage_label: 'Culinary Heritage',
          spices: 'Hand-Picked',
          spices_label: 'Premium Spices',
          chefs: 'Master',
          chefs_label: 'Indian Chefs'
        },
        button: 'LEARN MORE'
      },
      footer: {
        tagline: '"A Taste of India" - Experience the authentic flavors of pure vegetarian Indian street food and traditional South Indian cuisine.',
        opening_hours_title: 'Opening Hours',
        site_links_title: 'Site Links',
        follow_us_title: 'Follow Us',
        contact_info_title: 'Contact Info',
        shipping: 'Visit us in Frankfurt Griesheim.',
        copyright: 'Magic Knife - Authentic Indian Cuisine. All rights reserved.'
      },
      gallery: {
        subtitle: 'Our Visual Story',
        title: 'GALLERY',
        button: 'VIEW FULL GALLERY',
        items: [
          { title: "Classic Masala Dosa", src: 'https://images.unsplash.com/photo-1630383249896-424e482df921?q=80&w=800&auto=format&fit=crop' },
          { title: "Soft Medu Vada", src: 'https://images.unsplash.com/photo-1621213506306-697193230a13?q=80&w=800&auto=format&fit=crop' },
          { title: "Vegetable Uttapam", src: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?q=80&w=800&auto=format&fit=crop' },
          { title: "Spicy Chole Bhature", src: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?q=80&w=800&auto=format&fit=crop' },
          { title: "Butter Pav Bhaji", src: 'https://images.unsplash.com/photo-1619193100635-433156994132?q=80&w=800&auto=format&fit=crop' },
          { title: "Mumbai Vada Pav", src: 'https://images.unsplash.com/photo-1632230224853-907153f317ee?q=80&w=800&auto=format&fit=crop' },
          { title: "Tandoori Paneer Tikka", src: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=800&auto=format&fit=crop' },
          { title: "Creamy Dal Makhani", src: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800&auto=format&fit=crop' },
          { title: "Aromatic Veg Biryani", src: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=800&auto=format&fit=crop' },
          { title: "Fresh Palak Paneer", src: 'https://images.unsplash.com/photo-1601050690011-37d45115d970?q=80&w=800&auto=format&fit=crop' },
          { title: "Onion Rava Dosa", src: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=800&auto=format&fit=crop' },
          { title: "Tangy Samosa Chat", src: 'https://images.unsplash.com/photo-1589613502231-9257f8641973?q=80&w=800&auto=format&fit=crop' },
          { title: "Crispy Pani Puri", src: 'https://images.unsplash.com/photo-1605333396915-47ed6b68a00e?q=80&w=800&auto=format&fit=crop' },
          { title: "Veg Manchurian", src: 'https://images.unsplash.com/photo-1512058560374-181342555837?q=80&w=800&auto=format&fit=crop' },
          { title: "Sweet Gulab Jamun", src: 'https://images.unsplash.com/photo-1589302168068-9a4964d91df3?q=80&w=800&auto=format&fit=crop' },
          { title: "Alfonso Mango Lassi", src: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=800&auto=format&fit=crop' }
        ]
      },
      menu_preview: {
        subtitle: 'Our Selection',
        title: 'INDIAN DELICACIES',
        categories: [
          {
            name: 'South Indian Classics',
            items: [
              { name: 'Classic Masala Dosa', price: '€10.50', desc: 'Crispy rice crepe filled with spiced potato mash.' },
              { name: 'Soft Medu Vada', price: '€7.50', desc: 'Savory fried lentil donuts, crispy outside, soft inside.' },
              { name: 'Vegetable Uttapam', price: '€9.50', desc: 'Thick rice pancake topped with fresh vegetables.' },
              { name: 'Onion Rava Dosa', price: '€11.50', desc: 'Crispy semolina crepe with onions and herbs.' }
            ]
          },
          {
            name: 'Street Food Favorites',
            items: [
              { name: 'Spicy Chole Bhature', price: '€12.50', desc: 'Spiced chickpeas served with fluffy deep-fried bread.' },
              { name: 'Butter Pav Bhaji', price: '€9.50', desc: 'Spiced vegetable mash served with buttered bread rolls.' },
              { name: 'Mumbai Vada Pav', price: '€6.50', desc: 'The iconic spicy potato burger from Mumbai.' },
              { name: 'Tangy Samosa Chat', price: '€8.50', desc: 'Samosas topped with chickpeas, yogurt, and chutneys.' },
              { name: 'Crispy Pani Puri', price: '€6.50', desc: 'Hollow puris with spicy tamarind water and potatoes.' }
            ]
          },
          {
            name: 'Tandoori & Curries',
            items: [
              { name: 'Tandoori Paneer Tikka', price: '€12.50', desc: 'Grilled cottage cheese marinated in aromatic spices.' },
              { name: 'Creamy Dal Makhani', price: '€11.50', desc: 'Slow-cooked black lentils in a rich buttery gravy.' },
              { name: 'Aromatic Veg Biryani', price: '€13.50', desc: 'Fragrant basmati rice cooked with garden vegetables.' },
              { name: 'Fresh Palak Paneer', price: '€13.00', desc: 'Cottage cheese cubes in a nutritious spinach gravy.' }
            ]
          },
          {
            name: 'Indo-Chinese & Desserts',
            items: [
              { name: 'Veg Manchurian', price: '€11.50', desc: 'Vegetable dumplings in a spicy, tangy gravy.' },
              { name: 'Sweet Gulab Jamun', price: '€5.50', desc: 'Warm milk dumplings in saffron sugar syrup.' },
              { name: 'Alfonso Mango Lassi', price: '€4.50', desc: 'Refreshing yogurt drink with premium mango pulp.' }
            ]
          }
        ],
        button: 'Go to Checkout'
      },
      testimonials: {
        subtitle: 'Reviews',
        title: 'CUSTOMER EXPERIENCE',
        items: [
          { text: "The best Dosa I've ever had in Frankfurt! Authentic taste and great service.", author: "James W.", role: "Food Enthusiast" },
          { text: "Magic Knife brings the true flavors of Mumbai street food. The Pav Bhaji is a must-try!", author: "Sarah L.", role: "Regular Guest" },
          { text: "Amazing South Indian food. The Sambar is perfectly spiced and the Idlis are so soft.", author: "Robert D.", role: "Indian Food Lover" },
          { text: "A hidden gem in Griesheim. Great atmosphere and even better vegetarian options.", author: "Michael K.", role: "Local Guide" }
        ],
        stats: 'Join 10,000+ Happy Guests'
      },
      reservation: {
        subtitle: 'Reservations',
        title: 'BOOK A TABLE',
        success_title: 'Thank You!',
        success_msg: 'Your reservation request has been received. We will contact you shortly to confirm your table.',
        back_btn: 'Back to booking',
        form: {
          name: 'Full Name',
          name_ph: 'Enter your name',
          email: 'Email Address',
          email_ph: 'email@example.com',
          guests: 'Number of Guests',
          people: 'People',
          date: 'Date',
          time: 'Time',
          submit: 'Confirm Booking'
        }
      },
      specialties: {
        subtitle: 'Signature Dishes',
        title: 'OUR SPECIALTIES',
        description: 'Discover our most beloved creations, where traditional Indian techniques meet modern culinary excellence.',
        button: 'VIEW ALL DISHES'
      }
    }
  },
  de: {
    translation: {
      nav: {
        home: 'Home',
        menu: 'Menü',
        gallery: 'Galerie',
        about: 'Über uns',
        testimonials: 'Bewertungen',
        reservation: 'Reservierung',
        contact: 'Kontakt',
        order: 'Online Bestellen'
      },
      hero: {
        slide1: {
          title: 'MAGIC KNIFE',
          subtitle: 'Die Kunst der indischen Küche'
        },
        slide2: {
          title: 'AUTHENTISCHE GEWÜRZE',
          subtitle: 'Geschmack der Tradition'
        },
        slide3: {
          title: 'PREMIUM DINING',
          subtitle: 'Exzellenz erleben'
        },
        button1: 'MENÜ ENTDECKEN',
        button2: 'TISCH RESERVIEREN'
      },
      contact: {
        title: 'KONTAKTIEREN SIE UNS',
        name: 'Name',
        email: 'E-mail',
        message: 'Nachricht',
        send: 'SENDEN'
      },
      about: {
        subtitle: 'Unsere Geschichte',
        title: 'AUTHENTISCHE INDISCHE KÜCHE',
        description: 'Magic Knife bringt die Seele des indischen Street Foods nach Frankfurt. Unsere Reise begann mit einer einfachen Mission: authentische, hochwertige vegetarische indische Gerichte zu servieren, die Sie an zu Hause erinnern. Von den belebten Straßen Mumbais bis zu den ruhigen Landschaften Südindiens bringen wir Ihnen ein kuratiertes Menü an Aromen, die sowohl traditionell als auch innovativ sind.',
        quote: 'Erleben Sie den authentischen Geschmack Indiens, wo jedes Gericht eine Geschichte von Erbe und Leidenschaft erzählt.',
        stats: {
          heritage: '15+ Jahre',
          heritage_label: 'Kulinarisches Erbe',
          spices: 'Handverlesen',
          spices_label: 'Premium Gewürze',
          chefs: 'Meister',
          chefs_label: 'Indische Köche'
        },
        button: 'MEHR ERFAHREN'
      },
      footer: {
        tagline: '"Ein Geschmack von Indien" - Erleben Sie die authentischen Aromen von rein vegetarischem indischem Street Food und traditioneller südindischer Küche.',
        opening_hours_title: 'Öffnungszeiten',
        site_links_title: 'Seitenlinks',
        follow_us_title: 'Folgen Sie uns',
        contact_info_title: 'Kontaktinfo',
        shipping: 'Besuchen Sie uns in Frankfurt Griesheim.',
        copyright: 'Magic Knife - Authentische indische Küche. Alle Rechte vorbehalten.'
      },
      gallery: {
        subtitle: 'Unsere visuelle Geschichte',
        title: 'GALERIE',
        button: 'GESAMTE GALERIE ANSEHEN',
        items: [
          { title: "Klassisches Masala Dosa", src: 'https://images.unsplash.com/photo-1630383249896-424e482df921?q=80&w=800&auto=format&fit=crop' },
          { title: "Weiches Medu Vada", src: 'https://images.unsplash.com/photo-1621213506306-697193230a13?q=80&w=800&auto=format&fit=crop' },
          { title: "Gemüse-Uttapam", src: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?q=80&w=800&auto=format&fit=crop' },
          { title: "Würziges Chole Bhature", src: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?q=80&w=800&auto=format&fit=crop' },
          { title: "Butter Pav Bhaji", src: 'https://images.unsplash.com/photo-1619193100635-433156994132?q=80&w=800&auto=format&fit=crop' },
          { title: "Mumbai Vada Pav", src: 'https://images.unsplash.com/photo-1632230224853-907153f317ee?q=80&w=800&auto=format&fit=crop' },
          { title: "Tandoori Paneer Tikka", src: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=800&auto=format&fit=crop' },
          { title: "Cremiges Dal Makhani", src: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800&auto=format&fit=crop' },
          { title: "Aromatisches Gemüse-Biryani", src: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=800&auto=format&fit=crop' },
          { title: "Frisches Palak Paneer", src: 'https://images.unsplash.com/photo-1601050690011-37d45115d970?q=80&w=800&auto=format&fit=crop' },
          { title: "Zwiebel Rava Dosa", src: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=800&auto=format&fit=crop' },
          { title: "Würziges Samosa Chat", src: 'https://images.unsplash.com/photo-1589613502231-9257f8641973?q=80&w=800&auto=format&fit=crop' },
          { title: "Knuspriges Pani Puri", src: 'https://images.unsplash.com/photo-1605333396915-47ed6b68a00e?q=80&w=800&auto=format&fit=crop' },
          { title: "Gemüse-Manchurian", src: 'https://images.unsplash.com/photo-1512058560374-181342555837?q=80&w=800&auto=format&fit=crop' },
          { title: "Süßes Gulab Jamun", src: 'https://images.unsplash.com/photo-1589302168068-9a4964d91df3?q=80&w=800&auto=format&fit=crop' },
          { title: "Alfonso Mango Lassi", src: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=800&auto=format&fit=crop' }
        ]
      },
      menu_preview: {
        subtitle: 'Unsere Auswahl',
        title: 'INDISCHE KÖSTLICHKEITEN',
        categories: [
          {
            name: 'Südindische Klassiker',
            items: [
              { name: 'Klassisches Masala Dosa', price: '€10.50', desc: 'Knuspriger Reis-Crepe gefüllt mit gewürztem Kartoffelpüree.' },
              { name: 'Weiches Medu Vada', price: '€7.50', desc: 'Herzhafte frittierte Linsendonuts, außen knusprig, innen weich.' },
              { name: 'Gemüse-Uttapam', price: '€9.50', desc: 'Dicker Reispfannkuchen mit frischem Gemüse.' },
              { name: 'Zwiebel Rava Dosa', price: '€11.50', desc: 'Knuspriger Grieß-Crepe mit Zwiebeln und Kräutern.' }
            ]
          },
          {
            name: 'Street Food Favoriten',
            items: [
              { name: 'Würziges Chole Bhature', price: '€12.50', desc: 'Gewürzte Kichererbsen serviert mit fluffigem, frittiertem Brot.' },
              { name: 'Butter Pav Bhaji', price: '€9.50', desc: 'Gewürztes Gemüsepüree serviert mit buttrigen Brötchen.' },
              { name: 'Mumbai Vada Pav', price: '€6.50', desc: 'Der ikonische würzige Kartoffel-Burger aus Mumbai.' },
              { name: 'Würziges Samosa Chat', price: '€8.50', desc: 'Samosas mit Kichererbsen, Joghurt und Chutneys.' },
              { name: 'Knuspriges Pani Puri', price: '€6.50', desc: 'Hohle Puris mit würzigem Tamarindenwasser und Kartoffeln.' }
            ]
          },
          {
            name: 'Tandoori & Curries',
            items: [
              { name: 'Tandoori Paneer Tikka', price: '€12.50', desc: 'Gegrillter Hüttenkäse mariniert in aromatischen Gewürzen.' },
              { name: 'Cremiges Dal Makhani', price: '€11.50', desc: 'Langsam gekochte schwarze Linsen in einer reichen Buttersauce.' },
              { name: 'Aromatisches Gemüse-Biryani', price: '€13.50', desc: 'Duftender Basmatireis gekocht mit Gartengemüse.' },
              { name: 'Frisches Palak Paneer', price: '€13.00', desc: 'Hüttenkäsewürfel in einer nahrhaften Spinatsauce.' }
            ]
          },
          {
            name: 'Indo-Chinesisch & Desserts',
            items: [
              { name: 'Gemüse-Manchurian', price: '€11.50', desc: 'Gemüseklößchen in einer würzigen, pikanten Sauce.' },
              { name: 'Süßes Gulab Jamun', price: '€5.50', desc: 'Warme Milchbällchen in Safran-Zuckersirup.' },
              { name: 'Alfonso Mango Lassi', price: '€4.50', desc: 'Erfrischendes Joghurtgetränk mit Premium-Mangopulpe.' }
            ]
          }
        ],
        button: 'Zum Checkout'
      },
      testimonials: {
        subtitle: 'Bewertungen',
        title: 'KUNDENERFAHRUNG',
        items: [
          { text: "Das beste Dosa, das ich je in Frankfurt gegessen habe! Authentischer Geschmack und toller Service.", author: "James W.", role: "Feinschmecker" },
          { text: "Magic Knife bringt die wahren Aromen von Mumbai Street Food. Das Pav Bhaji ist ein Muss!", author: "Sarah L.", role: "Stammgast" },
          { text: "Phantastisches südindisches Essen. Das Sambar ist perfekt gewürzt und die Idlis sind so weich.", author: "Robert D.", role: "Liebhaber indischer Küche" },
          { text: "Ein verstecktes Juwel in Griesheim. Tolle Atmosphäre und noch bessere vegetarische Optionen.", author: "Michael K.", role: "Local Guide" }
        ],
        stats: 'Schließen Sie sich über 10.000 glücklichen Gästen an'
      },
      reservation: {
        subtitle: 'Reservierungen',
        title: 'TISCH RESERVIEREN',
        success_title: 'Vielen Dank!',
        success_msg: 'Ihre Reservierungsanfrage ist eingegangen. Wir werden Sie in Kürze kontaktieren, um Ihren Tisch zu bestätigen.',
        back_btn: 'Zurück zur Buchung',
        form: {
          name: 'Vollständiger Name',
          name_ph: 'Geben Sie Ihren Namen ein',
          email: 'E-Mail-Adresse',
          email_ph: 'email@beispiel.de',
          guests: 'Anzahl der Gäste',
          people: 'Personen',
          date: 'Datum',
          time: 'Uhrzeit',
          submit: 'Buchung bestätigen'
        }
      },
      specialties: {
        subtitle: 'Empfehlung',
        title: 'UNSERE BESTEN SPEZIALITÄTEN',
        description: 'Sorgfältig zubereitet mit größter Sorgfalt, repräsentiert unsere Signature Dosa den Höhepunkt der Südindischen Küche in Frankfurt. Diese goldene Südindische Crepe, gefüllt mit hochwertigen Gemüsen und aromatischen Gewürzen, verkörpert authentisches indisches Street Food & Manchurian Handwerkskunst in Vollendung.',
        button: 'MEHR ENTDECKEN'
      }
    }
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'de',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
