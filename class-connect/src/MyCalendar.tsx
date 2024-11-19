// src/pages/UpcomingEvents.tsx
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { FaSpa, FaDumbbell, FaPizzaSlice, FaRunning } from "react-icons/fa";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./MyCalendar.css";

type Pair = {
  name: string;
  age: number;
  gender: string;
  hobbies: string[];
};

type Event = {
  id: number;
  title: string;
  icon: ReactNode;
  date: string;
  startTime: string;
  endTime: string;
  paired: boolean;
  pair?: Pair;
};
const signedUpEvents: Event[] = [
  {
    id: 1,
    title: "Yoga",
    icon: <FaSpa />,
    date: "2024-11-26",
    startTime: "8:00 AM",
    endTime: "9:00 AM",
    paired: true,
    pair: {
      name: "Alex Johnson",
      gender: "Male",
      age: 31,
      hobbies: ["Photography", "Hiking", "Meditation"],
    },
  },
  {
    id: 2,
    title: "HIIT Workout",
    icon: <FaDumbbell />,
    date: "2024-11-16",
    startTime: "10:00 AM",
    endTime: "11:00 AM",
    paired: false,
  },
  {
    id: 3,
    title: "Pilates",
    icon: <FaRunning />,
    date: "2024-12-01",
    startTime: "11:30 AM",
    endTime: "12:30 PM",
    paired: true,
    pair: {
      name: "Sarah Lee",
      gender: "Female",
      age: 25,
      hobbies: ["Yoga", "Cooking", "Reading"],
    },
  },
  {
    id: 4,
    title: "Cooking Class",
    icon: <FaPizzaSlice />,
    date: "2024-11-29",
    startTime: "2:00 PM",
    endTime: "4:00 PM",
    paired: false,
  },
  {
    id: 5,
    title: "Zumba",
    icon: <FaDumbbell />,
    date: "2024-11-29",
    startTime: "5:00 PM",
    endTime: "6:00 PM",
    paired: true,
    pair: {
      name: "Daniel Kim",
      gender: "Male",
      age: 26,
      hobbies: ["Dancing", "Fitness", "Traveling"],
    },
  },
  {
    id: 6,
    title: "Meditation",
    icon: <FaSpa />,
    date: "2024-11-18",
    startTime: "7:00 PM",
    endTime: "8:00 PM",
    paired: false,
  },
  {
    id: 7,
    title: "Strength Training",
    icon: <FaDumbbell />,
    date: "2024-11-21",
    startTime: "6:30 PM",
    endTime: "7:30 PM",
    paired: true,
    pair: {
      name: "Emily Chen",
      gender: "Female",
      age: 28,
      hobbies: ["Weightlifting", "Running", "Nutrition"],
    },
  },
  {
    id: 8,
    title: "Cycling",
    icon: <FaRunning />,
    date: "2024-11-22",
    startTime: "9:00 AM",
    endTime: "10:00 AM",
    paired: false,
  },
];

const MyCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedPair, setSelectedPair] = useState<Pair | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleDateChange = (date) => {
    const formattedDate = date.toISOString().split("T")[0];
    if (
      selectedDate &&
      formattedDate === selectedDate.toISOString().split("T")[0]
    ) {
      setSelectedDate(null);
    } else {
      setSelectedDate(date);
    }
    setSelectedPair(null);
  };

  const handleClickOutside = (event: MouseEvent) => {
    console.log(event.target);
    console.log(cardRef.current);
    if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
      setSelectedPair(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const formatDate = (date) => date.toISOString().split("T")[0];

  const eventsForSelectedDate = selectedDate
    ? signedUpEvents.filter((event) => event.date === formatDate(selectedDate))
    : signedUpEvents;

  const isEventDate = (date) => {
    const formattedDate = formatDate(date);
    return signedUpEvents.some((event) => event.date === formattedDate);
  };

  return (
    <div className="my-calendar-page">
      <div className="content">
        <Calendar
          className="calendar-container"
          onChange={handleDateChange}
          value={selectedDate}
          tileDisabled={({ date }) => !isEventDate(date)}
        />
        <div>
          <h2>
            Events for {selectedDate ? formatDate(selectedDate) : "2024-X-X"}
          </h2>
          <div className="events-container">
            {eventsForSelectedDate.length > 0 ? (
              eventsForSelectedDate.map((event) => (
                <div key={event.id} className="event-card">
                  <div className="event-circle"></div>
                  <div className="event-info">
                    <p className="event-time">
                      {event.startTime} - {event.endTime}
                    </p>
                    <p className="event-title">{event.title}</p>
                  </div>
                  {event.paired && (
                    <button
                      className="view-pairing-button"
                      onClick={() => event.pair && setSelectedPair(event?.pair)}
                    >
                      View Pairing
                    </button>
                  )}
                </div>
              ))
            ) : (
              <p>No events for this date.</p>
            )}
          </div>
          {selectedPair && (
            <div>
              <h2>Pairing</h2>
              <div className="event-card" ref={cardRef}>
                <h3 className="event-title">{selectedPair?.name}</h3>
                <div className="pair-text">Age: {selectedPair?.age}</div>
                <div className="pair-text">Gender: {selectedPair?.gender}</div>
                <div className="pair-text">
                  Hobbies: {selectedPair?.hobbies.join(", ")}
                </div>
                <button className="view-pairing-button">Chat</button>
              </div>
            </div>
          )}
        </div>
      </div>{" "}
    </div>
  );
};

export default MyCalendar;
