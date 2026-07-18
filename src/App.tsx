import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SplashScreen from './components/SplashScreen';

import {
  LayoutDashboard,
  PlusCircle,
  CalendarCheck,
  Bell,
  User,
  Briefcase,
  Activity,
  BadgeIndianRupee,
  Star,
  ShieldCheck,
  Users,
  BarChart3,
  Settings,
} from 'lucide-react';

import PublicLayout from './layouts/PublicLayout';
import DashboardLayout from './layouts/DashboardLayout';
import type { NavItem } from './layouts/DashboardLayout';

import Landing from './pages/Landing';
import About from './pages/About';
import Services from './pages/Services';
import HowItWorks from './pages/HowItWorks';
import Contact from './pages/Contact';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

import CustomerDashboard from './pages/customer/CustomerDashboard';
import PostJob from './pages/customer/PostJob';
import JobQuotes from './pages/customer/JobQuotes';
import BookingDetails from './pages/customer/BookingDetails';
import Payment from './pages/customer/Payment';
import Rating from './pages/customer/Rating';
import CustomerBookings from './pages/customer/CustomerBookings';

import WorkerDashboard from './pages/worker/WorkerDashboard';
import AvailableJobs from './pages/worker/AvailableJobs';
import JobDetails from './pages/worker/JobDetails';
import ActiveJob from './pages/worker/ActiveJob';
import Earnings from './pages/worker/Earnings';
import WorkerProfile from './pages/worker/WorkerProfile';
import WorkerRatings from './pages/worker/WorkerRatings';
import WorkerCompletedJobs from './pages/worker/WorkerCompletedJobs';

import AdminDashboard from './pages/admin/AdminDashboard';
import VerifyWorkers from './pages/admin/VerifyWorkers';
import AdminBookings from './pages/admin/AdminBookings';
import AdminCustomers from './pages/admin/AdminCustomers';
import AdminWorkers from './pages/admin/AdminWorkers';
import AdminReports from './pages/admin/AdminReports';
import AdminSettings from './pages/admin/AdminSettings';

import Notifications from './pages/shared/Notifications';
import Profile from './pages/shared/Profile';

const customerNav: NavItem[] = [
  { label: 'nav.dashboard', to: '/customer/dashboard', icon: LayoutDashboard },
  { label: 'nav.postJob', to: '/customer/post-job', icon: PlusCircle },
  { label: 'nav.bookings', to: '/customer/bookings', icon: CalendarCheck },
  { label: 'nav.notifications', to: '/customer/notifications', icon: Bell },
  { label: 'nav.profile', to: '/customer/profile', icon: User },
];

const workerNav: NavItem[] = [
  { label: 'nav.dashboard', to: '/worker/dashboard', icon: LayoutDashboard },
  { label: 'nav.availableJobs', to: '/worker/available-jobs', icon: Briefcase },
  { label: 'nav.activeJob', to: '/worker/active-job', icon: Activity },
  { label: 'nav.completedJobs', to: '/worker/completed-jobs', icon: CalendarCheck },
  { label: 'nav.ratings', to: '/worker/ratings', icon: Star },
  { label: 'nav.earnings', to: '/worker/earnings', icon: BadgeIndianRupee },
  { label: 'nav.profile', to: '/worker/profile', icon: User },
];

const adminNav: NavItem[] = [
  { label: 'nav.dashboard', to: '/admin/dashboard', icon: LayoutDashboard },
  { label: 'nav.verifyWorkers', to: '/admin/verify-workers', icon: ShieldCheck },
  { label: 'nav.customers', to: '/admin/customers', icon: Users },
  { label: 'nav.workers', to: '/admin/workers', icon: Briefcase },
  { label: 'nav.bookings', to: '/admin/bookings', icon: CalendarCheck },
  { label: 'nav.reports', to: '/admin/reports', icon: BarChart3 },
  { label: 'nav.settings', to: '/admin/settings', icon: Settings },
];

const workerAvatar =
  'https://images.unsplash.com/photo-1638192085-fdab384d8d9d?w=80&h=80&fit=crop&crop=faces';

const customerAvatar =
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces';

const adminAvatar =
  'https://images.unsplash.com/photo-1500648767791-00dcc9949438?w=80&h=80&fit=crop&crop=faces';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<PublicLayout><Landing /></PublicLayout>} />
        <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />
        <Route path="/services" element={<PublicLayout><Services /></PublicLayout>} />
        <Route path="/how-it-works" element={<PublicLayout><HowItWorks /></PublicLayout>} />
        <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />
        <Route path="/privacy" element={<PublicLayout><About /></PublicLayout>} />
        <Route path="/terms" element={<PublicLayout><About /></PublicLayout>} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Customer */}
        <Route path="/customer" element={<DashboardLayout nav={customerNav} role="customer" userName="Priya Sharma" userAvatar={customerAvatar} badge={2} />}>
          <Route index element={<Navigate to="/customer/dashboard" replace />} />
          <Route path="dashboard" element={<CustomerDashboard />} />
          <Route path="post-job" element={<PostJob />} />
          <Route path="bookings" element={<CustomerBookings />} />
          <Route path="quotes/:jobId" element={<JobQuotes />} />
          <Route path="booking/:id" element={<BookingDetails />} />
          <Route path="payment/:id" element={<Payment />} />
          <Route path="rating/:id" element={<Rating />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        {/* Worker */}
        <Route path="/worker" element={<DashboardLayout nav={workerNav} role="worker" userName="Ramesh Kumar" userAvatar={workerAvatar} badge={3} />}>
          <Route index element={<Navigate to="/worker/dashboard" replace />} />
          <Route path="dashboard" element={<WorkerDashboard />} />
          <Route path="available-jobs" element={<AvailableJobs />} />
          <Route path="job/:jobId" element={<JobDetails />} />
          <Route path="active-job" element={<ActiveJob />} />
          <Route path="completed-jobs" element={<WorkerCompletedJobs />} />
          <Route path="ratings" element={<WorkerRatings />} />
          <Route path="earnings" element={<Earnings />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="profile" element={<WorkerProfile />} />
        </Route>

        {/* Admin */}
        <Route path="/admin" element={<DashboardLayout nav={adminNav} role="admin" userName="Admin User" userAvatar={adminAvatar} badge={3} />}>
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="verify-workers" element={<VerifyWorkers />} />
          <Route path="customers" element={<AdminCustomers />} />
          <Route path="workers" element={<AdminWorkers />} />
          <Route path="bookings" element={<AdminBookings />} />
          <Route path="reports" element={<AdminReports />} />
          <Route path="settings" element={<AdminSettings />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;