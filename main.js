// REFERENZA AVVOLGITORE ELEMENTI
var wrapperOfAll = document.getElementsByClassName(`wrapperOfAll`)[0];
// REFERENZE NOME AL BURGER
var nameBurgerBox = document.getElementsByClassName(`name-burger`)[0];
var nameBurger = document.getElementById(`name`);
var reportedName = document.getElementById(`reportedName`);
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
var feedBackCoupon = document.getElementById(`feedBackCoupon`);
var feedBackCouponNumber = document.getElementById(`feedBackCouponNumber`);
var feed2Elem = document.getElementById(`feed2Elem`);
var coupLengthInfo = document.getElementById(`coupLengthInfo`);
var noInvioFeed = document.getElementById(`noInvioFeed`);
// BTN PER PAGARE (SI vedrà in console il copuon rimosso dall'array (se corretto))
var btnPay = document.getElementsByClassName(`fa-amazon-pay`)[0];

// variabile globale del prezzo allo stato base
priceNumber = 50;
// coupon validi
var validCoup = [`a123456789`, `b123456789`, `c123456789`, `d123456789`];

// togliere animazione sul nome che chiama attenzione utente a metter focus
nameBurger.addEventListener(`focus`, function () {
  nameBurgerBox.classList.remove(`pulse`);
});

// dare un nome al burger e portare a display l'applicazione
nameBurger.addEventListener(`keypress`, () => {
  wrapperOfAll.classList.remove(`no-show`);
  /* mettere un timeout per far si che il browser prima 
  veda il carattere inserito e poi lo riporti */
  setTimeout(function () {
    reportedName.innerText = nameBurger.value;
  }, 1);
});
// cheese // AGGIUNTA E RIMOZIONE INGREDIENTI CON I CLICK SULLE VARIE PARTI
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
// **********

// BTN RESET PANINO A 0
btn.addEventListener(`click`, () => {
  for (let i = 0; i < ingredientCheckbox.length; i++) {
    ingredientCheckbox[i].checked = false;
    //   prezzo di reset ingredienti con coupon valido
    if (
      feed2Elem.innerText ==
      `CODICE CORRETTO: ti è stato applicato il 20% di sconto`
    ) {
      priceNumber = 50 * 0.8;
    } else {
      //   prezzo di reset ingredienti senza coupon valido
      priceNumber = 50;
    }
    price.innerHTML = priceNumber.toFixed(2);
  }
});

// ZONA VALIDAZIONE COUPON
// comportamento dei feednack quando c'è focus o blur su input coupon
coupon.addEventListener(`focus`, () => {
  if (feed2Elem.style.display != `block`) {
    feedBackCoupon.classList.add(`show`);
  }
});
// coupon.addEventListener(`blur`, () => feedBackCoupon.classList.remove(`show`));

/* variabile del idice cupon dichiarata globalemente
 per poter essere rimosso all'alla funzione quando btn paga*/
var index;

// verificare se l'input contiene un valido coupon
coupon.addEventListener(`keydown`, () => {
  setTimeout(function () {
    if (validCoup.includes(coupon.value)) {
      // feedback sconto
      feed2Elem.style.display = `block`;
      feed2Elem.innerText = `CODICE CORRETTO: ti è stato applicato il 20% di sconto`;
      /*  via info lunhezza fissa coupon 
    (altrimenti testi si sovrapporebbero) */
      coupLengthInfo.style.display = `none`;
      // calcolo e inserimento sconto
      if (parseInt(price.innerText) > 40) {
        sconto = priceNumber * 0.8;
        price.innerText = sconto.toFixed(2);
      }
      // eliminazione fedback su numero cifre
      feedBackCoupon.classList.remove(`show`);
      /* storare indice couponInserito per poterlo
      togliere dall'array al click di paga */
      index = validCoup.indexOf(coupon.value);
    } else {
      // reset se coupon viene disinseito
      feed2Elem.style.display = `none`;
      price.innerHTML = priceNumber.toFixed(2);
      feedBackCoupon.classList.add(`show`);
    }
    /* il timeout (1 qui sotto) serve affinchè il browser 
    aspetti che il carattere sia stato inserito prima di 
    leggere la stringa dentro l'input per i coupon */
  }, 1);
});
// dare feedback su numero di caratteri mancanti
coupon.addEventListener(`keydown`, () => {
  /* definire ad ogni keypress il feedback
    di caratteri mancanti precedente */
  var num = parseInt(document.getElementById(`feedBackCouponNumber`).innerText);
  if (event.keyCode == 8 && num < 10) {
    feedBackCouponNumber.innerText = ++num;
    /* se preme caratteri diversi da: canella,
     freccia a dx o freccia a sx o invio */
  } else if (
    event.keyCode != 8 &&
    event.keyCode != 37 &&
    event.keyCode != 39 &&
    event.keyCode != 13
  ) {
    feedBackCouponNumber.innerText = --num;
  }
});
// dare feedback se nell'input copon si preme invio
coupon.addEventListener(`keypress`, () => {
  if (event.keyCode == 13) {
    noInvioFeed.classList.add(`show`);
    /* se utente preme invio dopo coupon coretto o preme invio e poi non digita 
    -> 5secondi per leggere poi via messaggio */
    setTimeout(function () {
      noInvioFeed.classList.remove(`show`);
    }, 5000);
    // quando preme qualsiasi altra cosa via messaggio
  } else {
    noInvioFeed.classList.remove(`show`);
  }
});

// togliere dall'array il copon se si schiaccia paga
btnPay.addEventListener(`click`, () => {
  console.log(index);
  console.log(`coupon validi prima del pagamento`);
  console.table(validCoup);
  //   operazione vera e propria
  //   validCoup.splice(index, 1);
  delete validCoup[index];
  //   ******************
  console.log(`coupon validi dopo il pagamento`);
  console.table(validCoup);
  console.log(
    `come si vede dal confronto delle due table se si è usato un copon questo è stato rimosso dalla lista dei copon validi per lo sconto, altrimenti le tablle restano uguali`
  );
});
