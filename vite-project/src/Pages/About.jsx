// src/pages/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaUserTie, FaTools, FaLaptopMedical, FaLightbulb, FaWarehouse, FaChartLine } from 'react-icons/fa';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

const About = () => {
  const features = [
    { icon: <FaUserTie className="text-3xl text-blue-600" />, title: 'Customer Accounts', description: 'Create and manage business or individual accounts easily.' },
    { icon: <FaTools className="text-3xl text-green-600" />, title: 'Repair Scheduling', description: 'Book support appointments and get real-time updates.' },
    { icon: <FaLaptopMedical className="text-3xl text-purple-600" />, title: 'AI Knowledge Base', description: 'Troubleshoot and fix common issues using smart guides.' },
    { icon: <FaWarehouse className="text-3xl text-yellow-600" />, title: 'Parts Inventory', description: 'Search, update and manage available spare parts.' },
    { icon: <FaChartLine className="text-3xl text-red-500" />, title: 'Insights & Trends', description: 'Analyze issues, customer satisfaction and more.' },
    { icon: <FaLightbulb className="text-3xl text-pink-500" />, title: 'Smart Suggestions', description: 'System recommendations based on past data patterns.' },
  ];

  return (
    <div className="px-6 md:px-20 py-10 bg-white text-gray-800">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={0}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4">About Dern-Support</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Dern-Support provides IT support and repair services to individuals and businesses — with smarter scheduling, diagnostics, and insights.
        </p>
      </motion.section>

      {/* Features Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">What Makes Us Stand Out</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              custom={i + 1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="flex flex-col items-center bg-gray-100 p-6 rounded-xl w-full sm:w-[300px] shadow hover:shadow-lg transition"
            >
              {feature.icon}
              <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
              <p className="text-sm text-gray-600 text-center mt-2">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={features.length + 1}
        className="text-center mt-10"
      >
        <p className="text-lg font-medium">Ready to experience stress-free tech support?</p>
        <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
          Create an Account
        </button>
      </motion.section>
    </div>
  );
};

export default About;
