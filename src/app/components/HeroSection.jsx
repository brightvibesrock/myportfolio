"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import TabButton from "./TabButton";
// import resume from "../../../public/images/Resum.pdf"

const HeroSection = () => {
  return (
    <section className="lg:py-24">
      <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
        
      <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4"
  
        >
          <div className="rounded-full bg-[white] w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] relative">
            <Image
              src="/images/JennyCircle.png"
              alt="jenny image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={500}
              height={400}
            />
          </div>
        </motion.div>
        <br></br>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-4xl lg:text-4xl lg:leading-normal font-extrabold">
            <span className="text-white bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m  {" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Jenny Dolan.",
                2000,
                " a deep work enthusiast and flow state obsessed.",
                2000,
                " a believer in focused product work and team empowerment.",
                2000,
                " energized when TRUST within a team fuels a greater sense of shared purpose."
              ]}
              wrapper="span"
              speed={50}
              repeat={0}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          I have 15+ years as a technical leader with a successful track record in delivering platform capabilities which enable software engineering organizations to deliver performant, stable, and reliable experiences into the hands of digital customers. I love all things NIFTI. NIFTI stands for Neat Innovation For Technology and Interesting Things! A super catchy acronym that embodies the spirit of cutting-edge and engaging developments in technology.
          </p>
          <div>
            <Link
              href="/#projects"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3">
              NIFTI Stuff
            </Link>
            <Link
              href="Resume.pdf"  target="_blank"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
       
      </div>
    </section>

    
  );
};

export default HeroSection;