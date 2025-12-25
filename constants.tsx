
import React from 'react';
import { 
  Monitor, 
  Settings, 
  BookOpen, 
  Users, 
  Calendar, 
  ClipboardList, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Trophy,
  Wifi,
  Wind,
  Wrench,
  Bike,
  Dumbbell,
  Music,
  Code,
  Zap,
  Coffee,
  ShieldCheck,
  Cpu,
  Smartphone,
  Flag,
  Tent,
  Activity,
  Gamepad2,
  Flame,
  Shield
} from 'lucide-react';

export const SCHOOL_INFO = {
  name: "SMK Pancasila Seputih Mataram",
  npsn: "10815125",
  address: "Jln. AMD Wirata Agung, Kampung Darma Agung, Kec. Seputih Mataram, Kab. Lampung Tengah, Lampung Kode Pos 34164",
  phone: "085709808532",
  email: "smkpcslamteng@gmail.com",
  socials: {
    instagram: "https://www.instagram.com/smkpancasila_official/",
    tiktok: "https://www.tiktok.com/@smkpancasila_official/"
  },
  headmaster: "Drs. I Nengah Sriwenten, M.Pd.",
  year: "2026/2027",
  logo: "https://iili.io/fM3puV9.png",
  principalPhoto: "https://api.dicebear.com/9.x/avataaars/svg?seed=Nengah&mood[]=happy"
};

export const NAV_ITEMS = [
  { label: "Beranda", href: "/" },
  { label: "Profil", href: "/profil" },
  { label: "Program", href: "/program" },
  { label: "Info PPDB", href: "/ppdb" },
  { label: "Galeri", href: "/galeri" },
  { label: "Daftar", href: "/daftar", primary: true }
];

export const PROGRAMS = [
  {
    id: "tjkt",
    title: "Teknik Jaringan Komputer dan Telekomunikasi (TJKT)",
    description: "Menguasai teknologi jaringan, server, fiber optik, dan keamanan siber untuk industri digital masa depan.",
    icon: <Monitor className="w-8 h-8 text-sky-600" />,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "tbsm",
    title: "Teknik dan Bisnis Sepeda Motor (TBSM)",
    description: "Ahli dalam pemeliharaan mesin, kelistrikan motor, dan manajemen bengkel profesional yang handal.",
    icon: <Bike className="w-8 h-8 text-sky-600" />,
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=800"
  }
];

export const SCHEDULE: { date: string; activity: string; description: string }[] = [
  { date: "Januari - Maret 2026", activity: "Gelombang 1", description: "Pendaftaran online & offline dibuka" },
  { date: "April - Juni 2026", activity: "Gelombang 2", description: "Pendaftaran online & offline dibuka" },
  { date: "3 – 6 Juli 2026", activity: "Verifikasi Berkas", description: "Proses verifikasi berkas pendaftaran oleh panitia." },
  { date: "6 – 11 Juli 2026", activity: "Daftar Ulang", description: "Daftar ulang dan pengumpulan berkas ke sekolah." },
  { date: "13 – 18 Juli 2025", activity: "MPLS", description: "Kegiatan Masa Pengenalan Lingkungan Sekolah." },
  { date: "20 Juli 2026", activity: "Hari Pertama", description: "Awal tahun ajaran baru 2026/2027." }
];

export const FACILITIES = [
  { 
    name: "Ruang Kelas Ber-AC", 
    icon: <Wind />, 
    color: "bg-blue-500",
    image: "https://images.unsplash.com/photo-1595853035070-59a39fe84de3?auto=format&fit=crop&q=80&w=800"
  },
  { 
    name: "Free WiFi", 
    icon: <Wifi />, 
    color: "bg-indigo-500",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
  },
  { 
    name: "Lab Komputer (TJKT)", 
    icon: <Cpu />, 
    color: "bg-cyan-500",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800"
  },
  { 
    name: "Bengkel Sepeda Motor (TBSM)", 
    icon: <Wrench />, 
    color: "bg-orange-500",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=800"
  },
  { 
    name: "Alat Praktek Lengkap", 
    icon: <Settings />, 
    color: "bg-slate-500",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800"
  },
  { 
    name: "Lapangan Olahraga", 
    icon: <Activity />, 
    color: "bg-green-500",
    image: "https://images.unsplash.com/photo-1544919982-b61976f0ba43?auto=format&fit=crop&q=80&w=800"
  },
  { 
    name: "Ruang Ibadah", 
    icon: <ShieldCheck />, 
    color: "bg-emerald-500",
    image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=800"
  },
  { 
    name: "Toilet Bersih", 
    icon: <Coffee />, 
    color: "bg-pink-500",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
  },
  { 
    name: "Tempat Parkir", 
    icon: <Smartphone />, 
    color: "bg-amber-500",
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=800"
  }
];

export const EXTRACURRICULARS = [
  { name: "OSIS", icon: <Users />, image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800" },
  { name: "Paskibra", icon: <Flag />, image: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&q=80&w=800" },
  { name: "Pramuka", icon: <Tent />, image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=800" },
  { name: "Futsal", icon: <Activity />, image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800" },
  { name: "Voli", icon: <Dumbbell />, image: "https://images.unsplash.com/photo-1592656094267-764a45160876?auto=format&fit=crop&q=80&w=800" },
  { name: "Coding & Robotika", icon: <Code />, image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800" },
  { name: "Welding (Pengelasan)", icon: <Flame />, image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800" },
  { name: "Pencak Silat", icon: <Shield />, image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80&w=800" },
  { name: "Tari", icon: <Music />, image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=800" },
  { name: "E-Sport", icon: <Gamepad2 />, image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800" }
];

export const REGISTRATION_URL = "https://forms.office.com/r/LffCnqnaz4";
