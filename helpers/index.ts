import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollSmoother } from "gsap/dist/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export const animateProjectHeading = () => {
  const config = { strength: 1 };

  gsap.set("project__header", { xPercent: -50, x: -1 });

  gsap.to(".project__header", {
    repeat: -1,
    yoyo: true,
    x: 1,
    duration: 0.2,
    ease: "power1.inOut",
    modifiers: {
      x: gsap.utils.unitize((value) => value * config.strength, "px"),
    },
  });

  gsap.to(config, {
    strength: 100,
    ease: "none",
    scrollTrigger: {
      scrub: true,
    },
  });
};

export const handleProjectsImageScroll = () => {
  let skewSetter = gsap.quickTo("img", "skewY"),
    clamp = gsap.utils.clamp(-20, 20);
  ScrollSmoother.create({
    wrapper: "#wrapper",
    content: "#content",
    smooth: 2,
    speed: 3,
    effects: true,
    onUpdate: (self) => skewSetter(clamp(self.getVelocity() / -50)),
    onStop: () => skewSetter(0),
  });
};

export const handleSmoothScroll = () => {
  const smoother = ScrollSmoother.create({
    smooth: 1, // duration of the smoothing (1 second is default)
    effects: true, // enable parallax effects via data-speed attributes
    normalizeScroll: true, // fixes mobile browser address bar issues and overscroll
    speed: -2,
  });

  smoother.scrollTo(".project1", true);
};
