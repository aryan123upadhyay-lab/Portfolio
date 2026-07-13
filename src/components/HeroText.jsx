import aryan from "../assets/aryan.png";<div className="hidden lg:flex justify-center items-center">
  <img
    src={aryan}
    alt="Aryan Upadhyay"
    className="w-[450px] drop-shadow-[0_0_40px_rgba(168,85,247,0.8)] animate-float"
  />
</div>
import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = [
    "Creative",
    "Modern",
    "Interactive",
    "Responsive",
    "UI/UX",
    "Frontend",
  ];

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="hidden flex-col md:flex c-space">
        <motion.h1
  className="font-bold"
  variants={variants}
  initial="hidden"
  animate="visible"
  transition={{ delay: 1 }}
>
  <span className="block text-3xl md:text-4xl font-medium text-white mb-2">
    Hi, I'm
  </span>

  <span className="animated-name block text-6xl md:text-8xl lg:text-9xl font-extrabold">
    Aryan Upadhyay
  </span>

  <span className="inline-block ml-3 text-4xl animate-bounce">
    👋
  </span>
</motion.h1>

        <div className="flex flex-col items-start">
          <motion.p
            className="text-4xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            UI/UX Designer <br />
            Frontend , Developer ,
             Trader
          </motion.p>

          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-black text-white text-8xl"
            />
          </motion.div>

          <motion.p
            className="text-4xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Designing Premium Digital Experiences
          </motion.p>

          <motion.p
            className="mt-6 max-w-2xl text-lg text-neutral-400"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2 }}
          >
            Passionate about creating modern, interactive and user-friendly
            digital experiences with React, Three.js, Tailwind CSS and
            beautiful UI/UX design.
          </motion.p>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col space-y-6 md:hidden">
        <motion.p
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I'm Aryan Upadhyay 👋
        </motion.p>

        <div>
          <motion.p
            className="text-5xl font-black bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            UI/UX Designer
          </motion.p>

          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
  words={words}
  className="font-bold text-7xl bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent"
/>
          </motion.div>

          <motion.p
            className="text-4xl font-black bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Frontend Developer
          </motion.p>

          <motion.p
            className="mt-4 text-base text-neutral-400"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2 }}
          >
            Creating modern and engaging digital experiences with creativity,
            clean code and intuitive design.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;