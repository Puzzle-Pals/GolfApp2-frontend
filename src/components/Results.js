import { useEffect, useState } from 'react';
import axios from 'axios';

function Results() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios.get('https://golf-league-backend.vercel.app/api/prizes')
      .then(res => setResults(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Weekly Results</h1>
      {results.length > 0 ? results.map(result => (
        <div key={result._id} className="bg-white p-4 rounded shadow mb-4">
          <h2 className="text-lg font-semibold">{new Date(result.event.date).toLocaleDateString()}</h2>
          <p>1st Place: {result.firstPlace.team.player1.name} & {result.firstPlace.team.player2.name} (${result.firstPlace.amount})</p>
          <p>2nd Place: {result.secondPlace.team.player1.name} & {result.secondPlace.team.player2.name} (${result.secondPlace.amount})</p>
          <p>High Score: {result.highScore.team.player1.name} & {result.highScore.team.player2.name} (${result.highScore.amount})</p>
          <p>Closest to Pin: {result.closestToPin.player.name} (${result.closestToPin.amount})</p>
          <p>Deuce Pot: {result.deucePot.player.name} (${result.deucePot.amount})</p>
        </div>
      )) : (
        <p>No results yet.</p>
      )}
    </div>
  );
}

export default Results;
