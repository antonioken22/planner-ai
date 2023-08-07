import React from "react";

import CreateEventButton from "./CreateEventButton";
import SmallCalendar from "./SmallCalendar";
import Labels from "./Labels";

export default function Topbar() {
  return (
    <aside className="w-full flex flex-row justify-normal">
      <div className="p-2 border">
        <CreateEventButton />
        <SmallCalendar />
      </div>
      <div className="ml-2 p-2">
        <Labels />
      </div>
    </aside>
  );
}
