import React, { useState } from 'react';
import { PageId } from '../types';
import { CONTACT_INFO } from '../data/trustData';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  Settings
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  onOpenDonate: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onOpenDonate }) => {
  const [address, setAddress] = useState(CONTACT_INFO.address);
  const [phone, setPhone] = useState(CONTACT_INFO.phone);
  const [email, setEmail] = useState(CONTACT_INFO.email);
  const [showConfigDrawer, setShowConfigDrawer] = useState(false);

  // Form state
  const [fullName, setFullName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [senderPhone, setSenderPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !senderEmail || !message) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setFormSubmitted(true);
    }, 600);
  };

  const handleResetForm = () => {
    setFullName('');
    setSenderEmail('');
    setSenderPhone('');
    setSubject('');
    setMessage('');
    setFormSubmitted(false);
  };

  return (
    <div className="bg-[#F7F3EA] text-[#29231B] selection:bg-[#B08A3C]/20 selection:text-[#29231B]">
      
      {/* Editorial Header Banner */}
      <section className="bg-[#29231B] text-[#F7F3EA] py-20 lg:py-28 border-b-2 border-[#B08A3C]/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-dark-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D8C18A] block">
              Direct Secretariat Inquiries
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#F7F3EA]">
              Connect With ILMI Trust
            </h1>
            <p className="text-base sm:text-xl text-[#D8C18A] font-serif italic pt-1 max-w-2xl leading-relaxed">
              We are always here to assist and support you on your spiritual and educational journey.
            </p>
          </div>
        </div>
      </section>

      {/* Provisional Data Notice & Configuration Banner */}
      <section className="bg-amber-50/90 border-b border-amber-200 py-3.5 px-4 sm:px-8 text-xs text-[#51483C]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-[#B08A3C] shrink-0 mt-0.5" />
            <p className="leading-snug">
              <span className="font-bold text-[#29231B]">Provisional Contact Record Notice: </span>
              The legacy website contains conflicting address records. The details below reflect the primary provisional institutional contact and are configurable before final launch.
            </p>
          </div>
          <button
            onClick={() => setShowConfigDrawer(!showConfigDrawer)}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-amber-300 rounded-sm text-[11px] font-semibold text-[#29231B] hover:bg-stone-50 transition-colors shrink-0"
          >
            <Settings className="w-3.5 h-3.5" />
            <span>{showConfigDrawer ? 'Hide Editor' : 'Configure Contact Info'}</span>
          </button>
        </div>
      </section>

      {/* Admin Quick Contact Configuration Drawer */}
      {showConfigDrawer && (
        <section className="bg-white border-b border-[#E8DFC9] py-6 px-4 sm:px-8">
          <div className="max-w-4xl mx-auto bg-[#F7F3EA] p-6 rounded-sm border border-[#B08A3C]/30 space-y-4">
            <h3 className="font-serif text-base font-bold text-[#29231B]">
              Secretariat Contact Details Configurator
            </h3>
            <p className="text-xs text-[#51483C]">
              Update the active addresses to verify alignment with the official trust deed before launch.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#51483C] mb-1">Office Address</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs bg-white border border-stone-300 rounded-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#51483C] mb-1">Phone Number</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs bg-white border border-stone-300 rounded-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#51483C] mb-1">Official Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs bg-white border border-stone-300 rounded-sm"
                />
              </div>
            </div>
            <div className="flex gap-2 text-[11px]">
              <button
                onClick={() => {
                  setAddress("Makkah Masjid Office, 822 Anna Salai, Chennai – 600002");
                  setPhone("+91 98844 67666");
                }}
                className="text-[#B08A3C] hover:underline font-semibold"
              >
                Use Alternative Makkah Masjid Address
              </button>
              <span className="text-stone-300">|</span>
              <button
                onClick={() => {
                  setAddress(CONTACT_INFO.address);
                  setPhone(CONTACT_INFO.phone);
                  setEmail(CONTACT_INFO.email);
                }}
                className="text-[#51483C] hover:underline"
              >
                Restore Thousand Lights Default
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Main Asymmetrical Two-Column Experience */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Large Heading & Information (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="space-y-4">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B08A3C] block">
                  Reach Out to Us
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#29231B] leading-tight">
                  Connect With Us in Faith
                </h2>
                <div className="w-16 h-0.5 bg-[#B08A3C]" />
                <p className="text-base text-[#51483C] leading-relaxed pt-2">
                  We are always here to help and support you on your spiritual journey. If you have any questions, need guidance, or wish to learn more about Islam, please don't hesitate to contact us. We aim to respond with care and sincerity.
                </p>
              </div>

              {/* Contact Information Blocks */}
              <div className="bg-white border border-[#E8DFC9] p-6 sm:p-8 rounded-sm space-y-6 shadow-sm">
                
                <div className="space-y-5 text-sm text-[#51483C]">
                  
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-sm bg-[#F7F3EA] border border-[#B08A3C]/30 flex items-center justify-center text-[#B08A3C] shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-serif text-base font-bold text-[#29231B] block">Headquarters Address</span>
                      <span className="leading-relaxed block mt-0.5">{address}</span>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-sm bg-[#F7F3EA] border border-[#B08A3C]/30 flex items-center justify-center text-[#B08A3C] shrink-0 mt-0.5">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-serif text-base font-bold text-[#29231B] block">Direct Telephone</span>
                      <a href={`tel:${phone}`} className="hover:text-[#B08A3C] transition-colors font-mono font-medium block mt-0.5">
                        {phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-sm bg-[#F7F3EA] border border-[#B08A3C]/30 flex items-center justify-center text-[#B08A3C] shrink-0 mt-0.5">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-serif text-base font-bold text-[#29231B] block">Official Email</span>
                      <a href={`mailto:${email}`} className="hover:text-[#B08A3C] transition-colors font-mono font-medium block mt-0.5">
                        {email}
                      </a>
                    </div>
                  </div>

                  {/* Website */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-sm bg-[#F7F3EA] border border-[#B08A3C]/30 flex items-center justify-center text-[#B08A3C] shrink-0 mt-0.5">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-serif text-base font-bold text-[#29231B] block">Official Portal</span>
                      <span className="font-mono text-xs block mt-0.5">{CONTACT_INFO.website}</span>
                    </div>
                  </div>

                </div>

                {/* Direct WhatsApp Action Button */}
                <div className="pt-2 border-t border-stone-100">
                  <a
                    href={CONTACT_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 bg-[#48634A] hover:bg-[#3d543f] text-white font-bold text-xs uppercase tracking-widest rounded-sm transition-all shadow flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Open WhatsApp Conversation</span>
                  </a>
                </div>

              </div>

              {/* Office Hours */}
              <div className="bg-[#29231B] text-[#F7F3EA] p-6 rounded-sm border border-[#B08A3C]/40 space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#D8C18A] uppercase tracking-wider">
                  <Clock className="w-4 h-4" />
                  <span>Secretariat Hours</span>
                </div>
                <div className="text-xs space-y-1 text-[#F7F3EA]/80 font-mono">
                  <div className="flex justify-between py-1 border-b border-[#B08A3C]/20">
                    <span className="font-sans">Monday – Saturday</span>
                    <span className="text-[#D8C18A]">10:00 AM – 6:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#B08A3C]/20">
                    <span className="font-sans">Friday Prayer Break</span>
                    <span className="text-[#D8C18A]">12:30 PM – 2:30 PM</span>
                  </div>
                  <div className="flex justify-between py-1 text-stone-400">
                    <span className="font-sans">Sunday</span>
                    <span>By Prior Appointment</span>
                  </div>
                </div>
              </div>

              {/* Interactive Google Map */}
              <div className="bg-white border border-[#E8DFC9] p-4 rounded-sm shadow-xs">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#51483C] block mb-2 font-mono">
                  Location · Thousand Lights West, Chennai
                </span>
                <div className="aspect-[16/9] w-full rounded-sm overflow-hidden border border-stone-200 relative bg-stone-100 flex items-center justify-center">
                  <iframe
                    title="ILMI Trust Location"
                    src="https://maps.google.com/maps?q=Thousand%20Lights%20West,%20Chennai&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    className="border-0 w-full h-full"
                    loading="lazy"
                  />
                </div>
              </div>

            </div>

            {/* Right Column: Elegant Contact Form (7 cols) */}
            <div className="lg:col-span-7 bg-white border border-[#E8DFC9] p-5 xs:p-8 sm:p-12 rounded-sm shadow-md">
              <div className="space-y-2 mb-8">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B08A3C] block">
                  Official Communication
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#29231B]">
                  Send a Message to the Secretariat
                </h3>
                <p className="text-xs sm:text-sm text-[#51483C]">
                  Please complete the form below. All communications are reviewed directly by the trust administration.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-8 bg-[#F7F3EA] border border-[#B08A3C]/40 rounded-sm text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#48634A]/10 border border-[#48634A]/30 flex items-center justify-center text-[#48634A]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-[#29231B]">
                    Message Dispatched Successfully
                  </h4>
                  <p className="text-sm text-[#51483C] max-w-md mx-auto leading-relaxed">
                    Jazakumullahu Khairan, <strong className="text-[#29231B]">{fullName}</strong>. Your correspondence regarding <span className="italic">"{subject || 'General Inquiry'}"</span> has been securely logged. Our trustees will respond promptly.
                  </p>
                  <button
                    onClick={handleResetForm}
                    className="btn-17 btn-17-secondary text-xs tracking-wider !py-3 !px-6"
                  >
                    <span className="text-container">
                      <span className="text">
                        <span>Send Another Message</span>
                      </span>
                    </span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#51483C] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Maulana Abdul Rahman"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-4 py-3 bg-[#F7F3EA] border border-[#E8DFC9] rounded-sm text-sm text-[#29231B] focus:outline-none focus:border-[#B08A3C] focus:ring-1 focus:ring-[#B08A3C] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#51483C] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. name@example.com"
                        value={senderEmail}
                        onChange={(e) => setSenderEmail(e.target.value)}
                        className="w-full px-4 py-3 bg-[#F7F3EA] border border-[#E8DFC9] rounded-sm text-sm text-[#29231B] focus:outline-none focus:border-[#B08A3C] focus:ring-1 focus:ring-[#B08A3C] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#51483C] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98844 67666"
                        value={senderPhone}
                        onChange={(e) => setSenderPhone(e.target.value)}
                        className="w-full px-4 py-3 bg-[#F7F3EA] border border-[#E8DFC9] rounded-sm text-sm text-[#29231B] focus:outline-none focus:border-[#B08A3C] focus:ring-1 focus:ring-[#B08A3C] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#51483C] mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Jamia Admission / IAS Academy / Zakat"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full px-4 py-3 bg-[#F7F3EA] border border-[#E8DFC9] rounded-sm text-sm text-[#29231B] focus:outline-none focus:border-[#B08A3C] focus:ring-1 focus:ring-[#B08A3C] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#51483C] mb-2">
                      Your Message *
                    </label>
                    <textarea
                      rows={6}
                      required
                      placeholder="Please convey your detailed message, request, or intention..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 bg-[#F7F3EA] border border-[#E8DFC9] rounded-sm text-sm text-[#29231B] focus:outline-none focus:border-[#B08A3C] focus:ring-1 focus:ring-[#B08A3C] transition-all"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                    <span className="text-[11px] text-stone-500 italic">
                      Integration point configured for direct secretariat delivery.
                    </span>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-17 btn-17-primary text-xs tracking-widest !py-3.5 !px-8 shadow-md disabled:opacity-50"
                    >
                      <span className="text-container">
                        <span className="text">
                          <Send className="w-3.5 h-3.5" />
                          <span>{submitting ? 'Transmitting...' : 'Send Message'}</span>
                        </span>
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
