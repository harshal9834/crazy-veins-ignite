import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "999",
    duration: "/month",
    features: ["Full Gym Access", "Cardio Zone", "Locker Facility", "Open 6 AM – 10 PM"],
    popular: false,
  },
  {
    name: "Standard",
    price: "1,499",
    duration: "/month",
    features: ["Everything in Basic", "Trainer Support", "Diet Guidance", "Workout Plan"],
    popular: true,
  },
  {
    name: "Premium",
    price: "2,499",
    duration: "/month",
    features: ["Personal Trainer", "Full Body Transformation", "Advanced Nutrition Support", "Priority Booking"],
    popular: false,
  },
];

export function Plans() {
  return (
    <section id="plans" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-primary uppercase tracking-[0.4em] text-xs font-semibold">Membership</span>
          <h2 className="mt-4 font-display text-5xl md:text-6xl">Choose Your Plan</h2>
          <p className="mt-4 text-muted-foreground">Flexible plans for every goal. Cancel anytime.</p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 border transition-all ${
                p.popular
                  ? "border-primary bg-card neon-border md:scale-105"
                  : "border-border bg-card hover:border-primary/40"
              }`}
            >
              {p.popular && (
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-primary text-primary-foreground"
                >
                  <Zap size={12} /> Most Popular
                </motion.div>
              )}
              <h3 className="font-display text-3xl tracking-wider">{p.name}</h3>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-xl font-semibold text-muted-foreground">₹</span>
                <span className="font-display text-6xl text-foreground">{p.price}</span>
                <span className="pb-2 text-sm text-muted-foreground">{p.duration}</span>
              </div>
              <ul className="mt-8 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Check size={12} />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 inline-flex w-full items-center justify-center px-5 py-3 rounded-md font-semibold uppercase tracking-wider text-sm transition ${
                  p.popular
                    ? "bg-primary text-primary-foreground btn-glow"
                    : "border border-border hover:border-primary hover:text-primary"
                }`}
              >
                Join Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
