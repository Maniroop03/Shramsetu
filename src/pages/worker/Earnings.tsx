import { BadgeIndianRupee, TrendingUp, Calendar, Wallet } from 'lucide-react';
import StatCard from '../../components/StatCard';
import PageHeader from '../../components/PageHeader';
import { earnings } from '../../data/dummy';

export default function Earnings() {
  const maxWeekly = Math.max(...earnings.weeklyData);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const maxMonthly = Math.max(...earnings.monthlyData);
  return (
    <div>
      <PageHeader title="Earnings" subtitle="Track your income across days, weeks and months." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Today's Earnings" value={`₹${earnings.today}`} icon={BadgeIndianRupee} accent="brand" trend="+12%" />
        <StatCard label="Weekly Earnings" value={`₹${earnings.weekly.toLocaleString()}`} icon={TrendingUp} accent="accent" trend="+8%" />
        <StatCard label="Monthly Earnings" value={`₹${earnings.monthly.toLocaleString()}`} icon={Calendar} accent="amber" trend="+15%" />
        <StatCard label="Total Earnings" value={`₹${earnings.total.toLocaleString()}`} icon={Wallet} accent="rose" />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <section className="card p-6">
          <h2 className="text-base font-bold text-slate-900">Weekly Earnings</h2>
          <p className="text-sm text-slate-500">Last 7 days</p>
          <div className="mt-6 flex items-end justify-between gap-3" style={{ height: 200 }}>
            {earnings.weeklyData.map((v, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-2">
                <div className="flex w-full items-end justify-center" style={{ height: 140 }}>
                  <div className="w-full max-w-[28px] rounded-t-lg bg-gradient-to-t from-brand-600 to-brand-400 transition-all hover:from-brand-700 hover:to-brand-500" style={{ height: `${(v / maxWeekly) * 140}px` }} title={`₹${v}`} />
                </div>
                <span className="text-xs text-slate-500">{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}</span>
                <span className="text-xs font-semibold text-slate-700">₹{v}</span>
              </div>
            ))}
          </div>
        </section>
        <section className="card p-6">
          <h2 className="text-base font-bold text-slate-900">Monthly Earnings</h2>
          <p className="text-sm text-slate-500">Last 12 months (in ₹ thousands)</p>
          <div className="mt-6 flex items-end justify-between gap-2" style={{ height: 200 }}>
            {earnings.monthlyData.map((v, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-2">
                <div className="flex w-full items-end justify-center" style={{ height: 140 }}>
                  <div className="w-full max-w-[20px] rounded-t-lg bg-gradient-to-t from-accent-600 to-accent-400 transition-all hover:from-accent-700 hover:to-accent-500" style={{ height: `${(v / maxMonthly) * 140}px` }} title={`₹${v}k`} />
                </div>
                <span className="text-[10px] text-slate-500">{months[i]}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="card mt-6 p-6">
        <h2 className="text-base font-bold text-slate-900">Recent Transactions</h2>
        <div className="mt-4 space-y-2">
          {[
            { name: 'Priya Sharma', job: 'Ceiling fan installation', amount: 650, date: '17 Jul 2026', method: 'UPI' },
            { name: 'Rohit Gupta', job: 'Deep cleaning 3BHK', amount: 2200, date: '14 Jul 2026', method: 'Card' },
            { name: 'Arjun Mehta', job: 'Kitchen pipe repair', amount: 480, date: '12 Jul 2026', method: 'Cash' },
            { name: 'Karthik Rao', job: 'Wardrobe hinge fix', amount: 420, date: '10 Jul 2026', method: 'UPI' },
          ].map((t, i) => (
            <div key={i} className="flex items-center justify-between rounded-xl p-3 hover:bg-slate-50">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent-50 text-accent-600"><BadgeIndianRupee className="h-5 w-5" /></span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.job} · {t.method} · {t.date}</p>
                </div>
              </div>
              <p className="text-sm font-bold text-accent-600">+₹{t.amount}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
