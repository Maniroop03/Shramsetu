import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, MapPin, Calendar, Clock, Users, BadgeIndianRupee, CheckCircle2 } from 'lucide-react';
import PageHeader from '../../components/PageHeader';
import { services } from '../../data/dummy';

export default function PostJob() {
  const [done, setDone] = useState(false);
  const navigate = useNavigate();
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setDone(true);
    setTimeout(() => navigate('/customer/quotes/j1'), 1500);
  };
  if (done) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="card w-full max-w-md p-10 text-center">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-accent-100 text-accent-600"><CheckCircle2 className="h-8 w-8" /></span>
          <h2 className="mt-4 text-2xl font-bold text-slate-900">Job posted successfully!</h2>
          <p className="mt-2 text-slate-600">Workers will start sending quotes shortly.</p>
        </div>
      </div>
    );
  }
  return (
    <div className="max-w-3xl">
      <PageHeader title="Post a Job" subtitle="Describe your job and receive quotes from verified workers." />
      <form onSubmit={submit} className="card space-y-5 p-6 lg:p-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="label">Service Category</label>
            <select className="input" required defaultValue="">
              <option value="" disabled>Select category</option>
              {services.map((s) => <option key={s.id} value={s.name}>{s.name}</option>)}
            </select>
          </div>
          <div>
            <label className="label">Job Title</label>
            <input className="input" placeholder="e.g. Ceiling fan installation" required />
          </div>
        </div>
        <div>
          <label className="label">Job Description</label>
          <textarea rows={4} className="input" placeholder="Describe the work in detail..." required />
        </div>
        <div>
          <label className="label">Upload Images</label>
          <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-slate-300 px-4 py-8 text-center transition-colors hover:border-brand-400 hover:bg-brand-50/30">
            <Upload className="h-6 w-6 text-slate-400" />
            <span className="text-sm font-medium text-slate-600">Click to upload photos of the job</span>
            <span className="text-xs text-slate-400">PNG, JPG up to 5MB</span>
            <input type="file" multiple className="hidden" />
          </label>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="label">Location</label>
            <div className="relative">
              <MapPin className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input className="input pl-10" placeholder="Area, City" required />
            </div>
          </div>
          <div>
            <label className="label">Number of Workers Required</label>
            <div className="relative">
              <Users className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input type="number" min={1} defaultValue={1} className="input pl-10" required />
            </div>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="label">Expected Date</label>
            <div className="relative">
              <Calendar className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input type="date" className="input pl-10" required />
            </div>
          </div>
          <div>
            <label className="label">Estimated Duration</label>
            <div className="relative">
              <Clock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input className="input pl-10" placeholder="e.g. 2 hours" required />
            </div>
          </div>
        </div>
        <div>
          <label className="label">Budget Range</label>
          <div className="relative">
            <BadgeIndianRupee className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input className="input pl-10" placeholder="e.g. ₹400 - ₹700" required />
          </div>
        </div>
        <button type="submit" className="btn-primary w-full sm:w-auto">Submit Job</button>
      </form>
    </div>
  );
}
