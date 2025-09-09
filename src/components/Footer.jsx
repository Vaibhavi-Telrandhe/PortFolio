import React from 'react';
import { Github, Code, User } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 bg-black/40 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          
          {/* Left: Name & Year */}
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Vaibhavi Telrandhe. All rights reserved.
          </p>

          {/* Right: Social Icons */}
          <div className="flex items-center space-x-6">
            {/* GitHub */}
            <a
              href="https://github.com/Vaibhavi-Telrandhe"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>

            {/* LeetCode */}
            <a
              href="https://leetcode.com/Vaibhavi-Telrandhe"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Code className="w-5 h-5" />
            </a>

            {/* LinkedIn (Fallback Icon: User) */}
            <a
              href="https://www.linkedin.com/in/vaibhavi-telrandhe"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <User className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
