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
  `Earlier today under the rising hot weather, I had a musing and it goes thus:`,
  `"Is a unified Nigeria really unrealistic? Are there nations that are as disintegrated as Nigeria? Are there nations that were once disintegrated but found a way to sustainable unification?"`,
  `Sooner than I expected, as if by providence, I was in the midst of 4 Yoruba Gen-X men and discussion about the just concluded presidential election began. 3 Muslims, 1 Christian but all voted Bola Ahmed Tinubu (BAT). I was the only Gen-Z around and I voted Peter Obi (PO). From the conversation I was unavoidably and passively hearing, the major factors during the just concluded presidential election are along the lines of tribalism and religion.`,
  `On Tribalism:`,
  `These 4 men claimed that those who voted PO did so because they do not understand the Igbos and their subtle attempt to always dominate other tribes where ever they find them, even outside of the Igbos' geopolitical zone. Their big motivation for rooting for BAT is because he is a Yoruba man and he is capable of putting a stop to that craze. BAT being president means the Yorubas will benefit and the Igbos will not be able to duplicate Nigeria (as they have done with many commodities). They admit that they (the Yorubas) are not altogether good but they just don't trust the Igbos.`,
  `I never heard them talk about the violence and the disenfranchisement that led to the election of BAT as the new President of Nigeria but they said in the South-East, many hired hands forcefully made non-igbo citizens vote PO. They made a certain instance of an elderly man being pushed and coerced to vote PO.`,
  `One of them greeted the other in excitement of BAT being president-elect but the response was very cold. He replied "is he going to be spraying money on the streets? Everyone better buckle up". (I understand this to mean that we're not sure what he will do as president-elect but we're at least glad a Yoruba is the president-elect.)`,
  `Talks around the Lagos state governorship candidate, Gbadebo Rhodes-Vivour (GRV), came up. It happened that one of them was just finding out that his roots are traced to the Igbos. He immediately raised a cry in Yoruba language, "Igbo ni bobo yan? So, wonti debe yen naa?" (meaning, so that guy is an igbo? so, they've penetrated that deep?) At this point, I could almost touch his anger and hurt as if it were tangible.`,
  `Another affirmed that his roots are Igbo and he is anticipating how the gubernatorial election on March 11 will be terribly attacked by the Yorubas. He added that just like some people were disenfranchised, much more should be anticipated for the governorship election in Lagos. 'They come to our land (Lagos) and buy our lands, do business and don't even appreciate those who made it possible. It's like we have given them too much allowance, and now they want to rule us!' another spoke in dismay.`,
  `The table soon turned and the matters reached General Olusegun Obasanjo and how he betrayed his people, the Yorubas, by rooting for and accrediting PO. One of the men added that all the General's effort is to make sure that no president beats his record in public office and this was the same reason he fought Moshood Kashimawo Abiola (MKO) and it was because of this same reason he did Ernest Oladeinde Shonekan dirty while he was interim Head of State in 1993. One of them further added that the General wants to be known for being to one to bring PO out, finding favor in the sight of Nigerians. Another asked 'but what is his gain? He is old and out of office, what is he looking for?"`,
  `On Religion:`,
  `They claimed pastors/men of God are liars and should never be trusted. Their belly is their God and they speak in the direction of what will profit them. Also, they said Muslims don't even profit as much from the ruling power because they only fight based on ideas that contradict their faith. E.g removal of hijabs in schools. They admit that it was indeed a tight, unusual, and shaky election as PO won in places they never imagined, e.g Lagos, FCT and other major places they had high hopes for. They added that it was because of the engineering of men of God who put fear on their large members and laid curses on them that they must vote PO. They also added that their members only took their dogma and gave their numbers. Another of the 4 men quickly added "thank God for the G5 ooo, that was how we were able to pull through."`,
  `They continued discussing on how tough the election was and how much the opposition tried to pull BAT down. One of them said they really dragged it with BAT. He made mention of some photoshopped images of BAT, how his hands shook in video conferences. Why is his hand not shaking again? He asked.`,
  `The Christian amongst them said "I know all the tricks of these Christians, after all, I'm a Christian. They are the ones that come out and say I need someone to give me 1 billion". He also said that he has been taking his wife's church offerings for himself (secretly of course, maybe because it serves him better).`,
  `On Influencers/Musicians:`,
  `Folarin Falana (Falz) was the case study here. They seemed to have a consensus that his large involvement in rallying around the election, urging people to vote was all for selfish gains. They were sure it was only for their musical career. They all concluded that artists like Falz only Went in the direction of the majority because they fear for their careers/so they will not get canceled. Because if they get canceled, that is no stream on their music and if there are no streams, that means no money to flex.`,
  `Talks came around Dino Melaye and how he was also 'funded' in dollars by the Atiku group to influence and always raise a finger when he sensed foul plays.`,
  `It was a long journey and after listening to all of these quietly, I was drained. I was teased here and there but I replied no word. After some time, I regained myself and I attempted a critical resolve. I ended with a fearful and troubling question all the same. You'd agree it's complicated when you read my critical resolve:`,
  `1. Every single tribe in Nigeria (including the minority tribes like Ijaw, Ibibio, Itsekiri, Igala and 250 more) ranging from Millennials to Baby Boomers have the above biases these 4 Yoruba men have, toward themselves and other tribes. You'll agree with me that this has almost gotten us nowhere. We're all in a giant rocking chair.`,
  `2. The Baby Boomers, Gen-X and Millennials have their reasons for holding onto these beliefs. Either they were present when issues that led to these beliefs happened or they were taught to hold on to the beliefs.`,
  `3. These swampy sets of dividing beliefs are not largely spread amongst Gen-Z because they are trying as hard as they can to learn unity in diversity. They are more exposed and they are learning to see differently than the older generation they are surrounded with in their respective tribes.`,
  `The fearful and troubling thought is that what if these dividing beliefs begin to spread like wildfire amongst the Gen-Z as well? As I said, they are TRYING TO LEARN but what if the idea of Nigerianism is not yet as strong as the idea of tribalism in their hearts and minds? What if there are reservations? Should there be reservations? Should we say the older generations were best to have held onto these reservations?`,
];

