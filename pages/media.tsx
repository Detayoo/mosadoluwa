"use client";

import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Power3 } from "gsap";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Post {
  title: string;
  category: string;
  link: string;
  thumb?: string;
  desc?: string;
}

const mediaPosts: Post[] = [
  {
    title: "A Case for Decentralized Science",
    category: "Publications",
    link: "/blog/decentralized-science",
    thumb: "/images/media/desci.png",
    desc: "The emergence of memecoins has sparked significant debate, particularly regarding their implications for the scientific community. Critics often dismiss memecoins as frivolous […]",
  },
  {
    title: "Introduction to Multisignature Wallets",
    category: "Publications",
    link: "https://github.com/bartosjiri/multisig-signer-incentives/tree/main/outcomes/document#introduction-to-multisignature-wallets",
    thumb: "/images/media/multi.png",
    desc: "Multisignature wallets are a popular tool among various web3 projects for the management of shared funds and assets, providing enhanced decentralization, security, […]",
  },
  {
    title:
      "A Revolutionary Future for Scientific Research through Decentralized Science",
    category: "Features",
    link: "https://themoveee.com/mosadoluwa-fasasi-envisions-a-revolutionary-future-for-scientific-research-through-decentralized-science/",
    thumb: "/images/media/moveee1.png",
    desc: "Mosadoluwa Fasasi, a key figure in the DeSci movement and founder of DeSci NG, shares insights into the essence of DeSci, its potential to revolutionize scientific inquiry, and its transformative impact on global knowledge sharing.",
  },
  {
    title: "Artist Talk: Q&A with Daniel Sheldon, For The People NFT",
    category: "Features",
    link: "https://peopledao.mirror.xyz/z8baQHZII3KLgJwNBN8bAq3gNdFPc9c2D-H4UwWKQgk",
    thumb: "/images/media/artist.jpeg",
    desc: "You can draw parallels between web3 and the American Revolution. Both reject old power structures. Both were a reaction to a deeply felt unfairness and a yearning […]",
  },
  {
    title: "DeSci Rising (Ep 8) ft. DeSci Nigeria",
    category: "Speakings",
    link: "https://x.com/i/spaces/1lPJqMRLzMnJb",
    thumb: "/images/media/desci-rising.jpeg",
    desc: "Mosadoluwa Fasasi sat with Jelani Clarke, co-founder of DeSci World, to discuss the DeSci movement in Nigeria, the origin story, the impact so far, and what the future holds.",
  },
  {
    title: "AskMeAnything Session with Bitget Wallet",
    category: "Speakings",
    link: "https://x.com/BitgetWallet/status/1767430845487595903?s=20",
    thumb: "/images/media/bitget.jpeg",
    desc: "From Memes to Millions: Riding the Hottest Crypto Trends in 2024. Memecoins have been all the rage, but can you really become a millionaire from it? ",
  },
  {
    title:
      "A Map made for the Dark: 6 Curated Patterns for those Navigating the Unknwon",
    category: "Publications",
    link: "https://selar.com/odp1f2",
    thumb: "/images/media/squareCover.png",
    desc: "There's a chance you're navigating an arc in your story where you wish someone had just handed you a manual. Guidance helps, but the truth is: […]",
  },
  {
    title: "From The Morphing—500",
    category: "Speakings",
    link: "https://open.spotify.com/show/3m8buR1Sm29ydeEIfa3Avt?si=2be26911d10447b5",
    thumb: "/images/media/morphing500.png",
    desc: "From The Morphing—500 with Mosadoluwa Fasasi brings you curated insights for life and enterprise. Join impactful conversations that shape your journey and inspire you to achieve your best.",
  },
  {
    title: "Breaking Barriers in Education",
    category: "Speakings",
    link: "https://www.linkedin.com/posts/mosadoluwa-fasasi-4008b81a9_if-you-innovate-long-enough-its-only-a-activity-7285915623857999875-sPXl?utm_source=share&utm_medium=member_desktop",
    thumb: "/images/media/tr2.png",
    desc: "Mosadoluwa Fasasi joined ThriveRise Africa to discuss ways to reshape education and the research culture in Nigeria through the latest advancement in technology.",
  },
  {
    title:
      "On knowing the influences that shape your life and being true to yourself.",
    category: "Blog",
    link: "/blog/on-influences",
    thumb: "/images/media/influence.webp",
    desc: "To accurately apply a person's judgment, point of view or \"authoritative advice\" on an issue to your life, you've got to know them in their entirety […]",
  },
  {
    title: "The Work Culture and the New Breed",
    category: "Publications",
    link: "https://themoveee.com/gen-z-startups-and-the-art-of-collaboration-in-modern-work-culture/",
    thumb: "/images/media/work.webp",
    desc: "We have enough gaps in our existence already. Things only worsen when we fail to understand how we can synchronise our […]",
  },
  {
    title: "Why the Best Mentors Today Don't Call Themselves Mentors",
    category: "Publications",
    link: "https://themoveee.com/why-the-best-mentors-today-dont-call-themselves-mentors/",
    thumb: "/images/media/mentors.jpg",
    desc: "Mosadoluwa Fasasi explores the cultural shift around mentorship, how it has been evolving, and what it means in this age of infinite knowledge and […]",
  },
  {
    title: "PeopleDAO: The Nigerian community Using NFTs",
    category: "Publications",
    link: "https://themoveee.com/peopledao-the-nigerian-community-implementing-nfts-in-tackling-human-trafficking/",
    thumb: "/images/media/peopledao.jpeg",
    desc: "The community at PeopleDAO is an example of how technology can aid the fundraising process. It's not a solution […]",
  },
  {
    title: "Into the Mind of 4 Gen-X Yoruba Men and a Gen-Z observer",
    category: "Blog",
    link: "/blog/into-the-mind",
    thumb: "/images/media/into.webp",
    desc: "The fearful and troubling thought is that what if these dividing beliefs begin to spread like wildfire amongst the Gen-Z as well? As I […]",
  },
  {
    title: "Gen-Z, Startups, and the Art of Collaboration",
    category: "Publications",
    link: "https://themoveee.com/the-work-culture-and-the-new-breed-what-the-old-wineskin-means-for-the-new-wine/",
    thumb: "/images/media/genz.webp",
    desc: "One of the reasons why it appears that Gen-Zs lack the ability to collaborate with traditional institutions is mistrust.[…]",
  },
  {
    title: "Will Africa Become Another West?",
    category: "Publications",
    link: "https://themoveee.com/africa-will-become-another-west/",
    thumb: "/images/media/placeholder.webp",
    desc: "More than being a part of the global village, Africa is a hybrid continent. This is not just because it has 54 countries and thousands of ethnic groups,[…]",
  },
  {
    title: "Independence, Remixed: For The People 1/1s",
    category: "Features",
    link: "https://peopledao.mirror.xyz/lqEBxnYUKSa3bSV2UpaXlEbb3TBv5iLdgmIjMDt3XBU",
    thumb: "/images/media/independence.png",
    desc: "Sheldon's contribution to the For The People Project departs from the conventional. While Trumbull aimed to immortalize the solemnity of political discourse, […]",
  },
  {
    title: "AI and Creative Writers: The fate of Global Creatives",
    category: "Speakings",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7033530236898029568/",
    thumb: "/images/media/writers.jpeg",
    desc: "In this workshop, Mosadoluwa Fasasi discussed the big AI topic and shared his perspectives on whether or not AI will take over the jobs of creative writers, […]",
  },
];

