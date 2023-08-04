import React, { useContext } from "react";
import dayjs from "dayjs";

import Image from "next/image";
import logo from "@/public/calendar.png";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import GlobalContext from "../context/GlobalContext";

export default function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }
  return (
    <header className="px-2 py-2 flex justify-normal items-center">
      <Image src={logo} alt="calendar" className="mr-2 w-6 h-6" />
      <h1 className="sm:mr-2 mr-0 sm:text-base text-sm text-maroon-800 fond-bold">
        Events Calendar
      </h1>
      <button
        onClick={handleReset}
        className="text-maroon-800 border border-maroon-800 rounded text-sm sm:py-1.5 py-1 sm:px-3 sm:mr-3 sm:ml-3 px-2 mr-2 ml-2"
      >
        Today
      </button>
      <button onClick={handlePrevMonth}>
        <span className="cursor-pointer text-maroon-800">
          <ChevronLeft />
        </span>
      </button>
      <button onClick={handleNextMonth}>
        <span className="cursor-pointer text-maroon-800">
          <ChevronRight />
        </span>
      </button>
      <h2 className="sm:ml-3 ml-2 text-base text-maroon-800 font-bold items=">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
    </header>
  );
}
