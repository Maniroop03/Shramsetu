import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  ShieldCheck, Star, BadgeIndianRupee, Zap, Lock, Users,
  ArrowRight, CheckCircle2, Wrench, Bell,
} from 'lucide-react';
import { services } from '../data/dummy';

export default function Landing() {
  return (
    <div>
      <Hero />
      <WhyChoose />
      <Services />
      <HowItWorks />
      <CTA />
    </div>
  );
}

function Hero() {
  const { t } = useTranslation();
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/60 via-white to-white">
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-200/30 blur-3xl" />
      <div className="absolute top-40 -left-24 h-80 w-80 rounded-full bg-accent-200/30 blur-3xl" />
      <div className="section relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div className="animate-fade-up">
          <span className="badge bg-accent-100 text-accent-700">
            <ShieldCheck className="h-3.5 w-3.5" /> {t('landing.verifiedBadge')}
          </span>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] text-slate-900 sm:text-5xl lg:text-6xl">
            {t('landing.heroTitle')}{' '}
            <span className="bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">{t('landing.heroTitleHighlight')}</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
            {t('landing.heroSubtitle')}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/register" className="btn-primary text-base">
              {t('landing.hireWorker')} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/register" className="btn-secondary text-base">
              {t('landing.joinWorker')}
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-slate-500">
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent-500" /> {t('landing.workersCount')}</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent-500" /> {t('landing.avgRating')}</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent-500" /> {t('landing.jobsDone')}</div>
          </div>
        </div>
        <div className="relative animate-fade-in">
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}

