import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <Link
      to={`/show/${data.id}`}
      className="block shadow-md overflow-hidden transition duration-200 ease-in transform hover:scale-105"
    >
      <div className="h-40 sm:h-60 lg:h-80 w-full bg-gray-300 relative">
        <img
          src={
            data.image
              ? data.image.original
              : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
          }
          alt={data.name}
          className="object-cover h-full w-full"
        />
        <div className="absolute bottom-0 w-full bg-black bg-opacity-50 px-4 py-2">
          <h2 className="text-white text-lg font-bold">{data.name}</h2>
          <p className="text-gray-300 hidden sm:block text-sm">
            {data.genres.join(", ")}
          </p>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <span className="text-cyan-500 mr-1">
              {Number(data.rating.average || "6.5").toFixed(1)}
            </span>
            <span className="text-gray-500 text-sm">Rating</span>
          </div>
          <span className="text-gray-500 hidden sm:inline text-sm">
            {data.status}
          </span>
        </div>
        <div className="flex justify-end">
          <span className="text-gray-500 text-sm">More Info</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1 text-gray-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6.293 6.293a1 1 0 011.414 0l3.172 3.172a1 1 0 010 1.414l-3.172 3.172a1 1 0 01-1.414-1.414L7.586 10 6.293 8.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default Card;
