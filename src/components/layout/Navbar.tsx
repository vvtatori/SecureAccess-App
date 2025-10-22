import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <h2>SecureVault</h2>
      <ul>
        <li>Home</li>
        <li>My Passwords</li>
        <li>Logout</li>
      </ul>
    </nav>
  );
};

export default Navbar;
