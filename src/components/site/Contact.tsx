import { motion } from "framer-motion";
import { MapPin, Phone, Instagram, Send } from "lucide-react";

const phones = [
  { name: "Vikas Rajput", number: "9689840044" },
  { name: "Avinash Rajput", number: "7507246685" },
  { name: "Saurabh Dhandhukiya", number: "+91 8888059347" },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[color:var(--surface)]/40">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-primary uppercase tracking-[0.4em] text-xs font-semibold">Get In Touch</span>
          <h2 className="mt-4 font-display text-5xl md:text-6xl">Visit The Gym</h2>
          <p className="mt-4 text-muted-foreground">Karvand Naka, Shirpur — open every day.</p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="glass rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-lg gradient-red flex items-center justify-center shrink-0">
                  <MapPin className="text-primary-foreground" size={20} />
                </div>
                <div>
                  <div className="font-heading uppercase tracking-wider">Address</div>
                  <p className="mt-1 text-muted-foreground text-sm">Karvand Naka, Shirpur, Maharashtra</p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <div className="font-heading uppercase tracking-wider mb-4">Call Us</div>
              <div className="space-y-3">
                {phones.map((p) => (
                  <a
                    key={p.number}
                    href={`tel:${p.number.replace(/\s/g, "")}`}
                    className="flex items-center justify-between gap-4 px-4 py-3 rounded-lg border border-border hover:border-primary/60 hover:bg-primary/5 transition group"
                  >
                    <div>
                      <div className="text-sm font-medium">{p.name}</div>
                      <div className="text-xs text-muted-foreground">{p.number}</div>
                    </div>
                    <Phone size={18} className="text-primary group-hover:scale-110 transition" />
                  </a>
                ))}
              </div>
            </div>

            <a
              href="https://instagram.com/the_crazy_veins1_3_2022"
              target="_blank"
              rel="noreferrer"
              className="glass rounded-2xl p-6 flex items-center justify-between hover:border-primary/60 transition"
            >
              <div className="flex items-center gap-4">
                <div className="h-11 w-11 rounded-lg gradient-red flex items-center justify-center">
                  <Instagram className="text-primary-foreground" size={20} />
                </div>
                <div>
                  <div className="font-heading uppercase tracking-wider">Instagram</div>
                  <p className="text-sm text-muted-foreground">@the_crazy_veins1_3_2022</p>
                </div>
              </div>
              <Send size={18} className="text-primary" />
            </a>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll call you back."); }}
            className="glass rounded-2xl p-8"
          >
            <div className="font-heading uppercase tracking-wider mb-6 text-xl">Membership Inquiry</div>
            <div className="space-y-4">
              <Input label="Full Name" placeholder="Your name" />
              <Input label="Phone" placeholder="Your number" type="tel" />
              <Input label="Goal" placeholder="Fat loss, muscle gain..." />
              <label className="block">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Message</span>
                <textarea
                  rows={4}
                  className="mt-2 w-full bg-background/60 border border-border rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-primary transition resize-none"
                  placeholder="Tell us about your fitness goal..."
                />
              </label>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-md bg-primary text-primary-foreground font-semibold uppercase tracking-wider text-sm btn-glow"
              >
                Send Inquiry <Send size={16} />
              </button>
            </div>
          </motion.form>
        </div>

        <div className="mt-10 rounded-2xl overflow-hidden border border-border">
          <iframe
            src="https://www.google.com/maps?q=Karvand+Naka+Shirpur&output=embed"
            className="w-full h-[360px] grayscale-[40%]"
            loading="lazy"
            title="Crazy Veins Gym Location"
          />
        </div>
      </div>
    </section>
  );
}

function Input({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
      <input
        {...props}
        className="mt-2 w-full bg-background/60 border border-border rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-primary transition"
      />
    </label>
  );
}
