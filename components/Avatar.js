import Image from "next/image";


const Avatar = () => {
  return (
    <div className="hidden xl:flex md:flex ">
      <Image
        src={'/avatar3.png'}
        width={737}
        height={678}
        alt=""
        className="translate-z-0 w-full h-full"
        priority={false}
      />
    </div>
  )
};

export default Avatar;
