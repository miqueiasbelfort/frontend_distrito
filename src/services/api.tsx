import axios from "axios"

export const api = axios.create({
    baseURL: "http://localhost:5000/api"
})

export const registerUser = async (username: string, email: string, password: string, confirPassword: string) => {
    return api.post(`/users/register`, {username, email, password, confirPassword})
}