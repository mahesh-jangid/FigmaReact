import { Menu } from 'lucide-react';
import { Button } from './ui/Button';

export const Header = () => {
  return (
    <header className="w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50" dir="ltr">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center">
        {/* Mobile/Tablet Layout */}
        <div className="flex md:hidden w-full items-center justify-between">
          {/* Left: CTA Button */}
          <Button
            size="sm"
            className="rounded-full px-6 bg-primary hover:bg-primary/90 text-white shadow-[0_8px_20px_rgba(245,67,135,0.35)] text-sm"
          >
            התחילו
          </Button>

          {/* Center: Logo */}
          <div className="flex flex-col items-center">
            <span className="text-lg font-bold text-primary leading-none">בירוקליק</span>
            <span className="text-[9px] text-gray-500 tracking-[0.18em]">
              בירוקרטיה בקליק
            </span>
          </div>

          {/* Right: Menu Icon */}
          <button className="p-2 text-secondary hover:bg-gray-100 rounded-full transition-colors">
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex w-full items-center justify-between">
          {/* Left column: CTA */}
          <Button
            size="sm"
            className="rounded-full px-5 bg-primary hover:bg-primary/90 text-white shadow-[0_8px_20px_rgba(245,67,135,0.35)]"
          >
            התחילו עכשיו
          </Button>

          {/* Center column: nav links */}
          <nav className="flex-1 flex items-center justify-center gap-10 text-sm text-secondary/80">
            <button className="hover:text-primary transition-colors">הכלים שלנו</button>
            <button className="hover:text-primary transition-colors">המלצות</button>
            <button className="hover:text-primary transition-colors">הגבלת עמלות</button>
            <button className="hover:text-primary transition-colors">ראשי</button>
          </nav>

          {/* Right column: Logo */}
          <div className="flex flex-col items-end">
            <span className="text-xl md:text-2xl font-bold text-primary leading-none">בירוקליק</span>
            <span className="text-[10px] text-gray-500 tracking-[0.18em]">
              בירוקרטיה בקליק
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
