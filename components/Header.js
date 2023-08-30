import Image from "next/image";
import Link from "next/link";
import Socials from '../components/Socials.js';


const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center  lg:py-8 gap-y-2 py-4 lg:gap-y-6">
          <Link href={'/'}>
            {/* <Image
              src={'/logo.svg'}
              width={220}
              height={48}
              alt=''
              priority={true}
            /> */}
            <h2 className="lg:text-2xl text-xs"><span className="text-accent lg:text-4xl text-base">Shamail</span> B. Wasif</h2>
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  )
};

export default Header;
