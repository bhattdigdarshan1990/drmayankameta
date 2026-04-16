import { motion, AnimatePresence } from "motion/react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import * as React from "react";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=2000"
            alt="Contact Us"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container max-w-7xl mx-auto px-4 relative z-10 text-center space-y-4">
          <h1 className="text-5xl font-bold tracking-tight">Contact Us</h1>
          <p className="text-blue-400 font-medium uppercase tracking-[0.3em] text-sm">Get in Touch with Our Team</p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info */}
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-slate-900 tracking-tight">How Can We Help You?</h2>
                <p className="text-slate-500 text-lg">
                  Whether you have a question about our services, need to book an appointment, or want to provide feedback, we're here to listen.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                    <Phone size={24} />
                  </div>
                  <h4 className="font-bold text-slate-900">Phone</h4>
                  <p className="text-slate-500 text-sm">+91 98765 43210<br />+91 91234 56789</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                    <Mail size={24} />
                  </div>
                  <h4 className="font-bold text-slate-900">Email</h4>
                  <p className="text-slate-500 text-sm">contact@drmayankameta.com<br />support@drmayankameta.com</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                    <MapPin size={24} />
                  </div>
                  <h4 className="font-bold text-slate-900">Location</h4>
                  <p className="text-slate-500 text-sm">123 Medical Plaza, Health City,<br />Udaipur, Rajasthan 313001</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                    <Clock size={24} />
                  </div>
                  <h4 className="font-bold text-slate-900">Working Hours</h4>
                  <p className="text-slate-500 text-sm">Mon - Sat: 09:00 AM - 08:00 PM<br />Sun: Emergency Only</p>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video rounded-3xl bg-slate-100 overflow-hidden relative group">
                <img 
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000" 
                  alt="Map Placeholder" 
                  className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white px-6 py-3 rounded-full shadow-xl font-bold text-slate-900 flex items-center gap-2">
                    <MapPin className="text-blue-600" size={20} /> View on Google Maps
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="relative">
              <Card className="border-none shadow-2xl shadow-slate-200 p-8 md:p-12 rounded-[2rem] sticky top-32">
                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="space-y-8"
                    >
                      <div className="space-y-2 text-center">
                        <h3 className="text-2xl font-bold text-slate-900">Send Us a Message</h3>
                        <p className="text-slate-500">We'll get back to you within 24 hours.</p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                            <Input required placeholder="John Doe" className="h-12 rounded-xl border-slate-200 focus:border-blue-600 focus:ring-blue-600" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                            <Input required type="email" placeholder="john@example.com" className="h-12 rounded-xl border-slate-200 focus:border-blue-600 focus:ring-blue-600" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Subject</label>
                          <Input required placeholder="Appointment Inquiry" className="h-12 rounded-xl border-slate-200 focus:border-blue-600 focus:ring-blue-600" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Message</label>
                          <Textarea required placeholder="How can we help you?" className="min-h-[150px] rounded-xl border-slate-200 focus:border-blue-600 focus:ring-blue-600" />
                        </div>
                        <Button type="submit" className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-200">
                          Send Message <Send className="ml-2 h-5 w-5" />
                        </Button>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12 space-y-6"
                    >
                      <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle2 size={48} />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-slate-900">Message Sent!</h3>
                        <p className="text-slate-500">Thank you for reaching out. Dr. Ameta's team will contact you shortly.</p>
                      </div>
                      <Button onClick={() => setSubmitted(false)} variant="outline" className="rounded-full px-8">
                        Send Another Message
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
