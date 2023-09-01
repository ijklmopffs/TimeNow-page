import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/Logo.svg";

export default function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between p-5">
        <div className="flex gap-4">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <a href="/">Features</a>
          <a href="/pricing">Pricing</a>
        </div>
        <button className="bg-blue-900 text-white p-2 font-bold rounded-md hover:opacity-80">
          Start Scheduling
        </button>
      </nav>
    </>
  );
}
