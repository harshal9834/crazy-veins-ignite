import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import { ArrowRight, Phone } from "lucide-react";
import hero from "@/assets/hero.jpg";
export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={hero} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
        <div className="absolute inset-0 bg-radial-fade" />
        <div className="absolute inset-0 bg-grid opacity-30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 pt-32 pb-20 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-primary"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Premium Gym · Karvand Naka, Shirpur
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] leading-[0.9] tracking-tight"
          >
            NO PAIN. <br />
            <span className="text-primary text-glow">NO GAIN.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground"
          >
            Transform your body with professional training, modern equipment and real results — at the most powerful fitness destination in Shirpur.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#plans"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-md bg-primary text-primary-foreground font-semibold uppercase tracking-wider text-sm btn-glow"
            >
              Join Now
              <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
            </a>
            <a
              href="#plans"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-md border border-border bg-card/40 backdrop-blur font-semibold uppercase tracking-wider text-sm hover:border-primary hover:text-primary transition"
            >
              View Plans
            </a>
            <a
              href="tel:+919689840044"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-md border border-border bg-card/40 backdrop-blur font-semibold uppercase tracking-wider text-sm hover:border-primary hover:text-primary transition"
            >
              <Phone size={16} /> Call Us
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-1/3 aspect-square max-w-[400px]"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full animate-pulse-slow"></div>
            <img 
              src={logo} 
              alt="Gym Logo" 
              className="relative z-10 w-full h-full object-contain opacity-100 transition-all duration-700" 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
