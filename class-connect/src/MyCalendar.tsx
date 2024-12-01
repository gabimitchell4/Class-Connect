// src/pages/MyCalendar.tsx
import React, { useEffect, useRef, useState } from "react";
import { Event, Pair } from "./types";
import {
  FaSpa,
  FaDumbbell,
  FaPizzaSlice,
  FaRunning,
  FaUser,
} from "react-icons/fa";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./MyCalendar.css";
import { Link } from "react-router-dom";
import ChatDrawer from "./ChatDrawer.tsx";

const signedUpEvents: Event[] = [
  {
    id: 1,
    title: "Yoga",
    icon: <FaSpa />,
    date: "2024-11-26",
    startTime: "8:00 AM",
    endTime: "9:00 AM",
    location: "57 Harvard Ave, Boston, MA",
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
    location: "75 Commonwealth Ave, Boston, MA",
  },
  {
    id: 3,
    title: "Pilates",
    icon: <FaRunning />,
    date: "2024-12-01",
    startTime: "11:30 AM",
    endTime: "12:30 PM",
    location: "100 Boylston St, Boston, MA",
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
    location: "50 Leon St, Boston, MA",
  },
  {
    id: 5,
    title: "Zumba",
    icon: <FaDumbbell />,
    date: "2024-11-29",
    startTime: "5:00 PM",
    endTime: "6:00 PM",
    location: "20 Park Plaza, Boston, MA",
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
    location: "140 Clarendon St, Boston, MA",
  },
  {
    id: 7,
    title: "Strength Training",
    icon: <FaDumbbell />,
    date: "2024-11-21",
    startTime: "6:30 PM",
    endTime: "7:30 PM",
    location: "33 Harrison Ave, Boston, MA",
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
    location: "12 Boylston St, Boston, MA",
  },
];
const samplePair: Pair = {
  name: "Alex Johnson",
  age: 31,
  gender: "",
  hobbies: [],
};

const MyCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedPair, setSelectedPair] = useState<Pair | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleDateChange = (date) => {
    if (selectedDate?.getTime() === date.getTime()) {
      setSelectedDate(null);
    } else {
      setSelectedDate(date);
      setSelectedPair(null);
    }
  };

  const formatDate = (date: Date) => date.toISOString().split("T")[0];

  const eventsForSelectedDate = selectedDate
    ? signedUpEvents.filter((event) => event.date === formatDate(selectedDate))
    : signedUpEvents;

  const isEventDate = (date: Date) => {
    const formattedDate = formatDate(date);
    return signedUpEvents.some((event) => event.date === formattedDate);
  };

  const handleClickOutside = (event) => {
    if (cardRef.current && !cardRef.current.contains(event.target)) {
      setSelectedPair(null);
    }
  };
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="my-calendar-page">
        <div
          style={{
            position: "absolute", // Ensure it's positioned relative to the parent container
            top: "30px", // 10px from the top
            right: "50px", // 10px from the right
          }}
        >
          <div className="profile-icon">
            <Link to="/profile">
              <FaUser />
            </Link>
          </div>{" "}
        </div>

        <div className="calendar-content">
          <div className="calendar-section">
            <h1 className="calendar-title">My Calendar</h1>
            <Calendar
              className="custom-calendar"
              onChange={(event) => handleDateChange(event)}
              value={selectedDate}
              tileDisabled={({ date }) => !isEventDate(date)}
            />
          </div>
          <div className="events-section">
            <div className="events-list">
              {eventsForSelectedDate.length > 0 ? (
                eventsForSelectedDate.map((event) => (
                  <div key={event.id} className="event-card">
                    <div className="event-date-box">
                      <p className="event-month">
                        {new Date(event.date + "T00:00:00")
                          .toLocaleString("en-US", { month: "short" })
                          .toUpperCase()}
                      </p>
                      <p className="event-day">
                        {new Date(event.date + "T00:00:00").getDate()}
                      </p>
                    </div>
                    <div className="event-details">
                      <p className="event-title">{event.title}</p>
                      <p className="event-time">
                        <strong>Time:</strong> {event.startTime} -{" "}
                        {event.endTime}
                      </p>
                      <p className="event-location">
                        <strong>Location:</strong> {event.location || "TBD"}
                      </p>
                    </div>
                    <div className="event-actions">
                      <button className="remove-button">Remove</button>
                      {event.pair && (
                        <button
                          className="view-pairing-button"
                          onClick={() =>
                            event.pair && setSelectedPair(event.pair)
                          }
                        >
                          View Pairing
                        </button>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <p>No events for this date.</p>
              )}
            </div>
          </div>
        </div>
        {selectedPair && (
          <div className="pairing-card" ref={cardRef}>
            <div className="profile-icon">
              <FaUser />
            </div>
            <h3>{selectedPair?.name}</h3>
            <p>Age: {selectedPair?.age}</p>
            <p>
              Gender:{" "}
              <span style={{ color: "#6b238e", fontWeight: "bold" }}>
                {selectedPair?.gender}
              </span>
            </p>
            <div className="hobbies">
              {selectedPair?.hobbies.map((hobby, index) => (
                <div key={index} className="hobby">
                  {hobby}
                </div>
              ))}
            </div>
            <button className="chat-button" onClick={() => setIsChatOpen(true)}>
              Chat
            </button>
          </div>
        )}
      </div>
      <ChatDrawer
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        pair={samplePair}
      />
    </>
  );
};

export default MyCalendar;
