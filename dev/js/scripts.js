import { gsap } from "gsap";

//QUIZ

// have the red and blue elements bounce off each other when they meet

let mainTl = gsap.timeline();

function graphAni(){

    let tl = gsap.timeline();

    tl.from(".graph", {autoalpha:0})
    ;

    return tl;
}

function redBoxAni(){

    let tl = gsap.timeline();

    tl.from(".red", {duration:1, x:"0",ease:"none"})
    .to(".red", {duration:2, y:"0",ease:"none"})
    ;

    return tl;
}

function blueBoxAni(){

    let tl = gsap.timeline();

    tl.from(".blue", {duration:1, x:"350",ease:"none"})
    .to(".blue", {duration:2, y:"300",ease:"none"})
    ;

    return tl;
}

mainTl.add(graphAni())
.add(redBoxAni())
.add(blueBoxAni())
;