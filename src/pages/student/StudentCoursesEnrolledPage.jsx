import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ListChecks } from 'lucide-react';
import { Link } from 'react-router-dom';

const mockEnrolledCourses = [
  { id: 1, title: "React Fundamentals", category: "Web Development", instructor: "Jane Doe" },
  { id: 2, title: "Advanced Python", category: "Programming", instructor: "John Smith" },
  { id: 3, title: "UI/UX Design Basics", category: "Design", instructor: "Alice Brown" },
];

const StudentCoursesEnrolledPage = () => {
  return (
    <>
      <Helmet>
        <title>Courses Enrolled - CodersZonee</title>
        <meta name="description" content="View all courses you are currently enrolled in on CodersZonee." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-8 px-4"
      >
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-[#FF6B35] flex items-center">
            <ListChecks className="mr-3 h-10 w-10" /> Courses Enrolled
          </h1>
          <p className="text-lg text-slate-300">A list of all courses you're currently taking.</p>
        </header>

        {mockEnrolledCourses.length > 0 ? (
          <div className="space-y-6">
            {mockEnrolledCourses.map(course => (
              <Card key={course.id} className="bg-slate-800 border-slate-700 text-white">
                <CardHeader>
                  <CardTitle className="text-xl text-[#FF6B35]">{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 mb-1">Category: {course.category}</p>
                  <p className="text-slate-400 mb-4">Instructor: {course.instructor}</p>
                  <Button asChild size="sm" className="bg-[#FF6B35] text-black hover:bg-orange-400">
                    <Link to={`/student/my-learnings`}>Go to Course</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
           <Card className="bg-slate-800 border-slate-700 text-white">
            <CardContent className="p-8 text-center">
              <ListChecks size={48} className="mx-auto text-slate-500 mb-4" />
              <h2 className="text-2xl font-semibold text-white mb-2">No Enrolled Courses</h2>
              <p className="text-slate-400 mb-6">You are not enrolled in any courses yet.</p>
              <Button asChild className="bg-[#FF6B35] text-black hover:bg-orange-400">
                <Link to="/courses">Browse Courses</Link>
              </Button>
            </CardContent>
          </Card>
        )}
      </motion.div>
    </>
  );
};

export default StudentCoursesEnrolledPage;