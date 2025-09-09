import React from 'react';
import { personalData } from '../data/personalData';
import { scrollToSection } from '../utils/scrollUtils';

const About = () => {
  return (
    <section id="about" className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                {personalData.name}
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-6 leading-relaxed">
              {personalData.title}
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              {personalData.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get In Touch
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="border-2 border-purple-500 hover:bg-purple-500 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                View My Work
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 rounded-full animate-pulse"></div>
              <img
                src={personalData.profileImage}
                alt={personalData.name}
                className="absolute inset-4 w-72 h-72 rounded-full object-cover border-4 border-white/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;