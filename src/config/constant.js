import { MdEmail, MdPhone, MdYard } from "react-icons/md";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import mango_pickle1 from "../assets/YumsieProducts/Pickle/IMG_3797.JPG";
import pickle1 from "../assets/YumsieProducts/Pickle/IMG_3799.JPG";
import pickle2 from "../assets/YumsieProducts/Pickle/IMG_3800.jpg";
import pickle3 from "../assets/YumsieProducts/Pickle/IMG_3801.jpg";
import pickle4 from "../assets/YumsieProducts/Pickle/IMG_3802.jpg";
import pickle5 from "../assets/YumsieProducts/Pickle/IMG_3803.jpg";
import pickle6 from "../assets/YumsieProducts/Pickle/IMG_3804.jpg";
import pickle7 from "../assets/YumsieProducts/Pickle/IMG_3805.jpg";
import pickle8 from "../assets/YumsieProducts/Pickle/IMG_3807.JPG";
import pickle9 from "../assets/YumsieProducts/Pickle/IMG_3808.JPG";
import pickle10 from "../assets/YumsieProducts/Pickle/IMG_3809.JPG";
import pickle11 from "../assets/YumsieProducts/Pickle/IMG_3810.JPG";
import pickle12 from "../assets/YumsieProducts/Pickle/IMG_3811.JPG";
import pickle13 from "../assets/YumsieProducts/Pickle/IMG_3816.JPG";
import pickle14 from "../assets/YumsieProducts/Pickle/IMG_3826.JPG";
import pickle15 from "../assets/YumsieProducts/Pickle/IMG_3827.JPG";
import pickle16 from "../assets/YumsieProducts/Pickle/IMG_3830.JPG";

import sauce1 from "../assets/YumsieProducts/Souce/IMG_3788.JPG";
import sauce2 from "../assets/YumsieProducts/Souce/IMG_3792.JPG";
import sauce3 from "../assets/YumsieProducts/Souce/IMG_3793.jpg";
import sauce4 from "../assets/YumsieProducts/Souce/IMG_3794.jpg";
import sauce5 from "../assets/YumsieProducts/Souce/IMG_3795.jpg";
import Sauces6 from "../assets/YumsieProducts/650/IMG_3839.JPG";
import Sauces7 from "../assets/YumsieProducts/650/IMG_3844.JPG";
import Sauces8 from "../assets/YumsieProducts/650/IMG_3847.JPG";
import Sauces9 from "../assets/YumsieProducts/650/IMG_0158.JPG";


import paste1 from "../assets/YumsieProducts/GGP/IMG_3818.JPG";
import paste2 from "../assets/YumsieProducts/GGP/IMG_3819.JPG";
import paste3 from "../assets/YumsieProducts/GGP/IMG_3820.JPG";
import paste4 from "../assets/YumsieProducts/GGP/IMG_3930.jpg";

import continentalSauce from "../assets/YumsieProducts/1.2/IMG_3865.jpg";
import GingerGarlicPaste from "../assets/YumsieProducts/GGP/IMG_3824.jpg";
import MixedPickle from "../assets/YumsieProducts/Pickle/IMG_3799.JPG";
import GreenChiliPickle from "../assets/YumsieProducts/Pickle/IMG_3800.jpg";
import Pickles from "../assets/YumsieProducts/Pickle/IMG_3811.JPG";
import Sauces from "../assets/YumsieProducts/650/IMG_3853.jpg";

import Mayonnaise from "../assets/YumsieProducts/mayonnaise/IMG_0013.JPG";
import Mayonnaise1 from "../assets/YumsieProducts/mayonnaise/IMG_0098.JPG";

// For Contact Us Page:-
export const contacts = [
  {
    Icon: FaFacebook,
    color: "blue",
    title: "Facebook",
    description: "Join us on Facebook.",
    buttonText: "Visit Facebook",
    buttonLink: "https://www.facebook.com/share/1ASBxxAUsS/?mibextid=wwXIfr",
  },
  // {
  //   icon: <FaLinkedin size={30} color="#0A66C2" />,
  //   title: "LinkedIn",
  //   description: "Join us on LinkedIn.",
  //   buttonText: "Visit LinkedIn",
  //   buttonLink: "https://www.linkedin.com/company/geneus-solutions",
  // },
  {
    Icon: FaInstagram,
    color: "#E4405F",
    title: "Instagram",
    description: "Follow us on Instagram.",
    buttonText: "Visit Instagram",
    buttonLink: "https://www.instagram.com/yumsiefood?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    Icon: MdEmail,
    color: "#EA4335",
    title: "Email Us",
    description: "Send us an email anytime.",
    buttonText: "Send Mail",
    buttonLink: "mailto:supportInfo@yumsiefoods.com",
  },
  {
    Icon: MdPhone,
    color: "#10B981",
    title: "Call Us",
    description: "We're just a call away.",
    buttonText: "Call Now",
    buttonLink: "tel:+918800123456",
  },
];

