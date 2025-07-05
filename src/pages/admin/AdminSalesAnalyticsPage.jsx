import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart3, DollarSign, TrendingUp, Users, BookOpen, Filter } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const AdminSalesAnalyticsPage = () => {
  const { toast } = useToast();

  const handleAction = (actionName) => {
    toast({
      title: `🚧 ${actionName} (Mock)`,
      description: `This action is a placeholder. Full functionality coming soon! 🚀`,
    });
  };

  const stats = [
    { title: "Total Revenue", value: "$125,670.50", icon: <DollarSign className="h-6 w-6 text-green-400" />, trend: "+15.2% this month" },
    { title: "Total Sales", value: "4,320", icon: <TrendingUp className="h-6 w-6 text-blue-400" />, trend: "250 new sales today" },
    { title: "Active Students", value: "25,890", icon: <Users className="h-6 w-6 text-purple-400" />, trend: "+500 this week" },
    { title: "Top Selling Course", value: "Full-Stack Mastery", icon: <BookOpen className="h-6 w-6 text-orange-400" />, trend: "580 enrollments" },
  ];

  return (
    <>
      <Helmet>
        <title>Sales Analytics - Admin - CodersZonee</title>
        <meta name="description" content="Monitor sales performance, revenue, and key metrics for the CodersZonee platform." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-8 px-4"
      >
        <header className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-4xl font-bold text-[#FF6B35] flex items-center">
              <BarChart3 className="mr-3 h-10 w-10" /> Sales Analytics
            </h1>
            <p className="text-lg text-slate-300">Track platform revenue, sales trends, and user engagement.</p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0 border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white" onClick={() => handleAction("Filter Date Range")}>
            <Filter className="mr-2 h-4 w-4" /> Date Range
          </Button>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-slate-800 border-slate-700 text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-slate-400">{stat.title}</CardTitle>
                {stat.icon}
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <p className="text-xs text-slate-500">{stat.trend}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="bg-slate-800 border-slate-700 text-white">
            <CardHeader>
              <CardTitle className="text-xl text-[#FF6B35]">Revenue Over Time</CardTitle>
              <CardDescription className="text-slate-400">Monthly revenue trend for the last 12 months.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-slate-700 rounded-md flex items-center justify-center text-slate-500">
                Revenue Chart Placeholder (Integration with charting library needed)
              </div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800 border-slate-700 text-white">
            <CardHeader>
              <CardTitle className="text-xl text-[#FF6B35]">Course Performance</CardTitle>
              <CardDescription className="text-slate-400">Enrollments and revenue by top courses.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-slate-700 rounded-md flex items-center justify-center text-slate-500">
                Course Performance Chart Placeholder
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Add more detailed reports/tables here */}
      </motion.div>
    </>
  );
};

export default AdminSalesAnalyticsPage;