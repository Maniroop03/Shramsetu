import { Link } from 'react-router-dom';
import { ArrowRight, type LucideIcon } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  trendUp?: boolean;
  accent?: 'brand' | 'accent' | 'amber' | 'rose';
  to?: string;
}

const accentMap = {
  brand: 'bg-brand-50 text-brand-600',
  accent: 'bg-accent-50 text-accent-600',
  amber: 'bg-amber-50 text-amber-600',
  rose: 'bg-rose-50 text-rose-600',
};

export default function StatCard({ label, value, icon: Icon, trend, trendUp = true, accent = 'brand', to }: StatCardProps) {
  const inner = (
    <div className="card card-hover p-5 h-full">
      <div className="flex items-start justify-between">
        <span className={`grid h-11 w-11 place-items-center rounded-xl ${accentMap[accent]}`}>
          <Icon className="h-5 w-5" />
        </span>
        {trend && (
          <span className={`text-xs font-semibold ${trendUp ? 'text-accent-600' : 'text-rose-600'}`}>
            {trend}
          </span>
        )}
      </div>
      <p className="mt-4 text-2xl font-bold text-slate-900">{value}</p>
      <p className="mt-1 text-sm text-slate-500">{label}</p>
      {to && (
        <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-600">
          View <ArrowRight className="h-3 w-3" />
        </span>
      )}
    </div>
  );
  return to ? <Link to={to} className="block">{inner}</Link> : inner;
}