// Home Carousel Slides Data:-

export const HomeCarouselSlides = [
  {
    title: "Taste the Tradition with Yumsie Pickles",
    brand: "Yumsie",
    description:
      "From tangy mango to spicy chili and zesty lemon, Yumsie's range of traditional Indian pickles brings home the true flavor of heritage. Handcrafted in small batches with natural ingredients and no preservatives.",
    image1: Pickles,
    buttonText: "EXPLORE PICKLES",
  },
  {
    title: "Bold Flavors in Every Drop",
    brand: "Yumsie",
    description:
      "Whether it's hot chili sauce, smoky barbecue, or creamy garlic dip — Yumsie's gourmet sauces elevate every bite. Perfect for dipping, marinating, or finishing touches on your favorite dishes.",
    image1: Sauces,
    buttonText: "EXPLORE SAUCES",
  },
  {
    title: "Freshly Ground. Instantly Flavorful.",
    brand: "Yumsie",
    description:
      "Yumsie's Ginger Garlic Paste blends the warmth of fresh ginger with the boldness of garlic — a must-have base for curries, stir-fries, and marinades. No peeling, no chopping — just pure, ready-to-use aroma and taste.",
    image1: GingerGarlicPaste,
    buttonText: "EXPLORE PASTES",
  },
];

// Product Carousel data:-
export const ProductData = [
  // {
  //   title: "Continental Sauce",
  //   ingredients: 7,
  //   time: "35 minutes",
  //   calories: "326 cals/serving",
  //   image: continentalSauce,
  // },
  {
    title: "Pickles",
    ingredients: 13,
    time: "20 minutes",
    calories: "385 cals/serving",
    image: Pickles,
  },
  {
    title: "Sauces",
    ingredients: 13,
    time: "20 minutes",
    calories: "385 cals/serving",
    image: sauce5,
  },
  {
    title: "Ginger Garlic Paste",
    ingredients: 13,
    time: "20 minutes",
    calories: "385 cals/serving",
    image: GingerGarlicPaste,
  },
  {
    title: "Mixed Pickle",
    ingredients: 13,
    time: "20 minutes",
    calories: "385 cals/serving",
    image: MixedPickle,
  },
  {
    title: "Green Chili Pickle",
    ingredients: 13,
    time: "20 minutes",
    calories: "385 cals/serving",
    image: GreenChiliPickle,
  },
];

// Faq Data:-

export const faqs = [
  {
    question: "What is a food processing manufacturing company?",
    answer:
      "A food processing manufacturing company transforms raw ingredients into packaged food products using specialized equipment and processes.",
  },
  {
    question: "What services does YUMSIE offer?",
    answer:
      "YUMSIE offers private label manufacturing, co-packing, product development, and distribution support services.",
  },
  {
    question: "What is 3rd party Manufacturing?",
    answer:
      "It refers to outsourcing product manufacturing to a third-party company that produces goods under your brand name.",
  },
  {
    question:
      "What steps are followed to ensure the safety of the manufactured goods?",
    answer:
      "We follow HACCP, regular inspections, and lab testing to ensure safety and quality standards are met.",
  },
  {
    question: "What is your clientele?",
    answer:
      "Our clientele includes B2B partners, retail chains, food brands, and international distributors.",
  },
  {
    question: "What are your product offerings?",
    answer:
      "We offer a range of processed food products including ready-to-eat meals, sauces, spices, and snacks.",
  },
  {
    question: "What manufacturing techniques are you following?",
    answer:
      "We use advanced techniques such as vacuum drying, aseptic packaging, and batch processing.",
  },
  {
    question:
      "How do food processing manufacturing companies address sustainability and environmental concerns?",
    answer:
      "We minimize waste, use eco-friendly packaging, and adopt energy-efficient manufacturing methods.",
  },
  {
    question: "Are the hygiene standards of your company rated?",
    answer:
      "Yes, we are regularly audited and certified for hygiene standards by independent bodies.",
  },
  {
    question: "What certifications do you have?",
    answer:
      "We are ISO 22000, FSSAI, and HACCP certified for food safety and quality assurance.",
  },
  {
    question: "Since how long have you been in the industry?",
    answer:
      "We have been serving the food processing industry for over 15 years.",
  },
];

//Home and blogs page data cart componet blogs data :-

