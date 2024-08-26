import { COINGECKO_API_URL } from "./constants";
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: COINGECKO_API_URL,
});

export default axiosInstance;