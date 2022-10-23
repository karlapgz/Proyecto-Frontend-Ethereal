import { data } from './content.js'

export const changeContent = (listImg, i, images, price, name, plate) => {
    images[i].src = listImg[i].urls.thumb;
    name[i].textContent = data[plate][i][0];
    price[i].textContent = `$${data[plate][i][1]}`;
    images[i].alt = data[plate][i][2];
}