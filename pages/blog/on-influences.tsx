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
  `I remember how I'd just become more active on Twitter (especially design twitter) in 2018–2019 and how there were conversations around being a generalist vs specialist. It was a big conversation that was happening every 2 market days and I remember how some of the top guys spoke in favour of being a specialist; "pick one thing and get so good at it."`,
  `I woke up this morning thinking, "man, thank God I didn't listen". I don't "actively" design anymore but it's 2024 and I've seen folks who were big on being a "specialist" say otherwise today. They want to pick up a skill that compliments what they already do, and if they get good enough at it to offer it as another standalone skill, why not?`,
  `Here's the point I'm trying to make;`,
  `You've got to pay very close attention to yourself. Assess who you are, where you're coming from and where you hope to be. Figure out what takes YOU there. If you can't figure it out, at least count the cost. No matter who you look at, regardless of how similar your journey looks or how well you think you know them, you are the only person that you truly know.`,
  `You know your history more than anybody else, your struggles, your fears, your psyche. You may not know why you think the way you do, but you're the only person that has all the pointers to the why, in detail.`,
  `When you aspire to be like this person or that person you truly don't know what makes them, them. All you have is a persona. You've built an idea of them in your head based on what they post, say, or show. That's not them, or better put, that's not all of them.`,
  `To accurately apply a person's judgment, point of view or "authoritative advice" on an issue to your life, you've got to know them in their entirety, because everybody speaks contextually. But we're mostly blinded from the context people speak from. We don't know people in their entirety, even married people agree to this. We only know pieces and parts of the people around us/influences that shape us. But we make decisions based on their judgments regardless, because we look similar, in some type of way. And I get it. We all need direction, and that's okay.`,
  `We make decisions every day, big or small, and they all shape our lives in every way, big or small. However, there are 2 things I recommend that you consider when making decisions based on an external judgment.`,
  `First recommendation: You must own every decision you're about to make. Owning it means that if it doesn't go as planned or you do not see the same results as you'd hoped you'd see, compared to where you got the idea/decision, you're going to take full responsibility for it. "yes, I heard it from this person or that person, but I TOOK THE DECISION". When things go sideways or you see no result, you're able to live with yourself. I think this is why we've come to hate motivational speakers and tag them liars. Also, it helps your heart in a lot of ways I don't want to go into right now.`,
  `But for context, I had a similar experience about a year ago and while I was very convinced that taking the decision wasn't best for me at the moment, I listened to this external "advice" and yup, things went sideways, and I lost something valuable in the process. I was in pain and angered, and almost couldn't live with myself. Until I started to own it.`,
  `"You could have refused, but you didn't. You were sure that it wasn't the best judgment but you went with it anyway. No matter how much it looks like the "adviser" made you do it, you did it yourself." I told myself that. It was a difficult conversation with myself, but it made me better. I learnt from it and was able to move forward.`,
  `Second recommendation: "To thyself be true"`,
  `You've got to pay very very close attention to yourself. You've got to know yourself; where you're coming from, where you are, and where you hope to be. You may have heard that several times but I'll add to that; in the process of knowing yourself, you've got to be honest with whatever you find, good or not so good.`,
  `You've got to identify your leverages. The ones you have and the ones you do not have. If daddy is a reckless drunk and it affects the household income, that's part of where you're coming from. You've got to be honest with that. If mommy does all the hustling and manages to send you to a good school (a type of leverage), this is also part of where you're coming from, be honest about that. If you're the "Ada" and you had to grow up fast to help the household, you've got to be honest with that. Leave no factor out of this. Turn over every stone. The fine and the ugly ones.`,
  `Plus, you've got to be honest about the mindsets you've built due to your peculiar background. If you're from a high-income background, you know summer vacations outside of the country were no issue for you. There are some risks you can take on a whim. If you're not from such household, you know you have to do calculations and plot a graph or two, and probably answer a family meeting on how it looks like you've suddenly gone mad.`,
  `Again, I cannot say this enough; in the process of finding and knowing yourself, with the circumstances that make you you, you've got to be honest with yourself and the things you find.`,
  `Recently, I found a hardcopy bible I owned in 2021 and at the back of it, I wrote 2 rules that guided my life at the time. The 2nd rule reads "Ask yourself the hard questions (to provocation)".`,
  `When people ask themselves the hard questions, they mostly find what they do not like and are not willing to confront. One of the things social media helps us with is that it allows many of us to escape these realities and the things we find. Because of the people we "follow" and consider to be in "better places" than us, we create a world of fantasy for ourselves. Somewhere we would rather be, forgetting our own realities.`,
  `We somehow think engaging them, talking like them and acting like them makes us them. While this may be a good way to develop new ways of seeing life, it doesn't solve the fundamental issues, and you've got to be willing to confront the fundamental issues. Without doing that, you're angered at your current, real world and left constantly yearning for your world of fantasy.`,
  `I have nothing against fantasy but when you assess these fundamental issues, you're more equipped. You're armed with an acute knowledge of where you are and because of that, you're informed about what it will take you to make your world of fantasy a reality.`,
  `So, that's it my friends. Own every decision, and "to thyself, be true".`,
  `I pray that the light will always guide you. Till some other time, blessings.`,
  //   `Postscript:`,
  //   `- "Ada" - first female child in Igbo land`,
  //   `- If you're wondering what the 1st rule behind my bible was, it reads "Seek God". Image attached below.`,
];

const postscriptBullets = [
  '"Ada" - first female child in Igbo land',
  'If you\'re wondering what the 1st rule behind my bible was, it reads "Seek God".',
];
const postscriptImage = "/images/media/seek.webp";

export default function InfluencesBlog() {
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
        <title>On Knowing the Influences that Shape Your Life — Blog</title>
      </Head>
      <main className="bg-white text-black font-sans relative overflow-x-hidden">
        {/* cursor */}
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

        {/* header */}
        <div className="px-4 lg:px-12 mx-auto max-w-[1440px] py-6 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs">
            <span className="flex items-center justify-center text-[20px]">
              Blog
            </span>
          </div>
        </div>

        {/* hero */}
        <section className="px-4 lg:px-12 mx-auto max-w-[1440px] pt-4 grid lg:grid-cols-12 gap-8 min-h-[40vh] lg:min-h-[60vh] items-start">
          <h1
            className="col-span-12 lg:col-span-7 font-semibold leading-none text-[10vw] lg:text-[8vw]"
            style={{ fontFamily: "bagoss", lineHeight: 1 }}
          >
            on knowing the influences
            <br />
            that shape your life
          </h1>

          <div className="hidden lg:flex col-span-1 justify-center">
            <span className="big-plus font-light select-none leading-none text-[25vw] lg:text-[10vw]">
              +
            </span>
          </div>

          <div className="col-span-12 lg:col-span-4 text-lg leading-relaxed pt-3 lg:pt-0">
            <p>
              Pay attention to who you are and own your choices—external advice
              only works when filtered through honest self-knowledge.
            </p>
          </div>
        </section>

        {/* article */}
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
            {articleParagraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </section>

          {/* Postscript */}
          <section
            className="pt-10 border-t border-gray-300 space-y-4"
            id="postscript"
          >
            <h2
              className="text-2xl font-semibold"
              style={{ fontFamily: "bagoss" }}
            >
              Postscript
            </h2>
            <ul className="list-disc pl-6 space-y-1 text-base">
              {postscriptBullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            <div className="pt-6">
              <img
                src={postscriptImage}
                alt="Seek God note"
                className="w-full max-w-md mx-auto rounded-lg shadow-md"
              />
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
