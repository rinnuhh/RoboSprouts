import React, { useState } from 'react';
import { Send, Loader2, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('http://localhost:5001/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => null);

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '' });
      } else {
        setStatus('error');
        setErrorMessage(data?.message || 'Server returned an error. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Could not connect to the server. Please check if your backend is running on port 5001.');
    }
  };

  return (
    <section id="enroll" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-50 rounded-full blur-3xl -z-10 opacity-50"></div>
      
      <div className="max-w-xl mx-auto">
        <div className="glass-morphism p-8 md:p-12 rounded-3xl relative">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Reserve Your Spot Today!</h2>
            <p className="text-slate-500">Only 15 slots left for the July batch.</p>
          </div>

          {status === 'success' ? (
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-10"
            >
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Success!</h3>
              <p className="text-slate-600 mb-6">We've received your enquiry. Our counselor will contact you shortly.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="text-indigo-600 font-bold hover:underline"
              >
                Submit another enquiry
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Parent/Guardian Name</label>
                <input
                  required
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                <input
                  required
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                <input
                  required
                  type="tel"
                  placeholder="+91 9876543210"
                  className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <button
                disabled={status === 'loading'}
                className="w-full btn-premium flex items-center justify-center gap-2 group"
                type="submit"
              >
                {status === 'loading' ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    Enroll Now
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              {status === 'error' && (
                <p className="text-red-500 text-sm text-center font-medium">{errorMessage}</p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
