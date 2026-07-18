import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  const { t } = useTranslation();
  const [sent, setSent] = useState(false);
  const contactInfo = [
    { icon: Mail, title: t('contact.email'), value: 'hello@laborease.in' },
    { icon: Phone, title: t('contact.phone'), value: '+91 80 4567 8900' },
    { icon: MapPin, title: t('contact.office'), value: 'Bengaluru, Karnataka, India' },
  ];
  return (
    <div>
      <section className="bg-gradient-to-b from-brand-50/60 to-white py-16">
        <div className="section max-w-3xl text-center">
          <span className="badge bg-brand-50 text-brand-700">{t('contact.badge')}</span>
          <h1 className="mt-4 text-4xl font-extrabold text-slate-900 sm:text-5xl">{t('contact.title')}</h1>
          <p className="mt-4 text-lg text-slate-600">{t('contact.subtitle')}</p>
        </div>
      </section>
      <section className="section py-16">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-1">
            {contactInfo.map((c) => (
              <div key={c.title} className="card p-5">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600"><c.icon className="h-5 w-5" /></span>
                <h3 className="mt-3 text-base font-semibold text-slate-900">{c.title}</h3>
                <p className="text-sm text-slate-600">{c.value}</p>
              </div>
            ))}
          </div>
          <div className="card p-6 lg:p-8 lg:col-span-2">
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-accent-100 text-accent-600"><MessageSquare className="h-8 w-8" /></span>
                <h3 className="mt-4 text-xl font-bold text-slate-900">{t('contact.sent')}</h3>
                <p className="mt-2 text-slate-600">{t('contact.sentDesc')}</p>
                <button onClick={() => setSent(false)} className="btn-secondary mt-6">{t('contact.sendAnother')}</button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div><label className="label">{t('contact.name')}</label><input className="input" placeholder={t('contact.namePlaceholder')} required /></div>
                  <div><label className="label">{t('contact.emailLabel')}</label><input type="email" className="input" placeholder="you@example.com" required /></div>
                </div>
                <div><label className="label">{t('contact.subject')}</label><input className="input" placeholder={t('contact.subjectPlaceholder')} required /></div>
                <div><label className="label">{t('contact.message')}</label><textarea rows={5} className="input" placeholder={t('contact.messagePlaceholder')} required /></div>
                <button type="submit" className="btn-primary w-full sm:w-auto"><Send className="h-4 w-4" /> {t('contact.send')}</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
