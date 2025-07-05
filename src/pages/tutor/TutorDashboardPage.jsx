import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Book, CheckCircle, Clock, Users, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const TutorDashboardPage = () => {
  return (
    <>
      <Helmet>
        <title>Tutor Dashboard - EduPlatform</title>
        <meta name="description" content="Manage your courses, students, and earnings on EduPlatform." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-8 px-4"
      >
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-[#FF6B35]">Tutor Dashboard</h1>
            <p className="text-lg text-slate-300">Welcome back, Tutor! Manage your educational empire.</p>
          </div>
          <Button asChild className="bg-[#FF6B35] text-black hover:bg-orange-400">
            <Link to="/tutor/create-course">Create New Course</Link>
          </Button>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-slate-800 border-slate-700 text-white hover:shadow-lg hover:shadow-orange-500/20 transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-[#FF6B35]">Total Courses Created</CardTitle>
              <Book className="h-5 w-5 text-slate-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">12</div>
              <Link to="/tutor/approved-courses" className="text-xs text-slate-400 hover:text-[#FF6B35]">View all courses</Link>
            </CardContent>
          </Card>
          <Card className="bg-slate-800 border-slate-700 text-white hover:shadow-lg hover:shadow-orange-500/20 transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-[#FF6B35]">Total Enrollments</CardTitle>
              <Users className="h-5 w-5 text-slate-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">1,234</div>
              <p className="text-xs text-slate-400">across all your courses</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-800 border-slate-700 text-white hover:shadow-lg hover:shadow-orange-500/20 transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-[#FF6B35]">Pending Courses</CardTitle>
              <Clock className="h-5 w-5 text-slate-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">2</div>
              <Link to="/tutor/pending-courses" className="text-xs text-slate-400 hover:text-[#FF6B35]">Review pending courses</Link>
            </CardContent>
          </Card>
          <Card className="bg-slate-800 border-slate-700 text-white hover:shadow-lg hover:shadow-orange-500/20 transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-[#FF6B35]">Monthly Earnings</CardTitle>
              <DollarSign className="h-5 w-5 text-slate-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">$2,500</div>
              <Link to="/tutor/earnings" className="text-xs text-slate-400 hover:text-[#FF6B35]">View earnings report</Link>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-slate-800 border-slate-700 text-white">
                <CardHeader>
                    <CardTitle className="text-2xl text-[#FF6B35]">Quick Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <Button asChild variant="link" className="text-slate-300 hover:text-[#FF6B35] p-0 justify-start"><Link to="/tutor/approved-courses">Approved Courses</Link></Button>
                    <Button asChild variant="link" className="text-slate-300 hover:text-[#FF6B35] p-0 justify-start"><Link to="/tutor/pending-courses">Pending Courses</Link></Button>
                    <Button asChild variant="link" className="text-slate-300 hover:text-[#FF6B35] p-0 justify-start"><Link to="/tutor/profile">Profile Management</Link></Button>
                    <Button asChild variant="link" className="text-slate-300 hover:text-[#FF6B35] p-0 justify-start"><Link to="/tutor/earnings">Earnings Dashboard</Link></Button>
                    <Button asChild variant="link" className="text-slate-300 hover:text-[#FF6B35] p-0 justify-start"><Link to="/tutor/withdrawal">Withdrawal Options</Link></Button>
                </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700 text-white">
                <CardHeader>
                    <CardTitle className="text-2xl text-[#FF6B35]">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-slate-300">This section will show recent student enrollments, course approvals, and messages. Stay tuned!</p>
                     <ul className="list-disc list-inside text-slate-400 space-y-1 mt-4">
                        <li>New enrollment in "React for Beginners"</li>
                        <li>"Advanced Python" course approved</li>
                        <li>Message from John Doe</li>
                    </ul>
                </CardContent>
            </Card>
        </div>

      </motion.div>
    </>
  );
};

export default TutorDashboardPage;