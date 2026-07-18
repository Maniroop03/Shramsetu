import { Link } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';
import PageHeader from '../../components/PageHeader';
import { StatusBadge } from '../../components/Badges';
import { bookings } from '../../data/dummy';

const filters = ['All', 'Pending', 'Accepted', 'In Progress', 'Completed', 'Cancelled'];

export default function CustomerBookings() {
  return (
    <div>
      <PageHeader title="My Bookings" subtitle="Track all your job bookings in one place." />
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input className="input pl-10" placeholder="Search bookings..." />
        </div>
        <button className="btn-secondary"><Filter className="h-4 w-4" /> Filter</button>
      </div>
      <div className="mb-4 flex flex-wrap gap-2">
        {filters.map((f, i) => (
          <button key={f} className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${i === 0 ? 'bg-brand-600 text-white' : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50'}`}>{f}</button>
        ))}
      </div>
      <div className="space-y-3">
        {bookings.map((b) => (
          <Link key={b.id} to={`/customer/booking/${b.id}`} className="card card-hover flex flex-col gap-4 p-4 sm:flex-row sm:items-center">
            <img src={b.workerPhoto} alt={b.workerName} className="h-14 w-14 rounded-full object-cover" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-slate-900">{b.jobTitle}</p>
              <p className="text-xs text-slate-500">{b.workerName} · {b.category} · {b.location}</p>
              <p className="mt-1 text-xs text-slate-400">{b.date}</p>
            </div>
            <div className="flex items-center justify-between gap-3 sm:flex-col sm:items-end">
              <p className="text-base font-bold text-slate-900">₹{b.amount}</p>
              <StatusBadge status={b.status} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
