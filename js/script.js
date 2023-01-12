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
gsap.fromTo("#hero", {autoAlpha: 0}, {autoAlpha: 1, duration: 2});

gsap.fromTo("#hero", 
{autoAlpha: 1} ,{
  scrollTrigger: {
    trigger: "#hero",
    start: "bottom 90%",
    end: "bottom center",
    pin: true,
    toggleActions: "restart pause reverse pause",
    // markers: true,
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

// containers.forEach((container) => {
//   gsap.to(container, {
//     autoAlpha: 0,
//     ease: "power1.in",
//     duration: 2,
//     scrollTrigger: {
//       trigger: container,
//       start: "bottom 95%",
//       end: "bottom 20%",
//       //pin: true,
//       scrub: true,
//       toggleActions: "restart pause reverse pause",
//     }
//   });
// });

console.clear();

gsap.utils.toArray(".card").forEach(function(card) {
  gsap.set(card, {
    transformStyle: "preserve-3d",
    transformPerspective: 1000
  });
  const q = gsap.utils.selector(card);
  const front = q(".cardFront");
  const back = q(".cardBack");
  
  gsap.set(back, { rotationY:-180 });
  
  const tl = gsap.timeline({ paused: true })
    .to(front, { duration: 1, rotationY: 180 })
    .to(back, { duration: 1, rotationY: 0 }, 0)
    .to(card, { z: 50 }, 0)
    .to(card, { z: 0 }, 0.5);
  card.addEventListener("click", () => {
    if (tl.reversed()) {
      tl.play();
    } else {
      tl.reverse();
    }
  });
  // card.addEventListener("mouseleave", function() {
  //   tl.reverse();
  // });
});