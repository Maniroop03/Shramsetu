import { Link } from 'react-router-dom';
import { Star, BadgeIndianRupee, MapPin } from 'lucide-react';
import PageHeader from '../../components/PageHeader';
import { StatusBadge } from '../../components/Badges';
import { bookings } from '../../data/dummy';

export default function WorkerCompletedJobs() {
  const completed = bookings.filter((b) => b.status === 'completed');
  return (
    <div>
      <PageHeader title="Completed Jobs" subtitle="Your finished jobs and earnings history." />
      <div className="space-y-3">
        {completed.concat(completed).map((b, i) => (
          <Link key={i} to={`/worker/job/${b.id}`} className="card card-hover flex items-center gap-4 p-4">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces" alt={b.customerName} className="h-12 w-12 rounded-full object-cover" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-slate-900">{b.jobTitle}</p>
              <p className="text-xs text-slate-500">{b.customerName} · {b.category}</p>
              <div className="mt-1 flex items-center gap-3 text-xs text-slate-500">
                <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {b.location}</span>
                <span className="flex items-center gap-1"><Star className="h-3 w-3 fill-amber-400 text-amber-400" /> 5.0</span>
              </div>
            </div>
            <div className="text-right">
              <p className="flex items-center justify-end gap-1 text-sm font-bold text-accent-600"><BadgeIndianRupee className="h-3.5 w-3.5" /> {b.amount}</p>
              <StatusBadge status="completed" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
