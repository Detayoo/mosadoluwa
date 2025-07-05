import Head from "next/head";
import { useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";

const Custom404 = () => {
  useEffect(() => {
    gsap.from(".digit", {
      autoAlpha: 0,
      scale: 0.8,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
    });
  }, []);

  return (
    <>
      <Head>
        <title>404 – Page not found</title>
      </Head>
      <main className="min-h-screen bg-[#d4d5cd] text-[#0f0f0f] flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-start px-8 pt-6 text-xs uppercase tracking-wider">
          <span>Error 404</span>
          <Link href="/" className="hover:underline">
            faq
          </Link>
        </header>

        {/* Body */}
        <section className="flex-1 flex flex-col justify-center items-center px-8">
          <div className="relative w-full max-w-5xl">
            <svg
              viewBox="0 0 1000 300"
              className="w-full h-auto"
              stroke="#f87400"
              fill="none"
              strokeWidth={8}
            >
              {/* Left 4 */}
              <path className="digit" d="M250 80 L140 190 L250 190 Z" />
              <circle className="digit" cx="500" cy="150" r="120" />
              {/* Right 4 */}
              <path className="digit" d="M760 190 L870 80 L870 190 Z" />
            </svg>  
          </div>
        </section>

        {/* Footer info about digits */}
        <section className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#c2c3bb] text-xs px-8 pb-12">
          <div className="py-6 md:pr-6">
            <h3 className="font-semibold mb-2">The Zero</h3>
            <p>
              The zero can sometimes be confused with the O, yet its appearance
              is distinctive: being a divergent node made by joining the
              endpoints of its two lines. The diameter is distinct from the
              terminus length and its angle tends to be greater than the capital
              O. When rendered vertical it has no other way inward.
            </p>
          </div>
          <div className="py-6 md:px-6">
            <h3 className="font-semibold mb-2">The Four</h3>
            <p>
              The four is something pretty secret; the four types it has are
              mostly aesthetic, a base diagonal with a bowed slash can be
              replaced with a bent slash or a bow diagonal with a horn slash.
            </p>
          </div>
          <div className="py-6 md:pl-6">
            <h3 className="font-semibold mb-2">Report</h3>
            <p>
              Oops, the requested page could not be found in the dark forest.
              Click the button to report any link errors in the past telegrams
              or summon the dev.
            </p>
            <a
              href="mailto:teeydigba@gmail.com"
              className="inline-block mt-3 px-4 py-1 rounded-full border border-[#f87400] text-[#f87400] text-xs hover:bg-[#f87400] hover:text-white transition-colors"
            >
              report the problem
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default Custom404;
