import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code2, Trophy, Users, Briefcase, BookOpen } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Code2,
      title: 'GirlScript Summer of Code',
      description: 'Active contributor to open-source projects during GSSOC, contributing to multiple repositories and helping build community-driven solutions.',
      color: 'text-pink-500',
      bgColor: 'bg-pink-50 dark:bg-pink-900/20'
    },
    {
      icon: Trophy,
      title: 'Smart Traffic Management System',
      description: 'Developed an innovative hackathon project using IoT sensors and AI algorithms to optimize traffic flow in urban areas.',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      icon: Award,
      title: 'Blockchain & AI Research',
      description: 'Conducted research on integrating blockchain technology with AI systems for enhanced security and transparency in data processing.',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    
    {
      icon: Users,
      title: 'Tech Community Leadership',
      description: 'Organized and led technical workshops on blockchain development and modern web technologies for fellow students.',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20'
    },
    {
      icon: BookOpen,
      title: 'Continuous Learning',
      description: 'Completed advanced certifications in blockchain development, AI/ML, and modern web frameworks to stay current with technology trends.',
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20'
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
    <section id="achievements" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-max">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Achievements & Experience
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Milestones and experiences that have shaped my journey as a developer and innovator
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="card p-6 text-center group"
              >
                <div className={`w-16 h-16 ${achievement.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon className={`w-8 h-8 ${achievement.color}`} />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {achievement.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="card p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Professional Experience
              </h3>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                
                <div>
                  <h4 className="text-lg font-medium text-primary-600 mb-2">Open Source Contributor</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">2022 - 2023</p>
                  <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                    <li>• Active contributor to blockchain and web development projects</li>
                    <li>• Mentored junior developers in open-source contributions</li>
                    <li>• Contributed to documentation and code optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;