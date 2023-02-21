// Buscando en Google  -->  github public apis

/* const URL = 'https://api.thecatapi.com/v1/images/search'; */

/* fetch(URL).then(res => res.json()).then(data => {
    const img = document.querySelector('img');
    img.src = data[0].url;
}); */

const URL = 'https://api.thecatapi.com/v1/images/search?limit=3';

async function myCat () {
    const res = await fetch(URL);
    const data = await res.json();
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const img3 = document.getElementById('img3');

    img1.src = data[0].url;
    img2.src = data[1].url;
    img3.src = data[2].url;
}

const myButton = document.querySelector("button");
myCat();
myButton.onclick = myCat;