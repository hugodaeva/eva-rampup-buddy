import React from 'react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

interface IntegrationLogo {
    name: string;
    src: string;
    heightDesktop: number;
}

const companyLogos: IntegrationLogo[] = [
    { name: 'LWSA', src: 'logos/color/lwsa.png', heightDesktop: 24 },
    { name: 'SoftPlan', src: 'logos/color/softplan.png', heightDesktop: 36 },
    { name: 'Pitang', src: 'logos/color/pitang.png', heightDesktop: 26 },
    { name: 'Vericode', src: 'logos/color/vericode.png', heightDesktop: 36 },
    { name: 'Meta IT', src: 'logos/color/meta.png', heightDesktop: 24 },
    { name: 'Cast Group', src: 'logos/color/cast.png', heightDesktop: 22 },
];

const toolLogos: IntegrationLogo[] = [
    { name: 'Slack', src: 'logos/tools/slack.png', heightDesktop: 28 },
    { name: 'Microsoft Teams', src: 'logos/tools/teams.png', heightDesktop: 26 },
    { name: 'Google Chat', src: 'logos/tools/google-chat.png', heightDesktop: 26 },
    { name: 'WhatsApp', src: 'logos/tools/whatsapp.png', heightDesktop: 30 },
    { name: 'Gmail', src: 'logos/tools/gmail.png', heightDesktop: 22 },
    { name: 'Google Calendar', src: 'logos/tools/google-calendar.png', heightDesktop: 26 },
    { name: 'Webhooks', src: 'logos/tools/webhooks.png', heightDesktop: 26 },
];

interface IntegrationLogosRowProps {
    type?: 'tools' | 'companies';
    size?: 'sm' | 'md';
    showLabels?: boolean;
    className?: string;
}

export const IntegrationLogosRow = ({
    type = 'tools',
    size = 'md',
    showLabels = false,
    className = ""
}: IntegrationLogosRowProps) => {
    const logos = type === 'companies' ? companyLogos : toolLogos;
    const baseUrl = import.meta.env.BASE_URL;

    return (
        <TooltipProvider>
            <div className={`flex flex-wrap items-center gap-x-6 gap-y-4 ${className}`}>
                {logos.map((logo) => (
                    <Tooltip key={logo.name}>
                        <TooltipTrigger asChild>
                            <div className="group flex items-center gap-2 cursor-pointer transition-transform duration-200 hover:scale-[1.03]">
                                <div className="flex items-center justify-center">
                                    <img
                                        src={`${baseUrl}${logo.src}`}
                                        alt={logo.name}
                                        className="w-auto object-contain opacity-90 transition-opacity group-hover:opacity-100"
                                        style={{
                                            height: size === 'md' ? `${logo.heightDesktop}px` : `${logo.heightDesktop * 0.8}px`,
                                            maxHeight: '50px'
                                        }}
                                    />
                                </div>
                                {showLabels && (
                                    <span className="text-[10px] lg:text-xs font-bold text-muted-foreground uppercase tracking-widest group-hover:underline decoration-primary/30 transition-all">
                                        {logo.name}
                                    </span>
                                )}
                            </div>
                        </TooltipTrigger>
                        <TooltipContent side="bottom" className="bg-foreground text-background text-[10px] font-bold uppercase tracking-wider">
                            {logo.name}
                        </TooltipContent>
                    </Tooltip>
                ))}
            </div>
        </TooltipProvider>
    );
};
