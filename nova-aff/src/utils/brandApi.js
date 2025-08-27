// Brand Analytics API utilities
const API_BASE_URL = "https://novaaff.id.vn";

class BrandAPI {
  constructor() {
    this.baseURL = `${API_BASE_URL}/api`;
  }

  // Get auth headers with token
  getAuthHeaders() {
    const token = localStorage.getItem("token");
    return {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    };
  }

  // Generic API call method
  async apiCall(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      headers: this.getAuthHeaders(),
      ...options,
    };

    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("API call failed:", error);
      throw error;
    }
  }

  // Dashboard Stats
  async getDashboardStats() {
    return this.apiCall("/brand/dashboard/stats/");
  }

  // Creators
  async getCreators() {
    return this.apiCall("/brand/creators/");
  }

  async getCreatorDetail(creatorId) {
    return this.apiCall(`/brand/creators/${creatorId}/`);
  }

  async getCreatorAnalytics(creatorId) {
    return this.apiCall(`/brand/creators/${creatorId}/analytics/`);
  }

  async getVideoAnalytics(creatorId) {
    return this.apiCall(`/brand/creators/${creatorId}/video-analytics/`);
  }

  async getLiveAnalytics(creatorId) {
    return this.apiCall(`/brand/creators/${creatorId}/live-analytics/`);
  }

  async getFollowerDemographics(creatorId) {
    return this.apiCall(`/brand/creators/${creatorId}/demographics/`);
  }

  async getTrendData(creatorId, startDate = null, endDate = null) {
    let endpoint = `/brand/creators/${creatorId}/trends/`;
    const params = new URLSearchParams();

    if (startDate) params.append("start_date", startDate);
    if (endDate) params.append("end_date", endDate);

    if (params.toString()) {
      endpoint += `?${params.toString()}`;
    }

    return this.apiCall(endpoint);
  }

  // Helper methods for formatting
  formatNumber(num) {
    if (num >= 1000000000) {
      return `${(num / 1000000000).toFixed(1)}B`;
    } else if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toString();
  }

  formatCurrency(amount, currency = "VND") {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: currency,
    }).format(amount);
  }

  formatDate(dateString) {
    return new Date(dateString).toLocaleDateString("vi-VN");
  }

  formatPercentage(value) {
    return `${parseFloat(value).toFixed(2)}%`;
  }
}

// Export singleton instance
export default new BrandAPI();
