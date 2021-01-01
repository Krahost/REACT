import axios from 'axios';


const instance = axios.create({
    baseURL: "https://tindabackend.herokuapp.com",
});
 export default instance;