import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Search, Star, ListFilter } from 'lucide-react';

const mockCourses = [
    {
        id: 1, title: "Full Stack Java Developer", category: "Java", price: 99.99, rating: 4.7, reviews: 1250, image: "a programmer coding in Java",
        shortDescription: "Become a complete Java developer from scratch.",
        longDescription: "This comprehensive course covers everything you need to know to become a full-stack Java developer. From core Java concepts to advanced frameworks like Spring Boot and front-end technologies like React, you'll gain hands-on experience by building real-world applications.",
        instructor: { name: "John Doe", title: "Senior Java Architect", image: "a portrait of a smiling software engineer" },
        whatYoullLearn: ["Core Java & OOPS", "Spring Boot & Microservices", "Hibernate & JPA", "React for Frontend", "Deploying to AWS"],
        curriculum: [
            { title: "Introduction to Java", lectures: 5, duration: "1h 30m" },
            { title: "Object-Oriented Programming", lectures: 10, duration: "3h" },
            { title: "Spring Framework", lectures: 15, duration: "5h" },
            { title: "Building a REST API", lectures: 8, duration: "2h 30m" },
        ]
    },
    {
        id: 2, title: "Python for Data Science & ML", category: "Python", price: 89.99, rating: 4.9, reviews: 3420, image: "a data science dashboard with python code",
        shortDescription: "Master Python for data analysis, visualization, and machine learning.",
        longDescription: "Dive into the world of data science with Python. This course will take you from the basics of Python to advanced data manipulation with Pandas, data visualization with Matplotlib and Seaborn, and machine learning with Scikit-learn.",
        instructor: { name: "Jane Smith", title: "Lead Data Scientist", image: "a portrait of a female data scientist" },
        whatYoullLearn: ["Python programming from scratch", "NumPy & Pandas for data analysis", "Matplotlib & Seaborn for visualization", "Scikit-learn for machine learning", "Real-world case studies"],
        curriculum: [
            { title: "Python Basics", lectures: 7, duration: "2h" },
            { title: "Data Analysis with Pandas", lectures: 12, duration: "4h" },
            { title: "Data Visualization", lectures: 8, duration: "3h" },
            { title: "Machine Learning Fundamentals", lectures: 10, duration: "5h" },
        ]
    },
    {
        id: 3, title: "The Complete JavaScript Course", category: "Full Stack", price: 109.99, rating: 4.8, reviews: 5600, image: "JavaScript code on a modern editor",
        shortDescription: "Go from beginner to advanced with JavaScript, Node.js, and more.",
        longDescription: "The most comprehensive JavaScript course on the market. This course covers modern JavaScript (ES6+), Node.js, Express, MongoDB, and everything you need to build real-world, full-stack web applications.",
        instructor: { name: "Mike Brown", title: "Full Stack Developer", image: "a portrait of a full stack developer" },
        whatYoullLearn: ["Modern JavaScript (ES6+)", "Asynchronous JavaScript", "Node.js & Express", "MongoDB with Mongoose", "Building a complete web app"],
        curriculum: [
            { title: "JavaScript Fundamentals", lectures: 10, duration: "3h" },
            { title: "DOM Manipulation", lectures: 5, duration: "1h 30m" },
            { title: "Node.js and Express", lectures: 12, duration: "4h" },
            { title: "Project: Natours API", lectures: 20, duration: "8h" },
        ]
    },
    {
        id: 4, title: "React - The Complete Guide", category: "Full Stack", price: 99.99, rating: 4.8, reviews: 8200, image: "React logo with code snippets",
        shortDescription: "Dive in and learn React.js from scratch!",
        longDescription: "This course will teach you React.js in-depth, from the ground up. We'll cover components, props, state, hooks, reducers, routing, and everything else you need to build powerful and fast React applications.",
        instructor: { name: "John Doe", title: "Senior Java Architect", image: "a portrait of a smiling software engineer" },
        whatYoullLearn: ["React components and JSX", "State management with Hooks & Redux", "Routing with React Router", "Next.js for server-side rendering", "Testing React applications"],
        curriculum: [
            { title: "Getting Started with React", lectures: 6, duration: "1h 30m" },
            { title: "Components, State & Props", lectures: 10, duration: "3h" },
            { title: "Advanced Hooks", lectures: 8, duration: "2h 30m" },
            { title: "Building a Full App", lectures: 15, duration: "6h" },
        ]
    },
    {
        id: 5, title: "Advanced CSS and Sass", category: "Full Stack", price: 0, rating: 4.6, reviews: 2100, image: "creative website design with css code",
        shortDescription: "The most advanced, modern CSS course on the internet.",
        longDescription: "Unlock the power of modern CSS. This course covers Flexbox, CSS Grid, responsive design, Sass, animations, and advanced CSS techniques to build beautiful and creative user interfaces.",
        instructor: { name: "Mike Brown", title: "Full Stack Developer", image: "a portrait of a full stack developer" },
        whatYoullLearn: ["Advanced CSS selectors and properties", "Flexbox and CSS Grid", "Responsive design techniques", "Sass for scalable CSS", "CSS Animations and Transitions"],
        curriculum: [
            { title: "CSS Fundamentals", lectures: 5, duration: "1h" },
            { title: "Mastering Flexbox", lectures: 8, duration: "2h" },
            { title: "CSS Grid Layout", lectures: 8, duration: "2h" },
            { title: "Advanced Animations", lectures: 6, duration: "1h 30m" },
        ]
    }
];

