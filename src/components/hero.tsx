"use client";
import { useRouter } from "next/navigation"; // Import the useRouter hook
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { GoogleGeminiEffect } from "./ui/google-gemini-effect";

export function GoogleGeminiEffectDemo() {
  const router = useRouter(); // Initialize the router
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Setting up path lengths based on scroll progress
  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  // Button click handler to navigate to /Login
  const handleLoginClick = () => {
    router.push("/Login"); // Use router.push to navigate to the Login page
  };

  return (
    <div className="relative h-[400vh] bg-black w-full dark:border dark:border-white/[0.1] rounded-md pt-40 overflow-clip" ref={ref}>
      {/* Login Button */}
      <button
        onClick={handleLoginClick}
        className="absolute top-4 right-4 bg-blue-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
      >
        Login
      </button>

      {/* Google Gemini Effect */}
      <GoogleGeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
      />
    </div>
  );
}
