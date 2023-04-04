import axios from "axios";

interface CustomEnv extends NodeJS.ProcessEnv { 
 API_BASE_URL: string;
}

const axiosClient = axios.create({
 baseURL: (process.env as CustomEnv).API_BASE_URL,
 responseType: "json",
});

export default axiosClient;