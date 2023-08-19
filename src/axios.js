import axios from 'axios';

// Configurer l'URL de base de votre API Laravel
axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';

// Intercepteur pour gérer les erreurs de manière globale
axios.interceptors.response.use(
  response => response,
  error => {
    console.error('Erreur lors de la requête :', error);
    return Promise.reject(error);
  }
);

export default axios;
