import axios from 'axios';


const BASE_URL = 'http://10.0.2.2:7000/api';



const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // Timeout after 10 seconds
  headers: {
    'Content-Type': 'application/json',
  },
});


const handleApiError = (error) => {
  console.error("API Error:", error.response?.data || error.message);
  return { error: error.response?.data || "An error occurred" };
};

// API functions
const apiService = {
  // GET request
  getData: async (endpoint, params = {}) => {
    try {
        console.log(endpoint)
      const response = await apiClient.get(endpoint,{params});
      console.log(response)

      return response.data;
    } catch (error) {
      return handleApiError(error);
    }
  },

  // POST request
  postData: async (endpoint, data) => {
    try {
      const response = await apiClient.post(endpoint, data);
      return response.data;
    } catch (error) {
      return handleApiError(error);
    }
  },

  // PUT request
  updateData: async (endpoint, data) => {
    try {
      const response = await apiClient.put(endpoint, data);
      return response.data;
    } catch (error) {
      return handleApiError(error);
    }
  },

  // DELETE request
  deleteData: async (endpoint) => {
    try {
      const response = await apiClient.delete(endpoint);
      return response.data;
    } catch (error) {
      return handleApiError(error);
    }
  },
};

export default apiService;