export const getCourseById = (id) => mockCourses.find(course => course.id === parseInt(id));

const Rating = ({ rating, reviews }) => (
  <div className="flex items-center gap-1">
    <span className="font-bold text-orange-400">{rating.toFixed(1)}</span>
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < Math.round(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-500'}
        />
      ))}
    </div>
    <span className="text-xs text-slate-400">({reviews.toLocaleString()})</span>
  </div>
);

const CoursesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    categories: [],
    price: 'all',
    rating: 0
  });

  const handleCategoryChange = (category) => {
    setFilters(prev => {
      const newCategories = prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category];
      return { ...prev, categories: newCategories };
    });
  };

  const filteredCourses = mockCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filters.categories.length === 0 || filters.categories.includes(course.category);
    const matchesPrice = filters.price === 'all' || (filters.price === 'paid' && course.price > 0) || (filters.price === 'free' && course.price === 0);
    const matchesRating = course.rating >= filters.rating;
    return matchesSearch && matchesCategory && matchesPrice && matchesRating;
  });

  const allCategories = [...new Set(mockCourses.map(c => c.category))];

  return (
    <>
      <Helmet>
        <title>All Courses - CodersZonee</title>
        <meta name="description" content="Explore a wide range of courses on CodersZonee. Find your next learning adventure." />
      </Helmet>
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text-orange mb-2">All Courses</h1>
          <p className="text-lg text-slate-400">Find your next challenge and level up your skills.</p>
        </header>
        
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-1/4 lg:w-1/5">
            <div className="sticky top-36">
              <h2 className="text-2xl font-semibold mb-4 text-slate-100 flex items-center"><ListFilter className="mr-2 text-orange-400" /> Filters</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold mb-3 text-slate-200">Category</h3>
                  <div className="space-y-2">
                    {allCategories.map(category => (
                      <div key={category} className="flex items-center">
                        <Checkbox id={category} onCheckedChange={() => handleCategoryChange(category)} className="border-orange-400 data-[state=checked]:bg-orange-500"/>
                        <Label htmlFor={category} className="ml-2 text-slate-300 cursor-pointer">{category}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold mb-3 text-slate-200">Price</h3>
                  <RadioGroup defaultValue="all" onValueChange={(value) => setFilters(p => ({...p, price: value}))}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="all" id="r1" />
                      <Label htmlFor="r1">All</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="paid" id="r2" />
                      <Label htmlFor="r2">Paid</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="free" id="r3" />
                      <Label htmlFor="r3">Free</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>
          </aside>

          <main className="w-full md:w-3/4 lg:w-4/5">
            <div className="relative mb-6">
              <Input
                type="search"
                placeholder="Search courses..."
                className="pl-10 h-12 bg-[#0c0c0c]/80 border-orange-500/30 text-white focus:border-orange-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card asChild className="bg-[#0c0c0c]/80 border-orange-500/20 h-full flex flex-col overflow-hidden hover:border-orange-400 hover:-translate-y-1 transition-all duration-300 group">
                    <Link to={`/courses/${course.id}`}>
                      <img alt={course.image} className="w-full h-40 object-cover" src={`https://images.unsplash.com/photo-1595872018818-97555653a011`} />
                      <CardHeader>
                        <CardTitle className="text-orange-400 group-hover:text-orange-300 transition-colors text-lg leading-tight h-12">{course.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow pt-0">
                        <CardDescription className="text-slate-400 text-sm mb-3 h-10">{course.shortDescription}</CardDescription>
                        <Rating rating={course.rating} reviews={course.reviews} />
                      </CardContent>
                      <div className="p-6 pt-0">
                        <div className="text-xl font-bold text-white">
                          {course.price > 0 ? `$${course.price}` : 'Free'}
                        </div>
                      </div>
                    </Link>
                  </Card>
                </motion.div>
              ))}
            </div>

            {filteredCourses.length === 0 && (
              <div className="text-center py-16">
                <p className="text-2xl text-slate-400">No courses match your criteria.</p>
                <p className="text-slate-500 mt-2">Try adjusting your search or filters!</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </>
  );
};

export default CoursesPage;