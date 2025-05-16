import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-green-600 text-white p-4 flex justify-between">
      <div className="text-lg font-bold">Golf League</div>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/scorecard" className="hover:underline">Scorecard</Link>
        <Link to="/results" className="hover:underline">Results</Link>
        <Link to="/stats" className="hover:underline">Stats</Link>
        <Link to="/admin" className="hover:underline">Admin</Link>
      </div>
    </nav>
  );
}

export default Navbar;