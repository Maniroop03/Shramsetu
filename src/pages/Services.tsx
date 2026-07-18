import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, BadgeIndianRupee } from 'lucide-react';
import { services } from '../data/dummy';

export default function Services() {
  const { t } = useTranslation();
  return (
    <div>
      <section className="bg-gradient-to-b from-brand-50/60 to-white py-16">
        <div className="section max-w-3xl text-center">
          <span className="badge bg-accent-50 text-accent-700">{t('services.badge')}</span>
          <h1 className="mt-4 text-4xl font-extrabold text-slate-900 sm:text-5xl">{t('services.title')}</h1>
          <p className="mt-4 text-lg text-slate-600">{t('services.subtitle')}</p>
        </div>
      </section>
      <section className="section py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.id} className="card card-hover group p-6">
              <div className="flex items-start justify-between">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <s.icon className="h-7 w-7" />
                </span>
                <span className="badge bg-slate-100 text-slate-600">{s.jobsAvailable} {t('services.open')}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{s.name}</h3>
              <p className="mt-1 text-sm text-slate-600">{s.description}</p>
              <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1 text-sm font-semibold text-slate-900">
                  <BadgeIndianRupee className="h-4 w-4 text-brand-500" /> {s.startingPrice}
                  <span className="text-xs font-normal text-slate-400">{t('services.onwards')}</span>
                </span>
                <Link to="/register" className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:gap-2 transition-all">
                  {t('services.hire')} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
