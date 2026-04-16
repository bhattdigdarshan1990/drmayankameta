import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Star, Users, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden bg-slate-900 -mt-[116px]">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero.png"
            alt="Gastroenterology Specialist"
            className="w-full h-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/60 to-slate-900" />
          <div className="absolute inset-0 bg-blue-500/5 mix-blend-overlay" />
        </div>

        <div className="container max-w-7xl mx-auto px-4 relative z-10 pt-[116px]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Trusted Medical Professional
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              Advanced Care for a <span className="text-blue-500">Healthier</span> Tomorrow
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed max-w-lg">
              Dr. Mayank Ameta provides world-class medical expertise with a compassionate touch, ensuring every patient receives personalized treatment.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 text-base font-semibold">
                <Link to="/contact">Book Appointment <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-slate-700 text-white hover:bg-slate-800 rounded-full px-8 h-14 text-base font-semibold">
                <Link to="/services">Our Services</Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-slate-800">
              <div className="space-y-1">
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-sm text-slate-400 uppercase tracking-wider font-medium">Years Exp.</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-white">10k+</div>
                <div className="text-sm text-slate-400 uppercase tracking-wider font-medium">Patients</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-white">99%</div>
                <div className="text-sm text-slate-400 uppercase tracking-wider font-medium">Success</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.3em]">Why Choose Us</h2>
            <p className="text-4xl font-bold text-slate-900 tracking-tight">Excellence in Every Treatment</p>
            <p className="text-slate-500 text-lg">We combine advanced technology with years of experience to provide the best possible outcomes for our patients.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="h-8 w-8 text-blue-600" />,
                title: "Expert Specialist",
                desc: "Highly qualified medical professional with extensive training and board certifications."
              },
              {
                icon: <Users className="h-8 w-8 text-blue-600" />,
                title: "Patient-Centered",
                desc: "We prioritize your comfort and well-being, creating personalized care plans for every individual."
              },
              {
                icon: <Clock className="h-8 w-8 text-blue-600" />,
                title: "Modern Facilities",
                desc: "Equipped with state-of-the-art medical technology for accurate diagnosis and effective treatment."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="border-none shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-200/30 transition-all duration-300 group">
                  <CardContent className="p-8 space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
                    <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=1000"
                  alt="Dr. Mayank Ameta"
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 bg-white p-8 rounded-2xl shadow-xl z-20 hidden md:block">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <Star className="fill-current" size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Top Rated</div>
                    <div className="text-xs text-slate-500">Medical Professional</div>
                  </div>
                </div>
                <p className="text-sm text-slate-600 italic">"Committed to providing the highest standards of healthcare."</p>
              </div>
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.3em]">About Dr. Mayank Ameta</h2>
                <p className="text-4xl font-bold text-slate-900 tracking-tight">Leading the Way in Medical Excellence</p>
              </div>
              
              <p className="text-slate-600 text-lg leading-relaxed">
                Dr. Mayank Ameta is a renowned specialist with over 15 years of experience in the medical field. His dedication to patient care and continuous learning has made him a trusted name in the community.
              </p>

              <ul className="space-y-4">
                {[
                  "Board Certified Medical Specialist",
                  "Advanced Surgical Techniques",
                  "Personalized Patient Care Plans",
                  "State-of-the-art Diagnostic Tools"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="text-blue-600 h-5 w-5" />
                    {item}
                  </li>
                ))}
              </ul>

              <Button asChild className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-8">
                <Link to="/about">Read More About Us</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="container max-w-7xl mx-auto px-4 relative z-10 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Ready to Start Your Journey to Better Health?</h2>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto">
            Schedule your consultation today and experience the difference of personalized, expert medical care.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-10 h-14 text-lg font-bold">
              <Link to="/contact">Book Appointment Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
