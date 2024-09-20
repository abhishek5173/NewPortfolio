import { Cover } from "@/components/ui/cover";
import {
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black w-screen h-[calc(100vh-4rem)]">
      <div className="px-6 sm:px-20 pt-64 lg:pt-60 text-white lg:text-8xl text-4xl sm:text-5xl">
        <h1 className="font-extrabold">hi</h1>
        <h1 className="font-thin">
          my name is <span className="font-extrabold">abhishek</span>
        </h1>
        <h1 className="font-thin">
          a{" "}
          <Cover>
            <span className="font-extrabold">engineer</span>
          </Cover>{" "}
          &{" "}
          <span>
            &lt;
            <Cover>
              <span className="font-mono font-extrabold">developer</span>
            </Cover>
            &#47;&gt;
          </span>
        </h1>
        <div className="flex items-center gap-10 mt-8">
          <Link
            target="blank"
            className="hover:scale-125"
            href="https://x.com/abhish_ek27"
          >
            <TwitterIcon />
          </Link>
          <Link
            target="blank"
            className="hover:scale-125"
            href="https://www.instagram.com/abhishekk._27/"
          >
            <InstagramIcon />
          </Link>
          <Link
            target="blank"
            className="hover:scale-125"
            href="https://www.linkedin.com/in/abhishek-kumar-103793225"
          >
            <LinkedinIcon />
          </Link>
         <a
            target="blank"
            className="font-extrabold px-2 py-2 text-white backdrop-blur-sm border border-white rounded-full hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] text-sm transition duration-200"
            href="https://drive.google.com/file/d/1BTkOVs5HVx6qeMF-wDpFmsrrbkSktyyj/view?pli=1"
          >
            <Cover className="text-white text-lg">&lt;View Resume&#47;&gt;</Cover>
          </a>
    

        </div>
      </div>
    </div>
  );
}



