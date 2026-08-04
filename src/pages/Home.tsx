import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, Star, MapPin, Clock, Shield, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROFILES, SERVICES, ZIGZAGS } from '../data';
import ProfileModal from '../components/ProfileModal';

// Type definitions
interface Profile {
  id?: number;
  name: string;
  image: string;
  desc: string;
  rating?: number;
  price?: string;
  age?: number;
  location?: string;
  services?: string[];
}

interface Service {
  title: string;
  desc: string;
  image: string;
}

interface ZigZag {
  title: string;
  desc: string;
  btn: string;
  images: string[];
  align: 'left' | 'right';
}

export default function Home(): React.ReactElement {
  const topProfiles: Profile[] = PROFILES.slice(0, 8);
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenProfile = (profile: Profile): void => {
    setSelectedProfile(profile);
    setIsModalOpen(true);
  };

  return (
    <>
      {/* Hero Section - Gurgaon Focus */}
      <div className="relative bg-[#0f1115] w-full min-h-[450px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/image21.png" 
            alt="Premium Escort Service in Gurgaon - Alina VIP Models Available 24/7 in Aerocity and Delhi NCR" 
            className="w-full h-full object-cover object-top opacity-30 mix-blend-luminosity" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] via-[#1a1d24]/60 to-[#0f1115]/80"></div>
        </div>

        <div className="relative z-10 w-full text-center flex flex-col items-center px-4 max-w-4xl mx-auto pt-10 pb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-12 bg-[#d4af37]"></div>
            <span className="text-[#d4af37] tracking-[0.3em] uppercase text-[10px] md:text-xs font-semibold">#1 Escort Service in Gurgaon | Alina VIP</span>
            <div className="h-[1px] w-12 bg-[#d4af37]"></div>
          </div>
          
          <h1 className="text-white text-3xl sm:text-4xl md:text-[50px] font-serif font-bold tracking-tight mb-4 leading-[1.1] drop-shadow-2xl">
            Best Escort Service in <br className="hidden sm:block" />
            <span className="text-[#d4af37] italic">Gurgaon &amp; Aerocity</span>
          </h1>
          
          <p className="text-gray-300 text-[15px] mb-6 font-light max-w-2xl leading-relaxed drop-shadow-md">
            Welcome to Gurgaon's most trusted and premium escort agency. We provide 100% verified, 
            genuine, and high-profile female companions for elite gentlemen. Available 24/7 for 
            incall and outcall services across Gurgaon, Aerocity, Cyber City, Golf Course Road, 
            Sohna Road, and all Delhi NCR locations. Experience unparalleled luxury, discretion, 
            and authentic companionship with our handpicked selection of stunning models.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6 text-gray-400 text-xs tracking-wider">
            <span className="flex items-center gap-1"><MapPin size={12} className="text-[#d4af37]" /> Gurgaon</span>
            <span className="w-px h-4 bg-gray-600"></span>
            <span className="flex items-center gap-1"><MapPin size={12} className="text-[#d4af37]" /> Aerocity</span>
            <span className="w-px h-4 bg-gray-600"></span>
            <span className="flex items-center gap-1"><Clock size={12} className="text-[#d4af37]" /> 24/7 Available</span>
            <span className="w-px h-4 bg-gray-600"></span>
            <span className="flex items-center gap-1"><Shield size={12} className="text-[#d4af37]" /> 100% Verified</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href="tel:9996265679" 
              className="bg-[#d4af37] hover:bg-[#b8972e] text-[#0f1115] px-8 py-3.5 text-[13px] font-bold tracking-[0.15em] uppercase transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.3)]" 
              aria-label="Call Alina VIP Escorts in Gurgaon - 9996265679"
            >
              <Phone size={16} className="fill-current" strokeWidth={0} /> Book Now: 9996265679
            </a>
            <Link 
              to="/escorts" 
              className="bg-transparent border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0f1115] px-8 py-3.5 text-[13px] font-bold tracking-[0.15em] uppercase transition-all flex items-center justify-center"
            >
              View Gurgaon Escorts Gallery
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 w-full">
        
        {/* Top Class Escorts Text - Gurgaon Focused */}
        <section className="py-20 md:py-28 relative" aria-labelledby="escort-service-gurgaon-intro">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-12 bg-[#d4af37]/30"></div>
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="escort-service-gurgaon-intro" className="text-[32px] md:text-[40px] font-serif text-[#0f1115] leading-[1.2] mb-8">
              Premier Escort Service in Gurgaon — <span className="italic text-[#791b29]">Exquisite Companions for Discerning Gentlemen</span>
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-6 font-light">
              Welcome to Alina VIP Escorts, the most prestigious and discreet escort agency in Gurgaon. 
              We specialize in providing high-profile, independent female companions for discerning gentlemen 
              who demand nothing but the absolute best. Our handpicked selection of stunning models is available 
              24/7 for both incall and outcall services across Gurgaon, Aerocity, Cyber City, Golf Course Road, 
              Sohna Road, and the entire Delhi NCR region.
            </p>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-6 font-light">
              From sophisticated Russian beauties and elegant European models to stunning Indian professionals, 
              corporate executives, and glamorous fashion models — each companion is meticulously verified, 
              genuinely photographed, and possesses the perfect blend of charm, intelligence, sensuality, and 
              social grace. Whether you need a refined dinner date, a passionate night of romance, an escort for 
              business travel, or a companion for high-society events, our escorts in Gurgaon deliver unforgettable 
              experiences that exceed your highest expectations.
            </p>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-6 font-light">
              With over 100+ active profiles and new companions joining our elite portfolio weekly, we offer the 
              most diverse and extensive selection of premium escorts in Gurgaon. Our models are available for 
              both short-term and extended bookings, including overnight stays, weekend getaways, and international 
              travel companionship. Your privacy and satisfaction are our top priorities — all bookings are handled 
              with absolute discretion, confidentiality, and professionalism. Our dedicated team ensures a seamless 
              booking experience from start to finish.
            </p>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-10 font-light">
              Whether you're staying at The Westin Gurgaon, The Oberoi, Grand Hyatt, JW Marriott, Leela Palace, 
              or any other luxury hotel in Aerocity or Delhi NCR, our escorts arrive promptly, impeccably dressed, 
              and ready to make your evening extraordinary. Experience the Alina VIP difference — genuine connection, 
              authentic beauty, and uncompromising quality.
            </p>
            <div className="flex justify-center gap-8 flex-wrap">
              <Link to="/escorts" className="font-medium text-[#791b29] hover:text-[#0f1115] text-[13px] uppercase tracking-widest border-b border-[#791b29] pb-1 transition-colors">Browse Gurgaon Escorts</Link>
              <Link to="/categories" className="font-medium text-[#791b29] hover:text-[#0f1115] text-[13px] uppercase tracking-widest border-b border-[#791b29] pb-1 transition-colors">View All Categories</Link>
              <Link to="/aerocity-escorts" className="font-medium text-[#791b29] hover:text-[#0f1115] text-[13px] uppercase tracking-widest border-b border-[#791b29] pb-1 transition-colors">Aerocity Escorts</Link>
              <Link to="/delhi-escorts" className="font-medium text-[#791b29] hover:text-[#0f1115] text-[13px] uppercase tracking-widest border-b border-[#791b29] pb-1 transition-colors">Delhi NCR Escorts</Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 border-t border-b border-gray-100" aria-label="Alina VIP Escorts Gurgaon Statistics">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-3xl md:text-4xl font-serif font-bold text-[#d4af37]">100+</div>
              <p className="text-gray-500 text-xs uppercase tracking-wider mt-1">Active Escorts in Gurgaon</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-serif font-bold text-[#d4af37]">24/7</div>
              <p className="text-gray-500 text-xs uppercase tracking-wider mt-1">Service Availability</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-serif font-bold text-[#d4af37]">5★</div>
              <p className="text-gray-500 text-xs uppercase tracking-wider mt-1">Verified Reviews</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-serif font-bold text-[#d4af37]">100%</div>
              <p className="text-gray-500 text-xs uppercase tracking-wider mt-1">Genuine Profiles</p>
            </div>
          </div>
        </section>

        {/* Profiles Grid */}
        <section className="py-12" aria-labelledby="featured-escorts-gurgaon">
          <div className="flex flex-col items-center mb-16">
            <span className="text-[#791b29] tracking-[0.2em] uppercase text-xs font-semibold mb-3">Top Rated Models</span>
            <h2 id="featured-escorts-gurgaon" className="text-[34px] md:text-[42px] font-serif text-center text-[#0f1115]">
              Featured VIP Escorts in Gurgaon
            </h2>
            <p className="text-gray-500 text-sm mt-3 max-w-2xl text-center">
              Handpicked companions available for incall and outcall bookings across Gurgaon, Aerocity, 
              Cyber City, Golf Course Road, Sohna Road, and all Delhi NCR locations
            </p>
            <div className="w-16 h-[2px] bg-[#d4af37] mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {topProfiles.map((profile: Profile, index: number) => (
              <div key={index} className="bg-white group flex flex-col hover:shadow-2xl transition-all duration-500 rounded-sm">
                <div 
                  className="relative aspect-[3/4] overflow-hidden cursor-pointer"
                  onClick={() => handleOpenProfile(profile)}
                >
                  <img 
                    src={profile.image} 
                    alt={`${profile.name} — Premium Escort in Gurgaon | Available in Aerocity and Delhi NCR | Alina VIP`} 
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="absolute top-3 left-3 bg-[#d4af37] text-[#0f1115] text-[9px] font-bold uppercase tracking-wider px-2 py-1">
                    Available in Gurgaon
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <button 
                      onClick={(e) => { 
                        e.stopPropagation(); 
                        handleOpenProfile(profile); 
                      }}
                      className="bg-white/90 backdrop-blur text-[#0f1115] text-[11px] font-bold uppercase tracking-widest px-4 py-2 hover:bg-[#d4af37] hover:text-white transition-colors"
                      aria-label={`View ${profile.name}'s profile - Escort in Gurgaon`}
                    >
                      View Profile
                    </button>
                    <div className="flex gap-2">
                      <a 
                        href="tel:9996265679" 
                        onClick={(e) => e.stopPropagation()} 
                        className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-[#d4af37] hover:text-white transition-colors" 
                        aria-label="Call to book this Gurgaon escort"
                      >
                        <Phone size={14} className="fill-current" strokeWidth={0} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-5 flex flex-col border border-t-0 border-gray-100">
                  <div className="flex justify-between items-center mb-1">
                    <h3 
                      className="font-serif font-bold text-[20px] text-[#0f1115] group-hover:text-[#791b29] transition-colors cursor-pointer"
                      onClick={() => handleOpenProfile(profile)}
                    >
                      {profile.name} - Gurgaon Escort
                    </h3>
                    <div className="flex items-center">
                      <Star size={14} className="fill-[#d4af37] text-[#d4af37]" strokeWidth={1} />
                      <span className="text-gray-900 text-xs font-medium ml-1">5.0</span>
                    </div>
                  </div>
                  <p className="text-gray-500 text-[13px] font-light leading-relaxed line-clamp-2">
                    {profile.desc}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className="text-[9px] text-[#791b29] uppercase tracking-wider font-semibold bg-[#791b29]/10 px-2 py-0.5 rounded">Available in Gurgaon</span>
                    <span className="text-[9px] text-[#791b29] uppercase tracking-wider font-semibold bg-[#791b29]/10 px-2 py-0.5 rounded">Aerocity</span>
                    <span className="text-[9px] text-[#791b29] uppercase tracking-wider font-semibold bg-[#791b29]/10 px-2 py-0.5 rounded">Delhi NCR</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16 mb-8">
            <Link to="/escorts" className="border border-[#0f1115] text-[#0f1115] hover:bg-[#0f1115] hover:text-[#d4af37] px-10 py-4 text-[13px] font-bold tracking-[0.15em] uppercase transition-all inline-block">
              View All Escorts in Gurgaon
            </Link>
          </div>
        </section>

        {/* Why Choose Us - Gurgaon Focus */}
        <section className="py-20 border-t border-gray-100 mt-8 relative" aria-labelledby="why-choose-alina-vip-gurgaon">
          <div className="max-w-4xl mx-auto">
            <span className="block text-center flex items-center justify-center gap-4 text-[#d4af37] tracking-[0.2em] font-semibold text-xs mb-8">
              <span className="h-[1px] w-10 bg-[#d4af37]/40"></span>
              WHY GURGAON'S ELITE CHOOSE ALINA VIP
              <span className="h-[1px] w-10 bg-[#d4af37]/40"></span>
            </span>
            <h2 id="why-choose-alina-vip-gurgaon" className="text-[32px] md:text-[38px] font-serif text-center text-[#0f1115] mb-8 leading-[1.2]">
              The Most Trusted Escort Agency in Gurgaon — <br/>Unmatched Quality, Authenticity &amp; Discretion
            </h2>
            <div className="prose max-w-none text-gray-500 font-light text-[15px] leading-relaxed mb-16 text-center space-y-6">
              <p>
                When you search for <strong>escorts in Gurgaon</strong>, you deserve more than just a pretty face — 
                you deserve an experience crafted with sophistication, genuine emotional connection, and absolute 
                discretion. At Alina VIP Escorts, we've built our reputation as Gurgaon's premier escort service by 
                delivering exactly that. Our elite portfolio features stunning models who are not just visually 
                captivating but also cultured, highly educated, well-traveled, and trained in the art of refined 
                companionship and sensual pleasure.
              </p>
              <p>
                Whether you're staying at The Westin Gurgaon, The Oberoi Gurgaon, Grand Hyatt, JW Marriott Aerocity, 
                The Leela Palace, or any other luxury property in <strong>Gurgaon</strong> or <strong>Aerocity</strong>, 
                our escorts arrive promptly and impeccably presented. We specialize in both incall and outcall services, 
                serving clients across Cyber City, Golf Course Road, Sohna Road, MG Road, Sector 29, DLF Phase 1-5, 
                and all premium locations in the Delhi NCR region. From corporate executives and business travelers 
                to celebrities and discerning gentlemen, our clients trust us for our unwavering commitment to quality, 
                privacy, and customer satisfaction.
              </p>
              <p>
                <strong>No bait-and-switch. No fake profiles. No compromises. No hidden charges.</strong> Every companion 
                featured in our gallery has been personally interviewed, background verified, and professionally photographed 
                in high resolution. We understand the importance of trust in this industry, which is why we maintain the 
                highest standards of transparency, integrity, and professionalism. Your experience with us will be nothing 
                short of extraordinary — tailored precisely to your desires and expectations.
              </p>
              <p>
                Our companions are available for various services including dinner dates, social events, business functions, 
                travel companionship, romantic encounters, and intimate overnights. With fluency in multiple languages and 
                refined social skills, they seamlessly integrate into any setting — from high-profile corporate dinners to 
                casual romantic evenings. Experience the Alina VIP difference and discover why we're Gurgaon's most requested 
                escort agency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-8 bg-gray-50/50 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-[#0f1115] flex items-center justify-center mx-auto mb-5 text-[#d4af37]">
                  <Shield size={18} className="fill-current" />
                </div>
                <h3 className="font-serif text-[18px] text-[#0f1115] font-bold mb-3">100% Verified &amp; Genuine Profiles</h3>
                <p className="text-gray-500 font-light text-[13.5px] leading-relaxed">
                  Every escort in Gurgaon is personally verified with genuine, recent photographs and video confirmation. 
                  No fake profiles or misleading images — what you see is exactly who arrives at your door. We guarantee 
                  authentic, verified companions for your complete peace of mind.
                </p>
              </div>
              <div className="text-center p-8 bg-gray-50/50 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-[#0f1115] flex items-center justify-center mx-auto mb-5 text-[#d4af37]">
                  <Award size={18} className="fill-current" />
                </div>
                <h3 className="font-serif text-[18px] text-[#0f1115] font-bold mb-3">Absolute Discretion &amp; Privacy</h3>
                <p className="text-gray-500 font-light text-[13.5px] leading-relaxed">
                  Your privacy is our highest priority. All bookings are encrypted, confidential, and handled by 
                  trained professionals. Your identity, location, billing details, and preferences remain completely 
                  secure and are never shared with any third party. Complete discretion guaranteed.
                </p>
              </div>
              <div className="text-center p-8 bg-gray-50/50 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-[#0f1115] flex items-center justify-center mx-auto mb-5 text-[#d4af37]">
                  <Clock size={18} className="fill-current" />
                </div>
                <h3 className="font-serif text-[18px] text-[#0f1115] font-bold mb-3">24/7 Availability Across NCR</h3>
                <p className="text-gray-500 font-light text-[13.5px] leading-relaxed">
                  Our elite companions are available round-the-clock for incall and outcall services across 
                  Gurgaon, Aerocity, Delhi, and all of National Capital Region. Book at any hour — our team 
                  is always ready to assist you with prompt, professional service.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center bg-[#0f1115] p-8 md:p-12 border border-[#d4af37]/20">
              <p className="text-white font-serif text-xl md:text-2xl mb-4">
                "Gurgaon's finest escort service — trusted by business leaders, celebrities, royalty, and discerning travelers worldwide."
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="tel:9996265679" className="text-[#d4af37] font-bold tracking-widest text-sm hover:text-white transition-colors flex items-center gap-2">
                  <Phone size={16} /> Book Now: 9996265679
                </a>
                <span className="text-gray-600 text-xs">|</span>
                <a href="https://wa.me/919996265679" className="text-[#d4af37] font-bold tracking-widest text-sm hover:text-white transition-colors flex items-center gap-2">
                  <MessageCircle size={16} /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid - Gurgaon Focus */}
        <section className="py-20 border-t border-gray-100 mb-10" aria-labelledby="escort-services-gurgaon">
          <div className="flex flex-col items-center mb-16">
            <span className="text-[#791b29] tracking-[0.2em] uppercase text-xs font-semibold mb-3">Premium Services</span>
            <h2 id="escort-services-gurgaon" className="text-[34px] md:text-[42px] font-serif text-center text-[#0f1115]">
              Bespoke Escort Services in Gurgaon &amp; Aerocity
            </h2>
            <p className="text-gray-500 text-sm mt-3 max-w-2xl text-center">
              Tailored experiences designed for your ultimate pleasure and satisfaction — available for incall and outcall 
              bookings across all Gurgaon and Delhi NCR locations
            </p>
            <div className="w-16 h-[2px] bg-[#d4af37] mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {SERVICES.map((srv: Service, index: number) => (
              <div key={index} className="group relative overflow-hidden">
                <div className="relative w-full h-[280px] overflow-hidden bg-[#0f1115]">
                  <img 
                    src={srv.image} 
                    alt={`${srv.title} — Premium Escort Service in Gurgaon | Available in Aerocity and Delhi NCR | Alina VIP`} 
                    className="w-full h-full object-cover opacity-50 grayscale mix-blend-luminosity transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0 group-hover:mix-blend-normal"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] via-[#0f1115]/50 to-transparent"></div>
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <h3 className="text-[#d4af37] font-serif text-[22px] font-bold mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{srv.title}</h3>
                    <p className="text-gray-300 font-light text-[13px] leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      {srv.desc} Available in Gurgaon, Aerocity, and all Delhi NCR locations.
                    </p>
                    <div className="mt-3 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                      <span className="text-[10px] text-[#d4af37] uppercase tracking-wider border border-[#d4af37]/30 px-3 py-1">Available in Gurgaon</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/services" className="border border-[#791b29] text-[#791b29] hover:bg-[#791b29] hover:text-white px-10 py-4 text-[13px] font-bold tracking-[0.15em] uppercase transition-all inline-block">
              Explore All Services in Gurgaon
            </Link>
          </div>
        </section>

        {/* Zig Zag Sections - Gurgaon Focus */}
        <div className="py-20 border-t border-gray-100">
          <div className="flex flex-col items-center mb-20">
            <h2 className="text-[34px] md:text-[42px] font-serif text-center text-[#0f1115]">
              Elevate Your Experience with Gurgaon's Finest Escorts
            </h2>
            <p className="text-gray-500 text-sm mt-3 max-w-2xl text-center">
              From intimate encounters to high-society companionship — discover the Alina VIP difference. 
              Premium escort service in Gurgaon, Aerocity, and Delhi NCR.
            </p>
            <div className="w-16 h-[2px] bg-[#d4af37] mt-6"></div>
          </div>
          
          <div className="space-y-24">
            {ZIGZAGS.map((item: ZigZag, index: number) => {
              const zigzagServicePaths: string[] = [
                '/services/24x7-available',
                '/services/in-call-out-call',
                '/services/erotic-massage',
                '/services/girlfriend-experience',
                '/services/girlfriend-experience',
                '/services/girlfriend-experience'
              ];
              const targetPath: string = zigzagServicePaths[index] || '/services';

              return (
                <div key={index} className={`flex flex-col md:flex-row gap-12 lg:gap-20 items-center ${item.align === 'right' ? 'md:flex-row-reverse' : ''}`}>
                  
                  <div className="w-full md:w-1/2 shrink-0 relative h-[450px] hidden md:block">
                    <img 
                      src={item.images[0]} 
                      className="absolute top-0 left-0 w-[65%] h-[80%] object-cover shadow-2xl z-10 filter grayscale contrast-125" 
                      alt={`${item.title} — Premium Escort Service in Gurgaon | Available in Aerocity and Delhi NCR`} 
                      loading="lazy"
                    />
                    <img 
                      src={item.images[1]} 
                      className="absolute bottom-0 right-0 w-[60%] h-[70%] object-cover shadow-2xl z-20 border-8 border-white" 
                      alt={`${item.title} — Elite Companions available in Gurgaon and Aerocity`}
                      loading="lazy" 
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[85%] border border-[#d4af37]/30 z-0"></div>
                    <div className="absolute top-4 left-4 bg-[#d4af37] text-[#0f1115] text-[9px] font-bold uppercase tracking-wider px-3 py-1 z-30 shadow-lg">
                      Available in Gurgaon
                    </div>
                  </div>
                  
                  <div className="w-full md:hidden h-[300px] mb-8 relative">
                    <img src={item.images[0]} className="w-full h-full object-cover shadow-xl filter grayscale" alt={item.title} loading="lazy" />
                    <div className="absolute inset-0 bg-[#0f1115]/10 border border-[#d4af37]/50 m-4"></div>
                    <div className="absolute top-2 left-2 bg-[#d4af37] text-[#0f1115] text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 z-10">
                      Gurgaon
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-[1px] w-8 bg-[#d4af37]"></div>
                      <span className="text-[#d4af37] tracking-[0.2em] uppercase text-[10px] font-bold">Premium Tier</span>
                      <span className="text-[10px] text-[#791b29] font-semibold bg-[#791b29]/10 px-2 py-0.5 rounded">Gurgaon &amp; Aerocity</span>
                    </div>
                    <h2 className="text-[28px] md:text-[34px] font-serif font-bold text-[#0f1115] leading-[1.2] mb-6">
                      {item.title} — Gurgaon's Elite Escort Service
                    </h2>
                    <p className="text-gray-500 font-light text-[15px] leading-relaxed mb-8">
                      {item.desc} Available for incall and outcall bookings across Gurgaon, 
                      Aerocity, Cyber City, Golf Course Road, Sohna Road, and all premium locations 
                      in Delhi NCR. Book your exclusive companion today.
                    </p>
                    <div className="flex items-center gap-6 flex-wrap">
                      {item.btn.toLowerCase().includes('call') ? (
                        <a href="tel:9996265679" className="bg-[#0f1115] hover:bg-[#1a1d24] text-[#d4af37] px-8 py-3.5 text-[12px] font-bold tracking-widest uppercase transition-colors inline-block text-center shadow-lg">
                          {item.btn} — Gurgaon
                        </a>
                      ) : (
                        <Link to="/contact" className="bg-[#0f1115] hover:bg-[#1a1d24] text-[#d4af37] px-8 py-3.5 text-[12px] font-bold tracking-widest uppercase transition-colors inline-block text-center shadow-lg">
                          {item.btn} — Gurgaon
                        </Link>
                      )}
                      <Link to={targetPath} className="font-medium text-[#791b29] text-[13px] uppercase tracking-widest hover:text-[#0f1115] transition-colors border-b border-transparent hover:border-[#0f1115] pb-1">
                        Learn More About {item.title.split(' ').slice(0, 3).join(' ')} in Gurgaon
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Sensual Getaway Banner - Gurgaon Focus */}
      <section className="bg-[#1a1d24] relative py-24 px-4 shadow-2xl relative z-10 overflow-hidden border-t-[4px] border-[#d4af37]" aria-labelledby="book-escort-gurgaon">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#d4af37] via-transparent to-transparent"></div>
        <div className="max-w-[900px] mx-auto text-center relative z-10">
          <h2 id="book-escort-gurgaon" className="text-[#d4af37] text-[32px] md:text-[44px] font-serif font-bold mb-8 leading-[1.1]">
            Book Premium Escorts in Gurgaon &amp; Aerocity — <br/>Available 24/7 Across Delhi NCR
          </h2>
          <p className="text-gray-300 font-light text-[15px] md:text-[17px] leading-relaxed mx-auto max-w-3xl mb-12">
            Discover why Alina VIP is the most trusted name for <strong>escort service in Gurgaon</strong>. 
            With a diverse portfolio of stunning, verified companions available for incall and outcall 
            bookings across Aerocity, Cyber City, Golf Course Road, Sohna Road, MG Road, Sector 29, 
            DLF Phase 1-5, and all Delhi NCR locations, we deliver unmatched luxury, discretion, and 
            genuine connection. Our elite companions are carefully selected for their beauty, intelligence, 
            charm, and ability to create unforgettable experiences. Whether you're a business traveler, 
            a local resident, or visiting from abroad, your perfect companion is just a call away. 
            Experience the Alina VIP difference — where every encounter is crafted to exceed your highest 
            expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a 
              href="https://wa.me/919996265679" 
              className="bg-[#d4af37] hover:bg-white hover:text-[#0f1115] text-[#0f1115] px-10 py-4 text-[13px] font-bold tracking-[0.15em] uppercase transition-colors flex items-center justify-center gap-2 shadow-lg" 
              aria-label="Book Gurgaon escorts on WhatsApp - Alina VIP"
            >
              <MessageCircle size={16} className="fill-current" strokeWidth={1} /> Book Gurgaon Escorts on WhatsApp
            </a>
            <a 
              href="tel:9996265679" 
              className="border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0f1115] px-10 py-4 text-[13px] font-bold tracking-[0.15em] uppercase transition-colors flex items-center justify-center gap-2"
            >
              <Phone size={16} /> Call 9996265679 — 24/7 Service
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-gray-400 text-xs tracking-wider">
            <span className="flex items-center gap-1"><MapPin size={12} className="text-[#d4af37]" /> Gurgaon</span>
            <span className="w-px h-3 bg-gray-700"></span>
            <span className="flex items-center gap-1"><MapPin size={12} className="text-[#d4af37]" /> Aerocity</span>
            <span className="w-px h-3 bg-gray-700"></span>
            <span className="flex items-center gap-1"><MapPin size={12} className="text-[#d4af37]" /> Cyber City</span>
            <span className="w-px h-3 bg-gray-700"></span>
            <span className="flex items-center gap-1"><MapPin size={12} className="text-[#d4af37]" /> Golf Course Road</span>
            <span className="w-px h-3 bg-gray-700"></span>
            <span className="flex items-center gap-1"><MapPin size={12} className="text-[#d4af37]" /> Delhi NCR</span>
          </div>
        </div>
      </section>

      <ProfileModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        profile={selectedProfile} 
      />
    </>
  );
}
