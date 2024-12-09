'use strict';


const btns = document.querySelectorAll(".drum");
const audio1 = new Audio("sounds/crash.mp3");
const audio2 = new Audio("sounds/kick-bass.mp3");
const audio3 = new Audio("sounds/snare.mp3");
const audio4 = new Audio("sounds/tom-1.mp3");
const audio5 = new Audio("sounds/tom-2.mp3");
const audio6 = new Audio("sounds/tom-3.mp3");
const audio7 = new Audio("sounds/tom-4.mp3");


const color = function(e){
    document.querySelector(`.${e.key}`).style.color = "white";
        }

const keyboard = function(){
    let btnInnerHTML = this.textContent;
        makeSound(btnInnerHTML);
        animation(btnInnerHTML);
        //    console.log(btnInnerHTML);
}
        

btns.forEach(btn => btn.addEventListener("keydown", color));

btns.forEach(btn => btn.addEventListener("click", keyboard));


function animation (Key){
    const activebtn = document.querySelector(`.${Key}`);
        activebtn.classList.add("pressed");

        setTimeout(function(){
            activebtn.classList.remove("pressed");
        }, 100);
        // console.log(activebtn);
};


function makeSound (key){

    if(key === "w"){
        audio1.play();
    }else if (key === "a"){
        audio2.play();
    }else if (key === "s"){
        audio3.play();
    }else if (key === "d"){
        audio4.play();
    }else if (key === "j"){
        audio5.play();
    }else if (key === "k"){
        audio6.play();
    }else if (key === "l"){
        audio7.play();
    }
}


