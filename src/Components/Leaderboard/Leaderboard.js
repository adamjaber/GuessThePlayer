// In Leaderboard.js
import React, { useState } from 'react';
import './Leaderboard.css'

function Leaderboard() {
  const [name, setName] = useState('');
  const [leaderboard, setLeaderboard] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      setLeaderboard([...leaderboard, name]);
      setName('aa'); // Reset the input field after submission
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Enter your name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <button type="submit">Add to Leaderboard</button>
      </form>
      <ul>
        {leaderboard.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
    </div>
  );
}

export default Leaderboard;
