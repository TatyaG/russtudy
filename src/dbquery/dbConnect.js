// api.js
import axios from 'axios';

// Создаем экземпляр Axios с нужной конфигурацией
const api = axios.create({
    baseURL: 'http://localhost:8000/', // RL
    timeout: 10000, // Установите таймаут запроса (в миллисекундах)
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;