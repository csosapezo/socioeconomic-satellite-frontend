import axios from 'axios';

export function doSearchImages(top, bottom, left, right) {
    let url = "http://localhost:9997/api/searchImages/";


    const body = {
        "top": parseFloat(top),
        "bottom": parseFloat(bottom),
        "left": parseFloat(left),
        "right": parseFloat(right)
    };

    return axios.post(url,body);
}