import { Star } from 'lucide-react';
import PageHeader from '../../components/PageHeader';
import { RatingStars } from '../../components/Badges';
import { reviews } from '../../data/dummy';

export default function WorkerRatings() {
  const dist = [{ stars: 5, count: 98 }, { stars: 4, count: 22 }, { stars: 3, count: 6 }, { stars: 2, count: 1 }, { stars: 1, count: 1 }];
  const total = dist.reduce((a, b) => a + b.count, 0);
  return (
    <div className="max-w-4xl">
      <PageHeader title="Ratings & Reviews" subtitle="See what customers say about your work." />
      <div className="grid gap-6 lg:grid-cols-3">
        <section className="card p-6 text-center">
          <p className="text-5xl font-extrabold text-slate-900">4.9</p>
          <div className="mt-2 flex justify-center"><RatingStars rating={4.9} size={20} /></div>
          <p className="mt-2 text-sm text-slate-500">{total} reviews</p>
        </section>
        <section className="card p-6 lg:col-span-2">
          <h3 className="text-sm font-bold text-slate-900">Rating Distribution</h3>
          <div className="mt-4 space-y-2">
            {dist.map((d) => (
              <div key={d.stars} className="flex items-center gap-3">
                <span className="flex w-12 items-center gap-1 text-sm text-slate-600">{d.stars} <Star className="h-3 w-3 fill-amber-400 text-amber-400" /></span>
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full rounded-full bg-amber-400" style={{ width: `${(d.count / total) * 100}%` }} />
                </div>
                <span className="w-10 text-right text-xs text-slate-500">{d.count}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
      <section className="card mt-6 p-6">
        <h3 className="text-base font-bold text-slate-900">All Reviews</h3>
        <div className="mt-4 space-y-4">
          {reviews.map((r) => (
            <div key={r.id} className="flex gap-3 border-b border-slate-100 pb-4 last:border-0 last:pb-0">
              <img src={r.customerPhoto} alt={r.customerName} className="h-10 w-10 rounded-full object-cover" />
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-900">{r.customerName}</p>
                  <span className="text-xs text-slate-400">{r.date}</span>
                </div>
                <RatingStars rating={r.rating} size={12} />
                <p className="mt-1 text-sm text-slate-600">{r.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

