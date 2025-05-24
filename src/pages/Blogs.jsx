import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
   FaArrowLeft, FaArrowRight 
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { blogs } from "../config/constant";


const Blogs = () => {
  const { id } = useParams();

  const currentUrl = window.location.href;

  const currentIndex = blogs.findIndex((blog) => blog.id === id);
  const blog = blogs[currentIndex];

  const nextBlog = blogs[currentIndex + 1];
  const prevBlog = blogs[currentIndex - 1];

  if (!blog) return <p className="text-center mt-20">Blog not found</p>;
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800 mt-20">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full rounded-md mb-8"
      />
      <h1 className="text-3xl md:text-4xl font-semibold mb-6">{blog.title}</h1>

      {/* Render content as paragraphs */}
      <div className="space-y-4 text-lg leading-relaxed whitespace-pre-line">
        {blog.content}
      </div>
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-semibold mb-6">{blogs.title}</h1>

      {/* Content */}
      <div className="space-y-6 text-lg leading-relaxed">{blogs.content}</div>

      {/* Share Buttons (Optional) */}
      <div className="mt-10 flex space-x-4 text-sm">
        <span className="font-medium">Share:</span>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            currentUrl
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-blue-500"
        >
          <FaFacebook size={20} />
        </a>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            currentUrl
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-blue-400"
        >
          <FaLinkedin size={20} />
        </a>
        {/* Pinterest */}
        <a
          href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
            currentUrl
          )}&media=${blog.image}&description=${encodeURIComponent(blog.title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-teal-500"
        >
          <FaPinterest size={20} />
        </a>

        {/* Instagram - not supported for direct web share */}
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-pink-500"
          title="Instagram doesn't support direct link sharing"
        >
          <FaInstagram size={20} />
        </a>
      </div>

      {/* Previous Post (Optional Footer Nav) */}

{/* Previous / Next Navigation */}
<div className="max-w-4xl mx-auto px-4 mt-12">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Previous Post */}
    {prevBlog ? (
      <Link
        to={`/blogs/${prevBlog.id}`}
        className="flex items-center gap-4 p-4 border rounded-lg hover:bg-gray-100 transition duration-200"
      >
        <FaArrowLeft className="text-blue-500" />
        <div>
          <p className="text-xs text-gray-500">Previous Post</p>
          <p className="text-blue-600 font-medium line-clamp-1">{prevBlog.title}</p>
        </div>
      </Link>
    ) : (
      <div />
    )}

    {/* Next Post */}
    {nextBlog ? (
      <Link
        to={`/blogs/${nextBlog.id}`}
        className="flex items-center justify-end gap-4 p-4 border rounded-lg hover:bg-gray-100 transition duration-200 text-right"
      >
        <div>
          <p className="text-xs text-gray-500">Next Post</p>
          <p className="text-blue-600 font-medium line-clamp-1">{nextBlog.title}</p>
        </div>
        <FaArrowRight className="text-blue-500" />
      </Link>
    ) : (
      <div />
    )}
  </div>
</div>

    </div>
  );
};

export default Blogs;
