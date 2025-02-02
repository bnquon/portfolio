"use client";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface LetterPullupProps {
  className?: string;
  words: string;
  delay?: number;
}

export default function LetterPullup({
  className,
  words,
  delay,
}: LetterPullupProps) {
  const letters = words.split("");

  const pullupVariant = {
    initial: { y: 50, opacity: 0 },
    animate: (i: any) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * (delay ? delay : 0.05), // By default, delay each letter's animation by 0.05 seconds
      },
    }),
  };

  const underlineReveal = {
    initial: { width: 0 },
    animate: {
      width: "100%",
      transition: {
        duration: 1,
        ease: "easeInOut",
        delay: 0.75,
      },
    },
  };

  return (
    <div className="flex w-fit relative pb-3 overflow-hidden">
      <motion.div
        variants={underlineReveal}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="w-full h-1 absolute bottom-0 bg-[#E0B0FF]"
      ></motion.div>

      {letters.map((letter, i) => (
        <motion.h1
          key={i}
          variants={pullupVariant}
          initial="initial"
          whileInView="animate"
          custom={i}
          viewport={{ once: true }}
          className={cn(
            "font-display font-semibold drop-shadow-sm text-5xl xl:text-6xl text-white",
            className
          )}
        >
          {letter === " " ? <span>&nbsp;</span> : letter}
        </motion.h1>
      ))}
    </div>
  );
}
