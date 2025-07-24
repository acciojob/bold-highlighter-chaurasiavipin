const highLight=document.querySelectorAll("strong");
const newLight=document.querySelector("p");



function highlight() {
    highLight. style.color="rgb(0, 128, 0)";
	
}


function return_normal() {
     highLight. style.color="rgb(0, 0, 0)";

}
newLight.addEventListener('mouseover', highlight);
newLight.addEventListener('mouseout', return_normal)


