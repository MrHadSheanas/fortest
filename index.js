let iconfirst =document.getElementById('imgone1');
let iconsecond= document.getElementById('imgtired');
let icontired = document.getElementById('imgtwo');
let iconfour =document.getElementById('imgfive'); 
let button1=document.getElementById('button-one');


if(button1) {
    button1.addEventListener('click', () =>{
        maintwo.classList.add('showmune');
        divtree.style.display = 'none';
        divfour.style.display = 'none'
        divone.style.display = 'none'

    } )} 
// if(iconfirst){
//     iconfirst.addEventListener('click', () =>{
//       divtree.classList.add('showmune');
//         }
//     )
// }
if (iconfirst){
    iconfirst.addEventListener('click', () =>{
        divtree.classList.add('show-mune')
    })
}
if(iconsecond){
    iconsecond.addEventListener('click', () =>{
        divtree.classList.remove('show-mune');
    })
}

if(icontired){
    icontired.addEventListener('click', () =>{
        divfour.classList.add('show-mune')
 } )}

 if(iconfour){
    iconfour.addEventListener('click' , () => {
        divfour.classList.remove('show-mune');
    })
 }




 let inputFirst=document.getElementById('inputone');
 let inputSecond=document.getElementById('inputtwo');
 let inputTired=document.getElementById('inputthree');
 let inputFour=document.getElementById('inputfour');
 let inputFive=document.getElementById('inputfive');
 let inputten=document.getElementById('inputten');
let pone=document.getElementById('pfazl');
 let ptwo=document.getElementById('pahmad');
 let ptree=document.getElementById('p-55');
 let pfour=document.getElementById('p-66');
 let pfive=document.getElementById('p-77');
 let ten =document.getElementById('p-88');
 function showinput(){
    pone.innerHTML=inputFirst.value;
    ptwo.innerHTML = inputSecond.value;
   
   
 }
function showinputtwo(){
     ptree.innerHTML = inputTired.value;
    pfour.innerHTML = inputFour.value;
     pfive.innerHTML = inputFive.value;
    ten.innerHTML = inputten.value;
}
function showfun(){
    maintwo.style.display = 'none';
}
let img =document.getElementById('imgstrat');
if(img){
    img.addEventListener('mousemove', () =>{
        img.style.backgroundColor ='red'

    } )
}


