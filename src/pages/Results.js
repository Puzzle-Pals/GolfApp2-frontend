import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Results = () => {
  const [results, setResults] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    axios.get('https://golfapp2-backend-7hkmsnq1t-puzzle-pals-projects.vercel.app/api/scores')
      .then(response => setResults(response.data))
      .catch(error => console.error('Error fetching results:', error));

    axios.get('https://golfapp2-backend-7hkmsnq1t-puzzle-pals-projects.vercel.app/api/players/leaderboard')
      .then(response => setLeaderboard(response.data))
      .catch(error => console.error('Error fetching leaderboard:', error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-green-700 mb-4">Results & Leaderboard</h1>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Weekly Results</h2>
        {results.length > 0 ? (
          results.map(result => (
            <div key={result._id} className="bg-white p-4 rounded-lg shadow mb-4">
              <p><strong>Week:</strong> {result.week}</p>
              <p><strong>Winners:</strong> {result.winners.join(', ')}</p>
              <p><strong>2nd Place:</strong> {result.secondPlace.join(', ')}</p>
              <p><strong>Highest Score:</strong> {result.highestScore.join(', ')}</p>
              <p><strong>Closest to Pin:</strong> {result.closestToPin}</p>
              <p><strong>Deuce Pot:</strong> {result.deucePot}</p>
            </div>
          ))
        ) : (
          <p>No results available.</p>
        )}
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Season Leaderboard</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow">
            <thead>
              <tr className="bg-green-600 text-white">
                <th className="p-2">Player</th>
                <th className="p-2">Wins</th>
                <th className="p-2">2nd Place</th>
                <th className="p-2">Highest Score</th>
                <th className="p-2">Deuce Pot</th>
                <th className="p-2">Closest to Pin</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.length > 0 ? (
                leaderboard.map(player => (
                  <tr key={player._id} className="border-t">
                    <td className="p-2">{player.name}</td>
                    <td className="p-2">{player.wins}</td>
                    <td className="p-2">{player.secondPlace}</td>
                    <td className="p-2">{player.highestScore}</td>
                    <td className="p-2">{player.deucePotWins}</td>
                    <td className="p-2">{player.closestToPin}</td>
                  </tr>
                ))
              ) : (
                <tr><td colSpan="6" className="p-2 text-center">No leaderboard data.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Results;