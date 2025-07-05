"use client";

import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const articleParagraphs = [
  `The emergence of memecoins has sparked significant debate, particularly regarding their implications for the scientific community. Critics often dismiss memecoins as frivolous, arguing that they undermine serious scientific endeavours. However, a closer examination reveals a more nuanced perspective, one that acknowledges the cultural and economic dynamics at play.`,
  `It is interesting to know that the origin of "meme" is scientific. Originally coined by evolutionary biologist, Richard Dawkins, in his 1976 book "The Selfish Gene". Dawkins described memes as units of cultural transmission, akin to genes in biological evolution, capable of replicating and evolving through social interactions.`,
  `His foundational concept highlights that memes — memecoins being a derivative — are not merely trivial; they represent a significant aspect of human culture and communication. A worthy mention is Dogecoin. Launched in 2013 but has transcended being just an internet sensation to influencing broader cultural narratives 11 years later. This is particularly evident in the creation of the Department of Government Efficiency (D.O.G.E), humorously named after the cryptocurrency, which Elon Musk, an open advocate for Dogecoin is set to lead.`,
  `Also, prominent figures in the cryptocurrency space have weighed in on this prevailing issue. Vitalik Buterin, co-founder of Ethereum, in his piece "What else could memecoins be?" holds a broad perspective. Rather than dismissing the entire concept of memecoins, he recognizes how important they have become to a vast majority but expresses a desire for higher-quality projects that contribute to the entire ecosystem through public good. Similarly, Changpeng Zhao (CZ), former CEO of Binance recently tweeted "I am not against memes, but meme coins are getting "a little" weird now. Let's build real applications using blockchain."`,
  `Another prominent figure, Tarun Chitra, CEO of Gauntlet, has voiced significant scepticism regarding DeSci initiatives. Chitra argues that the lack of regulatory frameworks and accountability in DeSci can jeopardize both scientific integrity and funding mechanisms. He highlights that while the philosophical premise behind DeSci is commendable — aiming for a better scientific system — many projects fall short and just ride the hype train for ulterior motives. His call for "no scams" in the DeSci space emphasises the necessity for ethical investing and clear communication within the community.`,
  `In conclusion, a shared perspective among many of these debates in the crypto and scientific communities is that memecoins, particularly through DeSci, can have a collective real-world impact. By riding on the engaging nature of memes and relatability, we can foster greater support for scientific endeavours, benefiting both scientists and science enthusiasts alike. DeSci presents an alternative to traditional research and knowledge sharing by democratizing access to scientific inquiry. Encouraging the development of projects that emphasize open access and provide innovative funding mechanisms can transform the memecoin phenomenon into a powerful tool for advancing science, the scientific community, and beyond!`,
];

export default function DecentralizedScienceBlog() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const wordCount = articleParagraphs.join(" ").split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(wordCount / 200));

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const move = (e: MouseEvent) => {
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power3.out",
      });
      gsap.to(ring, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.25,
        ease: "power3.out",
      });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".big-plus", {
        rotation: 90,
        ease: "none",
        scrollTrigger: {
          trigger: ".big-plus",
          start: "top 80%",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.utils.toArray<HTMLElement>("#article p").forEach((p) => {
        gsap.from(p, {
          autoAlpha: 0,
          y: 40,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: p,
            start: "top 80%",
          },
        });
      });

      gsap.from("#refs li", {
        autoAlpha: 0,
        x: -30,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#refs",
          start: "top 80%",
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <Head>
        <title>A Case for Decentralized Science — Blog</title>
        <meta
          name="description"
          content="Exploring how memecoins and DeSci can catalyze scientific progress."
        />
      </Head>
      <main className="bg-white text-black font-sans relative overflow-x-hidden">
        {}
        <div
          ref={ringRef}
          className="pointer-events-none fixed top-0 left-0 w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#00000033] z-[90]"
          style={{ mixBlendMode: "difference" }}
        />
        <div
          ref={dotRef}
          className="pointer-events-none fixed top-0 left-0 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black z-[91]"
          style={{ mixBlendMode: "difference" }}
        />

        {}
        <div className="px-4 lg:px-12 mx-auto max-w-[1440px] py-6 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs">
            <span className="flex items-center justify-center text-[20px]">
              Blog
            </span>
          </div>
          <div className="flex items-center gap-6 text-xs">
            {}
            {}
            {}
            {}
            {}
          </div>
        </div>

        {}
        <section className="px-4 lg:px-12 mx-auto max-w-[1440px] pt-4 grid lg:grid-cols-12 gap-8 min-h-[40vh] lg:min-h-[60vh] items-start">
          <h1
            className="col-span-12 lg:col-span-7 font-semibold leading-none text-[12vw] lg:text-[10vw]"
            style={{ fontFamily: "bagoss", lineHeight: 1 }}
          >
            a case for decentralized science
          </h1>

          {}
          <div className="hidden lg:flex col-span-1 justify-center">
            <span className="big-plus font-light select-none leading-none text-[25vw] lg:text-[10vw]">
              +
            </span>
          </div>

          <div className="col-span-12 lg:col-span-4 space-y-6 text-lg leading-relaxed pt-3 lg:pt-0">
            <p>
              DeSci uses blockchain and open collaboration to fund, share and
              accelerate research without the usual academic gatekeepers—making
              science more accessible, transparent and community-driven.
            </p>
          </div>
        </section>

        {}
        <article
          id="article"
          className="px-4 lg:px-12 max-w-3xl mx-auto space-y-8 py-4 lg:py-16"
        >
          <header className="space-y-2">
            <p className="text-sm text-gray-500">
              May 2024 · {minutes} min read
            </p>
          </header>

          {}
          <section className="space-y-6 leading-relaxed text-lg">
            {articleParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </section>

          {}
          <section className="pt-10 border-t border-gray-300 space-y-2">
            <h2
              className="text-2xl font-semibold"
              style={{ fontFamily: "bagoss" }}
            >
              References
            </h2>
            <ul id="refs" className="list-disc pl-6 space-y-1 text-base">
              <li>
                <a
                  href="https://www.youtube.com/watch?v=bJTSxRBbCQA"
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Richard Dawkins | Memes | Oxford Union
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=bJTSxRBbCQA"
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Casually Explained | Memes
                </a>
              </li>
              <li>
                <a
                  href="https://www.usnews.com/news/national-news/articles/2024-11-13/what-is-doge-elon-musk-and-vivek-ramaswamys-new-trump-agency#:~:text=The%20acronym%20%E2%80%9CDOGE%E2%80%9D%20is%20likely%20a%20nod%20to%20a%20favorite%20Musk%20meme%20and%20cryptocurrency%2C%20Dogecoin"
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The acronym "DOGE" is likely a nod to a favourite Musk meme
                  and cryptocurrency, Dogecoin
                </a>
              </li>
              <li>
                <a
                  href="https://vitalik.eth.limo/general/2024/01/11/memecoins.html"
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  What else could memecoins be? – Vitalik Buterin
                </a>
              </li>
              <li>
                <a
                  href="https://www.binance.com/en/support/announcement/binance-ceo-cz-on-meme-coins-and-the-future-of-crypto-1168788155338"
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "I am not against memes" – CZ
                </a>
              </li>
              <li>
                <a
                  href="https://www.binance.com/en/support/announcement/binance-ceo-cz-on-meme-coins-and-the-future-of-crypto-1168788155338"
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "No scam" – Tarun Chitra
                </a>
              </li>
            </ul>
          </section>

          {}
          {}
        </article>
      </main>
    </>
  );
}
