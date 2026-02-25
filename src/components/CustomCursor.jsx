"use client";

import { useEffect, useRef } from "react";

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const ringRef = useRef(null);

    useEffect(() => {
        const moveCursor = (e) => {
            const { clientX, clientY } = e;

            if (cursorRef.current && ringRef.current) {
                cursorRef.current.style.transform =
                    `translate3d(${clientX}px, ${clientY}px, 0)`;

                ringRef.current.animate(
                    {
                        transform: `translate3d(${clientX}px, ${clientY}px, 0)`
                    },
                    {
                        duration: 300,
                        fill: "forwards"
                    }
                );
            }
        };

        const clickEffect = () => {
            if (!ringRef.current) return;

            ringRef.current.classList.add("cursor-click");
            setTimeout(() => {
                ringRef.current.classList.remove("cursor-click");
            }, 300);
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("click", clickEffect);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("click", clickEffect);
        };
    }, []);

    return (
        <>
            <div ref={ringRef} className="cursor-ring"></div>
            <div ref={cursorRef} className="cursor-dot"></div>
        </>
    );
};

export default CustomCursor;