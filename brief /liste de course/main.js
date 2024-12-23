const buttonAdd= document.getElementById ("addItemButton");
const ListItem= document.getElementById("itemlist");
const itemInput = document.getElementById ("itemInput");
console.log(ListItem)
buttonAdd.addEventListener ("click", function()
{
    if(itemInput.value==="")// value= propriété d'élément input(permet de modif la valeur d'input ou recup ca valeur)
    {
        alert ("veuillez entrer un article");
    }else {
        let newLi= document.createElement ("li");
        newLi.textContent= itemInput.value;// 
        ListItem.appendChild(newLi);//appendChild ajoute un élément enfant à la fin
        itemInput.value = "";
    }
})
   

