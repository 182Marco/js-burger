// REFERENZE NODELIS
var ingredientAdd = document.getElementsByClassName(`ingredient-add`);
var ingredientImage = document.getElementsByClassName(`ingredient-image`);
var ingredientCheckbox = document.getElementsByClassName(`ingredient-checkbox`);
// REFERENZE ELEMENTI IMMAGINI
var cheeseImg = document.getElementById(`cheeseImg`);
var tomatoImg = document.getElementById(`tomatoImg`);
var eggImg = document.getElementById(`eggImg`);
var lettuceImg = document.getElementById(`lettuceImg`);
var mustardImg = document.getElementById(`mustardImg`);
var ketchupImg = document.getElementById(`ketchupImg`);
var price = document.getElementById(`price`);
// REFERENZE ELEMENTI TESTI IGREDIENTI
var cheeseTxt = document.getElementsByTagName(`label`)[0];
var tomatoTxt = document.getElementsByTagName(`label`)[1];
var eggTxt = document.getElementsByTagName(`label`)[2];
var lettuceTxt = document.getElementsByTagName(`label`)[3];
var mustardTxt = document.getElementsByTagName(`label`)[4];
var ketchupTxt = document.getElementsByTagName(`label`)[5];
// REFERENZE SULLE CASELLE
var cheese = document.getElementById(`cheese`);
var tomato = document.getElementById(`tomato`);
var egg = document.getElementById(`egg`);
var lettuce = document.getElementById(`lettuce`);
var mustard = document.getElementById(`mustard`);
var ketchup = document.getElementById(`ketchup`);
// REFERENZE SUGLI ADD
var cheeseBox = document.getElementsByTagName(`span`)[0];
var tomatoBox = document.getElementsByTagName(`span`)[1];
var eggBox = document.getElementsByTagName(`span`)[2];
var lettuceBox = document.getElementsByTagName(`span`)[3];
var mustardBox = document.getElementsByTagName(`span`)[4];
var ketchupBox = document.getElementsByTagName(`span`)[5];
// REFERENZE BTN RESET TO 0
var btn = document.getElementById(`btn`);

// variabile globale del prezzo allo stato base
priceNumber = 50;

cheeseImg.addEventListener('click', cheeseFunc);

function cheeseFunc() {
  if (cheese.checked) {
    cheese.checked = false;
    priceNumber -= parseInt(cheese.value);
    priceNumberFixed = priceNumber.toFixed(2);
    price.innerHTML = priceNumberFixed;
  } else {
    cheese.checked = true;
    priceNumber += parseInt(cheese.value);
    priceNumberFixed = priceNumber.toFixed(2);
    price.innerHTML = priceNumberFixed;
  }
}
// tomato
tomatoImg.addEventListener('click', tomatoFunc);

function tomatoFunc() {
  if (tomato.checked) {
    tomato.checked = false;
    priceNumber -= parseInt(tomato.value);
    priceNumberFixed = priceNumber.toFixed(2);
    price.innerHTML = priceNumberFixed;
  } else {
    tomato.checked = true;
    priceNumber += parseInt(tomato.value);
    priceNumberFixed = priceNumber.toFixed(2);
    price.innerHTML = priceNumberFixed;
  }
}
// egg
eggImg.addEventListener('click', eggFunc);

function eggFunc() {
  if (egg.checked) {
    egg.checked = false;
    priceNumber -= parseInt(egg.value);
    priceNumberFixed = priceNumber.toFixed(2);
    price.innerHTML = priceNumberFixed;
  } else {
    egg.checked = true;
    priceNumber += parseInt(egg.value);
    priceNumberFixed = priceNumber.toFixed(2);
    price.innerHTML = priceNumberFixed;
  }
}
// lettuce
lettuceImg.addEventListener('click', lettuceFunc);

function lettuceFunc() {
  if (lettuce.checked) {
    lettuce.checked = false;
    priceNumber -= parseInt(lettuce.value);
    priceNumberFixed = priceNumber.toFixed(2);
    price.innerHTML = priceNumberFixed;
  } else {
    lettuce.checked = true;
    priceNumber += parseInt(lettuce.value);
    priceNumberFixed = priceNumber.toFixed(2);
    price.innerHTML = priceNumberFixed;
  }
}
// mustard
mustardImg.addEventListener('click', mustardFunc);

function mustardFunc() {
  if (mustard.checked) {
    mustard.checked = false;
    priceNumber -= parseInt(mustard.value);
    priceNumberFixed = priceNumber.toFixed(2);
    price.innerHTML = priceNumberFixed;
  } else {
    mustard.checked = true;
    priceNumber += parseInt(mustard.value);
    priceNumberFixed = priceNumber.toFixed(2);
    price.innerHTML = priceNumberFixed;
  }
}
//  Ketchup
ketchupImg.addEventListener('click', ketchupFunc);

function ketchupFunc() {
  if (ketchup.checked) {
    ketchup.checked = false;
    priceNumber -= parseInt(ketchup.value);
    priceNumberFixed = priceNumber.toFixed(2);
    price.innerHTML = priceNumberFixed;
  } else {
    ketchup.checked = true;
    priceNumber += parseInt(ketchup.value);
    priceNumberFixed = priceNumber.toFixed(2);
    price.innerHTML = priceNumberFixed;
  }
}

// testi ingredienti reattivi con prezzo
cheeseTxt.addEventListener(`click`, () => cheeseFunc());
tomatoTxt.addEventListener(`click`, () => tomatoFunc());
eggTxt.addEventListener(`click`, () => eggFunc());
lettuceTxt.addEventListener(`click`, () => lettuceFunc());
mustardTxt.addEventListener(`click`, () => mustardFunc());
ketchupTxt.addEventListener(`click`, () => ketchupFunc());
// checkup e testo add ingredienti reattivi con prezzo
cheeseBox.addEventListener(`click`, () => cheeseFunc());
tomatoBox.addEventListener(`click`, () => tomatoFunc());
eggBox.addEventListener(`click`, () => eggFunc());
lettuceBox.addEventListener(`click`, () => lettuceFunc());
mustardBox.addEventListener(`click`, () => mustardFunc());
ketchupBox.addEventListener(`click`, () => ketchupFunc());

// possibilità resettare il panino a 0 con btn

btn.addEventListener(`click`, () => {
  for (let i = 0; i < ingredientCheckbox.length; i++) {
    ingredientCheckbox[i].checked = false;
    priceNumber = 50;
    price.innerHTML = priceNumber.toFixed(2);
  }
});