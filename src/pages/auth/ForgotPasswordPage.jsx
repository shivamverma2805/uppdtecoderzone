import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { KeyRound } from 'lucide-react';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "🔑 Password Reset Email Sent",
        description: `If an account exists for ${email}, you will receive an email with instructions to reset your password.`,
      });
      setLoading(false);
      setEmail('');
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Forgot Password - EduPlatform</title>
        <meta name="description" content="Reset your EduPlatform account password." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center min-h-[calc(100vh-150px)] py-12 px-4"
      >
        <Card className="w-full max-w-md bg-slate-800 border-slate-700 text-white shadow-2xl shadow-orange-500/10">
          <CardHeader className="text-center">
            <motion.div 
              initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="mx-auto mb-4 p-3 bg-[#FF6B35] rounded-full w-fit"
            >
              <KeyRound size={32} className="text-black" />
            </motion.div>
            <CardTitle className="text-3xl font-bold text-[#FF6B35]">Forgot Your Password?</CardTitle>
            <CardDescription className="text-slate-400">No worries! Enter your email and we'll send you a reset link.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="email-forgot" className="text-slate-300">Email Address</Label>
                <Input 
                  id="email-forgot" 
                  type="email" 
                  placeholder="you@example.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                  className="bg-slate-700 border-slate-600 text-white focus:border-[#FF6B35]" 
                />
              </div>
              <Button type="submit" className="w-full bg-[#FF6B35] text-black hover:bg-orange-400 text-lg py-3" disabled={loading}>
                {loading ? 'Sending...' : 'Send Reset Link'}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="text-center">
            <p className="text-sm text-slate-400">
              Remember your password? <Link to="/login" className="font-semibold text-[#FF6B35] hover:underline">Log in</Link>
            </p>
          </CardFooter>
        </Card>
      </motion.div>
    </>
  );
};

export default ForgotPasswordPage;