import axios from 'axios';

export function doPredict(path){
    let url = "http://localhost:9997/api/predict/";

    let body = {
        filepath : path
    }

    return axios.post(url, body)
}