import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate, Outlet, Link } from 'react-router-dom';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Loader2 } from 'lucide-react';

const HomePage = lazy(() => import('@/pages/public/HomePage'));
const CoursesPage = lazy(() => import('@/pages/public/CoursesPage'));
const CourseDetailPage = lazy(() => import('@/pages/public/CourseDetailPage'));
const PricingPage = lazy(() => import('@/pages/public/PricingPage'));
const PopularCoursesPage = lazy(() => import('@/pages/public/PopularCoursesPage'));
const ReferralProgramInfoPage = lazy(() => import('@/pages/public/ReferralProgramInfoPage'));
const TermsPage = lazy(() => import('@/pages/public/TermsPage'));

const BlogsPage = lazy(() => import('@/pages/resources/BlogsPage'));
const TutorialsPage = lazy(() => import('@/pages/resources/TutorialsPage'));
const DocsPage = lazy(() => import('@/pages/resources/DocsPage'));

const MissionPage = lazy(() => import('@/pages/about/MissionPage'));
const TeamPage = lazy(() => import('@/pages/about/TeamPage'));
const CareersPage = lazy(() => import('@/pages/about/CareersPage'));

const SupportPage = lazy(() => import('@/pages/contact/SupportPage'));
const FeedbackPage = lazy(() => import('@/pages/contact/FeedbackPage'));
const PartnershipsPage = lazy(() => import('@/pages/contact/PartnershipsPage'));

const LoginPage = lazy(() => import('@/pages/auth/LoginPage'));
const SignupPage = lazy(() => import('@/pages/auth/SignupPage'));
const ForgotPasswordPage = lazy(() => import('@/pages/auth/ForgotPasswordPage'));

const StudentDashboardPage = lazy(() => import('@/pages/student/StudentDashboardPage'));
const StudentMyLearningsPage = lazy(() => import('@/pages/student/StudentMyLearningsPage'));
const StudentCoursesEnrolledPage = lazy(() => import('@/pages/student/StudentCoursesEnrolledPage'));
const StudentReferralSystemPage = lazy(() => import('@/pages/student/StudentReferralSystemPage'));
const StudentUpdateProfilePage = lazy(() => import('@/pages/student/StudentUpdateProfilePage'));
const StudentWithdrawalPage = lazy(() => import('@/pages/student/StudentWithdrawalPage'));


const TutorDashboardPage = lazy(() => import('@/pages/tutor/TutorDashboardPage'));
const CreateCoursePage = lazy(() => import('@/pages/tutor/CreateCoursePage'));
const PendingCoursesPage = lazy(() => import('@/pages/tutor/PendingCoursesPage'));
const ApprovedCoursesPage = lazy(() => import('@/pages/tutor/ApprovedCoursesPage'));
const TutorProfilePage = lazy(() => import('@/pages/tutor/TutorProfilePage'));
const EarningsPage = lazy(() => import('@/pages/tutor/EarningsPage'));
const WithdrawalPage = lazy(() => import('@/pages/tutor/WithdrawalPage'));
const TutorKYCPage = lazy(() => import('@/pages/tutor/TutorKYCPage'));


const AdminDashboardPage = lazy(() => import('@/pages/admin/AdminDashboardPage'));
const AdminUserManagementPage = lazy(() => import('@/pages/admin/AdminUserManagementPage'));
const AdminCourseApprovalPage = lazy(() => import('@/pages/admin/AdminCourseApprovalPage'));
const AdminPaymentLogsPage = lazy(() => import('@/pages/admin/AdminPaymentLogsPage'));
const AdminSalesAnalyticsPage = lazy(() => import('@/pages/admin/AdminSalesAnalyticsPage'));
const AdminOffersManagementPage = lazy(() => import('@/pages/admin/AdminOffersManagementPage'));

const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

const LoadingFallback = () => (
  <div className="flex justify-center items-center h-screen bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:via-black dark:to-slate-800">
    <Loader2 className="h-12 w-12 animate-spin text-[#FF6B35]" />
  </div>
);

const ProtectedRoute = ({ allowedRoles }) => {
  const { isAuthenticated, role, loading } = useAuth();

  if (loading) {
    return <LoadingFallback />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to="/unauthorized" replace />; 
  }

  return <Outlet />;
};

const PublicLayout = () => (
  <div className="flex flex-col min-h-screen bg-white dark:bg-black">
    <Navbar />
    <main className="flex-grow pt-32">
      <Outlet />
    </main>
    <Footer />
  </div>
);

