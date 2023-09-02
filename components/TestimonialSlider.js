import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { FaQuoteLeft } from 'react-icons/fa'
import Image from "next/image";

// data
// testimonial data
const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Anne Smith',
    position: 'Customer',
    message:
      'Professional, comprehensive and competent experience throughout the process of our working together. We feel that we have established a relationship with you for years to come. ',
  },
  {
    image: '/t-avt-2.png',
    name: 'Mark Liam',
    position: 'Customer',
    message:
      'Seen a 200% increase in the number of online contact forms being filled out and returned to us. Matt and his team worked closely with us to provide a site that met all of the criteria that we were looking for. The end result was a website that is attractive, organized and effective.',
  },
  {
    image: '/t-avt-3.png',
    name: 'Olivia Turner',
    position: 'Customer',
    message:
      'I personally want to thank you and your staff for their patience and diligence in promptly meeting each of our requests for the site during its development.',
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className='h-[400px]'
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center lg:flex-row gap-x-8 h-full px-16">
              {/* avatar, name, position */}
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                <div className="flex flex-col justify-center text-center">
                  <div className="mb-2 mx-auto">
                    <Image src={person.image} height={100} width={100} alt="" />
                  </div>
                  <div className="text-lg">{person.name}</div>
                  <div className="text-[12px] uppercase font-extralight tracking-widest">{person.position}</div>
                </div>
              </div>
              {/* quotes & messages */}
              <div className="flex-1 flex flex-col md:flex-row justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                <div className="mb-4" ><FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-3" /></div>
                <div className="xl:text-lg text-center md:text-left">{person.message}</div>
              </div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
};

export default TestimonialSlider;
