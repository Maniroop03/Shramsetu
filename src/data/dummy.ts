import {
  Zap,
  Wrench,
  Paintbrush,
  Hammer,
  Trees,
  Truck,
  Fan,
  Sparkles,
  Construction,
  type LucideIcon,
} from 'lucide-react';

export type Role = 'customer' | 'worker' | 'admin';

export interface Service {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
  startingPrice: number;
  jobsAvailable: number;
}

export interface Worker {
  id: string;
  name: string;
  skill: string;
  skillId: string;
  rating: number;
  reviews: number;
  jobsCompleted: number;
  experience: string;
  location: string;
  verified: boolean;
  photo: string;
  quotePrice: number;
  estimatedTime: string;
  timing: string;
}

export interface Job {
  id: string;
  title: string;
  category: string;
  description: string;
  location: string;
  workersRequired: number;
  budget: string;
  budgetMin: number;
  budgetMax: number;
  date: string;
  duration: string;
  customerRating: number;
  customerName: string;
  status: 'open' | 'assigned' | 'in-progress' | 'completed' | 'cancelled';
  postedAgo: string;
}

export interface Booking {
  id: string;
  workerName: string;
  workerPhoto: string;
  workerSkill: string;
  customerName: string;
  jobTitle: string;
  category: string;
  location: string;
  amount: number;
  status: 'pending' | 'accepted' | 'in-progress' | 'completed' | 'cancelled';
  date: string;
  timeline: { label: string; done: boolean; time?: string }[];
}

export interface NotificationItem {
  id: string;
  type: 'job' | 'booking' | 'payment' | 'review' | 'system';
  title: string;
  message: string;
  time: string;
  read: boolean;
}

export interface Review {
  id: string;
  customerName: string;
  customerPhoto: string;
  rating: number;
  date: string;
  text: string;
}

export interface VerifyRequest {
  id: string;
  name: string;
  skill: string;
  photo: string;
  aadhaarNumber: string;
  location: string;
  submitted: string;
}

export const services: Service[] = [
  {
    id: 'construction',
    name: 'Construction Labour',
    icon: Construction,
    description: 'Site work, building support and material handling',
    startingPrice: 450,
    jobsAvailable: 124,
  },
  {
    id: 'loading',
    name: 'Loading & Unloading Labour',
    icon: Truck,
    description: 'Loading, unloading and material movement',
    startingPrice: 400,
    jobsAvailable: 98,
  },
  {
    id: 'shifting',
    name: 'Moving Labour',
    icon: Users,
    description: 'House shifting, packing and moving support',
    startingPrice: 500,
    jobsAvailable: 76,
  },
  {
    id: 'mason-helper',
    name: 'Mason Helper',
    icon: Hammer,
    description: 'Brickwork, plastering and construction assistance',
    startingPrice: 500,
    jobsAvailable: 54,
  },
  {
    id: 'site-helper',
    name: 'Site Helper',
    icon: Wrench,
    description: 'General construction and site assistance',
    startingPrice: 450,
    jobsAvailable: 87,
  },
  {
    id: 'agriculture',
    name: 'Agricultural Labour',
    icon: Trees,
    description: 'Farm work, harvesting and field assistance',
    startingPrice: 450,
    jobsAvailable: 142,
  },
  {
    id: 'cleaning-labour',
    name: 'Cleaning Labour',
    icon: Sparkles,
    description: 'General cleaning and site cleaning work',
    startingPrice: 400,
    jobsAvailable: 41,
  },
  {
    id: 'warehouse',
    name: 'Warehouse Labour',
    icon: Briefcase,
    description: 'Packing, sorting and warehouse assistance',
    startingPrice: 450,
    jobsAvailable: 63,
  },
  {
    id: 'event',
    name: 'Event Setup Labour',
    icon: Users,
    description: 'Event setup, arrangement and dismantling',
    startingPrice: 500,
    jobsAvailable: 92,
  },
  {
    id: 'general',
    name: 'General Labour',
    icon: Wrench,
    description: 'Daily wage support for general work',
    startingPrice: 400,
    jobsAvailable: 118,
  },
];

export const skillCategories = services.map((s) => s.name);

