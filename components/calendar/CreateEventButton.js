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
      <Image src={plusImg} alt="create_event" className="w-6 h-6" />
      <span className="text-maroon-800 pl-3 pr-7"> Create</span>
    </button>
  );
}
