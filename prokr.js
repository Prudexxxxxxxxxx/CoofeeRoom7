
const sladeContainer = document.querySelector('.container');
const slade = document.querySelector('.slades');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const interval = 1000;

let slades = document.querySelectorAll('.slade');
let index = 1;

const firstClone = slades[0].cloneNode(true);
const lastClone = slades[slades.length-1].cloneNode(true);

firstClone.id = 'first-clone';
firstClone.id = 'last-clone';

slade.append(firstClone);
slade.prepend(lastClone);

const slideWidth = slades[index].clientWidth;

slade.style.transform =` translateX(${-slideWidth * index}px)   `;

const startSlide = ()=> {
    setInterval(()=> {
         index++;
         slade.style.transform =` translateX(${-slideWidth * index}px)   `;
         slade.style.transition = '0.9s'

    },interval);
};

slade.addEventListener('transitionend', ()=>{
        slades = document.querySelectorAll('.slade');
        if(slades[index].id === firstClone.id){
        slade.style.transition = 'none'
        index =1;
        slade.style.transform =` translateX(${-slideWidth * index}px)   `;
        }
    })

startSlide();