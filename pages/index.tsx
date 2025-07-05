"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollSmoother } from "gsap/dist/ScrollSmoother";
import Head from "next/head";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollSmoother);
}

const projects = [
  {
    title: "DeSci NG",
    role: "Community, Visual Identity",
    year: "2024",
    description:
      "Co-ordinates De(centralised) Science Nigeria, an innovation hub advancing decentralised science nationwide by expanding the collective knowledge bank and accelerating R&D through academia and context-fitting solutions.",
    link: "https://twitter.com/DeSci_NG",
  },
  {
    title: "Multisightapp",
    role: "Product Analytics, Branding",
    year: "2023",
    description:
      "Co-builder of Multisightapp – a performance-analytics tool for multisignature wallet teams. Secured a Safe Ecosystem grant (2022), authored a handbook on multisig wallets for Web3 projects & individuals, and continues to refine the analytics platform.",
    link: "https://multisight.app",
  },
  {
    title: "WTF Academy Africa",
    role: "Education, Web3 University",
    year: "2023",
    description:
      "Coordinates WTF Academy Africa, an open-source Web3 university onboarding Web2 talent. Grew the community to 100+ learners since Q2 2023, organised 2024 pop-up events, and partnered with The Family of Students (Nigeria's largest student community) to propel the mission forward.",
    link: "https://wtfacademy.xyz",
  },
  {
    title: "PeopleDAO",
    role: "Generalist Contributor, Administrator",
    year: "2022–2024",
    description:
      "Meta-DAO incubating public-good projects. Rose from contributor to administrative roles, earning multiple accolades including 'Rising Star' and 3× 'Contributor of the Month'. Led cross-functional teams to support and accelerate initiatives such as WAGBTC and The Lost Children of Benin City.",
    link: "https://people-dao.xyz",
  },
  {
    title: "Techsemester / Talntsapp",
    role: "Scrum Master, PM, Content Associate",
    year: "2023–2024",
    description:
      "Ed-tech startup building digital products for creators. Operated as a generalist within a lean team—serving as Scrum Master, Project Manager and Content Associate—to guide key decisions and help achieve the first 1,000 users milestone.",
    link: "https://talntsapp.com",
  },
];

const publications = [
  {
    title: "A Case for Decentralized Science",
    year: "2024",
    link: "/blog/decentralized-science",
  },
  {
    title: "Introduction to Multisignature Wallets",
    year: "2024",
    link: "https://github.com/bartosjiri/multisig-signer-incentives/tree/main/outcomes/document#introduction-to-multisignature-wallets",
  },
  {
    title:
      "A Revolutionary Future for Scientific Research through Decentralized Science",
    year: "2024",
    link: "https://themoveee.com/mosadoluwa-fasasi-envisions-a-revolutionary-future-for-scientific-research-through-decentralized-science/",
  },
];

const features = [
  {
    title: "Why the Best Mentors Today Don't Call Themselves Mentors",
    year: "2025",
    link: "https://themoveee.com/why-the-best-mentors-today-dont-call-themselves-mentors/",
  },
  {
    title: "Will Africa Become Another West?",
    year: "2025",
    link: "https://themoveee.com/will-africa-become-another-west/",
  },
  {
    title:
      "Gen-Z, Startups, and the Art of Collaboration in Modern Work Culture",
    year: "2025",
    link: "https://themoveee.com/gen-z-startups-and-the-art-of-collaboration-in-modern-work-culture/",
  },

  {
    title:
      "The Work Culture and the New Breed: What the Old Wineskin Means for the New Wine",
    year: "2024",
    link: "https://themoveee.com/the-work-culture-and-the-new-breed-what-the-old-wineskin-means-for-the-new-wine/",
  },
];

const MosaPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showLoader, setShowLoader] = useState(true);
  const loaderRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLUListElement>(null);
  const featuresTitleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-line", {
        yPercent: 100,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.12,
      });

      gsap.from(listRef.current?.children || [], {
        autoAlpha: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: listRef.current,
          start: "top 80%",
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!featuresRef.current) return;
      gsap.from(featuresRef.current.children || [], {
        autoAlpha: 0,
        x: -120,
        skewX: 10,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 80%",
          toggleActions: "restart none restart none",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!featuresTitleRef.current) return;
    const letters =
      featuresTitleRef.current.querySelectorAll<HTMLElement>(".feature-letter");
    gsap.from(letters, {
      yPercent: 100,
      duration: 1.2,
      ease: "power4.out",
      stagger: 0.08,
      scrollTrigger: {
        trigger: featuresTitleRef.current,
        start: "top 80%",
      },
    });
  }, []);

  useEffect(() => {
    const loader = loaderRef.current;
    const progressText = progressRef.current;
    if (!loader || !progressText || !barRef.current) return;

    document.documentElement.style.overflow = "hidden";

    const counter = { val: 0 };
    const stripes = loader.querySelectorAll<HTMLSpanElement>(".loader-stripe");

    gsap.set(stripes, { yPercent: 100, opacity: 0.85 });

    gsap.to(stripes, {
      yPercent: 0,
      stagger: 0.1,
      duration: 1.2,
      ease: "expo.out",
    });

    gsap.to(counter, {
      val: 100,
      duration: 5,
      ease: "none",
      onUpdate: () => {
        progressText.textContent = `${Math.round(counter.val)}%`;
      },
      onComplete: () => {
        gsap.to(stripes, {
          yPercent: 100,
          duration: 0.8,
          ease: "expo.in",
          onComplete: () => {
            gsap.to(loader, {
              autoAlpha: 0,
              duration: 0.6,
              ease: "power1.out",
              onComplete: () => {
                setShowLoader(false);
                document.documentElement.style.overflow = "auto";
              },
            });
          },
        });
      },
    });

    gsap.to(barRef.current, {
      scaleX: 1,
      duration: 5,
      ease: "none",
    });

    gsap.to(progressText, {
      scale: 1.1,
      yoyo: true,
      repeat: -1,
      duration: 0.6,
      ease: "power1.inOut",
    });

    gsap.to(barRef.current, {
      yPercent: -30,
      yoyo: true,
      repeat: -1,
      duration: 0.5,
      ease: "sine.inOut",
    });
  }, []);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1,
      effects: true,
    });

    ScrollTrigger.refresh();

    return () => {
      if (smoother) smoother.kill();

      const wrapperEl = document.getElementById("smooth-wrapper");
      const contentEl = document.getElementById("smooth-content");
      wrapperEl?.removeAttribute("style");
      contentEl?.removeAttribute("style");
      document.body.style.removeProperty("overflow");
      document.documentElement.style.removeProperty("overflow");
    };
  }, []);

  return (
    <>
      <Head>
        <title>Mosadoluwa Fasasi — Portfolio</title>
      </Head>

      {}
      {showLoader && (
        <div
          ref={loaderRef}
          className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-white text-black select-none overflow-hidden"
        >
          {}
          <div className="absolute inset-0 flex">
            {Array.from({ length: 6 }).map((_, i) => (
              <span
                key={i}
                className="loader-stripe flex-1 bg-[#f0f0f0] opacity-0"
              ></span>
            ))}
          </div>
          <span
            ref={progressRef}
            className="text-5xl font-semibold relative z-10"
          >
            0%
          </span>
          {}
          <div className="w-3/4 h-2 bg-gray-200 mt-8 overflow-hidden rounded-full">
            <div
              ref={barRef}
              className="h-full bg-black transform scale-x-0 origin-left"
            ></div>
          </div>
        </div>
      )}

      {}
      <div ref={cursorRef} className="cursor-dot" />

      <div id="smooth-wrapper">
        <main id="smooth-content" className="text-black bg-white font-sans">
          {}
          <section
            ref={heroRef}
            className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center overflow-hidden"
          >
            {}
            <Link
              href="/media"
              className="absolute top-6 right-6 text-black group flex flex-col items-end"
            >
              <span
                className="text-3xl md:text-4xl font-semibold tracking-wide relative pr-10"
                style={{ fontFamily: "bagoss" }}
              >
                media
                {}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  className="w-8 h-8 absolute -right-0 top-1 rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14m-7-7 7 7-7 7"
                  />
                </svg>
              </span>
              <span className="block w-full h-0.5 bg-black mt-1 transition-opacity group-hover:opacity-60" />
            </Link>
            {}
            <div className="absolute inset-0 pointer-events-none grid grid-cols-12">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="border-r border-gray-200/60"></div>
              ))}
            </div>

            <p className="hero-line z-10 text-sm tracking-widest mb-6">
              hello there — i'm
            </p>
            <h1
              className="hero-line z-10 leading-none font-semibold text-[16vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw]"
              style={{ fontFamily: "bagoss" }}
            >
              <span className="block md:inline">Mosadoluwa</span>
              <span className="block md:inline"> Fasasi</span>
            </h1>
            <p className="hero-line z-10 mt-8 text-base md:text-lg max-w-2xl">
              An agile builder hopping across digital and physical worlds.
              Currently creating impactful ventures & experiences.
            </p>
          </section>

          {}
          <section className="px-6 md:px-24 mx-auto max-w-[1440px] py-20 md:py-32">
            <h2 className="text-3xl md:text-4xl font-semibold mb-16">
              ✺ adventures
            </h2>
            <div ref={listRef} className="divide-y divide-gray-300/70">
              {projects.map((p, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div key={p.title} className="py-6">
                    <button
                      onClick={() =>
                        setOpenIndex((prev) => (prev === idx ? null : idx))
                      }
                      className="w-full flex items-center justify-between focus:outline-none text-left"
                    >
                      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                        <span className="text-xl md:text-2xl font-medium">
                          {p.title}
                        </span>
                        <span className="text-sm text-gray-500">{p.role}</span>
                      </div>
                      <span className="text-sm uppercase tracking-widest text-gray-400">
                        {isOpen ? "-" : "+"} {p.year}
                      </span>
                    </button>
                    {}
                    <div
                      className="grid overflow-hidden transition-all duration-500 text-sm md:text-base mt-4 px-1 md:px-4"
                      style={{
                        gridTemplateRows: isOpen ? "1fr" : "0fr",
                      }}
                    >
                      <div className="min-h-0">
                        <p className="mb-3 text-gray-700">{p.description}</p>
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noreferrer"
                          className="underline text-blue-600"
                        >
                          Visit project ↗
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {}
          <section className="px-6 md:px-24 mx-auto max-w-[1440px] py-16 md:py-24 bg-gray-50 text-black">
            <figure className="text-center mx-auto max-w-3xl px-4">
              <blockquote className="italic font-semibold text-xl md:text-2xl leading-snug text-gray-700">
                "if you feel stuck & you don't know where to go, what to do &
                who to become, create a beautiful list of where you don't want
                to go, what you don't want to do & who you don't want to become.
                make the list really clear because that right there is a
                pointer. godspeed, my friend!"
              </blockquote>
              <figcaption className="mt-3 text-sm tracking-widest text-gray-500">
                — mosa
              </figcaption>
            </figure>
          </section>

          {}
          <section className="px-6 md:px-24 mx-auto max-w-[1440px] py-24 md:py-32 grid md:grid-cols-12 gap-14">
            <h2 className="md:col-span-4 text-3xl md:text-4xl font-semibold">
              ✺ about&nbsp;me
            </h2>
            <div className="md:col-span-8 text-base md:text-lg space-y-6">
              <p>
                I approach all things product & design with a blend of play and
                minimalism—navigating challenges and delivering functional yet
                delightful solutions. My work spans research collectives,
                fintech dashboards and open-source education.
              </p>
              <p>
                Beyond building, I write, mentor and speak about the
                intersection of decentralised tech and human creativity.
              </p>
              <p className="font-medium">Lagos, Nigeria</p>
            </div>
          </section>

          {}
          <section className="px-6 md:px-24 mx-auto max-w-[1440px] py-24 md:py-32 bg-gray-50 text-black">
            <h2 className="text-3xl md:text-4xl font-semibold mb-16">
              ✺ publications
            </h2>

            <ul className="space-y-6">
              {publications.map((pub) => (
                <li
                  key={pub.title}
                  className="flex items-center justify-between text-base md:text-lg"
                >
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline flex-1"
                  >
                    {pub.title}
                  </a>
                  <span className="ml-4 shrink-0 text-sm text-gray-500">
                    {pub.year}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-10 text-center">
              <Link
                href="/media"
                className="inline-flex items-center gap-2 px-6 py-3 border border-black rounded-full hover:bg-black hover:text-white transition-colors duration-300"
              >
                view all ↗
              </Link>
            </div>
          </section>

          {}
          <section className="relative overflow-hidden bg-[#000] text-white py-28 md:py-40">
            {}
            <h2
              ref={featuresTitleRef}
              className="pointer-events-none absolute inset-0 flex items-center justify-center font-semibold leading-none select-none opacity-10"
              style={{ fontFamily: "bagoss" }}
            >
              {Array.from("features").map((ch, idx) => (
                <span
                  key={idx}
                  className="feature-letter inline-block text-[28vw] md:text-[18vw] lg:text-[14vw]"
                >
                  {ch}
                </span>
              ))}
            </h2>

            {}
            <div className="relative z-10 px-6 md:px-24 max-w-6xl mx-auto">
              <p className="text-sm md:text-base tracking-widest mb-10 uppercase text-gray-400">
                Features on Moveee Magazine
              </p>
              <ul ref={featuresRef} className="space-y-10 md:space-y-14">
                {features.map((feat) => (
                  <li
                    key={feat.title}
                    className="feature-item group cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-10 py-4"
                  >
                    <a
                      href={feat.link}
                      target="_blank"
                      rel="noreferrer"
                      className="relative flex-1 text-2xl md:text-3xl font-medium flex items-center"
                    >
                      <span className="transition-transform duration-500 group-hover:-translate-y-1">
                        {feat.title}
                      </span>
                      <span className="ml-3 transition-transform duration-500 group-hover:translate-x-1">
                        ↗
                      </span>
                      {}
                      <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-white transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
                    </a>
                    <span className="shrink-0 text-base md:text-lg text-gray-400 group-hover:text-white transition-colors duration-300">
                      {feat.year}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {}
          <section className="bg-white border-t border-gray-300/70 py-24 md:py-32 px-6 md:px-24 mx-auto max-w-[1440px] text-center">
            <h2 className="text-3xl sm:text-4xl md:text-6xl leading-tight">
              let's create
              <br className="hidden md:block" /> great things
              <span className="font-normal"> together</span>
            </h2>
            <a
              href="mailto:mosadoluwafasasi@gmail.com"
              className="mt-12 inline-block text-lg md:text-xl underline hover:no-underline"
            >
              mosadoluwafasasi@gmail.com
            </a>

            {}
            <div className="flex justify-center gap-6 text-sm tracking-wide mt-10">
              {[
                { label: "github", href: "https://github.com/Mosamorphing" },
                {
                  label: "linkedin",
                  href: "https://www.linkedin.com/in/mosadoluwa-fasasi-4008b81a9/",
                },
                { label: "x", href: "https://x.com/mofasasi" },
                {
                  label: "instagram",
                  href: "https://instagram.com/mofasasi",
                },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative inline-block px-4 py-1 rounded-full border border-gray-500 text-gray-700 overflow-hidden transition-transform duration-300 ease-out transform hover:-translate-y-1 before:content-[''] before:absolute before:inset-0 before:bg-gray-900 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:text-white hover:before:scale-x-100"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="relative z-10 capitalize">{link.label}</span>
                </a>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default MosaPage;
