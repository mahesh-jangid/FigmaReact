import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { cn } from '../lib/utils';

const questions = [
  {
    question: "האם השירות באמת חינם?",
    answer: "כן. חלק מהכלים מוצעים בחינם, וחלק במחיר סמלי כדי לכסות עלויות עיבוד."
  },
  {
    question: "כמה זמן לוקח התהליך?",
    answer: "התהליך מהיר מאוד ולוקח בממוצע כ-4 דקות למילוי השאלון הראשוני."
  },
  {
    question: "האם המידע שלי מאובטח?",
    answer: "בהחלט. אנו משתמשים בתקני האבטחה המחמירים ביותר כדי לשמור על הפרטיות שלך."
  },
  {
    question: "איך מקבלים את הכסף?",
    answer: "הכסף מועבר ישירות לחשבון הבנק שלך בסיום הטיפול על ידי הגוף הרלוונטי."
  },
  {
    question: "האם צריך ידע משפטי?",
    answer: "ממש לא. המערכת שלנו מפשטת את כל המונחים המשפטיים לשפה ברורה ופשוטה."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-[#fff7fc] py-20">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-80 w-80 rounded-full border border-pink-100/60" />
      <div className="pointer-events-none absolute -right-10 top-10 h-64 w-64 rounded-full border border-pink-100/40" />
      <div className="pointer-events-none absolute -right-0 top-40 h-48 w-48 rounded-full border border-pink-100/30" />

      <div className="relative z-10 mx-auto max-w-5xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-slate-900 md:text-4xl">
          <span className="bg-gradient-to-l from-fuchsia-500 via-pink-500 to-sky-500 bg-clip-text text-transparent">
            שאלות
          </span>{' '}
          שאולי יש לכם
        </h2>

        <div className="space-y-3">
          {questions.map((q, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 }}
                className={cn(
                  "overflow-hidden rounded-2xl bg-white/95 transition-all duration-300",
                  isOpen
                    ? "shadow-[0_18px_40px_rgba(15,23,42,0.07)] ring-1 ring-pink-100"
                    : "shadow-[0_8px_24px_rgba(15,23,42,0.03)] hover:shadow-[0_12px_30px_rgba(15,23,42,0.05)]"
                )}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-right md:px-8"
                >
                  <span className="text-sm font-bold text-slate-900 md:text-lg">
                    {q.question}
                  </span>
                  <div className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-full border transition-colors",
                    isOpen
                      ? "border-pink-400 bg-pink-500 text-white"
                      : "border-pink-100 bg-white text-pink-500"
                  )}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-1 border-t border-pink-50 px-6 pb-5 pt-3 text-sm leading-relaxed text-slate-600 md:px-8">
                        {q.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
