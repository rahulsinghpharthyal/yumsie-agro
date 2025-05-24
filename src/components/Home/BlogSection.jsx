import BlogCardHome from "./BlogCardHome";
import { blogsCard } from "../../config/constant";
import { Link } from "react-router-dom";

const BlogSection = () => {
  return (
    <section className="px-4 py-12 md:px-16">
      {/* Heading & Link */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-semibold">Our Blogs</h2>
        <Link
          to="/blogs"
          className="text-teal-500 font-medium flex items-center justify-center space-x-1 hover:underline"
        >
          <span>Read our blog</span>
          <span>→</span>
        </Link>
      </div>

      {/* Underline */}
      <div className="h-1 w-20 bg-teal-400 mb-8 rounded mx-auto md:mx-0"></div>

      {/* Blog Cards */}
      <BlogCardHome blogs={blogsCard} />
    </section>
  );
};

export default BlogSection;
