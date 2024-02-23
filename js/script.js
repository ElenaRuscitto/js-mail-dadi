
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
  document.querySelector('.email').innerHTML='Congratulazioni, hai un dominio che può accedere al sistema! ';

 } else {
  alert ('Mi dispiace! La tua mail NON è nel sistema');
  document.querySelector('.email').innerHTML='Gentile utente, purtroppo hai un dominio che NON può accedere al sistema! ';
 } 


// DADI
let numRandomUt = (Math.ceil(Math.random()*6));
let numRandomPc = (Math.ceil(Math.random()*6));
console.log (numRandomUt, numRandomPc);
 

if (numRandomPc < numRandomUt) {

  document.getElementById('edadi').innerHTML=`
  HAI VINTO! hai battuto il computer! <br> 
  tu hai giocato il numero ${numRandomUt} ed il tuo avversario il numero ${numRandomPc}
  `;

} else if (numRandomUt < numRandomPc) {
  document.getElementById('edadi').innerHTML=`
  HAI PERSO! il computer ti ha battuto! <br> 
  tu hai giocato il numero ${numRandomPc} ed il tuo avversario il numero ${numRandomUt}
  `;

} else { 
  document.getElementById('edadi').innerHTML=`
  AVETE PAREGGIATO! <br>
  tu hai giocato il numero ${numRandomPc} ed il tuo avversario il numero ${numRandomUt}
  `;

}

































// if (mail === totMail[i])
// console.log = mail