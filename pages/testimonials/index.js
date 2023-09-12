import TestimonialSlider from "../../components/TestimonialSlider";
import { motion } from "framer-motion";
import { fadeIn } from '../../variants';


const Testimonials = () => {
  return (
    <div className="h-full bg-primary/30 py-32  text-center">
      <div className="container mx-auto h-full flex flex-col justify-center">
        <motion.h2
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          animate='show'
          exit='hidden'
          transition={{ duration: 1, ease: 'easeInOut' }}

          className="h2 mb-3 xl:mb-0 lg:text-5xl">What clients <span className="text-accent">say</span> about me</motion.h2>
        {/* slider */}
        <motion.div
        variants={fadeIn('down', 0.5)}
        initial='hidden'
        animate='show'
        exit='hidden'
        transition={{ duration: 1, ease: 'easeInOut' }}
        ><TestimonialSlider /></motion.div>
      </div>
    </div>
  )
};

export default Testimonials;
