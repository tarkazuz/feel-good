//viability toggle for main section
const homeButton= document.querySelector('#homepage');
const homeDets = document.querySelector("#homeDets");
let homeClicked = false;

homeButton.addEventListener('click', ()=>{
   if(!homeClicked){
        homeDets.toggleAttribute('hidden');
    ;} 
})
    //close main dets
const closeMain= document.querySelector('#closeMain');

closeMain.addEventListener('click', ()=>{
    homeDets.toggleAttribute('hidden');
})
//viability toggle for section 1
const natureButton= document.querySelector('#natureButton');
const natureDets = document.querySelector("#natureDets");
let natureClicked = false;

natureButton.addEventListener('click', ()=>{
   if(!natureClicked){
        natureDets.toggleAttribute('hidden');
    ;} 
})
    //close nature dets
const closeNature= document.querySelector('#closeNature');

closeNature.addEventListener('click', ()=>{
    natureDets.toggleAttribute('hidden');
})

//viability toggle for section 2
const showButton= document.querySelector('#showButton');
const showDets = document.querySelector("#showDets");
let showClicked = false;

showButton.addEventListener('click', ()=>{
   if(!showClicked){
        showDets.toggleAttribute('hidden');
    ;} 
})

    //close show dets
const closeShow= document.querySelector('#closeShow');

closeShow.addEventListener('click', ()=>{
    showDets.toggleAttribute('hidden');
})

//viability toggle for section 3
const bookButton= document.querySelector('#bookButton');
const bookDets = document.querySelector("#bookDets");
let bookClicked = false;

bookButton.addEventListener('click', ()=>{
   if(!bookClicked){
        bookDets.toggleAttribute('hidden');
        bookDets.toggleAttribute('autofocus');
    ;} 
})

    //close book dets
    const closeBook= document.querySelector('#closeBook');

    closeBook.addEventListener('click', ()=>{
        bookDets.toggleAttribute('hidden');
    })