import React from 'react'
import { Link } from 'react-router';

export default function NavBar() {
  return (
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}
