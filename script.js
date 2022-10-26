"use strict";

// --------ANIMATION---------//
// let largeur=50;


// function ouverturecote(){
//     largeur -=1;

//     let div1=document.querySelector(".murGauche");
    

//     div1.setAttribute('style','width:'+largeur+'%');
//     console.log(largeur);
//     if(largeur ==0) clearInterval(timer);

//     largeur -=1;

//     let div2=document.querySelector(".murDroite");

//     div2.setAttribute('style','width:'+largeur+'%');
//     console.log(largeur);
//     if(largeur ==0) clearInterval(timer);
// }

// let timer=setInterval('ouverturecote()',50);

// window.addEventListener('load',ouverture)

// -------- FIN ANIMATION---------//
let hauteur=50;

function ouverturehaut() {

    hauteur -=1;

    let div3=document.querySelector(".murHaut");
    div3.setAttribute('style','height:'+hauteur+'%');
    console.log(hauteur);
    if (hauteur == 0) clearInterval(timer1);

    hauteur -=1;

    
    let div4=document.querySelector(".murBas");
    div4.setAttribute('style','height:'+hauteur+'%');
    console.log(hauteur);
    if (hauteur == 0) clearInterval(timer1);

        
    }



let timer1=setInterval('ouverturehaut()',50)

