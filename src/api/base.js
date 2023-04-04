import axios from "axios";

export const wpHeadless = axios.create({
//    baseURL: 'http://my-local-site.local/wp-json/',
    baseURL: 'http://127.0.0.1/wp-json/',
    headers: {
        'Content-Type': 'application/json',
    }
});