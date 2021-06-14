import axios from 'axios';

export function doPredict(path){
    let url = "http://localhost:9997/api/predict/";
    console.log(url);

    let body = {
        filepath : path
    }
    console.log(body)

    return axios.post(url, body)
}