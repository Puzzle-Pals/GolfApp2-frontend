import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [event, setEvent] = useState(null);

  useEffect(() => {
    axios.get('https://golfapp2-backend-7hkmsnq1t-puzzle-pals-projects.vercel.app/api/events/next')
      .then(response => setEvent(response.data))
      .catch(error => console.error('Error fetching event:', error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="bg-green-600 text-white p-4 rounded-lg mb-4">
        <h1 className="text-2xl font-bold">Welcome to Golf League</h1>
        {event ? (
          <div className="mt-2">
            <h2 className="text-xl">Next Event</h2>
            <p>Date: {new Date(event.date).toLocaleDateString()}</p>
            <p>Time: {event.time}</p>
            <p>Course: {event.course}</p>
          </div>
        ) : (
          <p>Loading event details...</p>
        )}
      </div>
      <div className="grid grid-cols-1 gap-4">
        <Link to="/results" className="bg-white p-4 rounded-lg shadow hover:bg-gray-50">
          <h2 className="text-lg font-semibold text-green-700">View Results</h2>
          <p>Check weekly results and leaderboard</p>
        </Link>
        <Link to="/stats" className="bg-white p-4 rounded-lg shadow hover:bg-gray-50">
          <h2 className="text-lg font-semibold text-green-700">Player Stats</h2>
          <p>See your performance and trends</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;