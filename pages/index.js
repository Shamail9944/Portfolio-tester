import Image from "next/image";
import ParticlesContainer from './../components/ParticlesContainer';
import ProjectsBtn from './../components/ProjectsBtn';
import Avatar from './../components/Avatar';
import { motion } from "framer-motion";
import { fadeIn } from './../variants';
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Home = () => {
  const [text] = useTypewriter({
    words: ['Full Stack Developer','MERN / MEAN / NEXT JS Dev', 'Frontend Dev - Client Side', 'Backend Dev - Server Side', 'Database Developer', ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  })

  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-20 xl:text-left h-full container mx-auto xxl:max-w-[1200px]">
          <motion.h1
            className="text-xl md:text-2xl lg:text-2xl md:mb-8 lg:mb-2"
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
          >Transforming Ideas Into {' '}<br /> <span className="text-accent">Digital Marvels</span> ...
          </motion.h1>
          <motion.h1
            className="text-xl my-3 md:mb-8 lg:mb-4"
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
          >
            Hello! I am {' '}<br />
            <span className="text-accent text-xl md:text-2xl lg:text-3xl">{text}</span><Cursor cursorStyle='|' />
          </motion.h1>
          <motion.p
            className="max-w-sm md:max-w-2xl xl:max-w-xl mx-auto xl:mx-0 mb-5 md:mb-60 lg:mb-45 xl:mb-12 md:tracking-widest"
            variants={fadeIn('down', 0.5)}
            initial='hidden'
            animate='show'
            exit='hidden'
          >
            I like to craft solid and scalable digital products with great user experience. Highly skilled at progressive enhancement of products design and database as per clients needs.

          </motion.p>
          <div className="flex justify-center relative xl:hidden md:left-[25%] md:-top-[10%] lg:left-[15%] lg:-top-[17%]"><ProjectsBtn /></div>
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
      <div className="w-full h-full absolute right-0 bottom-0">
        {/* <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div> */}

        <ParticlesContainer />

        <motion.div
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          animate='show'
          exit='hidden'
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="
          w-full h-full
          absolute -bottom-32
          max-w-[737px] max-h-[678px]
          md:max-w-[537px] md:max-h-[450px] md:bottom-0 md:left-[0%]
          lg:max-w-[437px] lg:max-h-[400px] lg:bottom-0 lg:left-[15%]
          xl:max-w-[737px] xl:max-h-[650px] xl:bottom-0 xl:left-[44%]
          xxl:max-w-[737px] xxl:max-h-[650px] xxl:bottom-0 xxl:left-[55%]
          "><Avatar /></motion.div>
      </div>
    </div>)
};

export default Home;
