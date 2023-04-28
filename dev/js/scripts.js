import { gsap } from "gsap";

//QUIZ

// a div with class of .graph (400x350 grid of 50x50 tiles)
// a div with class of .red positioned at x:150, y:150
// a div with class of .blue positioned at x:200, y:150
// a div with class of .green


// time 0s: red animates from x:0 for 1 second
// time 0s: blue animates from x:350 for 1 second
// time 2s: red animates up to y:0 for 2 seconds
// time 2s: blue animates down to y:300 for 2 seconds
// *All animations should use an ease (timing function) that slows down towards the end.


let mainTl = gsap.timeline();


function Animation1(){

    let tl = gsap.timeline();

    tl.from("box red",{x:"0"})
    ;

    return tl;
}

mainTl.add(Animation1())
;