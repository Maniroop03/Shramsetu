import PageHeader from '../../components/PageHeader';
import { StatusBadge } from '../../components/Badges';
import { bookings } from '../../data/dummy';

const filters = ['All', 'Pending', 'Accepted', 'In Progress', 'Completed', 'Cancelled'];

export default function AdminBookings() {
  return (
    <div>
      <PageHeader title="All Bookings" subtitle="Monitor every booking on the platform." />
      <div className="mb-4 flex flex-wrap gap-2">
        {filters.map((f, i) => (
          <button key={f} className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${i === 0 ? 'bg-brand-600 text-white' : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50'}`}>{f}</button>
        ))}
      </div>
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-slate-100 bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-5 py-3 font-semibold">Booking</th>
                <th className="px-5 py-3 font-semibold">Worker</th>
                <th className="px-5 py-3 font-semibold">Customer</th>
                <th className="px-5 py-3 font-semibold">Amount</th>
                <th className="px-5 py-3 font-semibold">Date</th>
                <th className="px-5 py-3 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {bookings.concat(bookings).map((b, i) => (
                <tr key={i} className="hover:bg-slate-50">
                  <td className="px-5 py-3">
                    <p className="font-medium text-slate-900">{b.jobTitle}</p>
                    <p className="text-xs text-slate-400">#{b.id.toUpperCase()}</p>
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-2">
                      <img src={b.workerPhoto} alt={b.workerName} className="h-8 w-8 rounded-full object-cover" />
                      <span className="text-slate-700">{b.workerName}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-slate-700">{b.customerName}</td>
                  <td className="px-5 py-3 font-semibold text-slate-900">₹{b.amount}</td>
                  <td className="px-5 py-3 text-slate-500">{b.date}</td>
                  <td className="px-5 py-3"><StatusBadge status={b.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
