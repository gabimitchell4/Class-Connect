// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login.tsx";
import Survey from "./Survey.tsx";
import Activity from "./Activity.tsx";
import Event from "./Event.tsx";
import Social from "./Social.tsx";
import UpcomingEvents from "./UpcomingEvents.tsx";
import Rewards from "./Rewards.tsx";
import NavBar from "./NavBar.tsx";
import EventDetails from "./EventDetails.tsx";

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/event" element={<Event />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/social" element={<Social />} />
        <Route path="/upcoming-events" element={<UpcomingEvents />} />
        <Route path="/rewards" element={<Rewards />} />
      </Routes>
    </Router>
  );
};

export default App;