function HeroIllustration() {
  const { t } = useTranslation();
  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-brand-700 p-8 shadow-card">
        <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/10" />
        <div className="absolute -bottom-12 -left-8 h-48 w-48 rounded-full bg-accent-400/20" />
        <div className="relative grid grid-cols-2 gap-4">
          {[
            { icon: Wrench, label: 'Plumber', color: 'bg-accent-500' },
            { icon: Zap, label: 'Electrician', color: 'bg-amber-400' },
            { icon: Users, label: 'Movers', color: 'bg-rose-400' },
            { icon: Star, label: 'Top Rated', color: 'bg-white text-brand-700' },
          ].map((c) => (
            <div key={c.label} className="rounded-2xl bg-white/95 p-5 shadow-soft backdrop-blur">
              <span className={`grid h-12 w-12 place-items-center rounded-xl ${c.color} text-white`}>
                <c.icon className="h-6 w-6" />
              </span>
              <p className="mt-3 text-sm font-semibold text-slate-800">{c.label}</p>
              <p className="text-xs text-slate-500">{t('landing.availableNow')}</p>
            </div>
          ))}
        </div>
        <div className="relative mt-4 rounded-2xl bg-white/95 p-5 shadow-soft backdrop-blur">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="https://images.unsplash.com/photo-1638192085-fdab384d8d9d?w=80&h=80&fit=crop&crop=faces" alt="worker" className="h-11 w-11 rounded-full object-cover" />
              <div>
                <p className="text-sm font-semibold text-slate-900">Ramesh Kumar</p>
                <div className="flex items-center gap-1 text-xs text-slate-500">
                  <Star className="h-3 w-3 fill-amber-400 text-amber-400" /> 4.9 · 214 jobs
                </div>
              </div>
            </div>
            <span className="badge bg-accent-100 text-accent-700"><ShieldCheck className="h-3 w-3" /> {t('landing.verified')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function WhyChoose() {
  const { t } = useTranslation();
  const features = [
    { icon: ShieldCheck, title: t('landing.f1Title'), desc: t('landing.f1Desc'), color: 'bg-brand-50 text-brand-600' },
    { icon: Star, title: t('landing.f2Title'), desc: t('landing.f2Desc'), color: 'bg-amber-50 text-amber-600' },
    { icon: BadgeIndianRupee, title: t('landing.f3Title'), desc: t('landing.f3Desc'), color: 'bg-accent-50 text-accent-600' },
    { icon: Zap, title: t('landing.f4Title'), desc: t('landing.f4Desc'), color: 'bg-blue-50 text-blue-600' },
    { icon: Lock, title: t('landing.f5Title'), desc: t('landing.f5Desc'), color: 'bg-rose-50 text-rose-600' },
    { icon: Users, title: t('landing.f6Title'), desc: t('landing.f6Desc'), color: 'bg-indigo-50 text-indigo-600' },
  ];
  return (
    <section className="section py-16 lg:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="badge bg-brand-50 text-brand-700">{t('landing.whyBadge')}</span>
        <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">{t('landing.whyTitle')}</h2>
        <p className="mt-3 text-slate-600">{t('landing.whySubtitle')}</p>
      </div>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="card card-hover p-6">
            <span className={`grid h-12 w-12 place-items-center rounded-xl ${f.color}`}>
              <f.icon className="h-6 w-6" />
            </span>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const { t } = useTranslation();
  return (
    <section className="bg-slate-50 py-16 lg:py-24">
      <div className="section">
        <div className="mx-auto max-w-2xl text-center">
          <span className="badge bg-accent-50 text-accent-700">{t('landing.servicesBadge')}</span>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">{t('landing.servicesTitle')}</h2>
          <p className="mt-3 text-slate-600">{t('landing.servicesSubtitle')}</p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((s) => (
            <Link key={s.id} to="/services" className="card card-hover group p-5 text-center">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                <s.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-slate-900">{s.name}</h3>
              <p className="mt-1 text-xs text-slate-500">{s.description}</p>
              <div className="mt-3 flex items-center justify-center gap-1 text-xs font-medium text-slate-500">
                <BadgeIndianRupee className="h-3 w-3" /> {s.startingPrice} {t('landing.onwards')}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const { t } = useTranslation();
  const customerSteps = [
    { icon: Wrench, title: t('landing.cStep1Title'), desc: t('landing.cStep1Desc') },
    { icon: Users, title: t('landing.cStep2Title'), desc: t('landing.cStep2Desc') },
    { icon: Star, title: t('landing.cStep3Title'), desc: t('landing.cStep3Desc') },
    { icon: BadgeIndianRupee, title: t('landing.cStep4Title'), desc: t('landing.cStep4Desc') },
    { icon: Star, title: t('landing.cStep5Title'), desc: t('landing.cStep5Desc') },
  ];
  const workerSteps = [
    { icon: Users, title: t('landing.wStep1Title'), desc: t('landing.wStep1Desc') },
    { icon: ShieldCheck, title: t('landing.wStep2Title'), desc: t('landing.wStep2Desc') },
    { icon: Bell, title: t('landing.wStep3Title'), desc: t('landing.wStep3Desc') },
    { icon: BadgeIndianRupee, title: t('landing.wStep4Title'), desc: t('landing.wStep4Desc') },
    { icon: Wrench, title: t('landing.wStep5Title'), desc: t('landing.wStep5Desc') },
    { icon: BadgeIndianRupee, title: t('landing.wStep6Title'), desc: t('landing.wStep6Desc') },
  ];
  return (
    <section className="section py-16 lg:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="badge bg-brand-50 text-brand-700">{t('landing.howBadge')}</span>
        <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">{t('landing.howTitle')}</h2>
      </div>
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <HowColumn title={t('landing.forCustomers')} steps={customerSteps} accent="brand" />
        <HowColumn title={t('landing.forWorkers')} steps={workerSteps} accent="accent" />
      </div>
    </section>
  );
}

function HowColumn({ title, steps, accent }: { title: string; steps: { icon: typeof Wrench; title: string; desc: string }[]; accent: 'brand' | 'accent' }) {
  const dot = accent === 'brand' ? 'bg-brand-600' : 'bg-accent-500';
  const ring = accent === 'brand' ? 'bg-brand-50 text-brand-600' : 'bg-accent-50 text-accent-600';
  return (
    <div className="card p-6 lg:p-8">
      <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      <ol className="mt-6 space-y-5">
        {steps.map((s, i) => (
          <li key={s.title} className="relative flex gap-4">
            <div className="flex flex-col items-center">
              <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${ring}`}>
                <s.icon className="h-5 w-5" />
              </span>
              {i < steps.length - 1 && <span className={`mt-1 w-px flex-1 ${dot} opacity-20`} style={{ minHeight: 24 }} />}
            </div>
            <div className="pb-1">
              <p className="text-sm font-semibold text-slate-900">{i + 1}. {s.title}</p>
              <p className="mt-0.5 text-sm text-slate-600">{s.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

function CTA() {
  const { t } = useTranslation();
  return (
    <section className="section py-16 lg:py-24">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 px-8 py-14 text-center shadow-card lg:px-16">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10" />
        <div className="absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-accent-400/20" />
        <div className="relative">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{t('landing.ctaTitle')}</h2>
          <p className="mx-auto mt-3 max-w-xl text-brand-100">{t('landing.ctaSubtitle')}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/register" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow-soft transition-all hover:bg-brand-50 active:scale-[0.98]">
              {t('landing.hireWorker')} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/register" className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent-500 px-6 py-3 text-sm font-semibold text-white shadow-soft transition-all hover:bg-accent-600 active:scale-[0.98]">
              {t('landing.joinWorker')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
