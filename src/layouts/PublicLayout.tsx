import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, LogIn, UserPlus, Globe, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Logo from '../components/Logo';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  const navLinks = [
    { label: t('nav.home'), to: '/' },
    { label: t('nav.about'), to: '/about' },
    { label: t('nav.services'), to: '/services' },
    { label: t('nav.howItWorks'), to: '/how-it-works' },
    { label: t('nav.contact'), to: '/contact' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const changeLang = (lng: string) => {
    i18n.changeLanguage(lng);
    setLangOpen(false);
  };

  const currentLangLabel = t(`language.${i18n.language?.split('-')[0] || 'en'}`);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className={`sticky top-0 z-50 transition-all ${scrolled ? 'bg-white/90 shadow-soft backdrop-blur-md' : 'bg-white/0'}`}>
        <div className="section flex h-16 items-center justify-between">
          <Logo />
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === l.to ? 'text-brand-600' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-2 md:flex">
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
              >
                <Globe className="h-4 w-4" />
                {currentLangLabel}
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 w-40 overflow-hidden rounded-xl bg-white py-1 shadow-card ring-1 ring-slate-100">
                  {[
                    { code: 'en', label: t('language.en') },
                    { code: 'hi', label: t('language.hi') },
                    { code: 'te', label: t('language.te') },
                  ].map((l) => (
                    <button
                      key={l.code}
                      onClick={() => changeLang(l.code)}
                      className={`flex w-full items-center justify-between px-4 py-2 text-sm transition-colors hover:bg-slate-50 ${
                        (i18n.language?.split('-')[0] || 'en') === l.code ? 'font-semibold text-brand-600' : 'text-slate-700'
                      }`}
                    >
                      {l.label}
                      {(i18n.language?.split('-')[0] || 'en') === l.code && <Check className="h-3.5 w-3.5" />}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <Link to="/login" className="btn-ghost">
              <LogIn className="h-4 w-4" /> {t('nav.login')}
            </Link>
            <Link to="/register" className="btn-primary">
              <UserPlus className="h-4 w-4" /> {t('nav.register')}
            </Link>
          </div>
          <button className="grid h-10 w-10 place-items-center rounded-lg text-slate-700 md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <div className="border-t border-slate-100 bg-white md:hidden">
            <div className="section flex flex-col gap-1 py-4">
              {navLinks.map((l) => (
                <Link key={l.to} to={l.to} className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50">
                  {l.label}
                </Link>
              ))}
              <div className="mt-2 flex gap-2">
                <Link to="/login" className="btn-secondary flex-1">{t('nav.login')}</Link>
                <Link to="/register" className="btn-primary flex-1">{t('nav.register')}</Link>
              </div>
              <div className="mt-2 flex items-center gap-2 px-3">
                <Globe className="h-4 w-4 text-slate-500" />
                {[
                  { code: 'en', label: t('language.en') },
                  { code: 'hi', label: t('language.hi') },
                  { code: 'te', label: t('language.te') },
                ].map((l) => (
                  <button
                    key={l.code}
                    onClick={() => changeLang(l.code)}
                    className={`rounded-lg px-2.5 py-1.5 text-sm transition-colors ${
                      (i18n.language?.split('-')[0] || 'en') === l.code ? 'bg-brand-50 font-semibold text-brand-600' : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="mt-20 border-t border-slate-100 bg-slate-50">
      <div className="section py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-3 text-sm leading-relaxed text-slate-500">
              {t('footer.tagline')}
            </p>
            <div className="mt-4 flex gap-3">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((s) => (
                <a key={s} href="#" aria-label={s} className="grid h-9 w-9 place-items-center rounded-lg bg-white text-slate-500 ring-1 ring-slate-200 transition-colors hover:text-brand-600 hover:ring-brand-200">
                  <SocialIcon name={s} />
                </a>
              ))}
            </div>
          </div>
          <FooterCol title={t('footer.company')} links={[
            [t('nav.about'), '/about'],
            [t('nav.contact'), '/contact'],
            [t('nav.howItWorks'), '/how-it-works'],
            [t('nav.services'), '/services'],
          ]} />
          <FooterCol title={t('footer.legal')} links={[
            [t('footer.privacyPolicy'), '/privacy'],
            [t('footer.terms'), '/terms'],
            [t('footer.refundPolicy'), '/terms'],
            [t('footer.safety'), '/about'],
          ]} />
          <FooterCol title={t('footer.account')} links={[
            [t('nav.login'), '/login'],
            [t('nav.register'), '/register'],
            [t('footer.customerDashboard'), '/customer/dashboard'],
            [t('footer.workerDashboard'), '/worker/dashboard'],
          ]} />
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row">
          <p>{t('footer.rights')}</p>
          <p>{t('footer.madeIn')}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-slate-900">{title}</h4>
      <ul className="mt-3 space-y-2">
        {links.map(([label, to]) => (
          <li key={label}>
            <Link to={to} className="text-sm text-slate-500 transition-colors hover:text-brand-600">{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ name }: { name: string }) {
  const paths: Record<string, string> = {
    facebook: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
    twitter: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
    instagram: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
    linkedin: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  };
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d={paths[name]} /></svg>
  );
}
