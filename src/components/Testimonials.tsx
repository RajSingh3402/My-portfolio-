"use client";

import React from "react";
import { CircularTestimonials } from "./ui/circular-testimonials";
import { BlurFade } from "./ui/blur-fade";

const testimonials = [
    {
        quote:
            "I am a passionate Front-End Developer with hands-on experience in building responsive, dynamic, and user-friendly web interfaces.Specialized in crafting pixel-perfect designs, optimizing performance, and delivering seamless cross-browser experiences using modern frameworks and clean, maintainable code.",
        designation: "Front end Developer",
        src: "/sequence/images/Whisk_3ae2e86dbff997380fa4f31ac01bef6edr (1).png",
    },
    {
        quote:
            "I am a motivated Back-End Developer with hands-on experience in designing, developing, and maintaining robust server-side applications.Skilled in building secure, scalable architectures, optimizing database performance, and ensuring seamless integration between front-end interfaces and backend systems.",
        name: "Raj santosh Singh",
        designation: "Back end Developer",
        src: "/sequence/images/rajsingh.jpeg",
    },
    {
        quote:
            "I am a dedicated UI/UX Designer with a passion for creating visually appealing and user-friendly interfaces.Focused on user-centered design, seamless interactions, and elegant interfaces that blend creativity with functionality.",
        name: "Raj Santosh Singh",
        designation: "UI / UX Designer",
        src: "/sequence/images/Screenshot 2026-02-25 111141.png",
    },
];

export default function Testimonials() {
    return (
        <section id="about" className="relative bg-[#0f0f0f] py-24 px-6 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full -translate-y-1/2" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full" />

            <div className="relative container mx-auto max-w-6xl z-10">
                <div className="mb-20 text-center flex flex-col items-center">
                    <BlurFade delay={0.25} inView>
                        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
                            Welcome About Page.
                        </h2>
                    </BlurFade>
                </div>

                <div className="flex justify-center flex-wrap gap-6 items-center">
                    <div className="items-center justify-center relative flex w-full" style={{ maxWidth: "1024px" }}>
                        <CircularTestimonials
                            testimonials={testimonials}
                            autoplay={true}
                            colors={{
                                name: "#f7f7ff",
                                designation: "#a1a1aa", // text-zinc-400
                                testimony: "#f1f1f7",
                                arrowBackground: "rgba(255, 255, 255, 0.05)",
                                arrowForeground: "#f7f7ff",
                                arrowHoverBackground: "rgba(6, 182, 212, 0.4)", // cyan-400 at 40%
                            }}
                            fontSizes={{
                                name: "28px",
                                designation: "20px",
                                quote: "20px",
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
