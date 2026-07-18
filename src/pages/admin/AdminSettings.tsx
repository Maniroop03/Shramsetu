import { useState } from 'react';
import { Check, Bell, Lock, Globe, Shield } from 'lucide-react';
import PageHeader from '../../components/PageHeader';

export default function AdminSettings() {
  const [toggles, setToggles] = useState({ email: true, push: false, autoVerify: false, maintenance: false });
  const [saved, setSaved] = useState(false);
  const save = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };
  return (
    <div className="max-w-3xl">
      <PageHeader title="Settings" subtitle="Manage platform preferences." />
      <form onSubmit={save} className="space-y-6">
        <section className="card p-6">
          <h2 className="flex items-center gap-2 text-base font-bold text-slate-900"><Bell className="h-5 w-5 text-brand-600" /> Notifications</h2>
          <div className="mt-4 space-y-3">
            <Toggle label="Email notifications" desc="Send admin email alerts" checked={toggles.email} onChange={(v) => setToggles((t) => ({ ...t, email: v }))} />
            <Toggle label="Push notifications" desc="Real-time browser alerts" checked={toggles.push} onChange={(v) => setToggles((t) => ({ ...t, push: v }))} />
          </div>
        </section>
        <section className="card p-6">
          <h2 className="flex items-center gap-2 text-base font-bold text-slate-900"><Shield className="h-5 w-5 text-brand-600" /> Verification</h2>
          <div className="mt-4 space-y-3">
            <Toggle label="Auto-verify workers" desc="Skip manual Aadhaar review" checked={toggles.autoVerify} onChange={(v) => setToggles((t) => ({ ...t, autoVerify: v }))} />
          </div>
        </section>
        <section className="card p-6">
          <h2 className="flex items-center gap-2 text-base font-bold text-slate-900"><Globe className="h-5 w-5 text-brand-600" /> Platform</h2>
          <div className="mt-4 space-y-3">
            <Toggle label="Maintenance mode" desc="Temporarily disable new signups" checked={toggles.maintenance} onChange={(v) => setToggles((t) => ({ ...t, maintenance: v }))} />
          </div>
        </section>
        <section className="card p-6">
          <h2 className="flex items-center gap-2 text-base font-bold text-slate-900"><Lock className="h-5 w-5 text-brand-600" /> Admin Password</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div><label className="label">New Password</label><input type="password" className="input" placeholder="••••••••" /></div>
            <div><label className="label">Confirm Password</label><input type="password" className="input" placeholder="••••••••" /></div>
          </div>
        </section>
        <div className="flex items-center gap-3">
          <button type="submit" className="btn-primary">Save Settings</button>
          {saved && <span className="inline-flex items-center gap-1 text-sm font-medium text-accent-600"><Check className="h-4 w-4" /> Settings saved!</span>}
        </div>
      </form>
    </div>
  );
}

function Toggle({ label, desc, checked, onChange }: { label: string; desc: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
      <div>
        <p className="text-sm font-semibold text-slate-900">{label}</p>
        <p className="text-xs text-slate-500">{desc}</p>
      </div>
      <button
        type="button"
        onClick={() => onChange(!checked)}
        className={`relative h-6 w-11 rounded-full transition-colors ${checked ? 'bg-brand-600' : 'bg-slate-300'}`}
      >
        <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-soft transition-all ${checked ? 'left-[22px]' : 'left-0.5'}`} />
      </button>
    </div>
  );
}
