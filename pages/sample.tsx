import gsap from "gsap";
import { useEffect } from "react";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  useEffect(() => {
    const callbackTest = gsap.to(".green", {
      duration: 10,
      ease: "bounce.inOut",
      x: "90vw",
    });

    gsap.to(".yellow", {
      duration: 10,
      ease: "bounce.inOut",
      x: "80vw",
      scrollTrigger: {
        trigger: ".black",
        start: "top top",
        end: "bottom top",
        pin: true,
        // scrub: 1,
      },
    });

    callbackTest.timeScale(2);
    const timeline = gsap.timeline({
      yoyo: true,
      repeat: -1,
    });

    timeline.to(
      ".blue",
      {
        duration: 1,
        ease: "bounce.inOut",
        x: "90vw",
      },
      "+=100%"
    );

    timeline.to(".red", {
      duration: 3,
      ease: "bounce.inOut",
      x: "90vw",
    });
  }, []);

  return (
    <>
      <div className="h-screen w-full bg-white overflow-x-hidden flex gap-x-10">
        <div className="green h-[100px] w-[100px] bg-green-500 text-white text-xl flex items-center justify-center">
          Hey there
        </div>
        <div className="blue h-[100px] w-[100px] bg-blue-500 text-white text-xl flex items-center justify-center">
          Hey
        </div>
        <div className="red h-[100px] w-[100px] bg-red-500 text-white text-xl flex items-center justify-center">
          Hey
        </div>
      </div>
      <div className="h-screen black bg-black w-full overflow-x-hidden flex justify-center items-center gap-x-10">
        <div className="yellow h-[100px] w-[100px] bg-yellow-500 text-white text-xl flex items-center justify-center">
          Hey there
        </div>
      </div>
      <div className="h-screen w-full bg-white overflow-x-hidden flex gap-x-10">
        <div className="green h-[100px] w-[100px] bg-green-500 text-white text-xl flex items-center justify-center">
          Hey there
        </div>
        <div className="blue h-[100px] w-[100px] bg-blue-500 text-white text-xl flex items-center justify-center">
          Hey
        </div>
        <div className="red h-[100px] w-[100px] bg-red-500 text-white text-xl flex items-center justify-center">
          Hey
        </div>
      </div>
    </>
  );
};

export default HomePage;
