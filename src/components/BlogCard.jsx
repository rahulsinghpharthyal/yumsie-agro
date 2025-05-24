import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const BlogCard = ({ blogs }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="bg-[#edf2f7] rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow"
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="h-48 w-full object-cover"
          />
          <div className="p-5 flex flex-col flex-grow">
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800">
              {blog.title}
            </h3>
            <p className="text-gray-600 text-sm flex-grow">
              {blog.content.slice(0, 140)}...
            </p>

            <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <FaUserCircle className="text-xl" />
                <span>Posted by <span className="text-gray-800 font-medium">admin</span></span>
              </div>
              <Link
                to={`/blogs/${blog.id}`}
                className="text-gray-600 hover:text-teal-500 transition-colors"
              >
                →
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCard;
