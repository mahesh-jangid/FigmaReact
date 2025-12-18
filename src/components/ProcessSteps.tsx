import { FileEdit, UploadCloud, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { cn } from '../lib/utils';

const steps = [
  {
    id: 1,
    title: 'מילוי פרטים',
    description:
      'מילוי מהיר של פרטי התביעה והנתונים האישיים עם ליווי בוט AI שמנחה בכל צעד.',
    icon: FileEdit,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    id: 2,
    title: 'צירוף מסמכים',
    description: 'העלאת מסמכים ותמונות בקלות, ישירות מהמחשב או מהטלפון.',
    icon: UploadCloud,
    color: 'bg-purple-50 text-purple-600',
  },
  {
    id: 3,
    title: 'הגשה וסיום',
    description:
      'סקירה סופית, תשלום מאובטח והגשה מקוונת של התביעה בלחיצה אחת.',
    icon: CheckCircle2,
    color: 'bg-green-50 text-green-600',
  },
];

export const ProcessSteps = () => {
  return (
    <section
      className="relative -mt-10 z-10 rounded-t-[40px] bg-white py-16 shadow-sm"
      dir="ltr"
    >
      <div className="container mx-auto max-w-5xl px-4 md:px-8">
        {/* Title */}
        <div className="mb-12 text-center" dir="rtl">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            איך זה עובד?{' '}
            <span className="bg-gradient-to-l from-sky-500 via-violet-500 to-pink-500 bg-clip-text text-transparent">
              פשוט.
            </span>
          </h2>
        </div>

        {/* Layout: image left, steps right */}
        <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)]">
          {/* Left: circular image */}
          <div className="flex justify-center md:justify-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="relative h-64 w-64 overflow-visible rounded-full bg-white md:h-80 md:w-80"
            >
              {/* Outer rings */}
              <div className="absolute inset-0 rounded-full border border-slate-100" />
              <div className="absolute inset-6 rounded-full border border-slate-100" />

              {/* Inner photo circle */}
              <div className="absolute inset-12 overflow-hidden rounded-full bg-slate-100">
                <img
                  src="https://images.pexels.com/photos/1181681/pexels-photo-1181681.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="אישה עובדת מול מחשב נייד"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Right: steps + CTA */}
          <div className="relative" dir="rtl">
            {/* Vertical connector line */}
            <div className="pointer-events-none absolute right-[30px] top-3 hidden h-[calc(100%-3rem)] w-px bg-slate-100 md:block" />

            <div className="space-y-10">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: index * 0.18 }}
                  className="relative flex gap-4 md:gap-6"
                >
                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className={cn(
                        'flex h-12 w-12 items-center justify-center rounded-2xl border border-white shadow-none md:h-14 md:w-14',
                        step.color,
                      )}
                    >
                      <step.icon className="h-6 w-6 md:h-7 md:w-7" />
                    </div>
                  </div>
                  <div className="pt-1.5">
                    <span className="mb-1 block text-sm font-bold text-pink-500">
                      שלב {step.id}
                    </span>
                    <h3 className="mb-1 text-lg font-bold text-slate-900 md:text-xl">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600 md:text-base">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 flex">
              <Button className="rounded-full px-10 py-2.5 text-sm md:px-12 md:text-base">
                התחילו עכשיו
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
