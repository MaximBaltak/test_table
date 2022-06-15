import axios, {AxiosInstance} from "axios";
import apiConfig from './api.config.json'

export const server: AxiosInstance = axios.create({
    baseURL: apiConfig.serverUrl,
    headers: {
        "Content-Type": apiConfig.typeRequest,
    }
})
