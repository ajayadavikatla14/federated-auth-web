import axios from "axios";
import APIURL from './Url';

export default axios.create({
    baseURL:`${APIURL}api/`,
    responseType:'json'
})