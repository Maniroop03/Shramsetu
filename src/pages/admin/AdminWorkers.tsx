import { Search, MapPin } from 'lucide-react';
import PageHeader from '../../components/PageHeader';
import { RatingStars, VerifiedBadge, StatusBadge } from '../../components/Badges';
import { workers } from '../../data/dummy';

export default function AdminWorkers() {
  return (
    <div>
      <PageHeader title="Workers" subtitle="Manage all workers on the platform." />
      <div className="mb-5 relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input className="input pl-10" placeholder="Search workers..." />
      </div>
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-slate-100 bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-5 py-3 font-semibold">Worker</th>
                <th className="px-5 py-3 font-semibold">Skill</th>
                <th className="px-5 py-3 font-semibold">Location</th>
                <th className="px-5 py-3 font-semibold">Rating</th>
                <th className="px-5 py-3 font-semibold">Jobs</th>
                <th className="px-5 py-3 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {workers.concat(workers).map((w, i) => (
                <tr key={i} className="hover:bg-slate-50">
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <img src={w.photo} alt={w.name} className="h-9 w-9 rounded-full object-cover" />
                      <div>
                        <p className="font-medium text-slate-900">{w.name}</p>
                        <p className="text-xs text-slate-400">{w.experience}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-slate-700">{w.skill}</td>
                  <td className="px-5 py-3"><span className="flex items-center gap-1 text-slate-500"><MapPin className="h-3 w-3" /> {w.location}</span></td>
                  <td className="px-5 py-3"><div className="flex items-center gap-1"><RatingStars rating={w.rating} size={12} /><span className="text-xs text-slate-500">{w.rating}</span></div></td>
                  <td className="px-5 py-3 text-slate-700">{w.jobsCompleted}</td>
                  <td className="px-5 py-3">{w.verified ? <VerifiedBadge small /> : <StatusBadge status="pending" />}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
