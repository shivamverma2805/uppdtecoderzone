import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gift, Copy, Share2, BarChart3, DollarSign, Users, Clock, CheckCircle, XCircle } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/components/ui/use-toast';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const mockWithdrawalHistory = [
  { id: 'wd-003', date: '2025-06-20', amount: 50.00, method: 'PayPal', status: 'Completed' },
  { id: 'wd-002', date: '2025-05-15', amount: 35.50, method: 'Bank Transfer', status: 'Pending' },
  { id: 'wd-001', date: '2025-04-10', amount: 25.00, method: 'PayPal', status: 'Failed' },
];

const StatusBadge = ({ status }) => {
  const baseClasses = "px-2 py-1 text-xs font-semibold rounded-full inline-flex items-center";
  const statusStyles = {
    Completed: 'bg-green-500/20 text-green-400',
    Pending: 'bg-yellow-500/20 text-yellow-400',
    Failed: 'bg-red-500/20 text-red-400',
  };
  const Icon = {
    Completed: CheckCircle,
    Pending: Clock,
    Failed: XCircle,
  }[status];

  return (
    <span className={`${baseClasses} ${statusStyles[status]}`}>
      <Icon className="h-3 w-3 mr-1" />
      {status}
    </span>
  );
};


const StudentReferralSystemPage = () => {
  const { user } = useAuth();
  const { toast } = useToast();

  const referralCode = `CZ-${user?.email?.substring(0,3).toUpperCase() || 'REF'}${new Date().getFullYear().toString().slice(-2)}`;
  const referralLink = `https://coderszonee.com/signup?ref=${referralCode}`;
  
  const totalEarned = 110.50;
  const availableBalance = 75.00;

  const copyReferralLink = () => {
    navigator.clipboard.writeText(referralLink);
    toast({ title: "🔗 Link Copied!", description: "Referral link copied to clipboard." });
  };

  return (
    <>
      <Helmet>
        <title>Referral System - CodersZonee</title>
        <meta name="description" content="Refer friends to CodersZonee and earn rewards. Track your referrals and earnings." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-[#FF6B35] flex items-center">
            <Gift className="mr-3 h-10 w-10" /> Referral Affiliate Dashboard
          </h1>
          <p className="text-lg text-slate-300">Share your link, track sales, and withdraw earnings!</p>
        </header>

        <Card className="bg-slate-800 border-slate-700 text-white">
          <CardHeader>
            <CardTitle className="text-2xl text-[#FF6B35]">Your Referral Tools</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-slate-700/50 rounded-lg border border-slate-600">
              <h3 className="text-lg font-semibold text-white mb-2">Your Unique Referral Link</h3>
              <div className="flex items-center justify-between p-3 bg-slate-600/50 rounded-md">
                <span className="text-slate-300 truncate font-mono text-sm">
                  {referralLink}
                </span>
                <Button variant="ghost" size="sm" onClick={copyReferralLink} className="text-[#FF6B35] hover:text-orange-400">
                  <Copy className="mr-2 h-4 w-4" /> Copy
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="bg-slate-700/50 border-slate-600">
                <CardHeader className="pb-2 flex flex-row items-center justify-between">
                  <CardTitle className="text-sm font-medium text-slate-400">Total Referrals</CardTitle>
                  <Users className="h-5 w-5 text-[#FF6B35]"/>
                </CardHeader>
                <CardContent><p className="text-3xl font-bold text-white">12</p></CardContent>
              </Card>
              <Card className="bg-slate-700/50 border-slate-600">
                <CardHeader className="pb-2 flex flex-row items-center justify-between">
                  <CardTitle className="text-sm font-medium text-slate-400">Successful Sales</CardTitle>
                  <CheckCircle className="h-5 w-5 text-green-400"/>
                </CardHeader>
                <CardContent><p className="text-3xl font-bold text-white">5</p></CardContent>
              </Card>
              <Card className="bg-slate-700/50 border-slate-600">
                <CardHeader className="pb-2 flex flex-row items-center justify-between">
                  <CardTitle className="text-sm font-medium text-slate-400">Total Earned</CardTitle>
                  <BarChart3 className="h-5 w-5 text-[#FF6B35]"/>
                </CardHeader>
                <CardContent><p className="text-3xl font-bold text-white">₹{totalEarned.toFixed(2)}</p></CardContent>
              </Card>
              <Card className="bg-green-500/20 border-green-500/30">
                <CardHeader className="pb-2 flex flex-row items-center justify-between">
                  <CardTitle className="text-sm font-medium text-green-300">Available Balance</CardTitle>
                  <DollarSign className="h-5 w-5 text-green-300"/>
                </CardHeader>
                <CardContent><p className="text-3xl font-bold text-white">₹{availableBalance.toFixed(2)}</p></CardContent>
              </Card>
            </div>
            
            <div>
              <Button asChild size="lg" className="bg-[#FF6B35] text-black hover:bg-orange-400 btn-tech">
                <Link to="/student/withdrawal">Withdraw Earnings</Link>
              </Button>
              <p className="text-xs text-slate-400 mt-2">Minimum withdrawal: ₹500.00. Processing time: 3-5 business days.</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700 text-white">
          <CardHeader>
            <CardTitle className="text-2xl text-[#FF6B35]">Withdrawal History</CardTitle>
            <CardDescription className="text-slate-400">A record of your past withdrawal transactions.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-slate-600 hover:bg-slate-700/50">
                  <TableHead className="text-white">Transaction ID</TableHead>
                  <TableHead className="text-white">Date</TableHead>
                  <TableHead className="text-white">Amount</TableHead>
                  <TableHead className="text-white">Method</TableHead>
                  <TableHead className="text-right text-white">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockWithdrawalHistory.map((tx) => (
                  <TableRow key={tx.id} className="border-slate-700 hover:bg-slate-700/50">
                    <TableCell className="font-mono text-xs">{tx.id}</TableCell>
                    <TableCell>{tx.date}</TableCell>
                    <TableCell>₹{tx.amount.toFixed(2)}</TableCell>
                    <TableCell>{tx.method}</TableCell>
                    <TableCell className="text-right"><StatusBadge status={tx.status} /></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

      </motion.div>
    </>
  );
};

export default StudentReferralSystemPage;