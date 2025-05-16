import { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [event, setEvent] = useState(null);

  useEffect(() => {
    axios.get('https://golf-league-backend.vercel.app/api/events')
      .then(res => setEvent(res.data[0]))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Golf League</h1>
      {event ? (
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Upcoming Event</h2>
          <p>Date: {new Date(event.date).toLocaleDateString()}</p>
          <p>Course: {event.course}</p>
          <p>Teams: {event.teams.map(team => `${team.player1.name} & ${team.player2.name}`).join(', ')}</p>
        </div>
      ) : (
        <p>Loading event...</p>
      )}
    </div>
  );
}

export default Home;