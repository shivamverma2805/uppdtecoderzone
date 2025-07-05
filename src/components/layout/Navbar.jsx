import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Settings, Bell, UserCircle, Menu, X, ChevronDown, BookOpen, Rss, FileText, Users, Briefcase, HeartHandshake as Handshake, MessageSquare, LogIn, UserPlus, LayoutDashboard, LogOut, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";

const NavDropdown = ({ label, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <button
          onMouseEnter={() => setOpen(true)}
          className="flex items-center px-4 py-2 rounded-full text-sm font-medium code-font text-gray-500 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300"
        >
          {label}
          <ChevronDown size={16} className={`ml-1 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        onMouseLeave={() => setOpen(false)}
        className="bg-white/80 dark:bg-[#0c0c0c]/90 backdrop-blur-lg border dark:border-orange-500/20 text-foreground code-font w-56 mt-2 shadow-lg dark:shadow-[0_0_20px_rgba(255,107,53,0.2)]"
      >
        {children}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const DropdownLink = ({ to, icon, children, onClick }) => (
  <DropdownMenuItem asChild className="focus:bg-orange-500/20 focus:text-orange-400 cursor-pointer p-0">
    <Link to={to} onClick={onClick} className="flex items-center w-full px-3 py-2 text-sm">
      {icon}
      {children}
    </Link>
  </DropdownMenuItem>
);

const IconButton = ({ icon, onClick, hasNotification = false }) => (
  <motion.button
    whileHover={{ scale: 1.1, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
    onClick={onClick}
    className="p-2 rounded-full hover:bg-orange-500/10 text-gray-500 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors relative"
  >
    {icon}
    {hasNotification && <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-orange-500 ring-2 ring-white dark:ring-[#0c0c0c]"></span>}
  </motion.button>
);

const UserMenu = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const menuContent = isAuthenticated ? (
    <>
      <DropdownMenuItem onSelect={() => navigate(`/${user.role}/dashboard`)} className="cursor-pointer focus:bg-orange-500/20 focus:text-orange-400">
        <LayoutDashboard size={16} className="mr-2" /> Dashboard
      </DropdownMenuItem>
      <DropdownMenuItem onSelect={() => navigate('/student/update-profile')} className="cursor-pointer focus:bg-orange-500/20 focus:text-orange-400">
        <UserCircle size={16} className="mr-2" /> Profile
      </DropdownMenuItem>
      <DropdownMenuSeparator className="bg-gray-200 dark:bg-orange-500/20" />
      <DropdownMenuItem onSelect={logout} className="text-red-500 dark:text-red-400 focus:text-red-600 dark:focus:text-red-400 focus:bg-red-500/20 cursor-pointer">
        <LogOut size={16} className="mr-2" /> Logout
      </DropdownMenuItem>
    </>
  ) : (
    <>
      <DropdownMenuItem onSelect={() => navigate('/login')} className="cursor-pointer focus:bg-orange-500/20 focus:text-orange-400">
        <LogIn size={16} className="mr-2" /> Login
      </DropdownMenuItem>
      <DropdownMenuItem onSelect={() => navigate('/signup')} className="cursor-pointer focus:bg-orange-500/20 focus:text-orange-400">
        <UserPlus size={16} className="mr-2" /> Sign Up
      </DropdownMenuItem>
    </>
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="rounded-full">
          <UserCircle className="h-8 w-8 text-gray-500 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition" />
        </motion.button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white/90 dark:bg-[#0c0c0c]/90 backdrop-blur-lg border dark:border-orange-500/20 text-foreground code-font w-48 mt-2 shadow-lg dark:shadow-[0_0_20px_rgba(255,107,53,0.2)]">
        {menuContent}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const handleToast = () => alert("🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀");

  const navLinks = {
    center: [
      {
        label: "Resources",
        children: [
          { to: "/resources/blogs", label: "Blogs", icon: <Rss size={16} className="mr-2" /> },
          { to: "/resources/tutorials", label: "Tutorials", icon: <BookOpen size={16} className="mr-2" /> },
          { to: "/resources/docs", label: "Docs", icon: <FileText size={16} className="mr-2" /> },
        ]
      },
      { to: "/pricing", label: "Pricing" },
      {
        label: "About Us",
        children: [
          { to: "/about/mission", label: "Our Mission", icon: <Briefcase size={16} className="mr-2" /> },
          { to: "/about/team", label: "Our Team", icon: <Users size={16} className="mr-2" /> },
          { to: "/about/careers", label: "Careers", icon: <Handshake size={16} className="mr-2" /> },
        ]
      },
      {
        label: "Contact",
        children: [
          { to: "/contact/support", label: "Support", icon: <MessageSquare size={16} className="mr-2" /> },
          { to: "/contact/feedback", label: "Feedback", icon: <MessageSquare size={16} className="mr-2" /> },
          { to: "/contact/partnerships", label: "Partnerships", icon: <Handshake size={16} className="mr-2" /> },
        ]
      },
    ]
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="sticky top-0 left-0 right-0 z-50 p-4">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 70, damping: 20, delay: 0.2 }}
        className="container mx-auto flex items-center justify-between p-2 bg-white/80 dark:bg-[#0c0c0c]/80 backdrop-blur-xl rounded-full border border-gray-200 dark:border-orange-500/30 shadow-lg dark:shadow-[0_0_20px_rgba(255,107,53,0.2)]"
      >
        <div className="flex items-center gap-2 md:gap-4">
          <Link to="/" className="flex items-center space-x-3 shrink-0">
            <img src="https://storage.googleapis.com/hostinger-horizons-assets-prod/e2f9dac5-645f-49ad-86a8-0b709ee8e0aa/941eb0db1ee1927260302d68c5e18117.png" alt="CodersZonee Logo" className="h-10 w-10 rounded-full bg-black ring-2 ring-orange-500/80" />
            <span className="hidden sm:block text-xl font-bold text-orange-500 code-font">CodersZonee</span>
          </Link>

          <div className="hidden md:flex relative items-center">
            <Search className="absolute left-3 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Search ..."
              className="bg-gray-100 dark:bg-gray-900/80 border-none rounded-full pl-9 w-40 lg:w-64 h-9 text-sm text-foreground placeholder:text-gray-500 focus:ring-1 focus:ring-orange-500"
            />
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-center flex-grow">
          <div className="flex items-center gap-2">
            <Button asChild variant="outline" className="border-gray-500/50 dark:border-white/50 bg-transparent text-foreground hover:bg-orange-500 hover:text-black dark:hover:text-black hover:border-orange-500 rounded-full transition-all duration-300">
              <Link to="/courses">Courses</Link>
            </Button>
            {navLinks.center.map((link) => (
              <div key={link.label || link.to}>
                {link.children ? (
                  <NavDropdown label={link.label}>
                    {link.children.map(child => (
                      <DropdownLink key={child.to} to={child.to} icon={child.icon}>{child.label}</DropdownLink>
                    ))}
                  </NavDropdown>
                ) : (
                  <Link to={link.to} className="flex items-center px-4 py-2 rounded-full text-sm font-medium code-font text-gray-500 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300">
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-1 md:gap-2">
          <IconButton onClick={toggleTheme} icon={theme === 'light' ? <Moon size={20} /> : <Sun size={20} />} />
          <div className="hidden sm:flex items-center gap-1">
            <IconButton icon={<Settings size={20} />} onClick={handleToast} />
            <IconButton icon={<Bell size={20} />} onClick={handleToast} hasNotification />
          </div>
          <UserMenu />
          <div className="lg:hidden">
            <IconButton icon={<Menu size={24} />} onClick={() => setIsMobileMenuOpen(true)} />
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={closeMobileMenu}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-full max-w-sm bg-white dark:bg-[#0c0c0c]/95 shadow-2xl p-6 flex flex-col border-l border-gray-200 dark:border-orange-500/30"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-8">
                <span className="text-xl font-bold text-orange-500 code-font">Menu</span>
                <IconButton icon={<X size={24} />} onClick={closeMobileMenu} />
              </div>
              <div className="space-y-4">
                <Link to="/courses" onClick={closeMobileMenu} className="flex items-center px-3 py-2 rounded-md text-base font-medium code-font text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 hover:bg-orange-500/10">
                  Courses
                </Link>
                {[...navLinks.center].map((link) => (
                  <div key={link.label || link.to}>
                    {link.children ? (
                      <div className="space-y-2">
                         <span className="px-3 text-sm font-semibold text-orange-500 dark:text-orange-400">{link.label}</span>
                         {link.children.map(child => (
                           <Link key={child.to} to={child.to} onClick={closeMobileMenu} className="flex items-center px-3 py-2 rounded-md text-base font-medium code-font text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 hover:bg-orange-500/10">
                              {child.icon}{child.label}
                           </Link>
                         ))}
                      </div>
                    ) : (
                      <Link to={link.to} onClick={closeMobileMenu} className="flex items-center px-3 py-2 rounded-md text-base font-medium code-font text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 hover:bg-orange-500/10">
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;