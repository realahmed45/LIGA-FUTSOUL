// components/HeroSection.jsx
import React from "react";

const HeroSection = ({ setCurrentSection, registrationStatus }) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20 mt-20">
      <div className="text-center z-10 max-w-6xl mx-auto px-6 animate-on-load">
        <div className="text-8xl mb-6 animate-bounce">🏆</div>
        <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-yellow-400 via-green-500 to-blue-600 bg-clip-text text-transparent animate-on-load">
          LIGA FUTSOUL
        </h1>
        <div className="text-3xl md:text-5xl font-bold mb-4 text-yellow-400 animate-on-load">
          2025 CHAMPIONSHIP
        </div>
        <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed animate-on-load">
          The ultimate futsal experience awaits! Join the most prestigious
          tournament in the twin cities. Where legends are born and dreams come
          alive! ⚡
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12 animate-on-load">
          <button
            onClick={() => setCurrentSection("register")}
            className="group relative px-12 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full text-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/30"
          >
            <span className="relative z-10">🚀 REGISTER YOUR TEAM</span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <button
            onClick={() => setCurrentSection("rules")}
            className="px-12 py-4 bg-white/10 backdrop-blur-xl border-2 border-blue-500 rounded-full text-xl font-bold transition-all duration-300 hover:bg-blue-500/20 hover:scale-105"
          >
            📋 TOURNAMENT RULES
          </button>
        </div>

        {/* Stats Counter */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-on-load">
          <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
            <div className="text-4xl font-bold text-green-400 mb-2">
              {registrationStatus.totalTeams}
            </div>
            <div className="text-lg text-gray-300">Teams Registered</div>
            {registrationStatus.slotsRemaining <= 5 &&
              registrationStatus.slotsRemaining > 0 && (
                <div className="mt-2 text-sm text-red-400 font-bold animate-pulse">
                  Only {registrationStatus.slotsRemaining} slots left!
                </div>
              )}
          </div>
          <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
            <div className="text-4xl font-bold text-yellow-400 mb-2">
              Winner prize ( To be decided)
            </div>
            <div className="text-4xl font-bold text-yellow-400 mb-2">
              Runnerup 6k
            </div>
            <div className="text-lg text-gray-300">Prize Pool</div>
          </div>
          <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
            <div className="text-4xl font-bold text-blue-400 mb-2">32</div>
            <div className="text-lg text-gray-300">Max Teams</div>
            {!registrationStatus.registrationOpen && (
              <div className="mt-2 text-sm text-red-400 font-bold">
                🔒 Registration Closed
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
