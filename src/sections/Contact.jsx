import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-white/[0.01]">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.div 
          className="text-center mb-20 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight uppercase leading-tight py-2">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-extrabold">Touch</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>
        
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <motion.div 
            className="lg:col-span-5 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="p-10 bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-2xl shadow-3xl hover:border-purple-500/30 transition-all relative group overflow-hidden">
              <MessageSquare className="absolute top-6 right-6 text-purple-400/20 group-hover:text-purple-400/40 transition-colors" />
              <h3 className="text-3xl font-extrabold mb-10 flex items-center gap-4 uppercase tracking-tight">
                Ready for Impact?
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-center group/item transition-all">
                  <div className="p-4 bg-white/5 text-blue-400 border border-white/10 rounded-2xl mr-6 group-hover/item:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-1">Direct Line</h4>
                    <p className="text-xl font-black text-white group-hover/item:text-blue-400 transition-colors">guntupalliprameela9@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center group/item transition-all">
                  <div className="p-4 bg-white/5 text-purple-400 border border-white/10 rounded-2xl mr-6 group-hover/item:scale-110 transition-transform">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-1">Voice Chat</h4>
                    <p className="text-xl font-black text-white group-hover/item:text-purple-400 transition-colors">9848676665</p>
                  </div>
                </div>
                
                <div className="flex items-center group/item transition-all">
                  <div className="p-4 bg-white/5 text-green-400 border border-white/10 rounded-2xl mr-6 group-hover/item:scale-110 transition-transform">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-1">Operations</h4>
                    <p className="text-xl font-black text-white group-hover/item:text-green-400 transition-colors">Andhra Pradesh, India</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="p-10 bg-white/[0.03] border border-white/5 rounded-[3rem] backdrop-blur-3xl shadow-3xl relative overflow-hidden group">
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div 
                    className="absolute inset-0 bg-secondary/95 backdrop-blur-xl rounded-[3rem] flex flex-col items-center justify-center z-20"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                  >
                    <CheckCircle size={80} className="text-green-400 mb-6 drop-shadow-[0_0_20px_rgba(74,222,128,0.5)]" />
                    <h3 className="text-4xl font-black mb-4 tracking-tight">MISSION SUCCESSFUL</h3>
                    <p className="text-gray-400 text-lg font-medium">I'll get back to you across the wire shortly.</p>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Identify Yourself</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#0a0a0a]/50 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500 focus:outline-none transition-all text-white font-bold"
                    placeholder="Lalli Kumar"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Electronic Mail</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#0a0a0a]/50 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500 focus:outline-none transition-all text-white font-bold"
                    placeholder="lalli@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-10 space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Transmission Details</label>
                <textarea 
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[#0a0a0a]/50 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500 focus:outline-none transition-all text-white font-bold resize-none"
                  placeholder="Tell me about your vision..."
                />
              </div>
              
              <button 
                type="submit"
                className="w-full py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-2xl font-black text-xl uppercase tracking-widest shadow-[0_5px_30px_rgba(109,40,217,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-4 group"
              >
                Launch Transmission
                <Send size={24} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
