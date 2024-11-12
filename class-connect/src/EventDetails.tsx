import React from "react";
import { useParams } from "react-router-dom";
import { FaSpa, FaDumbbell, FaPizzaSlice, FaRunning } from "react-icons/fa";

const events = [
  { id: 1, title: "Yoga", icon: <FaSpa />, location: "Back Bay", difficulty: "beginner", startTime: 10, duration: "1 hour", price: "$10" },
  { id: 2, title: "HIIT Workout", icon: <FaDumbbell />, location: "South End", difficulty: "intermediate", startTime: 12, duration: "1.5 hours", price: "$15" },
  { id: 3, title: "Pilates", icon: <FaRunning />, location: "Back Bay", difficulty: "beginner", startTime: 9, duration: "1 hour", price: "$20" },
  { id: 4, title: "Cooking Class", icon: <FaPizzaSlice />, location: "Allston", difficulty: "beginner", startTime: 14, duration: "2 hours", price: "$30" },
  { id: 5, title: "Zumba", icon: <FaDumbbell />, location: "South End", difficulty: "intermediate", startTime: 16, duration: "1 hour", price: "$25" },
  { id: 6, title: "Meditation", icon: <FaSpa />, location: "Back Bay", difficulty: "beginner", startTime: 8, duration: "30 mins", price: "$5" },
  { id: 7, title: "Strength Training", icon: <FaDumbbell />, location: "Allston", difficulty: "advanced", startTime: 18, duration: "1 hour", price: "$40" },
  { id: 8, title: "Cycling", icon: <FaRunning />, location: "South End", difficulty: "intermediate", startTime: 7, duration: "1 hour", price: "$12" },
];

const EventDetails: React.FC = () => {
  const { id } = useParams(); // Get the event id from the URL
  const event = events.find(event => event.id.toString() === id); // Find the event by id
  if (!event) {
    return <div>Event not found!</div>;
  }

  return (
    <div className="event-details">
      <h1>{event.title}</h1>
      <div>{event.icon}</div>
      <p>Location: {event.location}</p>
      <p>Difficulty: {event.difficulty}</p>
      <p>Start Time: {event.startTime}:00</p>
      <p>Duration: {event.duration}</p>
      <p>Price: {event.price}</p>
    </div>
  );
};

export default EventDetails;
