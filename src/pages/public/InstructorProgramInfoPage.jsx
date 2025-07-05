import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, DollarSign, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const InstructorProgramInfoPage = () => {
  return (
    <>
      <Helmet>
        <title>Become an Instructor - CodersZonee</title>
        <meta name="description" content="Join CodersZonee as an instructor. Share your expertise, reach a global audience, and earn revenue." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-12 px-4"
      >
        <header className="text-center mb-16">
          <motion.div 
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
            className="mx-auto mb-6 p-4 bg-[#FF6B35] rounded-full w-fit inline-block"
          >
            <Award size={48} className="text-black" />
          </motion.div>
          <h1 className="text-5xl font-bold text-[#FF6B35] mb-4">Share Your Knowledge, Inspire Learners</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Become an instructor on CodersZonee and empower students worldwide. We provide the tools and support you need to create impactful online courses.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Why Teach on CodersZonee?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { icon: <BookOpen size={40} className="text-[#FF6B35]" />, title: "Create Impactful Courses", description: "Use our intuitive tools to build engaging courses with videos, quizzes, and assignments." },
              { icon: <Users size={40} className="text-[#FF6B35]" />, title: "Reach a Global Audience", description: "Connect with millions of learners eager to gain new skills from experts like you." },
              { icon: <DollarSign size={40} className="text-[#FF6B35]" />, title: "Earn Competitive Revenue", description: "Benefit from our generous revenue sharing model and grow your income." },
              { icon: <Award size={40} className="text-[#FF6B35]" />, title: "Build Your Brand", description: "Establish yourself as an expert in your field and grow your professional network." },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                className="bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-orange-500/20 transition-shadow"
              >
                <div className="flex justify-center mb-6">{benefit.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-slate-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16 bg-slate-800 p-10 rounded-xl shadow-xl">
          <h2 className="text-4xl font-bold text-center text-[#FF6B35] mb-8">Getting Started is Easy</h2>
          <ol className="list-decimal list-inside space-y-6 text-slate-300 text-lg max-w-2xl mx-auto">
            <li>
              <strong className="text-white">Plan Your Course:</strong> Identify your target audience and outline your course content. We offer resources to help you design an effective curriculum.
            </li>
            <li>
              <strong className="text-white">Record Your Videos:</strong> Create high-quality video lessons. Our guidelines will help you produce professional content.
            </li>
            <li>
              <strong className="text-white">Build Your Course:</strong> Use our platform to upload videos, create quizzes, add resources, and structure your course.
            </li>
            <li>
              <strong className="text-white">Submit for Review:</strong> Our team will review your course to ensure it meets our quality standards.
            </li>
            <li>
              <strong className="text-white">Launch & Earn:</strong> Once approved, your course goes live! Start inspiring learners and earning revenue.
            </li>
          </ol>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Share Your Expertise?</h2>
          <p className="text-lg text-slate-300 max-w-xl mx-auto mb-8">
            Join our community of passionate instructors and make a difference in the lives of learners worldwide.
          </p>
          <Button asChild size="lg" className="bg-[#FF6B35] text-black hover:bg-orange-400 transition-colors text-lg px-10 py-3">
            <Link to="/signup?role=tutor">Become an Instructor Today</Link>
          </Button>
        </section>
      </motion.div>
    </>
  );
};

export default InstructorProgramInfoPage;