export const blogsCard = [
  {
    title: "The Magic of Cooking Paste in Adding Flavor to Your Daily Delights",
    author: "Yumsie Agro",
    image: mango_pickle1, // Replace with actual paths or URLs
    path: "/blogs/pickles",
  },
  {
    title: "A Tangy Tale: Pickles – India's Beloved Culinary Treasure",
    author: "Yumsie Agro",
    image: paste1,
    path: "/blogs/mayonnaise",
  },
  {
    title: "Adding a Fiery Twist to Your Daily Meals with Schezwan Chutney",
    author: "Yumsie Agro",
    image: sauce1,
    path: "/blogs/sauces",
  },
];

// there are all blogs:-

export const blogs = [
  {
    id: "pickles",
    title: "A Tangy Tale: Pickles – India's Beloved Culinary Treasure",
    image: mango_pickle1,
    content: `
Pickles are a cherished part of Indian cuisine, offering a burst of flavor and a link to cultural traditions passed through generations.

1. Preserving Culture:
Each region in India has its own distinct pickling style—from spicy Andhra avakaya to sweet Gujarati chhundo.

2. Seasonal Specialties:
Most pickles are made in summer when mangoes, lemons, and chilies are harvested at their peak.

3. Natural Preservation:
Traditional pickles use oil, salt, and sun-drying to preserve fruits and vegetables without artificial preservatives.

4. Variety Beyond Mango:
While mango is the most popular, Indian pickles are also made from gooseberries, garlic, carrots, lotus stem, and even fish.

5. Taste Enhancer:
Just a spoonful of pickle elevates simple meals like dal-rice or paratha to the next level.

6. Fermentation Benefits:
Some pickles undergo natural fermentation, contributing to gut health by introducing probiotics.

7. Homemade vs. Store-bought:
Homemade pickles often carry nostalgic flavors, while store-bought ones provide convenience and consistency.

8. Global Adaptation:
Indian pickles have found global recognition, appearing in fusion dishes like pickle sandwiches and spicy spreads.
    `,
  },
  {
    id: "mayonnaise",
    title:
      "More Than Just a Spread: The Versatility of Mayonnaise in Modern Cooking",
    image: paste1,
    content: `
Mayonnaise is often underestimated as a basic condiment, but it's actually one of the most flexible and essential ingredients in a modern kitchen.

1. Smooth Base for Dressings:
From Caesar to ranch, mayonnaise is the creamy foundation for countless salad dressings.

2. Moisture Retention:
Adding mayo to baked dishes or grilled sandwiches keeps the inside moist and flavorful.

3. Emulsifying Power:
Mayonnaise acts as an emulsifier, binding oil and water to create creamy, stable mixtures.

4. Flavor Carrier:
It enhances other seasonings and herbs, making it a perfect base for flavored spreads or dips.

5. Shortcuts to Gourmet:
Blend with garlic, herbs, or hot sauce to create easy aioli variations at home.

6. Unexpected Baking Hero:
Mayonnaise can be used in cakes (especially chocolate) to keep them soft and moist.

7. Versatile for Diets:
Available in vegan, low-fat, and eggless versions to suit dietary needs without sacrificing taste.

8. Great for Marinades:
Its acidity and fat help tenderize meat and infuse flavor when used in marinades.
    `,
  },
  {
    id: "sauces",
    title:
      "The Soul of Every Dish: Exploring the Role of Sauces in Culinary Arts",
    image: sauce1,
    content: `
Sauces are essential to cuisine across the globe, acting as the final brushstroke that transforms a meal from ordinary to extraordinary.

1. Foundational Flavors:
French cuisine identifies five "mother sauces" (béchamel, velouté, espagnole, hollandaise, tomato) as bases for endless variations.

2. Global Identity:
From soy sauce in Asia to chimichurri in South America, sauces reflect regional tastes and traditions.

3. Balance & Contrast:
Sauces can add contrast—like acidity to balance richness, or sweetness to offset spice.

4. Texture & Moisture:
They improve mouthfeel and moisture in dishes like grilled meats, pastas, or rice bowls.

5. Color & Presentation:
A glossy sauce adds visual appeal, making the dish look professionally finished.

6. Customization at the Table:
They let diners personalize flavor—think hot sauce on tacos or chutney with samosas.

7. Preservation & Concentration:
Many sauces are reductions, meaning their flavors are concentrated and preserved longer.

8. Cross-Cuisine Fusion:
Modern chefs blend sauces from different cuisines—like teriyaki-glazed tacos or sriracha mayo burgers—for new flavor experiences.
    `,
  },
];

// product page product data:-
// src/data/productData.js

