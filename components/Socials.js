import Link from "next/link";
import { RiYoutubeLine, RiInstagramLine, RiFacebookLine, RiGithubLine, RiLinkedinBoxLine, RiSkypeLine, RiTeamLine } from 'react-icons/ri'
import { TfiTwitter } from 'react-icons/tfi'

const Socials = () => {
  return (
    <div className="flex items-center gap-x-2 lg:gap-x-6 text-2xl lg:mr-44">
      <Link target="_blank" href={'https://www.linkedin.com/in/shamail-bin-wasif-7b1982182/'} className="hover:text-accent transition-all duration-300"><RiLinkedinBoxLine /></Link>
      <Link target="_blank" href={'https://github.com/Shamail9944'} className="hover:text-accent transition-all duration-300"><RiGithubLine /></Link>
      {/* <Link target="_blank" href={''} className="hover:text-accent transition-all duration-300"><TfiTwitter /></Link> */}
      <Link target="_blank" href={'https://join.skype.com/invite/MJnejSwlmvfA'} className="hover:text-accent transition-all duration-300"><RiSkypeLine /></Link>
      <Link target="_blank" href={'https://teams.live.com/l/invite/FEAW8-F2LYdr6S4mgE'} className="hover:text-accent transition-all duration-300"><RiTeamLine /></Link>
    </div>
  )
};

export default Socials;
