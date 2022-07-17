//création du paragraphe à cacher/révéler
const paragraphe = document.querySelector("p");

//au chargement de la page
window.onload = function () {

    //le paragraphe sera caché
    paragraphe.hidden = true;

    //mais on demande à l'utilisateur s'il veut le voir
    let boiteDialogue = window.prompt("Voulez-vous voir le contenu de cette page (o/n) ?");

    //s'il tape o, il le verra.
    if (boiteDialogue == "o") {
    
        paragraphe.hidden = false;
    }


}
