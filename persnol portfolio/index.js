const list = document.querySelector("ul");
const open = document.querySelector('.bars');
const close = document.querySelector('.navClose')

open.addEventListener("click",()=>{
	list.classList.toggle('show-list');
})
close.addEventListener("click",()=>{
	list.classList.toggle('show-list');
})