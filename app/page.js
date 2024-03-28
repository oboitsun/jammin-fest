"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import bg from "../assets/back.webp";
import logo from "../assets/logo.png";
import Socials from "../components/Socials";
export default function Home() {
  return (
    <div className="w-screen  h-screen overflow-hidden flex flex-col items-center relative">
      {/* <Header /> */}
      <div className="flex flex-col items-center gap-3 justify-center h-1/2 flex-grow w-full max-w-[1330px] relative px-5 lg:px-10">
        <div className="flex flex-col items-center w-full max-w-max  my-auto">
          <motion.div
            className="w-full"
            initial={{ opacity: 0 }}
            transition={{ delay: 0.3 }}
            animate={{ opacity: 1 }}>
            <Image
              className="mx-auto "
              width={logo.width}
              height={logo.height}
              src={logo}
              alt="Jammin"
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            transition={{ delay: 0.5 }}
            animate={{ opacity: 1 }}
            className="text-xl text-stroke lg:text-4xl leading-none  tracking-[2%] text-center uppercase text-balance max-w-[760px] py-5 darma-e">
            Thank you for attending jammin Fest &apos;24. Stay tuned for updates and announcements
            for jammin Fest &apos;25.
          </motion.p>
          <motion.form
            initial={{ opacity: 0 }}
            transition={{ delay: 0.7 }}
            animate={{ opacity: 1 }}
            className="flex h-[54px] lg:h-[72px] w-full max-w-[475px] mx-auto lg:text-xl  darma-e  leading-none">
            <input
              placeholder="email"
              className=" border-peach border-2 border-r-0 rounded-tl-lg rounded-bl-lg bg-white w-full max-w-xs px-3 lg:px-5 pt-1 placeholder:uppercase placeholder:text-[#555555] text-mustard caret-mustard uppercase outline-none "
              type="email"
            />
            <button className="bg-peach/90 border-peach border-2 border-l-0  rounded-br-lg rounded-tr-lg text-white lg:text-xl px-3  lg:px-8 flex-shrink-0 uppercase  darma-e transition-all hover:text-peach hover:bg-green">
              subscribe
            </button>
          </motion.form>
          <div className="lg:hidden  w-max mt-6">
            <Socials />
          </div>
        </div>
        <motion.div className="hidden lg:block absolute left-1/2 bottom-10 -translate-x-1/2 w-max">
          <Socials />
        </motion.div>
      </div>
      <div className="-z-[1] w-full h-full absolute top-0 left-0">
        <Image
          className="pointer-events-none "
          priority
          fill
          src={bg}
          objectFit="cover"
          alt="pattern"
        />
      </div>
    </div>
  );
}
