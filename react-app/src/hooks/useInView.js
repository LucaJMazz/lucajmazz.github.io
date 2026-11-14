import { useEffect, useRef, useState } from 'react';

/**
 * Tracks whether an element has entered the viewport.
 *
 * This is the CSS-animation replacement for framer-motion's
 * `whileInView` + `viewport={{ once, amount }}` options: an
 * IntersectionObserver watches the element, then `inView` is used to
 * toggle a class that runs a regular CSS animation/transition.
 *
 * @param {object} options
 * @param {number} [options.amount=0.5] Fraction of the element that must be visible.
 * @param {boolean} [options.once=true] Stop observing after the first reveal.
 * @returns {[React.RefObject, boolean]}
 */
export function useInView({ amount = 0.5, once = true } = {}) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return undefined;

        // Older browsers / test environments without IntersectionObserver:
        // show the content instead of leaving it in its initial hidden state.
        if (typeof IntersectionObserver === 'undefined') {
            setInView(true);
            return undefined;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    if (once) observer.unobserve(entry.target);
                } else if (!once) {
                    setInView(false);
                }
            },
            { threshold: amount }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [amount, once]);

    return [ref, inView];
}
