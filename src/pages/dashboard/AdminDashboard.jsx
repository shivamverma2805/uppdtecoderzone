import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Users, BookOpen, DollarSign, TrendingUp, Clock, CheckCircle } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import { toast } from '@/components/ui/use-toast';

const AdminDashboard = () => {
  const { user } = useAuth();

  const handleFeatureClick = () => {
    toast({
      title: '🚧 This feature isn\'t implemented yet—but don\'t worry! You can request it in your next prompt! 🚀'
    });
  };

  const stats = {
    totalUsers: 50247,
    totalCourses: 1234,
    totalRevenue: 2847500,
    pendingApprovals: 23,
    activeInstructors: 456,
    monthlyGrowth: 15.3
  };

  const pendingCourses = [
    {
      id: 1,
      title: 'Advanced Machine Learning',
      instructor: 'Dr. Sarah Johnson',
      submittedAt: '2024-01-20',
      category: 'Data Science'
    },
    {
      id: 2,
      title: 'React Native Development',
      instructor: 'Mike Chen',
      submittedAt: '2024-01-19',
      category: 'Mobile Development'
    },
    {
      id: 3,
      title: 'Digital Marketing Strategy',
      instructor: 'Emily Rodriguez',
      submittedAt: '2024-01-18',
      category: 'Marketing'
    }
  ];

  const recentActivity = [
    { type: 'user', message: 'New user registration: John Doe', time: '5 minutes ago' },
    { type: 'course', message: 'Course approved: Web Development Basics', time: '1 hour ago' },
    { type: 'payment', message: 'Payment received: $299 from course enrollment', time: '2 hours ago' },
    { type: 'instructor', message: 'New instructor application: Lisa Thompson', time: '3 hours ago' }
  ];

  return (
    <>
      <Helmet>
        <title>Admin Dashboard - EduPlatform</title>
        <meta name="description" content="Manage users, courses, and platform analytics from the admin dashboard." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Admin Dashboard
            </h1>
            <p className="text-gray-600">
              Manage your platform and monitor key metrics.
            </p>
          </motion.div>

          {/* Stats Grid */}
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
                    <p className="text-sm font-medium text-gray-600">Total Users</p>
                    <p className="text-3xl font-bold text-gray-900">{stats.totalUsers.toLocaleString()}</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-500" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="stats-card card-hover">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Courses</p>
                    <p className="text-3xl font-bold text-gray-900">{stats.totalCourses}</p>
                  </div>
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-orange-500" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="stats-card card-hover">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                    <p className="text-3xl font-bold text-gray-900">${(stats.totalRevenue / 1000000).toFixed(1)}M</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-green-500" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="stats-card card-hover">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Pending Approvals</p>
                    <p className="text-3xl font-bold text-gray-900">{stats.pendingApprovals}</p>
                  </div>
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-yellow-500" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="stats-card card-hover">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Active Instructors</p>
                    <p className="text-3xl font-bold text-gray-900">{stats.activeInstructors}</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-purple-500" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="stats-card card-hover">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Monthly Growth</p>
                    <p className="text-3xl font-bold text-gray-900">{stats.monthlyGrowth}%</p>
                  </div>
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-indigo-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Pending Course Approvals */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-semibold">Pending Course Approvals</CardTitle>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={handleFeatureClick}
                    >
                      View All
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {pendingCourses.map((course, index) => (
                      <motion.div
                        key={course.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold text-gray-900">{course.title}</h3>
                            <p className="text-sm text-gray-600">by {course.instructor}</p>
                            <div className="flex items-center space-x-4 mt-2">
                              <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                                {course.category}
                              </span>
                              <span className="text-xs text-gray-500">
                                Submitted {course.submittedAt}
                              </span>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button 
                              size="sm" 
                              className="btn-primary"
                              onClick={handleFeatureClick}
                            >
                              <CheckCircle className="w-4 h-4 mr-1" />
                              Approve
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={handleFeatureClick}
                            >
                              Review
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Actions & Recent Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    className="w-full btn-primary"
                    onClick={handleFeatureClick}
                  >
                    User Management
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={handleFeatureClick}
                  >
                    Course Analytics
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={handleFeatureClick}
                  >
                    Revenue Reports
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={handleFeatureClick}
                  >
                    System Settings
                  </Button>
                </CardContent>
              </Card>

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
                          <p className="text-sm text-gray-900">{activity.message}</p>
                          <p className="text-xs text-gray-500">{activity.time}</p>
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
    </>
  );
};

export default AdminDashboard;