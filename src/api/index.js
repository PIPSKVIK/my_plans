import axios from 'axios';

const apiKey = process.env.API_KEY;

const defaultConfig = {
    baseURL: apiKey,
    mode: 'cors',
    redirect: 'follow',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
};

export const apiClient = axios.create(defaultConfig);
