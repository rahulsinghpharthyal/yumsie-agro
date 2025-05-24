import React from "react";
import { Link } from "react-router-dom";

const BlogCardHome = ({ blogs }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogs.map((blog, index) => (
        <div key={index} className=" overflow-hidden">
          <Link to={blog.path}>
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-60 object-cover rounded-md"
            />
          </Link>
          <div className="mt-4">
          <Link to={blog.path}>
            <p className="text-gray-600 text-sm mb-1">{blog.author}</p>
            <p className="text-gray-700 font-medium leading-snug opacity-20">
              {blog.title}
            </p>
          </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCardHome;
