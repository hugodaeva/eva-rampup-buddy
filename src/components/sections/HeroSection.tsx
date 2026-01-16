import { CheckCircle, Check, Mail, MessageSquare, Bell } from 'lucide-react';
import { getRef } from '@/lib/constants';
import { EvidenceInline } from '@/components/EvidenceInline';
import { IntegrationLogosRow } from '@/components/IntegrationLogosRow';
import { HubSpotEmailCapture } from '@/components/HubSpotEmailCapture';

export const HeroSection = () => {
  const ref1 = getRef(1);
  const ref2 = getRef(2);
  const ref4 = getRef(4);
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center pt-28 lg:pt-24 overflow-hidden">
      <div className="container-main flex-1 flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full py-12">
          {/* Left Column - Content */}
          <div className="animate-fade-up z-10">
            <h1 className="text-4xl lg:text-5xl xl:text-7xl font-extrabold text-foreground leading-[1.1] mb-6 tracking-tight">
              Novos talentos rampados em até 90 dias
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Ramp-up guiado no fluxo de trabalho. A Eva leva o próximo passo até o colaborador.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                {
                  text: "Ramp-up 50% mais rápido.",
                  ref: ref1
                },
                {
                  text: "Ramp-up 30/60/90 com quick wins.",
                  ref: ref2
                },
                {
                  text: "Autonomia total em até 90 dias.",
                  ref: ref4
                }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-success" />
                  </div>
                  <span className="text-foreground font-medium text-sm lg:text-base">
                    {item.text}
                    {item.ref && (
                      <EvidenceInline sourceName={item.ref.sourceName} href={item.ref.url} />
                    )}
                  </span>
                </li>
              ))}
            </ul>

            {/* HubSpot Email Capture Form */}
            <div className="mb-10">
              <HubSpotEmailCapture title="" />

              <div className="mt-8">
                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-4">Agente multicanal</p>
                <IntegrationLogosRow />
              </div>
            </div>
          </div>

          {/* Right Column - Collage of Mock Cards */}
          <div className="relative h-[500px] hidden lg:block animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {/* Card 1: EVA NO SLACK */}
            <div className="absolute top-0 left-0 w-[85%] z-20 mock-card bg-background/90 backdrop-blur-md border-primary/20 shadow-xl p-3 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0 shadow-sm border border-border bg-white">
                  <img src={`${baseUrl}logo-symbol.png`} alt="Eva" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-0.5">
                    <p className="text-[10px] text-primary font-black uppercase tracking-widest">Eva no Slack</p>
                    <span className="text-[9px] text-muted-foreground">AGORA</span>
                  </div>
                  <p className="font-bold text-foreground text-xs leading-snug">
                    Parabéns pelo 1º PR! 🎉 Aqui está o seu próximo passo do ramp-up 30-60-90.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Quick Win */}
            <div className="absolute top-[100px] right-0 w-[70%] z-10 mock-card bg-background/80 border-success/30 shadow-lg p-3 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-success" />
                </div>
                <div>
                  <p className="text-[9px] text-muted-foreground font-bold uppercase tracking-wider mb-0.5">Quick Win: Deploy</p>
                  <p className="font-bold text-foreground text-xs">Concluído em 5 dias.</p>
                  <div className="mt-1.5 w-full bg-secondary rounded-full h-1 overflow-hidden">
                    <div className="bg-success h-full" style={{ width: '100%' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Contexto Autonomia */}
            <div className="absolute top-[200px] left-4 w-[75%] z-20 mock-card bg-background/90 border-accent/20 shadow-xl p-3 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 text-accent font-black text-xs">
                  A
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-0.5">
                    <p className="text-[9px] text-muted-foreground font-bold uppercase tracking-widest">Contexto: Autonomia</p>
                    <span className="text-[9px] font-black bg-accent/10 text-accent px-1.5 py-0.5 rounded">70% • Mês 1</span>
                  </div>
                  <p className="font-bold text-foreground text-xs">
                    Você completou 70% das missões do seu primeiro mês.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4: Slack Check-in */}
            <div className="absolute top-[310px] right-4 w-[65%] z-10 mock-card bg-background/70 border-primary/10 shadow-md p-3 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-[9px] text-primary/70 font-black uppercase tracking-widest mb-0.5">Check-in</p>
                  <p className="font-bold text-foreground text-xs">Tudo certo com acesso? Precisa de ajuda?</p>
                </div>
              </div>
            </div>

            {/* Card 5: EVA POR E-MAIL */}
            <div className="absolute top-[400px] left-12 w-[70%] z-20 mock-card bg-background/90 border-foreground/10 shadow-2xl p-3 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <p className="text-[9px] text-muted-foreground font-black uppercase tracking-widest">Weekly Digest</p>
                    <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  </div>
                  <p className="font-bold text-foreground text-xs leading-snug">
                    Resumo do dia + próximos passos no seu inbox.
                  </p>
                </div>
              </div>
            </div>

            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10">
              <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
              <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-accent/10 rounded-full blur-[80px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
