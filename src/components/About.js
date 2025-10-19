import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Blocks, Cpu, GitBranch, Figma } from 'lucide-react';

const About = () => {
  const technologies = [
    { name: 'React', icon: Code, color: 'text-blue-500' },
    { name: 'Node.js', icon: Cpu, color: 'text-green-500' },
    { name: 'Solidity', icon: Blocks, color: 'text-purple-500' },
    { name: 'MySQL', icon: Database, color: 'text-orange-500' },
    { name: 'Python', icon: Code, color: 'text-yellow-500' },
    { name: 'Git', icon: GitBranch, color: 'text-red-500' },
    { name: 'Figma', icon: Figma, color: 'text-pink-500' },
    { name: 'Hardhat', icon: Blocks, color: 'text-indigo-500' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-max">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <div className="card p-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  My Journey
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  I am an undergraduate student pursuing a Bachelor of Technology (B.Tech) in Information Technology.
                  I specialize in building intuitive frontends and decentralized web applications 
                  that integrate blockchain, AI, and real-world systems.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  My passion lies in creating digital solutions that bridge the gap between 
                  complex technology and user-friendly experiences. I believe in the power 
                  of clean code, innovative design, and emerging technologies to solve 
                  real-world problems.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm">
                    Frontend Developer
                  </span>
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm">
                    SQL Developer
                  </span>
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm">
                    Full Stack Developer
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="card p-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Technologies I Work With
                </h3>
                <div className="grid grid-cols-4 gap-4">
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="flex flex-col items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-white dark:hover:bg-gray-600 transition-all duration-300 cursor-pointer"
                    >
                      <tech.icon className={`w-8 h-8 ${tech.color} mb-2`} />
                      <span className="text-xs text-gray-600 dark:text-gray-300 text-center">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;