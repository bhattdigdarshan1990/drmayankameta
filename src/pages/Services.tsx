import { motion } from "motion/react";
import { Stethoscope, Activity, Scissors, Microscope, HeartPulse, Brain, Bone, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <Stethoscope className="h-10 w-10" />,
    title: "General Consultation",
    description: "Comprehensive health check-ups and expert medical advice for all age groups.",
    features: ["Routine Checkups", "Health Screenings", "Preventive Care", "Chronic Disease Management"]
  },
  {
    icon: <Scissors className="h-10 w-10" />,
    title: "Advanced Surgery",
    description: "Minimally invasive and complex surgical procedures using state-of-the-art technology.",
    features: ["Laparoscopic Surgery", "General Surgery", "Post-Op Care", "Day Care Procedures"]
  },
  {
    icon: <Microscope className="h-10 w-10" />,
    title: "Diagnostic Services",
    description: "Accurate and timely diagnostic testing to ensure precise treatment planning.",
    features: ["Lab Tests", "Imaging Services", "Biopsies", "Specialized Diagnostics"]
  },
  {
    icon: <HeartPulse className="h-10 w-10" />,
    title: "Cardiology Care",
    description: "Specialized care for heart-related conditions and cardiovascular health.",
    features: ["ECG Monitoring", "Stress Tests", "Heart Health Plans", "Hypertension Control"]
  },
  {
    icon: <Brain className="h-10 w-10" />,
    title: "Neurological Consult",
    description: "Expert evaluation and management of nervous system disorders.",
    features: ["Headache Management", "Nerve Studies", "Stroke Prevention", "Cognitive Assessment"]
  },
  {
    icon: <Bone className="h-10 w-10" />,
    title: "Orthopedic Support",
    description: "Treatment for bone, joint, and muscle conditions to restore mobility.",
    features: ["Joint Pain Relief", "Fracture Care", "Sports Injuries", "Physiotherapy Referral"]
  },
  {
    icon: <Eye className="h-10 w-10" />,
    title: "Ophthalmology",
    description: "Comprehensive eye care and vision correction services.",
    features: ["Vision Testing", "Cataract Screening", "Glaucoma Care", "Eye Health Education"]
  },
  {
    icon: <Activity className="h-10 w-10" />,
    title: "Emergency Care",
    description: "24/7 immediate medical attention for urgent health situations.",
    features: ["Trauma Care", "Acute Illness", "Stabilization", "Urgent Referrals"]
  }
];

export default function Services() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2000"
            alt="Medical Services"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container max-w-7xl mx-auto px-4 relative z-10 text-center space-y-4">
          <h1 className="text-5xl font-bold tracking-tight">Our Medical Services</h1>
          <p className="text-blue-400 font-medium uppercase tracking-[0.3em] text-sm">Comprehensive Care for Every Patient</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Card className="h-full border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <CardHeader className="space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      {service.icon}
                    </div>
                    <CardTitle className="text-2xl font-bold text-slate-900">{service.title}</CardTitle>
                    <CardDescription className="text-slate-500 text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      {service.features.map((feature, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Button asChild variant="ghost" className="w-full justify-between hover:bg-blue-50 hover:text-blue-600 group/btn">
                      <Link to="/contact">
                        Learn More <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.3em]">How We Work</h2>
            <p className="text-4xl font-bold text-slate-900 tracking-tight">Your Path to Recovery</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Meet with Dr. Ameta to discuss your health concerns and goals." },
              { step: "02", title: "Diagnosis", desc: "Undergo necessary tests using advanced diagnostic equipment." },
              { step: "03", title: "Treatment", desc: "Receive personalized medical care based on your unique needs." },
              { step: "04", title: "Follow-up", desc: "Regular check-ups to ensure your recovery is on track." }
            ].map((item, i) => (
              <div key={i} className="relative space-y-4 text-center">
                <div className="text-6xl font-black text-blue-600/10 absolute -top-8 left-1/2 -translate-x-1/2 select-none">
                  {item.step}
                </div>
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mx-auto relative z-10">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-6 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px border-t-2 border-dashed border-slate-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.3em]">Common Questions</h2>
                <p className="text-4xl font-bold text-slate-900 tracking-tight">Frequently Asked Questions</p>
              </div>
              <div className="space-y-4">
                {[
                  { q: "Do I need an appointment?", a: "Yes, we recommend booking in advance to ensure minimal waiting time." },
                  { q: "What should I bring for my first visit?", a: "Please bring your ID, insurance card, and any previous medical records." },
                  { q: "Are emergency services available?", a: "Yes, we provide 24/7 emergency medical support." }
                ].map((faq, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                    <h4 className="font-bold text-slate-900">{faq.q}</h4>
                    <p className="text-slate-500 text-sm">{faq.a}</p>
                  </div>
                ))}
              </div>
              <Button asChild variant="outline" className="rounded-full px-8">
                <Link to="/contact">Ask Your Question</Link>
              </Button>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1505751172107-573225a91200?auto=format&fit=crop&q=80&w=1000"
                alt="Medical Consultation"
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
