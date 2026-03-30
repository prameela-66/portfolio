import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      alert("Thank you. I will get back to you as soon as possible.");
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-12">
        <motion.div
           whileInView={{ opacity: [0, 1], x: [-50, 0] }}
           transition={{ duration: 0.5 }}
           className="flex-1"
        >
          <header className="mb-8">
            <p className="text-emerald-400 font-medium text-lg uppercase mb-2">Get In Touch</p>
            <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Contact</h2>
            <div className="w-20 h-1.5 bg-emerald-500 rounded-full mt-4"></div>
          </header>

          <p className="text-slate-400 text-lg mb-10 font-light leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-400">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-white font-bold">Email</p>
                <p className="text-slate-400">lalli@example.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-400">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-white font-bold">Location</p>
                <p className="text-slate-400">San Francisco, CA</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-400">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-white font-bold">Phone</p>
                <p className="text-slate-400">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: [0, 1], x: [50, 0] }}
          transition={{ duration: 0.5 }}
          className="flex-1 bg-slate-900 border border-slate-800 p-8 rounded-3xl"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-slate-800 py-4 px-6 placeholder:text-slate-500 text-white rounded-xl border-none outline-none font-medium focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-slate-800 py-4 px-6 placeholder:text-slate-500 text-white rounded-xl border-none outline-none font-medium focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">Your Message</span>
              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="bg-slate-800 py-4 px-6 placeholder:text-slate-500 text-white rounded-xl border-none outline-none font-medium focus:ring-2 focus:ring-emerald-500 transition-all duration-300 resize-none"
                required
              />
            </label>

            <button
              type="submit"
              className="bg-emerald-500 py-4 px-8 outline-none w-fit text-white font-bold shadow-md shadow-emerald-500/20 rounded-xl hover:bg-emerald-600 transition-all duration-300 flex items-center gap-2"
            >
              {loading ? "Sending..." : "Send Message"}
              {!loading && <Send size={20} />}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
