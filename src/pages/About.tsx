import { motion } from "motion/react";
import { Award, BookOpen, Heart, ShieldCheck, GraduationCap, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2000"
            alt="Medical Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container max-w-7xl mx-auto px-4 relative z-10 text-center space-y-4">
          <h1 className="text-5xl font-bold tracking-tight">About Dr. Mayank Ameta</h1>
          <p className="text-blue-400 font-medium uppercase tracking-[0.3em] text-sm">Dedicated to Your Well-being</p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-slate-900 tracking-tight">A Legacy of Medical Excellence</h2>
                <div className="h-1.5 w-20 bg-blue-600 rounded-full" />
              </div>
              
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Dr. Mayank Ameta is a highly accomplished medical professional with a passion for providing comprehensive and compassionate care. With over 15 years of experience, he has established himself as a leader in his field, known for his clinical expertise and patient-centered approach.
                </p>
                <p>
                  After completing his medical education from prestigious institutions, Dr. Ameta pursued advanced training in specialized surgical techniques and diagnostic procedures. His commitment to staying at the forefront of medical advancements ensures that his patients receive the most effective and up-to-date treatments available.
                </p>
                <p>
                  Beyond his clinical practice, Dr. Ameta is actively involved in medical research and community health initiatives. He believes that education and prevention are key to a healthier society and regularly conducts workshops and seminars for both medical professionals and the general public.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">MBBS, MS</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider">Education</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">15+ Years</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider">Experience</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-slate-50">
                <img
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=1000"
                  alt="Doctor at Work"
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center text-white text-center p-4 shadow-xl">
                <div className="font-bold text-2xl leading-none">Top<br /><span className="text-sm font-normal">Expert</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.3em]">Our Core Values</h2>
            <p className="text-4xl font-bold text-slate-900 tracking-tight">The Principles That Guide Us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Compassion",
                desc: "Treating every patient with kindness, empathy, and respect."
              },
              {
                icon: <ShieldCheck className="h-8 w-8" />,
                title: "Integrity",
                desc: "Maintaining the highest ethical standards in all our medical practices."
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Excellence",
                desc: "Striving for the best possible outcomes through continuous improvement."
              },
              {
                icon: <BookOpen className="h-8 w-8" />,
                title: "Innovation",
                desc: "Embracing new technologies and methods to enhance patient care."
              }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="mx-auto w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{value.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{value.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.3em]">Our Journey</h2>
            <p className="text-4xl font-bold text-slate-900 tracking-tight">Milestones of Excellence</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
            {[
              { year: "2008", title: "Medical Graduation", desc: "Completed MBBS with honors from a top medical college." },
              { year: "2012", title: "Specialization", desc: "Obtained MS in Specialized Surgery with a focus on advanced techniques." },
              { year: "2015", title: "Clinic Foundation", desc: "Established his own private practice to provide personalized care." },
              { year: "2020", title: "Advanced Center", desc: "Expanded the clinic into a multi-specialty medical center." },
              { year: "2024", title: "Innovation Award", desc: "Recognized for contributions to advanced surgical procedures." }
            ].map((item, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-blue-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-1">
                    <div className="font-bold text-blue-600">{item.year}</div>
                  </div>
                  <div className="text-slate-900 font-bold text-lg mb-2">{item.title}</div>
                  <div className="text-slate-500 text-sm">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
