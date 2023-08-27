import Image from "next/image";
import ParticlesContainer from './../components/ParticlesContainer';
import ProjectsBtn from './../components/ProjectsBtn';
import Avatar from './../components/Avatar';
import { motion } from "framer-motion";
import { fadeIn } from './../variants';
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Home = () => {
  const [text] = useTypewriter({
    words: ['Web App Developer', 'Backend / Database Developer', 'MERN Stack Developer'],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  })

  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.h1
            className="h1"
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
          >Transforming Ideas<br />Into{' '}
            <span className="text-accent">Digital </span>
            Reality
          </motion.h1>
          <motion.h1
            className="h2 text-xl"
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
          >
            Hello! I am a {' '}
            <span className="text-accent text-3xl">{text}</span><Cursor cursorStyle='|'/>
          </motion.h1>
          <motion.p
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
            variants={fadeIn('down', 0.5)}
            initial='hidden'
            animate='show'
            exit='hidden'
          >
            I like to craft solid and scalable digital products with great user experience. Highly skilled at progressive enhancement of products design and database as per clients needs.

          </motion.p>
          <div className="flex justify-center relative xl:hidden"><ProjectsBtn /></div>
          <motion.div
            className='hidden xl:flex'
            variants={fadeIn('down', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div> */}

        <ParticlesContainer />

        <motion.div
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          animate='show'
          exit='hidden'
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"><Avatar /></motion.div>
      </div>
    </div>)
};

export default Home;
