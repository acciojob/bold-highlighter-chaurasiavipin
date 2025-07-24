const highLight=document.querySelectorAll("strong");

const newLight=document.querySelectorAll("p");
const store=highLight.length;
const store2=newLight.length;



function highlight() {
	for(let i=0; i<store; i++){
    highLight[i].style.color= "rgb(0,128,0)";
	}
}


function return_normal() {
	for(let i=0; i<store2; i++){

     highLight[i].style.color= "rgb(0, 0, 0)";

}
}