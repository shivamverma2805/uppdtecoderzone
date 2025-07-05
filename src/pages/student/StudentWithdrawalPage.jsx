import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { Banknote, Wallet, Loader2 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';

const StudentWithdrawalPage = () => {
  const { toast } = useToast();
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const availableBalance = 50.00; // Mock data

  const handleWithdrawal = (e) => {
    e.preventDefault();
    const withdrawalAmount = parseFloat(amount);

    if (!amount || withdrawalAmount <= 0) {
      toast({ title: 'Invalid Amount', description: 'Please enter a valid amount to withdraw.', variant: 'destructive' });
      return;
    }
    if (withdrawalAmount > availableBalance) {
      toast({ title: 'Insufficient Funds', description: 'You cannot withdraw more than your available balance.', variant: 'destructive' });
      return;
    }
    if (withdrawalAmount < 20) {
      toast({ title: 'Minimum Amount', description: 'Minimum withdrawal amount is $20.00.', variant: 'destructive' });
      return;
    }
    if (!paymentMethod) {
      toast({ title: 'No Payment Method', description: 'Please select a payment method.', variant: 'destructive' });
      return;
    }

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: '✅ Withdrawal Requested!',
        description: `Your request to withdraw $${withdrawalAmount.toFixed(2)} via ${paymentMethod} has been submitted.`,
        className: 'bg-green-600 text-white border-green-600',
      });
      // Here you would typically reset the dialog state and close it.
      // For this mock, we can just log it.
      console.log(`Withdrawal of $${withdrawalAmount} via ${paymentMethod} processed.`);
    }, 2000);
  };

  return (
    <>
      <Helmet>
        <title>Withdraw Earnings - CodersZonee</title>
        <meta name="description" content="Withdraw your referral earnings from CodersZonee." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-8 px-4"
      >
        <Dialog defaultOpen={true}>
          <DialogContent className="bg-slate-800 border-slate-700 text-white sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="text-2xl text-[#FF6B35] flex items-center">
                <Banknote className="mr-2" /> Request Withdrawal
              </DialogTitle>
              <DialogDescription className="text-slate-400">
                Transfer your earnings to your preferred account. Minimum withdrawal is $20.00.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleWithdrawal}>
              <div className="grid gap-4 py-4">
                <div className="p-3 bg-slate-700 rounded-md text-center">
                  <p className="text-sm text-slate-400">Available Balance</p>
                  <p className="text-3xl font-bold text-white">${availableBalance.toFixed(2)}</p>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="amount" className="text-right text-slate-300">
                    Amount
                  </Label>
                  <Input
                    id="amount"
                    type="number"
                    step="0.01"
                    min="20"
                    max={availableBalance}
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="$0.00"
                    className="col-span-3 bg-slate-700 border-slate-600 focus:border-[#FF6B35]"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="payment-method" className="text-right text-slate-300">
                    Method
                  </Label>
                  <div className="col-span-3">
                    <Select onValueChange={setPaymentMethod}>
                      <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                        <SelectValue placeholder="Select payment method" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-700 text-white border-slate-600">
                        <SelectItem value="PayPal">PayPal</SelectItem>
                        <SelectItem value="Bank Transfer">Bank Transfer (mock)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" className="w-full bg-[#FF6B35] text-black hover:bg-orange-400" disabled={isProcessing}>
                  {isProcessing ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...
                    </>
                  ) : (
                    'Confirm Withdrawal'
                  )}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
        
        {/* Added some background content for context */}
        <div className="text-center text-white mt-8 opacity-20">
            <h1 className="text-4xl font-bold">Withdrawal Portal</h1>
            <p className="text-lg">Please use the dialog to complete your transaction.</p>
        </div>
      </motion.div>
    </>
  );
};

export default StudentWithdrawalPage;