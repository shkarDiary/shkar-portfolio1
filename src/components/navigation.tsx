"use client";
import { noto } from "@/app/fonts";
import Logo from "./logo";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

const navItems = [
  "هەواڵ",
  "راپۆرت",
  "شیکردنەوە",
  "بیروڕا",
  "بەرنامەکان",
  "گەلەری",
  "وەرزش",
];
const barClassName = "w-[35px] h-[5px] bg-black my-[4px] ";
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <nav className="flex flex-col justify-center gap-6 px-8 py-4 ">
      <div className="flex justify-between">
        <Logo />
        <div
          className="cursor-pointer0 flex h-[50px] w-[80px] flex-col items-center justify-center "
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
      <motion.ul
        animate={{
          opacity: isOpen ? 100 : 0,
          display: isOpen ? "block" : "none",
        }}
        transition={{ duration: 0.3 }}
        className={cn(
          `container hidden space-y-6 text-center text-2xl md:flex`,
          noto.className,
        )}
      >
        {navItems.map((item, index) => (
          <Link className="block" href={""} key={index}>
            {item}
          </Link>
        ))}
      </motion.ul>
    </nav>
  );
}

export default Navigation;
