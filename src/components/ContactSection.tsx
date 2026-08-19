import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  Github, 
  Linkedin, 
  Twitter, 
  FileDown, 
  Palmtree,
  CheckCircle2
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { playCyberClick } from '../utils/audio';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    playCyberClick();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  const handleCopyEmail = () => {
    playCyberClick();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    playCyberClick();
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleDownloadVCard = () => {
    playCyberClick();
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:${PERSONAL_INFO.name}
TITLE:${PERSONAL_INFO.role}
TEL;TYPE=CELL:${PERSONAL_INFO.phone}
EMAIL;TYPE=INTERNET:${PERSONAL_INFO.email}
URL:${PERSONAL_INFO.socialLinks.github}
ADR;TYPE=HOME:;;${PERSONAL_INFO.location};;;;
NOTE:GitHub @KANO-BYTE-bot
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Cornel_Mwangi_Developer.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto z-10 relative">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6 mb-10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#ff2a85] uppercase tracking-wider mb-2">
            <Palmtree className="w-4 h-4 text-[#00f0ff]" />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white">
            Let’s Build <span className="text-gradient-vice">Together</span>
          </h2>
        </div>

        <div className="text-xs font-mono text-slate-400">
          Open to full-time engineering roles, contracts, and collaborations.
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Col: Contact Information (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="glass-panel rounded-2xl p-6 sm:p-7 space-y-6">
            <div>
              <h3 className="font-display font-bold text-xl text-white">Cornel Mwangi</h3>
              <p className="text-xs font-mono text-[#00f0ff] mt-0.5">Software Developer • Nairobi, Kenya</p>
            </div>

            <div className="space-y-3">
              {/* Phone */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#ff2a85]" />
                    <span>Phone</span>
                  </span>
                  <button onClick={handleCopyPhone} className="text-[#00f0ff] hover:underline flex items-center gap-1">
                    {copiedPhone ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <a href={`tel:${PERSONAL_INFO.phone}`} className="text-base font-bold text-white hover:text-[#ff2a85] transition-colors block">
                  {PERSONAL_INFO.phone}
                </a>
              </div>

              {/* Email */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#00f0ff]" />
                    <span>Email</span>
                  </span>
                  <button onClick={handleCopyEmail} className="text-[#ff2a85] hover:underline flex items-center gap-1">
                    {copiedEmail ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm font-bold text-white hover:text-[#00f0ff] transition-colors break-all block">
                  {PERSONAL_INFO.email}
                </a>
              </div>

              {/* Location */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
                <div className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-purple-400" />
                  <span>Location</span>
                </div>
                <div className="text-sm font-semibold text-white">
                  {PERSONAL_INFO.location}
                </div>
              </div>
            </div>

            {/* vCard Button */}
            <button
              onClick={handleDownloadVCard}
              className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all"
            >
              <FileDown className="w-4 h-4 text-[#ff2a85]" />
              <span>Download vCard Contact</span>
            </button>

            {/* Social Links */}
            <div className="pt-4 border-t border-white/10 space-y-2">
              <div className="text-xs font-mono text-slate-400">Online Profiles:</div>
              <div className="grid grid-cols-3 gap-2">
                <a
                  href={PERSONAL_INFO.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-slate-300 hover:text-white flex items-center justify-center gap-1.5 text-xs font-mono transition-colors"
                >
                  <Github className="w-4 h-4 text-[#00f0ff]" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-slate-300 hover:text-white flex items-center justify-center gap-1.5 text-xs font-mono transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-sky-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={PERSONAL_INFO.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-slate-300 hover:text-white flex items-center justify-center gap-1.5 text-xs font-mono transition-colors"
                >
                  <Twitter className="w-4 h-4 text-purple-400" />
                  <span>Twitter</span>
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Right Col: Message Form (7 Cols) */}
        <div className="lg:col-span-7">
          <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="font-display font-bold text-xl text-white">Send Direct Message</h3>
              <p className="text-xs text-slate-300 mt-1 font-sans">
                Have a project in mind, an engineering role open, or want to discuss a collaboration? Fill in the form below.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 space-y-2 text-center animate-bounce-gentle">
                <CheckCircle2 className="w-8 h-8 mx-auto text-emerald-400" />
                <h4 className="font-display font-bold text-lg text-white">Message Sent Successfully!</h4>
                <p className="text-xs font-sans text-slate-300">
                  Thank you for reaching out, Cornel Mwangi will respond as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Jane Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#ff2a85] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="jane@company.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00f0ff] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#9d4edd] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your project, timeline, or inquiry..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#ff2a85] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#ff2a85] via-[#d946ef] to-[#9d4edd] text-white font-display font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,42,133,0.35)] hover:opacity-95 transition-opacity disabled:opacity-50 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Transmitting Message...' : 'Send Direct Message'}</span>
                </button>
              </form>
            )}

          </div>
        </div>

      </div>

    </section>
  );
};
