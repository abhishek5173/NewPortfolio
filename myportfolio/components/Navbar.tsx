"use client";
import { Github } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Cover } from "./ui/cover";

export default function Navbar() {
  const [isopen, setisopen] = useState(false);

  const togglemenu = () => {
    setisopen(!isopen);
  };

  const closeMenu = () => {
    setisopen(false);
  };

  return (
    <div className="w-full h-16 bg-black text-white flex justify-center items-center gap-4 z-50">
      <div className="flex justify-between items-center h-16 w-5/6">
        <div>
          <Link className="font-sans sm:text-3xl text-2xl font-thin" href="/">
            <Cover className="text-white"> abhishek.dev</Cover>
          </Link>
        </div>
        <div className="block md:hidden">
          <button
            onClick={togglemenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex space-x-5 font-sans text-md font-thin lg:text-xl">
          <Cover className="text-white">
            <Link href="/about">About</Link>
          </Cover>
          <Cover className="text-white">
            <Link href="/projects">Projects</Link>
          </Cover>
          <Cover className="text-white">
            <Link href="/skills">Skills</Link>
          </Cover>
          <a
            target="blank"
            className=" text-white backdrop-blur-sm border border-white rounded-full hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] text-sm transition duration-200"
            href="mailto:rambopranjal63@gmail.com"
          >
            <Cover className="text-white text-sm py-1">
              &lt;Contact Me&#47;&gt;
            </Cover>
          </a>
        </div>
      </div>
      <div
        className={`${
          isopen ? "block" : "hidden"
        } absolute top-16 left-0 w-full bg-black md:hidden flex flex-col items-center py-4 space-y-4 z-10`}
      >
        <Link href="/about" className="text-white" onClick={closeMenu}>
          About
        </Link>
        <Link href="/projects" className="text-white" onClick={closeMenu}>
          Projects
        </Link>
        <Link href="/skills" className="text-white" onClick={closeMenu}>
          Skills
        </Link>
        <a
            target="blank"
            className=" text-white backdrop-blur-sm border border-white rounded-full hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] text-sm transition duration-200"
            href="mailto:rambopranjal63@gmail.com"
            onClick={closeMenu}
          >
            <Cover className="text-white text-sm">
              &lt;Contact Me&#47;&gt;
            </Cover>
          </a>
      </div>

      {/* Github Link */}
      <Link
        className="hover:scale-125"
        href="https://github.com/abhishek5173"
        target="blank"
      >
        <Github />
      </Link>
    </div>
  );
}
