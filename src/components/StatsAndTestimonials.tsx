import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'הלני זר',
    role: 'הכינה מכתב לתביעת קטנה',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=96&q=80',
    quote:
      '״לא ידעתי איך בכלל להתחיל לכתוב מכתב לתביעה קטנה. בירוקליק הנחתה אותי שלב אחרי שלב ויצרתי מכתב שכאילו נכתב על ידי עורך דין. הרגשתי בטחון שאני מציגה את הסיפור שלי כמו שצריך.״',
  },
  {
    name: 'תומר מזרחי',
    role: 'הכין מכתב תביעה',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=96&q=80',
    quote:
      '״במקום לשבת שעות מול דף ריק, נכנסתי לבירוקליק ותוך דקות היה לי מכתב מסודר וברור להגשה לבית המשפט. אהבתי במיוחד את השפה – מקצועית אבל מובנת. ממש שירות מציל עצבים.״',
  },
  {
    name: 'דניאל מתיתיהו',
    role: 'קיבל החזר מחברת הביטוח',
    image:
      'https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&fit=crop&w=96&q=80',
    quote:
      '״המערכת של בירוקליק חסכה לי שעות של ניסיונות להבין איך לנסח מכתב לביטוח. מילאתי כמה שאלות קצרות ובסוף יצא מסמך מוכן לשליחה. לא דמיינתי שזה יהיה כל כך קל.״',
  },
];

export const StatsAndTestimonials = () => {
  return (
    <section className="relative bg-white py-20" dir="rtl">
      <div className="container mx-auto max-w-6xl px-4 md:px-8">
        <div className="space-y-8">
          {/* Row 1: testimonial + pink stat on right (md) */}
          <div className="flex flex-col gap-6 md:flex-row md:items-stretch">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="flex-1 rounded-3xl bg-[#fafafa] px-6 py-5 text-right shadow-[0_18px_60px_rgba(15,23,42,0.05)] md:px-8 md:py-6"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="flex flex-col items-start">
                  <span className="text-sm font-bold text-slate-900">
                    {testimonials[0].name}
                  </span>
                  <span className="text-xs text-slate-500">
                    {testimonials[0].role}
                  </span>
                </div>
                <img
                  src={testimonials[0].image}
                  alt={testimonials[0].name}
                  className="h-10 w-10 rounded-full object-cover"
                />
              </div>
              <p className="text-sm leading-relaxed text-slate-700 md:text-base">
                {testimonials[0].quote}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="md:w-80 rounded-3xl bg-primary px-6 py-8 text-right text-white shadow-[0_24px_70px_rgba(236,72,153,0.5)]"
            >
              <div className="mb-1 text-sm font-semibold opacity-80">₪</div>
              <div className="text-3xl font-extrabold leading-tight md:text-4xl">
                1.2 מיליון
              </div>
              <div className="mt-2 text-sm md:text-base">
                כסף שנכנס ללקוחות בירוקליק
              </div>
            </motion.div>
          </div>

          {/* Row 2: pink stat on left (md), testimonial on right */}
          <div className="flex flex-col-reverse gap-6 md:flex-row md:items-stretch">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="md:w-80 rounded-3xl bg-primary px-6 py-7 text-center text-white shadow-[0_20px_60px_rgba(236,72,153,0.45)] md:text-right"
            >
              <div className="text-3xl font-extrabold tracking-tight md:text-4xl">
                4 דקות
              </div>
              <div className="mt-1 text-xs md:text-sm">זמן ממוצע בתהליך</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex-1 rounded-3xl bg-[#fafafa] px-6 py-5 text-right shadow-[0_18px_60px_rgba(15,23,42,0.05)] md:px-8 md:py-6"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="flex flex-col items-start">
                  <span className="text-sm font-bold text-slate-900">
                    {testimonials[1].name}
                  </span>
                  <span className="text-xs text-slate-500">
                    {testimonials[1].role}
                  </span>
                </div>
                <img
                  src={testimonials[1].image}
                  alt={testimonials[1].name}
                  className="h-10 w-10 rounded-full object-cover"
                />
              </div>
              <p className="text-sm leading-relaxed text-slate-700 md:text-base">
                {testimonials[1].quote}
              </p>
            </motion.div>
          </div>

          {/* Row 3: testimonial + pink stat on right (md) */}
          <div className="flex flex-col gap-6 md:flex-row md:items-stretch">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="flex-1 rounded-3xl bg-[#fafafa] px-6 py-5 text-right shadow-[0_18px_60px_rgba(15,23,42,0.05)] md:px-8 md:py-6"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="flex flex-col items-start">
                  <span className="text-sm font-bold text-slate-900">
                    {testimonials[2].name}
                  </span>
                  <span className="text-xs text-slate-500">
                    {testimonials[2].role}
                  </span>
                </div>
                <img
                  src={testimonials[2].image}
                  alt={testimonials[2].name}
                  className="h-10 w-10 rounded-full object-cover"
                />
              </div>
              <p className="text-sm leading-relaxed text-slate-700 md:text-base">
                {testimonials[2].quote}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:w-80 rounded-3xl bg-primary px-6 py-8 text-right text-white shadow-[0_24px_70px_rgba(236,72,153,0.5)] md:max-w-sm md:px-9"
            >
              <div className="text-3xl font-extrabold md:text-4xl">130</div>
              <div className="mt-2 text-sm md:text-base">
                תהליכים שהושלמו בהצלחה
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
