import React, { useState } from 'react';
import { Send, MessageCircle, AlertCircle, CheckCircle2, User, Phone, Mail, BookOpen, Award } from 'lucide-react';
import { CONTACT_INFO } from '../data/trustData';

interface AdmissionEnquiryFormProps {
  initialCourse?: string;
  onSuccess?: () => void;
}

export const AdmissionEnquiryForm: React.FC<AdmissionEnquiryFormProps> = ({
  initialCourse = 'Alim & Law Dual Course (5 Years)',
  onSuccess,
}) => {
  const [studentName, setStudentName] = useState('');
  const [parentName, setParentName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [courseInterested, setCourseInterested] = useState(initialCourse);
  const [educationalQualification, setEducationalQualification] = useState('12th Standard Passed / Completed');
  const [message, setMessage] = useState('');

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [preparedWhatsAppUrl, setPreparedWhatsAppUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const coursesList = [
    'Alim & Law Dual Course (5 Years)',
    'Madarsa Darul Ilmi – Classical Alim Course',
    'Madarsa Darul Ilmi – Quran Memorization (Hifz) & Tajweed',
    'Madrasa Muttukadu – Islamic & Deeniyat Studies',
    'Azhagiya Kadan IAS Academy – Civil Services Coaching',
    'Other Educational Programmes',
  ];

  const qualificationList = [
    '12th Standard Passed / Completed',
    '12th Standard Appearing',
    'Graduate / Bachelor Degree',
    '10th Standard (SSLC)',
    'Hafiz-ul-Quran with High School',
    'Other Qualification',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!studentName.trim() || !parentName.trim() || !contactNumber.trim()) {
      setErrorMessage('Please fill in Student Name, Parent/Guardian Name, and Contact Number.');
      return;
    }

    // Build structured pre-filled WhatsApp message for official Trust admission desk
    const textLines = [
      `*ADMISSION ENQUIRY – ILMI TRUST / MADARSA DARUL ILMI*`,
      `• *Student Name:* ${studentName.trim()}`,
      `• *Parent/Guardian:* ${parentName.trim()}`,
      `• *Contact Number:* ${contactNumber.trim()}`,
      emailAddress.trim() ? `• *Email:* ${emailAddress.trim()}` : null,
      `• *Course Interested:* ${courseInterested}`,
      `• *Educational Qualification:* ${educationalQualification}`,
      message.trim() ? `• *Message:* ${message.trim()}` : null,
    ].filter(Boolean).join('\n');

    // The official WhatsApp phone number from CONTACT_INFO (98844 67666)
    const officialPhone = '919884467666';
    const encodedText = encodeURIComponent(textLines);
    const waUrl = `https://wa.me/${officialPhone}?text=${encodedText}`;

    setPreparedWhatsAppUrl(waUrl);
    setFormSubmitted(true);
    if (onSuccess) onSuccess();
  };

  const handleReset = () => {
    setFormSubmitted(false);
    setPreparedWhatsAppUrl('');
    setStudentName('');
    setParentName('');
    setContactNumber('');
    setEmailAddress('');
    setMessage('');
    setErrorMessage('');
  };

  return (
    <div className="bg-white border-2 border-[#B08A3C]/40 rounded-sm p-4 xs:p-6 sm:p-8 lg:p-10 shadow-lg">
      <div className="border-b border-[#E8DFC9] pb-5 mb-6">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B08A3C] block mb-1">
          Official Admissions Desk
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#29231B]">
          Admission Enquiry Form
        </h3>
        <p className="text-xs sm:text-sm text-[#51483C] mt-1.5 leading-relaxed">
          Submit your enquiry for Madarsa Darul Ilmi, the Alim & Law Dual Course, or partner educational initiatives.
        </p>
      </div>

      {errorMessage && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-sm text-red-800 text-xs sm:text-sm flex items-center gap-2.5">
          <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
          <span>{errorMessage}</span>
        </div>
      )}

      {formSubmitted ? (
        <div className="space-y-6">
          <div className="p-5 bg-[#F7F3EA] border border-[#B08A3C]/40 rounded-sm">
            <div className="flex items-center gap-2 text-[#48634A] font-semibold text-sm mb-2">
              <CheckCircle2 className="w-5 h-5 text-[#48634A]" />
              <span>Enquiry Prepared for Submission</span>
            </div>
            <p className="text-xs sm:text-sm text-[#51483C] leading-relaxed">
              Your admission details for <strong className="text-[#29231B]">{studentName}</strong> ({courseInterested}) have been formatted for the Trust Admissions Secretariat.
            </p>
          </div>

          <div className="bg-[#1F1A14] text-[#F7F3EA] p-5 rounded-sm border border-[#B08A3C]/30 text-xs sm:text-sm font-mono space-y-1.5">
            <div className="text-[#D8C18A] font-bold text-xs uppercase tracking-wider mb-2">
              Structured Message Summary:
            </div>
            <div><span className="text-[#B08A3C]">Student:</span> {studentName}</div>
            <div><span className="text-[#B08A3C]">Parent/Guardian:</span> {parentName}</div>
            <div><span className="text-[#B08A3C]">Contact:</span> {contactNumber}</div>
            {emailAddress && <div><span className="text-[#B08A3C]">Email:</span> {emailAddress}</div>}
            <div><span className="text-[#B08A3C]">Course:</span> {courseInterested}</div>
            <div><span className="text-[#B08A3C]">Qualification:</span> {educationalQualification}</div>
            {message && <div><span className="text-[#B08A3C]">Note:</span> {message}</div>}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <a
              href={preparedWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex-1 btn-17 btn-17-primary text-xs tracking-wider !py-3.5 !px-6 text-center shadow-md justify-center flex items-center gap-2"
            >
              <span className="text-container">
                <span className="text">
                  <MessageCircle className="w-4 h-4 shrink-0 fill-current" />
                  <span>Send Directly via Official WhatsApp</span>
                </span>
              </span>
            </a>

            <button
              type="button"
              onClick={handleReset}
              className="w-full sm:w-auto px-5 py-3 border border-stone-300 text-[#51483C] hover:text-[#29231B] hover:bg-stone-50 text-xs font-semibold rounded-sm transition-colors text-center"
            >
              Submit Another Enquiry
            </button>
          </div>

          <p className="text-[11px] text-stone-500 italic pt-1">
            Official admissions desk WhatsApp: <span className="font-mono text-[#29231B] font-semibold">{CONTACT_INFO.phone}</span>. No automated or fabricated admissions results are issued.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Student Name */}
            <div>
              <label className="block text-xs font-semibold text-[#29231B] uppercase tracking-wider mb-1.5">
                Student Name <span className="text-[#B08A3C]">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="Full name of applicant"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#F7F3EA] border border-[#E8DFC9] rounded-sm text-sm text-[#29231B] focus:outline-none focus:border-[#B08A3C] transition-colors"
                />
              </div>
            </div>

            {/* Parent / Guardian Name */}
            <div>
              <label className="block text-xs font-semibold text-[#29231B] uppercase tracking-wider mb-1.5">
                Parent / Guardian Name <span className="text-[#B08A3C]">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Father / Guardian full name"
                value={parentName}
                onChange={(e) => setParentName(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#F7F3EA] border border-[#E8DFC9] rounded-sm text-sm text-[#29231B] focus:outline-none focus:border-[#B08A3C] transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Contact Number */}
            <div>
              <label className="block text-xs font-semibold text-[#29231B] uppercase tracking-wider mb-1.5">
                Contact Number <span className="text-[#B08A3C]">*</span>
              </label>
              <input
                type="tel"
                required
                placeholder="Mobile / WhatsApp number"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#F7F3EA] border border-[#E8DFC9] rounded-sm text-sm text-[#29231B] focus:outline-none focus:border-[#B08A3C] transition-colors"
              />
            </div>

            {/* Email Address (optional) */}
            <div>
              <label className="block text-xs font-semibold text-[#29231B] uppercase tracking-wider mb-1.5">
                Email Address <span className="text-stone-400 font-normal lowercase">(optional)</span>
              </label>
              <input
                type="email"
                placeholder="email@example.com"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#F7F3EA] border border-[#E8DFC9] rounded-sm text-sm text-[#29231B] focus:outline-none focus:border-[#B08A3C] transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Course Interested In */}
            <div>
              <label className="block text-xs font-semibold text-[#29231B] uppercase tracking-wider mb-1.5">
                Course Interested In <span className="text-[#B08A3C]">*</span>
              </label>
              <select
                value={courseInterested}
                onChange={(e) => setCourseInterested(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#F7F3EA] border border-[#E8DFC9] rounded-sm text-sm text-[#29231B] focus:outline-none focus:border-[#B08A3C] transition-colors"
              >
                {coursesList.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* Educational Qualification */}
            <div>
              <label className="block text-xs font-semibold text-[#29231B] uppercase tracking-wider mb-1.5">
                Educational Qualification <span className="text-[#B08A3C]">*</span>
              </label>
              <select
                value={educationalQualification}
                onChange={(e) => setEducationalQualification(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#F7F3EA] border border-[#E8DFC9] rounded-sm text-sm text-[#29231B] focus:outline-none focus:border-[#B08A3C] transition-colors"
              >
                {qualificationList.map((q) => (
                  <option key={q} value={q}>
                    {q}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Message / Remarks */}
          <div>
            <label className="block text-xs font-semibold text-[#29231B] uppercase tracking-wider mb-1.5">
              Message or Specific Query
            </label>
            <textarea
              rows={3}
              placeholder="Any questions regarding syllabus, hostel accommodation, fee subsidy, or requirements..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-[#F7F3EA] border border-[#E8DFC9] rounded-sm text-sm text-[#29231B] focus:outline-none focus:border-[#B08A3C] transition-colors"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full btn-17 btn-17-primary text-xs tracking-wider !py-3.5 !px-8 shadow-md"
            >
              <span className="text-container">
                <span className="text">
                  <Send className="w-4 h-4 shrink-0" />
                  <span>Submit Admission Enquiry</span>
                </span>
              </span>
            </button>
          </div>

          <div className="flex items-center justify-between text-[11px] text-[#51483C] pt-1">
            <span>Direct helpline: {CONTACT_INFO.phone}</span>
            <span>Subsidised & merit-supported admissions</span>
          </div>
        </form>
      )}
    </div>
  );
};
