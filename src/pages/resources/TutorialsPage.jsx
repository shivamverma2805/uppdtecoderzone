import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const sampleTutorials = [
  { title: "Building a REST API with Node.js & Express", difficulty: "Intermediate", color: "bg-yellow-500" },
  { title: "Deploying a React App to Vercel", difficulty: "Beginner", color: "bg-green-500" },
  { title: "State Management with Zustand", difficulty: "Intermediate", color: "bg-yellow-500" },
  { title: "Creating Animations with Framer Motion", difficulty: "Beginner", color: "bg-green-500" },
  { title: "Advanced TypeScript for React Developers", difficulty: "Advanced", color: "bg-red-500" },
  { title: "Introduction to Docker for Web Devs", difficulty: "Beginner", color: "bg-green-500" },
];

const TutorialsPage = () => {
  return (
    <>
      <Helmet>
        <title>Tutorials - CodersZonee</title>
        <meta name="description" content="Browse our collection of hands-on video and text tutorials to level up your coding skills." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-12"
      >
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold gradient-text-orange mb-4">Hands-On Tutorials</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Step-by-step guides to help you build real-world projects and master new technologies.
          </p>
        </header>

        <div className="space-y-4">
          {sampleTutorials.map((tutorial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="bg-[#0c0c0c]/80 border-orange-500/20 hover:border-orange-500/50 transition-colors duration-300">
                <CardContent className="p-4">
                  <Link to="#" className="flex items-center justify-between group">
                    <div className="flex items-center gap-4">
                      <PlayCircle className="h-10 w-10 text-orange-400 group-hover:text-orange-300 transition-colors" />
                      <h2 className="text-lg font-medium text-slate-200 group-hover:text-white transition-colors">{tutorial.title}</h2>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 text-xs font-semibold text-black rounded-full ${tutorial.color}`}>
                        {tutorial.difficulty}
                      </span>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default TutorialsPage;