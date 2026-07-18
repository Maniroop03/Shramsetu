import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  User, Briefcase, Shield, Mail, Lock, Eye, EyeOff, ArrowRight,
  Phone, MapPin, Upload, ShieldCheck, Clock, CreditCard, Briefcase as BriefcaseIcon,
} from 'lucide-react';
import Logo from '../../components/Logo';
import { skillCategories } from '../../data/dummy';

type Role = 'customer' | 'worker' | 'admin';

export default function Register() {
  const { t } = useTranslation();
  const [role, setRole] = useState<Role>('customer');
  const [show, setShow] = useState(false);
  const [done, setDone] = useState(false);
  const navigate = useNavigate();

  const roles: { id: Role; label: string; icon: typeof User; desc: string }[] = [
    { id: 'customer', label: t('register.roleCustomer'), icon: User, desc: t('register.roleCustomerDesc') },
    { id: 'worker', label: t('register.roleWorker'), icon: Briefcase, desc: t('register.roleWorkerDesc') },
    { id: 'admin', label: t('register.roleAdmin'), icon: Shield, desc: t('register.roleAdminDesc') },
  ];

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setDone(true);
    setTimeout(() => navigate(`/${role}/dashboard`), 1800);
  };

  if (done) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 p-6">
        <div className="card w-full max-w-md p-10 text-center">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-accent-100 text-accent-600"><ShieldCheck className="h-8 w-8" /></span>
          <h2 className="mt-4 text-2xl font-bold text-slate-900">{t('register.accountCreated')}</h2>
          <p className="mt-2 text-slate-600">{t('register.redirecting')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      <div className="relative hidden w-1/3 bg-gradient-to-br from-brand-600 to-brand-800 lg:block">
        <div className="absolute -right-16 top-10 h-72 w-72 rounded-full bg-white/10" />
        <div className="absolute bottom-10 -left-10 h-80 w-80 rounded-full bg-accent-400/20" />
        <div className="relative flex h-full flex-col justify-between p-12">
          <Logo light />
          <div>
            <h2 className="text-4xl font-extrabold leading-tight text-white">{t('register.welcomeTitle')}</h2>
            <p className="mt-4 max-w-sm text-brand-100">{t('register.welcomeDesc')}</p>
          </div>
          <p className="text-sm text-brand-200">{t('register.copyright')}</p>
        </div>
      </div>
      <div className="w-full overflow-y-auto bg-slate-50 p-6 lg:w-2/3">
        <div className="mx-auto max-w-2xl">
          <div className="lg:hidden"><Logo /></div>
          <h1 className="mt-6 text-2xl font-bold text-slate-900">{t('register.createTitle')}</h1>
          <p className="mt-1 text-sm text-slate-500">{t('register.createSubtitle')}</p>
          <div className="mt-6 grid grid-cols-3 gap-2">
            {roles.map((r) => (
              <button
                key={r.id}
                onClick={() => setRole(r.id)}
                className={`rounded-xl border p-3 text-left transition-all ${
                  role === r.id ? 'border-brand-500 bg-brand-50 ring-2 ring-brand-100' : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <r.icon className={`h-5 w-5 ${role === r.id ? 'text-brand-600' : 'text-slate-500'}`} />
                <p className="mt-2 text-sm font-semibold text-slate-900">{r.label}</p>
                <p className="text-xs text-slate-500">{r.desc}</p>
              </button>
            ))}
          </div>

          {role === 'worker' && (
            <div className="mt-4 flex items-start gap-3 rounded-xl bg-amber-50 p-4 ring-1 ring-amber-100">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
              <p className="text-sm text-amber-800">{t('register.verifyNotice')}</p>
            </div>
          )}

          <form onSubmit={submit} className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label={role === 'worker' ? t('register.nameAadhaar') : t('register.name')} icon={User}>
                <input className="input pl-10" placeholder={t('register.namePlaceholder')} required />
              </Field>
              <Field label={t('register.phone')} icon={Phone}>
                <input type="tel" className="input pl-10" placeholder={t('register.phonePlaceholder')} required />
              </Field>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field label={t('register.email')} icon={Mail}>
                <input type="email" className="input pl-10" placeholder="you@example.com" required />
              </Field>
              <Field label={t('register.password')} icon={Lock}>
                <input type={show ? 'text' : 'password'} className="input pl-10 pr-10" placeholder="••••••••" required />
                <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                  {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </Field>
            </div>

            {role === 'worker' ? (
              <>
                <Field label={t('register.confirmPassword')} icon={Lock}>
                  <input type={show ? 'text' : 'password'} className="input pl-10" placeholder="••••••••" required />
                </Field>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label={t('register.aadhaarNumber')} icon={CreditCard}>
                    <input className="input pl-10" placeholder="XXXX-XXXX-XXXX" required />
                  </Field>
                  <div>
                    <label className="label">{t('register.uploadAadhaar')}</label>
                    <label className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border-2 border-dashed border-slate-300 px-4 py-3 text-sm text-slate-500 transition-colors hover:border-brand-400 hover:text-brand-600">
                      <Upload className="h-4 w-4" /> {t('register.uploadFile')}
                      <input type="file" className="hidden" />
                    </label>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="label">{t('register.skillCategory')}</label>
                    <select className="input" required defaultValue="">
                      <option value="" disabled>{t('register.selectSkill')}</option>
                      {skillCategories.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <Field label={t('register.experience')} icon={BriefcaseIcon}>
                    <input className="input pl-10" placeholder={t('register.experiencePlaceholder')} required />
                  </Field>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label={t('register.location')} icon={MapPin}>
                    <input className="input pl-10" placeholder={t('register.locationPlaceholder')} required />
                  </Field>
                  <Field label={t('register.timing')} icon={Clock}>
                    <input className="input pl-10" placeholder={t('register.timingPlaceholder')} required />
                  </Field>
                </div>
              </>
            ) : (
              <Field label={t('register.location')} icon={MapPin}>
                <input className="input pl-10" placeholder={t('register.locationPlaceholder')} required />
              </Field>
            )}

            <button type="submit" className="btn-primary w-full">{t('register.createAccount')} <ArrowRight className="h-4 w-4" /></button>
          </form>
          <p className="mt-6 text-center text-sm text-slate-500">
            {t('register.haveAccount')} <Link to="/login" className="font-semibold text-brand-600 hover:text-brand-700">{t('register.login')}</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

function Field({ label, icon: Icon, children }: { label: string; icon: typeof User; children: React.ReactNode }) {
  return (
    <div>
      <label className="label">{label}</label>
      <div className="relative">
        <Icon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        {children}
      </div>
    </div>
  );
}
