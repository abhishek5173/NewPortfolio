import { Cover } from "@/components/ui/cover";

export default function about() {
  return (
    <div className="bg-black w-screen h-[calc(100vh-4rem)] overflow-auto">
      <div className="lg:pt-52 pt-40 pl-10 md:text-3xl text-lg font-thin">
        <Cover className="text-white font-extrabold text-5xl lg:text-6xl font-mono">
          About Me
        </Cover>
        <div className="w-5/6">
          <p className="text-white">
            Hello! I&apos;m Abhishek Kumar, a passionate,dedicated and budding
            software developer excited to dive into the world of tech. I&apos;m new
            to the industry but have been passionately learning and working with
            Frontend/Backend.
          </p>
          <p className="text-white pt-3">
            I am a skilled Full Stack Developer proficient in JavaScript, React,
            Node.js, Express.js, and MongoDB. With a keen eye for detail and a
            passion for crafting seamless user experiences, I specialize in
            utilizing Tailwind CSS to create visually stunning and responsive
            web applications. My goal is to deliver high-quality solutions that
            not only meet client needs but also elevate their online presence
            and drive growth.
          </p>
        </div>
      </div>
    </div>
  );
}
