$(document).ready(function () {
  $("body").ripples({
    resolution: 512,
    dropRadius: 20,
    perturbance: 0.02,
  });
});

// Automatic drops
setInterval(function () {
  var $el = $("body");
  var x = Math.random() * $el.outerWidth();
  var y = Math.random() * $el.outerHeight();
  var dropRadius = 20;
  var strength = 0.04 + Math.random() * 0.04;

  $el.ripples("drop", x, y, dropRadius, strength);
}, 3000);



//Animations
gsap.registerPlugin(ScrollTrigger);

gsap.fromTo("#hero", {autoAlpha: 0}, {autoAlpha: 1, duration: 2});

gsap.fromTo("#hero", 
{autoAlpha: 1} ,{
  scrollTrigger: {
    trigger: "#hero",
    start: "bottom 95%",
    end: "bottom center",
    pin: true,
    toggleActions: "restart pause reverse pause",
    markers: true,
    scrub: true
  },
  autoAlpha: 0,
  duration: 2,
});

const containers = gsap.utils.toArray(".container");
containers.forEach((container) => {
  gsap.to(container, {
    autoAlpha: 1,
    ease: "power1.in",
    scrollTrigger: {
      trigger: container,
      // start: "top 80%",
      // end: "+=200",
      pin: true,
      scrub: true,
      toggleActions: "restart pause reverse pause",
    }
  });
});

containers.forEach((container) => {
  gsap.to(container, {
    autoAlpha: 0,
    ease: "power1.in",
    duration: 2,
    scrollTrigger: {
      trigger: container,
      start: "bottom 95%",
      end: "bottom 20%",
      //pin: true,
      scrub: true,
      toggleActions: "restart pause reverse pause",
    }
  });
});

