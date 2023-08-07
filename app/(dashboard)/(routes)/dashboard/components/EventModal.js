import React, { useContext, useState, useEffect } from "react";

import { Grip } from "lucide-react";
import { Trash2 } from "lucide-react";
import { X } from "lucide-react";
import { CalendarCheck } from "lucide-react";
import { Text } from "lucide-react";
import { Bookmark } from "lucide-react";
import { Check } from "lucide-react";
import GlobalContext from "../context/GlobalContext";

const labelsClasses = ["indigo", "gray", "green", "blue", "red", "purple"];

export default function EventModal() {
  const {
    setShowEventModal,
    daySelected,
    dispatchCalEvent,
    selectedEvent,
    alanEventData,
    isSubmitted,
    setSubmitted,
  } = useContext(GlobalContext);

  const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : "");

  useEffect(() => {
    if (alanEventData) {
      const { title, description, label } = alanEventData;
      setTitle(title || "");
      setDescription(description || "");
      setSelectedLabel(
        labelsClasses.find((lbl) => lbl === label) || labelsClasses[0]
      );
    }
  }, [alanEventData]);

  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : ""
  );
  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent
      ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
      : labelsClasses[0]
  );

  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  useEffect(() => {
    const currentTime = new Date();
    const minutes = currentTime.getMinutes();

    let startHour;
    let startMinutes;

    if (minutes >= 0 && minutes <= 29) {
      startHour = currentTime.getHours();
      startMinutes = "30";
    } else {
      startHour = currentTime.getHours() + 1;
      startMinutes = "00";
    }

    const defaultEndTime = new Date(currentTime);
    defaultEndTime.setHours(startHour + 1);
    defaultEndTime.setMinutes(startMinutes);

    const formattedStartTime = `${startHour
      .toString()
      .padStart(2, "0")}:${startMinutes}`;
    const formattedEndTime = `${defaultEndTime
      .getHours()
      .toString()
      .padStart(2, "0")}:${startMinutes}`;

    setStartTime(selectedEvent ? selectedEvent.startTime : formattedStartTime);
    setEndTime(selectedEvent ? selectedEvent.endTime : formattedEndTime);
  }, [selectedEvent]);

  if (isSubmitted) {
    const calendarEvent = {
      id: selectedEvent ? selectedEvent.id : Date.now(),
      title,
      day: daySelected.valueOf(),
      startTime,
      endTime,
      description,
      label: selectedLabel,
    };
    if (selectedEvent) {
      dispatchCalEvent({ type: "update", payload: calendarEvent });
    } else {
      dispatchCalEvent({ type: "push", payload: calendarEvent });
    }

    setSubmitted(false);
    setShowEventModal(false);
  }

  return (
    <div className="fixed left-0 top-20 flex justify-center items-center w-full">
      <form className="bg-white rounded-lg shadow-2xl w-96 max-h-screen">
        <header className="bg-maroon-100 px-4 py-2 flex justify-between items-center">
          <span className="text-maroon-400">
            <Grip />
          </span>
          <div className="flex items-center">
            {selectedEvent && (
              <span
                onClick={() => {
                  dispatchCalEvent({
                    type: "delete",
                    payload: selectedEvent,
                  });
                  setShowEventModal(false);
                }}
                className="text-gray-400 cursor-pointer mr-2"
              >
                <Trash2 />
              </span>
            )}
            <button onClick={() => setShowEventModal(false)}>
              <span className="text-maroon-400">
                <X />
              </span>
            </button>
          </div>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-1/5 items-end gap-y-5">
            <div></div>

            {/* Event Title */}
            <input
              type="text"
              name="title"
              placeholder="Event title"
              value={title}
              required
              className="border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-maroon-500"
              onChange={(e) => setTitle(e.target.value)}
            />

            {/* Date Selected */}
            <div className="flex justify-normal">
              <span className="text-maroon-800">
                <CalendarCheck />
              </span>
              <p className="ml-3 text-maroon-800">
                {daySelected.format("dddd, MMMM DD")}
              </p>
            </div>

            {/* Start Time */}
            <div>
              <div className="grid grid-cols-2 items-center gap-x-2">
                <label htmlFor="startTime" className="text-maroon-600">
                  Start Time:
                </label>
                <input
                  type="time"
                  id="startTime"
                  name="startTime"
                  required
                  value={startTime}
                  className="pt-1 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-maroon-500"
                  onChange={(e) => setStartTime(e.target.value)}
                />
              </div>
            </div>

            {/* End Time */}
            <div>
              <div className="grid grid-cols-2 items-center gap-x-2">
                <label htmlFor="endTime" className="text-maroon-600">
                  End Time:
                </label>
                <input
                  type="time"
                  id="endTime"
                  name="endTime"
                  required
                  value={endTime}
                  className="pt-1 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-maroon-500"
                  onChange={(e) => setEndTime(e.target.value)}
                />
              </div>
            </div>

            {/* Event Description */}
            <div className="flex justify-between">
              <span className="text-maroon-400">
                <Text />
              </span>
              <input
                type="text"
                name="description"
                placeholder="Event description"
                value={description}
                required
                className="ml-2 pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-maroon-500"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            {/* Event Label */}
            <div className="flex justify-normal">
              <span className="text-maroon-400">
                <Bookmark />
              </span>
              <div className="flex gap-x-2 ml-3">
                {labelsClasses.map((lblClass, i) => (
                  <span
                    key={i}
                    onClick={() => setSelectedLabel(lblClass)}
                    className={`bg-${lblClass}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                  >
                    {selectedLabel === lblClass && (
                      <span className="text-white text-sm">
                        <Check className="w-4 h-4" />
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <footer className="flex justify-end border-t p-3 mt-5">
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="bg-maroon-500 hover:bg-maroon-600 px-6 py-2 rounded text-white"
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  );
}
