import React from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

function Header() {
  const [localData] = useLocalStorage("localData", []);
  const navigate = useNavigate();
  return (
    <header className="max_width px-4 py-10 flex">
      <h1 className="text-5xl font-bold text-center "> Shows</h1>
      <div className="flex justify-end flex-grow">
        {localData.length ? (
          <button
            className="  bg-blue-500 tex px-5 py-2  text-white rounded-md  cursor-pointer "
            onClick={() => navigate("/tickets")}
          >
            Show Tickets
          </button>
        ) : null}
      </div>
    </header>
  );
}

export default Header;
