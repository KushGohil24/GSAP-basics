var tl = gsap.timeline();
tl.from("nav h2", {
    opacity: 0,
    y: -20,
    duration: 1,
    delay: 0.5
})
tl.from("nav ul li",
{
    opacity: 0,
    y: -20,
    duration: 1,
    stagger: -0.3 //used to desplay li one by one
})