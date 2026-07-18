import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Wrench, Users, Star, ShieldCheck, Bell, BadgeIndianRupee } from 'lucide-react';

export default function HowItWorks() {
  const { t } = useTranslation();
  const customerSteps = [
    { icon: Wrench, title: t('howItWorks.cStep1Title'), desc: t('howItWorks.cStep1Desc') },
    { icon: Users, title: t('howItWorks.cStep2Title'), desc: t('howItWorks.cStep2Desc') },
    { icon: Star, title: t('howItWorks.cStep3Title'), desc: t('howItWorks.cStep3Desc') },
    { icon: BadgeIndianRupee, title: t('howItWorks.cStep4Title'), desc: t('howItWorks.cStep4Desc') },
    { icon: Star, title: t('howItWorks.cStep5Title'), desc: t('howItWorks.cStep5Desc') },
  ];
  const workerSteps = [
    { icon: Users, title: t('howItWorks.wStep1Title'), desc: t('howItWorks.wStep1Desc') },
    { icon: ShieldCheck, title: t('howItWorks.wStep2Title'), desc: t('howItWorks.wStep2Desc') },
    { icon: Bell, title: t('howItWorks.wStep3Title'), desc: t('howItWorks.wStep3Desc') },
    { icon: BadgeIndianRupee, title: t('howItWorks.wStep4Title'), desc: t('howItWorks.wStep4Desc') },
    { icon: Wrench, title: t('howItWorks.wStep5Title'), desc: t('howItWorks.wStep5Desc') },
    { icon: BadgeIndianRupee, title: t('howItWorks.wStep6Title'), desc: t('howItWorks.wStep6Desc') },
  ];
  return (
    <div>
      <section className="bg-gradient-to-b from-brand-50/60 to-white py-16">
        <div className="section max-w-3xl text-center">
          <span className="badge bg-brand-50 text-brand-700">{t('howItWorks.badge')}</span>
          <h1 className="mt-4 text-4xl font-extrabold text-slate-900 sm:text-5xl">{t('howItWorks.title')}</h1>
          <p className="mt-4 text-lg text-slate-600">{t('howItWorks.subtitle')}</p>
        </div>
      </section>
      <section className="section py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <Column title={t('howItWorks.forCustomers')} steps={customerSteps} accent="brand" />
          <Column title={t('howItWorks.forWorkers')} steps={workerSteps} accent="accent" />
        </div>
      </section>
    </div>
  );
}

function Column({ title, steps, accent }: { title: string; steps: { icon: typeof Wrench; title: string; desc: string }[]; accent: 'brand' | 'accent' }) {
  const { t } = useTranslation();
  const ring = accent === 'brand' ? 'bg-brand-50 text-brand-600' : 'bg-accent-50 text-accent-600';
  return (
    <div className="card p-6 lg:p-8">
      <h2 className="text-xl font-bold text-slate-900">{title}</h2>
      <ol className="mt-6 space-y-5">
        {steps.map((s, i) => (
          <li key={s.title} className="flex gap-4">
            <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${ring}`}><s.icon className="h-5 w-5" /></span>
            <div>
              <p className="text-sm font-semibold text-slate-900">{i + 1}. {s.title}</p>
              <p className="mt-0.5 text-sm text-slate-600">{s.desc}</p>
            </div>
          </li>
        ))}
      </ol>
      <Link to="/register" className={`mt-6 ${accent === 'brand' ? 'btn-primary' : 'btn-accent'}`}>{t('howItWorks.getStarted')}</Link>
    </div>
  );
}
