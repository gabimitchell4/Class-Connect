import React, { useState } from 'react';
import './Filter.css'

const Filter: React.FC = () => {
  const [startTime, setStartTime] = useState<number>(0);
  const [eventType, setEventType] = useState<string>('');
  const [points, setPoints] = useState<number>(0);
  const [difficulty, setDifficulty] = useState<string>('beginner');
  const [location, setLocation] = useState<string>('back bay');

  const handleStartTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => setStartTime(Number(e.target.value));
  const handleEventTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => setEventType(e.target.value);
  const handlePointsChange = (e: React.ChangeEvent<HTMLInputElement>) => setPoints(Number(e.target.value));
  const handleDifficultyChange = (e: React.ChangeEvent<HTMLSelectElement>) => setDifficulty(e.target.value);
  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => setLocation(e.target.value);

  return (
    <div className="filter-panel">
      <h2>Filter by</h2>

      <div className="filter-item">
        <label>Start Time</label>
        <input
          type="range"
          min="0"
          max="24"
          value={startTime}
          onChange={handleStartTimeChange}
          step="1"
        />
        <span>{startTime}:00</span>
      </div>

      <div className="filter-item">
        <label>Event Type</label>
        <select value={eventType} onChange={handleEventTypeChange}>
          <option value="">Select Event Type</option>
          <option value="workout">Workout</option>
          <option value="arts">Arts</option>
          <option value="cooking">Cooking</option>
          <option value="general wellness">General Wellness</option>
        </select>
      </div>

      <div className="filter-item">
        <label>Points</label>
        <input
          type="range"
          min="0"
          max="100"
          value={points}
          onChange={handlePointsChange}
          step="1"
        />
        <span>{points} points</span>
      </div>

      <div className="filter-item">
        <label>Difficulty</label>
        <select value={difficulty} onChange={handleDifficultyChange}>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>

      <div className="filter-item">
        <label>Location</label>
        <select value={location} onChange={handleLocationChange}>
          <option value="back bay">Back Bay</option>
          <option value="southend">South End</option>
          <option value="allston">Allston</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
