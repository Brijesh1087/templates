const list = document.querySelector("ul");
const bars = document.querySelector('.bars');

bars.addEventListener("click",()=>{
	list.classList.toggle('show-list');
})