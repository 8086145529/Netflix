import axios from "axios";

const tmdbAxiosInstance = axios.create({
    baseURL: "http://api.themoviedb.org/3"
})

export default tmdbAxiosInstance;