
// MAIL
let mail = prompt ('Quale è la tua mail?');

const totMail = ['a.a@gmail.com', 'b.b@gmail.com', 'c.c@gmail.com', 'd.d@gmail.com', 'e.e@gmail.com'];

let verifica = false;

for (let i = 0; i < totMail.length; i++) {

  if (mail == totMail[i]){
    verifica = true;
    console.log('trovata');

  }
}

if (verifica) {
  alert ('la tua mail è nel sistema');
  document.querySelector('div').innerHTML='Congratulazioni, hai un dominio che può accedere al sistema! ';

 } else {
  alert ('Mi dispiace! La tua mail NON è nel sistema');
  document.querySelector('div').innerHTML='Gentile utente, purtroppo hai un dominio che NON può accedere al sistema! ';
 } 


// DADI
let numRandomUt = (Math.ceil(Math.random()*6));
let numRandomPc = (Math.ceil(Math.random()*6));
console.log (numRandomUt, numRandomPc);

if (numRandomPc < numRandomUt) {
  document.querySelector('p').innerHTML='HAI VINTO! hai battuto il computer! ';

} else if (numRandomUt < numRandomPc) {
  document.querySelector('p').innerHTML='HAI PERSO! il computer ti ha battuto! ';

} else { 
  
  document.querySelector('p').innerHTML='AVETE PAREGGIATO!';

}

































// if (mail === totMail[i])
// console.log = mail