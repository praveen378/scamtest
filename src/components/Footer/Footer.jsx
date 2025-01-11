import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-4 text-center">
      <p>
        &copy; {new Date().getFullYear()} महाकुंभ 2025 | All Rights Reserved
      </p>
    </footer>
  );
}
