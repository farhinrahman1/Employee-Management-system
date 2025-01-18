import React from 'react';

const Header = () => {
  return (
    <header className="bg-black p-4 flex justify-between items-center">
        <span className="text-2xl font-semibold text-white">Hello Farhin</span>
          <div className="flex items-center font-semibold space-x-4 ml-auto">
            <button className="bg-red-700 text-white py-2 px-4 rounded-sm hover:bg-red-600">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;