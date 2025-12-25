
import React from 'react';
import { Monitor, Bike, CheckCircle, Briefcase, GraduationCap, ArrowRight } from 'lucide-react';
import { PROGRAMS } from '../constants';
import { Link } from 'react-router-dom';

const Programs: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Program Keahlian</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Kurikulum kami dirancang khusus agar lulusan memiliki keunggulan kompetitif di dunia kerja.
          </p>
        </div>

        <div className="space-y-32">
          {PROGRAMS.map((prog, i) => (
            <div key={prog.id} className={`flex flex-col lg:flex-row gap-16 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2 relative">
                <div className="rounded-[3rem] overflow-hidden shadow-2xl h-[400px] sm:h-[500px] w-full">
                  <img 
                    src={prog.image} 
                    alt={prog.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-sky-100 rounded-[2.5rem] -z-10 hidden lg:block"></div>
              </div>
              <div className="lg:w-1/2 space-y-8">
                <div className="w-16 h-16 bg-sky-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-sky-200">
                  {prog.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                  {prog.title}
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  {prog.description} Konsentrasi ini memadukan teori fundamental dengan porsi praktek yang dominan di laboratorium berstandar industri.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                      <GraduationCap className="text-sky-600 w-5 h-5" /> Materi Utama
                    </h4>
                    <ul className="space-y-3">
                      {["Keahlian Inti Kejuruan", "Praktek Kerja Lapangan", "Sertifikasi Profesi", "Projek Kreatif"].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-slate-500">
                          <CheckCircle className="w-4 h-4 text-sky-400" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                      <Briefcase className="text-sky-600 w-5 h-5" /> Prospek Karir
                    </h4>
                    <ul className="space-y-3">
                      {["Tenaga Ahli Industri", "Wirausaha Muda", "Melanjutkan Studi", "PNS / TNI / Polri"].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-slate-500">
                          <CheckCircle className="w-4 h-4 text-sky-400" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6">
                  <Link to="/daftar" className="inline-flex items-center gap-2 px-8 py-4 bg-sky-600 text-white font-bold rounded-2xl hover:bg-sky-700 transition-all shadow-lg shadow-sky-200">
                    Daftar di Program Ini <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;
