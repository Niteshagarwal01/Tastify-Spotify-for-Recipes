// API base URL from environment variables
const API_BASE_URL = process.env.EXPO_PUBLIC_API_BASE_URL || "http://192.168.1.39:5001";
export const API_URL = `${API_BASE_URL}/api`;

console.log("API URL:", API_URL);
