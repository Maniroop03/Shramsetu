import { useState } from 'react';
import { ShieldCheck, X, Check, CreditCard, MapPin, Briefcase } from 'lucide-react';
import PageHeader from '../../components/PageHeader';
import { verifyRequests } from '../../data/dummy';

export default function VerifyWorkers() {
  const [decisions, setDecisions] = useState<Record<string, 'approved' | 'rejected' | undefined>>({});
  return (
    <div>
      <PageHeader title="Verify Workers" subtitle="Review Aadhaar verification requests." />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {verifyRequests.map((r) => {
          const decision = decisions[r.id];
          return (
            <div key={r.id} className={`card overflow-hidden ${decision === 'approved' ? 'ring-2 ring-accent-200' : decision === 'rejected' ? 'ring-2 ring-rose-200 opacity-60' : ''}`}>
              <div className="relative h-40 bg-slate-100">
                <img src={r.photo} alt={r.name} className="h-full w-full object-cover" />
                <span className="absolute left-3 top-3 badge bg-white/90 text-slate-700 backdrop-blur"><CreditCard className="h-3 w-3" /> Aadhaar</span>
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-slate-900">{r.name}</h3>
                <div className="mt-2 space-y-1.5 text-sm text-slate-500">
                  <p className="flex items-center gap-2"><Briefcase className="h-3.5 w-3.5" /> {r.skill}</p>
                  <p className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5" /> {r.location}</p>
                  <p className="flex items-center gap-2"><CreditCard className="h-3.5 w-3.5" /> Aadhaar: {r.aadhaarNumber}</p>
                  <p className="text-xs text-slate-400">Submitted {r.submitted}</p>
                </div>
                {decision ? (
                  <div className={`mt-4 rounded-xl p-3 text-center text-sm font-semibold ${decision === 'approved' ? 'bg-accent-50 text-accent-700' : 'bg-rose-50 text-rose-700'}`}>
                    {decision === 'approved' ? <Check className="mx-auto h-5 w-5" /> : <X className="mx-auto h-5 w-5" />}
                    {decision === 'approved' ? 'Approved' : 'Rejected'}
                  </div>
                ) : (
                  <div className="mt-4 flex gap-2">
                    <button onClick={() => setDecisions((d) => ({ ...d, [r.id]: 'approved' }))} className="btn-accent flex-1"><Check className="h-4 w-4" /> Approve</button>
                    <button onClick={() => setDecisions((d) => ({ ...d, [r.id]: 'rejected' }))} className="btn-secondary flex-1 !text-rose-600 !ring-rose-200 hover:!bg-rose-50"><X className="h-4 w-4" /> Reject</button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-6 flex items-center gap-2 rounded-xl bg-brand-50 p-4 text-sm text-brand-700">
        <ShieldCheck className="h-5 w-5" /> Only approved workers can accept jobs on the platform.
      </div>
    </div>
  );
}
