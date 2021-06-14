import axios from 'axios';

export function doCheckFiles(path){
    let url = "http://localhost:9997/api/checkFiles/?name=" + path;

    return axios.get(url)
}