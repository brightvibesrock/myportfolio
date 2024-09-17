"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Photography",
    description: "This is a travel mosaic of some cool photos!",
    image: "/images/project_1.jpeg",
    tag: ["All NIFTI", "Web Projects"],
    gitUrl: "https://github.com/brightvibesrock/image-gallery-starter",
    previewUrl: "https://image-gallery-starter-git-main-brightvibesrocks-projects.vercel.app/",
  },
  {
    id: 2,
    title: "Matrix Rain",
    description: "Fun animation using Canva and HTML5.",
    image: "/images/project_2.png",
    tag: ["All NIFTI", "Web Projects"],
    gitUrl: "https://github.com/brightvibesrock/neorain",
    previewUrl: "https://brightvibesrock.github.io/neorain/",
  },
  {
    id: 3,
    title: "ReactJS, Foundations",
    description: "This is a beginner tutorial of a reactjs ToDoList app.",
    image: "/images/project_3.png",
    tag: ["All NIFTI", "Web Projects"],
    gitUrl: "https://github.com/brightvibesrock/reactjs-todo-101",
    previewUrl: "https://brightvibesrock-todolist.netlify.app/",
  },
  {
    id: 4,
    title: "Resume Template",
    description: "This a great resume template, huge thanks to beyondcodebootcamp.",
    image: "/images/project_4.png",
    tag: ["All NIFTI", "Web Projects"],
    gitUrl: "https://github.com/brightvibesrock/myresume",
    previewUrl: "https://brightvibesrock.github.io/myresume/",
  },
  {
    id: 5,
    title: "Github Readme Streak Stats",
    description: "Elevate your github readme profile with some cool stats!",
    tag: ["All NIFTI", "Web Projects"],
    image: "/images/project_5.png",
    gitUrl: "https://github.com/brightvibesrock/github-readme-streak-stats",
    previewUrl: "https://github.com/brightvibesrock/brightvibes/blob/main/README.md/",
  },
  {
    id: 6,
    title: "Lorem Ipsum Hamburger",
    description: "Bacon ipsum dolor amet hamburger salami landjaeger ham beef ribs. Chislic meatball venison buffalo rump. Boudin pancetta bacon biltong, sausage pig doner kevin shank.",
    image: "/images/project_6.png",
    tag: ["All NIFTI", "Web Projects"],
    gitUrl: "tbd",
    previewUrl: "https://finvestsnu.vercel.app/",
  },
  {
    id: 7,
    title: "Lorem Impsum Bacon",
    description: "Bacon ipsum dolor amet hamburger salami landjaeger ham beef ribs. Chislic meatball venison buffalo rump. Boudin pancetta bacon biltong, sausage pig doner kevin shank.",
    image: "/images/project_7.png",
    tag: ["All NIFTI", "Other Projects"],
    gitUrl: "tbd",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Lorem Ipsum Pancetta",
    description: "Bacon ipsum dolor amet hamburger salami landjaeger ham beef ribs. Chislic meatball venison buffalo rump. Boudin pancetta bacon biltong, sausage pig doner kevin shank.",
    image: "/images/project_8.jpg",
    tag: ["All NIFTI", "Other Projects"],
    gitUrl: "tbd",
    previewUrl: "https://drive.google.com/file/d/1OpNc-y5iGxpcQm_SUkthlCeZW4t91YMD/view?usp=drivesdk",
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All NIFTI");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Neat Innovation For Technology and Interests (NIFTI)
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-1 py-6">
        <ProjectTag 
          onClick={handleTagChange}
          name="All NIFTI"
          isSelected={tag === "All NIFTI"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web Projects"
          isSelected={tag === "Web Projects"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Other Projects"
          isSelected={tag === "ML Projects"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
