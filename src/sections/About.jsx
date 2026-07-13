import  Aryan from "../assets/aryan.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import Frameworks from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  const imageRef = useRef(null);

const { scrollYProgress } = useScroll({
  target: imageRef,
  offset: ["start end", "center center"],
});

const y = useTransform(scrollYProgress, [0, 1], [-250, 0]);
const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  return (
    <section className="c-space section-spacing pt-8 md:pt-0" id="about"> 
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-6 mt-16 md:mt-12 md:grid-cols-6 md:auto-rows-[18rem]">
        {/* Grid 1 */}
      
<div className="relative flex flex-col items-center justify-center md:justify-end grid-default-color grid-1 overflow-hidden py-8" >

  {/* Background Glow */}
  <motion.div
    className="absolute w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full bg-violet-600/20 blur-[80px]"
    animate={{
      scale: [1, 1.08, 1],
      opacity: [0.4, 0.7, 0.4],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  {/* Circular Profile */}
  <motion.div
    ref={imageRef}
    style={{ y, opacity, scale }}
    whileHover={{
      rotateX: 8,
      rotateY: -8,
      scale: 1.05,
    }}
    transition={{
      type: "spring",
      stiffness: 160,
    }}
   className="relative mt-10 w-40 h-40 sm:w-52 sm:h-52 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full p-[5px] overflow-visible"
  >

    {/* Animated Border */}
    <motion.div
      className="absolute inset-0 rounded-full"
      animate={{ rotate: 360 }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        background:
          "conic-gradient(from 0deg,#8b5cf6,#06b6d4,#ec4899,#8b5cf6)",
      }}
    />

    <div className="absolute inset-[4px] rounded-full overflow-hidden bg-black">

      <motion.img
        src={Aryan}
        alt="Aryan Upadhyay"
         className= "w-full h-full object-cover object-top scale-105"
      />  

      {/* Glass Shine */}
      <motion.div
        className="absolute top-0 -left-32 h-full w-20 bg-white/20 blur-xl rotate-12"
        animate={{ x: [-150, 450] }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          repeatDelay: 2,
        }}
      />

      {/* Floating Particle */}
      <motion.div
        className="absolute -top-4 -right-4 w-5 h-5 rounded-full bg-violet-400 blur-lg"
        animate={{
          y: [0, -12, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />       <motion.div
        className="absolute bottom-6 left-6 w-4 h-4 rounded-full bg-cyan-400 blur-md"
        animate={{
          y: [0, 12, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />

    </div>
  </motion.div>

  {/* Text */}
  <div className="relative z-10 mt-8 px-6 pb-6 text-center">

    <motion.h3
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-2xl md:text-3xl font-extrabold"
    >
      Hi, I'm{" "}
      <span
        className="
        bg-gradient-to-r
        from-violet-400
        via-fuchsia-400
        to-cyan-400
        bg-clip-text
        text-transparent
        drop-shadow-[0_0_20px_rgba(168,85,247,0.8)]
      "
      >
        Aryan Upadhyay
      </span>
    </motion.h3>

    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="mt-4 text-neutral-300 text-sm md:text-base leading-7 max-w-md mx-auto"
    >
      Passionate about UI/UX Design, Frontend Development,
      Digital Marketing, Public Speaking, AI and Financial Markets.
      I enjoy creating premium digital experiences that combine
      creativity, clean design and modern technology.
    </motion.p>

  </div>

  <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo-950" />

</div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              DESIGN IS INTELLIGENCE .
              CODE IS CREATIVITY.
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="Certificates"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="RESUME"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Projects"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Design Principles"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="SRP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/csharp-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/dotnet-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/blazor-pink.png"
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in UTTAR PRADESH, and open to remote work worldwide
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Teck Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools taht
              allow me to build robust and scalable applications, Websites
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
