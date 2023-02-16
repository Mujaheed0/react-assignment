import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <Link
      to={`/show/${data.id}`}
      className="shadow-xl  relative transition duration-200 ease-in transform hover:scale-110"
    >
      <div className="h-[10rem]  sm:h-[20rem] lg:h-[25rem]">
        <img
          src={
            data.image
              ? data.image.original
              : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
          }
          alt={data.name}
          className="rounded-t-md"
        />
      </div>
      <h1 className=" rounded-b-md text-center bg-slate-700 text-white py-2 text-xl">
        {data.name}
      </h1>
      <div className="absolute top-2 right-0 pr-4 bg-cyan-500 rounded-l-full pl-2 py-1 text-sm  items-center gap-1">
        <span>{Number(data.rating.average || "6.5").toFixed(1)}</span>
      </div>
    </Link>
  );
};

export default Card;
