alert(`Welcome!! friends, Enjoy your jaaman shooter 2.0 game.
Use your arrow key to play the game`)


let board=document.getElementById("board");
let jet=document.getElementById("jet");
//! moving the jet
window.addEventListener("keydown",(event)=>{

  let left=parseInt(getComputedStyle(jet).getPropertyValue("left"));
if(event.key==="ArrowLeft"&&left>0)jet.style.left=left-10+"px";
else if(event.key==="ArrowRight"&&left<470)jet.style.left=left+10+"px";
if(event.key==="ArrowUp"|| event.key==="Space"){
let bullet=document.createElement("div");
bullet.classList.add("bullets");
board.appendChild(bullet);

let movebullet=setInterval(()=>{

//? conditions to destroy the rocks 
let rocks=document.getElementsByClassName("rocks");
for(i=0;i<rocks.length;i++){
  let rock=rocks[i];

  let rockbound=rock.getBoundingClientRect();
  let bulletbound=bullet.getBoundingClientRect();

  if(
    bulletbound.left >rockbound.left&&
    bulletbound.right<=rockbound.right&&
    bulletbound.top<=rockbound.top&&
    bulletbound.bottom<=rockbound.bottom
  ){
  rock.parentElement.removeChild(rock);
  
  //? let dding the points
  document.getElementById("points").innerHTML=parseInt(document.getElementById("points").innerHTML)+1

  }
}


  let bulletbottom=parseInt(window.getComputedStyle(bullet).getPropertyValue("bottom"));
//? stop the bullet after hitting the ships
  if(bulletbottom>=500){
    clearInterval(movebullet);
  }


  bullet.style.left=left+"px";
  bullet.style.bottom=bulletbottom+3+"px";
},10)
}
})
//! generating the rocks
let generateRock=setInterval(()=>{
  let rock=document.createElement("div");
  rock.classList.add("rocks");
  rock.style.left=Math.floor(Math.random()*460)+"px";
  board.appendChild(rock);  
},800)

//! moving the rock downwards
let moverock=setInterval(()=>{
let rocks=document.getElementsByClassName("rocks")
if(rocks!=undefined){
  for(i=0;i<=rocks.length;i++){
    let rock=rocks[i];
    let rocktop=parseInt( window.getComputedStyle(rock).getPropertyValue("top"));
    if(rocktop>=430){
      alert("Oops!! Game over")
      alert("click okay to play again")
    clearInterval(moverock)
    window.location.reload();
  }
    rock.style.top=rocktop+20+"px"
   }
  }
},450)