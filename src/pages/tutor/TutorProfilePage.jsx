import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UserCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

const TutorProfilePage = () => {
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "💾 Profile Updated (Mock)",
      description: "Your profile information has been saved. Full functionality coming soon! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>Profile Management - Tutor Dashboard</title>
        <meta name="description" content="Manage your tutor profile on EduPlatform." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-8 px-4"
      >
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-[#FF6B35] flex items-center">
            <UserCircle className="mr-3 h-10 w-10" /> Profile Management
          </h1>
          <p className="text-lg text-slate-300">Keep your professional information up-to-date.</p>
        </header>

        <Card className="bg-slate-800 border-slate-700 text-white">
          <CardHeader>
            <CardTitle className="text-2xl text-[#FF6B35]">Your Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="tutor-name" className="text-slate-300">Full Name</Label>
                  <Input id="tutor-name" type="text" placeholder="Your Name" defaultValue="Test Tutor" required className="bg-slate-700 border-slate-600 text-white focus:border-[#FF6B35]" />
                </div>
                <div>
                  <Label htmlFor="tutor-email" className="text-slate-300">Email Address</Label>
                  <Input id="tutor-email" type="email" placeholder="your.email@example.com" defaultValue="tutor@example.com" readOnly className="bg-slate-600 border-slate-500 text-slate-400 cursor-not-allowed" />
                </div>
              </div>
              {/* Add more profile fields here */}
              <p className="text-sm text-slate-400">More fields for phone, background, experience, qualifications, bio, photo, social links will be added here.</p>
              <Button type="submit" className="bg-[#FF6B35] text-black hover:bg-orange-400 text-lg py-3">
                Save Changes
              </Button>
            </form>
            <div className="mt-8 pt-6 border-t border-slate-700">
                <h3 className="text-xl font-semibold text-[#FF6B35] mb-3">Password Change</h3>
                <Button variant="outline" className="border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-black" onClick={() => toast({ title: "🚧 Feature Not Implemented", description: "Password change functionality is coming soon! 🚀", variant: "destructive" })}>
                    Change Password
                </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </>
  );
};

export default TutorProfilePage;