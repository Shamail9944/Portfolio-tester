/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaAngular, FaBootstrap } from "react-icons/fa";
import { SiNextdotjs, SiFramer, } from "react-icons/si";
import Avatar from "../../components/Avatar";
import Circles from "./../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";
import { AiOutlineAntDesign } from "react-icons/ai";
import { DiMongodb, DiSass, DiGithubBadge, DiGit, DiBootstrap, DiStackoverflow, DiVisualstudio, DiNodejs, DiNpm, DiCss3 } from "react-icons/di";
import { VscGithub } from "react-icons/vsc";
import { TbBrandRedux } from "react-icons/tb";
import { SiMui, SiTailwindcss, SiExpress, SiReactrouter, SiPostman, SiFirebase } from "react-icons/si";
import { PiFileTsxBold, PiFileJsxBold } from "react-icons/pi";
import { GiJasmine, } from "react-icons/gi";
import { GrMysql } from "react-icons/gr";
import { TbApi } from "react-icons/tb";
import { FaNode } from "react-icons/fa";
//  data
const aboutData = [
  {
    title: "Skills",
    info: [
      {
        title: "Languages",
        icons: [<FaHtml5 />, <DiCss3 />, <FaJs />, <PiFileTsxBold />, <PiFileJsxBold />],
      },
      {
        title: "Frameworks",
        icons: [<FaReact />, <SiNextdotjs />, <FaAngular />],
      },
      {
        title: "Libraries",
        icons: [<TbBrandRedux />, <SiReactrouter />,],
      },
      {
        title: "Styling",
        icons: [<SiMui />, <DiBootstrap />, <DiSass />, <AiOutlineAntDesign />, , <SiTailwindcss />],
      },
      {
        title: "Database",
        icons: [<DiMongodb />, <GrMysql />, <SiFirebase />, <SiExpress />, <FaNode />, <TbApi />],
      },
      {
        title: "Tools",
        icons: [<DiGit />, <VscGithub />, <DiStackoverflow />, <DiVisualstudio />, <DiNpm />, <SiPostman />],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Employee of the Month (Jun 22) - SAUFIK",
        stage: "2021",
      }
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Junior Web Developer - Saufik Islamabad",
        stage: "2020 - 2022",
      },
      {
        title: "Intern Web Developer - Devsink Lahore",
        stage: "2019 - 2020",
      },
      {
        title: "Freelancer - Normik Karachi",
        stage: "2017 - 2018",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Software Engg - NUST, ISL, PK",
        stage: "2016",
      },
      {
        title: "Computer Science - Virtual University, ATK, PK",
        stage: "2012",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]">
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-4xl mb-20">
            Software engineer, <span className="text-accent">Frontend</span> & Backend Developer.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
            I am Shamail, a passionate developer from Islamabad, Pakistan, who writes clean, elegant and effecient code. My expertise is developing next-level websites and web applications including scalable frontend design with MVC design backend.
          </motion.p>
          {/* Counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
            <div className="flex flex-1 xl:gap-x-6">
              {/* Experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold mb-2 text-accent ">
                  <CountUp start={0} end={3} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] loading-[1.4] max-w-[100px]">
                  Years of Experience
                </div>
              </div>
              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold mb-2 text-accent ">
                  <CountUp start={0} end={28} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] loading-[1.4] max-w-[100px]">
                  Satisfied Clients
                </div>
              </div>
              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold mb-2 text-accent ">
                  <CountUp start={0} end={41} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] loading-[1.4] max-w-[100px]">
                  Delivered projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Info */}

        <motion.div
          variants={fadeIn('left', 0.8)}
          initial="hidden"
          animate="show"
          exit='hidden'
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
          {/* title */}
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemindex) => {
              return (
                <div
                  key={itemindex}
                  className={`${index === itemindex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                    } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemindex)}>
                  {item.title}
                </div>
              );
            })}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemindex) => {
              return (
                <div
                  key={itemindex}
                  className="flex flex-col flex-1 md:flex-row max-w-max gap-x-2 items-center text-white/60">
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4 flex-wrap ">
                    {/* xx Icons */}
                    {item.icons?.map((icon, itemindex) => {
                      return <div key={itemindex} className="text-2xl text-white">{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
