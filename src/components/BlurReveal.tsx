"use client";

import { motion } from "framer-motion";

interface BlurRevealProps {
  text: string;
  className?: string;
  delay?: number;
  /** Her kelimeyi alt satıra al (block) */
  block?: boolean;
  /** Kelime sonundaki nokta (.) için ekstra sınıf (örn. text-zinc-400) */
  accentClassName?: string;
}

const wordVariants = {
  hidden: {
    opacity: 0,
    filter: "blur(10px)",
    y: 20,
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
  },
};

export function BlurReveal({
  text,
  className = "",
  delay = 0,
  block = false,
  accentClassName,
}: BlurRevealProps) {
  const words = text.trim().split(/\s+/);

  const renderWord = (word: string) => {
    const last = word.slice(-1);
    if (accentClassName && (last === "." || last === ",")) {
      return (
        <>
          {word.slice(0, -1)}
          <span className={accentClassName}>{last}</span>
        </>
      );
    }
    return word;
  };

  const Wrapper = block ? motion.div : motion.span;
  const Child = block ? motion.div : motion.span;

  return (
    <Wrapper
      className={block ? `flex flex-col ${className}` : className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: delay,
          },
        },
      }}
    >
      {words.map((word, index) => (
        <Child
          key={`${word}-${index}`}
          className={block ? "block" : "inline-block"}
          variants={wordVariants}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {block ? renderWord(word) : index < words.length - 1 ? `${word} ` : renderWord(word)}
        </Child>
      ))}
    </Wrapper>
  );
}
