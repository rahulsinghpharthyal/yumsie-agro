
const SocialLinkOption = ({ contacts }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 mt-10 mb-10">
      {contacts.map(
        (
          { Icon, color, title, description, buttonText, buttonLink },
          index
        ) => (
          <div
            key={index}
            className="w-64 p-6 rounded-xl shadow-md border border-gray-200 bg-white hover:shadow-lg transition-all"
          >
            <div className="flex justify-center mb-4">
              <Icon size={30} color={color} className="mx-auto mb-4" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 text-center">
              {title}
            </h3>
            <p className="text-sm text-gray-600 mt-2 mb-4 text-center">
              {description}
            </p>
            <a
              href={buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center mt-auto bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-md transition"
            >
              {buttonText}
            </a>
          </div>
        )
      )}
    </div>
  );
};

export default SocialLinkOption;
