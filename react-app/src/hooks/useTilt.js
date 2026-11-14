import { useCallback, useRef } from 'react';

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

/**
 * Pointer-driven 3D tilt without React re-renders.
 *
 * Writes CSS custom properties onto the referenced element:
 *   --tilt-x / --tilt-y        rotation values in degrees
 *   --pointer-x / --pointer-y  cursor position in px
 *   --pointer-pct-x/y          cursor position as a percentage
 *
 * `max` is the maximum rotation in degrees and `clamp` controls how far
 * from the centre (in half-width units) the maximum is reached.
 */
export function useTilt({ max = 7, clamp: maxInput = 1, onMove, onLeave } = {}) {
    const ref = useRef(null);

    const handleMouseMove = useCallback((event) => {
        const element = ref.current;
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const rawX = (event.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
        const rawY = (event.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
        const x = clamp(rawX, -maxInput, maxInput);
        const y = clamp(rawY, -maxInput, maxInput);
        const nx = maxInput === 0 ? 0 : x / maxInput;
        const ny = maxInput === 0 ? 0 : y / maxInput;

        element.style.setProperty('--tilt-x', `${(ny * max).toFixed(2)}deg`);
        element.style.setProperty('--tilt-y', `${(-nx * max).toFixed(2)}deg`);
        element.style.setProperty('--pointer-x', `${event.clientX - rect.left}px`);
        element.style.setProperty('--pointer-y', `${event.clientY - rect.top}px`);
        element.style.setProperty('--pointer-pct-x', `${((event.clientX - rect.left) / rect.width) * 100}%`);
        element.style.setProperty('--pointer-pct-y', `${((event.clientY - rect.top) / rect.height) * 100}%`);

        if (onMove) onMove({ element, rect, x, y, nx, ny, event });
    }, [max, maxInput, onMove]);

    const handleMouseLeave = useCallback(() => {
        const element = ref.current;
        if (!element) return;

        element.style.setProperty('--tilt-x', '0deg');
        element.style.setProperty('--tilt-y', '0deg');

        if (onLeave) onLeave(element);
    }, [onLeave]);

    return { ref, onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave };
}
