import React from "react";
import Link from "next/link";

interface SidebarProps {
  isOpen?: boolean;
  toggleSidebar?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen = true, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-header">
        <div className="profile-image">
          <img src="/avatar.jpg" alt="Profile" />
        </div>
        <h2>John Doe</h2>
        <p>Web Developer</p>
        {toggleSidebar && (
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            {isOpen ? "←" : "→"}
          </button>
        )}
      </div>

      <nav className="sidebar-nav">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/resume">Resume</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="sidebar-footer">
        <div className="social-links">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} John Doe</p>
      </div>
    </div>
  );
};

export default Sidebar;
