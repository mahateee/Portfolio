import React from "react";
import AboutTag from "../components/icons/AboutTag";

export default function About() {
  return (
    <section class=" bg-white h-screen sm:h-screen">
      <div class="flex flex-wrap h-full sm:h-screen p-8">
        <div class="w-full object-cover bg-green-900 sm:h-4/12 sm:w-4/12">
          <AboutTag />
        </div>
        <div class="w-full rounded-lg p-16 object-cover bg-[#FACA78] sm:h-8/12 sm:w-8/12">
          <h1 className="MyFont text-7xl">About Me</h1>
          <p className="text-xl py-8">
            I am a dedicated and driven software engineering student with a
            strong passion for web development. With a solid foundation in
            programming and problem-solving, I excel at creating elegant and
            efficient solutions that prioritize user experience. I have a deep
            understanding of various programming languages and web development
            technologies, including HTML, CSS, JavaScript, as well as frameworks
            like React and Node.js. I value collaboration and have experience
            working effectively in team environments, delivering high-quality
            software solutions. Continuously learning and staying up-to-date
            with industry trends, I am committed to expanding my knowledge and
            skills through various learning opportunities.
          </p>
          <p className="text-xl py-8">
            Education: University of Jeddah, bachelor of software engineering -
            2019-present
          </p>
          <p className="text-xl">Courses and Certifications:</p>
          <p className="text-xl ">React Nanodegree , Udacity, 2023</p>
          <p className="text-xl ">Front-End Nanodegree , Udacity, 2023</p>
        </div>
      </div>
    </section>
  );
}
