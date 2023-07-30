import React from "react";
import CreateEventButton from "./CreateEventButton";
import SmallCalendar from "./SmallCalendar";
import Labels from "./Labels";
export default function Sidebar() {
  return (
    <aside className="w-screen grid grid-cols-2">
      <div className="p-2 border col-span-1">
        <CreateEventButton />
        <SmallCalendar />
      </div>
      <div className="ml-2 p-2 border col-span-1">
        <Labels />
      </div>
    </aside>
  );
}
