
function cursorEffect(){
    let page1Content =  document.querySelector(".page1-Content")
    let cursor = document.querySelector(".cursor")
    
    page1Content.addEventListener("mousemove", function(dets){
        // cursor.style.left = dets.x + "px"
        // cursor.style.top = dets.y + "px"
    gsap.to(cursor,{
    x:dets.x,
    y:dets.y
    })
    })
    
    page1Content.addEventListener("mouseenter",function(){
        gsap.to(cursor,{
            scale:1,
            opacity:1
        })
    })
    page1Content.addEventListener("mouseleave",function(){
        gsap.to(cursor,{
            scale:0,
            opacity:0
        })
    })
}
cursorEffect()

function cursor2Effect(){
    let page3 =  document.querySelector(".page3")
    let cursor2 = document.querySelector(".cursor2")
    
    page3.addEventListener("mousemove", function(dets){
        // cursor.style.left = dets.x + "px"
        // cursor.style.top = dets.y + "px"
    gsap.to(cursor2,{
    x:dets.x,
    y:dets.y
    })
    })
    
    page3.addEventListener("mouseenter",function(){
        gsap.to(cursor2,{
            scale:1,
            opacity:1
        })
    })
    page3.addEventListener("mouseleave",function(){
        gsap.to(cursor2,{
            scale:0,
            opacity:0
        })
    })
}
cursor2Effect()

function sliderAnimation(){
    let swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
       autoplay:{
    delay: 2500,
    disableInteraction:true,
       
        },
      });
}
 
sliderAnimation()

let tl = gsap.timeline()
tl.from(".loader h3",{
    x:40,
    opacity:0,
    duration:1,
    stagger:0.1
})

tl.to(".loader h3",{
    opacity:0,
    x:-10,
    duration:1,
    stagger:0.1
})

tl.to(".loader",{
    opacity:0
})

tl.from(".page1-Content h1 span",{
    y:100,
    opacity:0,
    stagger:0.1,
    duration:0.5,
    delay:-0.5
})

tl.to(".loader",{
    display:"none"
})

tl.from(".text-Page h1 span",{
    y:100,
    opacity:0,
    stagger:0.1,
    duration:0.5,
    delay:-0.5
})

tl.from(".page5 #end  span",{
    y:100,
    opacity:0,
    stagger:0.1,
    duration:0.5,
    delay:-0.5
})

tl.from("#page5-text",{
    y:100,
    opacity:0,
    stagger:0.1,
    duration:0.5,
    delay:-0.5
})
// tl.to(".",{
//     opacity:0,
//     x:-10,
//     duration:1,
//     stagger:0.1
// })