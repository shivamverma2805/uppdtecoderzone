import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  BookOpen, 
  Users, 
  MessageSquare, 
  Terminal, 
  Code, 
  Zap, 
  Rocket, 
  Star,
  ChevronRight,
  Play,
  Award,
  TrendingUp,
  Globe
} from 'lucide-react';

const TypingText = ({ text, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }
    }, 100 + delay);

    return () => clearTimeout(timer);
  }, [currentIndex, text, delay]);

  return (
    <span className="code-font">
      {displayText}
      {currentIndex < text.length && <span className="typing-cursor"></span>}
    </span>
  );
};

const CodeBlock = ({ children, className = "" }) => (
  <div className={`code-block ${className}`}>
    <div className="pt-8">
      {children}
    </div>
  </div>
);

const HomePage = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  const features = [
    { 
      icon: <Terminal size={48} className="text-[#FF6B35]" />, 
      title: "Terminal-Based Learning", 
      description: "Master coding through hands-on terminal experiences and real-world projects.",
      code: "npm install knowledge"
    },
    { 
      icon: <Code size={48} className="text-[#FF6B35]" />, 
      title: "Live Code Reviews", 
      description: "Get instant feedback from expert developers and improve your coding skills.",
      code: "git commit -m 'level up'"
    },
    { 
      icon: <Zap size={48} className="text-[#FF6B35]" />, 
      title: "Lightning Fast Progress", 
      description: "Accelerated learning paths designed for modern developers and tech enthusiasts.",
      code: "sudo apt upgrade skills"
    },
  ];

  const stats = [
    { number: "50K+", label: "Developers", icon: <Users className="h-6 w-6" /> },
    { number: "200+", label: "Courses", icon: <BookOpen className="h-6 w-6" /> },
    { number: "95%", label: "Success Rate", icon: <Award className="h-6 w-6" /> },
    { number: "24/7", label: "Support", icon: <Globe className="h-6 w-6" /> },
  ];

  const courses = [
    {
      title: "Full-Stack Development Bootcamp",
      description: "Master modern web development with React, Node.js, and cloud deployment.",
      image: "https://images.unsplash.com/photo-1675495667069-d18d7d78eeb2",
      level: "Advanced",
      duration: "12 weeks",
      students: "2.5K"
    },
    {
      title: "AI & Machine Learning Mastery",
      description: "Dive deep into artificial intelligence and machine learning algorithms.",
      image: "https://images.unsplash.com/photo-1596774419796-0318e0ab4ba1",
      level: "Intermediate",
      duration: "16 weeks",
      students: "1.8K"
    },
    {
      title: "DevOps & Cloud Architecture",
      description: "Learn containerization, CI/CD, and cloud infrastructure management.",
      image: "https://images.unsplash.com/photo-1675023112817-52b789fd2ef0",
      level: "Advanced",
      duration: "10 weeks",
      students: "1.2K"
    },
  ];

  return (
    <>
      <Helmet>
        <title>CodersZonee - Modern Tech Platform for Developers</title>
        <meta name="description" content="Join the ultimate coding community. Learn, build, and grow with expert-led courses and cutting-edge technology." />
      </Helmet>

      <div className="min-h-screen terminal-bg">
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 tech-grid opacity-30"></div>
          <div className="absolute inset-0">
            <motion.div 
              style={{ y: y1 }}
              className="absolute top-20 left-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"
            />
            <motion.div 
              style={{ y: y2 }}
              className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"
            />
          </div>

          <div className="relative container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="terminal-window max-w-4xl mx-auto p-8">
                <div className="pt-8 space-y-4">
                  <p className="text-green-400 text-left code-font text-sm">
                    <span className="text-orange-400">$</span> welcome_to_coders_zone
                  </p>
                  <h1 className="text-4xl md:text-7xl font-bold text-left">
                    <TypingText text="def learn_code():" />
                  </h1>
                  <div className="text-left space-y-2 text-lg md:text-2xl">
                    <p className="text-gray-300 code-font ml-8">
                      <TypingText text='    return "Master the Art of ' delay={2000} />
                    </p>
                    <p className="text-[#FF6B35] code-font ml-8 neon-text">
                      <TypingText text='    Programming"' delay={4000} />
                    </p>
                  </div>
                  <p className="text-gray-400 text-left code-font text-sm mt-4">
                    <TypingText text="# Join 50,000+ developers worldwide" delay={6000} />
                  </p>
                </div>
              </div>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 8, duration: 0.5 }}
                className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto code-font"
              >
                Experience the future of coding education with interactive terminals, 
                real-world projects, and expert mentorship.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 8.5, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Button asChild size="lg" className="btn-tech text-black font-bold px-8 py-4 text-lg code-font group">
                  <Link to="/courses">
                    <Terminal className="mr-2 h-5 w-5" />
                    Start Coding
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-black px-8 py-4 text-lg code-font glassmorphism">
                  <Link to="/signup">
                    <Rocket className="mr-2 h-5 w-5" />
                    Join Community
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ChevronRight className="h-6 w-6 text-[#FF6B35] rotate-90" />
          </motion.div>
        </section>

        <section className="py-20 relative">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6 code-font">
                <span className="gradient-text-orange">Why Developers</span> Choose Us
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto code-font">
                Built by developers, for developers. Experience coding education like never before.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="tech-card p-8 rounded-xl hover-lift group"
                >
                  <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center code-font text-[#FF6B35]">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-center mb-6 code-font">
                    {feature.description}
                  </p>
                  <CodeBlock className="text-center">
                    <p className="text-green-400 code-font text-sm">
                      <span className="text-orange-400">$</span> {feature.code}
                    </p>
                  </CodeBlock>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center tech-card p-6 rounded-xl"
                >
                  <div className="flex justify-center mb-4 text-[#FF6B35]">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-[#FF6B35] code-font mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 code-font text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-20 relative">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6 code-font">
                Featured <span className="gradient-text-orange">Courses</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto code-font">
                Cutting-edge curriculum designed by industry experts
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="tech-card rounded-xl overflow-hidden hover-lift group"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#FF6B35] text-black px-3 py-1 rounded-full text-xs font-bold code-font">
                        {course.level}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-[#FF6B35] hover:text-black">
                        <Play className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-[#FF6B35] code-font">
                      {course.title}
                    </h3>
                    <p className="text-gray-400 mb-4 code-font text-sm">
                      {course.description}
                    </p>
                    
                    <div className="flex justify-between items-center text-sm text-gray-500 mb-4 code-font">
                      <span>{course.duration}</span>
                      <span>{course.students} students</span>
                    </div>
                    
                    <Button className="w-full btn-tech text-black font-bold code-font">
                      Enroll Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center mt-12"
            >
              <Button asChild size="lg" variant="outline" className="border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-black px-8 py-4 text-lg code-font">
                <Link to="/courses">
                  View All Courses
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        <section className="py-20 relative">
          <div className="absolute inset-0 circuit-pattern opacity-10"></div>
          <div className="container mx-auto px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6 code-font">
                Ready to <span className="gradient-text-orange">Level Up</span>?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 code-font">
                Join thousands of developers who are already building the future
              </p>
              
              <div className="terminal-window max-w-2xl mx-auto p-8 mb-12">
                <div className="pt-8">
                  <p className="text-green-400 text-left code-font text-sm mb-4">
                    <span className="text-orange-400">$</span> git clone https://github.com/your-future.git
                  </p>
                  <p className="text-gray-400 text-left code-font text-sm mb-2">
                    Cloning into 'your-future'...
                  </p>
                  <p className="text-green-400 text-left code-font text-sm mb-4">
                    <span className="text-orange-400">$</span> cd your-future && npm start
                  </p>
                  <p className="text-[#FF6B35] text-left code-font text-sm">
                    🚀 Your coding journey starts now!
                  </p>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild size="lg" className="btn-tech text-black font-bold px-12 py-6 text-xl code-font glow-orange-strong">
                  <Link to="/signup">
                    <Terminal className="mr-3 h-6 w-6" />
                    Start Your Journey
                    <Rocket className="ml-3 h-6 w-6" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;