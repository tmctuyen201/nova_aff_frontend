// API Configuration for Nova Aff
const isDevelopment = import.meta.env.MODE === "development";

export const apiConfig = {
  baseURL: isDevelopment
    ? "http://localhost:8000/api"
    : "https://novaaff.id.vn/api",
  timeout: isDevelopment ? 10000 : 15000,
  withCredentials: true,
};

// API Endpoints
export const API_ENDPOINTS = {
  // Authentication
  auth: {
    login: "/auth/login",
    register: "/auth/register",
    logout: "/auth/logout",
    refresh: "/auth/refresh",
    profile: "/auth/profile",
    forgotPassword: "/auth/forgot-password",
    resetPassword: "/auth/reset-password",
  },

  // Campaigns
  campaigns: {
    list: "/campaigns",
    detail: (id) => `/campaigns/${id}`,
    create: "/campaigns",
    update: (id) => `/campaigns/${id}`,
    delete: (id) => `/campaigns/${id}`,
    register: (id) => `/campaigns/${id}/register`,
    analytics: (id) => `/campaigns/${id}/analytics`,
  },

  // Creators
  creators: {
    list: "/creators",
    detail: (id) => `/creators/${id}`,
    profile: "/creators/profile",
    update: "/creators/profile",
    dashboard: "/creators/dashboard",
    campaigns: "/creators/campaigns",
    earnings: "/creators/earnings",
    analytics: "/creators/analytics",
  },

  // Brands
  brands: {
    list: "/brands",
    detail: (id) => `/brands/${id}`,
    profile: "/brands/profile",
    update: "/brands/profile",
    dashboard: "/brands/dashboard",
    campaigns: "/brands/campaigns",
    creators: "/brands/creators",
    analytics: "/brands/analytics",
  },

  // Admin
  admin: {
    dashboard: "/admin/dashboard",
    users: "/admin/users",
    campaigns: "/admin/campaigns",
    analytics: "/admin/analytics",
    settings: "/admin/settings",
  },

  // File Upload
  upload: {
    image: "/upload/image",
    document: "/upload/document",
    avatar: "/upload/avatar",
  },

  // Utils
  utils: {
    countries: "/utils/countries",
    currencies: "/utils/currencies",
    categories: "/utils/categories",
  },
};

// Request interceptors
export const requestInterceptor = (config) => {
  const token = localStorage.getItem("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  // Add timestamp to prevent caching
  config.headers["X-Timestamp"] = Date.now();

  return config;
};

// Response interceptors
export const responseInterceptor = {
  success: (response) => {
    return response.data;
  },
  error: (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");
      window.location.href = "/login";
    }

    return Promise.reject({
      message: error.response?.data?.message || "Something went wrong",
      status: error.response?.status,
      data: error.response?.data,
    });
  },
};

// Export apiConfig as named export (already exported above)
