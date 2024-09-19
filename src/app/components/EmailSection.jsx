"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/images/github-icon.svg";
import LinkedinIcon from "../../../public/images/linkedin-icon.svg";
import MailIcon from "../../../public/images/gmail.png"
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
 

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-8 gap-4 relative border border-l-transparent border-b-transparent border-r-transparent"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Contact Info
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          Whether you have a question or just want to say hi, I&apos;ll
            get back to you!
        </p>
        <div className="socials flex flex-row">
          <Link href="https://github.com/brightvibesrock/brightvibes/">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/jenniferdolan/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link href="https://veilmail.io/myobfuscatedemail">
            <Image src={MailIcon} alt="Mail Icon" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;