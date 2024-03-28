import Image from "next/image";
import logo from "../assets/logo.svg";
export default function Header() {
  return (
    <div className="wrapper flex justify-between items-center pt-2 lg:pt-7 xl:pt-10 2xl:pt-16 text-6xl uppercase">
      <ul className="flex gap-2 xl:gap-10">
        <li>Lineup</li>
        <li>About</li>
        <li>Info</li>
      </ul>
      <div className="max-w-[400px] flex-shrink">
        <Image className="w-full" width={logo.width} height={logo.height} src={logo} />{" "}
      </div>
      <ul className="flex gap-2 xl:gap-10">
        <li>Tickets</li>
        <li>Faq&apos;s</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
