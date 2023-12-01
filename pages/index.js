import localFont from "next/font/local";
import ParticlesContainer from './../components/ParticlesContainer';
import ProjectsBtn from './../components/ProjectsBtn';
import Avatar from './../components/Avatar';
import { motion } from "framer-motion";
import { fadeIn } from './../variants';
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const myFont= localFont({src:"../public/fonts/Pepperidge.otf"})

const Home = () => {
  const [text] = useTypewriter({
    words: ['Full Stack Developer','Mern / Mean Dev','Next JS Dev' ],
    loop: {},
    typeSpeed: 40,
    deleteSpeed: 100,
  })

  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-20 xl:text-left h-full container mx-auto xl:max-w-[1200px] xxl:max-w-[1200px]">
          <motion.h1
            className="text-sm my-3 md:mb-8 lg:mb-20 text-accent"
            variants={fadeIn('down', 0.9)}
            initial='hidden'
            animate='show'
            exit='hidden'
          >
            Hello!{' '}I am{' '}...
            <br /><br />
            <span className="block lg:hidden">{' '}</span>
            <span style={myFont.style} className="text-white text-4xl md:text-2xl lg:text-3xl xl:text-6xl tracking-widest lg:tracking-wider ">{text}</span><Cursor cursorStyle='|' />
          </motion.h1>
          <motion.h1
            className="text-lg md:text-2xl lg:text-xl xl:text-md md:mb-8 lg:mb-2 mt-10 lg:mt-0"
            variants={fadeIn('down', 1.9)}
            initial='hidden'
            animate='show'
            exit='hidden'
          >Transforming Ideas Into
            <span className="lg:hidden"><br /></span>
            <span className="text-accent">{' '}Digital Marvels</span> ...
          </motion.h1>
          <motion.p
            className="
            max-w-sm md:max-w-2xl xl:max-w-xl 
            mx-auto xl:mx-0 mb-5 md:mb-60 lg:mb-45 xl:mb-12
            mt-10 lg:mt-0 
            md:tracking-widest
            text-xs md:text-lg lg:text-xl xl:text-xs
            "
            variants={fadeIn('down', 1.9)}
            initial='hidden'
            animate='show'
            exit='hidden'
          >
            I like to craft solid and scalable digital products with great user experience. Highly skilled at progressive enhancement of products design and database as per clients needs.

          </motion.p>
          <div className="flex justify-center relative xl:hidden md:left-[17%] md:-top-[0%] lg:left-[15%] lg:-top-[17%]"><ProjectsBtn /></div>
          <motion.div
            className='hidden xl:flex z-50'
            variants={fadeIn('down', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
          >
            <ProjectsBtn/>
          </motion.div>
        </div>
      </div>
      <div className="w-full h-full absolute right-0 bottom-0">
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
          md:max-w-[472px] md:max-h-[510px] md:bottom-0 md:left-[0%]
          lg:max-w-[510px] lg:max-h-[530px] lg:bottom-0 lg:left-[15%]
          xl:max-w-[520px] xl:max-h-[470px] xl:bottom-0 xl:left-[54%]
          xxl:max-w-[620px] xxl:max-h-[570px] xxl:bottom-0 xxl:left-[47%]
          "><Avatar priority={false}/></motion.div>
      </div>
    </div>)
};

export default Home;
