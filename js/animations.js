gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline({ defaults: {ease: "power4.inOut", duration : 0.5}});

if(window.innerWidth>=800){
    tl.from( '#rect' , { opacity : 0, duration: 2})
    .from( '#watermark', { x : "-100%", duration: 2}, "-=2");
    // .from( '.socialIcons', {opacity: 0, duration: 2, stagger: 0.2, y: "100px"}, "-=3");
}else{
    tl.from( '#rect' , { opacity : 0, duration: 2})
    .from( '#watermark', { x : "100%", duration: 2}, "-=2");
    // .from( '.socialIcons', {opacity: 0, duration: 2, stagger: 0.2, x: "-200px"}, "-=3");
}

// gsap.from( ".scrollAnim", {
//     scrollTrigger: {
//         trigger: '.scrollAnim',
//         start: "top center"
//     },
//     y: 100,
//     opacity: 0,
//     ease: "none",
//     duration: 0.5
// } );

// gsap.from( "#aboutSelf", {
//     scrollTrigger:{
//         trigger: '#aboutSelf',
//         start: "top 80%"
//     },
//     x: -100,
//     opacity: 0,
//     ease: "none",
//     duration: 0.5
// } );

// gsap.from( "#aboutCom", {
//     scrollTrigger:{
//         trigger: '#aboutCom',
//         start: "top 80%"
//     },
//     x: 100,
//     opacity: 0,
//     ease: "none",
//     duration: 0.5
// } );

// gsap.from( "#forth-part", {
//     scrollTrigger: {
//         trigger: '#forth-part',
//         start: "top center"
//     },
//     y: 100,
//     opacity: 0,
//     ease: "none",
//     duration: 0.5
// } );