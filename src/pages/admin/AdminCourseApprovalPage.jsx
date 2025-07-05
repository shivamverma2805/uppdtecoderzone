import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpenText, CheckCircle, XCircle, Eye, Filter } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const mockPendingCourses = [
  { id: 1, title: "Advanced Node.js", instructor: "Bob Smith", submitted: "2023-03-01", category: "Backend Development" },
  { id: 2, title: "Introduction to Quantum Computing", instructor: "Dr. Eva Core", submitted: "2023-03-05", category: "Emerging Tech" },
  { id: 3, title: "Mobile UI/UX with Figma", instructor: "Carol Danvers", submitted: "2023-02-25", category: "Design" },
];

const AdminCourseApprovalPage = () => {
  const { toast } = useToast();

  const handleCourseAction = (action, courseTitle) => {
    toast({
      title: `🚧 Course ${action} (Mock)`,
      description: `Action "${action}" for course "${courseTitle}" is a placeholder. Full functionality coming soon! 🚀`,
    });
  };

  return (
    <>
      <Helmet>
        <title>Course Approval - Admin - CodersZonee</title>
        <meta name="description" content="Review and approve or reject courses submitted by instructors on CodersZonee." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-8 px-4"
      >
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-[#FF6B35] flex items-center">
            <BookOpenText className="mr-3 h-10 w-10" /> Course Approval
          </h1>
          <p className="text-lg text-slate-300">Manage courses awaiting review and approval.</p>
        </header>

        <Card className="bg-slate-800 border-slate-700 text-white">
          <CardHeader>
            <CardTitle className="text-2xl text-[#FF6B35]">Pending Courses</CardTitle>
            <CardDescription className="text-slate-400">Courses submitted by instructors that require your attention.</CardDescription>
            <div className="mt-4 flex justify-end">
               <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white" onClick={() => handleCourseAction("Filter", "Courses")}>
                <Filter className="mr-2 h-4 w-4" /> Filter Courses
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {mockPendingCourses.length > 0 ? (
              <div className="space-y-4">
                {mockPendingCourses.map(course => (
                  <Card key={course.id} className="bg-slate-700 border-slate-600">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-xl text-white">{course.title}</CardTitle>
                      <CardDescription className="text-slate-400">Instructor: {course.instructor} | Submitted: {course.submitted} | Category: {course.category}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col sm:flex-row gap-2">
                      <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white flex-1" onClick={() => handleCourseAction("View Details", course.title)}>
                        <Eye className="mr-2 h-4 w-4" /> View Details
                      </Button>
                      <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white flex-1" onClick={() => handleCourseAction("Approve", course.title)}>
                        <CheckCircle className="mr-2 h-4 w-4" /> Approve
                      </Button>
                      <Button size="sm" className="bg-red-500 hover:bg-red-600 text-white flex-1" onClick={() => handleCourseAction("Reject", course.title)}>
                        <XCircle className="mr-2 h-4 w-4" /> Reject
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <p className="text-slate-400 text-center py-8">No courses are currently pending approval. Great job!</p>
            )}
            {/* Placeholder for pagination */}
            <div className="mt-6 text-center text-slate-400">Pagination controls will be here.</div>
          </CardContent>
        </Card>
      </motion.div>
    </>
  );
};

export default AdminCourseApprovalPage;