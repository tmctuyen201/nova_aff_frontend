const API_BASE_URL = "http://localhost:8000/api";

// Helper function to make API requests
const apiRequest = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;

  const config = {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  };

  // Add auth token if available, but not for auth endpoints
  const isAuthEndpoint = endpoint.includes("/auth/");
  if (!isAuthEndpoint) {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      // Handle non_field_errors structure from Django REST Framework
      if (data.errors && data.errors.non_field_errors) {
        throw new Error(data.errors.non_field_errors[0]);
      }
      // Handle regular error message
      throw new Error(data.message || "API request failed");
    }

    return data;
  } catch (error) {
    console.error("API request error:", error);
    throw error;
  }
};

// Authentication API functions
export const authAPI = {
  // User registration
  register: async (userData) => {
    return apiRequest("/auth/register/", {
      method: "POST",
      body: JSON.stringify(userData),
    });
  },

  // User login
  login: async (credentials) => {
    return apiRequest("/auth/login/", {
      method: "POST",
      body: JSON.stringify(credentials),
    });
  },

  // Get user profile
  getProfile: async () => {
    return apiRequest("/auth/profile/");
  },

  // Refresh token
  refreshToken: async (refreshToken) => {
    return apiRequest("/auth/refresh/", {
      method: "POST",
      body: JSON.stringify({ refresh: refreshToken }),
    });
  },
};

// Token management
export const tokenManager = {
  setTokens: (tokens) => {
    localStorage.setItem("access_token", tokens.access);
    localStorage.setItem("refresh_token", tokens.refresh);
  },

  getAccessToken: () => {
    return localStorage.getItem("access_token");
  },

  getRefreshToken: () => {
    return localStorage.getItem("refresh_token");
  },

  clearTokens: () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  },

  isLoggedIn: () => {
    return !!localStorage.getItem("access_token");
  },
};

export default apiRequest;
