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



}
third();