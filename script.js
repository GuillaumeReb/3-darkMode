//La DIV switch
const switchBox = document.querySelector('.switch');
console.log(switchBox);

//la DIV btn
const btn = document.querySelector('.btn');
console.log(btn);

//L'icone
const icone = document.querySelector('i');
console.log(icone);

//La DIV container
const container = document.querySelector('.container');
console.log(container);

//Le titre
const titre = document.querySelector('h1');
console.log(titre);

//Je soumet la DIV switch à une action au clic
switchBox.addEventListener('click', ()=>{
    console.log('DIV cliquée !');

//Je déplace le cercle
btn.classList.toggle('btn-change');

// Je déplace l'icone
icone.classList.toggle('icone-change');

//je change l'icone
icone.classList.toggle('fa-sun');

//Je change de couleur de fond
switchBox.classList.toggle('switch-change');

//La div container change de couleur de fond
container.classList.toggle('container-change');

//Je modifie le texte Titre
// titre.innerText = "LIGHT MODE";

//je modifie le titre
if (titre.innerText === "DARK MODE") {
    titre.innerText = "LIGHT MODE";
} else {
    titre.innerText = "DARK MODE";
}


});