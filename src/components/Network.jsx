import React from "react";

function Network({ network }) {
  return (
    <div className="">
      <div className="">Network : {network.name}</div>
      <div>Network Country : {network.country.name}</div>
      <a
        target="_blank"
        className="text-xl text-blue-400 underline  "
        rel="noopener noreferrer"
        href={network.officialSite}
      >
        {` Watch More Shows From ${network.name}`}
      </a>
    </div>
  );
}

export default Network;
