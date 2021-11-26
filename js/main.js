const mainContainer = document.querySelector('.mainContainer__content');
const maxBoxes = 9;

const shuffleEl = document.querySelector('.mainContainer__buttons__Shuffle');
const sortEl = document.querySelector('.mainContainer__buttons__Sort');

const createBox = (val) => {
    let div = document.createElement("DIV");
    div.classList = `box-${val} box`;
    div.innerText = val;
    mainContainer.appendChild(div);
}

window.addEventListener('DOMContentLoaded', (event) => {
    for(let i=1; i<=maxBoxes; i++){
        createBox(i);
    }
});

shuffleEl.addEventListener('click', () => {
    let currWidth = window.screen.width;
    let boxes = document.querySelectorAll('.box');
    if(currWidth <= 375){
        boxes.forEach((box, idx) => {
            let y = -1 * idx * 49;
            box.style.transform = `translateY(${y}px)`;
        });
    } else {
        boxes.forEach((box, idx) => {
            let n = Math.trunc(Math.random()*300)
            box.style.transform = `translate(${n}px, ${n}px)`;
        });
    }


    let c = 1;
    let arr = new Array(maxBoxes).fill(0).map(val => c++);
    let i = maxBoxes-1;
    while(i >= 0){
        let curr = Math.trunc(Math.random()*i);
        [arr[i], arr[curr]] = [arr[curr], arr[i]]
        i--;
    }
    setTimeout(() => {
        mainContainer.innerHTML = '';
        arr.forEach((val) => {
            createBox(val);
        });
    }, 200);
});

sortEl.addEventListener('click', () => {
    let boxes = document.querySelectorAll('.box');
    let currWidth = window.screen.width;
    if(currWidth <= 375){
        boxes.forEach((box, idx) => {
            let y = -1 * idx * 49;
            box.style.transform = `translateY(${y}px)`;
        });
    } else {
        boxes.forEach((box, idx) => {
            let n = Math.trunc(Math.random()*300)
            box.style.transform = `translate(${n}px, ${n}px)`;
        });
    }

    setTimeout(() => {
        mainContainer.innerHTML = '';
        for(let i=1; i<=maxBoxes; i++){
            createBox(i);
        }
    }, 200);
});
