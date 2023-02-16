import React from "react";
import { Link } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

function Tickets() {
  const [localData] = useLocalStorage("localData", []);

  return (
    <>
      <header className="max_width px-4 py-10 flex">
        <h1 className="text-5xl font-bold text-center "> All Tickets</h1>
      </header>
      <section
        className={
          " place-items-center grid md:grid-cols-2 m-auto max-w-5xl p-5 gap-4 "
        }
      >
        {localData.length ? (
          localData.map((i) => (
            <Link
              key={i.showId}
              to={`/show/${i.showId}`}
              className="grid grid-cols-2 gap-2 shadow-lg rounded-lg"
            >
              {/*image*/}
              <div className=" h-[20rem]">
                <img
                  src={
                    i.imageUrl
                      ? i.imageUrl
                      : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
                  }
                  alt={i.showName}
                  className=" rounded-l-lg"
                />
              </div>

              {/*user details*/}
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-bold ">
                  Show Title : {i.showName}
                </h2>
                <div className="flex gap-2 font-semibold">
                  <p className="text-lg "> {i.selectedDay}</p>
                  <p className="text-lg">{i.selectedTime}</p>
                </div>
                <div className="flex flex-col gap-2 font-medium">
                  <p> Name : {i.name}</p>
                  <p> Email : {i.email}</p>
                  <p> Phone : {i.phone}</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div>No tickets available. Book few tickets and come back</div>
        )}
      </section>
    </>
  );
}

export default Tickets;
