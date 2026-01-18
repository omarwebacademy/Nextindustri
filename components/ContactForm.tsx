import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { motion } from 'framer-motion';
import { UploadCloud, Mail, Send } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const company = formData.get('company') as string;
    const message = formData.get('message') as string;
    
    // Construct email body
    const emailBody = `
Nom / Name: ${name}
Email: ${email}
Société / Company: ${company}

Message:
${message}

--------------------------------------------------
(Veuillez joindre vos fichiers / Please attach your files manually)
    `.trim();

    const subject = `NextIndustri Urgent Inquiry: ${company || name}`;
    const recipient = "contact@nextindustri.com"; 

    // Create mailto link
    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    // Trigger email client
    window.location.href = mailtoUrl;

    // Show success state
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ scale: 0 }} animate={{ scale: 1 }}
            className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-accent-50 mb-8"
          >
            <Mail className="h-12 w-12 text-accent-600" />
          </motion.div>
          <h2 className="text-3xl font-bold text-industrial-900 mb-6">{t.contact.form.success}</h2>
          <p className="text-industrial-600 mb-8 max-w-lg mx-auto">
             {/* Fallback text if translation update is delayed, though t.contact.form.success is used */}
             Votre client de messagerie a été ouvert avec les détails de votre demande.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="inline-flex items-center gap-2 text-accent-600 font-bold hover:text-accent-700 hover:underline transition-all"
          >
            <span>{t.nav.home}</span>
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-white border-t border-industrial-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
        >
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-industrial-900 sm:text-4xl mb-6 tracking-tight">
                    {t.contact.title}
                </h2>
                <p className="text-lg text-industrial-600 font-light">
                    {t.contact.subtitle}
                </p>
            </div>

          <div className="bg-white rounded-3xl shadow-2xl shadow-industrial-900/5 overflow-hidden border border-industrial-100">
            <div className="bg-industrial-900 h-2 w-full"></div> 
            <form onSubmit={handleSubmit} className="p-8 sm:p-12 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-industrial-700 mb-2">
                    {t.contact.form.name} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="block w-full rounded-xl border-industrial-200 bg-industrial-50/50 shadow-sm focus:border-accent-500 focus:ring-accent-500/20 py-3 px-4 transition-all hover:bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-industrial-700 mb-2">
                    {t.contact.form.email} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="block w-full rounded-xl border-industrial-200 bg-industrial-50/50 shadow-sm focus:border-accent-500 focus:ring-accent-500/20 py-3 px-4 transition-all hover:bg-white"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-industrial-700 mb-2">
                  {t.contact.form.company}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="block w-full rounded-xl border-industrial-200 bg-industrial-50/50 shadow-sm focus:border-accent-500 focus:ring-accent-500/20 py-3 px-4 transition-all hover:bg-white"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-industrial-700 mb-2">
                  {t.contact.form.message} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="block w-full rounded-xl border-industrial-200 bg-industrial-50/50 shadow-sm focus:border-accent-500 focus:ring-accent-500/20 py-3 px-4 transition-all hover:bg-white resize-none"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-industrial-700 mb-2">
                  {t.contact.form.file}
                </label>
                <motion.div 
                    whileHover={{ scale: 1.01 }}
                    className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-industrial-200 border-dashed rounded-xl hover:border-accent-400 hover:bg-accent-50/10 transition-colors cursor-pointer group"
                >
                  <div className="space-y-2 text-center">
                    <UploadCloud className="mx-auto h-12 w-12 text-industrial-400 group-hover:text-accent-500 transition-colors" />
                    <div className="flex text-sm text-industrial-600 justify-center">
                      <label htmlFor="file-upload" className="relative cursor-pointer rounded-md font-medium text-accent-600 hover:text-accent-500 focus-within:outline-none">
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                      </label>
                    </div>
                    <p className="text-xs text-industrial-400">PNG, JPG, PDF up to 10MB (Attach in email)</p>
                  </div>
                </motion.div>
              </div>

              <div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full flex justify-center items-center gap-2 py-4 px-6 border border-transparent rounded-xl shadow-lg text-lg font-bold text-white bg-industrial-900 hover:bg-industrial-800 hover:shadow-xl transition-all"
                >
                  <Send className="w-5 h-5" />
                  {t.contact.form.submit}
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};