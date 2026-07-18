import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Users, ShieldCheck, Briefcase, BadgeIndianRupee, ArrowRight, Activity } from 'lucide-react';
import StatCard from '../../components/StatCard';
import PageHeader from '../../components/PageHeader';
import { StatusBadge } from '../../components/Badges';
import { adminStats, bookings, verifyRequests } from '../../data/dummy';

export default function AdminDashboard() {
  const { t } = useTranslation();
  return (
    <div>
      <PageHeader title={t('adminDashboard.title')} subtitle={t('adminDashboard.subtitle')} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        <StatCard label={t('adminDashboard.totalWorkers')} value={adminStats.totalWorkers.toLocaleString()} icon={Briefcase} accent="brand" trend="+48" to="/admin/workers" />
        <StatCard label={t('adminDashboard.verifiedWorkers')} value={adminStats.verifiedWorkers.toLocaleString()} icon={ShieldCheck} accent="accent" trend="+12" to="/admin/verify-workers" />
        <StatCard label={t('adminDashboard.customers')} value={adminStats.customers.toLocaleString()} icon={Users} accent="amber" trend="+156" to="/admin/customers" />
        <StatCard label={t('adminDashboard.bookings')} value={adminStats.bookings.toLocaleString()} icon={Activity} accent="rose" trend="+92" to="/admin/bookings" />
        <StatCard label={t('adminDashboard.revenue')} value={`₹${(adminStats.revenue / 1000).toFixed(0)}k`} icon={BadgeIndianRupee} accent="brand" trend="+18%" />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">{t('adminDashboard.recentBookings')}</h2>
            <Link to="/admin/bookings" className="text-sm font-semibold text-brand-600 hover:text-brand-700">{t('adminDashboard.viewAll')}</Link>
          </div>
          <div className="card divide-y divide-slate-100">
            {bookings.map((b) => (
              <div key={b.id} className="flex items-center gap-4 p-4">
                <img src={b.workerPhoto} alt={b.workerName} className="h-10 w-10 rounded-full object-cover" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-slate-900">{b.jobTitle}</p>
                  <p className="text-xs text-slate-500">{b.workerName} · {b.customerName}</p>
                </div>
                <p className="text-sm font-bold text-slate-900">₹{b.amount}</p>
                <StatusBadge status={b.status} />
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">{t('adminDashboard.pendingVerifications')}</h2>
            <Link to="/admin/verify-workers" className="text-sm font-semibold text-brand-600 hover:text-brand-700">{t('adminDashboard.viewAll')}</Link>
          </div>
          <div className="space-y-3">
            {verifyRequests.map((r) => (
              <div key={r.id} className="card p-4">
                <div className="flex items-center gap-3">
                  <img src={r.photo} alt={r.name} className="h-10 w-10 rounded-full object-cover" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-slate-900">{r.name}</p>
                    <p className="text-xs text-slate-500">{r.skill} · {r.submitted}</p>
                  </div>
                </div>
                <Link to="/admin/verify-workers" className="btn-secondary mt-3 w-full text-xs">{t('adminDashboard.review')} <ArrowRight className="h-3 w-3" /></Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 card p-6">
        <h2 className="text-base font-bold text-slate-900">{t('adminDashboard.revenueTrend')}</h2>
        <div className="mt-4 flex items-end justify-between gap-2" style={{ height: 160 }}>
          {[42, 48, 45, 52, 58, 54, 62, 68, 64, 72, 78, 84].map((v, i) => (
            <div key={i} className="flex flex-1 flex-col items-center gap-1">
              <div className="w-full max-w-[24px] rounded-t bg-gradient-to-t from-brand-600 to-brand-400" style={{ height: `${(v / 84) * 120}px` }} />
              <span className="text-[10px] text-slate-400">{['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
