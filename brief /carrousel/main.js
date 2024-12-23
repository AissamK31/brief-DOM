const buttonNext = document.getElementById("suivant");
const buttonPrevious = document.getElementById("précédent");
const imgsContainer = document.getElementById("carrousel-container");

const imgsContainerChildrens = imgsContainer.children;

for(let i = 1; i < imgsContainerChildrens.length; i++)
{
    imgsContainerChildrens[i].setAttribute("hidden", "")
}
   

   
buttonNext.addEventListener("click", function()
{
let displayedElement; 
let indexDisplayedElement;

    for(let i = 0; i < imgsContainerChildrens.length; i++) 
    {
        if(imgsContainerChildrens[i].hasAttribute("hidden")==false)
        {
            displayedElement = imgsContainerChildrens[i];
            indexDisplayedElement = i;
        }
    }
    let toDiplayElement = imgsContainerChildrens[indexDisplayedElement +1];
    if(toDiplayElement==undefined){
        toDiplayElement = imgsContainerChildrens[0];
    }

   displayedElement.setAttribute("hidden", "");
   toDiplayElement.removeAttribute("hidden");
    console.log(toDiplayElement);
});