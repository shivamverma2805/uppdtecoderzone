import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Users, Target, Eye, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us - CodersZonee</title>
        <meta name="description" content="Learn about CodersZonee's mission, vision, and the team dedicated to revolutionizing online education for coders and tech enthusiasts." />
      </Helmet>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-12 px-4"
      >
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#FF6B35] mb-4">About CodersZonee</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            At CodersZonee, we're building the ultimate launchpad for aspiring and established tech professionals. We believe in practical, engaging, and accessible coding education for everyone.
          </p>
        </header>

        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <img  
                alt="Diverse team of developers collaborating on code" 
                className="rounded-xl shadow-2xl w-full h-auto object-cover"
               src="https://images.unsplash.com/photo-1573165231977-3f0e27806045" />
            </motion.div>
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <div className="flex items-start space-x-4 p-6 bg-slate-800 rounded-lg shadow-md">
                <Target size={40} className="text-[#FF6B35] mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-3xl font-semibold text-white mb-2">Our Mission</h2>
                  <p className="text-slate-400 leading-relaxed">
                    To empower individuals with cutting-edge coding skills and industry-relevant knowledge, enabling them to thrive in the ever-evolving tech landscape through high-quality, hands-on online learning experiences.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-slate-800 rounded-lg shadow-md">
                <Eye size={40} className="text-[#FF6B35] mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-3xl font-semibold text-white mb-2">Our Vision</h2>
                  <p className="text-slate-400 leading-relaxed">
                    To be the premier global destination for practical coding education, fostering a dynamic community of learners, mentors, and innovators passionate about technology and its potential to shape the future.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mb-20 bg-slate-800 py-16 rounded-xl shadow-xl">
          <h2 className="text-4xl font-bold text-center text-[#FF6B35] mb-12">What Makes CodersZonee Unique?</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 px-8">
            {[
              { title: "Industry-Focused Curriculum", description: "Courses designed with real-world applications and current tech trends in mind.", icon: <Zap size={32} className="text-[#FF6B35]" /> },
              { title: "Hands-On Projects", description: "Learn by doing with practical projects that build your portfolio and solidify your skills.", icon: <Users size={32} className="text-[#FF6B35]" /> },
              { title: "Expert Instructors", description: "Learn from seasoned professionals who are passionate about teaching and sharing their expertise.", icon: <Target size={32} className="text-[#FF6B35]" /> },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className="bg-slate-700 p-6 rounded-lg shadow-md text-center"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-4xl font-bold text-[#FF6B35] mb-6">Join Our Growing Community</h2>
          <p className="text-lg text-slate-300 max-w-xl mx-auto mb-8">
            Whether you're starting your coding journey, aiming to upskill, or looking to share your expertise, CodersZonee is your platform for growth.
          </p>
          <div className="space-x-4">
            <Link to="/courses" className="bg-[#FF6B35] text-black font-semibold py-3 px-8 rounded-lg hover:bg-orange-400 transition-colors text-lg">
              Explore Courses
            </Link>
            <Link to="/instructor-program" className="border border-[#FF6B35] text-[#FF6B35] font-semibold py-3 px-8 rounded-lg hover:bg-[#FF6B35] hover:text-black transition-colors text-lg">
              Become an Instructor
            </Link>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default AboutPage;