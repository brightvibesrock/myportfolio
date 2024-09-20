"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "NIFTY STUFF",
    value: "9",
    
  },
  {
    metric: "My Tech Stack",
    value: "30",
    postfix: "+",
  },
  {
    metric: "Cloud Platforms",
    value: "3",
    postfix: "+",
  },
  {
    metric: "Years Experience",
    value: "15",
    postfix: "+",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-2 px-4 sm:gap-2 md:py-8 lg:px-8">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-3xl font-bold flex flex-row justify-center">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  transitions={(index) => ({
                    type: "spring",
                    duration: index + 0.3,
                  })}
                  className="text-white text-3xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
