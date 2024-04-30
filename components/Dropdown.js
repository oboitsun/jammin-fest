import { useEffect, useRef, useState } from "react";
import useCloseOnOutsideClick from "../hooks/outsideClick";

export default function Dropdown({
  children,
  collapse,
  toggleMenu = () => {},
  direction = "down",
  triggerEl,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();
  useEffect(() => {
    collapse && setIsOpen(false);
  }, [collapse]);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    toggleMenu(!isOpen);
  };

  useCloseOnOutsideClick(dropdownRef, isOpen, setIsOpen);

  return (
    <div className="w-full relative" ref={dropdownRef}>
      <div className="w-full" onClick={toggleDropdown}>
        {triggerEl}
      </div>

      <div
        onClick={toggleDropdown}
        className={`bg-white border-2 border-peach text-peach z-10 rounded-[10px] absolute  w-full max-h-[320px] overflow-y-auto transition-all min-w-max top-full right-0 translate-y-1 ${
          isOpen ? "" : "pointer-events-none opacity-0"
        }`}>
        {children}
      </div>
    </div>
  );
}
