import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Scale } from "lucide-react";

export function BMI() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");

  const bmi = useMemo(() => {
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    if (!h || !w) return null;
    return +(w / (h * h)).toFixed(1);
  }, [height, weight]);

  const status = useMemo(() => {
    if (bmi === null) return null;
    if (bmi < 18.5) return { label: "Underweight", color: "text-blue-400", tip: "Focus on calorie surplus and strength training." };
    if (bmi < 25) return { label: "Normal", color: "text-green-400", tip: "You're on track. Maintain training & nutrition." };
    if (bmi < 30) return { label: "Overweight", color: "text-yellow-400", tip: "Combine cardio with strength and a slight deficit." };
    return { label: "Obese", color: "text-primary", tip: "Start with our Fat Loss Program — we've got you." };
  }, [bmi]);

  return (
    <section id="bmi" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary uppercase tracking-[0.4em] text-xs font-semibold">Free Tool</span>
            <h2 className="mt-4 font-display text-5xl md:text-6xl">BMI Calculator</h2>
            <p className="mt-4 text-muted-foreground">
              Know where you stand. Body Mass Index is a quick indicator of your health zone — use it as a starting point, then let our coaches build the plan.
            </p>
            <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
              <Scale className="text-primary" size={18} />
              Healthy range: 18.5 – 24.9
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8"
          >
            <div className="grid grid-cols-3 gap-4">
              <Field label="Height (cm)" value={height} onChange={setHeight} placeholder="170" />
              <Field label="Weight (kg)" value={weight} onChange={setWeight} placeholder="65" />
              <Field label="Age" value={age} onChange={setAge} placeholder="25" />
            </div>

            <div className="mt-8 rounded-xl p-6 bg-background/40 border border-border text-center">
              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Your BMI</div>
              <div className="mt-2 font-display text-7xl text-foreground">
                {bmi ?? "—"}
              </div>
              {status && (
                <motion.div
                  key={status.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2"
                >
                  <div className={`font-heading uppercase tracking-wider ${status.color}`}>{status.label}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{status.tip}</p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, value, onChange, placeholder }: { label: string; value: string; onChange: (v: string) => void; placeholder: string }) {
  return (
    <label className="block">
      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full bg-background/60 border border-border rounded-md px-3 py-2.5 text-lg font-heading focus:outline-none focus:border-primary transition"
      />
    </label>
  );
}
