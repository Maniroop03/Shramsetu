import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CreditCard, Smartphone, Banknote, CheckCircle2, ShieldCheck } from 'lucide-react';
import PageHeader from '../../components/PageHeader';
import { bookings } from '../../data/dummy';

export default function Payment() {
  const { id } = useParams();
  const booking = bookings.find((b) => b.id === id) ?? bookings[0];
  const [method, setMethod] = useState<'upi' | 'card' | 'cash'>('upi');
  const [done, setDone] = useState(false);
  const navigate = useNavigate();
  const pay = (e: React.FormEvent) => {
    e.preventDefault();
    setDone(true);
    setTimeout(() => navigate(`/customer/rating/${booking.id}`), 1600);
  };
  if (done) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="card w-full max-w-md p-10 text-center">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-accent-100 text-accent-600"><CheckCircle2 className="h-8 w-8" /></span>
          <h2 className="mt-4 text-2xl font-bold text-slate-900">Payment successful!</h2>
          <p className="mt-2 text-slate-600">₹{booking.amount} paid. Redirecting to rating...</p>
        </div>
      </div>
    );
  }
  const methods = [
    { id: 'upi' as const, label: 'UPI', icon: Smartphone, desc: 'GPay, PhonePe, Paytm' },
    { id: 'card' as const, label: 'Card', icon: CreditCard, desc: 'Credit / Debit card' },
    { id: 'cash' as const, label: 'Cash', icon: Banknote, desc: 'Pay after work' },
  ];
  return (
    <div className="max-w-3xl">
      <PageHeader title="Payment" subtitle="Review your summary and choose a payment method." />
      <div className="grid gap-6 md:grid-cols-5">
        <form onSubmit={pay} className="md:col-span-3 space-y-6">
          <section className="card p-6">
            <h2 className="text-base font-bold text-slate-900">Payment Method</h2>
            <div className="mt-4 space-y-3">
              {methods.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setMethod(m.id)}
                  className={`flex w-full items-center gap-3 rounded-xl border p-4 text-left transition-all ${
                    method === m.id ? 'border-brand-500 bg-brand-50 ring-2 ring-brand-100' : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <span className={`grid h-10 w-10 place-items-center rounded-lg ${method === m.id ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-500'}`}><m.icon className="h-5 w-5" /></span>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-slate-900">{m.label}</p>
                    <p className="text-xs text-slate-500">{m.desc}</p>
                  </div>
                  <span className={`h-4 w-4 rounded-full border-2 ${method === m.id ? 'border-brand-600 bg-brand-600' : 'border-slate-300'}`} />
                </button>
              ))}
            </div>
            {method === 'upi' && <div className="mt-4"><label className="label">UPI ID</label><input className="input" placeholder="name@upi" /></div>}
            {method === 'card' && (
              <div className="mt-4 space-y-3">
                <div><label className="label">Card Number</label><input className="input" placeholder="1234 5678 9012 3456" /></div>
                <div className="grid grid-cols-2 gap-3">
                  <div><label className="label">Expiry</label><input className="input" placeholder="MM/YY" /></div>
                  <div><label className="label">CVV</label><input className="input" placeholder="123" /></div>
                </div>
              </div>
            )}
            {method === 'cash' && <p className="mt-4 rounded-xl bg-amber-50 p-3 text-sm text-amber-700">Pay ₹{booking.amount} in cash after the work is completed.</p>}
          </section>
          <button type="submit" className="btn-primary w-full">Pay ₹{booking.amount}</button>
        </form>
        <div className="md:col-span-2">
          <section className="card sticky top-20 p-6">
            <h2 className="text-base font-bold text-slate-900">Job Summary</h2>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between"><span className="text-slate-500">Job</span><span className="text-right font-medium text-slate-900">{booking.jobTitle}</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Worker</span><span className="font-medium text-slate-900">{booking.workerName}</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Category</span><span className="font-medium text-slate-900">{booking.category}</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Date</span><span className="font-medium text-slate-900">{booking.date}</span></div>
              <div className="space-y-2 border-t border-slate-100 pt-3">
                <div className="flex justify-between text-slate-500"><span>Job amount</span><span>₹{booking.amount - 50}</span></div>
                <div className="flex justify-between text-slate-500"><span>Platform fee</span><span>₹50</span></div>
                <div className="flex justify-between border-t border-slate-100 pt-2 text-base font-bold text-slate-900"><span>Total</span><span>₹{booking.amount}</span></div>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 rounded-xl bg-accent-50 p-3 text-xs text-accent-700">
              <ShieldCheck className="h-4 w-4" /> Your payment is protected.
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
