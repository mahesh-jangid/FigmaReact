import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import {
  ArrowLeft,
  FileText,
  FileSpreadsheet,
  Star,
  Sparkles,
} from 'lucide-react';

export const Hero = () => {
  return (
    <section
      className="relative bg-white pt-10 md:pt-16 pb-20 overflow-hidden"
      dir="ltr"
    >
      <div className="pointer-events-none absolute -left-40 -top-40 h-80 w-80 rounded-full bg-pink-100/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-sky-100/40 blur-3xl" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid items-center gap-8 md:gap-12 md:grid-cols-2">
          {/* Left: arrow + floating icons */}
          <div className="flex justify-center md:justify-start order-1 md:order-1">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative h-[280px] w-[280px] md:h-[380px] md:w-[380px]"
            >
              {/* Concentric circles */}
              <div className="absolute inset-4 rounded-full border border-gray-200/70" />
              <div className="absolute inset-10 rounded-full border border-gray-200/60" />
              <div className="absolute inset-16 rounded-full border border-gray-100/80" />

              {/* Center pink arrow - SVG */}
              <div className="absolute inset-[26%] flex items-center justify-center">
                <motion.div
                  animate={{ y: [-4, 4, -4] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                  className="flex h-32 w-44 items-center justify-center"
                >
                  <svg width="120" height="114" viewBox="0 0 424 402" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_12px_30px_rgba(236,72,153,0.4)]">
                    <path d="M80.6069 238.598L413.452 253.282C416.398 253.411 419.111 251.942 420.303 249.574C421.494 247.205 420.921 244.414 418.857 242.529L185.845 29.7127C183.744 27.7937 180.532 27.211 177.787 28.2506C177.194 28.4754 176.649 28.7654 176.161 29.1093C174.392 30.3564 173.374 32.3082 173.509 34.3858L191.809 132.481C194.176 145.17 188.196 157.846 176.388 165.173L76.2077 227.328C73.9396 229 73.0867 231.746 74.0603 234.242C75.0351 236.736 77.6349 238.467 80.6069 238.598Z" fill="#EC4899"/>
                  </svg>
                </motion.div>
              </div>

              {/* Floating mini cards with enhanced styling */}
              <motion.div
                animate={{ y: [-6, 4, -6] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  delay: 0.2,
                }}
                className="absolute -left-6 top-1/3 flex h-12 w-20 -translate-y-1/2 items-center justify-center rounded-2xl bg-white text-[10px] font-semibold text-slate-600 shadow-lg shadow-slate-200/80 border border-gray-100"
              >
                <span className="mr-1 rounded-md bg-slate-900 px-1.5 py-1 text-[9px] font-bold text-white">
                  DOCX
                </span>
              </motion.div>

              <motion.div
                animate={{ y: [-4, 6, -4] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  delay: 0.4,
                }}
                className="absolute -right-3 top-[8%] flex h-13 w-13 items-center justify-center rounded-2xl bg-white shadow-md shadow-slate-200/80 border border-gray-100"
              >
                <FileText className="h-6 w-6 text-sky-500" />
              </motion.div>

              <motion.div
                animate={{ y: [-5, 3, -5] }}
                transition={{
                  duration: 4.2,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  delay: 0.8,
                }}
                className="absolute right-6 bottom-[10%] flex h-13 w-13 items-center justify-center rounded-2xl bg-white shadow-md shadow-slate-200/80 border border-gray-100"
              >
                <FileSpreadsheet className="h-6 w-6 text-emerald-500" />
              </motion.div>

              <motion.div
                animate={{ y: [-3, 5, -3] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  delay: 1,
                }}
                className="absolute left-6 bottom-[8%] flex h-13 w-13 items-center justify-center rounded-2xl bg-white shadow-md shadow-slate-200/80 border border-gray-100"
              >
                <Star className="h-6 w-6 text-amber-400 fill-amber-300" />
              </motion.div>

              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  delay: 1.2,
                }}
                className="absolute left-1/2 top-[6%] flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-2xl bg-white shadow-md shadow-slate-200/80 border border-gray-100"
              >
                <Sparkles className="h-5 w-5 text-violet-500" />
              </motion.div>
            </motion.div>
          </div>

          {/* Right: text + CTA */}
          <div className="text-right md:pr-6 order-2 md:order-2" dir="rtl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="mb-3 inline-block rounded-full bg-pink-100/60 px-3 py-1 text-xs font-semibold text-pink-700"
            >
              הטכנולוגיה של בירוקליק משנה את המשחק 🚀
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="mb-4 text-2xl font-light leading-snug text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl"
            >
              פחות בירוקרטיה,
              <br />
              <span className="bg-gradient-to-l from-sky-500 via-violet-500 to-pink-500 bg-clip-text font-bold text-transparent">
                יותר כסף בכיס שלך.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
              className="mb-8 ml-auto max-w-md text-sm leading-relaxed text-slate-600 sm:text-base md:max-w-lg"
            >
              בירוקליק מאחדת את כל הכלים שיעזרו לך לקבל את מה שמגיע לך בצורה
              פשוטה, חכמה ובמינימום מאמץ.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
              className="ml-auto flex max-w-md md:max-w-lg"
            >
              <Button
                size="lg"
                className="group h-12 rounded-full bg-[#EC4899] px-10 text-sm text-white shadow-[0_18px_45px_rgba(236,72,153,0.55)] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[#DB2777] hover:shadow-[0_22px_55px_rgba(236,72,153,0.65)] sm:text-base"
              >
                <span className="flex items-center gap-2" dir="rtl">
                  התחילו עכשיו
                  <ArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" />
                </span>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Bottom logo placeholders bar across hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6, ease: 'easeOut' }}
          className="mt-16 px-2 py-6 overflow-hidden"
        >
          <div className="flex items-center justify-center gap-4 md:gap-5">
            {Array.from({ length: 7 }).map((_, index) => (
              <div
                key={index}
                className={`min-w-[80px] flex-1 max-w-[140px] rounded bg-gradient-to-b from-gray-200 to-gray-300 transition duration-300 hover:from-gray-300 hover:to-gray-400 h-12 border border-gray-300/50 ${
                  index === 0 ? 'blur-sm opacity-60' : ''
                } ${index === 6 ? 'blur-sm opacity-60' : ''}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
