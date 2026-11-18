import React, { useState } from 'react';
import { X, Heart, ShieldCheck, CheckCircle2, Copy, AlertCircle, Building, Phone, Mail } from 'lucide-react';
import { CONTACT_INFO } from '../data/trustData';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCause?: string;
}

const CAUSES = [
  { id: 'jamia-construction', label: 'Jamia Darul Ilmi – Campus Construction & Land' },
  { id: 'ias-academy', label: 'Azhagiya Kadan IAS Academy – Civil Service Scholarships' },
  { id: 'women-rehab', label: 'Madrasathun Niswan – Women Rehabilitation Sanctuary' },
  { id: 'medical-aid', label: 'Medical Aid & Free Health Clinic' },
  { id: 'scheme-100', label: 'Scheme 100 – High Achiever SSLC Sponsorship' },
  { id: 'general-sadaqah', label: 'General Sadaqah, Zakat & Deen Empowerment' },
];

const PRESET_AMOUNTS = [1000, 2500, 5000, 10000, 25000, 100000];

export const DonationModal: React.FC<DonationModalProps> = ({
  isOpen,
  onClose,
  defaultCause = 'jamia-construction'
}) => {
  const [selectedCause, setSelectedCause] = useState(defaultCause);
  const [donationType, setDonationType] = useState<'Sadaqah Jariyah' | 'Zakat' | 'Lillah' | 'General'>('Sadaqah Jariyah');
  const [amount, setAmount] = useState<number | string>(5000);
  const [isCustom, setIsCustom] = useState(false);
  const [customAmount, setCustomAmount] = useState('');
  
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [pan, setPan] = useState('');
  const [notes, setNotes] = useState('');

  const [submittedPledge, setSubmittedPledge] = useState<{
    referenceId: string;
    amount: string;
    cause: string;
    type: string;
  } | null>(null);

  if (!isOpen) return null;

  const handlePresetClick = (val: number) => {
    setIsCustom(false);
    setAmount(val);
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCustom(true);
    setCustomAmount(e.target.value);
    setAmount(e.target.value);
  };

  const handleSubmitPledge = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    const chosenAmt = isCustom ? customAmount : amount;
    const refCode = `ILMI-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;

    const selectedCauseObj = CAUSES.find(c => c.id === selectedCause);

    setSubmittedPledge({
      referenceId: refCode,
      amount: String(chosenAmt),
      cause: selectedCauseObj?.label || 'Jamia Darul Ilmi Support',
      type: donationType
    });
  };

  const handleReset = () => {
    setSubmittedPledge(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white border border-[#B08A3C]/30 shadow-2xl rounded-sm overflow-hidden text-[#29231B] max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-[#29231B] text-[#F7F3EA] px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between border-b border-[#B08A3C] shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 rounded-sm bg-[#1F1A14] border border-[#B08A3C] flex items-center justify-center text-[#B08A3C] shrink-0">
              <Heart className="w-4 h-4 fill-[#B08A3C]" />
            </div>
            <div>
              <h3 className="font-serif text-base sm:text-lg font-bold tracking-tight text-[#F7F3EA]">
                Support Our Mission
              </h3>
              <p className="text-[11px] sm:text-xs text-[#D8C18A]/90">
                Sadaqah Jariyah & Institutional Giving · ILMI Trust
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white transition-colors rounded-sm focus:outline-none shrink-0"
            aria-label="Close donation modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-8 overflow-y-auto flex-1">
          {submittedPledge ? (
            /* Successful Pledge & Direct Integration Instructions */
            <div className="space-y-6 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#48634A]/10 border border-[#48634A]/30 flex items-center justify-center text-[#48634A]">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="font-arabic text-2xl text-[#B08A3C] block mb-1">جَزَاكُمُ اللَّهُ خَيْرًا</span>
                <h4 className="font-serif text-2xl font-bold text-[#29231B]">
                  Pledge Registered Successfully
                </h4>
                <p className="text-sm text-[#51483C] mt-1">
                  May Allah bless your noble intention and multiply your reward in both worlds.
                </p>
              </div>

              {/* Pledge Details Box */}
              <div className="bg-[#F7F3EA] border border-[#B08A3C]/30 rounded-sm p-5 text-left space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-[#B08A3C]/20 text-xs text-[#51483C]">
                  <span>Pledge Reference</span>
                  <span className="font-mono font-bold text-[#29231B] text-sm">{submittedPledge.referenceId}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[#51483C]">Cause:</span>
                  <span className="font-semibold text-[#29231B] text-right">{submittedPledge.cause}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[#51483C]">Category:</span>
                  <span className="font-medium text-[#29231B]">{submittedPledge.type}</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-[#B08A3C]/20 font-bold text-base">
                  <span className="text-[#29231B]">Target Amount:</span>
                  <span className="text-[#B08A3C]">₹{Number(submittedPledge.amount).toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Official Payment Integration Notice */}
              <div className="bg-amber-50/80 border border-amber-300 rounded-sm p-4 text-left text-xs text-[#51483C] space-y-2">
                <div className="flex items-center gap-2 text-[#29231B] font-semibold">
                  <AlertCircle className="w-4 h-4 text-[#B08A3C] shrink-0" />
                  <span>Configurable Institutional Payment Notice</span>
                </div>
                <p className="leading-relaxed">
                  As per ILMI Trust governance and safety protocols, direct bank account numbers and live payment gateway credentials (Razorpay/UPI) are configured by the trust administration before online card charges.
                </p>
                <p className="leading-relaxed font-medium text-[#29231B]">
                  To complete your transfer via verified NEFT/RTGS or official trust cheque, please contact our office quoting Reference <span className="font-mono font-bold">{submittedPledge.referenceId}</span>:
                </p>
                <div className="pt-1 flex flex-wrap gap-4 text-xs font-semibold text-[#29231B]">
                  <span>Phone: {CONTACT_INFO.phone}</span>
                  <span>Email: {CONTACT_INFO.email}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={`${CONTACT_INFO.whatsappUrl}&text=Assalamu%20Alaikum%2C%20I%20have%20registered%20Pledge%20${submittedPledge.referenceId}%20for%20₹${submittedPledge.amount}%20towards%20${encodeURIComponent(submittedPledge.cause)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 bg-[#48634A] hover:bg-[#3b523d] text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-colors"
                >
                  Confirm on WhatsApp
                </a>
                <button
                  onClick={handleReset}
                  className="py-3 px-5 border border-stone-300 hover:bg-stone-100 text-stone-700 text-xs font-semibold rounded-sm transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            /* Donation Form */
            <form onSubmit={handleSubmitPledge} className="space-y-6">
              
              {/* Cause Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#51483C] mb-2">
                  1. Select Initiative to Support
                </label>
                <select
                  value={selectedCause}
                  onChange={(e) => setSelectedCause(e.target.value)}
                  className="w-full px-3 py-2.5 bg-[#F7F3EA] border border-stone-300 rounded-sm text-sm text-[#29231B] focus:outline-none focus:border-[#B08A3C]"
                >
                  {CAUSES.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Giving Type */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#51483C] mb-2">
                  2. Giving Classification
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(['Sadaqah Jariyah', 'Zakat', 'Lillah', 'General'] as const).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setDonationType(type)}
                      className={`py-2 px-3 text-xs font-medium rounded-sm border text-center transition-all ${
                        donationType === type
                          ? 'bg-[#29231B] text-[#D8C18A] border-[#29231B]'
                          : 'bg-[#F7F3EA] text-[#51483C] border-stone-300 hover:border-[#B08A3C]'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Amount Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#51483C] mb-2">
                  3. Contribution Amount (INR)
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-3">
                  {PRESET_AMOUNTS.map((amt) => {
                    const isSelected = !isCustom && Number(amount) === amt;
                    return (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => handlePresetClick(amt)}
                        className={`py-2.5 px-2 text-xs font-bold rounded-sm border transition-all tabular-nums ${
                          isSelected
                            ? 'bg-[#B08A3C] text-[#29231B] border-[#B08A3C]'
                            : 'bg-[#F7F3EA] text-[#29231B] border-stone-300 hover:border-[#B08A3C]'
                        }`}
                      >
                        ₹{amt >= 1000 ? `${amt / 1000}k` : amt}
                      </button>
                    );
                  })}
                </div>

                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-stone-500 font-bold text-sm">₹</span>
                  <input
                    type="number"
                    min="100"
                    placeholder="Enter custom amount"
                    value={isCustom ? customAmount : ''}
                    onChange={handleCustomChange}
                    className="w-full pl-8 pr-4 py-2.5 bg-white border border-stone-300 rounded-sm text-sm text-[#29231B] focus:outline-none focus:border-[#B08A3C]"
                  />
                </div>
              </div>

              {/* Donor Details */}
              <div className="space-y-4 pt-2 border-t border-stone-200">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#51483C]">
                  4. Donor Information
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-[#51483C] mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3 py-2 bg-[#F7F3EA] border border-stone-300 rounded-sm text-sm focus:outline-none focus:border-[#B08A3C]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#51483C] mb-1">Mobile / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 bg-[#F7F3EA] border border-stone-300 rounded-sm text-sm focus:outline-none focus:border-[#B08A3C]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-[#51483C] mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="donor@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 bg-[#F7F3EA] border border-stone-300 rounded-sm text-sm focus:outline-none focus:border-[#B08A3C]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#51483C] mb-1">PAN Card (Optional for 80G)</label>
                    <input
                      type="text"
                      placeholder="ABCDE1234F"
                      value={pan}
                      onChange={(e) => setPan(e.target.value.toUpperCase())}
                      className="w-full px-3 py-2 bg-[#F7F3EA] border border-stone-300 rounded-sm text-sm uppercase focus:outline-none focus:border-[#B08A3C]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-[#51483C] mb-1">Dua Request or Notes</label>
                  <textarea
                    rows={2}
                    placeholder="Specific intention or message for the Jamia students..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3 py-2 bg-[#F7F3EA] border border-stone-300 rounded-sm text-sm focus:outline-none focus:border-[#B08A3C]"
                  />
                </div>
              </div>

              {/* Transparency Assurance */}
              <div className="flex items-center gap-2 text-xs text-stone-500 pt-2">
                <ShieldCheck className="w-4 h-4 text-[#48634A] shrink-0" />
                <span>100% of donations are allocated directly to verified Islamic education & community welfare programs.</span>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full btn-17 btn-17-primary text-xs tracking-wider !py-3.5 !px-4 shadow hover:shadow-md"
                >
                  <span className="text-container">
                    <span className="text">
                      <Heart className="w-4 h-4 fill-current" />
                      <span>Register Donation Pledge</span>
                    </span>
                  </span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
