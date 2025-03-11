// let div = document.querySelector('div');
// let ul = document.querySelector('ul');
// let li = document.querySelector('button');
// div.addEventListener("click", function () {
//   event.stopPropagation();
//   console.log('div was cliked');
// })
// ul.addEventListener("click", function () {
//   event.stopPropagation();
//   console.log('ul was cliked');
// })
// li.addEventListener("click", function () {
//   event.stopPropagation();
//   console.log('li was cliked');
// })
let gameSeq = [];
let userSeq = [];
let score=[];
let colors=["green","red","purple","yellow"];
let st = false;
let level = 0;
let h3=document.querySelector('h3');
document.addEventListener("keypress", function () {
  if(st==false)
  {
    console.log("Game is Started");
    st=true;
    levlup();
  }
  
})
function userFlash(btn)
{
  btn.classList.add("userf")
  setTimeout(function()
{
  btn.classList.remove("userf")
},250);
}
function btnFlash(btn)
{
  btn.classList.add("flash")
  setTimeout(function()
{
  btn.classList.remove("flash")
},250);
}
function levlup()
{
  userSeq=[];
  level++;
  h3.innerText=`Level ${level}`;
  let random=Math.floor(Math.random()*3);
  let randomcolr=colors[random];
  let Jao=document.querySelector(`.${randomcolr}`);
  gameSeq.push(randomcolr);
  console.log(gameSeq)
  btnFlash(Jao);

}
function chekAns(idx)
{
  if(userSeq[idx]==gameSeq[idx])
  {
    if(userSeq.length==gameSeq.length)
    {
      setTimeout(levlup,1000);
    }
  }
  else{
    score.push(level);
    let maxi=gethigh(score);
    h3.innerHTML=`Game Over ! Your score was<b>${level}</b><br>Please Restart the Game.<br> Your High score is ${maxi}`;
    let body=document.querySelector('body');
    body.style.backgroundColor="red";
    setTimeout( function()
  {
    body.style.backgroundColor='white';
  },100);
    reset();
  }
}
function btnpress()
{
  let btn=this;
  userFlash(btn);
  let userC=btn.getAttribute('id');
  userSeq.push(userC);
  let idx=userSeq.length-1
  chekAns(idx);
}
let allBtn=document.querySelectorAll(".btn");
for(btn of allBtn)
{
  btn.addEventListener("click",btnpress);
}
function reset()
{
  st=false;
  gameSeq=[];
  userSeq=[];
  level=0;
}
function gethigh(arr)
{
  let maxi=arr.reduce((el,h)=>(Math.max(el,h)));
  return maxi;
}

