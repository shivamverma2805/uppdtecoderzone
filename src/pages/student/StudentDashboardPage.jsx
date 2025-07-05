import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BookOpen, UserCircle, Gift, Copy, Share2, Award } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/components/ui/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const mockEnrolledCourses = [
  { id: 1, title: "React Fundamentals", progress: 75, status: "In Progress", certificate: null, imageKey: "react-course" },
  { id: 2, title: "Advanced Python", progress: 100, status: "Completed", certificate: "View Certificate", imageKey: "python-course" },
  { id: 3, title: "UI/UX Design Basics", progress: 30, status: "In Progress", certificate: null, imageKey: "uiux-course" },
  { id: 4, title: "Data Science with Pandas", progress: 100, status: "Completed", certificate: "View Certificate", imageKey: "pandas-course" },
];

const StudentDashboardPage = () => {
  const { user, loading: authLoading } = useAuth();
  const { toast } = useToast();
  const [courseFilter, setCourseFilter] = useState("all");
  const [profileData, setProfileData] = useState({
    name: user?.name || 'Test User',
    email: user?.email || 'test@example.com',
    profilePicture: null,
    careerGoal: '',
    skills: '',
    learningPath: ''
  });
  const [passwordData, setPasswordData] = useState({ currentPassword: '', newPassword: '', confirmNewPassword: '' });
  const [activeTab, setActiveTab] = useState("learnings");


  const referralCode = `EDU-${user?.email?.substring(0,3).toUpperCase() || 'REF'}123`;
  const referralLink = `https://eduplatform.com/signup?ref=${referralCode}`;

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

  const copyReferralLink = () => {
    navigator.clipboard.writeText(referralLink);
    toast({ title: "🔗 Link Copied!", description: "Referral link copied to clipboard." });
  };

  const shareViaWhatsApp = () => {
    window.open(`https://wa.me/?text=Join%20EduPlatform%20with%20my%20referral%20code:%20${referralCode}%20Link:%20${referralLink}`, '_blank');
  };

  const shareViaEmail = () => {
    window.location.href = `mailto:?subject=Join%20EduPlatform&body=Hey!%20I'm%20inviting%20you%20to%20join%20EduPlatform.%20Use%20my%20referral%20code%20${referralCode}%20or%20click%20this%20link:%20${referralLink}`;
  };

  const filteredCourses = mockEnrolledCourses.filter(course => {
    if (courseFilter === "all") return true;
    return course.status.toLowerCase().replace(" ", "-") === courseFilter;
  });

  if (authLoading) {
    return <div className="text-center py-10 text-white">Loading dashboard...</div>;
  }
  
  const dashboardSections = [
    { id: "learnings", title: "My Learnings", icon: BookOpen },
    { id: "referrals", title: "Referral System", icon: Gift },
    { id: "profile", title: "Update Profile", icon: UserCircle },
  ];

  return (
    <>
      <Helmet>
        <title>Student Dashboard - EduPlatform</title>
        <meta name="description" content="Your personal learning dashboard on EduPlatform." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-8 px-4 space-y-8" 
      >
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-[#FF6B35]">Student Dashboard</h1>
          <p className="text-lg text-slate-300">Welcome back, {profileData.name}! Manage your learning journey.</p>
        </header>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-slate-800 p-1 rounded-lg mb-8">
            {dashboardSections.map((section) => (
              <TabsTrigger
                key={section.id}
                value={section.id}
                className="data-[state=active]:bg-[#FF6B35] data-[state=active]:text-black text-slate-300 hover:bg-slate-700/50 py-2.5 text-sm font-medium transition-all"
              >
                <section.icon className="mr-2 h-5 w-5 inline-block" /> {section.title}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="learnings">
            <Card className="bg-slate-800 border-slate-700 text-white">
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <CardTitle className="text-2xl text-[#FF6B35] flex items-center"><BookOpen className="mr-2"/> My Learnings</CardTitle>
                  <Select value={courseFilter} onValueChange={setCourseFilter}>
                    <SelectTrigger className="w-full sm:w-[200px] bg-slate-700 border-slate-600 text-white">
                      <SelectValue placeholder="Filter courses" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-700 text-white border-slate-600">
                      <SelectItem value="all">All Courses</SelectItem>
                      <SelectItem value="in-progress">In Progress</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent>
                {filteredCourses.length > 0 ? (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCourses.map(course => (
                      <Card key={course.id} className="bg-slate-700 border-slate-600 hover:shadow-lg hover:shadow-orange-500/20 transition-shadow">
                        <img  alt={`${course.title} thumbnail`} className="w-full h-40 object-cover rounded-t-md" src="https://images.unsplash.com/photo-1677696795233-5ef097695f12" />
                        <CardContent className="p-4">
                          <h3 className="text-lg font-semibold text-white mb-1">{course.title}</h3>
                          <p className="text-sm text-slate-400 mb-2">Status: {course.status}</p>
                          <div className="w-full bg-slate-600 rounded-full h-2.5 mb-2">
                            <div className="bg-[#FF6B35] h-2.5 rounded-full" style={{ width: `${course.progress}%` }}></div>
                          </div>
                          <p className="text-xs text-slate-400 mb-3">{course.progress}% Complete</p>
                          {course.certificate ? (
                            <Button variant="outline" size="sm" className="w-full border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-black" onClick={() => toast({title: "📜 Certificate Clicked", description: `Viewing certificate for ${course.title}`})}>
                              <Award className="mr-2 h-4 w-4" /> {course.certificate}
                            </Button>
                          ) : (
                            <Button size="sm" className="w-full bg-[#FF6B35] text-black hover:bg-orange-400" onClick={() => toast({title: "▶️ Continue Learning", description: `Resuming ${course.title}`})}>
                              Continue Learning
                            </Button>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <p className="text-slate-400 text-center py-8">No courses match your filter criteria.</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="referrals">
            <Card className="bg-slate-800 border-slate-700 text-white">
              <CardHeader>
                <CardTitle className="text-2xl text-[#FF6B35] flex items-center"><Gift className="mr-2"/> Referral System</CardTitle>
                <CardDescription className="text-slate-400">Refer friends and earn rewards!</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-slate-700 rounded-md">
                  <span className="text-slate-300">Your Referral Code: <strong className="text-white">{referralCode}</strong></span>
                  <Button variant="ghost" size="sm" onClick={copyReferralLink} className="text-[#FF6B35] hover:text-orange-400">
                    <Copy className="mr-2 h-4 w-4" /> Copy Code
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-700 rounded-md">
                  <span className="text-slate-300 truncate">Referral Link: <a href={referralLink} target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-orange-400">{referralLink}</a></span>
                  <Button variant="ghost" size="sm" onClick={copyReferralLink} className="text-[#FF6B35] hover:text-orange-400">
                    <Copy className="mr-2 h-4 w-4" /> Copy Link
                  </Button>
                </div>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <Button onClick={shareViaWhatsApp} className="flex-1 bg-green-500 hover:bg-green-600 text-white">
                    <Share2 className="mr-2 h-4 w-4" /> Share on WhatsApp
                  </Button>
                  <Button onClick={shareViaEmail} className="flex-1 bg-blue-500 hover:bg-blue-600 text-white">
                    <Share2 className="mr-2 h-4 w-4" /> Share via Email
                  </Button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="p-4 bg-slate-700 rounded-md text-center">
                    <p className="text-sm text-slate-400">Total Referrals</p>
                    <p className="text-2xl font-bold text-white">5</p> {/* Placeholder data */}
                  </div>
                  <div className="p-4 bg-slate-700 rounded-md text-center">
                    <p className="text-sm text-slate-400">Earnings/Credits</p>
                    <p className="text-2xl font-bold text-white">$25</p> {/* Placeholder data */}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile">
            <Card className="bg-slate-800 border-slate-700 text-white">
              <CardHeader>
                <CardTitle className="text-2xl text-[#FF6B35] flex items-center"><UserCircle className="mr-2"/> Update Profile</CardTitle>
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
                         <img  src={URL.createObjectURL(profileData.profilePicture)} alt="Profile Preview" className="h-16 w-16 rounded-full object-cover" src="https://images.unsplash.com/photo-1486007483341-86877662e5ac" />
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
                  <Button type="submit" className="bg-[#FF6B35] text-black hover:bg-orange-400">Update Profile</Button>
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
                  <Button type="submit" className="bg-[#FF6B35] text-black hover:bg-orange-400">Update Password</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </>
  );
};

export default StudentDashboardPage;