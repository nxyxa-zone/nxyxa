
import React from 'react';
import { ClipboardList, Calendar, Users, Briefcase, FileText, CheckCircle2, ChevronRight, Info, Target, Medal } from 'lucide-react';
import { SCHEDULE } from '../constants';
import { Link } from 'react-router-dom';

const AdmissionInfo: React.FC = () => {
  const requirements = [
    "Formulir Pendaftaran Online (Website)",
    "Fotokopi Akta Kelahiran (1 lembar)",
    "Fotokopi Kartu Keluarga (1 lembar)",
    "Pas foto ukuran 3x4 (2 lembar)",
    "Surat Keterangan Lulus / Ijazah",
    "Fotokopi KIP/KKS/PKH (Jika ada)"
  ];

  const paths = [
    { title: "Jalur Umum", desc: "Terbuka bagi seluruh lulusan SMP/MTs sederajat tanpa kriteria khusus.", icon: <Users className="w-7 h-7" /> },
    { title: "Jalur Prestasi", desc: "Calon siswa dengan prestasi akademik atau non-akademik (Juara 1-3).", icon: <Medal className="w-7 h-7" /> },
    { title: "Jalur Afirmasi", desc: "Khusus bagi pendaftar pemegang KIP/KKS/PKH (Keluarga Harapan).", icon: <FileText className="w-7 h-7" /> },
    { title: "Beasiswa Yatim", desc: "Program bantuan biaya pendidikan khusus bagi yatim piatu.", icon: <Target className="w-7 h-7" /> }
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header Section */}
        <div className="mb-20 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">Informasi PPDB 2026/2027</h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Panduan lengkap langkah-langkah pendaftaran calon peserta didik baru.
          </p>
        </div>

        {/* 1. Schedule - High Visual Impact */}
        <div className="mb-24 bg-white p-10 md:p-16 rounded-[4rem] shadow-sm border border-slate-100">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-sky-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
              <Calendar className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Jadwal Pelaksanaan</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
            {SCHEDULE.map((item, i) => (
              <div key={i} className="relative pl-8 border-l-2 border-sky-100 hover:border-sky-500 transition-colors">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-white border-4 border-sky-500 rounded-full"></div>
                <div className="text-sky-600 font-bold text-sm mb-1">{item.date}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.activity}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Requirements & Selection Paths - Side by Side on Desktop */}
        <div className="flex flex-col lg:flex-row gap-8 mb-24">
          {/* Requirements Column */}
          <div className="lg:w-1/3">
            <div className="bg-slate-900 rounded-[3rem] p-10 text-white h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 translate-x-1/4 -translate-y-1/4">
                <ClipboardList className="w-64 h-64" />
              </div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <ClipboardList className="text-sky-500" /> Syarat Berkas
              </h3>
              <ul className="space-y-6">
                {requirements.map((req, i) => (
                  <li key={i} className="flex gap-4 items-center group">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center font-bold text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-all">
                      {i + 1}
                    </div>
                    <span className="text-slate-300 font-medium">{req}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-12 p-4 bg-sky-500/20 rounded-2xl border border-sky-500/30 text-xs text-sky-100 italic">
                * Serahkan berkas asli dan fotokopi ke panitia saat melakukan verifikasi di sekolah.
              </div>
            </div>
          </div>

          {/* Paths Column */}
          <div className="lg:w-2/3">
            <div className="bg-white border border-slate-100 p-10 md:p-14 rounded-[3rem] shadow-sm h-full">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <Medal className="text-sky-600" /> Jalur Pendaftaran
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {paths.map((path, i) => (
                  <div key={i} className="p-8 bg-slate-50 border border-slate-100 rounded-3xl hover:bg-white hover:shadow-xl hover:shadow-sky-100/30 transition-all flex flex-col items-center text-center sm:items-start sm:text-left">
                    <div className="text-sky-600 mb-5 p-3 bg-white rounded-2xl shadow-sm">{path.icon}</div>
                    <h4 className="font-bold text-slate-900 mb-2 text-lg">{path.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{path.desc}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 p-8 bg-sky-50 rounded-3xl border border-sky-100 flex flex-col md:flex-row gap-6 items-center">
                <div className="p-4 bg-white rounded-2xl text-sky-600 shadow-sm">
                  <Info className="w-8 h-8" />
                </div>
                <div className="text-center md:text-left">
                  <h4 className="font-bold text-slate-900 mb-1">Butuh Bantuan Pendaftaran?</h4>
                  <p className="text-slate-500 text-sm mb-4">Tim panitia kami siap membantu Anda di sekolah setiap hari kerja.</p>
                  <Link to="/daftar" className="text-sky-600 font-bold text-sm flex items-center justify-center md:justify-start gap-2 hover:underline">
                    Daftar Sekarang Juga <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionInfo;
