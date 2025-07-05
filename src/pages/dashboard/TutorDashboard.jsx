import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Users, 
  Clock, 
  CheckCircle, 
  DollarSign, 
  TrendingUp,
  Plus,
  Eye,
  Edit,
  Trash2,
  Filter,
  Search
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import TutorSidebar from '@/components/layout/TutorSidebar';
import { toast } from '@/components/ui/use-toast';

const TutorDashboard = () => {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [filterStatus, setFilterStatus] = useState('all');

  // Mock data - replace with real data from API
  const stats = {
    totalCourses: 12,
    totalEnrollments: 1247,
    pendingCourses: 3,
    approvedCourses: 9,
    monthlyEarnings: 5420,
    totalEarnings: 28750
  };

  const recentCourses = [
    {
      id: 1,
      title: 'Complete React Development Course',
      status: 'approved',
      enrollments: 234,
      earnings: 2340,
      createdAt: '2024-01-15',
      image: 'React course with modern development practices'
    },
    {
      id: 2,
      title: 'Advanced JavaScript Concepts',
      status: 'pending',
      enrollments: 0,
      earnings: 0,
      createdAt: '2024-01-20',
      image: 'Advanced JavaScript programming concepts'
    },
    {
      id: 3,
      title: 'Node.js Backend Development',
      status: 'approved',
      enrollments: 156,
      earnings: 1560,
      createdAt: '2024-01-10',
      image: 'Node.js backend development tutorial'
    }
  ];

  const recentActivity = [
    { type: 'enrollment', message: 'New student enrolled in React Course', time: '2 hours ago' },
    { type: 'approval', message: 'Course "JavaScript Basics" was approved', time: '1 day ago' },
    { type: 'earning', message: 'Received $150 from course sales', time: '2 days ago' },
    { type: 'review', message: 'New 5-star review on React Course', time: '3 days ago' }
  ];

  const handleViewCourse = (courseId) => {
    toast({
      title: '🚧 This feature isn\'t implemented yet—but don\'t worry! You can request it in your next prompt! 🚀'
    });
  };

  const handleEditCourse = (courseId) => {
    toast({
      title: '🚧 This feature isn\'t implemented yet—but don\'t worry! You can request it in your next prompt! 🚀'
    });
  };

  const handleDeleteCourse = (courseId) => {
    toast({
      title: '🚧 This feature isn\'t implemented yet—but don\'t worry! You can request it in your next prompt! 🚀'
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300';
      case 'rejected':
        return 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const filteredCourses = recentCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || course.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <>
      <Helmet>
        <title>Tutor Dashboard - EduPlatform</title>
        <meta name="description" content="Manage your courses, track earnings, and monitor student progress from your tutor dashboard." />
      </Helmet>
      
      <div className="flex min-h-screen bg-gray-50 dark:bg-slate-950">
        <TutorSidebar />
        
        <div className="flex-1 ml-64">
          <div className="p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                Welcome back, {user?.name}!
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Here's an overview of your teaching performance and course management.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
            >
              <Card className="stats-card card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Courses</p>
                      <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">{stats.totalCourses}</p>
                    </div>
                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-500/10 rounded-full flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-orange-500 dark:text-orange-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="stats-card card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Enrollments</p>
                      <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">{stats.totalEnrollments}</p>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-500/10 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="stats-card card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Pending Courses</p>
                      <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">{stats.pendingCourses}</p>
                    </div>
                    <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-500/10 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-yellow-500 dark:text-yellow-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="stats-card card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Approved Courses</p>
                      <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">{stats.approvedCourses}</p>
                    </div>
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-500/10 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-500 dark:text-green-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="stats-card card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Monthly Earnings</p>
                      <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">${stats.monthlyEarnings}</p>
                    </div>
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-500/10 rounded-full flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-purple-500 dark:text-purple-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="stats-card card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Earnings</p>
                      <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">${stats.totalEarnings}</p>
                    </div>
                    <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-500/10 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-2"
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl font-semibold">Course Management</CardTitle>
                      <Button className="btn-primary">
                        <Plus className="w-4 h-4 mr-2" />
                        Create Course
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col sm:flex-row gap-4 mb-6">
                      <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <Input
                          placeholder="Search courses..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                      <Select value={sortBy} onValueChange={setSortBy}>
                        <SelectTrigger className="w-full sm:w-48">
                          <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="newest">Newest First</SelectItem>
                          <SelectItem value="oldest">Oldest First</SelectItem>
                          <SelectItem value="title">Title A-Z</SelectItem>
                          <SelectItem value="enrollments">Most Enrolled</SelectItem>
                        </SelectContent>
                      </Select>
                      <Select value={filterStatus} onValueChange={setFilterStatus}>
                        <SelectTrigger className="w-full sm:w-48">
                          <SelectValue placeholder="Filter by status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Status</SelectItem>
                          <SelectItem value="approved">Approved</SelectItem>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="rejected">Rejected</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-4">
                      {filteredCourses.map((course, index) => (
                        <motion.div
                          key={course.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className="border dark:border-slate-800 rounded-lg p-4 hover:shadow-md dark:hover:bg-slate-800/50 transition-shadow"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <img  
                                className="w-16 h-16 rounded-lg object-cover"
                                alt={`${course.title} course thumbnail`}
                               src="https://images.unsplash.com/photo-1635251595512-dc52146d5ae8" />
                              <div>
                                <h3 className="font-semibold text-gray-900 dark:text-gray-100">{course.title}</h3>
                                <div className="flex items-center space-x-4 mt-1">
                                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(course.status)}`}>
                                    {course.status.charAt(0).toUpperCase() + course.status.slice(1)}
                                  </span>
                                  <span className="text-sm text-gray-600 dark:text-gray-400">
                                    {course.enrollments} students
                                  </span>
                                  <span className="text-sm text-gray-600 dark:text-gray-400">
                                    ${course.earnings} earned
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleViewCourse(course.id)}
                              >
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleEditCourse(course.id)}
                              >
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="destructive"
                                onClick={() => handleDeleteCourse(course.id)}
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivity.map((activity, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                          <div className="flex-1">
                            <p className="text-sm text-gray-900 dark:text-gray-200">{activity.message}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TutorDashboard;