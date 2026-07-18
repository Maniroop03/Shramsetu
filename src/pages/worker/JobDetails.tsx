import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MapPin, Users, BadgeIndianRupee, Clock, Star, Check, X, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import { jobs } from '../../data/dummy';

export default function JobDetails() {
  const { jobId } = useParams();
  const job = jobs.find((j) => j.id === jobId) ?? jobs[0];
  const [quote, setQuote] = useState('');
  const [action, setAction] = useState<'accepted' | 'rejected' | 'quoted' | null>(null);
  const navigate = useNavigate();

  const handle = (a: 'accepted' | 'rejected' | 'quoted') => {
    setAction(a);
    if (a === 'accepted') setTimeout(() => navigate('/worker/active-job'), 1500);
    if (a === 'rejected') setTimeout(() => navigate('/worker/available-jobs'), 1500);
    if (a === 'quoted') setTimeout(() => navigate('/worker/available-jobs'), 1500);
  };

  if (action) {
    const msg = action === 'accepted' ? 'Job accepted!' : action === 'rejected' ? 'Job rejected' : 'Quote submitted!';
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="card w-full max-w-md p-10 text-center">
          <span className={`mx-auto grid h-16 w-16 place-items-center rounded-full ${action === 'rejected' ? 'bg-rose-100 text-rose-600' : 'bg-accent-100 text-accent-600'}`}>
            {action === 'rejected' ? <X className="h-8 w-8" /> : <CheckCircle2 className="h-8 w-8" />}
          </span>
          <h2 className="mt-4 text-2xl font-bold text-slate-900">{msg}</h2>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Link to="/worker/available-jobs" className="mb-4 inline-flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-slate-700"><ArrowLeft className="h-4 w-4" /> Back to jobs</Link>
      <PageHeader title={job.title} subtitle={`${job.category} · Posted ${job.postedAgo}`} />
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <section className="card p-6">
            <h2 className="text-base font-bold text-slate-900">Job Description</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{job.description}</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <Info icon={MapPin} label="Location" value={job.location} />
              <Info icon={Users} label="Workers Required" value={`${job.workersRequired}`} />
              <Info icon={Clock} label="Duration" value={job.duration} />
              <Info icon={BadgeIndianRupee} label="Budget" value={job.budget} />
            </div>
          </section>
          <section className="card p-6">
            <h2 className="text-base font-bold text-slate-900">Customer</h2>
            <div className="mt-4 flex items-center gap-3">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces" alt={job.customerName} className="h-12 w-12 rounded-full object-cover" />
              <div>
                <p className="text-sm font-semibold text-slate-900">{job.customerName}</p>
                <div className="flex items-center gap-1 text-xs text-slate-500"><Star className="h-3 w-3 fill-amber-400 text-amber-400" /> {job.customerRating} rating</div>
              </div>
            </div>
          </section>
        </div>
        <div className="space-y-6">
          <section className="card p-6">
            <h2 className="text-base font-bold text-slate-900">Take Action</h2>
            <button onClick={() => handle('accepted')} className="btn-accent mt-4 w-full"><Check className="h-4 w-4" /> Accept Job</button>
            <button onClick={() => handle('rejected')} className="btn-secondary mt-3 w-full"><X className="h-4 w-4" /> Reject Job</button>
            <div className="mt-5 border-t border-slate-100 pt-5">
              <label className="label">Submit Your Quote (₹)</label>
              <input type="number" value={quote} onChange={(e) => setQuote(e.target.value)} className="input" placeholder="e.g. 500" />
              <button onClick={() => handle('quoted')} disabled={!quote} className="btn-primary mt-3 w-full">Submit Quote</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function Info({ icon: Icon, label, value }: { icon: typeof MapPin; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-slate-50 text-slate-500"><Icon className="h-4 w-4" /></span>
      <div><p className="text-xs text-slate-500">{label}</p><p className="text-sm font-medium text-slate-900">{value}</p></div>
    </div>
  );
}
