import React, { useState, useContext, useEffect } from "react";

import CalendarHeader from "@/components/calendar/CalendarHeader";
import Sidebar from "@/components/calendar/Sidebar";
import Month from "@/components/calendar/Month";
import EventModal from "@/components/calendar/EventModal";

import GlobalContext from "@/components/context/GlobalContext";
import { getMonth } from "@/components/context/util";

function CalendarApp() {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <div>
      {showEventModal && <EventModal />}

      <div className="h-screen flex flex-col">
        <div className="flex justify-center">
          <CalendarHeader />
        </div>
        <div>
          <div className="p-2 flex row-span-1">
            <Sidebar />
          </div>
          <div className="p-2 flex row-span-2">
            <Month month={currenMonth} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarApp;