const DashboardLayout = ({ children }) => {
   const { user } = useAuth();
   
   const sidebarLinks = {
    student: [
    ],
    tutor: [
      { name: 'Dashboard', path: '/tutor/dashboard' },
      { name: 'Create Course', path: '/tutor/create-course' },
      { name: 'Approved Courses', path: '/tutor/approved-courses' },
      { name: 'Pending Courses', path: '/tutor/pending-courses' },
      { name: 'Profile', path: '/tutor/profile' },
      { name: 'Earnings', path: '/tutor/earnings' },
      { name: 'Withdrawal', path: '/tutor/withdrawal' },
      { name: 'KYC', path: '/tutor/kyc' },
    ],
    admin: [
      { name: 'Dashboard', path: '/admin/dashboard' },
      { name: 'User Management', path: '/admin/user-management' },
      { name: 'Course Approval', path: '/admin/course-approval' },
      { name: 'Payment Logs', path: '/admin/payment-logs' },
      { name: 'Sales Analytics', path: '/admin/sales-analytics' },
      { name: 'Offers Management', path: '/admin/offers-management' },
    ],
  };

  const currentLinks = user ? sidebarLinks[user.role] || [] : [];
  const showSidebar = user && user.role !== 'student' && currentLinks.length > 0;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gradient-to-br dark:from-slate-900 dark:via-black dark:to-slate-800">
      <Navbar />
      <div className="flex flex-grow container mx-auto px-2 py-6 md:px-4 md:py-8 pt-32">
        {showSidebar && (
          <aside className="w-1/5 hidden md:block bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md mr-6 tech-card">
            <nav className="space-y-2">
              {currentLinks.map(link => (
                <Link key={link.path} to={link.path} className="block py-2 px-3 rounded text-slate-700 dark:text-slate-300 hover:bg-orange-100 dark:hover:bg-[#FF6B35] dark:hover:text-black transition-colors code-font">
                  {link.name}
                </Link>
              ))}
            </nav>
          </aside>
        )}
        <main className={showSidebar ? "flex-grow w-4/5" : "flex-grow w-full"}>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/:courseId" element={<CourseDetailPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/popular-courses" element={<PopularCoursesPage />} />
            <Route path="/referral-program" element={<ReferralProgramInfoPage />} />
            <Route path="/terms" element={<TermsPage />} />

            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />

            <Route path="/resources/blogs" element={<BlogsPage />} />
            <Route path="/resources/tutorials" element={<TutorialsPage />} />
            <Route path="/resources/docs" element={<DocsPage />} />
            
            <Route path="/about/mission" element={<MissionPage />} />
            <Route path="/about/team" element={<TeamPage />} />
            <Route path="/about/careers" element={<CareersPage />} />

            <Route path="/contact/support" element={<SupportPage />} />
            <Route path="/contact/feedback" element={<FeedbackPage />} />
            <Route path="/contact/partnerships" element={<PartnershipsPage />} />
          </Route>

          <Route element={<DashboardLayout />}>
            <Route element={<ProtectedRoute allowedRoles={['student', 'tutor', 'admin']} />}>
              <Route path="/student/dashboard" element={<StudentDashboardPage />} />
              <Route path="/student/my-learnings" element={<StudentMyLearningsPage />} />
              <Route path="/student/courses-enrolled" element={<StudentCoursesEnrolledPage />} />
              <Route path="/student/referral-system" element={<StudentReferralSystemPage />} />
              <Route path="/student/update-profile" element={<StudentUpdateProfilePage />} />
              <Route path="/student/withdrawal" element={<StudentWithdrawalPage />} />
            </Route>
            
            <Route element={<ProtectedRoute allowedRoles={['tutor', 'admin']} />}>
              <Route path="/tutor/dashboard" element={<TutorDashboardPage />} />
              <Route path="/tutor/create-course" element={<CreateCoursePage />} />
              <Route path="/tutor/pending-courses" element={<PendingCoursesPage />} />
              <Route path="/tutor/approved-courses" element={<ApprovedCoursesPage />} />
              <Route path="/tutor/profile" element={<TutorProfilePage />} />
              <Route path="/tutor/earnings" element={<EarningsPage />} />
              <Route path="/tutor/withdrawal" element={<WithdrawalPage />} />
              <Route path="/tutor/kyc" element={<TutorKYCPage />} />
            </Route>

            <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
              <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
              <Route path="/admin/user-management" element={<AdminUserManagementPage />} />
              <Route path="/admin/course-approval" element={<AdminCourseApprovalPage />} />
              <Route path="/admin/payment-logs" element={<AdminPaymentLogsPage />} />
              <Route path="/admin/sales-analytics" element={<AdminSalesAnalyticsPage />} />
              <Route path="/admin/offers-management" element={<AdminOffersManagementPage />} />
            </Route>
          </Route>
          
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/unauthorized" element={
            <div className="flex flex-col items-center justify-center h-screen text-white bg-slate-900">
              <h1 className="text-4xl font-bold text-[#FF6B35]">Unauthorized Access</h1>
              <p className="mt-4">You do not have permission to view this page.</p>
              <Link to="/" className="mt-6 px-4 py-2 bg-[#FF6B35] text-black rounded hover:bg-orange-400">Go to Homepage</Link>
            </div>
          } />
        </Routes>
      </Suspense>
    </AuthProvider>
  );
}

export default App;