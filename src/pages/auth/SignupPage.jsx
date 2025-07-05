import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/components/ui/use-toast';
import { UserPlus } from 'lucide-react';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('student');
  const [referralCode, setReferralCode] = useState('');
  const { signup, loading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast({
        title: "⚠️ Passwords do not match",
        description: "Please ensure your passwords match.",
        variant: "destructive",
      });
      return;
    }
    try {
      const user = await signup(email, password, role, referralCode);
      toast({
        title: "🎉 Account Created!",
        description: `Welcome, ${user.name || user.email}! Your account as a ${role} has been created.`,
      });
      if (user.role === 'tutor') navigate('/tutor/dashboard');
      else navigate('/student/dashboard');
    } catch (error) {
      toast({
        title: "⚠️ Signup Failed",
        description: error.message || "An error occurred during signup. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Sign Up - CodersZonee</title>
        <meta name="description" content="Create your CodersZonee account." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center min-h-[calc(100vh-150px)] py-12 px-4"
      >
        <Card className="w-full max-w-lg bg-slate-800 border-slate-700 text-white shadow-2xl shadow-orange-500/10">
          <CardHeader className="text-center">
            <motion.div 
              initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="mx-auto mb-4 p-3 bg-[#FF6B35] rounded-full w-fit"
            >
              <UserPlus size={32} className="text-black" />
            </motion.div>
            <CardTitle className="text-3xl font-bold text-[#FF6B35]">Create Your Account</CardTitle>
            <CardDescription className="text-slate-400">Join our community of learners and educators.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="email-signup" className="text-slate-300">Email Address</Label>
                <Input id="email-signup" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required className="bg-slate-700 border-slate-600 text-white focus:border-[#FF6B35]" />
              </div>
              <div>
                <Label htmlFor="password-signup" className="text-slate-300">Password</Label>
                <Input id="password-signup" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required className="bg-slate-700 border-slate-600 text-white focus:border-[#FF6B35]" />
              </div>
              <div>
                <Label htmlFor="confirm-password-signup" className="text-slate-300">Confirm Password</Label>
                <Input id="confirm-password-signup" type="password" placeholder="••••••••" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required className="bg-slate-700 border-slate-600 text-white focus:border-[#FF6B35]" />
              </div>
              <div>
                <Label htmlFor="role-signup" className="text-slate-300">I am a...</Label>
                <select id="role-signup" value={role} onChange={(e) => setRole(e.target.value)} className="w-full p-2.5 rounded-md bg-slate-700 border-slate-600 text-white focus:border-[#FF6B35] focus:ring-[#FF6B35] h-10">
                  <option value="student">Student</option>
                  <option value="tutor">Tutor</option>
                </select>
              </div>
              <div>
                <Label htmlFor="referral-signup" className="text-slate-300">Referral Code (Optional)</Label>
                <Input id="referral-signup" type="text" placeholder="Enter referral code" value={referralCode} onChange={(e) => setReferralCode(e.target.value)} className="bg-slate-700 border-slate-600 text-white focus:border-[#FF6B35]" />
              </div>
              <Button type="submit" className="w-full bg-[#FF6B35] text-black hover:bg-orange-400 text-lg py-3" disabled={loading}>
                {loading ? 'Creating Account...' : 'Sign Up'}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="text-center">
            <p className="text-sm text-slate-400">
              Already have an account? <Link to="/login" className="font-semibold text-[#FF6B35] hover:underline">Log in</Link>
            </p>
          </CardFooter>
        </Card>
      </motion.div>
    </>
  );
};

export default SignupPage;