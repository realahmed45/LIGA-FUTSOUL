// services/api.js
const API_BASE_URL = "https://futsal-backend-wod4.onrender.com";

export const registrationAPI = {
  // Check registration status
  checkStatus: async () => {
    const response = await fetch(`${API_BASE_URL}/registration/status`);
    if (!response.ok) throw new Error("Failed to check registration status");
    return response.json();
  },

  // Register team
  registerTeam: async (formData) => {
    const response = await fetch(`${API_BASE_URL}/teams/register`, {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    return { response, result };
  },

  // Get approved fixtures
  getFixtures: async () => {
    const response = await fetch(`${API_BASE_URL}/fixtures/approved`);
    if (!response.ok) throw new Error("Failed to load fixtures");
    return response.json();
  },

  // Get team details
  getTeamDetails: async (teamId) => {
    const response = await fetch(`${API_BASE_URL}/teams/${teamId}`);
    if (!response.ok) throw new Error("Failed to load team details");
    return response.json();
  },
};
