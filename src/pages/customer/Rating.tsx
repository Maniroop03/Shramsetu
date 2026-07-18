import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Star, CheckCircle2 } from 'lucide-react';
import PageHeader from '../../components/PageHeader';
import { bookings } from '../../data/dummy';

export default function Rating() {
  const { id } = useParams();
  const booking = bookings.find((b) => b.id === id) ?? bookings[0];
  const [rating, setRating] = useState(5);
  const [hover, setHover] = useState(0);
  const [done, setDone] = useState(false);
  const navigate = useNavigate();
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setDone(true);
    setTimeout(() => navigate('/customer/dashboard'), 1600);
  };
  if (done) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="card w-full max-w-md p-10 text-center">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-accent-100 text-accent-600"><CheckCircle2 className="h-8 w-8" /></span>
          <h2 className="mt-4 text-2xl font-bold text-slate-900">Thanks for your review!</h2>
          <p className="mt-2 text-slate-600">Your feedback helps the community.</p>
        </div>
      </div>
    );
  }
  return (
    <div className="max-w-2xl">
      <PageHeader title="Rate your worker" subtitle="Help others hire with confidence." />
      <form onSubmit={submit} className="card p-6 lg:p-8">
        <div className="flex flex-col items-center text-center">
          <img src={booking.workerPhoto} alt={booking.workerName} className="h-20 w-20 rounded-full object-cover" />
          <h2 className="mt-4 text-lg font-bold text-slate-900">{booking.workerName}</h2>
          <p className="text-sm text-slate-500">{booking.workerSkill} · {booking.jobTitle}</p>
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <button
              key={i}
              type="button"
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(0)}
              onClick={() => setRating(i)}
              className="transition-transform hover:scale-110"
            >
              <Star className={`h-10 w-10 ${(hover || rating) >= i ? 'fill-amber-400 text-amber-400' : 'fill-slate-200 text-slate-200'}`} />
            </button>
          ))}
        </div>
        <p className="mt-2 text-center text-sm font-medium text-slate-600">
          {['', 'Poor', 'Fair', 'Good', 'Very Good', 'Excellent'][hover || rating]}
        </p>
        <div className="mt-6">
          <label className="label">Write a review</label>
          <textarea rows={5} className="input" placeholder="Share your experience working with this worker..." required />
        </div>
        <button type="submit" className="btn-primary mt-6 w-full">Submit Review</button>
      </form>
    </div>
  );
}
