import React from "react";

function Network({ network }) {
  return (
    <>
      <p className="text-lg">
        Network :
        <span className="font-semibold text-gray-700">
          {" " + network.name}
        </span>
      </p>
      <p className="text-lg">
        Network Origin Country :{" "}
        <span className="font-semibold text-gray-700">
          {" " + network.country.name}
        </span>
      </p>
      <a
        target="_blank"
        className="text-xl text-blue-400 underline  "
        rel="noopener noreferrer"
        href={network.officialSite}
      >
        {` Watch More Shows From ${network.name}`}
      </a>
    </>
  );
}

export default Network;
