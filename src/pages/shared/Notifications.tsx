import { Briefcase, Bell, BadgeIndianRupee, Star, ShieldCheck } from 'lucide-react';
import PageHeader from '../../components/PageHeader';
import { notifications } from '../../data/dummy';

const iconMap = {
  job: { icon: Briefcase, color: 'bg-brand-50 text-brand-600' },
  booking: { icon: Bell, color: 'bg-amber-50 text-amber-600' },
  payment: { icon: BadgeIndianRupee, color: 'bg-accent-50 text-accent-600' },
  review: { icon: Star, color: 'bg-rose-50 text-rose-600' },
  system: { icon: ShieldCheck, color: 'bg-slate-100 text-slate-600' },
};

export default function Notifications() {
  return (
    <div className="max-w-3xl">
      <PageHeader title="Notifications" subtitle="Stay updated on your jobs, bookings and payments." />
      <div className="space-y-3">
        {notifications.map((n) => {
          const cfg = iconMap[n.type];
          return (
            <div key={n.id} className={`card p-4 transition-all hover:shadow-card ${!n.read ? 'ring-2 ring-brand-100' : ''}`}>
              <div className="flex items-start gap-3">
                <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${cfg.color}`}><cfg.icon className="h-5 w-5" /></span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-semibold text-slate-900">{n.title}</p>
                    <span className="shrink-0 text-xs text-slate-400">{n.time}</span>
                  </div>
                  <p className="mt-0.5 text-sm text-slate-600">{n.message}</p>
                </div>
                {!n.read && <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-500" />}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
