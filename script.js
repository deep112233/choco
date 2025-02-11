// gsap.to("element", {properties}), gsap.from()

//gsap image animation
gsap.to(".middle-container img", {
    x : 10,
    y : 10,
    duration : 3,
    repeat : -1,
    yoyo : true
})

//gsap navbar animation
gsap.from(".logo, .nav-links h1", {
    y : -35,
    opacity : 0.01,
    duration : 0.7,
    stagger : 0.3
})

const main = document.querySelector(".main")
console.log(main)
main.addEventListener("mousemove", (params)=>{
    gsap.to(".cursor", {
        x : params.x,
        y : params.y,
        duration : 0.38
    })
})