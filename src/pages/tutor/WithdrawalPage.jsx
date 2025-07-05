import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CreditCard, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'; // Added missing import
import { useToast } from '@/components/ui/use-toast';

const WithdrawalPage = () => {
  const { toast } = useToast();

  const handleWithdraw = () => {
    toast({
      title: "💸 Withdrawal Requested (Mock)",
      description: "Your withdrawal request has been submitted. Full functionality coming soon! 🚀",
    });
  };
  
  const handleSetupPayment = () => {
    toast({
      title: "🚧 Feature Not Implemented",
      description: "Payment method setup is coming soon! 🚀",
      variant: "destructive",
    });
  };


  return (
    <>
      <Helmet>
        <title>Withdrawal - Tutor Dashboard</title>
        <meta name="description" content="Manage your withdrawals and payment methods." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-8 px-4"
      >
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-[#FF6B35] flex items-center">
            <CreditCard className="mr-3 h-10 w-10" /> Withdrawal Options
          </h1>
          <p className="text-lg text-slate-300">Request withdrawals and manage your payment methods.</p>
        </header>

        <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-slate-800 border-slate-700 text-white">
                <CardHeader>
                    <CardTitle className="text-2xl text-[#FF6B35]">Request Withdrawal</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-slate-300">Available Balance: <span className="font-bold text-white">$1,250.00</span></p>
                    <p className="text-xs text-slate-400">Minimum withdrawal: $50.00</p>
                    <div>
                        <label htmlFor="withdraw-amount" className="text-sm font-medium text-slate-300">Amount to Withdraw</label>
                        <Input id="withdraw-amount" type="number" placeholder="50.00" className="bg-slate-700 border-slate-600 text-white focus:border-[#FF6B35]" />
                    </div>
                    <Button onClick={handleWithdraw} className="w-full bg-[#FF6B35] text-black hover:bg-orange-400">
                        <Send className="mr-2 h-4 w-4" /> Request Withdrawal
                    </Button>
                </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700 text-white">
                <CardHeader>
                    <CardTitle className="text-2xl text-[#FF6B35]">Payment Methods</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-slate-300 mb-4">Set up your preferred payment method for withdrawals.</p>
                    <Button onClick={handleSetupPayment} variant="outline" className="w-full border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-black">
                        Setup Payment Method
                    </Button>
                    <div className="mt-6">
                        <h4 className="text-lg font-semibold text-white mb-2">Transaction History</h4>
                        <p className="text-slate-400 text-sm">Withdrawal status tracking and history will appear here.</p>
                    </div>
                </CardContent>
            </Card>
        </div>
      </motion.div>
    </>
  );
};

export default WithdrawalPage;