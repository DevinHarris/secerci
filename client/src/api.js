import axios from 'axios';

export default axios.create({
    baseURL: 'https://secreci.herokuapp.com/'
})