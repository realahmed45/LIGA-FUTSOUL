// components/RegistrationSection.jsx
import React, { useState } from "react";
import { Upload, X } from "lucide-react";
import { registrationAPI } from "../services/api";

const RegistrationSection = ({
  registrationStatus,
  onRegistrationSuccess,
  onRegistrationClosed,
  setCurrentSection,
}) => {
  const [registrationData, setRegistrationData] = useState({
    captainName: "",
    teamName: "",
    captainCNIC: "",
    accountTitle: "",
    bankName: "",
    accountNumber: "",
    paymentScreenshot: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [filePreview, setFilePreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setRegistrationData((prev) => ({
        ...prev,
        paymentScreenshot: file,
      }));

      const reader = new FileReader();
      reader.onload = (e) => setFilePreview(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const removeFile = () => {
    setRegistrationData((prev) => ({
      ...prev,
      paymentScreenshot: null,
    }));
    setFilePreview(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      Object.keys(registrationData).forEach((key) => {
        formData.append(key, registrationData[key]);
      });

      const { response, result } = await registrationAPI.registerTeam(formData);

      if (response.ok) {
        onRegistrationSuccess(result);
        setRegistrationData({
          captainName: "",
          teamName: "",
          captainCNIC: "",
          accountTitle: "",
          bankName: "",
          accountNumber: "",
          paymentScreenshot: null,
        });
        setFilePreview(null);
      } else {
        if (result.registrationClosed) {
          onRegistrationClosed(result);
        } else {
          throw new Error(result.message || "Registration failed");
        }
      }
    } catch (error) {
      alert("Registration failed: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!registrationStatus.registrationOpen) {
    return (
      <section className="min-h-screen py-20 pt-32">
        <div className="container mx-auto px-6">
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-xl p-12 rounded-3xl border-2 border-red-500/30 relative overflow-hidden animate-on-load">
                {/* Sad Animation Background */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-10 left-10 text-4xl opacity-50 animate-bounce">
                    😢
                  </div>
                  <div
                    className="absolute bottom-10 right-10 text-3xl opacity-50 animate-bounce"
                    style={{ animationDelay: "1s" }}
                  >
                    💔
                  </div>
                  <div
                    className="absolute top-1/2 left-1/4 text-2xl opacity-30 animate-bounce"
                    style={{ animationDelay: "2s" }}
                  >
                    😔
                  </div>
                </div>

                {/* Main Content */}
                <div className="relative z-10">
                  <div className="text-8xl mb-8 animate-pulse">😢</div>
                  <h2 className="text-4xl md:text-6xl font-black mb-6 text-red-400">
                    REGISTRATION CLOSED
                  </h2>
                  <div className="text-6xl mb-6">💔</div>
                  <p className="text-2xl md:text-3xl font-bold mb-4 text-yellow-400">
                    Ohh... The slots have been filled!
                  </p>
                  <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                    We're overwhelmed by the amazing response! All{" "}
                    <strong className="text-red-400">
                      {registrationStatus.totalTeams}
                    </strong>{" "}
                    spots have been taken by incredible teams. But don't worry,
                    champions are made in training too! 🏆
                  </p>

                  {/* Alternative Actions */}
                  <div className="space-y-6">
                    <div className="bg-blue-500/10 border border-blue-500/30 p-6 rounded-2xl">
                      <h3 className="text-2xl font-bold mb-3 text-blue-400">
                        📅 Don't Miss Next Time!
                      </h3>
                      <p className="text-lg text-gray-300">
                        Follow us for updates on Liga Futsoul 2026 and other
                        tournaments!
                      </p>
                    </div>

                    <div className="bg-green-500/10 border border-green-500/30 p-6 rounded-2xl">
                      <h3 className="text-2xl font-bold mb-3 text-green-400">
                        ⚽ Stay in the Game!
                      </h3>
                      <p className="text-lg text-gray-300 mb-4">
                        Check out the fixtures below and support your favorite
                        teams!
                      </p>
                      <button
                        onClick={() => setCurrentSection("fixtures")}
                        className="bg-gradient-to-r from-green-500 to-blue-600 px-8 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105"
                      >
                        🎮 VIEW FIXTURES
                      </button>
                    </div>
                  </div>

                  {/* Encouraging Message */}
                  <div className="mt-8 p-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl border border-purple-500/30">
                    <h3 className="text-xl font-bold mb-2 text-purple-400">
                      💪 Keep the Spirit Alive!
                    </h3>
                    <p className="text-gray-300">
                      Every champion started somewhere. Keep training, keep
                      dreaming, and we'll see you on the field next time! The
                      beautiful game never stops! ⚽✨
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen py-20 pt-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-load">
          <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            TEAM REGISTRATION
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Complete your registration and secure your spot in the championship!
            🏆
          </p>
          {registrationStatus.slotsRemaining <= 5 && (
            <div className="mt-4 p-4 bg-red-500/20 border border-red-500 rounded-xl animate-pulse">
              <p className="text-red-300 font-bold text-lg">
                ⚠️ HURRY! Only {registrationStatus.slotsRemaining} slots
                remaining! 🏃‍♂️
              </p>
            </div>
          )}
        </div>

        {/* Payment Info Card */}
        <div className="max-w-4xl mx-auto mb-12 animate-on-load">
          <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border-2 border-yellow-500/30 shadow-2xl shadow-yellow-500/10">
            <h3 className="text-3xl font-bold mb-6 text-center text-yellow-400">
              💳 PAYMENT DETAILS
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">👤</span>
                  <span className="text-lg">
                    <strong>Account Title:</strong> AHMED ALI SAFDAR
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🏦</span>
                  <span className="text-lg">
                    <strong>Bank:</strong> Askari Bank Limited, Chaklala Branch
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🔢</span>
                  <span className="text-lg">
                    <strong>Account:</strong> 00400900000123
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🌐</span>
                  <span className="text-lg">
                    <strong>IBAN:</strong> PK84ASCM0000400900000123
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-red-500/20 border border-red-500 rounded-xl">
              <p className="text-center text-red-300 font-bold">
                ⚠️ Payment screenshot is mandatory for registration!
              </p>
            </div>
          </div>
        </div>

        {/* Registration Form */}
        <div className="max-w-4xl mx-auto animate-on-load">
          <form
            onSubmit={handleSubmit}
            className="bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10 space-y-8"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="block text-lg font-semibold text-green-400">
                  👨‍💼 Captain Name
                </label>
                <input
                  type="text"
                  name="captainName"
                  value={registrationData.captainName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 bg-black/30 border-2 border-green-500/30 rounded-xl text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-all duration-300"
                  placeholder="Enter captain's full name"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-lg font-semibold text-green-400">
                  ⚽ Team Name
                </label>
                <input
                  type="text"
                  name="teamName"
                  value={registrationData.teamName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 bg-black/30 border-2 border-green-500/30 rounded-xl text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-all duration-300"
                  placeholder="Enter your team name"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-lg font-semibold text-green-400">
                🆔 Captain's CNIC
              </label>
              <input
                type="text"
                name="captainCNIC"
                value={registrationData.captainCNIC}
                onChange={handleInputChange}
                required
                className="w-full px-6 py-4 bg-black/30 border-2 border-green-500/30 rounded-xl text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-all duration-300"
                placeholder="12345-1234567-1"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="block text-lg font-semibold text-green-400">
                  💳 Account Title
                </label>
                <input
                  type="text"
                  name="accountTitle"
                  value={registrationData.accountTitle}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 bg-black/30 border-2 border-green-500/30 rounded-xl text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-all duration-300"
                  placeholder="Account holder name"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-lg font-semibold text-green-400">
                  🏦 Bank Name
                </label>
                <input
                  type="text"
                  name="bankName"
                  value={registrationData.bankName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 bg-black/30 border-2 border-green-500/30 rounded-xl text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-all duration-300"
                  placeholder="Your bank name"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-lg font-semibold text-green-400">
                  🔢 Account Number
                </label>
                <input
                  type="text"
                  name="accountNumber"
                  value={registrationData.accountNumber}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 bg-black/30 border-2 border-green-500/30 rounded-xl text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-all duration-300"
                  placeholder="Account number"
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="block text-lg font-semibold text-green-400">
                📷 Payment Screenshot
              </label>
              {!filePreview ? (
                <div className="relative">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    required
                    className="hidden"
                    id="paymentFile"
                  />
                  <label
                    htmlFor="paymentFile"
                    className="block w-full p-12 border-2 border-dashed border-green-500/50 rounded-xl cursor-pointer hover:border-green-400 transition-all duration-300 text-center bg-black/20 hover:bg-green-500/5"
                  >
                    <Upload className="w-16 h-16 mx-auto mb-4 text-green-400" />
                    <div className="text-xl font-semibold mb-2">
                      Drop your payment screenshot here
                    </div>
                    <div className="text-gray-400">
                      or click to browse files
                    </div>
                    <div className="mt-4 text-sm text-gray-500">
                      Accepted: JPG, PNG, GIF (Max: 5MB)
                    </div>
                  </label>
                </div>
              ) : (
                <div className="bg-white/5 backdrop-blur-xl p-4 rounded-xl border border-green-500/30">
                  <div className="flex items-center space-x-4">
                    <img
                      src={filePreview}
                      alt="Payment Preview"
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <div className="font-semibold">
                        {registrationData.paymentScreenshot?.name}
                      </div>
                      <div className="text-sm text-gray-400">
                        {registrationData.paymentScreenshot &&
                          (
                            registrationData.paymentScreenshot.size /
                            1024 /
                            1024
                          ).toFixed(2)}{" "}
                        MB
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={removeFile}
                      className="text-red-400 hover:text-red-300 transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-center pt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="relative px-16 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full text-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                    <span>Registering...</span>
                  </div>
                ) : (
                  "🚀 REGISTER TEAM"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
