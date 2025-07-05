import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock } from 'lucide-react';

const PendingCoursesPage = () => {
  return (
    <>
      <Helmet>
        <title>Pending Courses - Tutor Dashboard</title>
        <meta name="description" content="View courses awaiting approval." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-8 px-4"
      >
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-[#FF6B35] flex items-center">
            <Clock className="mr-3 h-10 w-10" /> Pending Courses
          </h1>
          <p className="text-lg text-slate-300">Courses you've submitted that are awaiting admin approval.</p>
        </header>

        <Card className="bg-slate-800 border-slate-700 text-white">
          <CardHeader>
            <CardTitle className="text-2xl text-[#FF6B35]">Your Submitted Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300">
              This section will list your courses that are currently pending approval.
              You'll be notified once their status changes.
            </p>
            <div className="mt-6 p-6 bg-slate-700 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Placeholder: Pending Course List</h3>
              <ul className="list-disc list-inside text-slate-400 space-y-1">
                <li>Advanced JavaScript Techniques - Submitted 2 days ago</li>
                <li>Introduction to Docker - Submitted yesterday</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </>
  );
};

export default PendingCoursesPage;