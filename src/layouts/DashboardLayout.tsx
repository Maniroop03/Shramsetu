import { useState } from 'react';
import { Link, useLocation, useNavigate, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, Bell, LogOut, type LucideIcon } from 'lucide-react';
import Logo from '../components/Logo';

export interface NavItem {
  label: string;
  to: string;
  icon: LucideIcon;
}

interface DashboardLayoutProps {
  nav: NavItem[];
  role: string;
  userName: string;
  userAvatar: string;
  badge?: number;
}

export default function DashboardLayout({ nav, role, userName, userAvatar, badge = 0 }: DashboardLayoutProps) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => navigate('/login');

  const SidebarContent = (
    <div className="flex h-full flex-col">
      <div className="flex h-16 items-center border-b border-slate-100 px-5">
        <Logo />
      </div>
      <div className="px-3 py-4">
        <span className="badge bg-brand-50 text-brand-700">{role}</span>
      </div>
      <nav className="flex-1 space-y-1 px-3">
        {nav.map((item) => {
          const active = pathname === item.to || (item.to !== `/${role}/dashboard` && pathname.startsWith(item.to));
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
                active ? 'bg-brand-600 text-white shadow-soft' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <item.icon className="h-4.5 w-4.5" style={{ width: 18, height: 18 }} />
              <span className="flex-1">{t(item.label)}</span>
              {item.label === 'nav.notifications' && badge > 0 && (
                <span className="grid h-5 min-w-5 place-items-center rounded-full bg-rose-500 px-1 text-[10px] font-bold text-white">{badge}</span>
              )}
            </Link>
          );
        })}
      </nav>
      <div className="border-t border-slate-100 p-3">
        <button onClick={handleLogout} className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-rose-600 transition-colors hover:bg-rose-50">
          <LogOut className="h-4.5 w-4.5" style={{ width: 18, height: 18 }} /> {t('dashboard.logout')}
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 border-r border-slate-100 bg-white lg:block">
        {SidebarContent}
      </aside>

      {/* Mobile sidebar */}
      {open && (
        <>
          <div className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm lg:hidden" onClick={() => setOpen(false)} />
          <aside className="fixed inset-y-0 left-0 z-50 w-64 bg-white lg:hidden">
            {SidebarContent}
          </aside>
        </>
      )}

      <div className="lg:pl-64">
        {/* Top bar */}
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-100 bg-white/90 px-4 backdrop-blur-md sm:px-6">
          <button className="grid h-10 w-10 place-items-center rounded-lg text-slate-600 lg:hidden" onClick={() => setOpen(true)}>
            <Menu className="h-5 w-5" />
          </button>
          <div className="hidden lg:block" />
          <div className="flex items-center gap-3">
            <Link to={`/${role}/notifications`} className="relative grid h-10 w-10 place-items-center rounded-lg text-slate-600 transition-colors hover:bg-slate-100">
              <Bell className="h-5 w-5" />
              {badge > 0 && <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-rose-500" />}
            </Link>
            <Link to={`/${role}/profile`} className="flex items-center gap-2 rounded-xl py-1 pl-1 pr-3 transition-colors hover:bg-slate-100">
              <img src={userAvatar} alt={userName} className="h-9 w-9 rounded-full object-cover ring-2 ring-white" />
              <div className="hidden text-left sm:block">
                <p className="text-sm font-semibold leading-tight text-slate-900">{userName}</p>
                <p className="text-xs text-slate-500 capitalize">{role}</p>
              </div>
            </Link>
          </div>
        </header>

        <main className="p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
