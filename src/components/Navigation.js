// components/Navigation.jsx
import React, { useState } from "react";
import { Menu, X, Home, UserPlus, Calendar, BookOpen } from "lucide-react";

const Navigation = ({ currentSection, setCurrentSection }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleSectionChange = (section) => {
    setCurrentSection(section);
    closeSidebar();
  };

  const navigationItems = [
    { id: "home", label: "Home", icon: Home, emoji: "🏠" },
    { id: "register", label: "Register", icon: UserPlus, emoji: "📝" },
    { id: "fixtures", label: "Fixtures", icon: Calendar, emoji: "📅" },
    { id: "rules", label: "Rules", icon: BookOpen, emoji: "📋" },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-xl border-b border-green-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              <div className="text-2xl md:text-3xl font-black bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                ⚽ LIGA FUTSOUL
              </div>
              <div className="text-yellow-400 font-bold text-lg md:text-xl">
                2025
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentSection(item.id)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    currentSection === item.id
                      ? "bg-green-500 text-white shadow-lg shadow-green-500/30"
                      : "hover:text-green-400"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleSidebar}
                className="p-2 bg-green-600/80 rounded-lg hover:bg-green-500 transition-all duration-300 shadow-lg shadow-green-500/30"
              >
                <Menu className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 md:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-black/90 backdrop-blur-xl border-l border-green-500/20 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          {/* Sidebar Header */}
          <div className="flex justify-between items-center mb-8">
            <div className="text-xl font-black bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              ⚽ MENU
            </div>
            <button
              onClick={closeSidebar}
              className="p-2 hover:bg-green-500/20 rounded-lg transition-colors duration-300"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Tournament Info Card */}
          <div className="glass-card p-4 rounded-xl mb-6 border border-yellow-500/30 shadow-lg shadow-yellow-500/10">
            <h3 className="text-lg font-bold text-yellow-400 mb-2">
              🏆 Liga Futsoul 2025
            </h3>
            <div className="text-sm text-gray-300 space-y-1">
              <p>⚽ Ultimate Futsal Championship</p>

              <p>🎯 32 Teams Maximum</p>
              <p>📍 Twin Cities Tournament</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3 mb-6">
            <h3 className="text-sm font-semibold text-green-400 mb-3">
              📍 NAVIGATION
            </h3>
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSectionChange(item.id)}
                className={`w-full flex items-center space-x-4 px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  currentSection === item.id
                    ? "bg-green-500/80 text-white shadow-lg shadow-green-500/30"
                    : "hover:bg-green-500/20 text-gray-300 hover:text-white"
                }`}
              >
                <span className="text-2xl">{item.emoji}</span>
                <div className="flex-1 text-left">
                  <div className="font-bold">{item.label}</div>
                  <div className="text-xs opacity-75">
                    {item.id === "home" && "Tournament overview"}
                    {item.id === "register" && "Register your team"}
                    {item.id === "fixtures" && "Match schedules"}
                    {item.id === "rules" && "Tournament guidelines"}
                  </div>
                </div>
                {currentSection === item.id && (
                  <div className="text-green-300">✓</div>
                )}
              </button>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="glass-card p-4 rounded-xl mb-6 border border-blue-500/30">
            <h3 className="text-sm font-semibold text-blue-400 mb-3">
              🚀 Quick Actions
            </h3>
            <div className="space-y-2">
              <button
                onClick={() => handleSectionChange("register")}
                className="w-full text-left px-3 py-2 hover:bg-blue-500/20 rounded-lg transition-colors duration-300 text-sm"
              >
                🎯 Register Team Now
              </button>
              <button
                onClick={() => handleSectionChange("fixtures")}
                className="w-full text-left px-3 py-2 hover:bg-blue-500/20 rounded-lg transition-colors duration-300 text-sm"
              >
                📅 Check Fixtures
              </button>
              <button
                onClick={() => handleSectionChange("rules")}
                className="w-full text-left px-3 py-2 hover:bg-blue-500/20 rounded-lg transition-colors duration-300 text-sm"
              >
                📖 Read Rules
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="glass-card p-4 rounded-xl border border-purple-500/30">
            <h3 className="text-sm font-semibold text-purple-400 mb-3">
              📞 Contact
            </h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <span>📧</span>
                <span>info@ligafutsoul.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📱</span>
                <span>+92 300 1234567</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📍</span>
                <span>Rawalpindi, Punjab</span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-gray-700">
            <div className="text-center text-xs text-gray-500">
              <p>Liga Futsoul 2025</p>
              <p className="mt-1 text-green-400">
                🏆 Where Champions Are Born!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for glass effect */}
      <style jsx>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </>
  );
};

export default Navigation;
