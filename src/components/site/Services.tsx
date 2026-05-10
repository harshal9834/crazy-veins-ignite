import { motion } from "framer-motion";
import { Dumbbell, UserCog, Flame, Activity, HeartPulse, Apple, Sparkles, Trophy } from "lucide-react";

const services = [
  { icon: Dumbbell, title: "Weight Training", desc: "Build raw strength with free weights, racks and platforms." },
  { icon: UserCog, title: "Personal Training", desc: "1-on-1 coaching tailored to your goals and body." },
  { icon: Flame, title: "Fat Loss Programs", desc: "Burn fat, reveal definition and feel lighter." },
  { icon: Trophy, title: "Muscle Building", desc: "Progressive overload programs for serious gains." },
  { icon: Activity, title: "Cardio Training", desc: "Modern cardio zone with treadmills, bikes and HIIT." },
  { icon: HeartPulse, title: "Strength Training", desc: "Powerlifting style training to increase your big 3." },
  { icon: Apple, title: "Diet Guidance", desc: "Personalized nutrition plans for real results." },
  { icon: Sparkles, title: "Body Transformation", desc: "Complete 12-week makeovers with full support." },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-[color:var(--surface)]/40">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-primary uppercase tracking-[0.4em] text-xs font-semibold">What We Offer</span>
          <h2 className="mt-4 font-display text-5xl md:text-6xl">Our Services</h2>
          <p className="mt-4 text-muted-foreground">
            Everything you need to train, recover and dominate — under one roof.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-xl border border-border bg-card p-6 hover:border-primary/60 transition-all hover:-translate-y-1"
            >
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition pointer-events-none"
                   style={{ boxShadow: "0 20px 60px -20px var(--primary-glow)" }} />
              <div className="relative w-12 h-12 rounded-lg gradient-red flex items-center justify-center mb-5">
                <s.icon className="text-primary-foreground" size={22} />
              </div>
              <h3 className="font-heading text-xl uppercase tracking-wider">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
