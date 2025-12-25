
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  GraduationCap, 
  ChevronRight, 
  BookOpen, 
  Users, 
  Clock, 
  Calendar,
  Award,
  ShieldCheck,
  Building,
  Medal,
  FileText,
  Target,
  LayoutGrid,
  Map as MapIcon,
  PhoneCall
} from 'lucide-react';
import { SCHOOL_INFO, PROGRAMS, SCHEDULE, FACILITIES, EXTRACURRICULARS } from '../constants';

const Home: React.FC = () => {
  const paths = [
    { title: "Jalur Umum", desc: "Untuk seluruh lulusan SMP/MTs sederajat.", icon: <Users className="w-6 h-6" /> },
    { title: "Jalur Prestasi", desc: "Bagi siswa berprestasi akademik & non-akademik.", icon: <Medal className="w-6 h-6" /> },
    { title: "Jalur Afirmasi", desc: "Khusus pemegang KIP/KKS/PKH.", icon: <FileText className="w-6 h-6" /> },
    { title: "Beasiswa Yatim", desc: "Program beasiswa khusus yatim piatu.", icon: <Target className="w-6 h-6" /> }
  ];

  return (
    <div className="pt-16">
      {/* 1. Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-sky-50 rounded-l-[5rem] -z-10 hidden lg:block"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12 md:py-20">
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 border border-sky-100 text-sky-600 font-semibold text-xs md:text-sm shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              SPMB Tahun Ajaran {SCHOOL_INFO.year}
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-[1.15]">
              Wujudkan Impianmu <br />
              di <span className="text-sky-600">SMK Pancasila</span>
            </h1>
            <p className="text-base md:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Pusat keunggulan pendidikan vokasi yang mencetak generasi kompeten di bidang teknologi dan otomotif dengan karakter pancasilais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Link to="/daftar" className="px-8 py-4 bg-sky-600 text-white font-bold rounded-2xl hover:bg-sky-700 transition-all shadow-xl shadow-sky-200 flex items-center justify-center gap-2 group">
                Daftar Online
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/ppdb" className="px-8 py-4 bg-white text-slate-700 font-bold rounded-2xl border border-slate-200 hover:border-sky-400 hover:text-sky-600 transition-all flex items-center justify-center gap-2">
                Panduan PPDB
              </Link>
            </div>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative z-10 w-full max-w-lg animate-float">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" 
                alt="Education" 
                className="w-full h-auto rounded-[3rem] shadow-2xl" 
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-sky-400 rounded-full blur-[120px] opacity-10 z-0"></div>
          </div>
        </div>
      </section>

      {/* 2. Trust Strip / Quick Stats */}
      <section className="py-8 bg-sky-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div className="space-y-1">
              <Building className="w-6 h-6 mx-auto mb-2 opacity-80" />
              <div className="text-xl md:text-2xl font-bold">{SCHOOL_INFO.npsn}</div>
              <div className="text-[10px] md:text-xs uppercase tracking-widest font-medium opacity-70">NPSN Resmi</div>
            </div>
            <div className="space-y-1">
              <ShieldCheck className="w-6 h-6 mx-auto mb-2 opacity-80" />
              <div className="text-xl md:text-2xl font-bold">Terakreditasi</div>
              <div className="text-[10px] md:text-xs uppercase tracking-widest font-medium opacity-70">Kualitas Terjamin</div>
            </div>
            <div className="space-y-1">
              <Users className="w-6 h-6 mx-auto mb-2 opacity-80" />
              <div className="text-xl md:text-2xl font-bold">1000+</div>
              <div className="text-[10px] md:text-xs uppercase tracking-widest font-medium opacity-70">Lulusan Sukses</div>
            </div>
            <div className="space-y-1">
              <Award className="w-6 h-6 mx-auto mb-2 opacity-80" />
              <div className="text-xl md:text-2xl font-bold">15 Tahun</div>
              <div className="text-[10px] md:text-xs uppercase tracking-widest font-medium opacity-70">Berdiri Sejak 2009</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Message from Principal */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-2/5 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-white rounded-full p-4 shadow-2xl relative z-10 overflow-hidden">
                  <img 
                    src={SCHOOL_INFO.principalPhoto} 
                    alt="Kepala Sekolah" 
                    className="w-full h-full object-contain scale-110" 
                  />
                </div>
                <div className="absolute top-0 -left-4 w-20 h-20 bg-sky-200 rounded-full blur-2xl opacity-60"></div>
                <div className="absolute bottom-0 -right-4 w-32 h-32 bg-sky-400 rounded-full blur-3xl opacity-20"></div>
              </div>
            </div>
            <div className="lg:w-3/5 text-center lg:text-left">
              <div className="inline-block px-4 py-1 bg-sky-100 text-sky-700 rounded-lg text-xs font-bold mb-4">
                MESSAGE FROM THE PRINCIPAL
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight italic">
                "Tabik Pun..."
              </h2>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
                <p>
                  Selamat datang di SMK Pancasila Seputih Mataram. Kami percaya bahwa setiap anak memiliki potensi unik yang harus diasah dengan tepat. 
                </p>
                <p>
                  Melalui sistem penerimaan murid baru ini, kami mengundang generasi muda yang siap bertransformasi menjadi tenaga ahli profesional yang memiliki integritas dan karakter kuat.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-xl">{SCHOOL_INFO.headmaster}</h4>
                <p className="text-sky-600 font-medium">Kepala Sekolah</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Jalur Pendaftaran Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 text-center">Jalur Pendaftaran</h2>
            <p className="text-slate-500">Kami membuka berbagai jalur pendaftaran untuk memberikan kesempatan seluas-luasnya.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {paths.map((path, i) => (
              <div key={i} className="p-8 bg-slate-50 border border-slate-100 rounded-[2.5rem] hover:bg-white hover:shadow-xl hover:shadow-sky-100/50 transition-all text-center flex flex-col items-center group">
                <div className="text-sky-600 mb-5 p-4 bg-white rounded-2xl shadow-sm group-hover:bg-sky-600 group-hover:text-white transition-all">
                  {path.icon}
                </div>
                <h4 className="font-bold text-slate-900 mb-2 text-lg">{path.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{path.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Programs Section */}
      <section className="py-24 bg-slate-50 rounded-t-[5rem]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6 text-center md:text-left">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">Program Keahlian</h2>
              <p className="text-slate-500 max-w-md">Kurikulum berbasis industri yang mencetak lulusan siap kerja.</p>
            </div>
            <Link to="/program" className="text-sky-600 font-bold flex items-center gap-2 hover:gap-3 transition-all border-b-2 border-sky-100 pb-1">
              Lihat Detail Program <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {PROGRAMS.map(prog => (
              <div key={prog.id} className="group flex flex-col h-full bg-white rounded-[3rem] border border-slate-100 p-8 md:p-12 hover:shadow-2xl hover:shadow-sky-100 transition-all duration-500 overflow-hidden">
                <div className="w-full aspect-[16/9] mb-8 overflow-hidden rounded-[2rem] shadow-sm">
                  <img 
                    src={prog.image} 
                    alt={prog.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-sky-600 text-white rounded-2xl shadow-lg">
                    {prog.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                    {prog.title}
                  </h3>
                </div>
                <p className="text-slate-500 leading-relaxed mb-6 flex-grow">
                  {prog.description}
                </p>
                <Link to="/program" className="inline-flex items-center gap-2 font-bold text-sky-600">
                  Pelajari Selengkapnya <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Facilities Section (Icons Only) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Fasilitas Sekolah</h2>
            <p className="text-slate-500">Sarana pendukung yang lengkap untuk kenyamanan belajar siswa.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {FACILITIES.map((facility, i) => (
              <div key={i} className="group p-6 rounded-[2.5rem] bg-slate-50 border border-slate-100 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className={`w-16 h-16 rounded-2xl mb-4 flex items-center justify-center text-white ${facility.color || 'bg-sky-500'} shadow-lg group-hover:scale-110 transition-transform`}>
                  {React.cloneElement(facility.icon as React.ReactElement, { className: 'w-7 h-7' })}
                </div>
                <h4 className="text-slate-900 font-bold text-xs md:text-sm">{facility.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Extracurriculars Section */}
      <section className="py-24 bg-sky-600 rounded-[4rem] mx-4 md:mx-8 mb-12 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold">Ekstrakurikuler</h2>
            <p className="text-sky-100">Wadah pengembangan bakat, minat, dan karakter siswa di luar jam sekolah.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {EXTRACURRICULARS.map((extra, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl flex flex-col items-center text-center group hover:bg-white hover:text-sky-600 transition-all duration-300">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-sky-100 transition-colors">
                   {React.cloneElement(extra.icon as React.ReactElement, { className: 'w-6 h-6' })}
                </div>
                <h4 className="font-bold text-sm md:text-base">{extra.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Schedule Section */}
      <section className="py-24 bg-white rounded-[4rem] mx-4 md:mx-8 mb-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Agenda Pendaftaran</h2>
            <p className="text-slate-600">Alur waktu pelaksanaan PPDB SMK Pancasila untuk tahun ajaran baru.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SCHEDULE.slice(0, 6).map((item, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-sky-100 shadow-sm hover:border-sky-400 transition-colors group">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-10 h-10 bg-white text-sky-600 rounded-xl flex items-center justify-center font-bold text-lg group-hover:bg-sky-600 group-hover:text-white transition-colors border border-sky-100">
                    {i + 1}
                  </div>
                  <Calendar className="w-5 h-5 text-slate-300" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">{item.activity}</h4>
                <div className="text-sky-600 font-bold text-xs uppercase tracking-widest mb-3">
                  {item.date}
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Location / Maps Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-100 text-sky-700 rounded-lg text-xs font-bold uppercase">
                <MapIcon className="w-4 h-4" /> Lokasi Sekolah
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Kunjungi Kampus Kami</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Kami berlokasi di Lampung Tengah dengan akses yang mudah dijangkau. Silakan hubungi kami untuk informasi lebih lanjut atau kunjungi langsung untuk melihat fasilitas kami.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4 items-start bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <div className="p-3 bg-sky-50 text-sky-600 rounded-xl">
                    <Building className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Alamat Lengkap</h4>
                    <p className="text-sm text-slate-500">{SCHOOL_INFO.address}</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <div className="p-3 bg-sky-50 text-sky-600 rounded-xl">
                    <PhoneCall className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Kontak Panitia</h4>
                    <p className="text-sm text-slate-500">{SCHOOL_INFO.phone} (WhatsApp)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.812328148762!2d105.1884025!3d-4.9708785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e4085f67b555555%3A0x6295555555555555!2sSMK%20Pancasila%20Seputih%20Mataram!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="SMK Pancasila Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Action Banner */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 relative overflow-hidden flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 0 L100 0 L100 100 L0 100 Z" fill="url(#grad)" />
                <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0ea5e9" />
                    <stop offset="100%" stopColor="#0369a1" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="lg:w-2/3 space-y-6 relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white">Sudah Siap Menjadi Bagian dari Kami?</h2>
              <p className="text-slate-400 text-lg md:text-xl">
                Daftar sekarang untuk mengamankan kuota pilihanmu.
              </p>
            </div>
            <div className="lg:w-1/3 flex flex-col gap-4 w-full sm:w-auto relative z-10">
              <Link to="/daftar" className="px-10 py-5 bg-sky-500 text-white font-bold rounded-2xl shadow-xl shadow-sky-500/20 hover:bg-sky-400 transition-all text-center">
                Mulai Daftar Online
              </Link>
              <a href={`https://wa.me/${SCHOOL_INFO.phone}`} className="px-10 py-5 bg-white/10 text-white font-bold rounded-2xl border border-white/20 hover:bg-white/20 backdrop-blur transition-all text-center">
                Chat Panitia PPDB
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
