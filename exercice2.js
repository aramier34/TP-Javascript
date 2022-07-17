//on crée d'abord à l'aide des exos précédents la clase Attributs et la fonction createDOMElements
//pour insérer des élements et des sections sur la page HTML 

class Attribut {
    constructor(nomAttribut, valeurAttribut) {
        this.nomAttribut = nomAttribut;
        this.valeurAttribut = valeurAttribut;
    }
}

function createDOMElement(nomBalise, texteBalise, parentDansDom, attributs) {

    const newElement = document.createElement(nomBalise);
    newElement.innerHTML = texteBalise;
    parentDansDom.appendChild(newElement);

    for (i = 0; i < attributs.length; i++) {
        newElement.setAttribute(attributs[i].nomAttribut, attributs[i].valeurAttribut);
    }
    return newElement;
}

//création du header et du main pour la page

const header = createDOMElement("header", "", document.querySelector("body"), []);
const main = createDOMElement("main", "", document.querySelector("body"), []);

//création des 3 boutons 
const boutonCompetences = createDOMElement("button", "Compétences", header, [new Attribut("id", "btn-skills")]);
const boutonExperience = createDOMElement("button", "Expérience", header, [new Attribut("id", "btn-experience")]);
const boutonFormation = createDOMElement("button", "Formation", header, [new Attribut("id", "btn-training")]);


//création du long texte
const longTexte = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa excepturi aut, reiciendis cumque vitae possimus quisquam, fugit consequuntur nemo magnam eum. Laudantium sunt illum ut obcaecati? Accusamus consequatur fuga facere? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis molestias soluta, dolorum, possimus vitae debitis unde, fugit beatae qui molestiae asperiores minima magnam repudiandae libero natus sed voluptas nam nobis? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et itaque natus voluptates ex totam corporis earum quos placeat delectus, deleniti atque reprehenderit magnam consequuntur dicta repudiandae eum nisi sunt saepe.";

//a chaque clique sur le bouton
boutonCompetences.onclick = function () {

    //le h1 lié au bouton et le long texte doivent apparaitre
    if (document.querySelector("main #p-competences") == null) {
        const titreCompetences = createDOMElement("h1", "Compétences", main, [new Attribut("id", "h1-competences")]);
        const paragraphe = createDOMElement("p", longTexte + "compétences", main, [new Attribut("id", "p-competences")]);
    }
    else {
        document.getElementById("h1-competences").hidden = false;
        document.getElementById("p-competences").hidden = false;
    }
// mais les contenus associés aux deux autres boutons non
    if (document.querySelector("main #p-formation") != null) {
        document.getElementById("h1-formation").hidden = true;
        document.getElementById("p-formation").hidden = true;
    }
    if (document.querySelector("main #p-experience") != null) {
        document.getElementById("h1-experience").hidden = true;
        document.getElementById("p-experience").hidden = true;
    }


}
//la logique est la même pour les deux autres boutons.
boutonExperience.onclick = function () {

    if (document.querySelector("main #p-experience") == null) {
        const titreCompetences = createDOMElement("h1", "Expérience", main, [new Attribut("id", "h1-experience")]);
        const paragraphe = createDOMElement("p", longTexte + "expérience", main, [new Attribut("id", "p-experience")]);
    }
    else {
        document.getElementById("h1-experience").hidden = false;
        document.getElementById("p-experience").hidden = false;
    }
    if (document.querySelector("main #p-competences") != null) {
        document.getElementById("h1-competences").hidden = true;
        document.getElementById("p-competences").hidden = true;
    }
    if (document.querySelector("main #p-formation") != null) {
        document.getElementById("h1-formation").hidden = true;
        document.getElementById("p-formation").hidden = true;
    }
}

boutonFormation.onclick = function () {

    if (document.querySelector("main #p-formation") == null) {
        const titreCompetences = createDOMElement("h1", "Formation", main, [new Attribut("id", "h1-formation")]);
        const paragraphe = createDOMElement("p", longTexte + "formation", main, [new Attribut("id", "p-formation")]);
    }
    else {
        document.getElementById("h1-formation").hidden = false;
        document.getElementById("p-formation").hidden = false;
    }

    if (document.querySelector("main #p-competences") != null) {
        document.getElementById("h1-competences").hidden = true;
        document.getElementById("p-competences").hidden = true;
    }

    if (document.querySelector("main #p-experience") != null) {
        document.getElementById("h1-experience").hidden = true;
        document.getElementById("p-experience").hidden = true;
    }


}