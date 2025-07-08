// components/SuccessModal.jsx
import React from "react";

const SuccessModal = ({ registrationResult, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
      <div className="glass-card p-8 rounded-3xl max-w-lg mx-auto text-center border border-green-500/30 neon-glow-green relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-6 left-6 text-3xl animate-bounce">
            🎉
          </div>
          <div
            className="absolute bottom-6 right-6 text-2xl animate-bounce"
            style={{ animationDelay: "1s" }}
          >
            ⭐
          </div>
          <div
            className="absolute top-1/2 left-1/4 text-xl animate-bounce"
            style={{ animationDelay: "1.5s" }}
          >
            🎊
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          <div className="text-6xl mb-4 animate-bounce">🏆</div>
          <h3 className="text-3xl font-bold mb-3 text-green-400 font-orbitron">
            REGISTRATION SUCCESSFUL!
          </h3>
          <div className="text-4xl mb-4">🎉</div>
          <p className="text-lg mb-6 text-gray-300">
            Your team has been registered successfully!
            <br />
            Payment verification is pending.
          </p>

          {/* Registration Details */}
          {registrationResult && (
            <div className="bg-green-500/10 p-4 rounded-xl mb-6 border border-green-500/30">
              <h4 className="text-lg font-bold mb-3 text-green-400">
                🎯 Registration Details
              </h4>
              <div className="space-y-2 text-sm">
                <p className="flex justify-between">
                  <strong>Team ID:</strong>
                  <span className="text-green-300">
                    {registrationResult.teamId}
                  </span>
                </p>
                <p className="flex justify-between">
                  <strong>Status:</strong>
                  <span className="text-yellow-400">Verification Pending</span>
                </p>
              </div>
            </div>
          )}

          {/* What's Next */}
          <div className="glass-card p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 mb-6">
            <h4 className="text-lg font-bold mb-2 text-blue-400">
              📧 What's Next?
            </h4>
            <div className="text-sm text-left space-y-1">
              <p>• Payment verification within 24 hours</p>
              <p>• Email confirmation once approved</p>
              <p>• Tournament fixtures announced soon</p>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="morphing-button bg-gradient-to-r from-green-500 to-blue-600 px-8 py-3 rounded-full font-bold text-lg neon-glow-green hover:scale-105 transition-all duration-300"
          >
            🚀 AWESOME!
          </button>

          {/* Footer Message */}
          <div className="mt-4 text-sm text-gray-400">
            <p>Keep training! Champions are made through preparation! 🏆⚽</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
