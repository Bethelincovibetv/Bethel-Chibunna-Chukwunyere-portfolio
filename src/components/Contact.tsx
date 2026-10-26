import React, { useState, useEffect } from 'react';
import {
  MessageSquare,
  Phone,
  Mail,
  Linkedin,
  Github,
  Send,
  Check,
  AlertCircle,
  Copy,
  ExternalLink,
  Edit2,
  Clock,
} from 'lucide-react';
import { ContactConfig } from '../types/portfolio';
import { TranslationDictionary } from '../data/translations';

interface ContactProps {
  theme: 'dark' | 'light';
  config: ContactConfig;
  onUpdateConfig: (updated: ContactConfig) => void;
  preselectedService?: string;
  t: TranslationDictionary;
}

export const Contact: React.FC<ContactProps> = ({
  theme,
  config,
  onUpdateConfig,
  preselectedService,
  t,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceNeeded: preselectedService || 'Website Development',
    projectDescription: '',
  });

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, serviceNeeded: preselectedService }));
    }
  }, [preselectedService]);

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [submittedStatus, setSubmittedStatus] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  const [isEditingConfig, setIsEditingConfig] = useState(false);
  const [tempConfig, setTempConfig] = useState<ContactConfig>({ ...config });

  const validate = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.name.trim()) errors.name = t.contact.nameError;
    if (!formData.email.trim()) {
      errors.email = t.contact.emailError;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = t.contact.emailFormatError;
    }
    if (!formData.projectDescription.trim()) {
      errors.projectDescription = t.contact.descError;
    } else if (formData.projectDescription.trim().length < 15) {
      errors.projectDescription = t.contact.descLengthError;
    }
    return errors;
  };

  const generateEnquiryText = () => {
    return `Hello Bethel,\n\nI reached out via your portfolio website regarding Goodgift Digital.\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Service Needed:* ${formData.serviceNeeded}\n\n*Project Details:*\n${formData.projectDescription}`;
  };

  const handleSendViaWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});

    const message = encodeURIComponent(generateEnquiryText());
    const waUrl = `https://wa.me/${config.whatsAppNumber}?text=${message}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setSubmittedStatus('WhatsApp message window opened with your filled details.');
  };

  const handleSendViaEmail = () => {
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});

    const subject = encodeURIComponent(`Project Enquiry: ${formData.serviceNeeded} - ${formData.name}`);
    const body = encodeURIComponent(generateEnquiryText());
    const mailtoUrl = `mailto:${config.email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
    setSubmittedStatus('Email client opened with pre-filled enquiry message.');
  };

  const handleCopyMessage = () => {
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});

    navigator.clipboard.writeText(generateEnquiryText());
    setIsCopied(true);
    setSubmittedStatus('Enquiry copied to clipboard! You can paste and send directly.');
    setTimeout(() => setIsCopied(false), 3000);
  };

  const handleSaveConfig = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateConfig(tempConfig);
    setIsEditingConfig(false);
  };

  return (
    <section
      id="contact"
      className={`py-20 md:py-28 border-t transition-colors ${
        theme === 'dark' ? 'bg-[#111318] border-[#262A33]' : 'bg-white border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#E67E22] mb-2">
            <span className="w-5 h-0.5 bg-[#E67E22] rounded-full" />
            <span>{t.contact.kicker}</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            {t.contact.headline}
          </h2>
          <p
            className={`mt-4 text-base sm:text-lg leading-relaxed ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            
            <div
              className={`p-6 sm:p-7 rounded-2xl border transition-all ${
                theme === 'dark' ? 'bg-[#191B21] border-[#262A33]' : 'bg-gray-50 border-gray-200 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#262A33]">
                <div>
                  <h3
                    className={`text-lg font-bold tracking-tight ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {t.contact.directChannels}
                  </h3>
                  <p className="text-xs text-[#E67E22] font-mono font-medium">
                    {config.businessName}
                  </p>
                </div>

                <button
                  onClick={() => setIsEditingConfig(!isEditingConfig)}
                  className={`hidden p-1.5 rounded-lg border text-xs flex items-center gap-1 transition-colors ${
                    isEditingConfig
                      ? 'bg-[#E67E22] text-white border-[#E67E22]'
                      : theme === 'dark'
                      ? 'border-[#262A33] text-gray-400 hover:text-white'
                      : 'border-gray-200 text-gray-600'
                  }`}
                  title="Edit contact details"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                  <span className="sr-only">Edit details</span>
                </button>
              </div>

              {/* Direct WhatsApp Action Banner */}
              <div className="mb-6">
                <a
                  href={`https://wa.me/${config.whatsAppNumber}?text=${encodeURIComponent(
                    "Hello Bethel, I would like to discuss a project with Goodgift Digital."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shadow-md group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/20">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-white/80 font-mono uppercase tracking-wider">{t.contact.fastestResponse}</p>
                      <p className="text-sm font-bold">{t.contact.chatWhatsapp}</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-white/80 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

              {/* Channels List */}
              <div className="space-y-4 text-sm">
                
                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-[#E67E22]/10 text-[#E67E22] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-gray-400 block">
                      {t.contact.phoneLabel}
                    </span>
                    <a
                      href={`tel:${config.phoneRaw}`}
                      className={`font-semibold hover:text-[#E67E22] transition-colors ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {config.phoneDisplay}
                    </a>
                    <span className="block text-xs text-gray-400">
                      {t.contact.intlText}: +{config.whatsAppNumber}
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-[#E67E22]/10 text-[#E67E22] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-gray-400 block">
                      {t.contact.emailLabel}
                    </span>
                    <a
                      href={`mailto:${config.email}`}
                      className={`font-semibold break-all hover:text-[#E67E22] transition-colors ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {config.email}
                    </a>
                  </div>
                </div>

                {/* Social Profiles */}
                <div className="pt-4 border-t border-[#262A33] flex items-center gap-3">
                  {config.linkedInUrl && (
                    <a
                      href={config.linkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-xs font-medium transition-colors ${
                        theme === 'dark'
                          ? 'border-[#2E333F] text-gray-300 hover:text-white hover:bg-[#111318]'
                          : 'border-gray-200 text-gray-700 hover:bg-white'
                      }`}
                    >
                      <Linkedin className="w-4 h-4 text-[#0077B5]" />
                      <span>LinkedIn</span>
                    </a>
                  )}

                  {config.gitHubUrl && (
                    <a
                      href={config.gitHubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-xs font-medium transition-colors ${
                        theme === 'dark'
                          ? 'border-[#2E333F] text-gray-300 hover:text-white hover:bg-[#111318]'
                          : 'border-gray-200 text-gray-700 hover:bg-white'
                      }`}
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div
              className={`p-4 rounded-xl border flex items-center gap-3 text-xs ${
                theme === 'dark'
                  ? 'bg-[#191B21]/60 border-[#262A33] text-gray-400'
                  : 'bg-gray-50 border-gray-200 text-gray-600'
              }`}
            >
              <Clock className="w-4 h-4 text-[#E67E22] shrink-0" />
              <span>{t.contact.responseNote}</span>
            </div>

            {/* Config Editor Modal */}
            {isEditingConfig && (
              <div className="p-5 rounded-2xl border bg-[#191B21] border-[#2E333F] space-y-3 text-xs">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-white uppercase tracking-wider font-mono">
                    Edit Contact Details
                  </h4>
                  <button
                    onClick={() => setIsEditingConfig(false)}
                    className="text-gray-400 hover:text-white"
                  >
                    Cancel
                  </button>
                </div>
                <form onSubmit={handleSaveConfig} className="space-y-3">
                  <div>
                    <label className="block text-gray-400 mb-1">Email Address</label>
                    <input
                      type="email"
                      value={tempConfig.email}
                      onChange={(e) => setTempConfig({ ...tempConfig, email: e.target.value })}
                      className="w-full px-3 py-1.5 rounded-lg bg-[#111318] border border-[#2E333F] text-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-1">Phone Number (Display)</label>
                    <input
                      type="text"
                      value={tempConfig.phoneDisplay}
                      onChange={(e) => setTempConfig({ ...tempConfig, phoneDisplay: e.target.value })}
                      className="w-full px-3 py-1.5 rounded-lg bg-[#111318] border border-[#2E333F] text-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-1">
                      WhatsApp Country Format (digits only, e.g. 2347043537401)
                    </label>
                    <input
                      type="text"
                      value={tempConfig.whatsAppNumber}
                      onChange={(e) => setTempConfig({ ...tempConfig, whatsAppNumber: e.target.value })}
                      className="w-full px-3 py-1.5 rounded-lg bg-[#111318] border border-[#2E333F] text-white"
                      required
                    />
                  </div>
                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      type="submit"
                      className="px-3.5 py-1.5 font-semibold text-white bg-[#E67E22] hover:bg-[#D35400] rounded-lg flex items-center gap-1"
                    >
                      <Check className="w-3.5 h-3.5" />
                      Save Details
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Functional Contact Form Column */}
          <div className="lg:col-span-7">
            <div
              className={`p-6 sm:p-8 rounded-2xl border transition-all ${
                theme === 'dark' ? 'bg-[#191B21] border-[#262A33]' : 'bg-gray-50 border-gray-200 shadow-sm'
              }`}
            >
              <h3
                className={`text-xl font-bold tracking-tight mb-1 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}
              >
                {t.contact.sendBriefTitle}
              </h3>
              <p
                className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                {t.contact.sendBriefDesc}
              </p>

              <form onSubmit={handleSendViaWhatsApp} className="space-y-4">
                
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className={`block text-xs font-mono uppercase tracking-wider mb-1.5 font-medium ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    {t.contact.nameLabel}
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (formErrors.name) setFormErrors({ ...formErrors, name: '' });
                    }}
                    placeholder={t.contact.namePlaceholder}
                    className={`w-full text-sm px-4 py-2.5 rounded-xl border transition-colors focus:outline-none focus:border-[#E67E22] ${
                      formErrors.name
                        ? 'border-red-500 bg-red-500/5'
                        : theme === 'dark'
                        ? 'bg-[#111318] border-[#2E333F] text-white'
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                  />
                  {formErrors.name && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {formErrors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className={`block text-xs font-mono uppercase tracking-wider mb-1.5 font-medium ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    {t.contact.emailFormLabel}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (formErrors.email) setFormErrors({ ...formErrors, email: '' });
                    }}
                    placeholder={t.contact.emailPlaceholder}
                    className={`w-full text-sm px-4 py-2.5 rounded-xl border transition-colors focus:outline-none focus:border-[#E67E22] ${
                      formErrors.email
                        ? 'border-red-500 bg-red-500/5'
                        : theme === 'dark'
                        ? 'bg-[#111318] border-[#2E333F] text-white'
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                  />
                  {formErrors.email && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {formErrors.email}
                    </p>
                  )}
                </div>

                {/* Service Needed */}
                <div>
                  <label
                    htmlFor="contact-service"
                    className={`block text-xs font-mono uppercase tracking-wider mb-1.5 font-medium ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    {t.contact.serviceNeededLabel}
                  </label>
                  <select
                    id="contact-service"
                    value={formData.serviceNeeded}
                    onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                    className={`w-full text-sm px-4 py-2.5 rounded-xl border transition-colors focus:outline-none focus:border-[#E67E22] ${
                      theme === 'dark'
                        ? 'bg-[#111318] border-[#2E333F] text-white'
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                  >
                    <option value="Website Development">Website Development</option>
                    <option value="AI-Powered Solutions">AI-Powered Solutions</option>
                    <option value="Mobile Application Development">Mobile Application Development</option>
                    <option value="Digital Business Growth">Digital Business Growth</option>
                    <option value="Product Development">Product Development</option>
                    <option value="Consultation & Strategy">Consultation &amp; Strategy</option>
                  </select>
                </div>

                {/* Project Description */}
                <div>
                  <label
                    htmlFor="contact-desc"
                    className={`block text-xs font-mono uppercase tracking-wider mb-1.5 font-medium ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    {t.contact.descLabel}
                  </label>
                  <textarea
                    id="contact-desc"
                    rows={4}
                    value={formData.projectDescription}
                    onChange={(e) => {
                      setFormData({ ...formData, projectDescription: e.target.value });
                      if (formErrors.projectDescription) {
                        setFormErrors({ ...formErrors, projectDescription: '' });
                      }
                    }}
                    placeholder={t.contact.descPlaceholder}
                    className={`w-full text-sm px-4 py-2.5 rounded-xl border transition-colors focus:outline-none focus:border-[#E67E22] ${
                      formErrors.projectDescription
                        ? 'border-red-500 bg-red-500/5'
                        : theme === 'dark'
                        ? 'bg-[#111318] border-[#2E333F] text-white'
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                  />
                  {formErrors.projectDescription && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {formErrors.projectDescription}
                    </p>
                  )}
                </div>

                {/* Submission Feedback Alert */}
                {submittedStatus && (
                  <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs flex items-center gap-2">
                    <Check className="w-4 h-4 shrink-0" />
                    <span>{submittedStatus}</span>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3 px-5 text-xs sm:text-sm font-semibold text-white bg-[#E67E22] hover:bg-[#D35400] rounded-xl transition-all shadow-md flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E67E22]"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t.contact.sendWhatsappBtn}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendViaEmail}
                    className={`py-3 px-4 text-xs font-semibold rounded-xl border transition-colors flex items-center justify-center gap-1.5 ${
                      theme === 'dark'
                        ? 'border-[#2E333F] text-gray-200 hover:text-white hover:bg-[#111318]'
                        : 'border-gray-300 text-gray-800 hover:bg-gray-100'
                    }`}
                  >
                    <Mail className="w-3.5 h-3.5 text-[#E67E22]" />
                    <span>{t.contact.sendEmailBtn}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyMessage}
                    className={`py-3 px-4 text-xs font-semibold rounded-xl border transition-colors flex items-center justify-center gap-1.5 ${
                      theme === 'dark'
                        ? 'border-[#2E333F] text-gray-200 hover:text-white hover:bg-[#111318]'
                        : 'border-gray-300 text-gray-800 hover:bg-gray-100'
                    }`}
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{t.contact.copiedBtn}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>{t.contact.copyBriefBtn}</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
