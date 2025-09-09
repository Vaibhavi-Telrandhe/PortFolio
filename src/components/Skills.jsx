import React from 'react';
import { skillsData } from '../data/skillsData';

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I use to create modern digital experiences
          </p>
        </div>

        {/* 2x2 Grid for Categories like in the image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillsData.map((categoryData, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-white/10 backdrop-blur-sm bg-white/5"
            >
              <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                {categoryData.category}
              </h3>

              <div className="grid grid-cols-3 sm:grid-cols-3 gap-6">
                {categoryData.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center text-white p-4 rounded-xl border border-white/10 transition-transform duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500"
                  >
                    <div className="mb-3">{skill.icon}</div>
                    <p className="text-sm text-center">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
