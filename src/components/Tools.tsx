import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const tools = [
  {
    id: 1,
    title: 'בדיקת החזר מחברת הביטוח',
    description: 'בדיקה חכמה של כל ההחזרים והזכויות שמגיעים לכם מהפוליסה הקיימת.',
    meta: 'מסמך מיידי • מבוסס על מידע משתמש • שאלון קצר 3–5 דקות',
    badge: 'חינם',
  },
  {
    id: 2,
    title: 'תהליך הגשת תביעה קטנה',
    description: 'בניית מסמך תביעה מסודר וברור המבוסס על נתונים שתמלאו.',
    meta: 'מסמך מיידי • מבוסס על מידע משתמש • שאלון קצר 3–5 דקות',
    badge: 'חינם',
  },
  {
    id: 3,
    title: 'בדיקת החזר כסף לשכירים',
    description: 'בדיקה מהירה של זכאות להחזרים שונים על בסיס נתוני השכר שלכם.',
    meta: 'מסמך מיידי • מבוסס על מידע משתמש • שאלון קצר 3–5 דקות',
    badge: 'חינם',
  },
  {
    id: 4,
    title: 'הכנת מכתב לבנקים',
    description: 'ניסוח מכתב מקצועי לבנק לטובת החזרי עמלות ושיפור תנאים.',
    meta: 'מסמך מיידי • מבוסס על מידע משתמש • שאלון קצר 3–5 דקות',
    badge: '50 ש״ח',
  },
];

export const Tools = () => {
  return (
    <section className="relative overflow-hidden py-20" dir="ltr">
      {/* subtle background arcs */}
      <div className="pointer-events-none absolute inset-y-0 right-[-35%] hidden w-[900px] rounded-full bg-[radial-gradient(circle_at_center,rgba(148,163,184,0.12),transparent_65%)] md:block" />

      <div className="container relative mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid items-start gap-10 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
          {/* Left: hex cards in responsive grid */}
          <div className="relative flex justify-center md:justify-start">
            {/* blurred teaser card on the far left (5th hex) */}
            <div className="pointer-events-none absolute -left-24 top-16 hidden h-44 w-52 blur-[3px] md:block">
              <div
                className="h-full w-full bg-white/80 shadow-[0_18px_60px_rgba(15,23,42,0.22)]"
                style={{
                  clipPath:
                    'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                }}
              />
            </div>

            <div className="grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`relative mx-auto w-full max-w-sm bg-white p-8 text-right shadow-[0_22px_65px_rgba(15,23,42,0.08)] ring-1 ring-slate-100/90 backdrop-blur-sm ${
                    index === 1 ? 'sm:-mt-12 sm:translate-x-4' : ''
                  } ${index === 2 ? 'sm:-mt-6 sm:-translate-x-4' : ''} ${
                    index === 3 ? 'sm:-mt-14 sm:translate-x-2' : ''
                  }`}
                  style={{
                    clipPath:
                      'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                  }}
                >
                  {/* top badge */}
                  <div className="absolute inset-x-0 -top-5 flex justify-center">
                    <span className="rounded-full bg-slate-50 px-4 py-1 text-xs font-bold text-slate-500 shadow-sm">
                      {tool.badge}
                    </span>
                  </div>

                  <div className="mt-4" dir="rtl">
                    <h3 className="mb-2 text-lg font-bold text-slate-900">
                      {tool.title}
                    </h3>
                    <p className="mb-4 text-sm leading-relaxed text-slate-600">
                      {tool.description}
                    </p>
                    <p className="border-t border-slate-100 pt-3 text-xs text-slate-500">
                      {tool.meta}
                    </p>
                  </div>

                  <button
                    className="mt-4 flex items-center gap-1 text-xs font-bold text-pink-500 transition-all hover:gap-2"
                    dir="rtl"
                  >
                    התחילו עכשיו
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: title + description */}
          <div className="text-right md:pl-10" dir="rtl">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
              <span className="bg-gradient-to-l from-sky-500 via-violet-500 to-pink-500 bg-clip-text text-transparent">
                הכלים
              </span>{' '}
              שלנו
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-slate-600 md:text-base">
              הכלים שלנו מודרכים ועובדים עבורכם כדי שתוכלו לקבל את מה שמגיע לכם
              בקלות ובמהירות. כלים נוספים ימשיכו להיכנס בהמשך ולהרחיב את
              היכולות.
            </p>
            <p className="text-xs text-slate-400 md:text-sm">
              בקרוב עוד כלים חכמים שיעזרו לכם לנהל את הכסף שלכם טוב יותר.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
