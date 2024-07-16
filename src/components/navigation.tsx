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
const barClassName = "w-[25px] h-[1.5px] bg-white my-[3px] ";
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
      className={cn(
        " grid grid-cols-1 grid-rows-1 justify-items-center text-white ",
        noto.className,
      )}
    >
      <motion.ul
        animate={{
          opacity: isOpen ? 100 : 0,
          display: isOpen ? "flex" : "none",
          height: isOpen ? "38rem" : "0",
          width: isOpen ? "100%" : "90%",
        }}
        initial={{
          opacity: 0,
          display: "none",
          height: 0,
          width: "90%",
        }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-0  hidden w-full flex-col  gap-3
        rounded-md bg-primary/95 px-12 py-6 text-2xl text-primary-foreground"
      >
        {navItems.map((item, index) => (
          <div className="flex w-full flex-col items-end " key={index}>
            <Link className=" " href={""}>
              {item}
            </Link>
            <div className="mt-4 h-[1px] w-full bg-white/50" />
          </div>
        ))}
      </motion.ul>
      <div className=" fixed bottom-0 flex w-full items-center  justify-between bg-primary px-4 py-2 ">
        <Logo />
        <div
          className="flex h-[50px] w-[80px] cursor-pointer flex-col items-center justify-center md:hidden "
          onClick={toggleOpen}
        >
          <motion.div
            className={barClassName}
            animate={{
              rotate: isOpen ? 45 : 0,
              y: isOpen ? 7 : 0,
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
              y: isOpen ? -7 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
