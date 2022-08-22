import axios from "axios";

const api = axios.create({
    baseURL: 'https://teppabackend.herokuapp.com/'
});

export default api