export default function MediaPage() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const noiseRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<string>("all");
  const cursorRef = useRef<HTMLDivElement>(null);
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  useEffect(() => {
    if (!cardsRef.current) return;
    gsap.from(cardsRef.current.children || [], {
      y: 60,
      duration: 1,
      ease: "power3.out",
      stagger: 0.15,
      immediateRender: false,
      scrollTrigger: {
        trigger: cardsRef.current,
        start: "top 80%",
        toggleActions: "play none play none",
      },
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
    if (!noiseRef.current) return;
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = 128;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;
    const imgData = ctx.createImageData(128, 128);
    const buffer = new Uint32Array(imgData.data.buffer);
    for (let i = 0; i < buffer.length; i++) {
      const gray = (Math.random() * 255) | 0;
      buffer[i] = (0x22 << 24) | (gray << 16) | (gray << 8) | gray; // alpha 0x22 ~ 0.13
    }
    ctx.putImageData(imgData, 0, 0);
    const url = canvas.toDataURL();
    noiseRef.current.style.backgroundImage = `url(${url})`;
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && ScrollTrigger) {
      ScrollTrigger.refresh();
      if (cardsRef.current) {
        gsap.set(cardsRef.current.children || [], { autoAlpha: 1 });
      }
    }
  }, []);

  return (
    <>
      <Head>
        <title>Media — Mosadoluwa Fasasi</title>
      </Head>

      {}
      <section
        className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black text-white"
        style={{
          backgroundImage: "url('/images/hero.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

        {}
        <div className="relative z-10 w-full max-w-5xl mx-auto rounded-3xl border border-white/20 bg-white/5 p-12 md:p-20 text-center">
          <p className="text-lg md:text-xl mb-4 opacity-80 tracking-widest">
            stories · drops · press · experiences
          </p>
          <h1
            className="text-5xl md:text-7xl font-semibold leading-none mb-6"
            style={{ fontFamily: "bagoss" }}
          >
            ideas in bloom
          </h1>
          <p className="max-w-xl mx-auto text-sm md:text-base opacity-80">
            A living archive of conversations, coverage and collaborations
            shaping tomorrow's creative frontier.
          </p>
        </div>

        {}
        <Link
          href="/" 
          className="absolute top-6 left-6 text-white group flex flex-col items-start"
        >
          <span
            className="text-3xl md:text-4xl font-semibold tracking-wide relative pl-10"
            style={{ fontFamily: "bagoss" }}
          >
            {}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.2"
              className="w-8 h-8 absolute -left-0 top-1 rotate-320 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 12H5m6 7-6-7 6-7"
              />
            </svg>
            back
          </span>
          <span className="block w-full h-0.5 bg-white mt-1 transition-opacity group-hover:opacity-60" />
        </Link>

        {}
        <div
          ref={cursorRef}
          className="pointer-events-none fixed top-0 left-0 z-50 w-3 h-3 rounded-full bg-white mix-blend-difference"
        />
      </section>

      <div className="relative bg-white">
        <div
          ref={noiseRef}
          className="pointer-events-none absolute inset-0 z-0 bg-repeat opacity-80 mix-blend-multiply"
          style={{ backgroundSize: "128px 128px" }}
        />
        <div className="mx-auto max-w-[1440px]">
          <main className="relative text-black px-6 md:px-24 pb-32 min-h-screen">
            {}

            {}
            <h1
              className="text-5xl md:text-7xl font-semibold text-center pt-20"
              style={{ fontFamily: "bagoss" }}
            >
              media
            </h1>

            {}
            {}

            {}
            <div
              ref={cardsRef}
              className="relative z-10 mt-20 space-y-24 max-w-6xl mx-auto"
            >
              {mediaPosts
                .filter((p) => filter === "all" || p.category === filter)
                .map((post, idx) => {
                  const isOpen = openIdx === idx;
                  return (
                    <div
                      key={post.title}
                      className="border-b border-black/20 overflow-hidden"
                    >
                      {}
                      <button
                        onClick={() =>
                          setOpenIdx((prev) => (prev === idx ? null : idx))
                        }
                        className="w-full flex items-center justify-between py-2 md:py-3 group"
                      >
                        <div className="flex items-center">
                          <span
                            className="text-lg md:text-2xl text-left"
                            style={{ fontFamily: "bagoss" }}
                          >
                            {post.title}
                          </span>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          className={`w-9 h-9 transform transition-transform duration-300 ${
                            isOpen ? "rotate-45" : "rotate-0"
                          }`}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 12h14m-7-7 7 7-7 7"
                          />
                        </svg>
                      </button>

                      {}
                      <div
                        className={`transition-all duration-500 overflow-hidden ${
                          isOpen ? "max-h-[800px]" : "max-h-0"
                        }`}
                      >
                        <div className="py-8 flex flex-col md:flex-row gap-10">
                          {}
                          {post.link.startsWith("http") ? (
                            <a
                              href={post.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group w-full md:w-1/3 aspect-[4/5] bg-gray-100 overflow-hidden"
                            >
                              <img
                                src={post.thumb || "/images/hero.webp"}
                                alt={post.title}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                            </a>
                          ) : (
                            <Link
                              href={post.link}
                              className="group w-full md:w-1/3 aspect-[4/5] bg-gray-100 overflow-hidden"
                            >
                              <img
                                src={post.thumb || "/images/hero.webp"}
                                alt={post.title}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                            </Link>
                          )}

                          <div className="flex-1 flex flex-col justify-between">
                            <p
                              className="text-base leading-relaxed"
                              style={{ fontFamily: "bagoss" }}
                            >
                              {post.desc ||
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                            </p>
                            {}
                            {post.link &&
                              (post.link.startsWith("http") ? (
                                <a
                                  href={post.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="mt-6 inline-flex items-center gap-2 text-sm underline"
                                >
                                  visit ↗
                                </a>
                              ) : (
                                <Link
                                  href={post.link}
                                  className="mt-6 inline-flex items-center gap-2 text-sm underline"
                                >
                                  visit ↗
                                </Link>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
