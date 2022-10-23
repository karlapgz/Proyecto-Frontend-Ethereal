import { changeContent } from './changeContent.js'

let images = document.querySelectorAll('.images-item'),
    price = document.querySelectorAll('.price'),
    name = document.querySelectorAll('.name_item');

const accessKey = 'lPCsYLlZVh5DR-1bmdVBJxeIjzsV8MoeD5ZWbFqCeE8',
    url = 'https://api.unsplash.com/search/photos';

export const getImg = async(query, plate) => {
    let resp = await fetch(`${url}?query=${query}&orientation=squarish&count=10&client_id=${accessKey}`);
    let json = await resp.json();
    let listImg = await json.results;

    for(let i = 0; i < listImg.length; i++) {
        changeContent(listImg, i, images, price, name, plate);
    }
}