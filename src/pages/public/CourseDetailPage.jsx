import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { getCourseById } from './CoursesPage';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Clock, Check, PlayCircle, Users, BarChart } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import NotFoundPage from '@/pages/NotFoundPage';

const Rating = ({ rating, reviews }) => (
  <div className="flex items-center gap-2">
    <span className="font-bold text-yellow-400">{rating.toFixed(1)}</span>
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={18} className={i < Math.round(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-500'} />
      ))}
    </div>
    <span className="text-sm text-slate-300">({reviews.toLocaleString()} ratings)</span>
  </div>
);

const CourseDetailPage = () => {
  const { courseId } = useParams();
  const course = getCourseById(courseId);
  const { toast } = useToast();

  if (!course) {
    return <NotFoundPage />;
  }

  const handleEnroll = () => {
    toast({
      title: '🚀 Enrollment coming soon!',
      description: 'Thanks for your interest. This feature is currently under development.',
      className: 'bg-blue-600 text-white border-blue-600'
    });
  };

  return (
    <>
      <Helmet>
        <title>{course.title} - CodersZonee</title>
        <meta name="description" content={course.shortDescription} />
      </Helmet>
      
      <div className="bg-[#111] text-white">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="flex flex-col lg:flex-row-reverse gap-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full lg:w-1/3"
            >
              <div className="sticky top-32">
                <Card className="bg-[#0c0c0c]/80 border-orange-500/20 shadow-2xl shadow-orange-500/10">
                  <CardContent className="p-0">
                    <img alt={course.title} className="w-full h-56 object-cover rounded-t-lg" src={`https://images.unsplash.com/photo-1595872018818-97555653a011`} />
                    <div className="p-6">
                      <div className="text-4xl font-bold mb-4">
                        {course.price > 0 ? `$${course.price}` : 'Free'}
                      </div>
                      <Button onClick={handleEnroll} className="w-full text-lg font-bold btn-tech text-black">Enroll Now</Button>
                      <p className="text-center text-xs text-slate-400 mt-3">30-Day Money-Back Guarantee</p>
                      <div className="mt-6 space-y-3 text-sm text-slate-300">
                        <h4 className="font-bold text-white">This course includes:</h4>
                        <p className="flex items-center"><Clock className="w-4 h-4 mr-3 text-orange-400"/>15.5 hours on-demand video</p>
                        <p className="flex items-center"><PlayCircle className="w-4 h-4 mr-3 text-orange-400"/>Full lifetime access</p>
                        <p className="flex items-center"><Users className="w-4 h-4 mr-3 text-orange-400"/>Access on mobile and TV</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-2/3"
            >
              <p className="text-orange-400 font-semibold mb-2">
                <Link to="/courses" className="hover:underline">Courses</Link> &gt; {course.category}
              </p>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-3">{course.title}</h1>
              <p className="text-xl text-slate-300 mb-4">{course.shortDescription}</p>
              <div className="flex items-center gap-4 mb-6">
                <Rating rating={course.rating} reviews={course.reviews} />
                <p className="text-sm text-slate-300">Created by <span className="text-orange-400 font-semibold">{course.instructor.name}</span></p>
              </div>

              <div className="mt-12">
                <Card className="bg-[#0c0c0c]/50 border-orange-500/20 p-6">
                  <h2 className="text-2xl font-bold mb-4 text-orange-400">What you'll learn</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {course.whatYoullLearn.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-green-400 mr-3 mt-1 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>

              <div className="mt-12">
                <h2 className="text-3xl font-bold mb-4">Course content</h2>
                <Accordion type="single" collapsible className="w-full bg-[#0c0c0c]/50 border border-orange-500/20 rounded-lg px-6">
                  {course.curriculum.map((section, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex justify-between w-full pr-4">
                          <span className="font-semibold text-base text-left">{section.title}</span>
                          <span className="text-sm text-slate-400">{section.lectures} lectures • {section.duration}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="pl-4 space-y-2 text-slate-300">
                          {[...Array(section.lectures)].map((_, i) => (
                             <li key={i} className="flex items-center"><PlayCircle className="w-4 h-4 mr-3 text-orange-400" /> Lecture {i+1} - Topic detail</li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              <div className="mt-12">
                <h2 className="text-3xl font-bold mb-4">Description</h2>
                <p className="text-slate-300 leading-relaxed whitespace-pre-line">{course.longDescription}</p>
              </div>

              <div className="mt-12">
                <h2 className="text-3xl font-bold mb-4">Instructor</h2>
                <div className="bg-[#0c0c0c]/50 border border-orange-500/20 p-6 rounded-lg flex items-center gap-6">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a" alt={course.instructor.name} className="w-24 h-24 rounded-full object-cover"/>
                  <div>
                    <h3 className="text-xl font-bold text-orange-400">{course.instructor.name}</h3>
                    <p className="text-slate-400">{course.instructor.title}</p>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetailPage;