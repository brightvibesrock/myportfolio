"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import TabButton from "./TabButton";
// import resume from "../../../public/images/Resume.pdf"

const HeroSection = () => {
  return (
    <section className="md:py-24">
      <div className="mt-4 md:mt-0 text-left flex flex-col h-full">

      <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center top-0 mt-4">
     
     <div className="rounded-full; object-fit: cover;">
       <Image
         src="/images/JennyCircle.png"
         alt="jenny image"
         width={250}
         height={250}
         top={0}
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
          <h1 className="text-white mb-4 text-2xl sm:text-3xl lg:text-4xl lg:leading-normal font-black">
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
                " energized when collective TRUST within a team fuels a sense of shared purpose."
              ]}
              wrapper="span"
              speed={50}
              repeat={0}
            />
          </h1>
          <p className="text-[#ADB7BE] sm:text-xl mb-6 lg:text-2xl py-0.5">
            I lead teams that deliver platform capabilities that help internal software engineering organizations to build performant, stable, and reliable digital experiences for their customers. 

            I am passionate about a new venture called NIFTY (Neat Innovations For Transforming You). I am partnering with the Maine Department of Labor to develop a curriculum that trains individuals with disabilities to create personal marketing platforms for job seekers. In today's job market, having an online presence is essential to landing interviews. I am excited to help this workforce develop the skills needed to succeed in helping others.
          </p>
          <div>
            <Link
              href="/#projects"
              className="px-6 inline-block py-3 w-full sm:w-fit text-2xl font-bold rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3">
              Projects
            </Link>
            <Link
              href="Resume.pdf"  target= "blank"
              className="px-1 inline-block py-0.5 w-full sm:w-fit text-2xl rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-0.5">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
       d
      </div>
    </section>

    
  );
};

export default HeroSection;
