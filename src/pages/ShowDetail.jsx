import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ExternalLinks from "../components/ExternalLinks";
import UserForm from "../components/Form";
import Network from "../components/Network";
import SkeletonImage from "../components/SkeletonImage";
import Toast from "../components/Toast";
function ShowDetail() {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchShow = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const data = await response.json();
        setShow(data);
      } catch (error) {
        Toast({
          type: "error",
          message: "Error Fetching Show Details",
        });
      }
    };
    fetchShow(id);
  }, [id]);

  return (
    <div className={`${showForm ? "overflow-hidden" : ""} relative `}>
      <Link
        to="/"
        className="  px-5 py-2   rounded-md  cursor-pointer inline-block  my-6 mx-10 transition duration-200 bg-gray-300 ease-in hover:text-black hover:bg-gray-500"
      >
        Back To Home
      </Link>
      {show ? (
        <section
          className={`max_width    px-4 grid md:grid-cols-2 lg:grid-cols-3 h-screen place-items-center  gap-4 
      `}
        >
          {/* img section  */}
          <div className="h-[25rem] md:h-[35rem]">
            <img
              src={
                show.image
                  ? show.image.original
                  : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
              }
              alt={show.name}
              className="rounded-xl"
            />
          </div>

          {/* summary section  */}
          <div className="lg:col-span-2 space-y-5 max-w-[50rem] ">
            <h1 className="text-6xl font-bold text-center py-2">{show.name}</h1>
            <div className="flex justify-between items-center gap-4 ">
              <div>
                {show.genres.map((genre) => (
                  <span
                    key={genre}
                    className=" bg-yellow-200   rounded-lg px-3 py-1 mr-3"
                  >
                    {genre}
                  </span>
                ))}
              </div>

              {show.status === "Ended" ? (
                <button
                  className="bg-black px-4 py-1 text-xl font-semibold rounded-2xl text-white"
                  disabled
                >
                  Show Ended
                </button>
              ) : (
                <button
                  className="  bg-blue-500 tex px-5 py-2  text-white rounded-md  cursor-pointer text-xl font-semibold  hover:bg-blue-700/80 "
                  onClick={() => setShowForm(true)}
                >
                  Book Show
                </button>
              )}
            </div>
            <div className=" px-2  ">
              <h1 className=" font-bold text-xl mb-1">DETAILS:</h1>
              <p className="">
                Status :<span className="font-semibold"> {show.status}</span>
              </p>
              <p className="">First air date: {show.premiered || "Unknown"}</p>
              <p className="">Spoken language: {show.language}</p>
              <p className="">
                Runtime: {show.runtime ? show.runtime + " minutes" : "Unknown"}
              </p>
              <a
                target="_blank "
                className="text-xl text-blue-400 underline  "
                rel="noopener noreferrer"
                href={show.officialSite}
              >
                More Details
              </a>
            </div>
            <div className="px-2">
              <h1 className="font-bold text-xl mb-1 ">STORY:</h1>
              <p className="leading-6">
                {show.summary.replace(/(<([^>]+)>)/gi, "")}
              </p>
            </div>
            <div className="flex  flex-col lg:flex-row">
              {show.network && (
                <div className=" px-2 pb-10">
                  <h1 className=" font-bold text-xl mb-1">Network Details:</h1>
                  <Network network={show.network}></Network>
                </div>
              )}
              <div className="text-para_text px-2 pb-10">
                <h1 className=" font-bold text-xl mb-1">External Links:</h1>
                <ExternalLinks externals={show.externals}></ExternalLinks>
              </div>
            </div>
          </div>

          {showForm && (
            <UserForm show={show} setShowForm={setShowForm}></UserForm>
          )}
        </section>
      ) : (
        <SkeletonImage></SkeletonImage>
      )}
    </div>
  );
}
export default ShowDetail;
