
import React from 'react';
import { ExternalLink, CheckSquare, Clock, AlertCircle } from 'lucide-react';
import { REGISTRATION_URL } from '../constants';

const Registration: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Formulir Pendaftaran Online</h1>
            <p className="text-slate-600 text-lg">
              Silakan isi formulir dengan teliti sesuai dengan data yang valid.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Guide */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white border border-slate-100 p-8 rounded-[2rem] shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <CheckSquare className="text-sky-600 w-5 h-5" /> Panduan Singkat
                </h3>
                <ol className="space-y-4">
                  {[
                    "Klik tombol 'Buka Formulir' di bawah.",
                    "Isi data diri, alamat, dan sekolah asal.",
                    "Pilih program keahlian (TJKT / TBSM).",
                    "Pastikan email dan WhatsApp aktif.",
                    "Kirim formulir dan tunggu konfirmasi."
                  ].map((step, i) => (
                    <li key={i} className="flex gap-4 text-sm text-slate-600 leading-relaxed">
                      <span className="font-bold text-sky-600">{i + 1}.</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-sky-50 border border-sky-100 p-8 rounded-[2rem] flex gap-4">
                <AlertCircle className="text-sky-600 w-6 h-6 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Perhatian</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Siapkan scan KK dan Akta Kelahiran sebelum mengisi agar proses lebih cepat.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Box */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-slate-100 p-10 md:p-16 rounded-[3rem] shadow-xl text-center space-y-10 border-t-8 border-t-sky-600">
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-slate-900">Mulai Pendaftaran Anda</h3>
                  <p className="text-slate-600">
                    Anda akan dialihkan ke halaman pendaftaran resmi kami di Microsoft Forms.
                  </p>
                </div>

                <div className="flex flex-col items-center gap-6">
                  <a
                    href={REGISTRATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-12 py-6 bg-sky-600 text-white font-bold rounded-2xl hover:bg-sky-700 hover:scale-105 transition-all shadow-xl shadow-sky-200 text-lg group"
                  >
                    Buka Formulir Online
                    <ExternalLink className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                  
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <Clock className="w-4 h-4" />
                    Estimasi pengisian: 10 - 15 Menit
                  </div>
                </div>

                <div className="pt-10 border-t border-slate-50">
                   <p className="text-sm text-slate-500 mb-4">Kesulitan dalam mendaftar? Hubungi kami:</p>
                   <div className="flex justify-center gap-8">
                     <div className="text-center">
                        <span className="block font-bold text-slate-900">0857-0980-8532</span>
                        <span className="text-xs text-slate-400">WhatsApp (Admin)</span>
                     </div>
                     <div className="text-center">
                        <span className="block font-bold text-slate-900">Senin - Sabtu</span>
                        <span className="text-xs text-slate-400">08:00 - 14:00 WIB</span>
                     </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
