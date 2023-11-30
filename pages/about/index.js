/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import { FaHtml5, FaJs, FaReact, FaAngular, FaBootstrap } from "react-icons/fa";
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
import localFont from "next/font/local";
const myFont= localFont({src:"../../public/fonts/Pepperidge.otf"})

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
        title: "Employee of the Month - SAUFIK",
        stage: "Jun 2022",
      }
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Jnr Web Dev - Saufik Isl, Pk",
        stage: "2020 - 22",
      },
      {
        title: "Intern - Saufik Isl, Pk",
        stage: "2019 - 20",
      },
      {
        title: "Freelancer - Fiver/ Outsource",
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
        title: "Computer Science - VU, ATK, PK",
        stage: "2012",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);

  return (
    <div className="h-full bg-primary/30 py-12 text-center xl:text-left">
      <Circles />
      
      {/* Picture */}
      {/* <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="
        w-full h-full
        max-w-[737px] max-h-[678px]
        absolute
        md:max-w-[537px] md:max-h-[450px] md:bottom-0 md:-left-[28%]
        lg:max-w-[737px] lg:max-h-[488px] lg:bottom-0 lg:-left[36%]
        xl:max-w-[737px] xl:max-h-[563px] xl:-bottom-16 xl:-left-[20%]
        ">
        <Avatar priority={false}/>
      </motion.div> */}

      <div className="container mx-auto  xxl:ml-[32rem] h-full flex flex-col items-center xl:flex-row gap-x-6">

        {/* text */}
        <div className="lg:flex-1 flex flex-col items-center justify-center mt-9 md:mt-9 ">


          <motion.h2
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            style={myFont.style}
            className="text-4xl md:text-2xl lg:text-6xl mb-2 lg:mb-5 mt-2 lg:mt-15 tracking-wide">
            <span  className="text-accent">Full Stack </span>Software Engineer
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] md:max-w-[700px] mx-auto xl:mx-0 mb-2 md:mb-4 lg:mb-6 xl:mb-6 px-2 xl:px-0 text-center">
            I am a passionate developer from Islamabad, Pakistan, who writes clean, elegant and effecient code.
            <span className="hidden sm:inline md:inline"> My expertise is developing next-level websites and web applications including scalable frontend design with MVC design backend.</span>
          </motion.p>
          {/* Counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 xl:ml-13 mb-8 lg:mb-14">
            <div className="flex flex-1 xl:gap-x-8">
              {/* Experience */}
              <div className="flex flex-col items-center relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 lg:pr-10">
                <div className="text-2xl xl:text-2xl font-extrabold mb-2 text-accent ">
                  <CountUp start={0} end={3} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] loading-[1.4] max-w-[100px] text-center">
                  Years of Experience
                </div>
              </div>
              {/* clients */}
              <div className="flex flex-col items-center relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 lg:pr-10">
                <div className="text-2xl xl:text-2xl font-extrabold mb-2 text-accent ">
                  <CountUp start={0} end={28} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] loading-[1.4] max-w-[100px] text-center">
                  Satisfied Clients
                </div>
              </div>
              {/* projects */}
              <div className="flex flex-col items-center relative flex-1">
                <div className="text-2xl xl:text-2xl font-extrabold mb-2 text-accent ">
                  <CountUp start={0} end={41} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] loading-[1.4] max-w-[100px] text-center">
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
          className="flex-1 flex flex-col w-full xl:max-w-[55%] md:max-w-[85%] h-[360px] lg:pl-10">
          {/* title */}
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 lg:mb-4 lg:mt-8 mb-2 mt-2">
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
                  className="flex flex-row flex-1 max-w-max gap-x-2 items-center text-white/60">
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4 flex-wrap ">
                    {/* xx Icons */}
                    {item.icons?.map((icon, itemindex) => {
                      return <div key={itemindex} className=" text-2xl text-white hover:text-accent">{icon}</div>;
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