const photo = (seed: string) => `https://images.unsplash.com/photo-${seed}?w=400&h=400&fit=crop&crop=faces`;

export const workers: Worker[] = [
  { id: 'w1', name: 'Ramesh Kumar', skill: 'Electrician', skillId: 'electrician', rating: 4.9, reviews: 128, jobsCompleted: 214, experience: '8 years', location: 'Indiranagar, Bengaluru', verified: true, photo: photo('1638192085-fdab384d8d9d'), quotePrice: 450, estimatedTime: '2 hours', timing: '8 AM - 6 PM' },
  { id: 'w2', name: 'Suresh Patel', skill: 'Plumber', skillId: 'plumber', rating: 4.8, reviews: 96, jobsCompleted: 167, experience: '6 years', location: 'Koramangala, Bengaluru', verified: true, photo: photo('1507591064650-3e1c8b7c2c4f'), quotePrice: 380, estimatedTime: '1.5 hours', timing: '7 AM - 7 PM' },
  { id: 'w3', name: 'Imran Khan', skill: 'Painter', skillId: 'painter', rating: 4.7, reviews: 72, jobsCompleted: 134, experience: '5 years', location: 'Whitefield, Bengaluru', verified: true, photo: photo('1542909161-0cf9c6c1f4c0'), quotePrice: 520, estimatedTime: '4 hours', timing: '9 AM - 5 PM' },
  { id: 'w4', name: 'Mohan Das', skill: 'Carpenter', skillId: 'carpenter', rating: 4.9, reviews: 110, jobsCompleted: 189, experience: '10 years', location: 'Jayanagar, Bengaluru', verified: true, photo: photo('1564564321837-8f1d6c2c2c1f'), quotePrice: 610, estimatedTime: '3 hours', timing: '8 AM - 6 PM' },
  { id: 'w5', name: 'Vikram Singh', skill: 'AC Technician', skillId: 'ac', rating: 4.6, reviews: 64, jobsCompleted: 98, experience: '4 years', location: 'HSR Layout, Bengaluru', verified: false, photo: photo('1559828488-fc1d0d8c2c1f'), quotePrice: 750, estimatedTime: '2 hours', timing: '10 AM - 8 PM' },
  { id: 'w6', name: 'Anil Sharma', skill: 'House Cleaning', skillId: 'cleaning', rating: 4.8, reviews: 143, jobsCompleted: 256, experience: '3 years', location: 'BTM Layout, Bengaluru', verified: true, photo: photo('1607990281513-2c110a25bd8c'), quotePrice: 290, estimatedTime: '3 hours', timing: '7 AM - 6 PM' },
];

