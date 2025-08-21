const API_BASE_URL = "http://localhost:8000/api";

const getAuthHeaders = () => {
  // Tạm thời không gửi token cho admin APIs
  return {
    "Content-Type": "application/json",
  };
};

const getFormDataHeaders = () => {
  // Không set Content-Type cho FormData, browser sẽ tự động set
  return {};
};

const handleResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.detail || `HTTP error! status: ${response.status}`
    );
  }
  return response.json();
};

export const projectsApi = {
  getProjects: async () => {
    const response = await fetch(`${API_BASE_URL}/admin/projects/`, {
      method: "GET",
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },

  getProject: async (projectId) => {
    const response = await fetch(
      `${API_BASE_URL}/admin/projects/${projectId}/`,
      {
        method: "GET",
        headers: getAuthHeaders(),
      }
    );
    return handleResponse(response);
  },

  createProject: async (projectData) => {
    const response = await fetch(`${API_BASE_URL}/admin/projects/`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(projectData),
    });
    return handleResponse(response);
  },

  updateProject: async (projectId, projectData) => {
    const response = await fetch(
      `${API_BASE_URL}/admin/projects/${projectId}/`,
      {
        method: "PUT",
        headers: getAuthHeaders(),
        body: JSON.stringify(projectData),
      }
    );
    return handleResponse(response);
  },

  deleteProject: async (projectId) => {
    const response = await fetch(
      `${API_BASE_URL}/admin/projects/${projectId}/`,
      {
        method: "DELETE",
        headers: getAuthHeaders(),
      }
    );
    return handleResponse(response);
  },
};

export const kolsApi = {
  getKOLs: async (projectId) => {
    const response = await fetch(
      `${API_BASE_URL}/admin/projects/${projectId}/kols/`,
      {
        method: "GET",
        headers: getAuthHeaders(),
      }
    );
    return handleResponse(response);
  },

  getKOL: async (projectId, kolId) => {
    const response = await fetch(
      `${API_BASE_URL}/admin/projects/${projectId}/kols/${kolId}/`,
      {
        method: "GET",
        headers: getAuthHeaders(),
      }
    );
    return handleResponse(response);
  },

  createKOL: async (projectId, kolData) => {
    // Check if there's a video file
    if (kolData.video_file) {
      // Use FormData for file upload
      const formData = new FormData();

      // Add all text fields
      Object.keys(kolData).forEach((key) => {
        if (key !== "video_file") {
          formData.append(key, kolData[key]);
        }
      });

      // Add video file
      formData.append("video_file", kolData.video_file);

      const response = await fetch(
        `${API_BASE_URL}/admin/projects/${projectId}/kols/`,
        {
          method: "POST",
          headers: getFormDataHeaders(),
          body: formData,
        }
      );
      return handleResponse(response);
    } else {
      // Use JSON for text-only data
      const response = await fetch(
        `${API_BASE_URL}/admin/projects/${projectId}/kols/`,
        {
          method: "POST",
          headers: getAuthHeaders(),
          body: JSON.stringify(kolData),
        }
      );
      return handleResponse(response);
    }
  },

  updateKOL: async (projectId, kolId, kolData) => {
    // Check if there's a video file
    if (kolData.video_file) {
      // Use FormData for file upload
      const formData = new FormData();

      // Add all text fields
      Object.keys(kolData).forEach((key) => {
        if (key !== "video_file") {
          formData.append(key, kolData[key]);
        }
      });

      // Add video file
      formData.append("video_file", kolData.video_file);

      const response = await fetch(
        `${API_BASE_URL}/admin/projects/${projectId}/kols/${kolId}/`,
        {
          method: "PUT",
          headers: getFormDataHeaders(),
          body: formData,
        }
      );
      return handleResponse(response);
    } else {
      // Use JSON for text-only data
      const response = await fetch(
        `${API_BASE_URL}/admin/projects/${projectId}/kols/${kolId}/`,
        {
          method: "PUT",
          headers: getAuthHeaders(),
          body: JSON.stringify(kolData),
        }
      );
      return handleResponse(response);
    }
  },

  deleteKOL: async (projectId, kolId) => {
    const response = await fetch(
      `${API_BASE_URL}/admin/projects/${projectId}/kols/${kolId}/`,
      {
        method: "DELETE",
        headers: getAuthHeaders(),
      }
    );
    return handleResponse(response);
  },
};

export const dataTrackingApi = {
  getDataTracking: async (projectId) => {
    const response = await fetch(
      `${API_BASE_URL}/admin/projects/${projectId}/data-tracking/`,
      {
        method: "GET",
        headers: getAuthHeaders(),
      }
    );
    return handleResponse(response);
  },

  getDataTrackingDetail: async (projectId, trackingId) => {
    const response = await fetch(
      `${API_BASE_URL}/admin/projects/${projectId}/data-tracking/${trackingId}/`,
      {
        method: "GET",
        headers: getAuthHeaders(),
      }
    );
    return handleResponse(response);
  },

  createDataTracking: async (projectId, trackingData) => {
    // Check if there's a video file
    if (trackingData.video_file) {
      // Use FormData for file upload
      const formData = new FormData();

      // Add all text fields
      Object.keys(trackingData).forEach((key) => {
        if (key !== "video_file") {
          formData.append(key, trackingData[key]);
        }
      });

      // Add video file
      formData.append("video_file", trackingData.video_file);

      const response = await fetch(
        `${API_BASE_URL}/admin/projects/${projectId}/data-tracking/`,
        {
          method: "POST",
          headers: getFormDataHeaders(),
          body: formData,
        }
      );
      return handleResponse(response);
    } else {
      // Use JSON for text-only data
      const response = await fetch(
        `${API_BASE_URL}/admin/projects/${projectId}/data-tracking/`,
        {
          method: "POST",
          headers: getAuthHeaders(),
          body: JSON.stringify(trackingData),
        }
      );
      return handleResponse(response);
    }
  },

  updateDataTracking: async (projectId, trackingId, trackingData) => {
    // Check if there's a video file
    if (trackingData.video_file) {
      // Use FormData for file upload
      const formData = new FormData();

      // Add all text fields
      Object.keys(trackingData).forEach((key) => {
        if (key !== "video_file") {
          formData.append(key, trackingData[key]);
        }
      });

      // Add video file
      formData.append("video_file", trackingData.video_file);

      const response = await fetch(
        `${API_BASE_URL}/admin/projects/${projectId}/data-tracking/${trackingId}/`,
        {
          method: "PUT",
          headers: getFormDataHeaders(),
          body: formData,
        }
      );
      return handleResponse(response);
    } else {
      // Use JSON for text-only data
      const response = await fetch(
        `${API_BASE_URL}/admin/projects/${projectId}/data-tracking/${trackingId}/`,
        {
          method: "PUT",
          headers: getAuthHeaders(),
          body: JSON.stringify(trackingData),
        }
      );
      return handleResponse(response);
    }
  },

  deleteDataTracking: async (projectId, trackingId) => {
    const response = await fetch(
      `${API_BASE_URL}/admin/projects/${projectId}/data-tracking/${trackingId}/`,
      {
        method: "DELETE",
        headers: getAuthHeaders(),
      }
    );
    return handleResponse(response);
  },
};

export const trackingNumbersApi = {
  getTrackingNumbers: async (projectId) => {
    const response = await fetch(
      `${API_BASE_URL}/admin/projects/${projectId}/tracking-numbers/`,
      {
        method: "GET",
        headers: getAuthHeaders(),
      }
    );
    return handleResponse(response);
  },

  getTrackingNumber: async (projectId, trackingId) => {
    const response = await fetch(
      `${API_BASE_URL}/admin/projects/${projectId}/tracking-numbers/${trackingId}/`,
      {
        method: "GET",
        headers: getAuthHeaders(),
      }
    );
    return handleResponse(response);
  },

  createTrackingNumber: async (projectId, trackingData) => {
    console.log("createTrackingNumber called with:", trackingData);
    console.log("Video file:", trackingData.video_file);

    // Check if there's a video file
    if (trackingData.video_file) {
      console.log("Using FormData for video upload");
      // Use FormData for file upload
      const formData = new FormData();

      // Add all text fields
      Object.keys(trackingData).forEach((key) => {
        if (key !== "video_file") {
          formData.append(key, trackingData[key]);
        }
      });

      // Add video file
      formData.append("video_file", trackingData.video_file);

      console.log("FormData entries:");
      for (let [key, value] of formData.entries()) {
        console.log(key, value);
      }

      const response = await fetch(
        `${API_BASE_URL}/admin/projects/${projectId}/tracking-numbers/`,
        {
          method: "POST",
          headers: getFormDataHeaders(),
          body: formData,
        }
      );
      return handleResponse(response);
    } else {
      console.log("Using JSON for text-only data");
      // Use JSON for text-only data
      const response = await fetch(
        `${API_BASE_URL}/admin/projects/${projectId}/tracking-numbers/`,
        {
          method: "POST",
          headers: getAuthHeaders(),
          body: JSON.stringify(trackingData),
        }
      );
      return handleResponse(response);
    }
  },

  updateTrackingNumber: async (projectId, trackingId, trackingData) => {
    // Check if there's a video file
    if (trackingData.video_file) {
      // Use FormData for file upload
      const formData = new FormData();

      // Add all text fields
      Object.keys(trackingData).forEach((key) => {
        if (key !== "video_file") {
          formData.append(key, trackingData[key]);
        }
      });

      // Add video file
      formData.append("video_file", trackingData.video_file);

      const response = await fetch(
        `${API_BASE_URL}/admin/projects/${projectId}/tracking-numbers/${trackingId}/`,
        {
          method: "PUT",
          headers: getFormDataHeaders(),
          body: formData,
        }
      );
      return handleResponse(response);
    } else {
      // Use JSON for text-only data
      const response = await fetch(
        `${API_BASE_URL}/admin/projects/${projectId}/tracking-numbers/${trackingId}/`,
        {
          method: "PUT",
          headers: getAuthHeaders(),
          body: JSON.stringify(trackingData),
        }
      );
      return handleResponse(response);
    }
  },

  deleteTrackingNumber: async (projectId, trackingId) => {
    const response = await fetch(
      `${API_BASE_URL}/admin/projects/${projectId}/tracking-numbers/${trackingId}/`,
      {
        method: "DELETE",
        headers: getAuthHeaders(),
      }
    );
    return handleResponse(response);
  },
};
