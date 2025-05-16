import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Scores = () => {
  const [players, setPlayers] = useState([]);
  const [form, setForm] = useState({
    week: '',
    winners: [],
    secondPlace: [],
    highestScore: [],
    closestToPin: '',
    deucePot: '',
    event: ''
  });

  useEffect(() => {
    axios.get('https://golfapp2-backend-7hkmsnq1t-puzzle-pals-projects.vercel.app/api/players')
      .then(response => setPlayers(response.data))
      .catch(error => console.error('Error fetching players:', error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleMultiSelect = (e, field) => {
    const options = Array.from(e.target.selectedOptions).map(option => option.value);
    setForm({ ...form, [field]: options });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://golfapp2-backend-7hkmsnq1t-puzzle-pals-projects.vercel.app/api/scores', form);
      alert('Score submitted successfully');
      setForm({ week: '', winners: [], secondPlace: [], highestScore: [], closestToPin: '', deucePot: '', event: '' });
    } catch (error) {
      alert('Error submitting score: ' + error.response.data.message);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-green-700 mb-4">Score Entry</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow">
        <div className="mb-4">
          <label className="block text-gray-700">Week</label>
          <input
            type="number"
            name="week"
            value={form.week}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Event ID</label>
          <input
            type="text"
            name="event"
            value={form.event}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Winners (Select 2)</label>
          <select
            multiple
            name="winners"
            value={form.winners}
            onChange={(e) => handleMultiSelect(e, 'winners')}
            className="w-full p-2 border rounded"
            size="4"
          >
            {players.map(player => (
              <option key={player._id} value={player.name}>{player.name}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">2nd Place (Select 2)</label>
          <select
            multiple
            name="secondPlace"
            value={form.secondPlace}
            onChange={(e) => handleMultiSelect(e, 'secondPlace')}
            className="w-full p-2 border rounded"
            size="4"
          >
            {players.map(player => (
              <option key={player._id} value={player.name}>{player.name}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Highest Score (Select 2)</label>
          <select
            multiple
            name="highestScore"
            value={form.highestScore}
            onChange={(e) => handleMultiSelect(e, 'highestScore')}
            className="w-full p-2 border rounded"
            size="4"
          >
            {players.map(player => (
              <option key={player._id} value={player.name}>{player.name}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Closest to Pin (Select 1)</label>
          <select
            name="closestToPin"
            value={form.closestToPin}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Player</option>
            {players.map(player => (
              <option key={player._id} value={player.name}>{player.name}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Deuce Pot (Select 1)</label>
          <select
            name="deucePot"
            value={form.deucePot}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Player</option>
            {players.map(player => (
              <option key={player._id} value={player.name}>{player.name}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="bg-green-600 text-white p-2 rounded hover:bg-green-700">
          Submit Score
        </button>
      </form>
    </div>
  );
};

export default Scores;