import { useState } from 'react';
import { Camera, User, Phone, Mail, MapPin, Lock, CheckCircle2 } from 'lucide-react';
import PageHeader from '../../components/PageHeader';

export default function Profile() {
  const [saved, setSaved] = useState(false);
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };
  return (
    <div className="max-w-3xl">
      <PageHeader title="Profile" subtitle="Manage your personal information and password." />
      <form onSubmit={submit} className="space-y-6">
        <section className="card p-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=160&fit=crop&crop=faces" alt="avatar" className="h-20 w-20 rounded-full object-cover" />
              <button type="button" className="absolute -bottom-1 -right-1 grid h-8 w-8 place-items-center rounded-full bg-brand-600 text-white shadow-soft ring-2 ring-white">
                <Camera className="h-4 w-4" />
              </button>
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">Priya Sharma</h2>
              <p className="text-sm text-slate-500">Customer · Member since 2025</p>
            </div>
          </div>
        </section>
        <section className="card p-6 lg:p-8">
          <h2 className="text-base font-bold text-slate-900">Personal Information</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <Field label="Name" icon={User} defaultValue="Priya Sharma" />
            <Field label="Phone" icon={Phone} defaultValue="+91 98765 43210" />
            <Field label="Email" icon={Mail} defaultValue="priya@laborease.in" />
            <Field label="Location" icon={MapPin} defaultValue="Indiranagar, Bengaluru" />
          </div>
        </section>
        <section className="card p-6 lg:p-8">
          <h2 className="text-base font-bold text-slate-900">Change Password</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <Field label="New Password" icon={Lock} type="password" placeholder="••••••••" />
            <Field label="Confirm Password" icon={Lock} type="password" placeholder="••••••••" />
          </div>
        </section>
        <div className="flex items-center gap-3">
          <button type="submit" className="btn-primary">Save Changes</button>
          {saved && <span className="inline-flex items-center gap-1 text-sm font-medium text-accent-600"><CheckCircle2 className="h-4 w-4" /> Saved!</span>}
        </div>
      </form>
    </div>
  );
}

function Field({ label, icon: Icon, ...props }: { label: string; icon: typeof User } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="label">{label}</label>
      <div className="relative">
        <Icon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input className="input pl-10" {...props} />
      </div>
    </div>
  );
}
