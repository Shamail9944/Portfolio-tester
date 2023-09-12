import Image from "next/image";
import Link from "next/link";
import Socials from '../components/Socials.js';


const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center xl:px-40  lg:h-[100px] xl:h-[100px]">
      <div className="container mx-auto xxl:max-w-[1200px]">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-2 lg:gap-y-6">
          <Link href={'/'}>
            {/* <Image
              src={'/logo.svg'}
              width={220}
              height={48}
              alt=''
              priority={true}
            /> */}
            <h2 className=" lg:text-2xl text-base">Shamail <span className="text-accent text-xs lg:text-2xl">B. Wasif</span></h2>
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  )
};

export default Header;
