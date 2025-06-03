import axios from "axios";

const axiosInstance = axios.create({
  // backend deployed on render
  // baseURL: "http://127.0.0.1:5001/clone-bf-36669/us-central1/api",
  // backend locally using firebase functions
  baseURL: "https://us-central1-clone-bf-36669.cloudfunctions.net/api",
  // backend locally using express server on port 5000
  // baseURL: "http://localhost:5000",
});

export { axiosInstance };
