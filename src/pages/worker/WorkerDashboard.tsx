import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Briefcase, Activity, BadgeIndianRupee, Star, ArrowRight, MapPin } from 'lucide-react';
import StatCard from '../../components/StatCard';
import PageHeader from '../../components/PageHeader';
import { RatingStars } from '../../components/Badges';
import { jobs, earnings } from '../../data/dummy';

export default function WorkerDashboard() {
  const { t } = useTranslation();
  return (
    <div>
      <PageHeader title={t('workerDashboard.welcome')} subtitle={t('workerDashboard.subtitle')} action={<Link to="/worker/available-jobs" className="btn-primary">{t('workerDashboard.findJobs')} <ArrowRight className="h-4 w-4" /></Link>} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label={t('workerDashboard.jobsAvailable')} value={jobs.length} icon={Briefcase} accent="brand" to="/worker/available-jobs" />
        <StatCard label={t('workerDashboard.currentJob')} value={1} icon={Activity} accent="amber" to="/worker/active-job" />
        <StatCard label={t('workerDashboard.todayEarnings')} value={`₹${earnings.today}`} icon={BadgeIndianRupee} accent="accent" to="/worker/earnings" />
        <StatCard label={t('workerDashboard.avgRating')} value="4.9" icon={Star} accent="rose" to="/worker/profile" />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">{t('workerDashboard.availableNear')}</h2>
            <Link to="/worker/available-jobs" className="text-sm font-semibold text-brand-600 hover:text-brand-700">{t('workerDashboard.viewAll')}</Link>
          </div>
          <div className="space-y-3">
            {jobs.slice(0, 3).map((j) => (
              <Link key={j.id} to={`/worker/job/${j.id}`} className="card card-hover p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-slate-900">{j.title}</p>
                    <p className="mt-1 text-xs text-slate-500">{j.category} · {j.duration} · {j.date}</p>
                    <div className="mt-2 flex items-center gap-1 text-xs text-slate-500"><MapPin className="h-3 w-3" /> {j.location}</div>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-sm font-bold text-slate-900">{j.budget}</p>
                    <p className="text-xs text-slate-400">{j.postedAgo}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-3 text-lg font-bold text-slate-900">{t('workerDashboard.thisWeek')}</h2>
          <div className="card p-5">
            <p className="text-sm text-slate-500">{t('workerDashboard.totalEarnings')}</p>
            <p className="mt-1 text-3xl font-extrabold text-slate-900">₹{earnings.weekly.toLocaleString()}</p>
            <div className="mt-4 flex items-end gap-2">
              {earnings.weeklyData.map((v, i) => (
                <div key={i} className="flex-1">
                  <div className="rounded-t bg-brand-500" style={{ height: `${(v / 2400) * 120}px` }} />
                  <p className="mt-1 text-center text-[10px] text-slate-400">{['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="card mt-4 p-5">
            <div className="flex items-center gap-2">
              <RatingStars rating={4.9} size={16} />
              <span className="text-sm font-semibold text-slate-900">4.9</span>
            </div>
            <p className="mt-1 text-xs text-slate-500">{t('workerDashboard.basedOn')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
