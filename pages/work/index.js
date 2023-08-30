import WorkSlider from './../../components/WorkSlider';
import Bulb from './../../components/Bulb';
import Circles from './../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from './../../variants';
import { RxCrop, RxPencil2, RxDesktop, RxReader, RxRocket } from 'react-icons/rx'

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-10 lg:py-36 flex ">
      <Circles />
      <div className="container mx-auto">
        <div className='flex flex-col gap-x-8 items-center'>
          {/* Text */}
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
            <motion.h2
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='h2 xl:mt-8 mt-8'>
              My Projects <span className='text-accent'>.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='mb-4 max-w-[400px] mx-auto lg:mx-0 hidden lg:visible'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi at eius dolores modi qui. Sed corporis amet eligendi consectetur eveniet corrupti in fugiat dolores earum, quidem dolorum placeat incidunt error dolor. Distinctio!</motion.p>
          </div>


          {/* Slider */}
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="w-full xl:max-w-[55%] pt-2 lg:pt-10">
            <WorkSlider />
          </motion.div>

        </div>
      </div>
      <Bulb />
    </div>)
};

export default Work;
