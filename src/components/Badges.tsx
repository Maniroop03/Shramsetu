import { Star, ShieldCheck } from 'lucide-react';

export function RatingStars({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <span className="inline-flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          style={{ width: size, height: size }}
          className={i <= Math.round(rating) ? 'fill-amber-400 text-amber-400' : 'fill-slate-200 text-slate-200'}
        />
      ))}
    </span>
  );
}

export function VerifiedBadge({ small = false }: { small?: boolean }) {
  return (
    <span className={`badge bg-accent-100 text-accent-700 ${small ? 'text-[10px]' : ''}`}>
      <ShieldCheck className="h-3.5 w-3.5" /> Verified
    </span>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    open: 'bg-blue-100 text-blue-700',
    pending: 'bg-amber-100 text-amber-700',
    accepted: 'bg-indigo-100 text-indigo-700',
    assigned: 'bg-indigo-100 text-indigo-700',
    'in-progress': 'bg-brand-100 text-brand-700',
    completed: 'bg-accent-100 text-accent-700',
    cancelled: 'bg-rose-100 text-rose-700',
  };
  const label = status.replace('-', ' ');
  return (
    <span className={`badge capitalize ${map[status] ?? 'bg-slate-100 text-slate-700'}`}>
      {label}
    </span>
  );
}
