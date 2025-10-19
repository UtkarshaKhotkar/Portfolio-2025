import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Smart-Management-Dashboard',
      description: 'Built an AI-driven project management dashboard using React.js, Redux Toolkit, and Tailwind CSS for real-time collaboration and analytics.',
      image: '/api/placeholder/400/250',
      tech: ['React', 'Redux', 'Tailwind CSS', 'Rest APIs'],
      github: 'https://github.com/UtkarshaKhotkar/Smart-dashboard',
      demo: 'https://smart-dashboard-black.vercel.app/',
      category: 'Frontend development'
    },
    {
      title: 'Decentralized Donation Platform-Cryptocare',
      description: 'DApp for NGOs to receive and track donations transparently. Built with smart contracts for accountability and real-time donation tracking.',
      image: '/api/placeholder/400/250',
      tech: ['React', 'Solidity', 'Hardhat', 'IPFS', 'Web3.js'],
      github: 'https://github.com/UtkarshaKhotkar/CryptoCare',
      demo: 'crypto-care-mauve.vercel.app',
      category: 'Blockchain'
    },
    {
      title: 'Movie-NFT-Platform-Cinemint',
      description: 'Developed a peer-to-peer file transfer platform eliminating reliance on centralized servers. Implemented file chunking, streaming, and Merkle Tree verification for secure and efficient transfers.',
      image: '/api/placeholder/400/250',
      tech: ['React', 'Solidity', 'Node.js', 'JavaScript', 'Web3.js'],
      github: 'https://github.com/Prathameshkhile/Movie_NFT_Platform',
      demo: 'https://p2e-gaming.netlify.app',
      category: 'Blockchain'
    },
    
    {
      title: 'ChainVault',
      description: 'Decentralized file storage and marketplace built on Internet Computer Protocol (ICP). Features encrypted storage, file sharing, and NFT marketplace.',
      image: '/api/placeholder/400/250',
      tech: ['React', 'ICP', 'Motoko', 'DFINITY', 'Tailwind CSS'],
      github: 'https://github.com/UtkarshaKhotkar/ChainVault-Decentralized-File-Storage-Marketplace',
      demo: 'https://chainvault.ic0.app',
      category: 'Blockchain'
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
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-max">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A showcase of my work in blockchain development, full-stack applications, and innovative web solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="card overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors duration-300"
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-primary-600 rounded-full text-white hover:bg-primary-700 transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded text-xs">
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 text-sm"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 text-sm"
                    >
                      <Play size={16} />
                      Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;