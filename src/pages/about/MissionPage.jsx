import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Zap, Users, GraduationCap } from 'lucide-react';

const MissionPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Mission - CodersZonee</title>
        <meta name="description" content="Learn about the mission and core values that drive CodersZonee to empower the next generation of tech talent." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-12"
      >
        <header className="text-center mb-12">
          <Target className="mx-auto h-16 w-16 text-orange-400 mb-4" />
          <h1 className="text-5xl font-bold gradient-text-orange mb-4">Our Mission</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            To empower individuals with cutting-edge coding skills and industry-relevant knowledge, enabling them to thrive in the ever-evolving tech landscape.
          </p>
        </header>

        <div className="max-w-4xl mx-auto bg-[#0c0c0c]/80 border border-orange-500/20 rounded-lg p-8 md:p-12 tech-card">
          <h2 className="text-3xl font-semibold text-orange-400 mb-6">Our Core Principles</h2>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="p-2 bg-orange-500/20 rounded-full mt-1">
                <Zap className="h-6 w-6 text-orange-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-100">Practical, Hands-On Learning</h3>
                <p className="text-slate-400">We believe the best way to learn is by doing. Our curriculum is centered around real-world projects that build a strong portfolio and concrete skills.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="p-2 bg-orange-500/20 rounded-full mt-1">
                <GraduationCap className="h-6 w-6 text-orange-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-100">Accessible Education for All</h3>
                <p className="text-slate-400">We strive to break down barriers to tech education, offering flexible and affordable learning paths for everyone, regardless of their background.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="p-2 bg-orange-500/20 rounded-full mt-1">
                <Users className="h-6 w-6 text-orange-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-100">Fostering a Supportive Community</h3>
                <p className="text-slate-400">We are more than a platform; we are a community of learners, mentors, and builders who support each other's growth and celebrate success together.</p>
              </div>
            </li>
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default MissionPage;