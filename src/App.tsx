import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProcessSteps } from './components/ProcessSteps';
import { Features } from './components/Features';
import { Tools } from './components/Tools';
import { StatsAndTestimonials } from './components/StatsAndTestimonials';
import { FAQ } from './components/FAQ';
import { Blog } from './components/Blog';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans text-right" dir="rtl">
      <Header />
      <main>
        <Hero />
        <ProcessSteps />
        <Features />
        <Tools />
        <StatsAndTestimonials />
        <FAQ />
        <Blog />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
