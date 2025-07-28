// Get token from localStorage
export function getToken() {
  if (typeof window !== "undefined") {
    return localStorage.getItem("token");
  }
  return null;
}

// Set token in localStorage
export function setToken(token) {
  if (typeof window !== "undefined") {
    localStorage.setItem("token", token);
  }
}

// Remove token from localStorage
export function removeToken() {
  if (typeof window !== "undefined") {
    localStorage.removeItem("token");
  }
}

// Set token in Axios default headers
import axios from "axios";

export function setAxiosAuthToken(token) {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
}