import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, UserCircle } from 'lucide-react';

const sampleFeedback = [
  {
    user: "Alex Morgan",
    rating: 5,
    message: "The React course was absolutely fantastic! The instructor explained complex topics in a simple way. I built my first full-stack app thanks to CodersZonee.",
    image: "a smiling young man with glasses",
  },
  {
    user: "Brenda Smith",
    rating: 5,
    message: "I've tried many platforms, but the hands-on projects here are top-notch. They really prepare you for real-world coding challenges. Highly recommended!",
    image: "a professional woman in her 30s",
  },
  {
    user: "Carlos Diaz",
    rating: 4,
    message: "Great content and a very supportive community. I wish there were more advanced courses on DevOps, but overall, it's an excellent platform for learning.",
    image: "a developer working on a laptop in a cafe",
  },
];

const FeedbackPage = () => {
  return (
    <>
      <Helmet>
        <title>Feedback - CodersZonee</title>
        <meta name="description" content="See what our students are saying about their learning experience at CodersZonee." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-12"
      >
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold gradient-text-orange mb-4">What Our Students Say</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            We're proud to have helped thousands of students achieve their coding goals.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleFeedback.map((feedback, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="bg-[#0c0c0c]/80 border-orange-500/20 h-full flex flex-col tech-card p-2">
                <CardContent className="pt-6 flex-grow">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-5 w-5 ${i < feedback.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} />
                    ))}
                  </div>
                  <p className="text-slate-300 italic">"{feedback.message}"</p>
                </CardContent>
                <CardHeader className="flex-row items-center gap-4 pt-4">
                  <img  alt={`Avatar of ${feedback.user}`} className="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                  <div>
                    <CardTitle className="text-md text-white">{feedback.user}</CardTitle>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default FeedbackPage;