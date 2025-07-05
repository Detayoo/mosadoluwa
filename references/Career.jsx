import React from "react";
import "./career.css"; //
import Footer from "../../components/Footer";
import multisight from "../../../public/multisight.png";
import wtf from "../../../public/wtf.png";
import desci from "../../../public/2b.png";
import peopleDao from "../../../public/pdao.png";
import techSemester from "../../../public/ts.png";

const Career = () => {
  return (
    <div className="min-h-[93.5dvh] flex flex-col justify-between">
      <div className="relative overflow-hidden">
        <section className="w-[1400px] mx-[auto] xl:w-full xl:pl-[60px] lg:pl-[40px] 2xs:pl-[20px] flex">
          <div className="career-content w-[90%] lg:w-full">
            <div className="career-text mb-10 z-[999]">
              <h2>
                "The journey is the reward. Embrace growth, seek wisdom, and be
                excellent in your delieverables."
              </h2>
              <p>
                After a long and productive time in Web2, Mosadoluwa Fasasi
                transitioned full-time into Web3 in Q1 2024. Below are his
                adventures from his last engagement in Web2 to his current
                emphasis in Web3.{" "}
              </p>
              <div className="flex flex-col gap-y-10 my-10 md:w-[95%] sm:w-[98%]">
                <div className="flex gap-x-5 sm:gap-x-5 gap-y-3">
                  <div className="w-[100px] sm:w-[40px]">
                    <img
                      src={desci}
                      alt="desci-ng"
                      className="w-[60px] h-[60px] sm:w-[35px] sm:h-[35px] object-cover"
                    />
                  </div>
                  <p className="flex-1 -mt-2 sm:-mt-[6px]">
                    DeSci NG (Dec 2024 till date): <br /> A community built on
                    the ideals of Decentralised Science. Mosadoluwa Fasasi leads
                    this community with the goal of increasing the quality of
                    education in Nigeria and accelerating innovation via
                    academia, research and public good projects. To check out
                    DeSci NG, click{" "}
                    <a
                      className="underline"
                      target="_blank"
                      href="https://x.com/DeSci_NG"
                    >
                      here
                    </a>
                    .
                  </p>
                </div>

                <div className="flex gap-x-5 sm:gap-x-5 gap-y-3">
                  <div className="w-[100px] sm:w-[40px]">
                    <img
                      src={multisight}
                      alt="multisight"
                      className="w-[60px] h-[60px] sm:w-[35px] sm:h-[35px] object-contain"
                    />
                  </div>
                  <p className="flex-1 -mt-2 sm:-mt-[6px]">
                    Multisightapp (Dec 2023 till date): <br /> An analytics tool
                    for Multisignature wallet and teams. Mosadoluwa Fasasi is a
                    co-builder at Multisightapp. They got into the Safe
                    Ecosystem grant in 2022 and have shipped an MVP. To check
                    out Multisightapp, click{" "}
                    <a
                      className="underline"
                      target="_blank"
                      href="https://x.com/multisightapp"
                    >
                      here
                    </a>
                    {""}.
                  </p>
                </div>
                <div className="flex gap-x-5 sm:gap-x-5 gap-y-3">
                  <div className="w-[100px] sm:w-[40px]">
                    <img
                      src={wtf}
                      alt="wtf academy"
                      className="w-[60px] h-[60px] sm:w-[35px] sm:h-[35px] object-contain"
                    />
                  </div>
                  <p className="flex-1 mt-[10px] sm:mt-[4px]">
                    WTF Academy Africa (Jan 2023 till date): <br /> An
                    open-source Web3 university onboarding Web2 talent.
                    Mosadoluwa Fasasi leads this project and since Q2 2023, his
                    team has reached over 100 talent. To see one of their
                    pop-ups in 2024, click{" "}
                    <a
                      className="underline"
                      target="_blank"
                      href="https://www.linkedin.com/feed/update/urn:li:activity:7195716748053008384"
                    >
                      here
                    </a>
                    {""}. They recently struck a partnership with The Family of
                    Students, Naija's largest community of students online, to
                    continue to drive their mission forward.
                  </p>
                </div>
                <div className="flex gap-x-5 sm:gap-x-5 gap-y-3">
                  <div className="w-[100px] sm:w-[40px]">
                    <img
                      src={peopleDao}
                      alt="people dao"
                      className="w-[60px] h-[60px] sm:w-[35px] sm:h-[35px] object-contain"
                    />
                  </div>
                  <p className="flex-1 -mt-2 sm:-mt-[6px]">
                    PeopleDAO (August 2022 - Dec 2024): <br /> A meta-dao that
                    incubates public good projects. Mosadoluwa Fasasi worked as
                    a generalist member and rose to the administrative level
                    through his exceptional contributions which he was also
                    awarded for. During his first few months of engagement at
                    PeopleDAO, he was quickly recognized as a{" "}
                    <span className="text-[#e63946]">''Rising Star''</span>, and
                    went on to become a{" "}
                    <span className="text-[#e63946]">
                      3x ''Contributor of the Month''
                    </span>
                    . He operated in various roles, led and collaborated with
                    cross-functional teams to support and accelerate incubated
                    projects. Some of the projects he accelerated includes;
                    We&apos;re Gonna Buy The Constitution (WAGBTC), found{" "}
                    <a
                      className="underline"
                      target="_blank"
                      href="https://constitutiondao2.com/"
                    >
                      here
                    </a>
                    , and The Lost Children of Benin City, found{" "}
                    <a
                      className="underline"
                      target="_blank"
                      href="https://giveth.io/project/documentary-about-nigerian-human-trafficking?tab=updates#:~:text=dedicated%20team(Ariel%20%26-,Mosa,-)%20on%20the%20PeopleDAO"
                    >
                      here
                    </a>
                    {""}.
                  </p>
                </div>
                <div className="flex gap-x-5 sm:gap-x-5 gap-y-3">
                  <div className="w-[100px] sm:w-[40px]">
                    <img
                      src={techSemester}
                      alt="tech semester"
                      className="w-[60px] h-[60px] sm:w-[35px] sm:h-[35px] object-contain"
                    />
                  </div>
                  <p className="flex-1 -mt-2 sm:-mt-[6px]">
                    Techsemester | Talntsapp (Jan 2023 - Apr 2024): <br /> An
                    ed-tech startup with a digital product for creators.
                    Mosadoluwa Fasasi worked as a generalist within a small team
                    of builders. His role varied over time. Some of the
                    designations were Scrum Master, Project Manager, and Content
                    Associate. Mosadoluwa contributed to key organization
                    decisions and helped achieve the milestone of the first 1000
                    users.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="w-[47%] flex items-center justify-center absolute top-0 right-0 lg:w-full lg:h-full lg:z-1 lg:opacity-50">
          <img
            className="career__about__hero__img h-[2000px]"
            src="/hero.png"
            alt="Hero"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Career;
