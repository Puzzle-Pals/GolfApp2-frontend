import { useEffect, useState } from 'react';
import axios from 'axios';

function Stats() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios.get('https://golf-league-backend.vercel.app/api/players')
      .then(res => setPlayers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Player Stats</h1>
      {players.length > 0 ? players.map(player => (
        <div key={player._id} className="bg-white p-4 rounded shadow mb-4">
          <p>Player: {player.name}</p>
          <p>Average Score: {player.stats.averageScore}</p>
          <p>Birdies: {player.stats.birdies}</p>
          <p>Wins: {player.stats.wins}</p>
        </div>
      )) : (
        <p>No player stats yet.</p>
      )}
    </div>
  );
}

export default Stats;