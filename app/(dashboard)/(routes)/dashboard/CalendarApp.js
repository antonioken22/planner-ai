import React, { useState, useContext, useEffect } from "react";

import CalendarHeader from "./components/CalendarHeader";
import Sidebar from "./components/Sidebar";
import Month from "./components/Month";
import EventModal from "./components/EventModal";

import GlobalContext from "./context/GlobalContext";
import { getMonth } from "./util";

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
        <div>
          <CalendarHeader />
        </div>
        <div>
          <div className="p-2 flex row-span-1">
            <Sidebar />
          </div>
          <div className="ml-2 mr-2 flex row-span-2">
            <Month month={currenMonth} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarApp;
