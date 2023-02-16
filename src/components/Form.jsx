import React, { useState } from "react";
import toast from "../components/Toast";
import useLocalStorage from "../hooks/useLocalStorage";
export default function UserForm({ show, setShowForm }) {
  const [localData, setLocalData] = useLocalStorage("localData", []);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    selectedDay: "",
    showName: show.name,
    imageUrl: show.image.original,
    selectedTime: show.schedule.time,
    showId: show.id,
  });
  const handleFormSubmit = (e) => {
    e.preventDefault();
    localData.push(userDetails);
    setLocalData(localData);
    setShowForm(false);

    setUserDetails({ name: "", email: "", phone: "" });
    toast({
      type: "success",
      message: "Purchase Successful",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className=" top-0 h-full flex bg-blue-100/95  absolute  w-full">
      <div
        className={
          "relative border-blue-900 bg-gray-50 border place-items-center grid md:grid-cols-2 m-auto max-w-md p-5 gap-4    "
        }
      >
        <div className=" h-[12rem] md:h-[15rem]">
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
        <div className="">
          <div className="font-semibold mb-4">
            <p>
              {`Complete the booking for `} <b>{show.name}</b>
            </p>
            <p>
              Playing at <span>{show.schedule.time}</span>
            </p>
          </div>
          <form
            className="flex flex-col  form-container max-w-xl my-0 mx-auto"
            onSubmit={handleFormSubmit}
          >
            <label className="block mb-1" htmlFor="selectedDay">
              Select the Booking Day
            </label>
            <select
              name="selectedDay"
              value={userDetails.selectedDay}
              onChange={handleInputChange}
            >
              <option value="">Please select an option</option>
              {show.schedule.days.map((day) => {
                return (
                  <option key={day} value={day}>
                    {day}
                  </option>
                );
              })}
            </select>

            <button
              onClick={() => setShowForm(false)}
              className="absolute top-0 right-0  md:-top-16 px-3 md:-mr-8  rounded  text-3xl  inline-flex justify-center items-center "
            >
              X
            </button>

            <div className="w-full">
              <label className="block mb-1" htmlFor="name">
                Enter your name:
              </label>
              <input
                className="focus:outline-none focus:border-blue-300 block w-full p-3 mb-5 border border-solid border-gray-400  rounded-lg "
                type="text"
                name="name"
                value={userDetails.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block mb-1" htmlFor="email">
                Enter your email:
              </label>
              <input
                className="focus:outline-none focus:border-blue-300 block w-full p-3 mb-5 border border-solid border-gray-400  rounded-lg "
                type="email"
                name="email"
                value={userDetails.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block mb-1" htmlFor="phone">
                Enter your phone number:
              </label>
              <input
                className="focus:outline-none focus:border-blue-300 block w-full p-3 mb-5 border border-solid border-gray-400  rounded-lg "
                type="tel"
                name="phone"
                value={userDetails.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex justify-center ">
              <button
                className=" text-white px-5 py-2   rounded-md  cursor-pointer inline-block   transition duration-200 m-auto bg-blue-500 ease-in hover:bg-blue-300  "
                type="submit"
              >
                Book Ticket
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
