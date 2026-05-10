import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Rohan P.", text: "The best gym in Shirpur with excellent trainers and atmosphere. Lost 12kg in 4 months!", rating: 5 },
  { name: "Anjali S.", text: "Loved the energy and the crew. Coaches genuinely care about your progress.", rating: 5 },
  { name: "Karan M.", text: "Top-tier equipment, professional staff and great vibes. Highly recommended.", rating: 5 },
  { name: "Pooja K.", text: "Personalized diet plan changed everything. Feeling stronger and lighter.", rating: 5 },
];

export function Testimonials() {
  return (
    <section className="relative py-24 md:py-32 bg-[color:var(--surface)]/40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-primary uppercase tracking-[0.4em] text-xs font-semibold">Testimonials</span>
          <h2 className="mt-4 font-display text-5xl md:text-6xl">What Members Say</h2>
        </div>
      </div>

      <div className="mt-14 relative">
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...reviews, ...reviews].map((r, i) => (
            <div key={i} className="w-[340px] md:w-[420px] glass rounded-2xl p-7 shrink-0">
              <Quote className="text-primary/60" size={28} />
              <p className="mt-4 text-foreground/90 leading-relaxed">"{r.text}"</p>
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <div className="font-heading text-lg uppercase tracking-wider">{r.name}</div>
                  <div className="text-xs text-muted-foreground">Verified Member</div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: r.rating }).map((_, k) => (
                    <Star key={k} size={14} className="fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