export const productData = {
  pickles: {
    heading: "Pickles That Pop",
    subheading: "Tangy, spicy, and bold...",
    description: `Our pickles are aged and spiced to perfection, offering a burst of authentic Indian flavors.`,
    products: [
      {
        title: "Mix Pickle",
        sizes: ["1 kg", "500 gm", "200 gm"],
        images: [pickle16, pickle1, pickle3], 
      },
      {
        title: "Mango Pickle",
        sizes: ["1 kg", "500 gm", "200 gm"],
        images: [pickle15,  pickle4,mango_pickle1], 
      },
      {
        title: "Green Chilli Pickle",
        sizes: ["1 kg", "500 gm", "200 gm"],
        images: [pickle14, pickle5, pickle6], 
      },
    ],
    images: {
      banner: "/images/banner-pickles.jpg",
    },
  },
  'tomato-ketchup': {
    heading: "Experience Saucy Goodness",
    subheading: "for every meal...",
    description: `Our Tomato Ketchup is a classic favorite, perfect for dipping, cooking, and adding a tangy-sweet flavor to your meals.`,
    products: [
      {
        title: "Tomato Ketchup",
        sizes: ["1 kg", "500 gm", "200 gm"],
        images: [sauce1, sauce2], 
      },
    ],
    images: {
      banner: "/images/banner-sauces.jpg", 
    },
  },
  'culinary-sauces-vinegar': {
    heading: "Culinary Sauces & Vinegar",
    subheading: "Elevate your dishes...",
    description: `A range of versatile sauces and vinegars to enhance any meal, from spicy delights to zesty dressings.`,
    products: [
      {
        title: "Green Chilli Sauce",
        sizes: ["650 gm", "200 gm"],
        images: [sauce4, Sauces7], 
      },
      {
        title: "Red Chilli Sauce",
        sizes: ["650 gm", "200 gm"],
        images: [sauce3, Sauces6], 
      },
      {
        title: "Soya Sauce",
        sizes: ["650 gm", "200 gm"],
        images: [sauce1, Sauces8], 
      },
      {
        title: "White Vinegar",
        sizes: ["610 ml", "180 ml"],
        images: [Sauces9], 
      },
    ],
    images: {
      banner: "/images/banner-culinary-sauces.jpg",
    },
  },
  'speciality-sauce': {
    heading: "Speciality Sauces",
    subheading: "Unique flavors, unforgettable taste...",
    description: `Explore our unique collection of speciality sauces crafted to perfection for an unforgettable culinary experience.`,
    products: [
      {
        title: "Momo's Sauce",
        sizes: ["1 kg", "200 gm"],
        images: [sauce1], 
      },
      {
        title: "Pizza Pasta Sauce",
        sizes: ["1 kg", "200 gm"],
        images: [sauce2], 
      },
      {
        title: "Schezwan Sauce",
        sizes: ["1 kg", "200 gm"],
        images: [sauce3], 
      },
      {
        title: "Chilly Garlic Sauce",
        sizes: ["1 kg", "200 gm"],
        images: [sauce4], 
      },
    ],
    images: {
      banner: "/images/banner-speciality-sauce.jpg",
    },
  },
  'mayonnaise-derivatives': {
    heading: "Mayonnaise & Derivatives",
    subheading: "Creamy, rich, and versatile...",
    description: `Our creamy mayonnaise and its delicious derivatives are perfect for enhancing sandwiches, salads, and countless other dishes.`,
    products: [
      {
        title: "Eggless Mayonnaise",
        sizes: ["1 kg", "200 gm"],
        images: [Mayonnaise, Mayonnaise1], 
      },
      {
        title: "Cheese Mayonnaise",
        sizes: ["1 kg", "200 gm"],
        images: [sauce2], 
      },
      {
        title: "Tandoori Mayonnaise",
        sizes: ["1 kg", "200 gm"],
        images: [sauce3], 
      },
      {
        title: "Thousand Island",
        sizes: ["1 kg", "200 gm"],
        images: [sauce4], 
      },
    ],
    images: {
      banner: "/images/banner-mayonnaise.jpg",
    },
  },
  'cooking-paste': {
    heading: "Discover CULINARY DELIGHTS",
    subheading: "at your fingertips...",
    description: `Discover a world of flavor with our exquisite selection of cooking pastes, essential for authentic and flavorful meals.`,
    products: [
      {
        title: "Ginger Garlic Paste",
        sizes: ["25 gm", "200 gm", "500 gm", "1 kg"],
        images: [GingerGarlicPaste, paste1, paste2], 
      },
    ],
    images: {
      banner: "/images/banner-pastes.jpg",
    },
  },
  'canned-food': {
    heading: "Canned Food",
    subheading: "Convenience meets quality...",
    description: `High-quality canned foods for quick and easy meals, preserving freshness and flavor for your convenience.`,
    products: [
      {
        title: "Tomato Puree",
        sizes: ["825 gm"],
        images: [pickle7], 
      },
      {
        title: "Button Mushroom",
        sizes: ["800 gm"],
        images: [pickle8], 
      },
    ],
    images: {
      banner: "/images/banner-canned-food.jpg",
    },
  },
};
