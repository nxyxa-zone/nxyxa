
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Globe } from 'lucide-react';
import { SCHOOL_INFO, NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-10 pb-6 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-3">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-white p-1 rounded-md">
                <img src={SCHOOL_INFO.logo} alt="Logo" className="w-6 h-6 object-contain" />
              </div>
              <span className="font-bold text-white tracking-tight">SMK Pancasila</span>
            </Link>
            <p className="text-[11px] leading-relaxed max-w-xs opacity-70">
              Pusat keunggulan pendidikan vokasi di Seputih Mataram. Mencetak teknisi handal & berkarakter.
            </p>
            <div className="flex gap-2">
              <a href={SCHOOL_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-1.5 bg-white/5 rounded-md hover:bg-sky-600 transition-colors">
                <Instagram className="w-3.5 h-3.5 text-white" />
              </a>
              <a href={SCHOOL_INFO.socials.tiktok} target="_blank" rel="noopener noreferrer" className="p-1.5 bg-white/5 rounded-md hover:bg-sky-600 transition-colors">
                <Globe className="w-3.5 h-3.5 text-white" />
              </a>
            </div>
          </div>

          {/* Contact - Compact */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h4 className="text-white font-semibold text-xs uppercase tracking-wider">Lokasi</h4>
              <div className="flex gap-2 items-start">
                <MapPin className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
                <p className="text-[10px] leading-relaxed">{SCHOOL_INFO.address}</p>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-white font-semibold text-xs uppercase tracking-wider">Hubungi Kami</h4>
              <div className="flex flex-col gap-1.5">
                <div className="flex gap-2 items-center">
                  <Phone className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                  <span className="text-[11px]">{SCHOOL_INFO.phone}</span>
                </div>
                <div className="flex gap-2 items-center">
                  <Mail className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                  <span className="text-[11px]">{SCHOOL_INFO.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-[9px] uppercase tracking-widest opacity-40">
          <p>© {new Date().getFullYear()} SMK PANCASILA SEPUTIH MATARAM</p>
          <div className="flex gap-4">
            <span>NPSN {SCHOOL_INFO.npsn}</span>
            <span>FOUNDED 2009</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
