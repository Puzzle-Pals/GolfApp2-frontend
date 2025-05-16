import { useState } from 'react';
import axios from 'axios';

function Admin() {
  const [players, setPlayers] = useState([{ name: '', handicap: '' }]);
  const [results, setResults] = useState({
    firstPlace: ['', ''],
    secondPlace: ['', ''],
    highestScore: ['', ''],
    closestToPin: '',
    deucePot: ''
  });

  const handlePlayerChange = (index, field, value) => {
    const newPlayers = [...players];
    newPlayers[index][field] = value;
    setPlayers(newPlayers);
  };

  const submitPlayers = async () => {
    try {
      await axios.post('https://golf-league-backend.vercel.app/api/players', { players });
      alert('Players added/updated!');
    } catch (err) {
      alert('Error updating players');
    }
  };

  const submitResults = async () => {
    try {
      await axios.post('https://golf-league-backend.vercel.app/api/results', {
        ...results,
        date: new Date(),
        course: 'Green Valley'
      });
      alert('Results submitted!');
    } catch (err) {
      alert('Error submitting results');
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Portal</h1>

      {/* Player Management */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="text-lg font-semibold mb-2">Add/Update Players</h2>
        {players.map((player, i) => (
          <div key={i} className="mb-4">
            <input
              type="text"
              placeholder="Name"
              value={player.name}
              onChange={(e) => handlePlayerChange(i, 'name', e.target.value)}
              className="mr-2 p-2 border rounded"
            />
            <input
              type="number"
              placeholder="Handicap"
              value={player.handicap}
              onChange={(e) => handlePlayerChange(i, 'handicap', e.target.value)}
              className="p-2 border rounded"
            />
          </div>
        ))}
        <button onClick={() => setPlayers([...players, { name: '', handicap: '' }])} className="bg-blue-600 text-white px-4 py-2 rounded mr-2">Add Player</button>
        <button onClick={submitPlayers} className="bg-green-600 text-white px-4 py-2 rounded">Save Players</button>
      </div>

      {/* Result Entry */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Enter Weekly Results</h2>

        <div className="grid grid-cols-2 gap-4">
          {['firstPlace', 'secondPlace', 'highestScore'].map(category => (
            <div key={category}>
              <label className="block mb-1 capitalize">{category.replace(/([A-Z])/g, ' $1')}</label>
              <input type="text" placeholder="Player 1" className="p-2 border rounded w-full mb-2"
                value={results[category][0]} onChange={(e) => {
                  const newVal = [...results[category]];
                  newVal[0] = e.target.value;
                  setResults({ ...results, [category]: newVal });
                }} />
              <input type="text" placeholder="Player 2" className="p-2 border rounded w-full"
                value={results[category][1]} onChange={(e) => {
                  const newVal = [...results[category]];
                  newVal[1] = e.target.value;
                  setResults({ ...results, [category]: newVal });
                }} />
            </div>
          ))}

          <div>
            <label className="block mb-1">Closest to Pin</label>
            <input type="text" className="p-2 border rounded w-full"
              value={results.closestToPin}
              onChange={(e) => setResults({ ...results, closestToPin: e.target.value })} />
          </div>
          <div>
            <label className="block mb-1">Deuce Pot</label>
            <input type="text" className="p-2 border rounded w-full"
              value={results.deucePot}
              onChange={(e) => setResults({ ...results, deucePot: e.target.value })} />
          </div>
        </div>

        <button onClick={submitResults} className="mt-4 bg-green-600 text-white px-4 py-2 rounded">
          Submit Results
        </button>
      </div>
    </div>
  );
}

export default Admin;
