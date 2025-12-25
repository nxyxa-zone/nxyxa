
import React from 'react';
// Added 'Building' to the imports to fix the error on line 92
import { Target, Eye, History, Award, Check, MapPin, Globe, Mail, Phone, Building } from 'lucide-react';
import { SCHOOL_INFO } from '../constants';

const Profile: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-20 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 text-sky-600 rounded-lg text-xs font-bold tracking-widest uppercase">
            About Us
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">Profil Sekolah</h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Membangun pendidikan vokasi yang relevan dengan perkembangan industri global.
          </p>
        </div>

        {/* History */}
        <div className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 text-sky-600 font-bold uppercase tracking-widest text-xs">
              <History className="w-4 h-4" /> Sejarah Singkat
            </div>
            <h2 className="text-3xl font-bold text-slate-900 leading-tight">Melayani Pendidikan Sejak Tahun 2009</h2>
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p>
                SMK Pancasila Seputih Mataram didirikan pada tahun 2009 dengan semangat untuk menyediakan akses pendidikan kejuruan yang bermutu tinggi bagi masyarakat di Lampung Tengah.
              </p>
              <p>
                Berawal dari cita-cita luhur untuk mencetak teknisi handal, sekolah ini terus berkembang menjadi institusi yang dipercaya oleh masyarakat dan mitra industri nasional.
              </p>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="bg-sky-100 rounded-[3rem] p-12 flex items-center justify-center animate-float">
               <img 
                 src="https://illustrations.popsy.co/sky/product-launch.svg" 
                 alt="History Illustration" 
                 className="w-full h-auto max-w-sm drop-shadow-xl" 
               />
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <div className="bg-slate-900 text-white p-12 rounded-[3rem] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 text-sky-500/20 group-hover:scale-110 transition-transform">
              <Eye className="w-40 h-40" />
            </div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-sky-600 rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-sky-600/20">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6">Visi Sekolah</h3>
              <p className="text-slate-300 text-xl italic leading-relaxed">
                “Menjadi sekolah menengah kejuruan yang unggul dalam mencetak lulusan yang profesional, berkarakter, bertaqwa, dan kompetitif di era digital.”
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-100 p-12 rounded-[3rem] shadow-sm flex flex-col hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mb-8">
              <Award className="w-8 h-8 text-sky-600" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">Misi Sekolah</h3>
            <ul className="space-y-5 flex-1">
              {[
                "Menyelenggarakan kurikulum yang selaras dengan industri (DUDI).",
                "Menumbuhkan jiwa kewirausahaan dan kreativitas siswa.",
                "Membangun infrastruktur pendidikan yang modern dan lengkap.",
                "Meningkatkan kompetensi tenaga pendidik secara berkelanjutan.",
                "Membentuk karakter siswa yang disiplin dan berbudaya lingkungan."
              ].map((misi, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <div className="mt-1 bg-sky-600 p-1 rounded-full text-white">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-slate-600 font-medium leading-relaxed">{misi}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Fact Sheet / Identity */}
        <div className="bg-white border border-slate-100 p-10 md:p-16 rounded-[4rem] shadow-sm">
          <h3 className="text-2xl font-extrabold text-slate-900 mb-12 text-center md:text-left flex items-center gap-3">
            <Building className="text-sky-600" /> Data Identitas Sekolah
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-1">
                <span className="text-xs text-slate-400 uppercase font-bold tracking-widest">Nama Resmi</span>
                <p className="text-slate-900 font-bold text-lg">{SCHOOL_INFO.name}</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs text-slate-400 uppercase font-bold tracking-widest">NPSN</span>
                <p className="text-slate-900 font-bold text-lg">{SCHOOL_INFO.npsn}</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs text-slate-400 uppercase font-bold tracking-widest">Akreditasi</span>
                <p className="text-slate-900 font-bold text-lg">B (Sangat Baik)</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs text-slate-400 uppercase font-bold tracking-widest">Status</span>
                <p className="text-slate-900 font-bold text-lg">Swasta</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 bg-sky-50 p-8 rounded-3xl">
               <div className="flex gap-4">
                 <MapPin className="text-sky-600 w-5 h-5 flex-shrink-0" />
                 <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest block">Lokasi</span>
                    <p className="text-slate-700 font-bold text-xs leading-relaxed">{SCHOOL_INFO.address}</p>
                 </div>
               </div>
               <div className="flex gap-4">
                 <Mail className="text-sky-600 w-5 h-5 flex-shrink-0" />
                 <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest block">Email</span>
                    <p className="text-slate-700 font-bold text-xs">{SCHOOL_INFO.email}</p>
                 </div>
               </div>
               <div className="flex gap-4">
                 <Phone className="text-sky-600 w-5 h-5 flex-shrink-0" />
                 <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest block">Telepon</span>
                    <p className="text-slate-700 font-bold text-xs">{SCHOOL_INFO.phone}</p>
                 </div>
               </div>
               <div className="flex gap-4">
                 <Globe className="text-sky-600 w-5 h-5 flex-shrink-0" />
                 <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest block">Website</span>
                    <p className="text-slate-700 font-bold text-xs">smkpancasilasm.sch.id</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Profile;
