import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { ArrowRight, User, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const sampleBlogs = [
  {
    title: "Mastering React Hooks in 10 Minutes",
    description: "A quick and practical guide to understanding and implementing the most common React Hooks for cleaner, more efficient code.",
    author: "Jane Doe",
    date: "2025-06-18",
    image: "a developer's desk with a laptop showing React code",
  },
  {
    title: "The Ultimate Guide to Tailwind CSS",
    description: "From setup to advanced customization, this guide covers everything you need to know to build beautiful, responsive UIs with Tailwind CSS.",
    author: "John Smith",
    date: "2025-06-15",
    image: "a computer screen with a colorful user interface design",
  },
  {
    title: "Why Python is the Future of AI",
    description: "Explore the libraries, frameworks, and community support that make Python the undisputed king of Artificial Intelligence and Machine Learning.",
    author: "Alex Johnson",
    date: "2025-06-10",
    image: "an abstract visualization of a neural network",
  },
];

const BlogsPage = () => {
  return (
    <>
      <Helmet>
        <title>Blogs - CodersZonee</title>
        <meta name="description" content="Read the latest articles and insights on coding, web development, and tech from the CodersZonee team." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-12"
      >
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold gradient-text-orange mb-4">CodersZonee Blog</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Your source for the latest news, tutorials, and insights in the world of tech.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleBlogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="bg-[#0c0c0c]/80 border-orange-500/20 h-full flex flex-col overflow-hidden hover-lift tech-card">
                <img  alt={blog.title} className="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                <CardHeader>
                  <CardTitle className="text-orange-400 text-2xl leading-tight">{blog.title}</CardTitle>
                  <div className="flex items-center text-xs text-slate-400 pt-2 gap-4">
                    <div className="flex items-center gap-1.5">
                      <User size={14} />
                      <span>{blog.author}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      <span>{blog.date}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-slate-300">{blog.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Link to="#" className="flex items-center font-semibold text-orange-400 hover:text-orange-300 transition-colors group">
                    Read More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default BlogsPage;