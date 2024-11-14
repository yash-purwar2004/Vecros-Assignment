"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../lib/utils.js";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  wordsPerLine = 4 // Number of words before breaking the line
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  // Group words into chunks based on the specified wordsPerLine
  const chunkedWords = [];
  for (let i = 0; i < wordsArray.length; i += wordsPerLine) {
    chunkedWords.push(wordsArray.slice(i, i + wordsPerLine).join(" "));
  }

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {chunkedWords.map((line, idx) => (
          <div key={idx}> {/* Adds a margin between lines */}
            {line.split(" ").map((word, idx) => (
              <motion.span
                key={word + idx}
                className="dark:text-white text-black opacity-0"
                style={{
                  filter: filter ? "blur(10px)" : "none",
                }}
              >
                {word}{" "}
              </motion.span>
            ))}
          </div>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}  style={{ fontFamily: "'Roboto', sans-serif" }}>
      <div>
        <div className="dark:text-white text-black text-6xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