export const jobs: Job[] = [
  { id: 'j1', title: 'Ceiling fan installation in 2 rooms', category: 'Electrician', description: 'Need an experienced electrician to install 2 ceiling fans and replace a faulty switch. Wires and fans already purchased.', location: 'Indiranagar, Bengaluru', workersRequired: 1, budget: '₹400 - ₹700', budgetMin: 400, budgetMax: 700, date: 'Tomorrow', duration: '2 hours', customerRating: 4.6, customerName: 'Priya Sharma', status: 'open', postedAgo: '12 min ago' },
  { id: 'j2', title: 'Kitchen sink pipe leakage repair', category: 'Plumber', description: 'Persistent leakage under the kitchen sink. Need urgent fix, preferably before 5 PM today.', location: 'Koramangala, Bengaluru', workersRequired: 1, budget: '₹300 - ₹500', budgetMin: 300, budgetMax: 500, date: 'Today', duration: '1.5 hours', customerRating: 4.9, customerName: 'Arjun Mehta', status: 'open', postedAgo: '34 min ago' },
  { id: 'j3', title: 'Full 2BHK interior painting', category: 'Painter', description: 'Looking for a team to paint a 2BHK apartment — 2 coats, living room + 2 bedrooms + kitchen. Material will be provided.', location: 'Whitefield, Bengaluru', workersRequired: 2, budget: '₹8,000 - ₹12,000', budgetMin: 8000, budgetMax: 12000, date: 'This weekend', duration: '2 days', customerRating: 4.7, customerName: 'Neha Reddy', status: 'open', postedAgo: '1 hour ago' },
  { id: 'j4', title: 'Wardrobe door hinge replacement', category: 'Carpenter', description: 'Two hinges of the wardrobe door are broken. Need a carpenter to replace them with new heavy-duty hinges.', location: 'Jayanagar, Bengaluru', workersRequired: 1, budget: '₹250 - ₹450', budgetMin: 250, budgetMax: 450, date: 'Tomorrow', duration: '1 hour', customerRating: 4.5, customerName: 'Karthik Rao', status: 'open', postedAgo: '2 hours ago' },
  { id: 'j5', title: 'Split AC service + gas refill', category: 'AC Technician', description: '1.5 ton split AC needs servicing and gas refill. Cooling has reduced significantly over the past week.', location: 'HSR Layout, Bengaluru', workersRequired: 1, budget: '₹600 - ₹1,000', budgetMin: 600, budgetMax: 1000, date: 'Today', duration: '2 hours', customerRating: 4.8, customerName: 'Sneha Iyer', status: 'open', postedAgo: '3 hours ago' },
  { id: 'j6', title: 'Deep cleaning of 3BHK apartment', category: 'House Cleaning', description: 'Full deep cleaning needed before moving in. 3BHK, 3 bathrooms, kitchen and balcony. Eco-friendly supplies preferred.', location: 'BTM Layout, Bengaluru', workersRequired: 2, budget: '₹1,500 - ₹2,500', budgetMin: 1500, budgetMax: 2500, date: 'This weekend', duration: '5 hours', customerRating: 4.9, customerName: 'Rohit Gupta', status: 'open', postedAgo: '4 hours ago' },
];

export const bookings: Booking[] = [
  {
    id: 'b1', workerName: 'Ramesh Kumar', workerPhoto: photo('1638192085-fdab384d8d9d'), workerSkill: 'Electrician', customerName: 'Priya Sharma', jobTitle: 'Ceiling fan installation in 2 rooms', category: 'Electrician', location: 'Indiranagar, Bengaluru', amount: 650, status: 'in-progress', date: '17 Jul 2026, 10:30 AM',
    timeline: [
      { label: 'Requested', done: true, time: '10:30 AM' },
      { label: 'Accepted', done: true, time: '10:42 AM' },
      { label: 'On the Way', done: true, time: '11:05 AM' },
      { label: 'Working', done: true, time: '11:20 AM' },
      { label: 'Completed', done: false },
    ],
  },
  {
    id: 'b2', workerName: 'Suresh Patel', workerPhoto: photo('1507591064650-3e1c8b7c2c4f'), workerSkill: 'Plumber', customerName: 'Arjun Mehta', jobTitle: 'Kitchen sink pipe leakage repair', category: 'Plumber', location: 'Koramangala, Bengaluru', amount: 480, status: 'accepted', date: '17 Jul 2026, 2:00 PM',
    timeline: [
      { label: 'Requested', done: true, time: '1:00 PM' },
      { label: 'Accepted', done: true, time: '1:15 PM' },
      { label: 'On the Way', done: false },
      { label: 'Working', done: false },
      { label: 'Completed', done: false },
    ],
  },
  {
    id: 'b3', workerName: 'Anil Sharma', workerPhoto: photo('1607990281513-2c110a25bd8c'), workerSkill: 'House Cleaning', customerName: 'Rohit Gupta', jobTitle: 'Deep cleaning of 3BHK apartment', category: 'House Cleaning', location: 'BTM Layout, Bengaluru', amount: 2200, status: 'completed', date: '14 Jul 2026, 9:00 AM',
    timeline: [
      { label: 'Requested', done: true, time: '8:30 AM' },
      { label: 'Accepted', done: true, time: '8:45 AM' },
      { label: 'On the Way', done: true, time: '9:00 AM' },
      { label: 'Working', done: true, time: '9:15 AM' },
      { label: 'Completed', done: true, time: '2:10 PM' },
    ],
  },
  {
    id: 'b4', workerName: 'Mohan Das', workerPhoto: photo('1564564321837-8f1d6c2c2c1f'), workerSkill: 'Carpenter', customerName: 'Karthik Rao', jobTitle: 'Wardrobe door hinge replacement', category: 'Carpenter', location: 'Jayanagar, Bengaluru', amount: 420, status: 'pending', date: '18 Jul 2026, 11:00 AM',
    timeline: [
      { label: 'Requested', done: true, time: '10:00 AM' },
      { label: 'Accepted', done: false },
      { label: 'On the Way', done: false },
      { label: 'Working', done: false },
      { label: 'Completed', done: false },
    ],
  },
];

