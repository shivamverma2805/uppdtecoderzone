import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found - EduPlatform</title>
        <meta name="description" content="The page you are looking for does not exist on EduPlatform." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center min-h-[calc(100vh-150px)] text-center px-4"
      >
        <AlertTriangle size={80} className="text-[#FF6B35] mb-8 animate-bounce" />
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-[#FF6B35] mb-6">Oops! Page Not Found</h2>
        <p className="text-lg text-slate-300 mb-10 max-w-md">
          The page you're looking for seems to have taken a detour. Don't worry, we can get you back on track.
        </p>
        <Button asChild size="lg" className="bg-[#FF6B35] text-black hover:bg-orange-400 transition-colors">
          <Link to="/">Go to Homepage</Link>
        </Button>
      </motion.div>
    </>
  );
};

export default NotFoundPage;