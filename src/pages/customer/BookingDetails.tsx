import { Link, useParams } from 'react-router-dom';
import { MapPin, Calendar, Users, BadgeIndianRupee, ArrowRight, Phone, MessageSquare, CheckCircle2 } from 'lucide-react';
import PageHeader from '../../components/PageHeader';
import { RatingStars, VerifiedBadge, StatusBadge } from '../../components/Badges';
import { bookings } from '../../data/dummy';

export default function BookingDetails() {
  const { id } = useParams();
  const booking = bookings.find((b) => b.id === id) ?? bookings[0];
  return (
    <div>
      <PageHeader title="Booking Details" subtitle={`Booking #${booking.id.toUpperCase()}`} action={<StatusBadge status={booking.status} />} />
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <section className="card p-6">
            <h2 className="text-base font-bold text-slate-900">Worker Information</h2>
            <div className="mt-4 flex items-center gap-4">
              <img src={booking.workerPhoto} alt={booking.workerName} className="h-16 w-16 rounded-full object-cover" />
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-slate-900">{booking.workerName}</h3>
                  <VerifiedBadge small />
                </div>
                <p className="text-sm text-slate-500">{booking.workerSkill}</p>
                <div className="mt-1 flex items-center gap-2">
                  <RatingStars rating={4.9} size={14} />
                  <span className="text-xs text-slate-500">4.9 (128)</span>
                </div>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <a href="#" className="btn-secondary flex-1"><Phone className="h-4 w-4" /> Call</a>
              <a href="#" className="btn-secondary flex-1"><MessageSquare className="h-4 w-4" /> Message</a>
            </div>
          </section>
          <section className="card p-6">
            <h2 className="text-base font-bold text-slate-900">Job Information</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <Info icon={BadgeIndianRupee} label="Job Title" value={booking.jobTitle} />
              <Info icon={Users} label="Category" value={booking.category} />
              <Info icon={MapPin} label="Location" value={booking.location} />
              <Info icon={Calendar} label="Date" value={booking.date} />
            </div>
          </section>
          <section className="card p-6">
            <h2 className="text-base font-bold text-slate-900">Status Timeline</h2>
            <ol className="mt-5 space-y-1">
              {booking.timeline.map((t, i) => (
                <li key={t.label} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className={`grid h-8 w-8 place-items-center rounded-full ${t.done ? 'bg-accent-500 text-white' : 'bg-slate-200 text-slate-400'}`}>
                      {t.done ? <CheckCircle2 className="h-4 w-4" /> : i + 1}
                    </span>
                    {i < booking.timeline.length - 1 && <span className={`my-1 w-px flex-1 ${t.done ? 'bg-accent-300' : 'bg-slate-200'}`} style={{ minHeight: 28 }} />}
                  </div>
                  <div className="pb-4 pt-1">
                    <p className={`text-sm font-semibold ${t.done ? 'text-slate-900' : 'text-slate-400'}`}>{t.label}</p>
                    {t.time && <p className="text-xs text-slate-500">{t.time}</p>}
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </div>
        <div className="space-y-6">
          <section className="card p-6">
            <h2 className="text-base font-bold text-slate-900">Customer Information</h2>
            <div className="mt-4 flex items-center gap-3">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces" alt={booking.customerName} className="h-12 w-12 rounded-full object-cover" />
              <div>
                <p className="text-sm font-semibold text-slate-900">{booking.customerName}</p>
                <p className="text-xs text-slate-500">Customer</p>
              </div>
            </div>
          </section>
          <section className="card p-6">
            <h2 className="text-base font-bold text-slate-900">Payment Summary</h2>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between text-slate-500"><span>Job amount</span><span>₹{booking.amount - 50}</span></div>
              <div className="flex justify-between text-slate-500"><span>Platform fee</span><span>₹50</span></div>
              <div className="flex justify-between border-t border-slate-100 pt-2 text-base font-bold text-slate-900"><span>Total</span><span>₹{booking.amount}</span></div>
            </div>
            <Link to="/customer/payment/b1" className="btn-primary mt-4 w-full">Proceed to Payment <ArrowRight className="h-4 w-4" /></Link>
          </section>
        </div>
      </div>
    </div>
  );
}

function Info({ icon: Icon, label, value }: { icon: typeof MapPin; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-slate-50 text-slate-500"><Icon className="h-4 w-4" /></span>
      <div>
        <p className="text-xs text-slate-500">{label}</p>
        <p className="text-sm font-medium text-slate-900">{value}</p>
      </div>
    </div>
  );
}
