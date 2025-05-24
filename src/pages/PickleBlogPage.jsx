import React from "react";
import BlogPage from "../components/BlogPage";

const content = (
  <>
    <p>
      Cooking paste is a powerful ally in the world of culinary delights, filling out regular meals with intriguing tastes...
    </p>
    <h2 className="font-semibold text-xl mt-6">1. Convenient Flavor Booster:</h2>
    <p>
      Cooking paste is a quick flavor enhancer that easily improves the taste of your dishes...
    </p>
    <h2 className="font-semibold text-xl mt-6">2. Authenticity in a Jar:</h2>
    <p>
      Cooking paste captures the essence of traditional flavors...
    </p>
    {/* Continue adding sections similarly... */}
    <p className="font-semibold mt-8">
      So embrace the magic of cooking paste and go on a sensory trip...
    </p>
  </>
);

const PickleBlogPage = () => {
  return (
    <BlogPage
      title="The Magic of Cooking Paste in Adding Flavor to Your Daily Delights"
      image="/images/blog1.jpg" // Replace with your image path
      content={content}
    />
  );
};

export default PickleBlogPage;
