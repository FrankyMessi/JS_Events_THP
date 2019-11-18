//Fonct. 1 (footer// "clique" dans la console)
let footer = document.getElementsByTagName('footer')[0];
function displayClickOnFooter() {
  console.log('Clique');
}
footer.addEventListener("click", displayClickOnFooter);

//Fonct. 1-bis (footer// "clic numéro x" dans la console)
let clicksCount = 0;
function displayClicksOnFooter() {
  clicksCount ++;
  console.log(`Clic numéro : ${clicksCount}.`);
}
footer.addEventListener("click", displayClicksOnFooter);

//Fonct. 2 (ajouter la classe collapse à l'élément navbarHeader)
let hamburgerButton = document.getElementsByClassName('navbar-toggler')[0];
console.log(hamburgerButton);
function toggleThatMenu() {
  let menuContent = document.getElementById('navbarHeader');
  menuContent.classList.toggle('collapse');
}
hamburgerButton.addEventListener("click", toggleThatMenu);

//Fonct. 3 (changer le texte de la première card en rouge lorsqu'on clique sur "Edit")
let cards = document.getElementsByClassName("card");
let firstCard = cards[0];
let dangerButton = firstCard.getElementsByClassName("btn-outline-secondary")[0];
function paintItRed() {
  firstCard.style.color = 'red';
}
dangerButton.addEventListener("click", paintItRed);

//Fonct. 4 (changer le texte de la deuxième card en vert lorsqu'on clique sur "Edit", et le rechanger en noir quand on reclique sur "Edit")
let secondCard = cards[1];
let ecoButton = secondCard.getElementsByClassName("btn-outline-secondary")[0];
let ecoStyle = false;
function toggleTheGreen() {
  if (ecoStyle) {
    secondCard.style.color = 'black';
    ecoStyle = false;
  } else {
    secondCard.style.color = 'green';
    ecoStyle = true;
  }
}
ecoButton.addEventListener("click", toggleTheGreen);

//Fonct. 5 (faire disparaître Boostrap lorsqu'on double-clique dessus, et le faire réapparaître quand on double-clique encore dessus)
let navbar = document.getElementsByTagName("header")[0];
console.log(navbar)
let bootstrapLink = document.head.getElementsByTagName("link")[0];
console.log(bootstrapLink)
let bootstrapLinkContent = document.head.getElementsByTagName("link")[0].href;
let bootstrapStatus = true
function switchBootstrap() {
  if (bootstrapStatus) {
    bootstrapLink.href = "#";
    bootstrapStatus = false;
  } else {
    bootstrapLink.href = bootstrapLinkContent;
    bootstrapStatus = true;
  }
}
navbar.addEventListener("dblclick", switchBootstrap);