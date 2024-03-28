import { motion } from "framer-motion";
import Image from "next/image";
import fb from "../assets/fb.svg";
import inst from "../assets/inst.svg";
import tiktok from "../assets/tiktok.svg";
import tw from "../assets/tw.svg";
const socials = [
  { id: "twitter", icon: tw, link: "" },
  { id: "insta", icon: inst, link: "" },
  { id: "fb", icon: fb, link: "" },
  { id: "tiktok", icon: tiktok, link: "" },
];
export default function Socials() {
  const parent = {
    show: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
        delayChildren: 1,
      },
    },
    hidden: {
      zIndex: 0,
      opacity: 0,
    },
  };
  const child = {
    show: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };
  return (
    <motion.div variants={parent} initial="hidden" animate="show" className="flex gap-7 ">
      {socials.map((link) => (
        <motion.a
          variants={child}
          key={link.id}
          className="w-6 h-6 inline-flex justify-center items-center  transition-all hover:scale-105 ">
          <Image width={link.icon.width} height={link.icon.height} src={link.icon} alt={link.id} />
        </motion.a>
      ))}
    </motion.div>
  );
}
