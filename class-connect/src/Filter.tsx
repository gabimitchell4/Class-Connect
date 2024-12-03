import React, { useState } from 'react';
import './Filter.css';

interface FilterProps {
  onSave: (filters: {
    startTime: number;
    location: string;
    rewardPoints: number;
    priceRange: number;
    difficulty: string[];
    activityType: string[];
  }) => void;
}

const Filter: React.FC<FilterProps> = ({ onSave }) => {
  const [startTime, setStartTime] = useState<number>(14); // Default to 2:00 PM
  const [location, setLocation] = useState<string>('Brookline');
  const [rewardPoints, setRewardPoints] = useState<number>(0);
  const [priceRange, setPriceRange] = useState<number>(35);
  const [difficulty, setDifficulty] = useState<string[]>([]);
  const [activityType, setActivityType] = useState<string[]>([]);

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    const value = e.target.value;
    setter((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const handleStartTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setStartTime(Number(e.target.value));

  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setLocation(e.target.value);

  const handlePointsChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setRewardPoints(Number(e.target.value));

  const handlePriceRangeChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPriceRange(Number(e.target.value));

  const handleClear = () => {
    setStartTime(14);
    setLocation('Brookline');
    setRewardPoints(0);
    setPriceRange(35);
    setDifficulty([]);
    setActivityType([]);
  };

  const handleSave = () => {
    const filters = {
      startTime,
      location,
      rewardPoints,
      priceRange,
      difficulty,
      activityType,
    };
    onSave(filters); // Pass filters to parent component or apply them directly
  };

  return (
    <div className="filter-panel">
      <h2>Filter By</h2>

      {/* Start Time */}
      <div className="filter-item">
        <label>Start Time</label>
        <select value={startTime} onChange={handleStartTimeChange}>
          {Array.from({ length: 24 }, (_, i) => (
            <option key={i} value={i}>
              {i}:00
            </option>
          ))}
        </select>
      </div>

      {/* Location */}
      <div className="filter-item">
        <label>Location</label>
        <select value={location} onChange={handleLocationChange}>
          <option value="Brookline">Brookline</option>
          <option value="Back Bay">Back Bay</option>
          <option value="South End">South End</option>
          <option value="Allston">Allston</option>
        </select>
      </div>

      {/* Activity Type */}
      <div className="filter-item">
        <label>Activity Type</label>
        <div>
          <input
            type="checkbox"
            id="art"
            value="Art + Creative"
            checked={activityType.includes('Art + Creative')}
            onChange={(e) => handleCheckboxChange(e, setActivityType)}
          />
          <label htmlFor="art">Art + Creative</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="workout"
            value="Workout"
            checked={activityType.includes('Workout')}
            onChange={(e) => handleCheckboxChange(e, setActivityType)}
          />
          <label htmlFor="workout">Workout</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="food"
            value="Food"
            checked={activityType.includes('Food')}
            onChange={(e) => handleCheckboxChange(e, setActivityType)}
          />
          <label htmlFor="food">Food</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="wellness"
            value="Wellness"
            checked={activityType.includes('Wellness')}
            onChange={(e) => handleCheckboxChange(e, setActivityType)}
          />
          <label htmlFor="wellness">Wellness</label>
        </div>
      </div>

      {/* Reward Points */}
      <div className="filter-item">
        <label>Reward Points</label>
        <input
          type="range"
          min="0"
          max="500"
          value={rewardPoints}
          onChange={handlePointsChange}
        />
        <span>{rewardPoints}</span>
      </div>

      {/* Difficulty */}
      <div className="filter-item">
        <label>Difficulty</label>
        <div>
          <input
            type="checkbox"
            id="beginner"
            value="Beginner"
            checked={difficulty.includes('Beginner')}
            onChange={(e) => handleCheckboxChange(e, setDifficulty)}
          />
          <label htmlFor="beginner">Beginner</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="intermediate"
            value="Intermediate"
            checked={difficulty.includes('Intermediate')}
            onChange={(e) => handleCheckboxChange(e, setDifficulty)}
          />
          <label htmlFor="intermediate">Intermediate</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="advanced"
            value="Advanced"
            checked={difficulty.includes('Advanced')}
            onChange={(e) => handleCheckboxChange(e, setDifficulty)}
          />
          <label htmlFor="advanced">Advanced</label>
        </div>
      </div>

      {/* Price Range */}
      <div className="filter-item">
        <label>Price Range</label>
        <input
          type="range"
          min="0"
          max="100"
          value={priceRange}
          onChange={handlePriceRangeChange}
        />
        <span>${priceRange}</span>
      </div>

      {/* Buttons */}
      <div className="filter-buttons">
        <button className="clear" onClick={handleClear}>
          Clear
        </button>
        <button className="save" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Filter;
