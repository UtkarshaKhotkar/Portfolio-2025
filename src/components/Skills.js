import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Blocks, Wrench, Database } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      skills: ['React', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3']
    },
    {
      title: 'Backend',
      icon: Server,
      color: 'text-green-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      skills: ['Node.js', 'Express.js', 'Python', 'REST APIs']
    },
    {
      title: 'Blockchain',
      icon: Blocks,
      color: 'text-purple-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      skills: ['Solidity', 'Hardhat', 'Web3.js', 'Ethereum', 'ICP', 'Smart Contracts']
    },
    {
      title: 'Database',
      icon: Database,
      color: 'text-orange-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      skills: ['MySQL', 'MongoDB', 'SQL Server']
    },
    {
      title: 'Tools',
      icon: Wrench,
      color: 'text-red-500',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman', 'Docker']
    }
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
    <section id="skills" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-max">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Technologies
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A comprehensive toolkit for building modern web applications and blockchain solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="card p-6"
              >
                <div className={`w-16 h-16 ${category.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                  <category.icon className={`w-8 h-8 ${category.color}`} />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: skillIndex * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-700 dark:hover:text-primary-300 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;