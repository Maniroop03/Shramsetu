import { Link, useParams } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import PageHeader from '../../components/PageHeader';
import { RatingStars, VerifiedBadge } from '../../components/Badges';
import { workers, jobs } from '../../data/dummy';

export default function JobQuotes() {
  const { jobId } = useParams();
  const job = jobs.find((j) => j.id === jobId) ?? jobs[0];
  return (
    <div>
      <PageHeader title="Worker Quotes" subtitle={`Quotes for: ${job.title}`} />
      <div className="card mb-6 p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-base font-semibold text-slate-900">{job.title}</h3>
            <p className="text-sm text-slate-500">{job.category} · {job.location} · Budget {job.budget}</p>
          </div>
          <span className="badge bg-amber-100 text-amber-700">{workers.length} quotes received</span>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {workers.map((w) => (
          <div key={w.id} className="card card-hover p-5">
            <div className="flex items-start gap-3">
              <img src={w.photo} alt={w.name} className="h-14 w-14 rounded-full object-cover" />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="truncate text-sm font-semibold text-slate-900">{w.name}</h3>
                  {w.verified && <VerifiedBadge small />}
                </div>
                <p className="text-xs text-slate-500">{w.skill} · {w.experience}</p>
                <div className="mt-1 flex items-center gap-2">
                  <RatingStars rating={w.rating} size={12} />
                  <span className="text-xs text-slate-500">{w.rating} ({w.reviews})</span>
                </div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 rounded-xl bg-slate-50 p-3 text-center">
              <div>
                <p className="text-lg font-bold text-slate-900">₹{w.quotePrice}</p>
                <p className="text-[10px] text-slate-500">Quoted Price</p>
              </div>
              <div className="border-x border-slate-200">
                <p className="text-sm font-semibold text-slate-900">{w.estimatedTime}</p>
                <p className="text-[10px] text-slate-500">Est. Time</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">{w.jobsCompleted}</p>
                <p className="text-[10px] text-slate-500">Jobs Done</p>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-1 text-xs text-slate-500">
              <MapPin className="h-3 w-3" /> {w.location}
            </div>
            <Link to={`/customer/booking/b1`} className="btn-primary mt-4 w-full">
              Book Worker <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
