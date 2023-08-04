import React, { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";

import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { getMonth } from "../util";
import GlobalContext from "../context/GlobalContext";

export default function SmallCalendar() {
  const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIdx));
  }, [currentMonthIdx]);

  const { monthIndex, setSmallCalendarMonth, setDaySelected, daySelected } =
    useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonthIdx(monthIndex);
  }, [monthIndex]);

  function handlePrevMonth() {
    setCurrentMonthIdx(currentMonthIdx - 1);
  }
  function handleNextMonth() {
    setCurrentMonthIdx(currentMonthIdx + 1);
  }
  function getDayClass(day) {
    const format = "DD-MM-YY";
    const nowDay = dayjs().format(format);
    const currDay = day.format(format);
    const slcDay = daySelected && daySelected.format(format);
    if (nowDay === currDay) {
      return "bg-maroon-500 rounded-full text-white";
    } else if (currDay === slcDay) {
      return "bg-maroon-100 rounded-full text-gray-600";
    } else {
      return "";
    }
  }
  return (
    <div className="mt-2">
      <header className="flex justify-between">
        <p className="text-sm text-maroon-500 font-bold">
          {dayjs(new Date(dayjs().year(), currentMonthIdx)).format("MMMM YYYY")}
        </p>
        <div>
          <button onClick={handlePrevMonth}>
            <span className="cursor-pointer text-maroon-600 ">
              <ChevronLeft className="w-5 h-5" />
            </span>
          </button>
          <button onClick={handleNextMonth}>
            <span className="cursor-pointer text-maroon-600 ">
              <ChevronRight className="w-5 h-5" />
            </span>
          </button>
        </div>
      </header>
      <div className="grid grid-cols-7">
        {currentMonth[0].map((day, i) => (
          <span key={i} className="text-xs text-center">
            {day.format("dd").charAt(0)}
          </span>
        ))}
        {currentMonth.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSmallCalendarMonth(currentMonthIdx);
                  setDaySelected(day);
                }}
                className={`pl-1 pr-1 w-full ${getDayClass(day)}`}
              >
                <span className="text-sm">{day.format("D")}</span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
