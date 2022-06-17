import axios from "axios";

const instance = axios.create({
    baseURL: "https://localhost:7230/api/",
    headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Credentials': 'true'
    }
});

export default instance;