import React from 'react'

const Card = ({ recipeName, description, image }: any) => {
    return (
      <div className="flex justify-center">
        <div className="flex flex-col bg-gray-800 rounded-2xl p-5 w-64 items-center">
          {/* Image Container */}
          <div className="w-48 h-48 overflow-hidden rounded-md mb-4">
            <img
              className="w-full h-full object-cover"
              src={image}
              alt={recipeName}
            />
          </div>
  
          {/* Text Content */}
          <div className="text-center">
            <span className="text-2xl font-medium text-white block mb-1">
              {recipeName}
            </span>
            <span className="font-medium text-sky-500 block mb-4">
              {description}
            </span>
            <button className="bg-blue-300 rounded px-4 py-2 hover:bg-amber-500 cursor-pointer">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  };
  
export default Card