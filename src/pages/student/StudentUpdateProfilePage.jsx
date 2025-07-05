import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { UserCircle, Edit3, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/components/ui/use-toast';

const StudentUpdateProfilePage = () => {
  const { user, loading: authLoading, logout } = useAuth();
  const { toast } = useToast();
  const [profileData, setProfileData] = useState({
    name: user?.name || 'Test User',
    email: user?.email || 'test@example.com',
    profilePicture: null,
    careerGoal: '',
    skills: '',
    learningPath: ''
  });
  const [passwordData, setPasswordData] = useState({ currentPassword: '', newPassword: '', confirmNewPassword: '' });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const handleProfilePictureChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfileData(prev => ({ ...prev, profilePicture: e.target.files[0] }));
      toast({ title: "🖼️ Profile Picture Selected", description: `${e.target.files[0].name} is ready to be uploaded.` });
    }
  };

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    toast({ title: "💾 Profile Updated (Mock)", description: "Your profile information has been saved." });
  };
  
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({ ...prev, [name]: value }));
  };

  const handlePasswordUpdate = (e) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmNewPassword) {
      toast({ title: "⚠️ Passwords Don't Match", description: "New password and confirmation do not match.", variant: "destructive" });
      return;
    }
    toast({ title: "🔑 Password Updated (Mock)", description: "Your password has been changed." });
    setPasswordData({ currentPassword: '', newPassword: '', confirmNewPassword: '' });
  };

  if (authLoading) {
    return <div className="text-center py-10 text-white">Loading profile...</div>;
  }

  return (
    <>
      <Helmet>
        <title>Update Profile - CodersZonee</title>
        <meta name="description" content="Manage your profile information on CodersZonee." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-8 px-4"
      >
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-[#FF6B35] flex items-center">
            <UserCircle className="mr-3 h-10 w-10" /> Update Profile
          </h1>
          <p className="text-lg text-slate-300">Keep your personal information and preferences up to date.</p>
        </header>

        <Card className="bg-slate-800 border-slate-700 text-white">
          <CardHeader>
            <CardTitle className="text-2xl text-[#FF6B35]">Your Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleProfileUpdate} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="student-name" className="text-slate-300">Full Name</Label>
                  <Input id="student-name" name="name" value={profileData.name} onChange={handleProfileChange} className="bg-slate-700 border-slate-600 text-white focus:border-[#FF6B35]" />
                </div>
                <div>
                  <Label htmlFor="student-email" className="text-slate-300">Email Address</Label>
                  <Input id="student-email" name="email" type="email" value={profileData.email} onChange={handleProfileChange} className="bg-slate-700 border-slate-600 text-white focus:border-[#FF6B35]" />
                </div>
              </div>
              <div>
                <Label htmlFor="profile-picture" className="text-slate-300">Profile Picture</Label>
                <div className="flex items-center space-x-4">
                  {profileData.profilePicture && typeof profileData.profilePicture !== 'string' ? (
                      <img  src={URL.createObjectURL(profileData.profilePicture)} alt="Profile Preview" className="h-16 w-16 rounded-full object-cover" src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                  ) : profileData.profilePicture ? (
                      <img  src={profileData.profilePicture} alt="Profile" className="h-16 w-16 rounded-full object-cover" src="https://images.unsplash.com/photo-1652841190565-b96e0acbae17" />
                  ) : (
                    <div className="h-16 w-16 rounded-full bg-slate-700 flex items-center justify-center text-slate-400">
                      <UserCircle size={32} />
                    </div>
                  )}
                  <Input id="profile-picture" type="file" accept="image/*" onChange={handleProfilePictureChange} className="bg-slate-700 border-slate-600 text-white file:bg-slate-600 file:text-white file:border-none file:mr-2 file:px-2 file:py-1 file:rounded file:cursor-pointer" />
                </div>
              </div>
              <div>
                <Label htmlFor="career-goal" className="text-slate-300">Career Goal</Label>
                <Input id="career-goal" name="careerGoal" value={profileData.careerGoal} onChange={handleProfileChange} placeholder="e.g., Senior Web Developer" className="bg-slate-700 border-slate-600 text-white focus:border-[#FF6B35]" />
              </div>
              <div>
                <Label htmlFor="student-skills" className="text-slate-300">Skills (comma-separated)</Label>
                <Input id="student-skills" name="skills" value={profileData.skills} onChange={handleProfileChange} placeholder="e.g., React, Node.js, Python" className="bg-slate-700 border-slate-600 text-white focus:border-[#FF6B35]" />
              </div>
              <div>
                <Label htmlFor="learning-path" className="text-slate-300">Preferred Learning Path</Label>
                <Select name="learningPath" value={profileData.learningPath} onValueChange={(value) => setProfileData(prev => ({...prev, learningPath: value}))}>
                  <SelectTrigger className="w-full bg-slate-700 border-slate-600 text-white">
                    <SelectValue placeholder="Select learning path" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-700 text-white border-slate-600">
                    <SelectItem value="career">Career Path</SelectItem>
                    <SelectItem value="skill-building">Skill Building</SelectItem>
                    <SelectItem value="hobby">Hobby / Exploration</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className="bg-[#FF6B35] text-black hover:bg-orange-400 flex items-center">
                <Edit3 className="mr-2 h-4 w-4" /> Update Profile
              </Button>
            </form>

            <form onSubmit={handlePasswordUpdate} className="space-y-6 mt-10 pt-6 border-t border-slate-700">
              <h3 className="text-xl font-semibold text-white">Change Password</h3>
              <div>
                <Label htmlFor="current-password" className="text-slate-300">Current Password</Label>
                <Input id="current-password" name="currentPassword" type="password" value={passwordData.currentPassword} onChange={handlePasswordChange} required className="bg-slate-700 border-slate-600 text-white focus:border-[#FF6B35]" />
              </div>
              <div>
                <Label htmlFor="new-password" className="text-slate-300">New Password</Label>
                <Input id="new-password" name="newPassword" type="password" value={passwordData.newPassword} onChange={handlePasswordChange} required className="bg-slate-700 border-slate-600 text-white focus:border-[#FF6B35]" />
              </div>
              <div>
                <Label htmlFor="confirm-new-password" className="text-slate-300">Confirm New Password</Label>
                <Input id="confirm-new-password" name="confirmNewPassword" type="password" value={passwordData.confirmNewPassword} onChange={handlePasswordChange} required className="bg-slate-700 border-slate-600 text-white focus:border-[#FF6B35]" />
              </div>
              <Button type="submit" className="bg-[#FF6B35] text-black hover:bg-orange-400 flex items-center">
                <Edit3 className="mr-2 h-4 w-4" /> Update Password
              </Button>
            </form>
            <div className="mt-10 pt-6 border-t border-slate-700">
                <Button onClick={logout} variant="destructive" className="bg-red-600 hover:bg-red-700 text-white flex items-center">
                    <LogOut className="mr-2 h-4 w-4" /> Logout
                </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </>
  );
};

export default StudentUpdateProfilePage;