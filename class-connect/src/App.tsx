// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Login from "./Login.tsx";
import Survey from "./Survey.tsx";
import Activity from "./Activity.tsx";
import Event from "./Event.tsx";
import Social from "./Social.tsx";
import Rewards from "./Rewards.tsx";
import NavBar from "./NavBar.tsx";
import EventDetails from "./EventDetails.tsx";
import MyCalendar from "./MyCalendar.tsx";

const App: React.FC = () => {
  const location = useLocation(); // Hook to get the current location

  // Check if the current route is the login page
  const isLoginPage = location.pathname === "/";

  return (
    <>
      {/* Render the NavBar unless it's the login page */}
      {!isLoginPage && <NavBar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/event" element={<Event />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/social" element={<Social />} />
        <Route path="/upcoming-events" element={<MyCalendar />} />
        <Route path="/rewards" element={<Rewards />} />
      </Routes>
    </>
  );
};

const AppWrapper: React.FC = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;