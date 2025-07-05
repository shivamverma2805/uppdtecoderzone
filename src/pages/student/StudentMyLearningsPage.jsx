import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Award } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';

const mockLearnings = [
  { id: 1, title: "React Fundamentals", progress: 75, status: "In Progress", certificate: null, imageKey: "react-course" },
  { id: 2, title: "Advanced Python", progress: 100, status: "Completed", certificate: "View Certificate", imageKey: "python-course" },
];

const StudentMyLearningsPage = () => {
  const { toast } = useToast();

  return (
    <>
      <Helmet>
        <title>My Learnings - CodersZonee</title>
        <meta name="description" content="Track your course progress and access certificates on CodersZonee." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-8 px-4"
      >
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-[#FF6B35] flex items-center">
            <BookOpen className="mr-3 h-10 w-10" /> My Learnings
          </h1>
          <p className="text-lg text-slate-300">Your enrolled courses, progress, and certificates.</p>
        </header>

        {mockLearnings.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockLearnings.map(course => (
              <Card key={course.id} className="bg-slate-800 border-slate-700 text-white hover:shadow-lg hover:shadow-orange-500/20 transition-shadow">
                <img  alt={`${course.title} thumbnail`} className="w-full h-40 object-cover rounded-t-md" src="https://images.unsplash.com/photo-1701723140471-9f7ed02db0c1" />
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-white mb-1">{course.title}</h3>
                  <p className="text-sm text-slate-400 mb-2">Status: {course.status}</p>
                  <div className="w-full bg-slate-600 rounded-full h-2.5 mb-2">
                    <div className="bg-[#FF6B35] h-2.5 rounded-full" style={{ width: `${course.progress}%` }}></div>
                  </div>
                  <p className="text-xs text-slate-400 mb-3">{course.progress}% Complete</p>
                  {course.certificate ? (
                    <Button variant="outline" size="sm" className="w-full border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-black" onClick={() => toast({title: "📜 Certificate Clicked", description: `Viewing certificate for ${course.title}`})}>
                      <Award className="mr-2 h-4 w-4" /> {course.certificate}
                    </Button>
                  ) : (
                    <Button size="sm" className="w-full bg-[#FF6B35] text-black hover:bg-orange-400" onClick={() => toast({title: "▶️ Continue Learning", description: `Resuming ${course.title}`})}>
                      Continue Learning
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="bg-slate-800 border-slate-700 text-white">
            <CardContent className="p-8 text-center">
              <BookOpen size={48} className="mx-auto text-slate-500 mb-4" />
              <h2 className="text-2xl font-semibold text-white mb-2">No Courses Yet!</h2>
              <p className="text-slate-400 mb-6">You haven't enrolled in any courses. Start your learning journey today!</p>
              <Button asChild className="bg-[#FF6B35] text-black hover:bg-orange-400">
                <Link to="/courses">Explore Courses</Link>
              </Button>
            </CardContent>
          </Card>
        )}
      </motion.div>
    </>
  );
};

export default StudentMyLearningsPage;