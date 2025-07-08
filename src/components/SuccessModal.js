// components/SuccessModal.jsx
import React from "react";

const SuccessModal = ({ registrationResult, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
      <div className="glass-card p-12 rounded-3xl max-w-2xl mx-auto text-center border border-green-500/30 neon-glow-green relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-4xl animate-bounce">
            🎉
          </div>
          <div
            className="absolute bottom-10 right-10 text-3xl animate-bounce"
            style={{ animationDelay: "1s" }}
          >
            ⭐
          </div>
          <div
            className="absolute top-1/2 left-1/4 text-2xl animate-bounce"
            style={{ animationDelay: "2s" }}
          >
            🎊
          </div>
          <div
            className="absolute top-1/4 right-1/4 text-2xl animate-bounce"
            style={{ animationDelay: "1.5s" }}
          >
            🌟
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          <div className="text-8xl mb-6 animate-bounce">🏆</div>
          <h3 className="text-4xl font-bold mb-4 text-green-400 font-orbitron">
            REGISTRATION SUCCESSFUL!
          </h3>
          <div className="text-6xl mb-4">🎉</div>
          <p className="text-xl mb-6 text-gray-300">
            Your team has been registered successfully! Payment verification is
            pending.
          </p>

          {/* Registration Details */}
          {registrationResult && (
            <div className="text-left bg-green-500/10 p-6 rounded-xl mb-6 border border-green-500/30">
              <h4 className="text-xl font-bold mb-3 text-green-400 text-center">
                🎯 Team Registration Details:
              </h4>
              <div className="space-y-2">
                <p className="flex justify-between">
                  <strong>Team ID:</strong>
                  <span className="text-green-300">
                    {registrationResult.teamId}
                  </span>
                </p>
                <p className="flex justify-between">
                  <strong>Status:</strong>
                  <span className="text-yellow-400">
                    Payment verification pending
                  </span>
                </p>
                <p className="flex justify-between">
                  <strong>Next Step:</strong>
                  <span className="text-blue-300">Wait for confirmation</span>
                </p>
              </div>

              <div className="mt-4 p-4 bg-blue-500/10 rounded-lg border border-blue-500/30">
                <p className="text-center text-blue-300 font-bold">
                  📧 You will be contacted once payment is verified!
                </p>
              </div>
            </div>
          )}

          {/* Success Messages */}
          <div className="space-y-4 mb-8">
            <div className="glass-card p-4 rounded-xl bg-green-500/10 border border-green-500/30">
              <p className="text-green-300">
                ✅ <strong>Registration Form:</strong> Successfully submitted
              </p>
            </div>
            <div className="glass-card p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
              <p className="text-blue-300">
                📤 <strong>Payment Screenshot:</strong> Uploaded for
                verification
              </p>
            </div>
            <div className="glass-card p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/30">
              <p className="text-yellow-300">
                ⏳ <strong>Admin Review:</strong> In progress
              </p>
            </div>
          </div>

          {/* What's Next */}
          <div className="glass-card p-6 rounded-xl bg-purple-500/10 border border-purple-500/30 mb-6">
            <h4 className="text-xl font-bold mb-3 text-purple-400">
              🚀 What's Next?
            </h4>
            <div className="text-left space-y-2">
              <p>1. 📋 Admin will verify your payment screenshot</p>
              <p>2. 📧 You'll receive confirmation email within 24 hours</p>
              <p>3. 📅 Tournament fixtures will be announced soon</p>
              <p>4. 🏆 Get ready to compete for the championship!</p>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="morphing-button bg-gradient-to-r from-green-500 to-blue-600 px-12 py-4 rounded-full font-bold text-lg neon-glow-green hover:scale-105 transition-all duration-300"
          >
            🚀 AWESOME! LET'S GO!
          </button>

          {/* Additional Info */}
          <div className="mt-6 text-sm text-gray-400">
            <p>Keep training and stay ready! 💪⚽</p>
            <p className="mt-1">Champions are made through preparation! 🏆✨</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
