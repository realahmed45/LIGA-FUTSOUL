// components/RegistrationClosedModal.jsx
import React from "react";

const RegistrationClosedModal = ({ registrationResult, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
      <div className="glass-card p-12 rounded-3xl max-w-2xl mx-auto text-center border border-red-500/30 neon-glow-red relative overflow-hidden">
        {/* Sad Background Animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-4xl animate-bounce">
            😢
          </div>
          <div
            className="absolute bottom-10 right-10 text-3xl animate-bounce"
            style={{ animationDelay: "1s" }}
          >
            💔
          </div>
          <div
            className="absolute top-1/2 left-1/4 text-2xl animate-bounce"
            style={{ animationDelay: "2s" }}
          >
            😔
          </div>
          <div
            className="absolute top-1/4 right-1/4 text-2xl animate-bounce"
            style={{ animationDelay: "1.5s" }}
          >
            😞
          </div>
          <div
            className="absolute bottom-1/4 left-1/2 text-xl animate-bounce"
            style={{ animationDelay: "2.5s" }}
          >
            💙
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          <div className="text-8xl mb-6 animate-pulse">😢</div>
          <h3 className="text-4xl font-bold mb-4 text-red-400 font-orbitron">
            REGISTRATION CLOSED!
          </h3>
          <div className="text-6xl mb-4">💔</div>
          <p className="text-2xl mb-6 text-yellow-400 font-bold">
            Ohh... The slots have been filled!
          </p>

          {/* Registration Status */}
          <div className="text-left bg-red-500/10 p-6 rounded-xl mb-6 border border-red-500/30">
            <p className="text-lg text-gray-300 text-center mb-4">
              We're overwhelmed by the amazing response! All{" "}
              <strong className="text-red-400">
                {registrationResult?.totalTeams || "32"}
              </strong>{" "}
              spots have been taken by incredible teams. 🏆
            </p>

            <div className="glass-card p-4 rounded-lg bg-gray-500/10 border border-gray-500/30">
              <div className="flex justify-between items-center">
                <span>Total Slots:</span>
                <span className="text-blue-400 font-bold">32 Teams</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span>Registered Teams:</span>
                <span className="text-red-400 font-bold">
                  {registrationResult?.totalTeams || "32"} Teams
                </span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span>Available Slots:</span>
                <span className="text-gray-400 font-bold">0 Remaining</span>
              </div>
            </div>

            <div className="mt-4 p-4 bg-blue-500/10 rounded-lg border border-blue-500/30">
              <p className="text-center text-blue-300">
                💙 Don't worry! Keep training and follow us for Liga Futsoul
                2026! <br />
                Champions are made in preparation! ⚽✨
              </p>
            </div>
          </div>

          {/* Alternative Options */}
          <div className="space-y-4 mb-6">
            <div className="glass-card p-4 rounded-xl bg-green-500/10 border border-green-500/30">
              <h4 className="text-lg font-bold mb-2 text-green-400">
                🌟 Silver Lining
              </h4>
              <p className="text-green-300">
                Your passion for futsal shows you're already a champion! Keep
                that spirit alive! 💪
              </p>
            </div>

            <div className="glass-card p-4 rounded-xl bg-purple-500/10 border border-purple-500/30">
              <h4 className="text-lg font-bold mb-2 text-purple-400">
                📅 Next Year
              </h4>
              <p className="text-purple-300">
                Liga Futsoul 2026 is coming! Follow us to be the first to know
                about registration! 🚀
              </p>
            </div>

            <div className="glass-card p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/30">
              <h4 className="text-lg font-bold mb-2 text-yellow-400">
                ⚽ Stay Connected
              </h4>
              <p className="text-yellow-300">
                Join our community and never miss another tournament
                opportunity! 🎯
              </p>
            </div>
          </div>

          {/* Encouragement Section */}
          <div className="glass-card p-6 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
            <h3 className="text-xl font-bold mb-3 text-purple-400">
              💪 Keep the Dream Alive!
            </h3>
            <div className="text-left space-y-2 text-gray-300">
              <p>🏆 Every champion started as a dreamer</p>
              <p>⚽ Use this time to train and improve your skills</p>
              <p>🎯 Set your goals for Liga Futsoul 2026</p>
              <p>🔥 The beautiful game never stops inspiring!</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="glass-card p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 mb-6">
            <h4 className="text-lg font-bold mb-2 text-blue-400">
              📞 Stay Updated
            </h4>
            <div className="text-sm space-y-1">
              <p>📧 info@ligafutsoul.com</p>
              <p>📱 +92 300 1234567</p>
              <p>🌐 Follow us on social media for updates!</p>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="morphing-button bg-gradient-to-r from-blue-500 to-purple-600 px-12 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300"
          >
            😔 I UNDERSTAND
          </button>

          {/* Final Message */}
          <div className="mt-6 text-sm text-gray-400">
            <p>Remember: Every setback is a setup for a comeback! 💙</p>
            <p className="mt-1">
              We'll see you on the field next time, champion! 🏆⚽
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationClosedModal;
