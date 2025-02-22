"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">My Portfolio</h1>
        <button onClick={() => setMenuOpen(!menuOpen)} className="menu-toggle">
          &#9776;
        </button>
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link href="/" className="nav-button" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" className="nav-button" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/contact" className="nav-button" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link href="/skill" className="nav-button" onClick={() => setMenuOpen(false)}>Skill</Link>
        </nav>
      </div>
    </header>
  );
}
