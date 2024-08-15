gsap.registerPlugin(ScrollTrigger);

gsap.to(".language-html", {
    scrollTrigger: {
        trigger: ".language",
        start: "top 70%",
        end: "center center",
        scrub: 1,
        // markers: true
    },
    y: introTextY,
    duration: 1
});