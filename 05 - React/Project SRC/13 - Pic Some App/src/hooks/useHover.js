import { useState, useEffect, useRef } from 'react';

function useHover() {
    const [hovered, setHovered] = useState(false);
    const ref = useRef(null);

    function enter() {
        setHovered(true);
    }

    function leave() {
        setHovered(false);
    }

    useEffect(() => {
        const currentRef = ref.current;
        currentRef.addEventListener('mouseenter', enter);
        currentRef.addEventListener('mouseleave', leave);

        return () => {
            currentRef.removeEventListener('mouseenter', enter);
            currentRef.removeEventListener('mouseleave', leave);
        };
    }, []);

    return [hovered, ref];
}

export default useHover;
