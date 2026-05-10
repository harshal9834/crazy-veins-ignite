import { Instagram, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
export function Footer() {
  return (
    <footer className="relative border-t border-border pt-16 pb-8 overflow-hidden">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/20 blur-[120px] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3">
              <img src={logo} alt="The Crazy Veins Gym" className="h-16 w-16 md:h-20 md:w-20 object-contain" />
              <div>
                <div className="font-display text-lg tracking-wider">CRAZY VEINS</div>
                <div className="text-[10px] text-muted-foreground tracking-[0.3em]">GYM · SHIRPUR</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">Build your best body. Premium fitness in Shirpur.</p>
          </div>

          <div>
            <div className="font-heading uppercase tracking-wider text-sm mb-4">Quick Links</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["About", "Services", "Plans", "Trainers", "Gallery", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="hover:text-primary transition">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-heading uppercase tracking-wider text-sm mb-4">Services</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Weight Training", "Personal Training", "Fat Loss", "Muscle Building", "Diet Guidance"].map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-heading uppercase tracking-wider text-sm mb-4">Contact</div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><MapPin size={14} className="text-primary mt-0.5" /> Karvand Naka, Shirpur</li>
              <li className="flex items-start gap-2"><Phone size={14} className="text-primary mt-0.5" /> 9689840044</li>
              <li className="flex items-start gap-2"><Phone size={14} className="text-primary mt-0.5" /> 7507246685</li>
              <li><a href="https://instagram.com/the_crazy_veins1_3_2022" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary"><Instagram size={14} /> @the_crazy_veins1_3_2022</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} The Crazy Veins Gym. All rights reserved.</div>
          <div>Made with intensity in Shirpur 🔥</div>
        </div>
      </div>
    </footer>
  );
}
