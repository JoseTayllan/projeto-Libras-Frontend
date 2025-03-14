import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.1.4:5000', // Altere para o IP do backend se estiver rodando no celular
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
