// components/TeamPortal.jsx
import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  Trophy,
  Users,
  Calendar,
  Shield,
  Upload,
  X,
  CheckCircle,
} from "lucide-react";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import RegistrationSection from "./RegistartionSection";
import { RulesSection } from "./FixtureSections";
import { FixturesSection } from "./FixtureSections";
import Footer from "./Footer";
import SuccessModal from "./SuccessModal";
import RegistrationClosedModal from "./RegistrationClosedModal";
import { registrationAPI } from "../services/api";

const TeamPortal = () => {
  const [currentSection, setCurrentSection] = useState("home");
  const [fixtures, setFixtures] = useState([]);
  const [registrationStatus, setRegistrationStatus] = useState({
    registrationOpen: true,
    totalTeams: 0,
    maxTeams: 32,
    slotsRemaining: 32,
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showClosedModal, setShowClosedModal] = useState(false);
  const [registrationResult, setRegistrationResult] = useState(null);

  useEffect(() => {
    loadFixtures();
    checkRegistrationStatus();
    animateElements();
  }, []);

  const checkRegistrationStatus = async () => {
    try {
      const data = await registrationAPI.checkStatus();
      setRegistrationStatus(data);
    } catch (error) {
      console.error("Error checking registration status:", error);
    }
  };

  const loadFixtures = async () => {
    try {
      const data = await registrationAPI.getFixtures();
      setFixtures(data);
    } catch (error) {
      console.error("Error loading fixtures:", error);
    }
  };

  const animateElements = () => {
    const elements = document.querySelectorAll(".animate-on-load");
    elements.forEach((el, index) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      setTimeout(() => {
        el.style.transition = "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, index * 150);
    });
  };

  const handleRegistrationSuccess = (result) => {
    setRegistrationResult(result);
    setShowSuccessModal(true);
    checkRegistrationStatus();
    createCelebration();
  };

  const handleRegistrationClosed = (result) => {
    setRegistrationResult(result);
    setShowClosedModal(true);
  };

  const createCelebration = () => {
    const colors = ["#22c55e", "#3b82f6", "#f59e0b", "#ef4444", "#8b5cf6"];
    for (let i = 0; i < 50; i++) {
      setTimeout(() => {
        const confetti = document.createElement("div");
        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "%";
        confetti.style.top = "-10px";
        confetti.style.width = "10px";
        confetti.style.height = "10px";
        confetti.style.backgroundColor =
          colors[Math.floor(Math.random() * colors.length)];
        confetti.style.borderRadius = "50%";
        confetti.style.pointerEvents = "none";
        confetti.style.zIndex = "9999";
        confetti.style.animation = "confettiFall 3s linear forwards";

        document.body.appendChild(confetti);

        setTimeout(() => {
          if (confetti.parentNode) confetti.parentNode.removeChild(confetti);
        }, 3000);
      }, i * 50);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-green-500/10 rounded-full blur-xl animate-pulse"></div>
        <div
          className="absolute top-1/3 right-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <Navigation
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />

      {currentSection === "home" && (
        <HeroSection
          setCurrentSection={setCurrentSection}
          registrationStatus={registrationStatus}
        />
      )}

      {currentSection === "register" && (
        <RegistrationSection
          registrationStatus={registrationStatus}
          onRegistrationSuccess={handleRegistrationSuccess}
          onRegistrationClosed={handleRegistrationClosed}
          setCurrentSection={setCurrentSection}
        />
      )}

      {currentSection === "fixtures" && <FixturesSection fixtures={fixtures} />}

      {currentSection === "rules" && <RulesSection />}

      <Footer />

      {showSuccessModal && (
        <SuccessModal
          registrationResult={registrationResult}
          onClose={() => setShowSuccessModal(false)}
        />
      )}

      {showClosedModal && (
        <RegistrationClosedModal
          registrationResult={registrationResult}
          onClose={() => setShowClosedModal(false)}
        />
      )}

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes confettiFall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default TeamPortal;
