"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Overlay() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Section 1: "My Name. Creative Developer."
    const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

    // Section 2: "I build digital experiences."
    const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.2, 0.3, 0.5], [50, 0, -50]);

    // Section 3: "Bridging design and engineering."
    const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.8, 0.9], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.5, 0.6, 0.9], [50, 0, -50]);

    return (
        <div ref={containerRef} className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-10">
            <div className="sticky pt-32 top-0 h-screen w-full flex flex-col justify-center container mx-auto px-6">

                {/* Section 1 */}
                {/* Section 1 */}
                {/* Section 1 */}
                <motion.div
                    style={{ opacity: opacity1, y: y1 }}
                    className="absolute inset-x-0 px-6 md:px-20 flex flex-col items-end justify-center text-right text-white"
                ><h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                        Raj Santosh Singh
                    </h1>

                    <p className="text-xl md:text-2xl text-white/70 font-light mb-3">
                        Full Stack Developer
                    </p>

                    <p className="text-lg text-white/60">
                        📧 SATYAMSINGH82844@GMAIL.COM
                    </p>

                    <p className="text-lg text-white/60 mt-1">
                        📞 +91 93242 73931
                    </p>
                    <div className="flex gap-4 mt-8 pointer-events-auto">
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 hover:border-white/30 transition-all backdrop-blur-md flex items-center gap-2"
                        >
                            View Resume
                        </a>
                        <a
                            href="/resume.pdf"
                            download="Raj_Santosh_Singh_Resume.pdf"
                            className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-semibold shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center gap-2"
                        >
                            Download Resume
                        </a>
                    </div>
                </motion.div>
                {/* Section 2 */}
                <motion.div
                    style={{ opacity: opacity2, y: y2 }}
                    className="absolute inset-x-0 px-6 md:px-20 flex flex-col items-start justify-center text-left text-white"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight max-w-2xl">
                        Thank you watching my portfolio.                     </h2>
                </motion.div>

                {/* Section 3 */}
                <motion.div
                    style={{ opacity: opacity3, y: y3 }}
                    className="absolute inset-x-0 px-6 md:px-20 flex flex-col items-end justify-center text-right text-white"
                >
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-2xl">
                        UI/UX Designer <br />
                        <span className="text-white/50 italic">Full Stack Developer</span>
                    </h2>
                </motion.div>

            </div>
        </div>
    );
}
