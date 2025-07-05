import Head from "next/head";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stripes = [
  { rotate: "-15deg", top: "20%" },
  { rotate: "-10deg", top: "45%" },
  { rotate: "-20deg", top: "70%" },
];

export default function ElementPage() {
  const stripeRefs = useRef<HTMLDivElement[]>([]);
  const heroRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin hero section
      if (heroRef.current) {
        ScrollTrigger.create({
          trigger: heroRef.current,
          start: "top top",
          end: "+=150%",
          pin: true,
          anticipatePin: 1,
          scrub: 0.1,
        });
      }

      // Stripe opposing translations
      stripeRefs.current.forEach((el, i) => {
        gsap.to(el, {
          xPercent: i % 2 === 0 ? -60 : 60,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "+=150%",
            scrub: 0.1,
          },
        });
      });

      // Heading scale & letterspacing
      if (headingRef.current) {
        gsap.to(headingRef.current, {
          scale: 1.3,
          letterSpacing: "0.05em",
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "+=150%",
            scrub: 0.1,
          },
        });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <Head>
        <title>Designer & Web Developer — Demo</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="bg-black text-white min-h-screen font-sans overflow-x-hidden">
        {/* HERO */}
        <section
          ref={heroRef}
          className="relative flex items-center justify-center min-h-screen px-6 md:px-16"
        >
          {/* Decorative stripes */}
          {stripes.map((s, idx) => (
            <div
              key={idx}
              ref={(el) => {
                if (el) stripeRefs.current[idx] = el;
              }}
              className="absolute w-[180%] h-[260px] bg-white rounded-full opacity-90 pointer-events-none z-30"
              style={{
                top: s.top,
                transform: `rotate(${s.rotate})`,
              }}
            />
          ))}

          {/* Heading */}
          <h1
            ref={headingRef}
            className="relative z-10 text-[14vw] leading-none font-bold uppercase tracking-tight"
            style={{ fontFamily: "bagoss", lineHeight: 0.9 }}
          >
            <span className="block">Designer &</span>
            <span className="block">Web&nbsp;Developer</span>
          </h1>

          {/* Nav */}
          <div className="absolute top-6 left-6 z-20 flex items-center gap-4 text-xs tracking-widest uppercase">
            <span>Thomas Bantial</span>
            <span className="opacity-60">Designer/Canada</span>
          </div>
          <button className="absolute top-6 right-6 z-20 text-xs tracking-widest uppercase">
            Menu
          </button>
        </section>

        {/* Scroll filler content */}
        <section className="min-h-screen px-6 md:px-16 py-24 space-y-10 max-w-4xl mx-auto text-lg">
          {Array.from({ length: 8 }).map((_, i) => (
            <p key={i}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              sollicitudin, magna in facilisis tempor, risus lorem pulvinar
              tortor, eget luctus libero nulla at sapien.
            </p>
          ))}
        </section>
      </main>
    </>
  );
}
