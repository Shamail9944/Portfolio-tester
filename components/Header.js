import Image from "next/image";
import Link from "next/link";
import Socials from '../components/Socials.js';
import localFont from "next/font/local";
const myFont= localFont({src:"../public/fonts/Pepperidge.otf"})

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center xl:px-35 lg:h-[100px] xl:h-[100px]">
      <div className="container mx-auto xl:max-w-[1200px] xxl:max-w-[1200px]">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-2 lg:gap-y-6">
          <Link href={'/'}>
            <h2 style={myFont.style} className="text-6xl lg:text-2xl xl:text-6xl">Shamail <span className="text-accent text-2xl lg:text-2xl xl:text-6xl">B. Wasif</span></h2>
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  )
};

export default Header;
