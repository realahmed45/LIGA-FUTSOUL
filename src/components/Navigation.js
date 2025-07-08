// components/Navigation.jsx
import React from "react";

const Navigation = ({ currentSection, setCurrentSection }) => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-xl border-b border-green-500/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="text-3xl font-black bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              ⚽ LIGA FUTSOUL
            </div>
            <div className="text-yellow-400 font-bold text-xl">2025</div>
          </div>
          <div className="hidden md:flex space-x-6">
            {["home", "register", "fixtures", "rules"].map((section) => (
              <button
                key={section}
                onClick={() => setCurrentSection(section)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  currentSection === section
                    ? "bg-green-500 text-white shadow-lg shadow-green-500/30"
                    : "hover:text-green-400"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
