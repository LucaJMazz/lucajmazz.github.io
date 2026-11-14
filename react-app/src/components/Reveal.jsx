import { createElement } from 'react';
import { useInView } from '../hooks/useInView';

/**
 * Renders any element and adds an `in-view` class the first time it
 * enters the viewport. The actual animation is handled entirely in CSS
 * so it runs on the compositor instead of through framer-motion.
 */
function Reveal({
    as: Tag = 'h2',
    amount = 0.5,
    delay = 0,
    once = true,
    className = '',
    style,
    children,
    ...props
}) {
    const [ref, inView] = useInView({ amount, once });
    const classes = `${className}${inView ? ' in-view' : ''}`.trim();

    return createElement(
        Tag,
        {
            ...props,
            ref,
            className: classes || undefined,
            style: delay ? { ...style, '--reveal-delay': `${delay}ms` } : style
        },
        children
    );
}

export default Reveal;
