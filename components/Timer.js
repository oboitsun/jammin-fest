"use client";
import { useEffect, useState } from "react";

import { calculateTimeLeft } from "../utils/helpers";
import TimerItem from "./TimerItem";
export default function Timer() {
  const today = Date.now();
  const dayX = new Date(Date.UTC(2025, 2, 6, 15, 0, 0)).getTime();
  const [timeLeft, setTimeLeft] = useState({
    hours: "0",
    days: "0",
    minutes: "0",
    seconds: "0",
  });

  useEffect(() => {
    let timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(dayX));
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  });
  return (
    <div className=" flex items-center  mb-2 relative ">
      {dayX < today ? (
        <p></p>
      ) : (
        <>
          <div className=" text-white  grid grid-cols-3 gap-2 lg:gap-10">
            <TimerItem time={timeLeft.days} text="Days" />

            <TimerItem time={timeLeft.hours} text="Hrs" />

            <TimerItem time={timeLeft.minutes} text="Min" />
          </div>
        </>
      )}
    </div>
  );
}
