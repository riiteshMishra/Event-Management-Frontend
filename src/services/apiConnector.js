import axios from "axios"

const BACKEND_URL = 'https://event-management-system-tyz7.onrender.com/api/v1'

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