import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FileText, Search, Filter, Download } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const mockPaymentLogs = [
  { id: "txn_123abc", date: "2023-03-15", user: "Alice Johnson", amount: "$49.00", course: "Intro to React", status: "Completed", type: "Enrollment" },
  { id: "txn_456def", date: "2023-03-14", user: "Bob Smith (Tutor)", amount: "$250.00", status: "Processed", type: "Withdrawal" },
  { id: "txn_789ghi", date: "2023-03-12", user: "Charlie Brown", amount: "$99.00", course: "Advanced Python", status: "Refunded", type: "Refund" },
];

const AdminPaymentLogsPage = () => {
  const { toast } = useToast();

  const handleAction = (actionName) => {
    toast({
      title: `🚧 ${actionName} (Mock)`,
      description: `This action is a placeholder. Full functionality coming soon! 🚀`,
    });
  };

  return (
    <>
      <Helmet>
        <title>Payment Logs - Admin - CodersZonee</title>
        <meta name="description" content="View and manage all payment transactions on the CodersZonee platform." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-8 px-4"
      >
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-[#FF6B35] flex items-center">
            <FileText className="mr-3 h-10 w-10" /> Payment Logs
          </h1>
          <p className="text-lg text-slate-300">Track all financial transactions across the platform.</p>
        </header>

        <Card className="bg-slate-800 border-slate-700 text-white">
          <CardHeader>
            <CardTitle className="text-2xl text-[#FF6B35]">Transaction History</CardTitle>
            <CardDescription className="text-slate-400">A detailed record of all payments, withdrawals, and refunds.</CardDescription>
            <div className="mt-4 flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Input type="search" placeholder="Search by Txn ID, User, Course..." className="pl-10 bg-slate-700 border-slate-600 text-white focus:border-[#FF6B35]" />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              </div>
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white" onClick={() => handleAction("Filter Transactions")}>
                <Filter className="mr-2 h-4 w-4" /> Filter
              </Button>
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white" onClick={() => handleAction("Export Logs")}>
                <Download className="mr-2 h-4 w-4" /> Export CSV
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-slate-300">
                <thead className="text-xs text-slate-400 uppercase bg-slate-700">
                  <tr>
                    <th scope="col" className="px-6 py-3">Transaction ID</th>
                    <th scope="col" className="px-6 py-3">Date</th>
                    <th scope="col" className="px-6 py-3">User/Tutor</th>
                    <th scope="col" className="px-6 py-3">Amount</th>
                    <th scope="col" className="px-6 py-3">Type</th>
                    <th scope="col" className="px-6 py-3">Course/Details</th>
                    <th scope="col" className="px-6 py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {mockPaymentLogs.map(log => (
                    <tr key={log.id} className="bg-slate-800 border-b border-slate-700 hover:bg-slate-700/50">
                      <td className="px-6 py-4 font-medium text-white whitespace-nowrap">{log.id}</td>
                      <td className="px-6 py-4">{log.date}</td>
                      <td className="px-6 py-4">{log.user}</td>
                      <td className="px-6 py-4">{log.amount}</td>
                      <td className="px-6 py-4">{log.type}</td>
                      <td className="px-6 py-4">{log.course || 'N/A'}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          log.status === 'Completed' || log.status === 'Processed' ? 'bg-green-600/30 text-green-300' : 
                          log.status === 'Refunded' ? 'bg-yellow-600/30 text-yellow-300' : 'bg-red-600/30 text-red-300'
                        }`}>
                          {log.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Placeholder for pagination */}
            <div className="mt-6 text-center text-slate-400">Pagination controls will be here.</div>
          </CardContent>
        </Card>
      </motion.div>
    </>
  );
};

export default AdminPaymentLogsPage;