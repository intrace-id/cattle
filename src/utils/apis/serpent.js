import Axios from 'axios';

export default Axios.create({
    baseURL: 'https://localhost:80/api/'
});