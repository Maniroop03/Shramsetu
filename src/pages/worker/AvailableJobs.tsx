import { Link } from 'react-router-dom';
import { MapPin, Users, Star, Clock, ArrowRight, Search } from 'lucide-react';
import PageHeader from '../../components/PageHeader';

import { jobs } from '../../data/dummy';

export default function AvailableJobs() {
  return (
    <div>
      <PageHeader title="Available Jobs" subtitle="Browse jobs matching your skills and location." />
      <div className="mb-5 relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input className="input pl-10" placeholder="Search jobs by title, category or location..." />
      </div>
      <div className="space-y-4">
        {jobs.map((j) => (
          <div key={j.id} className="card card-hover p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="badge bg-brand-50 text-brand-700">{j.category}</span>
                  <span className="text-xs text-slate-400">{j.postedAgo}</span>
                </div>
                <h3 className="mt-2 text-base font-semibold text-slate-900">{j.title}</h3>
                <p className="mt-1 text-sm text-slate-600 line-clamp-2">{j.description}</p>
                <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-500">
                  <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {j.location}</span>
                  <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" /> {j.workersRequired} worker{j.workersRequired > 1 ? 's' : ''}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {j.duration}</span>
                  <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" /> {j.customerRating} customer</span>
                </div>
              </div>
              <div className="flex shrink-0 flex-col items-end gap-2 sm:pl-6">
                <p className="text-lg font-bold text-slate-900">{j.budget}</p>
                <p className="text-xs text-slate-400">Budget range</p>
                <Link to={`/worker/job/${j.id}`} className="btn-primary mt-2">View Details <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
