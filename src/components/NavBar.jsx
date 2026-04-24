import React from 'react'
import { Link } from 'react-router';

export default function NavBar() {
  return (
    <nav className="nav">
      <Link to="/lvl3-w3-d3-useEffect-API/">Home</Link>
      <Link to="/lvl3-w3-d3-useEffect-API/about">About</Link>
    </nav>
  );
}
