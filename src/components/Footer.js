// components/Footer.jsx
import React from "react";

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
        <div className="flex justify-center space-x-8 text-3xl mb-6">
          <span className="animate-bounce">⚽</span>
          <span className="animate-bounce" style={{ animationDelay: "0.1s" }}>
            🏆
          </span>
          <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>
            🔥
          </span>
          <span className="animate-bounce" style={{ animationDelay: "0.3s" }}>
            ⚡
          </span>
          <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>
            🎯
          </span>
        </div>

        {/* Contact Info */}
        <div className="glass-card p-6 rounded-2xl max-w-2xl mx-auto mb-6">
          <h3 className="text-xl font-bold mb-4 text-yellow-400">
            📞 Contact Information
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center justify-center space-x-2">
              <span>📧</span>
              <span>realahmedali4@gmail.com</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span>📱</span>
              <span>+92 335 1507805</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span>📍</span>
              <span>Rawalpindi, Punjab, PK</span>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 mb-6">
          <button className="glass-card p-3 rounded-full hover:neon-glow-blue transition-all duration-300">
            <span className="text-2xl">📘</span>
          </button>
          <button className="glass-card p-3 rounded-full hover:neon-glow-blue transition-all duration-300">
            <span className="text-2xl">📸</span>
          </button>
          <button className="glass-card p-3 rounded-full hover:neon-glow-green transition-all duration-300">
            <span className="text-2xl">📱</span>
          </button>
          <button className="glass-card p-3 rounded-full hover:neon-glow-red transition-all duration-300">
            <span className="text-2xl">🎥</span>
          </button>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-500 border-t border-gray-700 pt-6">
          <p>
            &copy; 2025 Liga Futsoul. All rights reserved. Made with ❤️ for
            football lovers.
          </p>
          <p className="mt-2">
            Powered by passion, driven by competition! ⚽🔥
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
