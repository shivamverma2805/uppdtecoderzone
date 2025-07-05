import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, BarChartBig } from 'lucide-react';

const EarningsPage = () => {
  return (
    <>
      <Helmet>
        <title>Earnings - Tutor Dashboard</title>
        <meta name="description" content="Track your earnings and payment history." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-8 px-4"
      >
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-[#FF6B35] flex items-center">
            <DollarSign className="mr-3 h-10 w-10" /> Earnings Dashboard
          </h1>
          <p className="text-lg text-slate-300">View your total earnings, breakdowns, and payment history.</p>
        </header>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-slate-800 border-slate-700 text-white">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-[#FF6B35]">Total Earnings</CardTitle>
                    <DollarSign className="h-5 w-5 text-slate-400" />
                </CardHeader>
                <CardContent>
                    <div className="text-3xl font-bold">$10,572.00</div>
                    <p className="text-xs text-slate-400">Lifetime earnings on EduPlatform</p>
                </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700 text-white">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-[#FF6B35]">This Month's Earnings</CardTitle>
                    <BarChartBig className="h-5 w-5 text-slate-400" />
                </CardHeader>
                <CardContent>
                    <div className="text-3xl font-bold">$2,500.00</div>
                    <p className="text-xs text-slate-400">+15% from last month</p>
                </CardContent>
            </Card>
        </div>

        <Card className="bg-slate-800 border-slate-700 text-white">
          <CardHeader>
            <CardTitle className="text-2xl text-[#FF6B35]">Payment History & Analytics</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300">
              This section will display detailed earnings breakdowns, revenue charts, and payment history.
              Stay tuned for more features!
            </p>
            <div className="mt-6 p-6 bg-slate-700 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Placeholder: Earnings Chart</h3>
              <div className="h-40 flex items-center justify-center text-slate-400">Revenue Analytics Chart Coming Soon</div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </>
  );
};

export default EarningsPage;