
import React, { useState } from 'react';
import { LayoutGrid, Users, Settings, PlayCircle } from 'lucide-react';
import { FACILITIES, EXTRACURRICULARS } from '../constants';

const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'facilities' | 'extracurriculars'>('facilities');

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Galeri & Fasilitas</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Lihat lebih dekat sarana penunjang belajar dan kegiatan pengembangan diri siswa di SMK Pancasila.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1.5 bg-slate-100 rounded-2xl shadow-sm">
            <button
              onClick={() => setActiveTab('facilities')}
              className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-sm transition-all ${
                activeTab === 'facilities' 
                  ? 'bg-white text-sky-600 shadow-md' 
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <Settings className="w-4 h-4" /> Fasilitas Sekolah
            </button>
            <button
              onClick={() => setActiveTab('extracurriculars')}
              className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-sm transition-all ${
                activeTab === 'extracurriculars' 
                  ? 'bg-white text-sky-600 shadow-md' 
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <Users className="w-4 h-4" /> Ekstrakurikuler
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'facilities' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {FACILITIES.map((facility, i) => (
              <div key={i} className="group overflow-hidden rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={facility.image} 
                    alt={facility.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute top-4 left-4 p-3 rounded-2xl text-white shadow-lg ${facility.color || 'bg-sky-500'}`}>
                    {React.cloneElement(facility.icon as React.ReactElement, { className: 'w-5 h-5' })}
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-slate-900 font-bold text-lg">{facility.name}</h4>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {EXTRACURRICULARS.map((extra, i) => (
              <div key={i} className="group overflow-hidden rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={extra.image} 
                    alt={extra.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3 text-white">
                    <div className="p-2 bg-sky-600 rounded-lg">
                      {React.cloneElement(extra.icon as React.ReactElement, { className: 'w-5 h-5' })}
                    </div>
                    <h4 className="font-bold text-xl">{extra.name}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Video profil decoration */}
        <div className="mt-32">
          <div className="relative rounded-[3rem] overflow-hidden bg-slate-900 aspect-video group">
            <div className="absolute inset-0 bg-sky-600 opacity-20 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200" 
              alt="School Environment" 
              className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000" 
            />
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-8 text-center space-y-6">
              <div className="bg-white/20 backdrop-blur-md p-6 rounded-full group-hover:scale-110 transition-transform cursor-pointer shadow-2xl">
                <PlayCircle className="w-20 h-20 text-white fill-white/20" />
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">Video Profil Sekolah</h3>
                <p className="text-sky-100 text-lg drop-shadow-md">Kenali lebih dekat SMK Pancasila Seputih Mataram.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
