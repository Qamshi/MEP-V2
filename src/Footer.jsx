import React from 'react';

const Footer = () => {
  const handleIconClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <footer className="bg-transparent py-2">
      <div className="max-w-[639px] h-[50px] mx-auto flex flex-col items-center justify-between">
        <div className="flex items-center">
          {/* Add your content here */}
        </div>
        <div className="w-full flex justify-between px-4">
          <div className="flex items-center">
            <div
              className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-400 shadow-small mr-2 flex items-center justify-center cursor-pointer"
              onClick={() => handleIconClick('https://www.facebook.com')}
            >
              <i className="fab fa-facebook-f text-white text-sm"></i>
            </div>
            <div
              className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-400 shadow-small mr-2 flex items-center justify-center cursor-pointer"
              onClick={() => handleIconClick('https://www.instagram.com')}
            >
              <i className="fab fa-instagram text-white text-sm"></i>
            </div>
            <div
              className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-400 shadow-small flex items-center justify-center cursor-pointer"
              onClick={() => handleIconClick('https://www.github.com')}
            >
              <i className="fab fa-github text-white text-sm"></i>
            </div>
          </div>
          <div className="text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Market Ease Plus</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;