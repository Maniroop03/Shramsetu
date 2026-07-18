import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ShieldCheck, Users, Target, Heart } from 'lucide-react';

export default function About() {
  const { t } = useTranslation();
  const values = [
    { icon: ShieldCheck, title: t('about.v1Title'), desc: t('about.v1Desc') },
    { icon: Users, title: t('about.v2Title'), desc: t('about.v2Desc') },
    { icon: Heart, title: t('about.v3Title'), desc: t('about.v3Desc') },
  ];
  const stats = [
    { n: '10K+', l: t('about.s1Label') },
    { n: '50K+', l: t('about.s2Label') },
    { n: '4.8', l: t('about.s3Label') },
    { n: '25+', l: t('about.s4Label') },
  ];
  return (
    <div>
      <section className="bg-gradient-to-b from-brand-50/60 to-white py-16 lg:py-24">
        <div className="section max-w-3xl text-center">
          <span className="badge bg-brand-50 text-brand-700">{t('about.badge')}</span>
          <h1 className="mt-4 text-4xl font-extrabold text-slate-900 sm:text-5xl">{t('about.title')}</h1>
          <p className="mt-5 text-lg text-slate-600">
            {t('about.subtitle')}
          </p>
        </div>
      </section>
      <section className="section py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="card card-hover p-6">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600"><v.icon className="h-6 w-6" /></span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{v.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="badge bg-accent-50 text-accent-700"><Target className="h-3.5 w-3.5" /> {t('about.missionBadge')}</span>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">{t('about.missionTitle')}</h2>
            <p className="mt-4 text-slate-600">{t('about.missionDesc')}</p>
            <Link to="/register" className="btn-primary mt-6">{t('about.getStarted')} <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.l} className="card p-6 text-center">
                <p className="text-3xl font-extrabold text-brand-600">{s.n}</p>
                <p className="mt-1 text-sm text-slate-500">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
