import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Code, Database, Cpu } from 'lucide-react';

const ProblemSolving = () => {
  const skills = [
    {
      icon: Brain,
      title: 'Algorithmic Thinking',
      description: 'Strong foundation in data structures and algorithms with focus on optimization and efficiency.',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    
    {
      icon: Zap,
      title: 'Competitive Programming',
      description: 'Regular practice on coding platforms to sharpen problem-solving skills and logical thinking.',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20'
    }
  ];

  const platforms = [
    { name: 'LeetCode', problems: '100+', color: 'text-orange-500' },
    { name: 'HackerRank', problems: '50+', color: 'text-green-500' },
   
    { name: 'GeeksforGeeks', problems: '50+', color: 'text-green-600' }
  ];

  const topics = [
    'Arrays & Strings',
    'Linked Lists',
    'Trees & Graphs',
    'Dynamic Programming',
    'Sorting & Searching',
    'Hash Tables',
    'Stack & Queue',
    'Recursion & Backtracking'
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
    <section id="problem-solving" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-max">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Problem Solving
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Strengthening logical thinking through algorithmic challenges and competitive programming
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="card p-6 text-center"
              >
                <div className={`w-16 h-16 ${skill.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <skill.icon className={`w-8 h-8 ${skill.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {skill.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants} className="card p-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Code className="w-6 h-6 text-primary-600" />
                Coding Platforms
              </h3>
              <div className="space-y-4">
                {platforms.map((platform) => (
                  <div key={platform.name} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <span className="font-medium text-gray-900 dark:text-white">
                      {platform.name}
                    </span>
                    <span className={`font-semibold ${platform.color}`}>
                      {platform.problems} solved
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="card p-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Database className="w-6 h-6 text-primary-600" />
                Core Topics
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {topics.map((topic, index) => (
                  <motion.div
                    key={topic}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg text-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 cursor-default"
                  >
                    {topic}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="mt-8">
            <div className="card p-8 text-center">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Cpu className="w-8 h-8 text-primary-600" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Current Focus
                </h3>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Currently preparing for competitive programming contests and technical interviews. 
                Focusing on advanced algorithms, system design, and optimization techniques. 
                Regular practice on multiple platforms to maintain problem-solving sharpness and 
                explore new algorithmic approaches.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full">
                  System Design
                </span>
                <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full">
                  Advanced Algorithms
                </span>
                <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full">
                  Interview Prep
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolving;
