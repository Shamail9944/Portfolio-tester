import { animate, motion } from 'framer-motion'
// import styles from '../styles/Transition.module.css'
const transitionVariants = {
  initial: {
    x: '100%',
    width: "100%"
  },
  animate: {
    x: '0%',
    width: "0%"
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%'],
  },

}

const Transition = () => {
  return (
    <>
      <motion.div
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2e2257]'
        variants={transitionVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ delay: 0.1, duration: 0.2, ease: 'easeInOut' }}
      >
        {/* Loader */}
        {/* <div className='loaderBody'>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div className='base'>
            <span></span>
            <div className='face'></div>
          </div>
        </div>
        <div className='longfazers'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <h1 className='h1x'>Redirecting</h1> */}

      </motion.div>
      <motion.div
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#3b2d71]'
        variants={transitionVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ delay: 0.2, duration: 0.4, ease: 'easeInOut' }}
      >
      </motion.div>
      <motion.div
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#4b3792]'
        variants={transitionVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ delay: 0.3, duration: 0.6, ease: 'easeInOut' }}
      >
      </motion.div>
    </>
  );
};

export default Transition;
