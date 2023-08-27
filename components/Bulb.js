import Image from "next/image";


const Bulb = () => {
  return (
    <div className="absolute left-1 bottom-2 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10 x-[200px] xl:x-[260px]">
      <Image
        src={"/bulb.png"}
        width={260}
        height={200}
        className="w-full h-full"
        alt=""
      />
    </div>
  )
};

export default Bulb;
