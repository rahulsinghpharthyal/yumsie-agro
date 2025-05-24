import { MdEmail, MdPhone } from "react-icons/md";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import mango_pickle1 from "../assets/YumsieProducts/Pickle/IMG_3797.JPG";
import pickle1 from "../assets/YumsieProducts/Pickle/IMG_3799.JPG";
import pickle2 from "../assets/YumsieProducts/Pickle/IMG_3800.JPG";
import pickle3 from "../assets/YumsieProducts/Pickle/IMG_3801.JPG";
import pickle4 from "../assets/YumsieProducts/Pickle/IMG_3802.JPG";
import pickle5 from "../assets/YumsieProducts/Pickle/IMG_3803.JPG";
import pickle6 from "../assets/YumsieProducts/Pickle/IMG_3804.JPG";
import pickle7 from "../assets/YumsieProducts/Pickle/IMG_3805.JPG";
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
import sauce3 from "../assets/YumsieProducts/Souce/IMG_3793.JPG";
import sauce4 from "../assets/YumsieProducts/Souce/IMG_3794.JPG";
import sauce5 from "../assets/YumsieProducts/Souce/IMG_3795.JPG";

import paste1 from "../assets/YumsieProducts/GGP/IMG_3818.JPG";
import paste2 from "../assets/YumsieProducts/GGP/IMG_3819.JPG";
import paste3 from "../assets/YumsieProducts/GGP/IMG_3820.JPG";
import paste4 from "../assets/YumsieProducts/GGP/IMG_3930.JPG";

import continentalSauce from "../assets/YumsieProducts/1.2/IMG_3865.JPG";
import Sauces from "../assets/YumsieProducts/Souce/IMG_3795.JPG";
import GingerGarlicPaste from "../assets/YumsieProducts/GGP/IMG_3824.JPG";
import MixedPickle from "../assets/YumsieProducts/Pickle/IMG_3799.JPG";
import GreenChiliPickle from "../assets/YumsieProducts/Pickle/IMG_3800.JPG";
import Pickles from "../assets/YumsieProducts/Pickle/IMG_3811.JPG";

// For Contact Us Page:-
export const contacts = [
  // {
  //   icon: <FaFacebook size={30} color="#1877F2" />,
  //   title: "Facebook",
  //   description: "Join us on Facebook.",
  //   buttonText: "Visit Facebook",
  //   buttonLink: "https://www.facebook.com/geneus.solutions",
  // },
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
    buttonLink: "https://www.instagram.com/geneus.solutions",
  },
  {
    Icon: MdEmail,
    color: "#EA4335",
    title: "Email Us",
    description: "Send us an email anytime.",
    buttonText: "Send Mail",
    buttonLink: "mailto:support@geneussolutions.in",
  },
  {
    Icon: MdPhone,
    color: "#10B981",
    title: "Call Us",
    description: "We’re just a call away.",
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
      "Whether it’s hot chili sauce, smoky barbecue, or creamy garlic dip — Yumsie’s gourmet sauces elevate every bite. Perfect for dipping, marinating, or finishing touches on your favorite dishes.",
    image1: Sauces,
    buttonText: "EXPLORE SAUCES",
  },
  {
    title: "Freshly Ground. Instantly Flavorful.",
    brand: "Yumsie",
    description:
      "Yumsie’s Ginger Garlic Paste blends the warmth of fresh ginger with the boldness of garlic — a must-have base for curries, stir-fries, and marinades. No peeling, no chopping — just pure, ready-to-use aroma and taste.",
    image1: GingerGarlicPaste,
    buttonText: "EXPLORE PASTES",
  },
];

// Product Carousel data:-
export const ProductData = [
  {
    title: "Continental Sauce",
    ingredients: 7,
    time: "35 minutes",
    calories: "326 cals/serving",
    image: continentalSauce,
  },
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
    image: Sauces,
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
    title: "A Tangy Tale: Pickles – India’s Beloved Culinary Treasure",
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
    title: "A Tangy Tale: Pickles – India’s Beloved Culinary Treasure",
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
Mayonnaise is often underestimated as a basic condiment, but it’s actually one of the most flexible and essential ingredients in a modern kitchen.

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
French cuisine identifies five “mother sauces” (béchamel, velouté, espagnole, hollandaise, tomato) as bases for endless variations.

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
  pastes: {
    heading: "Discover CULINARY DELIGHTS",
    subheading: "at your fingertips...",
    description: `Discover a world of flavor with our exquisite selection of cooking pastes...`,
    pastes: [
      {
        title: "Garlic Paste",
        text: "Our Garlic paste is made from handpicked garlic cloves...",
      },
      {
        title: "Ginger Paste",
        text: "Made from freshly harvested ginger roots...",
      },
      {
        title: "Ginger Garlic Paste",
        text: "A harmonious blend of fresh ginger and garlic...",
      },
    ],
    images: {
      banner: "/images/banner-pastes.jpg",
      items: [GingerGarlicPaste, paste1, paste2, paste3, paste4],
    },
  },
  sauces: {
    heading: "Experience Saucy Goodness",
    subheading: "for every meal...",
    description: `Our sauces are the perfect blend of rich ingredients and flavors...`,
    pastes: [
      {
        title: "Tomato Sauce",
        text: "Fresh tomatoes cooked and pureed for a classic sauce...",
      },
      {
        title: "Chili Sauce",
        text: "Spicy, bold, and perfect for heat lovers...",
      },
    ],
    images: {
      banner: "/images/banner-sauces.jpg",
      items: [sauce1,sauce2,sauce3,sauce4,sauce5,],
    },
  },
  pickles: {
    heading: "Pickles That Pop",
    subheading: "Tangy, spicy, and bold...",
    description: `Our pickles are aged and spiced to perfection...`,
    pastes: [
      {
        title: "Mango Pickle",
        text: "Sun-dried mangoes pickled with traditional spices...",
      },
      {
        title: "Lime Pickle",
        text: "Tangy limes mixed with chili and mustard seeds...",
      },
    ],
    images: {
      banner: "/images/banner-pickles.jpg",
      items: [
        pickle1,
        pickle2,
        pickle3,
        pickle4,
        pickle5,
        pickle6,
        pickle7,
        pickle8,
        pickle9,
        pickle10,
        pickle11,
        pickle12,
        pickle13,
        pickle14,
        pickle15,
        pickle16,
      ],
    },
  },
};
