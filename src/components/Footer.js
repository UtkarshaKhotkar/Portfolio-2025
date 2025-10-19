import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/utkarsha',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/utkarsha',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:utkarsha@example.com',
      label: 'Email'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="container-max px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-primary-400 mb-2">Utkarsha</h3>
            <p className="text-gray-400">
              Frontend Developer & Blockchain Innovator
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-all duration-300 group"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
              </motion.a>
            ))}
          </div>

          {/* Back to Top */}
          <div className="text-center md:text-right">
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors duration-300"
            >
              Back to Top
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              Designed & Built by Utkarsha © 2025. All rights reserved.
            </p>
            
            <motion.p 
              className="text-gray-400 text-sm flex items-center gap-1"
              whileHover={{ scale: 1.05 }}
            >
              Made with <Heart className="w-4 h-4 text-red-500" fill="currentColor" /> and lots of ☕
            </motion.p>
          </div>
        </div>

        {/* Additional Links */}
        <div className="mt-6 pt-6 border-t border-gray-800">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <motion.a
              href="#about"
              whileHover={{ color: '#8b5cf6' }}
              className="hover:text-primary-400 transition-colors duration-300"
            >
              About
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ color: '#8b5cf6' }}
              className="hover:text-primary-400 transition-colors duration-300"
            >
              Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ color: '#8b5cf6' }}
              className="hover:text-primary-400 transition-colors duration-300"
            >
              Contact
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ color: '#8b5cf6' }}
              className="hover:text-primary-400 transition-colors duration-300"
            >
              Resume
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;