export default function IntoMindBlog() {
  const wordCount = articleParagraphs.join(" ").split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(wordCount / 200));

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      gsap.to(dotRef.current, { x: e.clientX, y: e.clientY, duration: 0.1 });
      gsap.to(ringRef.current, { x: e.clientX, y: e.clientY, duration: 0.25 });
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
          scrollTrigger: { trigger: p, start: "top 80%" },
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <Head>
        <title>Into the Mind — Blog</title>
      </Head>
      <main className="bg-white text-black font-sans relative overflow-x-hidden">
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
            <span className="text-[20px]">Blog</span>
          </div>
        </div>

        {}
        <section className="px-4 lg:px-12 mx-auto max-w-[1440px] pt-4 grid lg:grid-cols-12 gap-8 min-h-[40vh] lg:min-h-[60vh] items-start">
          <h1
            className="col-span-12 lg:col-span-7 font-semibold leading-none text-[8vw] lg:text-[6vw]"
            style={{ fontFamily: "bagoss", lineHeight: 1 }}
          >
            Into the Mind of 4 Gen-X Yoruba Men
            <br />
            and a Gen-Z Observer
          </h1>
          <div className="hidden lg:flex col-span-1 justify-center">
            <span className="big-plus font-light select-none leading-none text-[25vw] lg:text-[10vw]">
              +
            </span>
          </div>
          <div className="col-span-12 lg:col-span-4 text-lg leading-relaxed pt-3 lg:pt-0">
            <p>
              Reflections on tribalism, religion and generational divides
              following Nigeria&apos;s 2023 elections.
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
          <section className="space-y-6 leading-relaxed text-lg">
            {articleParagraphs.map((p, i) =>
              i === articleParagraphs.length - 1 ? (
                <blockquote
                  key={i}
                  style={{ fontFamily: "bagoss" }}
                  className="relative overflow-hidden p-6 pl-12 italic font-medium bg-gradient-to-br from-gray-50 to-gray-200 border-l-8 border-black rounded-lg shadow-lg"
                >
                  <span className="absolute left-4 top-2 text-7xl opacity-10 leading-none select-none">
                    “
                  </span>
                  {p}
                </blockquote>
              ) : (
                <p key={i}>{p}</p>
              )
            )}
          </section>
        </article>
      </main>
    </>
  );
}
