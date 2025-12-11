import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface FadeInProps {
    children: React.ReactNode;
    delay?: number;
    yOffset?: number;
    duration?: number;
    className?: string;
    stagger?: number;
}

const FadeIn = ({
    children,
    delay = 0,
    yOffset = 50,
    duration = 1,
    className = "",
    stagger = 0
}: FadeInProps) => {
    const comp = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const elements = comp.current?.children ? Array.from(comp.current.children) : [];

        if (elements.length > 0) {
            gsap.fromTo(
                elements,
                {
                    opacity: 0,
                    y: yOffset,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: duration,
                    delay: delay,
                    stagger: stagger,
                    scrollTrigger: {
                        trigger: comp.current,
                        start: "top 85%", // Animation starts when top of element hits 85% of viewport height
                        toggleActions: "play none none reverse", // Re-plays when scrolling back up? Or just reverse? User said "show up at the same time that you scroll", usually implies entering. "none none none reverse" makes it fade out when scrolling up, "play none none none" plays once. Let's stick to standard behavior. "play none none reverse" makes it fade out if you scroll back up past it.
                    },
                    ease: "power3.out"
                }
            );
        }
    }, { scope: comp });

    return (
        <div ref={comp} className={className}>
            {children}
        </div>
    );
};

export default FadeIn;