export const notifications: NotificationItem[] = [
  { id: 'n1', type: 'job', title: 'New Job Posted', message: 'A new Electrician job "Ceiling fan installation" matches your skill.', time: '5 min ago', read: false },
  { id: 'n2', type: 'booking', title: 'Worker Accepted Job', message: 'Ramesh Kumar accepted your booking for ceiling fan installation.', time: '28 min ago', read: false },
  { id: 'n3', type: 'payment', title: 'Payment Received', message: '₹2,200 received from Rohit Gupta for deep cleaning.', time: '2 hours ago', read: true },
  { id: 'n4', type: 'review', title: 'New Review', message: 'Priya Sharma rated you 5 stars for ceiling fan installation.', time: '5 hours ago', read: true },
  { id: 'n5', type: 'booking', title: 'Booking Completed', message: 'Deep cleaning of 3BHK apartment has been marked complete.', time: 'Yesterday', read: true },
  { id: 'n6', type: 'system', title: 'Aadhaar Verified', message: 'Your Aadhaar verification is complete. You can now accept jobs.', time: '2 days ago', read: true },
];

export const reviews: Review[] = [
  { id: 'r1', customerName: 'Priya Sharma', customerPhoto: photo('1494790108377-be9c29b29330'), rating: 5, date: '17 Jul 2026', text: 'Ramesh was extremely professional and finished the fan installation quickly. Highly recommended!' },
  { id: 'r2', customerName: 'Arjun Mehta', customerPhoto: photo('1500648767791-00dcc9949438'), rating: 5, date: '12 Jul 2026', text: 'Fixed the leakage in under an hour. Very polite and cleaned up after the work.' },
  { id: 'r3', customerName: 'Neha Reddy', customerPhoto: photo('1438761688036-6a537fb1c6f9'), rating: 4, date: '8 Jul 2026', text: 'Good work overall, slightly delayed but the quality of painting was excellent.' },
  { id: 'r4', customerName: 'Karthik Rao', customerPhoto: photo('1599566150163-2915d5742f9f'), rating: 5, date: '3 Jul 2026', text: 'Perfect carpentry work. Will definitely hire again for future repairs.' },
];

export const verifyRequests: VerifyRequest[] = [
  { id: 'v1', name: 'Vikram Singh', skill: 'AC Technician', photo: photo('1559828488-fc1d0d8c2c1f'), aadhaarNumber: 'XXXX-XXXX-7842', location: 'HSR Layout, Bengaluru', submitted: '2 hours ago' },
  { id: 'v2', name: 'Deepak Yadav', skill: 'Mason', photo: photo('1552053823-7c5b0c2c2c1f'), aadhaarNumber: 'XXXX-XXXX-3920', location: 'Marathahalli, Bengaluru', submitted: '5 hours ago' },
  { id: 'v3', name: 'Faisal Ahmed', skill: 'Gardener', photo: photo('1583998578c1f-2c1f-2c1f-2c1f'), aadhaarNumber: 'XXXX-XXXX-1056', location: 'Electronic City, Bengaluru', submitted: '1 day ago' },
];

export const earnings = {
  today: 1850,
  weekly: 12400,
  monthly: 48600,
  total: 312400,
  weeklyData: [2200, 1800, 2400, 1900, 2100, 1200, 800],
  monthlyData: [38, 42, 35, 48, 52, 46, 50, 44, 49, 53, 47, 49],
};

export const adminStats = {
  totalWorkers: 1284,
  verifiedWorkers: 982,
  customers: 4560,
  bookings: 3210,
  revenue: 842600,
  pendingVerifications: 3,
};
