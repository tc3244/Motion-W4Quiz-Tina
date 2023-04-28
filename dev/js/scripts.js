import { gsap } from "gsap";

//QUIZ

let mainTl = gsap.timeline();

function graphAni(){

    let tl = gsap.timeline();

    tl.from(".graph", {autoalpha:0})
    ;

    return tl;
}

function redBoxAni(){

    let tl = gsap.timeline();

    tl.from(".red", {duration:1, x:"0",ease:"none",ease:"bounce"})
    .to(".red", {duration:2, y:"0",ease:"none",rotation: "+=360"})
    ;

    return tl;
}

function blueBoxAni(){

    let tl = gsap.timeline();

    tl.from(".blue", {duration:1, x:"350",ease:"none",ease:"bounce"})
    .to(".blue", {duration:2, y:"300",ease:"none",rotation: "+=360"})
    ;

    return tl;
}

mainTl.add(graphAni())
.add(redBoxAni())
.add(blueBoxAni())
;