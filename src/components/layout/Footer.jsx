import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  const FooterLink = ({ to, children }) => (
    <li>
      <Link 
        to={to} 
        className="text-sm text-gray-400 hover:text-[#FF6B35] transition-colors code-font relative group"
      >
        <span className="relative">
          {children}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6B35] group-hover:w-full transition-all duration-300"></span>
        </span>
      </Link>
    </li>
  );

  return (
    <footer className="relative bg-black border-t border-orange-500/20 overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-20"></div>
      
      <div className="relative container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 lg:col-span-2"
          >
            <Link to="/" className="flex items-center space-x-2">
              <Terminal className="h-8 w-8 text-[#FF6B35] glow-orange" />
              <span className="text-xl font-bold gradient-text-orange code-font">CodersZonee</span>
            </Link>
            <p className="text-sm text-gray-400 code-font leading-relaxed">
              Empowering the next generation of developers with cutting-edge courses and a vibrant community.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-[#FF6B35] transition-all duration-300 p-2 rounded-lg hover:bg-orange-500/10"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <span className="text-lg font-semibold text-[#FF6B35] code-font">About Us</span>
            <ul className="space-y-2">
              <FooterLink to="/about/mission">Our Mission</FooterLink>
              <FooterLink to="/about/team">Our Team</FooterLink>
              <FooterLink to="/about/careers">Careers</FooterLink>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <span className="text-lg font-semibold text-[#FF6B35] code-font">Resources</span>
            <ul className="space-y-2">
              <FooterLink to="/courses">Courses</FooterLink>
              <FooterLink to="/pricing">Pricing</FooterLink>
              <FooterLink to="/contact/support">Contact Us</FooterLink>
              <FooterLink to="/signup?role=tutor">Become an Instructor</FooterLink>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <span className="text-lg font-semibold text-[#FF6B35] code-font">Community</span>
            <ul className="space-y-2">
                <FooterLink to="/referral-program">Referral Program</FooterLink>
                <FooterLink to="/resources/blogs">Blogs</FooterLink>
                <FooterLink to="/popular-courses">Popular Courses</FooterLink>
            </ul>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-orange-500/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400 code-font">
              &copy; {currentYear} CodersZonee. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-xs text-gray-500 code-font">
                <Link to="/terms" className="hover:text-orange-400 transition-colors">Terms of Service</Link>
                <span className='text-gray-600'>|</span>
                <Link to="/terms" className="hover:text-orange-400 transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;