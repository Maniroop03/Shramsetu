import { TrendingUp, TrendingDown, BadgeIndianRupee, Users, Briefcase, Activity } from 'lucide-react';
import StatCard from '../../components/StatCard';
import PageHeader from '../../components/PageHeader';
import { adminStats } from '../../data/dummy';

export default function AdminReports() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const revenue = [42, 48, 45, 52, 58, 54, 62, 68, 64, 72, 78, 84];
  const max = Math.max(...revenue);
  return (
    <div>
      <PageHeader title="Reports & Analytics" subtitle="Platform performance insights." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total Revenue" value={`₹${(adminStats.revenue / 1000).toFixed(0)}k`} icon={BadgeIndianRupee} accent="brand" trend="+18%" />
        <StatCard label="Total Workers" value={adminStats.totalWorkers.toLocaleString()} icon={Briefcase} accent="accent" trend="+48" />
        <StatCard label="Customers" value={adminStats.customers.toLocaleString()} icon={Users} accent="amber" trend="+156" />
        <StatCard label="Bookings" value={adminStats.bookings.toLocaleString()} icon={Activity} accent="rose" trend="+92" />
      </div>

      <section className="card mt-6 p-6">
        <h2 className="text-base font-bold text-slate-900">Monthly Revenue (₹ thousands)</h2>
        <div className="mt-6 flex items-end justify-between gap-2" style={{ height: 220 }}>
          {revenue.map((v, i) => (
            <div key={i} className="flex flex-1 flex-col items-center gap-2">
              <span className="text-xs font-semibold text-slate-600">₹{v}k</span>
              <div className="flex w-full items-end justify-center" style={{ height: 160 }}>
                <div className="w-full max-w-[28px] rounded-t-lg bg-gradient-to-t from-brand-600 to-brand-400" style={{ height: `${(v / max) * 160}px` }} />
              </div>
              <span className="text-xs text-slate-500">{months[i]}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <section className="card p-6">
          <h3 className="text-base font-bold text-slate-900">Top Categories</h3>
          <div className="mt-4 space-y-3">
            {[
              { name: 'Electrician', pct: 88, count: 1240 },
              { name: 'Plumber', pct: 72, count: 980 },
              { name: 'House Cleaning', pct: 65, count: 890 },
              { name: 'Carpenter', pct: 54, count: 720 },
              { name: 'AC Technician', pct: 41, count: 560 },
            ].map((c) => (
              <div key={c.name}>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-700">{c.name}</span>
                  <span className="text-slate-500">{c.count} jobs</span>
                </div>
                <div className="mt-1 h-2 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full rounded-full bg-brand-500" style={{ width: `${c.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="card p-6">
          <h3 className="text-base font-bold text-slate-900">Growth Metrics</h3>
          <div className="mt-4 space-y-3">
            {[
              { label: 'New workers this month', value: '+48', up: true },
              { label: 'New customers this month', value: '+156', up: true },
              { label: 'Booking cancellations', value: '-12', up: false },
              { label: 'Avg. rating', value: '4.8', up: true },
              { label: 'Repeat hire rate', value: '62%', up: true },
            ].map((m) => (
              <div key={m.label} className="flex items-center justify-between border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                <span className="text-sm text-slate-600">{m.label}</span>
                <span className={`flex items-center gap-1 text-sm font-semibold ${m.up ? 'text-accent-600' : 'text-rose-600'}`}>
                  {m.up ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                  {m.value}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
