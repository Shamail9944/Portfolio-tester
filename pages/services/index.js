import ServiceSlider from './../../components/ServiceSlider';
import Bulb from './../../components/Bulb';
import Circles from './../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from './../../variants';
import { RxCrop, RxPencil2, RxDesktop, RxReader, RxRocket } from 'react-icons/rx'

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-10 lg:py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row gap-x-8 items-center justify-center'>
          {/* Text */}
          <div className='flex items-center justify-center xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0 '>
            <motion.h2
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='xl:mt-8 text-2xl mb-5'>
              My Services <span className='text-accent'>.</span>
            </motion.h2>
          </div>
        </div>
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="w-full  px-20">
            <ServiceSlider />
          </motion.div>
      </div>
      <Bulb />
    </div>)
};

export default Services;
