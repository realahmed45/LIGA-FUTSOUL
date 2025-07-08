// components/FixturesSection.jsx
import React from "react";
// components/RulesSection.jsx
import { Shield, Users, Trophy } from "lucide-react";
import { Calendar } from "lucide-react";

const FixturesSection = ({ fixtures }) => {
  return (
    <section className="min-h-screen py-20 pt-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-load">
          <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            TOURNAMENT FIXTURES
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Check your team's match schedule and prepare for glory! ⚔️
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {fixtures.length === 0 ? (
            <div className="text-center py-20 animate-on-load">
              <div className="text-8xl mb-6">⏰</div>
              <h3 className="text-3xl font-bold mb-4 text-yellow-400">
                Fixtures Will Be Updated Soon
              </h3>
              <p className="text-xl text-gray-400">
                Tournament draws are being prepared. Stay tuned!
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {fixtures.map((fixture, index) => (
                <div
                  key={fixture._id}
                  className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 animate-on-load"
                >
                  <h3 className="text-3xl font-bold mb-6 text-center text-yellow-400">
                    {fixture.round}
                  </h3>
                  <div className="grid gap-6">
                    {fixture.matches.map((match, matchIndex) => (
                      <div
                        key={matchIndex}
                        className="bg-white/5 backdrop-blur-xl p-6 rounded-xl border border-green-500/30"
                      >
                        <div className="flex justify-between items-center mb-4">
                          <div className="text-xl font-bold text-cyan-400">
                            {match.team1.teamName}
                          </div>
                          <div className="text-3xl font-bold text-yellow-400 mx-4">
                            VS
                          </div>
                          <div className="text-xl font-bold text-cyan-400">
                            {match.team2.teamName}
                          </div>
                        </div>
                        <div className="text-center text-gray-400">
                          <Calendar className="w-5 h-5 inline mr-2" />
                          {new Date(match.date).toLocaleDateString()} | ⏰{" "}
                          {match.time} | 📍 {match.venue}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const RulesSection = () => {
  return (
    <section className="min-h-screen py-20 pt-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-load">
          <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
            TOURNAMENT RULES
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Registration Rules */}
          <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-red-500/30 animate-on-load">
            <h3 className="text-3xl font-bold mb-6 text-red-400 flex items-center">
              <Shield className="w-8 h-8 mr-3" />
              Registration & Payment
            </h3>
            <div className="space-y-4 text-lg">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">💰</span>
                <p>
                  Full advance payment required at least 7 days before
                  tournament
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🚫</span>
                <p>No spot payments or late payments entertained</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">✅</span>
                <p>
                  Team confirmed only after full payment and player list
                  submission
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🔄</span>
                <p>
                  Refunds only for dire emergencies with proof (before July 25,
                  2025)
                </p>
              </div>
            </div>
          </div>

          {/* Match Day Rules */}
          <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-blue-500/30 animate-on-load">
            <h3 className="text-3xl font-bold mb-6 text-blue-400 flex items-center">
              <Calendar className="w-8 h-8 mr-3" />
              Match Day Rules
            </h3>
            <div className="space-y-4 text-lg">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🕐</span>
                <p>Report 20 minutes before scheduled match time</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">⚠️</span>
                <p>Late arrival beyond 10 minutes = walkover</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">👨‍💼</span>
                <p>Only team captain communicates with organizers</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🆔</span>
                <p>Captains must bring original CNIC/ID</p>
              </div>
            </div>
          </div>

          {/* Code of Conduct */}
          <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-green-500/30 animate-on-load">
            <h3 className="text-3xl font-bold mb-6 text-green-400 flex items-center">
              <Users className="w-8 h-8 mr-3" />
              Code of Conduct
            </h3>
            <div className="space-y-4 text-lg">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🤝</span>
                <p>Respect and sportsmanship mandatory</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🚫</span>
                <p>No abusive language or aggressive behavior</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">⚡</span>
                <p>Immediate disqualification for misconduct</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🏃‍♂️</span>
                <p>Appropriate futsal shoes and kits required</p>
              </div>
            </div>
          </div>

          {/* Tournament Info */}
          <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-purple-500/30 animate-on-load">
            <h3 className="text-3xl font-bold mb-6 text-purple-400 flex items-center">
              <Trophy className="w-8 h-8 mr-3" />
              Tournament Info
            </h3>
            <div className="space-y-4 text-lg">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🌍</span>
                <p>Open to all teams across twin cities</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">💎</span>
                <p>Affordable environment for all skill levels</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🎯</span>
                <p>Showcase your talent and compete</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">❤️</span>
                <p>Built by football lovers for football lovers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// components/Footer.jsx
const Footer = () => {
  return (
    <footer className="py-12 bg-black/20 border-t border-green-500/20">
      <div className="container mx-auto px-6 text-center">
        <div className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          LIGA FUTSOUL 2025
        </div>
        <p className="text-xl text-gray-400 mb-6">
          Where Champions Are Born! 🏆
        </p>
        <div className="flex justify-center space-x-8 text-3xl">
          <span>⚽</span>
          <span>🏆</span>
          <span>🔥</span>
          <span>⚡</span>
          <span>🎯</span>
        </div>
      </div>
    </footer>
  );
};

// components/SuccessModal.jsx
const SuccessModal = ({ registrationResult, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
      <div className="bg-white/10 backdrop-blur-xl p-12 rounded-3xl max-w-2xl mx-auto text-center border border-green-500/30 shadow-2xl shadow-green-500/20">
        <div className="text-8xl mb-6">🏆</div>
        <h3 className="text-4xl font-bold mb-4 text-green-400">
          REGISTRATION SUCCESSFUL!
        </h3>
        <p className="text-xl mb-6 text-gray-300">
          Your team has been registered successfully! Payment verification is
          pending.
        </p>
        {registrationResult && (
          <div className="text-left bg-green-500/10 p-6 rounded-xl mb-6 border border-green-500/30">
            <h4 className="text-xl font-bold mb-3 text-green-400">
              Team Registration Details:
            </h4>
            <p>
              <strong>Team ID:</strong> {registrationResult.teamId}
            </p>
            <p>
              <strong>Status:</strong> Payment verification pending
            </p>
            <p className="mt-3 text-yellow-400">
              📧 You will be contacted once payment is verified!
            </p>
          </div>
        )}
        <button
          onClick={onClose}
          className="px-8 py-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
        >
          AWESOME! 🚀
        </button>
      </div>
    </div>
  );
};

// components/RegistrationClosedModal.jsx
const RegistrationClosedModal = ({ registrationResult, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
      <div className="bg-white/10 backdrop-blur-xl p-12 rounded-3xl max-w-2xl mx-auto text-center border border-red-500/30 shadow-2xl shadow-red-500/20">
        <div className="text-8xl mb-6">😢</div>
        <h3 className="text-4xl font-bold mb-4 text-red-400">
          REGISTRATION CLOSED!
        </h3>
        <div className="text-6xl mb-4">💔</div>
        <p className="text-2xl mb-6 text-yellow-400 font-bold">
          Ohh... The slots have been filled!
        </p>
        <div className="text-left bg-red-500/10 p-6 rounded-xl mb-6 border border-red-500/30">
          <p className="text-lg text-gray-300 text-center">
            We're overwhelmed by the response! All{" "}
            <strong className="text-red-400">
              {registrationResult?.totalTeams}
            </strong>{" "}
            spots have been taken by amazing teams. 🏆
          </p>
          <div className="mt-4 p-4 bg-blue-500/10 rounded-lg border border-blue-500/30">
            <p className="text-center text-blue-300">
              💙 Don't worry! Keep training and follow us for Liga Futsoul 2026!
              Champions are made in preparation! ⚽✨
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
        >
          😔 I UNDERSTAND
        </button>
      </div>
    </div>
  );
};

export {
  FixturesSection,
  RulesSection,
  Footer,
  SuccessModal,
  RegistrationClosedModal,
};
