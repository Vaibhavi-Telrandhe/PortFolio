import React from 'react';
import { GraduationCap, Calendar, Star } from 'lucide-react';
import { educationData } from '../data/educationData';

const Education = () => {
  return (
    <section id="education" className="py-16 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My academic journey and achievements
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                </div>
                <div className="flex-grow bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold">{edu.degree}</h3>
                      <p className="text-purple-300 text-lg">{edu.school}</p>
                    </div>
                    <div className="flex items-center space-x-4 mt-2 md:mt-0">
                      <span className="flex items-center space-x-1 px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.year}</span>
                      </span>
                      <span className="flex items-center space-x-1 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-sm">
                        <Star className="w-4 h-4" />
                        <span>{edu.gpa}</span>
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{edu.description}</p>
                </div>
              </div>
              {index < educationData.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-8 bg-gradient-to-b from-purple-600 to-pink-600"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;