import axios from "axios";

const Api = axios.create({baseURL: 'https://localhost:3001'});

export default Api;