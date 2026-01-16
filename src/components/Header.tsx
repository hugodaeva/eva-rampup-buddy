import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const navItems = [
  { id: 'como-funciona', label: 'Como funciona', type: 'anchor' as const },
  { id: 'precos', label: 'Preços', type: 'anchor' as const },
  { id: 'blog', label: 'Blog', type: 'external' as const, href: 'https://evapeople.com.br/blog/' },
  { id: 'cases', label: 'Cases', type: 'external' as const, href: 'https://evapeople.com.br/cases/' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const baseUrl = import.meta.env.BASE_URL;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = navItems
        .filter(item => item.type === 'anchor')
        .map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 150;

      const anchorItems = navItems.filter(item => item.type === 'anchor');
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(anchorItems[i].id);
          break;
        }
      }
    };

    handleScroll(); // Initial check
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const item = navItems.find(item => item.id === id);

    // Handle external links
    if (item && item.type === 'external' && 'href' in item) {
      window.open(item.href, '_blank');
      return;
    }

    // Handle internal anchor links
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Header height offset
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/80 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)]'
        : 'bg-white/60 backdrop-blur-md'
        }`}
    >
      <div className="container-main">
        <div className="flex items-center justify-between h-14 lg:h-16">
          {/* Logo - Left */}
          <a href="#" className="flex items-center flex-shrink-0" onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}>
            <img
              src={`${baseUrl}logo-horizontal.png`}
              alt="Eva People"
              className="h-7 lg:h-8 w-auto object-contain"
              style={{ minHeight: '13px', minWidth: '70px' }}
            />
          </a>

          {/* Navigation Pills - Center (Desktop) */}
          <nav className="hidden lg:flex items-center gap-2 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  px-4 py-1.5 rounded-full text-[13px] font-semibold
                  transition-all duration-200 whitespace-nowrap
                  ${activeSection === item.id
                    ? 'bg-primary/10 text-primary border border-primary/20'
                    : 'bg-white/60 text-muted-foreground border border-border/40 hover:border-primary/30 hover:text-foreground hover:bg-white/80'
                  }
                `}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button - Right (Desktop) */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => scrollToSection('demo')}
              className="
                px-5 py-1.5 rounded-full text-[13px] font-semibold
                bg-primary text-primary-foreground
                hover:bg-primary/90 transition-all duration-200
                flex items-center gap-1.5 shadow-sm
              "
            >
              Solicitar demo
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile - Horizontal Scroll Pills */}
          <div className="lg:hidden flex-1 ml-4 overflow-x-auto scrollbar-hide">
            <nav className="flex items-center gap-2 pb-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    px-3 py-1 rounded-full text-[11px] font-semibold
                    transition-all duration-200 whitespace-nowrap flex-shrink-0
                    ${activeSection === item.id
                      ? 'bg-primary/10 text-primary border border-primary/20'
                      : 'bg-white/60 text-muted-foreground border border-border/40'
                    }
                  `}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Mobile CTA */}
          <div className="lg:hidden flex items-center ml-2">
            <button
              onClick={() => scrollToSection('demo')}
              className="
                px-3 py-1 rounded-full text-[11px] font-semibold
                bg-primary text-primary-foreground
                hover:bg-primary/90 transition-all duration-200
                flex items-center gap-1 shadow-sm flex-shrink-0
              "
            >
              Demo
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
