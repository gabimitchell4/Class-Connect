// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Survey from "./Survey";
import Activity from "./Activity";
import Filter from "./Filter";
import Event from "./Event";
import Social from "./Social";
import UpcomingEvents from "./UpcomingEvents";
import Rewards from "./Rewards";
import NavBar from "./NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/event" element={<Event />} />
        <Route path="/social" element={<Social />} />
        <Route path="/upcoming-events" element={<UpcomingEvents />} />
        <Route path="/rewards" element={<Rewards />} />
      </Routes>
    </Router>
  );
}

export default App;
