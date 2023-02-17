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
    <div
      className={`bg-gray-100 min-h-screen relative ${
        showForm ? "overflow-hidden" : ""
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center py-6 sticky">
          <Link
            to="/"
            className="text-lg font-medium text-gray-600 hover:text-gray-900"
          >
            &larr; Back To Home
          </Link>
          {show && (
            <button
              className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white transition duration-200 bg-blue-500 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50"
              disabled={show.status === "Ended"}
              onClick={() => setShowForm(true)}
            >
              {show.status === "Ended" ? "Show Ended" : "Book Show"}
            </button>
          )}
        </div>
        {show ? (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* img section  */}
            <div className="aspect-w-2 aspect-h-3 md:aspect-w-4 md:aspect-h-6 lg:aspect-w-3 lg:aspect-h-4 overflow-hidden">
              <img
                src={
                  show.image
                    ? show.image.original
                    : "https://via.placeholder.com/300x450.png?text=No+Image"
                }
                alt={show.name}
                className="object-cover w-full h-full"
              />
            </div>

            {/* summary section  */}
            <div className="lg:col-span-2 space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                {show.name}
              </h1>
              <div className="flex flex-wrap gap-2">
                {show.genres.map((genre) => (
                  <span
                    key={genre}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-200 text-gray-800"
                  >
                    {genre}
                  </span>
                ))}
              </div>
              <div className=" px-2  ">
                <p className="text-lg">
                  Status:{" "}
                  <span className="font-semibold text-gray-700">
                    {show.status}
                  </span>
                </p>
                <p className="text-lg">
                  First air date:{" "}
                  <span className="font-semibold text-gray-700">
                    {show.premiered || "Unknown"}
                  </span>
                </p>
                <p className="text-lg">
                  Spoken language:{" "}
                  <span className="font-semibold text-gray-700">
                    {show.language}
                  </span>
                </p>
                <p className="text-lg">
                  Runtime:{" "}
                  <span className="font-semibold text-gray-700">
                    {show.runtime ? show.runtime + " minutes" : "Unknown"}
                  </span>
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
              <div className="px-2  ">
                <h1 className="font-bold text-xl mb-1">STORY:</h1>
                <p className="leading-6 lg:leading-8">
                  {show.summary.replace(/(<([^>]+)>)/gi, "")}
                </p>
              </div>
              <div className="flex  flex-col md:flex-row col-span-2  md:col-span-1">
                {show.network && (
                  <div className=" pb-10">
                    <h1 className=" font-bold text-xl mb-1">
                      Network Details:
                    </h1>
                    <Network network={show.network}></Network>
                  </div>
                )}
                <div className=" px-2 pb-10">
                  <h1 className=" font-bold text-xl mb-1">External Links:</h1>
                  <ExternalLinks externals={show.externals}></ExternalLinks>
                </div>
              </div>{" "}
            </div>
          </section>
        ) : (
          <SkeletonImage></SkeletonImage>
        )}
      </div>{" "}
      {showForm && <UserForm show={show} setShowForm={setShowForm}></UserForm>}
    </div>
  );
}
export default ShowDetail;
