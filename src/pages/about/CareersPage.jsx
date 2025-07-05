import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Briefcase, ArrowRight } from 'lucide-react';

const openPositions = [
  { title: "Senior Frontend Developer (React)", location: "Remote", type: "Full-time" },
  { title: "DevOps Engineer", location: "New York, NY", type: "Full-time" },
  { title: "Content Creator - Python", location: "Remote", type: "Part-time" },
  { title: "Product Marketing Manager", location: "San Francisco, CA", type: "Full-time" },
];

const CareersPage = () => {
  return (
    <>
      <Helmet>
        <title>Careers - CodersZonee</title>
        <meta name="description" content="Join our team and help us shape the future of tech education. Explore open positions at CodersZonee." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-12"
      >
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold gradient-text-orange mb-4">Join Our Team</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Help us build the future of tech education. We're looking for passionate people to join our mission.
          </p>
        </header>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-orange-400 mb-6">Open Positions</h2>
          <div className="space-y-4">
            {openPositions.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="bg-[#0c0c0c]/80 border-orange-500/20 hover:border-orange-500/50 transition-colors duration-300">
                  <CardContent className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-slate-100">{job.title}</CardTitle>
                      <div className="flex items-center gap-4 text-sm text-slate-400 mt-2">
                        <span className="flex items-center gap-1.5"><Briefcase size={14} /> {job.type}</span>
                        <span className="flex items-center gap-1.5"><MapPin size={14} /> {job.location}</span>
                      </div>
                    </div>
                    <Button asChild className="bg-transparent border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black transition-colors group mt-4 md:mt-0 shrink-0">
                      <a href="#">
                        Apply Now <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default CareersPage;