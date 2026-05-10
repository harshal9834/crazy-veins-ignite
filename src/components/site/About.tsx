import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { Dumbbell, Flame, Trophy, Users } from "lucide-react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 1.6, bounce: 0 });

  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, to, mv]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (ref.current) ref.current.textContent = Math.floor(v).toLocaleString() + suffix;
    });
  }, [spring, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const stats = [
  { icon: Users, label: "Active Members", value: 500, suffix: "+" },
  { icon: Trophy, label: "Transformations", value: 250, suffix: "+" },
  { icon: Dumbbell, label: "Modern Equipments", value: 80, suffix: "+" },
  { icon: Flame, label: "Years of Excellence", value: 6, suffix: "" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary uppercase tracking-[0.4em] text-xs font-semibold">About Us</span>
            <h2 className="mt-4 font-display text-5xl md:text-6xl leading-[0.95]">
              Where strength <br /> meets <span className="text-primary">obsession.</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-base md:text-lg leading-relaxed">
              The Crazy Veins Gym is a premium fitness center in Shirpur dedicated to helping people achieve strength, confidence and a healthy lifestyle. We combine modern equipment, certified trainers and a powerful environment to push you past your limits.
            </p>
            <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">
              Whether you're chasing your first pull-up or your first stage trophy — this is where transformation happens.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Strength", "Hypertrophy", "Fat Loss", "Functional", "Powerlifting"].map((t) => (
                <span key={t} className="px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider border border-border bg-card">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-5">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="glass rounded-xl p-6 md:p-8 hover:border-primary/50 transition group"
              >
                <s.icon className="text-primary mb-4 group-hover:scale-110 transition" size={28} />
                <div className="font-display text-4xl md:text-5xl text-foreground">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
