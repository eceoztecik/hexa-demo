import { MonogramLogo, AbstractLogo, MascotLogo, NoStyleLogo } from "../src/components/Logos";

export const styleMap: Record<string, string> = {
    image1: 'Monogram',
    image2: 'Abstract',
    image3: 'Mascot',
    image4: 'No Style',
};

export const styleConfigs: Record<
    'Monogram' | 'Abstract' | 'Mascot' | 'No Style',
    { component: React.FC<any>; color: string }
> = {
    Monogram: { component: MonogramLogo, color: '#4A90E2' },
    Abstract: { component: AbstractLogo, color: '#E94E77' },
    Mascot: { component: MascotLogo, color: '#F5A623' },
    'No Style': { component: NoStyleLogo, color: '#222222' },
};