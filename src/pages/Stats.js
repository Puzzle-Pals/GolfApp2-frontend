import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Stats = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    axios.get('https://golfapp2-backend-7hkmsnq1t-puzzle-pals-projects.vercel.app/api/players/me')
      .then(response => setStats(response.data))
      .catch(error => console.error('Error fetching stats:', error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-green-700 mb-4">Player Stats</h1>
      {stats ? (
        <div className="bg-white p-4 rounded-lg shadow">
          <p><strong>Name:</strong> {stats.name}</p>
          <p><strong>Wins:</strong> {stats.wins}</p>
          <p><strong>2nd Place:</strong> {stats.secondPlace}</p>
          <p><strong>Highest Score:</strong> {stats.highestScore}</p>
          <p><strong>Deuce Pot Wins:</strong> {stats.deucePotWins}</p>
          <p><strong>Closest to Pin:</strong> {stats.closestToPin}</p>
        </div>
      ) : (
        <p>Loading stats...</p>
      )}
    </div>
  );
};

export default Stats;