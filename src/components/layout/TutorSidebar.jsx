import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  BookOpen, 
  Plus, 
  Clock, 
  CheckCircle, 
  User, 
  DollarSign, 
  CreditCard,
  Settings,
  LogOut,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';

const TutorSidebar = () => {
  const location = useLocation();
  const { user, logout } = useAuth();
  const [expandedSections, setExpandedSections] = useState({
    courses: true,
    profile: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const menuItems = [
    {
      title: 'Dashboard',
      icon: LayoutDashboard,
      href: '/tutor-dashboard',
      exact: true
    },
    {
      title: 'Course Management',
      icon: BookOpen,
      section: 'courses',
      items: [
        { title: 'Create Course', icon: Plus, href: '/tutor/create-course' },
        { title: 'Pending Courses', icon: Clock, href: '/tutor/pending-courses' },
        { title: 'Approved Courses', icon: CheckCircle, href: '/tutor/approved-courses' }
      ]
    },
    {
      title: 'Profile & Settings',
      icon: User,
      section: 'profile',
      items: [
        { title: 'Profile Management', icon: User, href: '/tutor/profile' },
        { title: 'Password Change', icon: Settings, href: '/tutor/profile?tab=password' },
        { title: 'Earnings Dashboard', icon: DollarSign, href: '/tutor/earnings' },
        { title: 'Withdrawal Options', icon: CreditCard, href: '/tutor/withdrawal' }
      ]
    }
  ];

  const isActive = (href, exact = false) => {
    if (exact) {
      return location.pathname === href;
    }
    return location.pathname.startsWith(href);
  };

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white dark:bg-slate-900 shadow-lg border-r border-gray-200 dark:border-slate-800 z-40">
      <div className="flex flex-col h-full">
        <div className="p-6 border-b border-gray-200 dark:border-slate-800">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">EduPlatform</span>
          </Link>
        </div>

        <div className="p-4 border-b border-gray-200 dark:border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-orange-100 dark:bg-orange-500/20 rounded-full flex items-center justify-center">
              <span className="text-orange-500 dark:text-orange-400 font-semibold">
                {user?.name?.charAt(0)}
              </span>
            </div>
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">{user?.name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">{user?.role}</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {menuItems.map((item, index) => (
            <div key={index}>
              {item.section ? (
                <div>
                  <button
                    onClick={() => toggleSection(item.section)}
                    className="w-full flex items-center justify-between p-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.title}</span>
                    </div>
                    {expandedSections[item.section] ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </button>
                  
                  {expandedSections[item.section] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="ml-4 mt-2 space-y-1"
                    >
                      {item.items.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.href}
                          className={`sidebar-item flex items-center space-x-3 p-3 rounded-lg transition-all ${
                            isActive(subItem.href) 
                              ? 'active bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 border-l-4 border-orange-500 dark:border-orange-400' 
                              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-800/50'
                          }`}
                        >
                          <subItem.icon className="w-4 h-4" />
                          <span className="text-sm">{subItem.title}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ) : (
                <Link
                  to={item.href}
                  className={`sidebar-item flex items-center space-x-3 p-3 rounded-lg transition-all ${
                    isActive(item.href, item.exact) 
                      ? 'active bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 border-l-4 border-orange-500 dark:border-orange-400' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.title}</span>
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-200 dark:border-slate-800">
          <Button
            onClick={logout}
            variant="ghost"
            className="w-full justify-start text-red-600 dark:text-red-500 hover:text-red-700 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10"
          >
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TutorSidebar;