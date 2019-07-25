let tempp = new TimelineMax({paused:true});
let kempp = new TimelineMax({paused:true});

var clc = document.querySelector('.barbutton');
var cclc = document.querySelector('.navclose');
var k1 = document.querySelector('.but1');
var k2 = document.querySelector('.but2');
var k3 = document.querySelector('.but3');
var k4 = document.querySelector('.but4');
var k5 = document.querySelector('.but5');
var k6 = document.querySelector('.but6');
var k7 = document.querySelector('.but7');
var k8 = document.querySelector('.but8');
var k9 = document.querySelector('.but9');


tempp.addLabel("coress");

tempp
    .set('.clubt',{css:{display:"none"}})
    .to('.mynewnavbar',1,{x:0 ,ease: Sine.easeOut},"coress")
    .to('.webbody',0.2,{opacity:0.6},"coress")
    .set('#social-links',{css:{opacity:0}})




kempp
    .to('.mynewnavbar',1.8,{x:-400 ,ease: Sine.easeOut})

clc.onclick = function() {
  tempp.play();
}

cclc.onclick = function() {
  tempp.reverse();
}

k1.onclick = function() {
  tempp.reverse();

}
k2.onclick = function() {
  tempp.reverse();

}
k3.onclick = function() {
  tempp.reverse();

}
k4.onclick = function() {
  tempp.reverse();

}
k5.onclick = function() {
  tempp.reverse();

}
k6.onclick = function() {
  tempp.reverse();

}
k7.onclick = function() {
  tempp.reverse();

}
k8.onclick = function() {
  tempp.reverse();

}
k9.onclick = function() {
  tempp.reverse();

}

let ntemp = new TimelineMax({paused:true});
let stemp = new TimelineMax({paused:true});


stemp
    .to('.icon-bar',0.5,{x:-100})


ntemp
      .to('.clubt',1,{x:500})
      .set('.clubt',{css:{display:"none"}})


window.addEventListener('scroll',()=>{

  console.log(document.documentElement.scrollTop);

  if (document.documentElement.scrollTop > 550 ) {
    ntemp.play();
    stemp.reverse();

}
else {
  ntemp.reverse();
  stemp.play();
}
});



let btemp = new TimelineMax({paused:true});

btemp
      .set('.barbutton',{css:{color:"black"}})
      .set('.barbutton',{css:{opacity:0.6}})


window.addEventListener('scroll',()=>{

  console.log(document.documentElement.scrollTop);

  if (document.documentElement.scrollTop > 4600 && document.documentElement.scrollTop<5250 ) {
    btemp.play();
}
else {
  btemp.reverse();
}
});



let fg = new TimelineMax({paused:true});

fg
  .set('.preloadernew',{css:{display:"none"}})

function preFunc(){
  fg.play();
}
