import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { User, Briefcase, Shield, Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import Logo from '../../components/Logo';

type Role = 'customer' | 'worker' | 'admin';

export default function Login() {
  const { t } = useTranslation();
  const [role, setRole] = useState<Role>('customer');
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const roles: { id: Role; label: string; icon: typeof User; desc: string }[] = [
    { id: 'customer', label: t('login.roleCustomer'), icon: User, desc: t('login.roleCustomerDesc') },
    { id: 'worker', label: t('login.roleWorker'), icon: Briefcase, desc: t('login.roleWorkerDesc') },
    { id: 'admin', label: t('login.roleAdmin'), icon: Shield, desc: t('login.roleAdminDesc') },
  ];

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/${role}/dashboard`);
  };

  return (
    <div className="flex min-h-screen">
      <div className="relative hidden w-1/2 bg-gradient-to-br from-brand-600 to-brand-800 lg:block">
        <div className="absolute -right-16 top-10 h-72 w-72 rounded-full bg-white/10" />
        <div className="absolute bottom-10 -left-10 h-80 w-80 rounded-full bg-accent-400/20" />
        <div className="relative flex h-full flex-col justify-between p-12">
          <Logo light />
          <div>
            <h2 className="text-4xl font-extrabold leading-tight text-white">{t('login.welcomeTitle')}</h2>
            <p className="mt-4 max-w-md text-brand-100">{t('login.welcomeDesc')}</p>
            <div className="mt-8 flex gap-6 text-white">
              <div><p className="text-3xl font-bold">10K+</p><p className="text-sm text-brand-200">{t('login.workers')}</p></div>
              <div><p className="text-3xl font-bold">50K+</p><p className="text-sm text-brand-200">{t('login.jobsDone')}</p></div>
              <div><p className="text-3xl font-bold">4.8</p><p className="text-sm text-brand-200">{t('login.rating')}</p></div>
            </div>
          </div>
          <p className="text-sm text-brand-200">{t('login.copyright')}</p>
        </div>
      </div>
      <div className="flex w-full items-center justify-center p-6 lg:w-1/2">
        <div className="w-full max-w-md">
          <div className="lg:hidden"><Logo /></div>
          <h1 className="mt-6 text-2xl font-bold text-slate-900">{t('login.signInTitle')}</h1>
          <p className="mt-1 text-sm text-slate-500">{t('login.signInSubtitle')}</p>
          <div className="mt-6 grid grid-cols-3 gap-2">
            {roles.map((r) => (
              <button
                key={r.id}
                onClick={() => setRole(r.id)}
                className={`rounded-xl border p-3 text-left transition-all ${
                  role === r.id ? 'border-brand-500 bg-brand-50 ring-2 ring-brand-100' : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <r.icon className={`h-5 w-5 ${role === r.id ? 'text-brand-600' : 'text-slate-500'}`} />
                <p className="mt-2 text-sm font-semibold text-slate-900">{r.label}</p>
                <p className="text-xs text-slate-500">{r.desc}</p>
              </button>
            ))}
          </div>
          <form onSubmit={submit} className="mt-6 space-y-4">
            <div>
              <label className="label">{t('login.email')}</label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input type="email" required className="input pl-10" placeholder="you@example.com" defaultValue={`${role}@laborease.in`} />
              </div>
            </div>
            <div>
              <label className="label">{t('login.password')}</label>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input type={show ? 'text' : 'password'} required className="input pl-10 pr-10" placeholder="••••••••" defaultValue="password" />
                <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                  {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-slate-600"><input type="checkbox" className="rounded border-slate-300 text-brand-600" /> {t('login.rememberMe')}</label>
              <a href="#" className="font-medium text-brand-600 hover:text-brand-700">{t('login.forgotPassword')}</a>
            </div>
            <button type="submit" className="btn-primary w-full">{t('login.signIn')} <ArrowRight className="h-4 w-4" /></button>
          </form>
          <p className="mt-6 text-center text-sm text-slate-500">
            {t('login.noAccount')} <Link to="/register" className="font-semibold text-brand-600 hover:text-brand-700">{t('login.register')}</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
