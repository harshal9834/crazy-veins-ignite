import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const images = [
  { src: g1, span: "row-span-2" },
  { src: g2, span: "" },
  { src: g3, span: "row-span-2" },
  { src: g4, span: "" },
  { src: g5, span: "row-span-2" },
  { src: g6, span: "" },
];

export function Gallery() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="gallery" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-primary uppercase tracking-[0.4em] text-xs font-semibold">Gallery</span>
          <h2 className="mt-4 font-display text-5xl md:text-6xl">Inside The Grind</h2>
          <p className="mt-4 text-muted-foreground">Real members. Real workouts. Real intensity.</p>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 auto-rows-[180px] md:auto-rows-[220px] gap-3">
          {images.map((img, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(img.src)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-xl border border-border ${img.span}`}
            >
              <img
                src={img.src}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition" />
              <div className="absolute inset-0 ring-0 group-hover:ring-2 ring-primary/60 transition rounded-xl" />
            </motion.button>
          ))}
        </div>
      </div>

      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex items-center justify-center p-6"
        >
          <button
            className="absolute top-6 right-6 h-10 w-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary"
            onClick={() => setActive(null)}
          >
            <X size={18} />
          </button>
          <motion.img
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            src={active}
            alt=""
            className="max-h-[85vh] max-w-full rounded-xl"
          />
        </motion.div>
      )}
    </section>
  );
}
