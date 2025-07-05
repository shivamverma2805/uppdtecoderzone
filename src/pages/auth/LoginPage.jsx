import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox'; // Assuming Checkbox component exists
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/components/ui/use-toast';
import { LogIn } from 'lucide-react';

// Placeholder for Checkbox if not created yet
const CheckboxPlaceholder = React.forwardRef((props, ref) => (
  <input type="checkbox" ref={ref} {...props} className="h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground" />
));
CheckboxPlaceholder.displayName = "Checkbox";


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const { login, loading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await login(email, password);
      toast({
        title: "🎉 Login Successful!",
        description: `Welcome back, ${user.name || user.email}!`,
      });
      if (user.role === 'admin') navigate('/admin/dashboard');
      else if (user.role === 'tutor') navigate('/tutor/dashboard');
      else navigate('/student/dashboard');
    } catch (error) {
      toast({
        title: "⚠️ Login Failed",
        description: error.message || "Please check your credentials and try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Login - EduPlatform</title>
        <meta name="description" content="Login to your EduPlatform account." />
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
              <LogIn size={32} className="text-black" />
            </motion.div>
            <CardTitle className="text-3xl font-bold text-[#FF6B35]">Welcome Back!</CardTitle>
            <CardDescription className="text-slate-400">Sign in to continue your learning journey.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="email" className="text-slate-300">Email Address</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="you@example.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                  className="bg-slate-700 border-slate-600 text-white focus:border-[#FF6B35]" 
                />
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <Label htmlFor="password" className="text-slate-300">Password</Label>
                  <Link to="/forgot-password" className="text-sm text-[#FF6B35] hover:underline">Forgot password?</Link>
                </div>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="••••••••" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                  className="bg-slate-700 border-slate-600 text-white focus:border-[#FF6B35]" 
                />
              </div>
              <div className="flex items-center space-x-2">
                <CheckboxPlaceholder id="remember-me" checked={rememberMe} onCheckedChange={setRememberMe} className="border-slate-600 data-[state=checked]:bg-[#FF6B35] data-[state=checked]:border-[#FF6B35]" />
                <Label htmlFor="remember-me" className="text-sm text-slate-400">Remember me</Label>
              </div>
              <Button type="submit" className="w-full bg-[#FF6B35] text-black hover:bg-orange-400 text-lg py-3" disabled={loading}>
                {loading ? 'Logging in...' : 'Login'}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="text-center">
            <p className="text-sm text-slate-400">
              Don't have an account? <Link to="/signup" className="font-semibold text-[#FF6B35] hover:underline">Sign up</Link>
            </p>
          </CardFooter>
        </Card>
      </motion.div>
    </>
  );
};

export default LoginPage;