import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Briefcase, Activity, CheckCircle2, Heart, Plus, ArrowRight, Bell } from 'lucide-react';
import StatCard from '../../components/StatCard';
import PageHeader from '../../components/PageHeader';
import { StatusBadge } from '../../components/Badges';
import { bookings, notifications } from '../../data/dummy';

export default function CustomerDashboard() {
  const { t } = useTranslation();
  return (
    <div>
      <PageHeader
        title={t('customerDashboard.welcome')}
        subtitle={t('customerDashboard.subtitle')}
        action={<Link to="/customer/post-job" className="btn-primary"><Plus className="h-4 w-4" /> {t('customerDashboard.postJob')}</Link>}
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label={t('customerDashboard.jobsPosted')} value={8} icon={Briefcase} accent="brand" trend={t('customerDashboard.trendJobs')} to="/customer/post-job" />
        <StatCard label={t('customerDashboard.activeBookings')} value={2} icon={Activity} accent="amber" trend={t('customerDashboard.trendActive')} to="/customer/bookings" />
        <StatCard label={t('customerDashboard.completedJobs')} value={6} icon={CheckCircle2} accent="accent" trend={t('customerDashboard.trendCompleted')} to="/customer/bookings" />
        <StatCard label={t('customerDashboard.favoriteWorkers')} value={4} icon={Heart} accent="rose" to="/customer/bookings" />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">{t('customerDashboard.recentBookings')}</h2>
            <Link to="/customer/bookings" className="text-sm font-semibold text-brand-600 hover:text-brand-700">{t('customerDashboard.viewAll')}</Link>
          </div>
          <div className="space-y-3">
            {bookings.slice(0, 3).map((b) => (
              <Link key={b.id} to={`/customer/booking/${b.id}`} className="card card-hover flex items-center gap-4 p-4">
                <img src={b.workerPhoto} alt={b.workerName} className="h-12 w-12 rounded-full object-cover" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-slate-900">{b.jobTitle}</p>
                  <p className="text-xs text-slate-500">{b.workerName} · {b.category} · {b.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-slate-900">₹{b.amount}</p>
                  <StatusBadge status={b.status} />
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">{t('customerDashboard.notifications')}</h2>
            <Link to="/customer/notifications" className="text-sm font-semibold text-brand-600 hover:text-brand-700">{t('customerDashboard.viewAll')}</Link>
          </div>
          <div className="space-y-2">
            {notifications.slice(0, 4).map((n) => (
              <div key={n.id} className={`card p-3.5 ${!n.read ? 'ring-2 ring-brand-100' : ''}`}>
                <div className="flex items-start gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-600"><Bell className="h-4 w-4" /></span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-900">{n.title}</p>
                    <p className="truncate text-xs text-slate-500">{n.message}</p>
                    <p className="mt-0.5 text-[10px] text-slate-400">{n.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 card overflow-hidden">
        <div className="flex flex-col items-center justify-between gap-4 p-6 sm:flex-row">
          <div>
            <h3 className="text-lg font-bold text-slate-900">{t('customerDashboard.needWorker')}</h3>
            <p className="text-sm text-slate-500">{t('customerDashboard.needWorkerDesc')}</p>
          </div>
          <Link to="/customer/post-job" className="btn-primary">{t('customerDashboard.postJob')} <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </div>
  );
}
