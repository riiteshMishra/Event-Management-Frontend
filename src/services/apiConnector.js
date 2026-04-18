import axios from "axios"
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// instence banao
const axiosInstance = axios.create({
    baseURL: BACKEND_URL,
    withCredentials: true
})

// api connector
export const apiConnector = (method, url, body, Headers, params) => {
    return axiosInstance({
        method,
        url,
        data: body ? body : null,
        headers: Headers ? Headers : {},
        params: params ? params : {}
    })
}