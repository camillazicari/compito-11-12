const card = document.querySelectorAll('.card');
const url = 'https://striveschool-api.herokuapp.com/books';
let btnCancel = document.querySelectorAll('.bg-white');
let myBooks;

document.addEventListener('load', init());

function init() {
    getData()
}

function getData() {
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        myBooks = data;
        printBooks();
    }).catch((error) => {
        console.log('errore nel recupero dei libri: ', error);
    });
}


function printBooks() {
    for (let i=0; i<card.length; i++) {
        let image = card[i].querySelector('img');
        image.setAttribute('src', myBooks[i].img);
        let price = card[i].querySelector('.card-price');
        price.innerText = `${myBooks[i].price} €`
    }
}

let arrBtnCancel = Array.from(btnCancel);
const col = document.querySelectorAll('col-4');
let arrCol = Array.from(col);

arrCol.forEach((cols) => {
    cols.addEventListener('mouseenter', function(){
        btnCancel.addEventListener('click', function() {
            col.style.display = "none";
        })
    })
})

