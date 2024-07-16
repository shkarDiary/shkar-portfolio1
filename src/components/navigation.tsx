"use client";
import { noto } from "@/app/fonts";
import Logo from "./logo";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import useMediaQuery from "@/hooks/useMediaQuery";

const navItems = [
  "سەرەکی",
  "هەواڵ",
  "راپۆرت",
  "شیکردنەوە",
  "بیروڕا",
  "بەرنامەکان",
  "گەلەری",
  "وەرزش",
];
const barClassName = "w-[35px] h-[5px] bg-white my-[4px] ";
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const size = useMediaQuery();

  const toggleOpen = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (size === "lg") {
      setIsOpen(true);
    }
  }, [size]);

  return (
    <nav
      className="fixed bottom-0 flex w-screen flex-col  gap-6 overflow-hidden bg-primary px-8 py-4 text-white
    md:static md:bottom-auto md:h-32 md:flex-row md:items-center md:justify-around md:px-12 "
    >
      <div className="flex justify-between ">
        <Logo />
        <div
          className="flex h-[50px] w-[80px] cursor-pointer flex-col items-center justify-center md:hidden "
          onClick={toggleOpen}
        >
          <motion.div
            className={barClassName}
            animate={{
              rotate: isOpen ? 45 : 0,
              y: isOpen ? 13 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className={barClassName}
            animate={{
              opacity: isOpen ? 0 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className={barClassName}
            animate={{
              rotate: isOpen ? -45 : 0,
              y: isOpen ? -13 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
      <motion.div
        animate={{
          opacity: isOpen ? 100 : 0,
          display: isOpen ? "flex" : "none",
          height: isOpen ? "55vh" : "0",
        }}
        initial={{
          opacity: 0,
          display: "none",
          height: 0,
        }}
        transition={{ duration: 0.3 }}
        className={cn(
          `w-full flex-col items-center space-y-6 overflow-hidden text-center
          text-2xl md:w-auto  md:flex-row-reverse md:gap-8 md:space-y-0 md:text-3xl `,
          noto.className,
        )}
      >
        {navItems.map((item, index) => (
          <Link className="" href={""} key={index}>
            {item}
          </Link>
        ))}
      </motion.div>
    </nav>
  );
}

export default Navigation;
