const images = document.querySelectorAll('.img-min');
let count = 0; // переменная, которая указывает на номер активного изображения в images

const next = document.querySelector('.next');
next.onclick = nextFunction;

const prev = document.querySelector('.prev');
prev.onclick = prevFunction;

const reset = document.querySelector('.reset');
reset.onclick = resetFunction;

const imgMax = document.querySelector('.img-max')

function nextFunction() {
    images[count].classList.remove('active-img');
    if (count + 1 === images.length) {
        count = 0;
    } else {
        count++;
    }
    images[count].classList.add('active-img');
    toBig()
}

function prevFunction() {
    images[count].classList.remove('active-img');
    if (count - 1 < 0) {
        count = images.length;
    }
    count--;
    images[count].classList.add('active-img');
    toBig()
}

function resetFunction() {
    images[count].classList.remove('active-img');
    count = 0;
    images[count].classList.add('active-img');
    toBig()
}

function toBig() {
    for (let i = 0; i < images.length; i++) {
        if (images[i].classList.contains('active-img')) {

            imgMax.src = images[i].src;
        }
        ;
    }
    ;
};