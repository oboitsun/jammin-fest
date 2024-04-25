"use client";
import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
const items = {
  Australia: {
    locations: ["Queensland", "New South Wales", "Western Australia", "Victoria"],
  },
  "New Zealand": {
    locations: ["CHRISTCHURCH", "WELLINGTON", "TAURANGA", "AUCKLAND"],
  },
};
export default function SubmitForm() {
  const [submitted, setSumbitted] = useState(false);
  const [country, setCountry] = useState();
  const [location, setLocation] = useState();
  const addMergeField = async () => {
    await axios.get("/api/maichimp-add-merge-field");
  };
  const handleSubmit = async (e) => {
    const formData = new FormData(e.target);
    e.preventDefault();
    if (formData.get("check")) {
      console.log(formData.get("check"));
      return;
    }

    await axios
      .post("/api/arep-create", {
        email: formData.get("emailr"),
        fname: formData.get("fname"),
        lname: formData.get("lname"),
        tag: formData.get("invite")?.toLowerCase(),
        country,
        location,
      })
      .then((res) => {
        if (res.status === 200) {
          setSumbitted(true);
          // localStorage.setItem("submitDate", new Date().toISOString());
          console.log(res.data);
        }
        if (res.status === 500) {
          alert("Whoops,something went wrong:(");
        }
      });
  };
  useEffect(() => {
    if (window) {
      const submitDate = localStorage?.getItem("submitDate");
      const today = new Date();
      const twentyFourHoursInMilliseconds = 1000 * 60 * 60 * 24;
      const is24HoursPassed = today >= submitDate + twentyFourHoursInMilliseconds;
      setSumbitted(!is24HoursPassed);
    }
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-1 lg:gap-3 bg-black/0 p-0 xl:p-0   w-full  mx-auto  text-2xl  *:placeholder:text-peach/75 relative z-20">
      {!submitted ? (
        <>
          <input
            id="emails"
            placeholder="quantity"
            className="absolute opacity-0 w-0 h-0 bottom-0 pointer-events-none BORDER_black"
            type="text"
            name="check"
          />
          <input
            id="email_real"
            placeholder="email"
            className=" border-peach border-2 rounded-lg bg-white w-full  px-3 lg:px-5 pt-1 placeholder:uppercase placeholder:text-[#555555] text-mustard caret-mustard uppercase outline-none "
            type="email"
            name="emailr"
            required
          />

          <input
            id="name"
            placeholder="First Name"
            className=" border-peach border-2 rounded-lg bg-white w-full  px-3 lg:px-5 pt-1 placeholder:uppercase placeholder:text-[#555555] text-mustard caret-mustard uppercase outline-none "
            type="text"
            name="fname"
            required
          />
          <input
            id="name"
            placeholder="Last name"
            className=" border-peach border-2 rounded-lg bg-white w-full  px-3 lg:px-5 pt-1 placeholder:uppercase placeholder:text-[#555555] text-mustard caret-mustard uppercase outline-none "
            type="text"
            name="lname"
            required
          />

          <div className="w-full grid grid-cols-2 gap-2 uppercase">
            <Dropdown
              triggerEl={
                <div
                  className={`border-2 border-peach cursor-pointer  h-12 lg:h-14 leading-none bg-white  rounded-[10px] bg-transparent w-full  px-3 xl:px-4 flex items-center uppercase ${
                    country ? "text-peach" : "text-peach/75"
                  }`}>
                  {country ?? "Country"}
                </div>
              }>
              <div
                onClick={() => {
                  setCountry("Australia");
                  setLocation(items?.["Australia"]?.locations[0]);
                }}
                className="px-4 py-1 leading-none cursor-pointer hover:bg-white/40 text-2xl uppercase">
                Australia
              </div>
              <div
                className="px-4 py-1 leading-none cursor-pointer hover:bg-white/40 text-2xl uppercase"
                onClick={() => {
                  setCountry("New Zealand");
                  setLocation(items?.["New Zealand"]?.locations[0]);
                }}>
                New Zealand
              </div>
            </Dropdown>
            <Dropdown
              triggerEl={
                <div
                  className={`border-2 border-peach cursor-pointer  h-12 lg:h-14 leading-none bg-white  rounded-[10px] bg-transparent w-full  px-3 xl:px-4 flex items-center uppercase ${
                    location ? "text-peach" : "text-peach/75"
                  }`}>
                  <p
                    className={`whitespace-nowrap overflow-hidden overflow-ellipsis uppercase relative top-1 `}>
                    {location ?? "Location"}
                  </p>
                </div>
              }>
              {items?.[country]?.locations &&
                items?.[country]?.locations.map((location) => (
                  <div
                    className="px-4 py-1 leading-none cursor-pointer hover:bg-white/40 text-2xl"
                    key={location}
                    onClick={() => setLocation(location)}>
                    {location}
                  </div>
                ))}
            </Dropdown>
          </div>
          <input
            id="invite"
            placeholder="Who do you wanna see?"
            className=" border-peach border-2 rounded-lg  w-full  px-3 lg:px-5 pt-1 placeholder:uppercase placeholder:text-[#555555] text-mustard caret-mustard uppercase outline-none "
            type="text"
            name="invite"
          />
          <button
            type="submit"
            disabled={submitted}
            className="bg-peach text-center h-14  w-full  rounded-lg rounded-bl-lg text-white lg:text-40 px-3 xl:px-6  lg:px-8 flex-shrink-0 uppercase  darma-e transition-all hover:text-white hover:bg-pink ">
            <span className="relative top-1">
              {" "}
              {submitted ? "Thank You for application" : "STAY UPDATED"}
            </span>
          </button>
        </>
      ) : (
        <p className="text-3xl lg:text-40 leading-none  tracking-[2%] text-center uppercase text-balance max-w-[710px] py-5 darma-e">
          You will be one of the first to receive updates and announcements for Jammin &apos;25.
          📢🎉
        </p>
      )}
    </form>
  );
}
{
  /* <motion.form
  initial={{ opacity: 0 }}
  transition={{ delay: 0.7 }}
  animate={{ opacity: 1 }}
  className="flex h-[54px] lg:h-[72px] w-full max-w-[475px] mx-auto lg:text-xl  darma-e  leading-none">
  <input
    placeholder="email"
    className=" border-peach border-2 rounded-lg bg-white w-full  px-3 lg:px-5 pt-1 placeholder:uppercase placeholder:text-[#555555] text-mustard caret-mustard uppercase outline-none "
    type="email"
  />
  <button className="bg-peach/90 border-peach border-2 border-l-0  rounded-br-lg rounded-tr-lg text-white lg:text-xl px-3  lg:px-8 flex-shrink-0 uppercase  darma-e transition-all hover:text-peach hover:bg-green">
    subscribe
  </button>
</motion.form>; */
}
