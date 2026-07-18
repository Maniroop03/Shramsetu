import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, Navigation, MapPin, Play, CheckCircle2 } from 'lucide-react';
import PageHeader from '../../components/PageHeader';
import { StatusBadge } from '../../components/Badges';
import { bookings } from '../../data/dummy';

export default function ActiveJob() {
  const booking = bookings[0];
  const [stage, setStage] = useState<'on-the-way' | 'working' | 'completed'>('working');
  const navigate = useNavigate();
  const complete = () => {
    setStage('completed');
    setTimeout(() => navigate('/worker/dashboard'), 1600);
  };
  return (
    <div>
      <PageHeader title="Active Job" subtitle={booking.jobTitle} action={<StatusBadge status={stage === 'completed' ? 'completed' : 'in-progress'} />} />
      {stage === 'completed' ? (
        <div className="card mx-auto max-w-md p-10 text-center">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-accent-100 text-accent-600"><CheckCircle2 className="h-8 w-8" /></span>
          <h2 className="mt-4 text-2xl font-bold text-slate-900">Work completed!</h2>
          <p className="mt-2 text-slate-600">Payment will be released shortly.</p>
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <section className="card p-6">
              <h2 className="text-base font-bold text-slate-900">Customer Details</h2>
              <div className="mt-4 flex items-center gap-4">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces" alt={booking.customerName} className="h-14 w-14 rounded-full object-cover" />
                <div>
                  <p className="text-base font-semibold text-slate-900">{booking.customerName}</p>
                  <p className="text-sm text-slate-500">{booking.jobTitle}</p>
                </div>
              </div>
              <div className="mt-4 flex items-start gap-3 rounded-xl bg-slate-50 p-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                <div>
                  <p className="text-sm font-medium text-slate-900">Address</p>
                  <p className="text-sm text-slate-600">{booking.location}, Bengaluru 560038</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <a href="#" className="btn-primary"><Phone className="h-4 w-4" /> Call Customer</a>
                <a href="#" className="btn-secondary"><Navigation className="h-4 w-4" /> Navigate</a>
              </div>
            </section>
            <section className="card p-6">
              <h2 className="text-base font-bold text-slate-900">Job Progress</h2>
              <div className="mt-5 flex items-center justify-between">
                {['On the Way', 'Working', 'Completed'].map((s, i) => {
                  const states = ['on-the-way', 'working', 'completed'];
                  const currentIdx = states.indexOf(stage);
                  const done = i <= currentIdx;
                  return (
                    <div key={s} className="flex flex-1 items-center">
                      <div className="flex flex-col items-center">
                        <span className={`grid h-10 w-10 place-items-center rounded-full ${done ? 'bg-accent-500 text-white' : 'bg-slate-200 text-slate-400'}`}>
                          {done ? <CheckCircle2 className="h-5 w-5" /> : i + 1}
                        </span>
                        <p className={`mt-1 text-xs font-medium ${done ? 'text-slate-900' : 'text-slate-400'}`}>{s}</p>
                      </div>
                      {i < 2 && <span className={`mx-2 h-0.5 flex-1 ${i < currentIdx ? 'bg-accent-500' : 'bg-slate-200'}`} />}
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
          <div>
            <section className="card p-6">
              <h2 className="text-base font-bold text-slate-900">Actions</h2>
              <p className="mt-2 text-sm text-slate-500">Update the job status as you progress.</p>
              {stage === 'on-the-way' && (
                <button onClick={() => setStage('working')} className="btn-primary mt-4 w-full"><Play className="h-4 w-4" /> Mark Work Started</button>
              )}
              {stage === 'working' && (
                <button onClick={complete} className="btn-accent mt-4 w-full"><CheckCircle2 className="h-4 w-4" /> Mark Work Completed</button>
              )}
              <div className="mt-5 border-t border-slate-100 pt-5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Earning</span>
                  <span className="text-lg font-bold text-slate-900">₹{booking.amount}</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  );
}
