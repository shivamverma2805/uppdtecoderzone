import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Linkedin, Twitter } from 'lucide-react';

const teamMembers = [
  {
    name: "Sarah Chen",
    role: "Founder & CEO",
    image: "a portrait of a confident female CEO in a modern office",
  },
  {
    name: "Michael Rodriguez",
    role: "Lead Instructor",
    image: "a friendly male instructor smiling in a classroom setting",
  },
  {
    name: "Emily White",
    role: "Head of Product",
    image: "a creative female product manager brainstorming at a whiteboard",
  },
  {
    name: "David Lee",
    role: "Lead Backend Engineer",
    image: "a focused male engineer working on a server rack",
  },
];

const TeamPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Team - CodersZonee</title>
        <meta name="description" content="Meet the passionate team of educators, developers, and visionaries behind CodersZonee." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-12"
      >
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold gradient-text-orange mb-4">Meet the Team</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            The passionate individuals dedicated to making CodersZonee the best place to learn tech.
          </p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="text-center bg-[#0c0c0c]/80 border-orange-500/20 hover-lift tech-card">
                <CardHeader className="p-0">
                  <img  alt={`Portrait of ${member.name}`} className="w-full h-64 object-cover rounded-t-lg" src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl text-white">{member.name}</CardTitle>
                  <CardDescription className="text-orange-400">{member.role}</CardDescription>
                  <div className="flex justify-center gap-4 mt-4">
                    <a href="#" className="text-slate-400 hover:text-orange-400 transition-colors"><Linkedin size={20} /></a>
                    <a href="#" className="text-slate-400 hover:text-orange-400 transition-colors"><Twitter size={20} /></a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default TeamPage;