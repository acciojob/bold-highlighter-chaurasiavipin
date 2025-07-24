const highLight=document.querySelectorAll("strong");
const newLight=document.querySelectorAll("p");



function highlight() {
    highlight. style.color="rgb(0, 128, 0)";
	
}


function return_normal() {
     highlight. style.color="rgb(0, 0, 0)";

}
newLight.addEventListener('mouseover', highlight);
newLight.addEventListener('mouseout', return_normal)


