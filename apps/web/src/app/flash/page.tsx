"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Progress,
  ProgressBar,
  ProgressIndicator,
} from "@repo/ui/progress-bar";

import { Arrow } from "@repo/ui/arrow";
import Link from "next/link";

const FlashCardsTotal = 12;

export default function Flash() {
  const [flashCardsCount, setFlashCardsCount] = useState(0); // conta quantos cards o usuário respondeu.
  const [shouldShowAnswer, setShouldShowAnswer] = useState(false); // controla visualização resposta

  return (
    <div className="bg-gradient-to-t from-aquamarine-500 to-aquamarine-300 h-screen text-black-950 flex flex-col md:items-center">
      {/* "h-screen" ocupa toda vh */}
      <div className="absolute w-full mt-12 ml-4">
        <Link href="/">
          <Arrow />
        </Link>
      </div>

      <div className="flex-1 flex flex-col self-stretch items-center py-12 px-6">
        <div className="space-y-4">
          <span className="text-xl font-bold leading-heading flex px-8 text-center">
            JavaScript Fundamentals
          </span>

          <Progress max={FlashCardsTotal} now={flashCardsCount}>
            <ProgressBar />
            <ProgressIndicator />
          </Progress>
        </div>

        <div className="relative mt-10 w-full max-w-[420px] min-h-[416px]">
          {/* OBS: no projeto Diego é "absolute", mas ficou dando problema aqui! */}
          <motion.div
            className="rounded-lg relative inset-0 h-full bg-softpeach-50 w-full py-6 px-6 z-20"
            transition={{ duration: 0.4 }}
            animate={
              shouldShowAnswer
                ? {
                    rotateY: 180, // roda o card totalmente (180º)
                  }
                : {}
            }
          />
          <div className="absolute z-30 top-1/2 -translate-y-1/2 w-full text-center px-6">
            {" "}
            {/* inseri px */} {/* edita texto */}
            <AnimatePresence>
              {/* p/ animar um elemento quando sai da tela */}
              {shouldShowAnswer ? (
                <motion.p
                  key="card-result"
                  className="text-black-900 leading-base text-center flex justify-center items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  .map
                </motion.p>
              ) : (
                <motion.p
                  key="card-question"
                  className="text-black-900 leading-base text-center flex justify-center items-center"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  What is the method used to iterate through an array and create
                  a new array of the original, with possible modifications?
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <div className="bg-softpeach-50/60 absolute rounded-lg mx-6 left-4 right-4 h-20 -bottom-4 z-10"></div>
        </div>
      </div>
      {/* "flex-1" empurra o elemento seguinte p/ inferior da vh */}
      <button
        onClick={() => {
          setShouldShowAnswer(true);
          setFlashCardsCount((state) => state + 1);
        }}
        className="bg-pinegreen-50 font-bold py-8 w-full hover: bg-pinegreen-50/90 md:w-[320px] md:mb-16 md:rounded-full md:py-6"
      >
        Reveal Answer
      </button>
    </div>
  );
}
