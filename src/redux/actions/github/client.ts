import axios from "axios";

const client = axios.create({
    baseURL: "https://api.github.com",
    responseType: "json",
    headers: {
        "Accept": "application/vnd.github.v3+json",
        "Content-Type": "application/json",
    }
})

export default client;
