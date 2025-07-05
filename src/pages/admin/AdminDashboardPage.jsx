import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, BookOpenText, BarChart3, Settings, ShieldCheck, DollarSign, Tag, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const AdminDashboardPage = () => {
  const { toast } = useToast();

  const handleFeatureClick = (featureName) => {
    toast({
      title: `🚧 ${featureName} Not Implemented`,
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const adminSections = [
    { title: "User Management", icon: <Users className="h-6 w-6 text-[#FF6B35]" />, value: "1,500 Users", desc: "Manage students & instructors", path: "/admin/user-management" },
    { title: "Course Approval", icon: <BookOpenText className="h-6 w-6 text-[#FF6B35]" />, value: "15 Pending", desc: "Review and approve courses", path: "/admin/course-approval" },
    { title: "Payment Logs", icon: <FileText className="h-6 w-6 text-[#FF6B35]" />, value: "View Logs", desc: "Track all transactions", path: "/admin/payment-logs" },
    { title: "Sales Analytics", icon: <BarChart3 className="h-6 w-6 text-[#FF6B35]" />, value: "$50k Revenue", desc: "Monitor platform performance", path: "/admin/sales-analytics" },
    { title: "Offers/Discounts", icon: <Tag className="h-6 w-6 text-[#FF6B35]" />, value: "Manage Offers", desc: "Create & manage promotions", path: "/admin/offers-management" },
    { title: "System Settings", icon: <Settings className="h-6 w-6 text-[#FF6B35]" />, value: "Configure", desc: "Adjust platform settings", action: () => handleFeatureClick("System Settings") },
  ];

  return (
    <>
      <Helmet>
        <title>Admin Dashboard - CodersZonee</title>
        <meta name="description" content="Manage the CodersZonee system, users, courses, and settings." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-8 px-4"
      >
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-[#FF6B35]">Admin Dashboard</h1>
          <p className="text-lg text-slate-300">Oversee and manage all aspects of the CodersZonee platform.</p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {adminSections.map(item => (
            <Card key={item.title} className="bg-slate-800 border-slate-700 text-white hover:shadow-lg hover:shadow-orange-500/20 transition-shadow flex flex-col">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-semibold text-white">{item.title}</CardTitle>
                {item.icon}
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="text-3xl font-bold text-[#FF6B35]">{item.value}</div>
                <p className="text-sm text-slate-400 mb-4">{item.desc}</p>
                {item.path ? (
                  <Button asChild variant="outline" className="w-full border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-black">
                    <Link to={item.path}>Go to {item.title}</Link>
                  </Button>
                ) : (
                  <Button variant="outline" className="w-full border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-black" onClick={item.action}>
                    {item.title}
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Card className="bg-slate-800 border-slate-700 text-white">
          <CardHeader>
            <CardTitle className="text-2xl text-[#FF6B35] flex items-center">
              <ShieldCheck className="mr-3 h-7 w-7" /> Content Moderation & System Health
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300">
              This area will provide tools for content moderation, system health monitoring, and other administrative tasks.
              Full functionality is under development.
            </p>
            <div className="mt-6 p-6 bg-slate-700 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Placeholder: Admin Tools</h3>
              <ul className="list-disc list-inside text-slate-400 space-y-1">
                <li>Advanced User Filtering & Actions</li>
                <li>Detailed Course Review Interface</li>
                <li>Transaction Search & Refund Processing</li>
                <li>Customizable Sales Reports & Charts</li>
                <li>Coupon Code Generation & Discount Rules</li>
                <li>Platform Theme & Email Template Customization</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </>
  );
};

export default AdminDashboardPage;