import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import t1 from "@/assets/trainer-1.jpg";
import t2 from "@/assets/trainer-2.jpg";
import t3 from "@/assets/trainer-3.jpg";

const trainers = [
  { img: t1, name: "Vikas Rajput", role: "Head Coach · Strength", exp: "8+ years" },
  { img: t2, name: "Avinash Rajput", role: "Personal Trainer · Hypertrophy", exp: "6+ years" },
  { img: t3, name: "Saurabh Dhandhukiya", role: "Transformation Coach", exp: "7+ years" },
];

export function Trainers() {
  return (
    <section id="trainers" className="relative py-24 md:py-32 bg-[color:var(--surface)]/40">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <span className="text-primary uppercase tracking-[0.4em] text-xs font-semibold">Our Team</span>
            <h2 className="mt-4 font-display text-5xl md:text-6xl">Meet The Trainers</h2>
          </div>
          <p className="max-w-md text-muted-foreground">Certified coaches with proven track records of transforming bodies and lives.</p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {trainers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden border border-border bg-card aspect-[4/5]"
            >
              <img
                src={t.img}
                alt={t.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">{t.exp}</div>
                <h3 className="mt-1 font-display text-3xl tracking-wider">{t.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t.role}</p>
                <a
                  href="https://instagram.com/the_crazy_veins1_3_2022"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-wider text-foreground/80 hover:text-primary"
                >
                  <Instagram size={14} /> Follow
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
