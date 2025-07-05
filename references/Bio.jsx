import React from "react";

import "./bio.css";
import Footer from "../../components/Footer";

const Bio = () => {
  return (
    <div className="min-h-[93.5dvh] flex flex-col justify-between">
      {/* Bio Section */}
      <div className="relative overflow-hidden">
        <section className="w-[1400px] mx-[auto] xl:w-full xl:pl-[60px] lg:pl-[40px] 2xs:pl-[20px] flex">
          <div className="bio-content w-[47%] lg:w-full">
            <div className="bio-text mb-10">
              <h2>
                "If you feel stuck & you don't know where to go, what to do &
                who to become, create a beautiful list of where you don't want
                to go, what you don't want to do & who you don't want to become.
                Make the list really clear because that right there is a
                pointer. Godspeed, my friend!"
              </h2>
              <p>
                Mosadoluwa Fasasi is the Principal at {""}
                <a
                  href="https://www.linkedin.com/company/the-morphing%E2%80%94500"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "#e63946" }}
                >
                  The Morphing—500
                </a>
                , a life and enterprise consult, helping people morph from their
                current levels to their desired levels through guided insights
                and visioning.
              </p>
              <p>
                He is an adventurous serial entrepreneur with a proven track
                record of managing and creating user-centred experiences across
                diverse industries. With a solid background in writing &
                communication, design & visuals, and technical domains, he has
                hands-on experience leading and collaborating with
                cross-functional AGILE teams.
              </p>
              <p>
                His versatile background includes successful stints in the
                fashion, fintech, design, education, communications, and
                blockchain industries, making him adept at navigating various
                sectors to deliver cutting-edge solutions that resonate with
                users.
              </p>
              <p>
                Combining creativity, technical acumen and a deep understanding
                of customer needs, he drives project, product and business
                excellence wherever you find him.{" "}
              </p>
              <p>
                He has been identified by many adjectives: Sage, Rebel, Genius,
                Psychologist, Counsellor; he answers them all.
              </p>
              <p>
                To see some of his entrepreneurial adventures, click {""}
                <a
                  href="/career"
                  style={{ textDecoration: "none", color: "#e63946" }}
                >
                  Career
                </a>
              </p>
            </div>
          </div>
        </section>
        <div className="w-[47%] flex items-center justify-center absolute top-0 right-0 lg:w-full lg:h-full lg:z-1 lg:opacity-50">
          <img
            className="bio__about__hero__img h-[2000px]"
            src="/hero.png"
            alt="Hero"
          />
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Bio;
