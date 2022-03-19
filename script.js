let timeline = gsap.timeline({
  duration: 2,
  scrollTrigger: {
    trigger: "#list_assignments",
    start: "20%",
    endTrigger: "#highlight_h2",
    end: "top top",
    scrub: true,
    markers: false,
  },
});

timeline.from("#highlight_h2", { opacity: 0, duration: 1 });

timeline.to("#highlight_h2", {
  opacity: 1,
  ease: Power1.easeOut,
});

let timeline2 = gsap.timeline({
  duration: 1.5,
  scrollTrigger: {
    trigger: "#header_section",
    start: "50%",
    endTrigger: "#about",
    end: "50%",
    markers: false,
  },
});

timeline2.from("#about_hr", { width: "0%", opacity: 0 });
timeline2.to("#about_hr", { width: "70%", opacity: 1, ease: Power1.easeOut });

let timeline3 = gsap.timeline({
  duration: 1,
  scrollTrigger: {
    trigger: "#header_section",
    start: "top top",
    endTrigger: "#introduction",
    end: "50%",
    markers: false,
  },
});

timeline3.from("#intro_hr", { width: "0%", opacity: 0 });
timeline3.to("#intro_hr", { width: "70%", opacity: 1, ease: Power1.easeOut });
