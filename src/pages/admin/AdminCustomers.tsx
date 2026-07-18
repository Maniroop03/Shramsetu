import { Search, MapPin, Star, Mail, Phone } from 'lucide-react';
import PageHeader from '../../components/PageHeader';

const customers = [
  { name: 'Priya Sharma', email: 'priya@laborease.in', phone: '+91 98765 43210', location: 'Indiranagar, Bengaluru', jobs: 8, photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces' },
  { name: 'Arjun Mehta', email: 'arjun@laborease.in', phone: '+91 98111 22334', location: 'Koramangala, Bengaluru', jobs: 5, photo: 'https://images.unsplash.com/photo-1500648767791-00dcc9949438?w=80&h=80&fit=crop&crop=faces' },
  { name: 'Neha Reddy', email: 'neha@laborease.in', phone: '+91 99000 11223', location: 'Whitefield, Bengaluru', jobs: 12, photo: 'https://images.unsplash.com/photo-1438761688036-6a537fb1c6f9?w=80&h=80&fit=crop&crop=faces' },
  { name: 'Karthik Rao', email: 'karthik@laborease.in', phone: '+91 98222 33445', location: 'Jayanagar, Bengaluru', jobs: 3, photo: 'https://images.unsplash.com/photo-1599566150163-2915d0c2f9f9?w=80&h=80&fit=crop&crop=faces' },
  { name: 'Rohit Gupta', email: 'rohit@laborease.in', phone: '+91 98333 44556', location: 'BTM Layout, Bengaluru', jobs: 7, photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces' },
  { name: 'Sneha Iyer', email: 'sneha@laborease.in', phone: '+91 98444 55667', location: 'HSR Layout, Bengaluru', jobs: 4, photo: 'https://images.unsplash.com/photo-1534528741775-5e9bbb1f8c2f?w=80&h=80&fit=crop&crop=faces' },
];

export default function AdminCustomers() {
  return (
    <div>
      <PageHeader title="Customers" subtitle="Manage all customers on the platform." />
      <div className="mb-5 relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input className="input pl-10" placeholder="Search customers..." />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {customers.map((c) => (
          <div key={c.email} className="card card-hover p-5">
            <div className="flex items-center gap-3">
              <img src={c.photo} alt={c.name} className="h-12 w-12 rounded-full object-cover" />
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-slate-900">{c.name}</p>
                <p className="flex items-center gap-1 text-xs text-slate-500"><MapPin className="h-3 w-3" /> {c.location}</p>
              </div>
            </div>
            <div className="mt-4 space-y-1.5 text-xs text-slate-500">
              <p className="flex items-center gap-2"><Mail className="h-3.5 w-3.5" /> {c.email}</p>
              <p className="flex items-center gap-2"><Phone className="h-3.5 w-3.5" /> {c.phone}</p>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
              <span className="text-xs text-slate-500">Jobs posted</span>
              <span className="flex items-center gap-1 text-sm font-semibold text-slate-900"><Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" /> {c.jobs}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
