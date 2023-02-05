
function timelineOne(){
var tl = gsap.timeline({
   scrollTrigger:{
    trigger:"#home",
    start: "top top",
    scrub: 1,
    pin: true,
    markers: true,
   }
});
tl
.from("#centerimg",{
    x: "160%",
    duration: 5,
    ease: Power1,
})
.to("#circle",{
    scale: .2, 
    ease: Power1,
}, "same")
.to("#overlay #purple",{
    top: "50%", 
    ease: Power1,
}, "same")
.to("#overlay #mainh1",{
    top: "150%", 
    ease: Power1,
}, "same")
.to("#overlay #centerimg img",{
    scale: 0, 
    ease: Power1,
}, "same")
.to("#overlay #centerimg span",{
    opacity: 0, 
    ease: Expo.easeInout,
}, "same")
.to("#smcircle",{
    scale: .6, 
    ease: Power1,
}, "same")
.to("#circle #btm img",{
    rotate: "-180deg",
    ease: Power1,
    stagger: .05,
}, "same")
.to("#imagecontainer img",{
    scale: 1, 
    ease: Power0,
},"same")
.to("#smcircle",{
    scale: 0, 
    ease: Power1,
},"samesame")
.to("#circle",{
    scale: 0, 
    ease: Power1,
},"samesame")
.to("#purple",{
    scale: 0,
    opacity:0, 
    ease: Power1,
},"samesame")
.to("#overlay #sech1",{
    rotate: 0,
    bottom:"2%", 
    delay: -.3,
    ease: Power1,
},"samesame")
.to("#sidepurple", {
    top: "0%",
    delay: -.4,
    ease: Power1,
})
.to("#sidepurple", {
    top: "-70%",
    delay: .2,
    ease: Power1,
})
.to("#imagecontainer img", {
    scale: 1,
    ease: Power0,
}, "samesame")
};
function timelineTwo(){
    gsap.set("#second #stop .circle",{ top: "150%",scale:.5})
    gsap.set(".rectangle .rec",{ top: "100%",})
    gsap.set(".leftrec .lr",{ top: "100%",})
    gsap.set(".btmrec .br",{ top: "100%",})
    var tl2 = gsap.timeline({
        scrollTrigger:{
         trigger:"#second",
         start: "top top",
         scrub: 1,
         pin: true,
         end: "+=" + (window.innerHeight * 9),
         markers: true,
        }
     })
     tl2
     .to(".circle",{
        top: "50%",
        scale: 1,
        stagger: .1,
        ease: Power1,
    },) 
    .to(".circle",{
        top: "50%",
        left: "50%",
        ease: Power1,
    },) 
    .to(".circle",{
        top: "50%",
        scale: .7,
        ease: Power1,
    },)
    .to(".circle",{
        top: "50%",
        scale: 10,
        ease: Power1,
    },"a")
    .to(".tsecond",{
        left: "4%",
        duration: 4,
        ease: Power1,
    },"a")
    .to("#stop h1",{
        left: "-130%",
        ease: Power1,
        duration: 6,
    },"same")
    .to(".tthird",{
        left: "4%",
        duration: 4,
        ease: Power1,
    },"same")
    .to("#sbtm .para h1",{
        delay:1,
        opacity: 0,
        ease: Power1,
        duration: 1,
    },"same")
    .to("#sbtm .para h2",{
        delay: 2,
        opacity: 1,
        ease: Power1,
        duration: 1,
    },"same")
    .to("#stop .pi", {
        background: `linear-gradient(to right, #D5A7B4, #B4AAD5)`,
        ease: Power1
    }, "same")
    .to(".number h1",{
        delay: -4,
        ease: Power1,
        duration: 1.5,
        stagger: 4,
        top: 0,
    },"same")
    .to(".number h1",{
        delay: 2,
        ease: Power1,
        duration: 1.5,
        stagger: 4,
        top: "-100%",
    },"same")
    .to(".number h2",{
        ease: Power1,
        duration: 1.5,
        top: "10%",
    },)
    .to(".rectangle .rec",{
        ease: Power1,
        duration: 1.5,
        stagger: .5,
        top: "0%",
    },"name")
    .to(".leftrec .lr",{
        ease: Power1,
        duration: 1.5,
        stagger: .5,
        top: "0%",
    },"name")
    .to(".btmrec .br",{
        ease: Power1,
        duration: 1.5,
        stagger: .5,
        top: "0%",
    },"name")
    .to(".leftrec .lr",{
        ease: Power1,
        duration: 1.5,
        left: "-10%",
    },"br")
    .to(".btmrec .br",{
        ease: Power1,
        duration: 1.5,
        left: "-10%",
    },"br")
    .to(".btmrec .br",{
        ease: Power1,
        duration: 1.5,
        left: "-20%",
    },)
    .to("#stop .pi", {
        background: `linear-gradient(to right, rgb(255, 237, 250),rgb(255, 237, 250))`,
        ease: Power1
    }, "br")
}
function third(){
    var tl3= gsap.timeline({
        scrollTrigger:{
            trigger:"#third",
            start:"top top",
            markers:true,
            pin:`#third-overlay`,
 
            // pin:true,
            // end:"+=" + (window.innerHeight * 7),
            // end:"50%",
            scrub:2,
    }
});
tl3
.to("#third",{
    top:"-300%",
    stagger:1,
    ease:Power1
},"a")
.to("#bottom-img",{
    ease:Power1,
    rotation:"360",
    repeat:1
},"a")
.to("#panel-text",{
    delay:.5,
    left:"-100%",
    ease:Power1,
    repeat:1
},"a")
.to("#side",{
    left:"150%",
    delay:.3,
    duration:3,
    ease:Power1
},"a")
.to("#ps",{
    delay:1,
    left:"40%",
    ease:Power1
},"a")
.to("#yf",{
    delay:1,
    left:"15%",
    ease:Power1
},"a")
.to("#ak",{
    delay:1,
    left:"40%",
    ease:Power1
},"a")
.to("#btm-bar",{

    delay:1.5,
    left:"-40%",
    ease:Power1
},"a")
.to("#picture",{
    delay:1.5,
    top:"50%",
    ease:Power1
},"a")
.to("#smll-img2",{
    delay:1.5,
    top:"51%",
    ease:Power1
},"a")
.to("#smll-img",{
    delay:1.5,
    top:"28%",
    ease:Power1
},"a")
tl.to(".gole-1",{
    left: "20%",
    // background: "rgb(247, 232, 241)",
    scrub: 1,
    repeat: Infinity,
    duration: 5,
    ease: Expo.easeInout,
},"a")
tl.to(".gole-2",{
    left: "6%",
    // background: "#D5A7B4",
    scrub: 5,
    repeat: Infinity,
    duration: 5,
    ease: Expo.easeInout
},"a")
}
timelineOne();
timelineTwo();
third();


