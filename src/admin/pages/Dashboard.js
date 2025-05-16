import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const [events, setEvents] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios.get('https://golfapp2-backend-7hkmsnq1t-puzzle-pals-projects.vercel.app/api/events')
      .then(response => setEvents(response.data))
      .catch(error => console.error('Error fetching events:', error));

    axios.get('https://golfapp2-backend-7hkmsnq1t-puzzle-pals-projects.vercel.app/api/scores')
      .then(response => setResults(response.data))
      .catch(error => console.error('Error fetching results:', error));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-green-700 mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <Link to="/admin/players" className="bg-white p-4 rounded-lg shadow hover:bg-gray-50">
          <h2 className="text-lg font-semibold text-green-700">Manage Players</h2>
          <p>Add, update, or delete players</p>
        </Link>
        <Link to="/admin/scores" className="bg-white p-4 rounded-lg shadow hover:bg-gray-50">
          <h2 className="text-lg font-semibold text-green-700">Enter Scores</h2>
          <p>Input weekly results and awards</p>
        </Link>
        <Link to="/admin/events" className="bg-white p-4 rounded-lg shadow hover:bg-gray-50">
          <h2 className="text-lg font-semibold text-green-700">Manage Events</h2>
          <p>Create or edit weekly events</p>
        </Link>
        <Link to="/admin/prizes" className="bg-white p-4 rounded-lg shadow hover:bg-gray-50">
          <h2 className="text-lg font-semibold text-green-700">Manage Prizes</h2>
          <p>Update prize distributions</p>
        </Link>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Upcoming Events</h2>
        {events.length > 0 ? (
          events.map(event => (
            <div key={event._id} className="bg-white p-4 rounded-lg shadow mb-4">
              <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
              <p><strong>Course:</strong> {event.course}</p>
            </div>
          ))
        ) : (
          <p>No upcoming events.</p>
        )}
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Recent Results</h2>
        {results.length > 0 ? (
          results.map(result => (
            <div key={result._id} className="bg-white p-4 rounded-lg shadow mb-4">
              <p><strong>Week:</strong> {result.week}</p>
              <p><strong>Winners:</strong> {result.winners.join(', ')}</p>
            </div>
          ))
        ) : (
          <p>No results available.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;