"use client";
import { noto } from "@/app/fonts";
import Logo from "./logo";
import NavBtn from "./nav-btn";
import { useState } from "react";
import { motion } from "framer-motion";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex flex-col gap-6 px-8 py-4 ">
      <div className="flex justify-between">
        <Logo />
        <NavBtn onClick={() => setIsOpen(!isOpen)} />
      </div>
      <ul
        className={`${noto.className} ${isOpen ? "block" : "hidden"}  space-y-4 text-center text-xl md:flex`}
      >
        <li>سیاسی</li>
        <li>کۆمەڵایەتی</li>
        <li>وتار</li>
      </ul>
    </nav>
  );
}

export default Navigation;
