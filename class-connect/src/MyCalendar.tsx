// src/pages/UpcomingEvents.tsx
import React, { useState } from "react";
import { FaSpa, FaDumbbell, FaPizzaSlice, FaRunning } from "react-icons/fa";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./MyCalendar.css";

const signedUpEvents = [
  {
    id: 1,
    title: "Yoga",
    icon: <FaSpa />,
    date: "2024-11-15",
    startTime: "8:00 AM",
    endTime: "9:00 AM",
    paired: true,
    pair: {
      name: "Alex Johnson",
      gender: "Male",
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
    date: "2024-11-17",
    startTime: "11:30 AM",
    endTime: "12:30 PM",
    paired: true,
    pair: {
      name: "Sarah Lee",
      gender: "Female",
      hobbies: ["Yoga", "Cooking", "Reading"],
    },
  },
  {
    id: 4,
    title: "Cooking Class",
    icon: <FaPizzaSlice />,
    date: "2024-11-18",
    startTime: "2:00 PM",
    endTime: "4:00 PM",
    paired: false,
  },
  {
    id: 5,
    title: "Zumba",
    icon: <FaDumbbell />,
    date: "2024-11-19",
    startTime: "5:00 PM",
    endTime: "6:00 PM",
    paired: true,
    pair: {
      name: "Daniel Kim",
      gender: "Male",
      hobbies: ["Dancing", "Fitness", "Traveling"],
    },
  },
  {
    id: 6,
    title: "Meditation",
    icon: <FaSpa />,
    date: "2024-11-20",
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

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const formatDate = (date) => date.toISOString().split("T")[0];

  const eventsForSelectedDate = selectedDate
    ? signedUpEvents.filter((event) => event.date === formatDate(selectedDate))
    : signedUpEvents;

  return (
    <div className="my-calendar-page">
      <div className="content">
        <div className="calendar-container">
          <Calendar className="calendar-container" onChange={handleDateChange} value={selectedDate} />
        </div>
        <div>
          <h2>
            Events for {selectedDate ? selectedDate.toString() : "X/X/2024"}
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
                  <button className="view-pairing-button">View Pairing</button>
                </div>
              ))
            ) : (
              <p>No events for this date.</p>
            )}
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default MyCalendar;
