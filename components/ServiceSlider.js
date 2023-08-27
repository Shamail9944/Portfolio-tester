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
    description: 'Shopping platforms with engaging user interfaces, efficient order processing, and secure payment gateways,smooth third-party APIs integrations. Enabling personalized shopping experiences, seamless checkout processes, and data-driven insights that drive conversion rates and customer loyalty.',
  },
  {
    icon: <MdMiscellaneousServices />,
    title: 'Web Services & API Development',
    description: 'Build robust and efficient REST API communication channels between different components of your application with web services and API development services.',
  },
  {
    icon: <TiSpanner />,
    title: 'Maintenance and Support',
    description: 'Maintenance of your app to make it robust and up-to-date through proactive monitoring and efficient updates. 24X7 support service, so that you can have uninterrupted app functioning, minimal downtime, and prevention from security vulnerabilities.',
  },
  {
    icon: <AiFillDatabase />,
    title: 'Database Development',
    description: 'MongoDB development revolutionizes data management with a flexible NoSQL database and stores data in a document-based format. Database solution that scales effortlessly to accommodate growing data volumes, supporting agility in response to changing business needs.',
  },
  {
    icon: <GiElectric />,
    title: 'Interactive UI Development Services',
    description: 'Interactive UI development with engaging and user-centric interfaces that bring your apps to life. Get your app developed with power of Reacts component-based architecture and Node.js asynchronous capabilities.',
  },

];


const ServiceSlider = () => {
  return (
    <Swiper breakpoints={{
      320: { slidesPerView: 1, spaceBetween: 15 },
      640: { slidesPerView: 4, spaceBetween: 15 },
    }}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      className='h-[240px] sm:h-[480px]'
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-[90%] rounded-lg px-6 py-4 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 items-center">
              <div className='text-4xl text-accent mb-4'>{item.icon}</div>
              <div className='mb-8'>
                <div className="mb-2 text-lg text-center">{item.title}</div>
                <p className='max-w-[350px] leading-normal text-center'>{item.description}</p>
              </div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
};

export default ServiceSlider;
