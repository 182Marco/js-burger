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
// REFERENZE INPUT COUPON
var coupon = document.getElementById(`coupon`);
var FeedBackCoupon = document.getElementById(`FeedBackCoupon`);
var FeedBackCouponNumber = document.getElementById(`FeedBackCouponNumber`);
var invioPressErrElem = document.getElementById(`invioPressErrElem`);

// variabile globale del prezzo allo stato base
priceNumber = 50;

cheeseImg.addEventListener('click', cheeseFunc);

function cheeseFunc() {
  if (cheese.checked) {
    cheese.checked = false;
    priceNumber -= parseInt(cheese.value);
    price.innerHTML = priceNumber.toFixed(2);
  } else {
    cheese.checked = true;
    priceNumber += parseInt(cheese.value);
    price.innerHTML = priceNumber.toFixed(2);
  }
}
// tomato
tomatoImg.addEventListener('click', tomatoFunc);

function tomatoFunc() {
  if (tomato.checked) {
    tomato.checked = false;
    priceNumber -= parseInt(tomato.value);
    price.innerHTML = priceNumber.toFixed(2);
  } else {
    tomato.checked = true;
    priceNumber += parseInt(tomato.value);
    price.innerHTML = priceNumber.toFixed(2);
  }
}
// egg
eggImg.addEventListener('click', eggFunc);

function eggFunc() {
  if (egg.checked) {
    egg.checked = false;
    priceNumber -= parseInt(egg.value);
    price.innerHTML = priceNumber.toFixed(2);
  } else {
    egg.checked = true;
    priceNumber += parseInt(egg.value);
    price.innerHTML = priceNumber.toFixed(2);
  }
}
// lettuce
lettuceImg.addEventListener('click', lettuceFunc);

function lettuceFunc() {
  if (lettuce.checked) {
    lettuce.checked = false;
    priceNumber -= parseInt(lettuce.value);
    price.innerHTML = priceNumber.toFixed(2);
  } else {
    lettuce.checked = true;
    priceNumber += parseInt(lettuce.value);
    price.innerHTML = priceNumber.toFixed(2);
  }
}
// mustard
mustardImg.addEventListener('click', mustardFunc);

function mustardFunc() {
  if (mustard.checked) {
    mustard.checked = false;
    priceNumber -= parseInt(mustard.value);
    price.innerHTML = priceNumber.toFixed(2);
  } else {
    mustard.checked = true;
    priceNumber += parseInt(mustard.value);
    price.innerHTML = priceNumber.toFixed(2);
  }
}
//  Ketchup
ketchupImg.addEventListener('click', ketchupFunc);

function ketchupFunc() {
  if (ketchup.checked) {
    ketchup.checked = false;
    priceNumber -= parseInt(ketchup.value);
    price.innerHTML = priceNumber.toFixed(2);
  } else {
    ketchup.checked = true;
    priceNumber += parseInt(ketchup.value);
    price.innerHTML = priceNumber.toFixed(2);
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

// coupon validi
var validCoup = [`a123456789`, `b123456789`, `c123456789`, `d123456789`];

// validazione coupon
coupon.addEventListener(`focus`, () => {
  FeedBackCoupon.classList.add(`show`);
  FeedBackCouponNumber.innerText = 10;
});
coupon.addEventListener(`blur`, () => FeedBackCoupon.classList.remove(`show`));

coupon.addEventListener(`keydown`, () => {
  // verificare se l'input contiene un valido coupon
  if (
    coupon.value.includes('a123456789') ||
    coupon.value.includes('b123456789') ||
    coupon.value.includes('c123456789') ||
    coupon.value.includes('d123456789')
  ) {
    invioPressErrElem.innerText = `CODICE CORRETTO: ti è stato applicato il 20% di sconto`;
    sconto = priceNumber * 0.8;
    scontoFixed = sconto.toFixed(2);
    price.innerHTML = priceNumberFixed;
  }
  var num = parseInt(document.getElementById(`FeedBackCouponNumber`).innerText);
  console.log(num);
  if (num < 1) {
    FeedBackCoupon.style.display = 'none';
    invioPressErrElem.classList.remove(`no-show`);
    invioPressErrElem.innerText = `Hai inserito troppe cifre`;
  } else {
    FeedBackCoupon.style.display = 'block';
  }
  if (event.keyCode == 13) {
    invioPressErrElem.classList.remove(`no-show`);
    invioPressErrElem.innerText = `Non premere invio, lo sconto si attiverà appena digiterai l'ulima cifra del codice corretto`;
  } else if (event.keyCode == 8 && num < 10) {
    FeedBackCouponNumber.innerText = num + 1;
    invioPressErrElem.classList.add(`no-show`);
  } else if (event.keyCode != 8) {
    FeedBackCouponNumber.innerText = num - 1;
    invioPressErrElem.classList.add(`no-show`);
  }
});
