import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Maximize2, X } from "lucide-react";

const galleryItems = [
  { id: 1, category: "Clinic", title: "Modern Reception Area", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" },
  { id: 2, category: "Equipment", title: "Advanced Diagnostic Tools", image: "https://images.unsplash.com/photo-1581594658553-359424894493?auto=format&fit=crop&q=80&w=800" },
  { id: 3, category: "Clinic", title: "Private Consultation Room", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800" },
  { id: 4, category: "Surgery", title: "State-of-the-art OT", image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800" },
  { id: 5, category: "Clinic", title: "Patient Recovery Ward", image: "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?auto=format&fit=crop&q=80&w=800" },
  { id: 6, category: "Equipment", title: "High-Precision Imaging", image: "https://images.unsplash.com/photo-1516549171074-ba3e7568ff59?auto=format&fit=crop&q=80&w=800" },
  { id: 7, category: "Surgery", title: "Surgical Team at Work", image: "https://images.unsplash.com/photo-1579154235602-3c2c2446026b?auto=format&fit=crop&q=80&w=800" },
  { id: 8, category: "Clinic", title: "Exterior View", image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=800" },
  { id: 9, category: "Equipment", title: "Laboratory Facility", image: "https://images.unsplash.com/photo-1579154235602-3c2c2446026b?auto=format&fit=crop&q=80&w=800" },
];

const categories = ["All", "Clinic", "Equipment", "Surgery"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="flex flex-col">
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1445510861639-5651173bc5d5?auto=format&fit=crop&q=80&w=2000" alt="Gallery" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="container max-w-7xl mx-auto px-4 relative z-10 text-center space-y-4">
          <h1 className="text-5xl font-bold tracking-tight">Our Gallery</h1>
          <p className="text-blue-400 font-medium uppercase tracking-[0.3em] text-sm">A Glimpse into Our Excellence</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button key={category} onClick={() => setActiveCategory(category)} className={`px-8 py-2 rounded-full text-sm font-bold transition-all duration-300 ${activeCategory === category ? "bg-blue-600 text-white shadow-lg shadow-blue-200" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>{category}</button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div key={item.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }} className="group relative aspect-square rounded-3xl overflow-hidden cursor-pointer bg-slate-100" onClick={() => setSelectedImage(item.image)}>
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <div className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">{item.category}</div>
                    <div className="text-white font-bold text-xl">{item.title}</div>
                    <div className="absolute top-8 right-8 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0"><Maximize2 size={20} /></div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12" onClick={() => setSelectedImage(null)}>
            <button className="absolute top-8 right-8 text-white hover:text-blue-400 transition-colors" onClick={() => setSelectedImage(null)}><X size={40} /></button>
            <motion.img initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} src={selectedImage} alt="Full size" className="max-w-full max-h-full rounded-2xl shadow-2xl" referrerPolicy="no-referrer" onClick={(e) => e.stopPropagation()} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
