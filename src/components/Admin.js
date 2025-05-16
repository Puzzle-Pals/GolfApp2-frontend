import { useState } from 'react';
import axios from 'axios';

function Admin() {
  const [teams, setTeams] = useState([{ player1: '', player2: '' }]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://golf-league-backend.vercel.app/api/events', {
        date: new Date(),
        course: 'Green Valley',
        teams,
        closestToPinHole: 3
      });
      alert('Teams assigned!');
    } catch (err) {
      alert('Error assigning teams');
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Portal</h1>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold">Manage Teams</h2>
        <div>
          {teams.map((team, i) => (
            <div key={i} className="mb-4">
              <label className="block">Player 1</label>
              <input
                type="text"
                value={team.player1}
                onChange={(e) => {
                  const newTeams = [...teams];
                  newTeams[i].player1 = e.target.value;
                  setTeams(newTeams);
                }}
                className="w-full p-2 border rounded"
              />
              <label className="block">Player 2</label>
              <input
                type="text"
                value={team.player2}
                onChange={(e) => {
                  const newTeams = [...teams];
                  newTeams[i].player2 = e.target.value;
                  setTeams(newTeams);
                }}
                className="w-full p-2 border rounded"
              />
            </div>
          ))}
          <button
            onClick={() => setTeams([...teams, { player1: '', player2: '' }])}
            className="mt-2 bg-blue-600 text-white p-2 rounded"
          >
            Add Team
          </button>
          <button onClick={handleSubmit} className="mt-4 bg-green-600 text-white p-2 rounded">Assign Teams</button>
        </div>
      </div>
    </div>
  );
}

export default Admin;