import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-afb99.firebaseio.com/'
});

export default instance;