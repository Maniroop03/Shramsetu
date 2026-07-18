import { useState } from 'react';
import { Camera, Briefcase, MapPin, Star, Pencil, Check, ShieldCheck } from 'lucide-react';
import PageHeader from '../../components/PageHeader';
import { RatingStars, VerifiedBadge } from '../../components/Badges';
import { reviews } from '../../data/dummy';

export default function WorkerProfile() {
  const [edit, setEdit] = useState(false);
  return (
    <div className="max-w-4xl">
      <PageHeader title="Worker Profile" subtitle="Manage your professional profile." action={<button onClick={() => setEdit(!edit)} className="btn-secondary">{edit ? <Check className="h-4 w-4" /> : <Pencil className="h-4 w-4" />} {edit ? 'Save' : 'Edit Profile'}</button>} />
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-1">
          <section className="card p-6 text-center">
            <div className="relative mx-auto w-fit">
              <img src="https://images.unsplash.com/photo-1638192085-fdab384d8d9d?w=160&h=160&fit=crop&crop=faces" alt="Ramesh Kumar" className="h-28 w-28 rounded-full object-cover" />
              {edit && (
                <button className="absolute -bottom-1 -right-1 grid h-9 w-9 place-items-center rounded-full bg-brand-600 text-white shadow-soft ring-2 ring-white"><Camera className="h-4 w-4" /></button>
              )}
            </div>
            <h2 className="mt-4 text-lg font-bold text-slate-900">Ramesh Kumar</h2>
            <div className="mt-1 flex items-center justify-center gap-2">
              <VerifiedBadge small />
              <span className="text-xs text-slate-500">Electrician</span>
            </div>
            <div className="mt-3 flex items-center justify-center gap-1">
              <RatingStars rating={4.9} size={14} />
              <span className="text-sm font-semibold text-slate-900">4.9</span>
              <span className="text-xs text-slate-500">(128 reviews)</span>
            </div>
          </section>
          <section className="card p-6">
            <h3 className="text-sm font-bold text-slate-900">Details</h3>
            <div className="mt-4 space-y-3 text-sm">
              <Detail icon={Briefcase} label="Experience" value="8 years" />
              <Detail icon={MapPin} label="Location" value="Indiranagar, Bengaluru" />
              <Detail icon={Star} label="Completed Jobs" value="214" />
              <Detail icon={ShieldCheck} label="Verification" value="Aadhaar Verified" />
            </div>
          </section>
        </div>
        <div className="space-y-6 lg:col-span-2">
          <section className="card p-6">
            <h3 className="text-base font-bold text-slate-900">About</h3>
            {edit ? (
              <textarea rows={4} className="input mt-3" defaultValue="Experienced electrician specializing in residential wiring, fan and light installation, and switchboard repairs. 8+ years serving Bengaluru." />
            ) : (
              <p className="mt-3 text-sm leading-relaxed text-slate-600">Experienced electrician specializing in residential wiring, fan and light installation, and switchboard repairs. 8+ years serving Bengaluru.</p>
            )}
          </section>
          <section className="card p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-900">Reviews</h3>
              <span className="text-sm text-slate-500">{reviews.length} reviews</span>
            </div>
            <div className="mt-4 space-y-4">
              {reviews.map((r) => (
                <div key={r.id} className="flex gap-3 border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                  <img src={r.customerPhoto} alt={r.customerName} className="h-10 w-10 rounded-full object-cover" />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-slate-900">{r.customerName}</p>
                      <span className="text-xs text-slate-400">{r.date}</span>
                    </div>
                    <RatingStars rating={r.rating} size={12} />
                    <p className="mt-1 text-sm text-slate-600">{r.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function Detail({ icon: Icon, label, value }: { icon: typeof Briefcase; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-slate-50 text-slate-500"><Icon className="h-4 w-4" /></span>
      <div><p className="text-xs text-slate-500">{label}</p><p className="text-sm font-medium text-slate-900">{value}</p></div>
    </div>
  );
}
