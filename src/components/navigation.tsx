"use client";
import { noto } from "@/app/fonts";
import Logo from "./logo";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import useMediaQuery from "@/hooks/useMediaQuery";
import ArrowBack from "@mui/icons-material/ArrowBackIosNew";

const navItems = [
  { name: "سەرەکی", drawer: null },
  { name: "هەواڵ", drawer: ["جیهان", "کوردستان"] },
  { name: "راپۆرت", drawer: ["جیهان", "کوردستان"] },
  { name: "شیکردنەوە", drawer: null },
  { name: "بیروڕا", drawer: null },
  { name: "بەرنامەکان", drawer: ["جیهان", "کوردستان"] },
  { name: "گەلەری", drawer: null },
  { name: "وەرزش", drawer: ["جیهان", "کوردستان"] },
];
const barClassName = "w-[25px] h-[1.5px] bg-white my-[3px] ";
function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerItem, setDrawerItem] = useState<string[] | null>([]);

  const size = useMediaQuery();

  const toggleOpen = () => setIsNavOpen(!isNavOpen);

  useEffect(() => {
    if (size === "lg") {
      setIsNavOpen(true);
    }
  }, [size]);

  return (
    <nav
      className={cn(
        "grid grid-cols-1 grid-rows-1 justify-items-center text-white ",
        noto.className,
      )}
    >
      <div
        className="fixed bottom-0 w-full
          "
      >
        <motion.div
          animate={{
            opacity: isNavOpen && !isDrawerOpen ? 100 : 0,
            display: isNavOpen && !isDrawerOpen ? "flex" : "none",
            height: isNavOpen ? "36rem" : "0",
            width: isNavOpen ? "100%" : "90%",
            scale: isNavOpen ? 1 : 0.8,
            translateX: isDrawerOpen ? "100%" : "0",
          }}
          initial={{
            opacity: 0,
            display: "none",
            height: 0,
            width: "90%",
            scale: 1,
          }}
          transition={{ duration: 0.3 }}
          className="hidden w-full flex-col  gap-3
          rounded-md bg-primary/95 px-12 py-6 text-xl text-primary-foreground"
        >
          {navItems.map((item, index) => (
            <div
              className="flex w-full flex-col items-end "
              onClick={() => {
                setIsDrawerOpen((prev) => !prev);
                setDrawerItem(item.drawer);
              }}
              key={index}
            >
              <Link
                className="flex w-full flex-row-reverse justify-between "
                href={""}
              >
                <span>{item.name}</span>
                {item.drawer ? (
                  <ArrowBack className="ml-2 text-white " />
                ) : null}
              </Link>
              <div className="mt-4 h-[1px] w-full bg-white/50" />
            </div>
          ))}
        </motion.div>
        <motion.div
          className=" mb-16  w-full
          flex-col gap-3 rounded-md bg-primary/95 px-12 py-6 text-xl text-primary-foreground"
          animate={{
            width: isDrawerOpen ? "100%" : "0",
            display: isDrawerOpen ? "flex" : "none",
            translateX: isDrawerOpen ? "0" : "100%",
          }}
          transition={{ duration: 0.3 }}
        >
          {drawerItem?.map((item, index) => (
            <div className="flex w-full flex-col items-end" key={index}>
              <Link className="flex w-full flex-row-reverse  " href={""}>
                <span>{item}</span>
              </Link>
              <div className="mt-4 h-[1px] w-full bg-white/50" />
            </div>
          ))}
        </motion.div>
      </div>
      <div className=" fixed bottom-0 flex w-full items-center  justify-between bg-primary px-4 py-2 ">
        <Logo />
        <div
          className="flex h-[50px] w-[80px] cursor-pointer flex-col items-center justify-center md:hidden "
          onClick={toggleOpen}
        >
          <motion.div
            className={barClassName}
            animate={{
              rotate: isNavOpen ? 45 : 0,
              y: isNavOpen ? 7 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className={barClassName}
            animate={{
              opacity: isNavOpen ? 0 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className={barClassName}
            animate={{
              rotate: isNavOpen ? -45 : 0,
              y: isNavOpen ? -7 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
