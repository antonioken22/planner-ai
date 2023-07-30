import Image from "next/image";
import React, { useContext } from "react";
import plusImg from "@/public/plus.png";
import GlobalContext from "../context/GlobalContext";
export default function CreateEventButton() {
  const { setShowEventModal } = useContext(GlobalContext);
  return (
    <button
      onClick={() => setShowEventModal(true)}
      className="border border-maroon-800 p-2 rounded-full flex items-center shadow-md hover:shadow-xl"
    >
      <Image
        src={plusImg}
        alt="create_event"
        className="ml-2 sm:w-6 sm:h-6 w-5 h-5"
      />
      <span className="text-maroon-800 pl-4 pr-4"> Create</span>
    </button>
  );
}
