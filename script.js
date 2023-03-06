const button = document.querySelector(".btn");
button.addEventListener("click",()=>{
   const r = Math.floor(Math.random()*256);
   const g = Math.floor(Math.random()*256);
   const b = Math.floor(Math.random()*256);
change = document.querySelector("body");
change.style.backgroundColor=`rgb(${r},${g},${b})`;   
button.textContent=(`rgb(${r},${g},${b})`);
})
