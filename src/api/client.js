import axios from 'axios';

const instance = axios.create({
    baseURL: ' http://localhost:3001/api/v1/',
    timeout: 2000,
});

export default instance
