import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Filter, Clock, BarChart, Tag } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const mockPopularCourses = [
  { id: 1, title: "Full Stack Java Developer", category: "Java", rating: 4.7, price: "₹4999", image: "a programmer coding in Java", instructor: "John Doe", difficulty: "Intermediate", duration: "25+ Hours" },
  { id: 2, title: "Python for Data Science & ML", category: "Python", rating: 4.9, price: "₹3999", image: "a data science dashboard with python code", instructor: "Jane Smith", difficulty: "Beginner", duration: "30+ Hours" },
  { id: 3, title: "The Complete JavaScript Course", category: "Full Stack", rating: 4.8, price: "₹5999", image: "JavaScript code on a modern editor", instructor: "Mike Brown", difficulty: "Advanced", duration: "50+ Hours" },
  { id: 4, title: "React - The Complete Guide", category: "Full Stack", rating: 4.8, price: "₹4999", image: "React logo with code snippets", instructor: "Sarah Lee", difficulty: "Intermediate", duration: "40+ Hours" },
  { id: 5, title: "Advanced CSS and Sass", category: "Web Design", rating: 4.6, price: "₹2999", image: "creative website design with css code", instructor: "Chris Green", difficulty: "Intermediate", duration: "15+ Hours" },
  { id: 6, title: "UI/UX Design Fundamentals", category: "Web Design", rating: 4.7, price: "₹3499", image: "ui/ux design wireframes", instructor: "Emily White", difficulty: "Beginner", duration: "20+ Hours" },
];

const PopularCoursesPage = () => {
  const [filters, setFilters] = useState({
    category: 'all',
    difficulty: 'all',
    duration: 'all',
  });

  const handleFilterChange = (filterName, value) => {
    setFilters(prev => ({ ...prev, [filterName]: value }));
  };

  const filteredCourses = mockPopularCourses.filter(course => {
    return (
      (filters.category === 'all' || course.category === filters.category) &&
      (filters.difficulty === 'all' || course.difficulty === filters.difficulty) &&
      (filters.duration === 'all' || parseInt(course.duration) >= parseInt(filters.duration))
    );
  });
  
  const categories = [...new Set(mockPopularCourses.map(c => c.category))];
  const difficulties = [...new Set(mockPopularCourses.map(c => c.difficulty))];

  return (
    <>
      <Helmet>
        <title>Popular Courses - CodersZonee</title>
        <meta name="description" content="Discover trending and highest-rated courses on CodersZonee." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-12 px-4 container mx-auto"
      >
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold gradient-text-orange mb-4">Popular Courses</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Join thousands of learners in these top-rated courses, hand-picked by our community.
          </p>
        </header>

        <Card className="bg-slate-800/50 border border-orange-500/20 p-4 mb-10 sticky top-28 z-40 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <h3 className="text-lg font-semibold text-white flex items-center mr-4">
              <Filter className="h-5 w-5 mr-2 text-orange-400" />
              Filter Courses
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
               <Select onValueChange={(value) => handleFilterChange('category', value)} defaultValue="all">
                 <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                   <SelectValue placeholder="Category" />
                 </SelectTrigger>
                 <SelectContent className="bg-slate-700 text-white border-slate-600">
                   <SelectItem value="all">All Categories</SelectItem>
                   {categories.map(cat => <SelectItem key={cat} value={cat}>{cat}</SelectItem>)}
                 </SelectContent>
               </Select>
               <Select onValueChange={(value) => handleFilterChange('difficulty', value)} defaultValue="all">
                 <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                   <SelectValue placeholder="Difficulty" />
                 </SelectTrigger>
                 <SelectContent className="bg-slate-700 text-white border-slate-600">
                   <SelectItem value="all">All Difficulties</SelectItem>
                   {difficulties.map(diff => <SelectItem key={diff} value={diff}>{diff}</SelectItem>)}
                 </SelectContent>
               </Select>
               <Select onValueChange={(value) => handleFilterChange('duration', value)} defaultValue="all">
                 <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                   <SelectValue placeholder="Duration" />
                 </SelectTrigger>
                 <SelectContent className="bg-slate-700 text-white border-slate-600">
                   <SelectItem value="all">All Durations</SelectItem>
                   <SelectItem value="10">10+ Hours</SelectItem>
                   <SelectItem value="20">20+ Hours</SelectItem>
                   <SelectItem value="30">30+ Hours</SelectItem>
                 </SelectContent>
               </Select>
            </div>
          </div>
        </Card>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              layout
            >
              <Card asChild className="bg-[#0c0c0c]/80 border-orange-500/20 h-full flex flex-col overflow-hidden hover:border-orange-400 hover:-translate-y-2 transition-all duration-300 group">
                <Link to={`/courses/${course.id}`}>
                  <div className="relative">
                    <img-replace alt={course.image} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
                    <div className="absolute top-3 right-3 bg-black/50 text-white text-sm px-3 py-1 rounded-full">{course.price}</div>
                  </div>
                  <CardHeader className="flex-grow">
                    <CardTitle className="text-orange-400 group-hover:text-orange-300 transition-colors text-xl leading-tight h-14">{course.title}</CardTitle>
                    <CardDescription className="text-slate-400 text-sm">by {course.instructor}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center mb-4">
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        <span className="ml-1 text-sm text-white font-bold">{course.rating}</span>
                      </div>
                    </div>
                     <div className="flex justify-between text-xs text-slate-400">
                        <span className="flex items-center"><Tag className="h-3 w-3 mr-1"/>{course.category}</span>
                        <span className="flex items-center"><BarChart className="h-3 w-3 mr-1"/>{course.difficulty}</span>
                        <span className="flex items-center"><Clock className="h-3 w-3 mr-1"/>{course.duration}</span>
                    </div>
                  </CardContent>
                   <div className="p-4 pt-0">
                      <Button className="w-full bg-transparent border border-orange-500/50 text-orange-400 group-hover:bg-[#FF6B35] group-hover:text-black group-hover:border-transparent transition-all">View Course</Button>
                   </div>
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>

         {filteredCourses.length === 0 && (
          <div className="text-center py-16 col-span-full">
            <p className="text-2xl text-slate-400">No courses match your filters.</p>
            <p className="text-slate-500 mt-2">Try a different combination!</p>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default PopularCoursesPage;