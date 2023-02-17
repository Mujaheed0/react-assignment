import React from "react";
import { Link } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

function Tickets() {
  const [localData] = useLocalStorage("localData", []);

  return (
    <>
      <header className="max_width px-10 py-10 flex">
        <h1 className="text-5xl font-bold  "> All Tickets</h1>
      </header>
      <section className="max-w-5xl m-auto p-5">
        {localData.length ? (
          <div className="grid md:grid-cols-2 gap-6">
            {localData.map((i) => (
              <Link
                key={i.showId}
                to={`/show/${i.showId}`}
                className="flex items-center px-6 py-4 bg-white rounded-lg shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mr-4 w-36 h-48">
                  <img
                    src={
                      i.imageUrl
                        ? i.imageUrl
                        : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
                    }
                    alt={i.showName}
                    className="object-cover rounded-lg w-full h-full"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{i.showName}</h2>
                    <div className="text-gray-500">
                      <p>{i.selectedDay}</p>
                      <p>{i.selectedTime}</p>
                    </div>
                  </div>
                  <div className="text-gray-500 font-medium">
                    <p> Name : {i.name}</p>
                    <p> Email : {i.email}</p>
                    <p> Phone : {i.phone}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center">
            <p className="text-lg mb-2">
              No tickets available. Book few tickets and come back.
            </p>
            <Link to="/" className="underline hover:no-underline">
              Book Tickets
            </Link>
          </div>
        )}
      </section>
    </>
  );
}

export default Tickets;
