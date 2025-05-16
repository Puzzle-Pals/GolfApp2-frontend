import { useState } from 'react';
import axios from 'axios';

function Scorecard() {
  const [scores, setScores] = useState(Array(9).fill(''));
  const [closestToPin, setClosestToPin] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://golf-league-backend.vercel.app/api/scores', {
        event: 'event_id', // Replace with actual event ID
        team: { player1: 'player1_id', player2: 'player2_id' }, // Replace with actual player IDs
        scores: scores.map((score, i) => ({ hole: i + 1, score: parseInt(score) || 0 })),
        totalScore: scores.reduce((sum, score) => sum + (parseInt(score) || 0), 0),
        closestToPin
      });
      alert('Scorecard submitted!');
    } catch (err) {
      alert('Error submitting scorecard');
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Submit Scorecard</h1>
      <div className="bg-white p-4 rounded shadow">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            {scores.map((score, i) => (
              <div key={i}>
                <label className="block">Hole {i + 1}</label>
                <input
                  type="number"
                  value={score}
                  onChange={(e) => {
                    const newScores = [...scores];
                    newScores[i] = e.target.value;
                    setScores(newScores);
                  }}
                  className="w-full p-2 border rounded"
                />
              </div>
            ))}

            <div>
              <label className="block">Closest to Pin Winner</label>
              <input
                type="text"
                value={closestToPin}
                onChange={(e) => setClosestToPin(e.target.value)}
                placeholder="Enter player name or ID"
                className="w-full p-2 border rounded"
              />
            </div>
          </div>

          <button type="submit" className="mt-4 bg-green-600 text-white p-2 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Scorecard;
