"use client";
import { noto } from "@/app/fonts";
import Logo from "./logo";
import { useState } from "react";
import { useAnimate } from "framer-motion";
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
  "ئێن ئاڕ تی دوو",
];

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scope, animate] = useAnimate();

  const onNavBtnClick = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      animate([[".top", { rotate: 0, y: 0 }, { duration: 0.5 }]]);
      animate([[".middle", { opacity: 100 }, { duration: 0.2 }]]);
      animate([[".bottom", { rotate: 0, y: 0 }, { duration: 0.5 }]]);
      animate([
        [".container", { opacity: 0, display: "none" }, { duration: 0.6 }],
      ]);
    } else if (!isOpen) {
      animate([[".top", { rotate: 60, y: 6.5 }, { duration: 0.5 }]]);
      animate([[".middle", { opacity: 0 }, { duration: 0.2 }]]);
      animate([[".bottom", { rotate: -60, y: -6.5 }, { duration: 0.5 }]]);
      animate([
        [".container", { opacity: 100, display: "block" }, { duration: 0.6 }],
      ]);
    }
  };

  return (
    <nav ref={scope} className="flex flex-col gap-6 px-8 py-4 ">
      <div className="flex justify-between">
        <Logo />
        <button type="button" title="menu" onClick={onNavBtnClick}>
          <div className="top h-[0.18rem] w-6 bg-black  " />
          <div className="middle my-1 h-[0.18rem] w-6 bg-black " />
          <div className="bottom h-[0.18rem] w-6 bg-black " />
        </button>
      </div>
      <ul
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
      </ul>
    </nav>
  );
}

export default Navigation;
