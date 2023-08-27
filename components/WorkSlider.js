
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper';
import 'swiper/css'
import 'swiper/css/pagination'
import { BsArrowRight } from 'react-icons/bs'
import Image from "next/image";
import Link from "next/link";

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'Youtube Clone',
          path: '/youtubeClone.jpg',
          link: 'https://youtube-react-clone-by-sam-dev.netlify.app/'
        },
        {
          title: 'Hangman Angular',
          path: '/AngularHangman.jpg',
          link: 'https://shamail9944.github.io/Angular-Hangman/'
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
          link: 'https://youtube-react-clone-by-sam-dev.netlify.app/'
        },
        {
          title: 'title',
          path: '/thumb4.jpg',
          link: 'https://youtube-react-clone-by-sam-dev.netlify.app/'
        },
      ],
    },
    {
      images: [
        {
          title: 'Youtube Clone',
          path: '/thumb1.jpg',
          link: 'https://youtube-react-clone-by-sam-dev.netlify.app/'
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
          link: 'https://youtube-react-clone-by-sam-dev.netlify.app/'
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
          link: 'https://youtube-react-clone-by-sam-dev.netlify.app/'
        },
        {
          title: 'title',
          path: '/thumb4.jpg',
          link: 'https://youtube-react-clone-by-sam-dev.netlify.app/'
        },
      ],
    },

  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className='h-[240px] sm:h-[480px]'
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 gap-4 cursor-pointer">
              {/* grid-rows-2 */}
              {slide.images.map((image, index) => {
                return (
                  <div key={index} className="relative overflow-hidden flex group items-center justify-center">
                    <Link href={image.link}>
                      <div className="flex items-center rounded-lg justify-center relative overflow-hidden group">
                        <Image src={image.path} height={500} width={300} alt="" />
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                        {/* title */}
                        <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                          <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em] ">
                            <div className="delay-100">LIVE</div>
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">PROJECT</div>
                            <div className="text-2xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200 "><BsArrowRight /></div>
                          </div>
                        </div>
                      </div>
                      <div className=" text-center mt-2 text-orange-500">{image.title}</div>
                    </Link>
                  </div>
                )
              })}

            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
};

export default WorkSlider;
