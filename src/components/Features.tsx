import { Target, Cpu, PiggyBank } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

const features = [
  {
    title: "פשטות",
    description: "הופכים תהליכים בירוקרטיים מסובכים לקלים וברורים.",
    icon: Target,
    gradient: "from-[#EC4899] to-[#DB2777]",
  },
  {
    title: "טכנולוגיה",
    description: "בינה מלאכותית שעובדת בשבילכם, לא להפך.",
    icon: Cpu,
    gradient: "from-[#EC4899] to-[#DB2777]",
  },
  {
    title: "חיסכון",
    description: "בזמן, באנרגיה ובכסף שמגיע לכם.",
    icon: PiggyBank,
    gradient: "from-[#EC4899] to-[#DB2777]",
  },
];

export const Features = () => {
  return (
    <section className="py-20 bg-white" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            כל הסיבות <span className="bg-gradient-to-l from-sky-500 via-violet-500 to-pink-500 bg-clip-text text-transparent">לבחור בנו</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6"
            >
              <div className={cn("w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-md bg-gradient-to-br text-white", feature.gradient)}>
                <feature.icon className="w-10 h-10" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
