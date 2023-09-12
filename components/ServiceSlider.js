import { RxArrowTopRight } from 'react-icons/rx'
import { RiSettings5Fill } from 'react-icons/ri'
import { AiFillDatabase } from 'react-icons/ai'
import { CgScreen } from 'react-icons/cg'
import { AiTwotoneShop } from 'react-icons/ai'
import { ImDrawer } from 'react-icons/im'
import { TiSpanner } from 'react-icons/ti'
import { MdMiscellaneousServices } from 'react-icons/md'
import { GiElectric } from 'react-icons/gi'


import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from 'swiper';
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
// data
const serviceData = [
  {
    icon: <CgScreen />,
    title: 'Frontend Dev',
    description: 'Passionate about UI / UX, Over 3 years of development experience in React, Next & Angular.',
  },
  {
    icon: < ImDrawer />,
    title: 'Backend Dev',
    description: 'Crafting REST API with MVC structured Database: MySql, MongoDb, Express, NodeJs.',
  },
  {
    icon: <RiSettings5Fill />,
    title: 'Custom App Dev',
    description: 'Custom app dev aligned with your business objectives, resulting in a solution that meets your needs.',
  },
  {
    icon: <AiTwotoneShop />,
    title: 'E-commerce',
    description: 'Shopping platforms with engaging user interfaces, efficient order processing, and secure payment gateways,smooth third-party APIs integrations, seamless checkout processes, and data-driven insights.',
  },
  {
    icon: <MdMiscellaneousServices />,
    title: 'Web Services & API Development',
    description: 'Build robust and efficient REST API communication channels between different components of your application with web services and API development services.',
  },
  {
    icon: <TiSpanner />,
    title: 'Maintenance and Support',
    description: 'App Maintenance support through proactive monitoring and updates. 24X7 service, to ensure uninterrupted app functioning, minimal downtime, and security vulnerabilities protection.',
  },
  {
    icon: <AiFillDatabase />,
    title: 'Database Development',
    description: 'Data management with a NoSQL/ SQL pattern. Database solution that scales effortlessly to accommodate growing data volumes, supporting agility in response to changing business needs.',
  },
  {
    icon: <GiElectric />,
    title: 'Interactive UI Development Services',
    description: 'UI development with engaging and user-centric interfaces that bring your apps to life. Apps developed with Reacts component-based architecture and Node.js async capabilities.',
  },

];


const ServiceSlider = () => {
  return (
    <Swiper breakpoints={{
      320: { slidesPerView: 1, spaceBetween: 15 },
      640: { slidesPerView: 2, spaceBetween: 15 },
      768: { slidesPerView: 3, spaceBetween: 15 },
      1024: { slidesPerView: 3, spaceBetween: 15 },

    }}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      className='md:h-[500px] lg:h-[390px] h-[350px]'
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-[85%] rounded-lg px-6 py-4 flex flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 items-center">
              <div className='text-4xl text-accent mb-4'>{item.icon}</div>
              <div className='mb-8'>
                <div className="mb-2 text-lg text-center">{item.title}</div>
                <p className='max-w-[350px] leading-normal text-center overflow-hidden'>{item.description}</p>
              </div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
};

export default ServiceSlider;
