"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Send, Mail, MapPin, Phone, CheckCircle } from "lucide-react";
import { submitContact } from "@/app/actions/contact";
import { AnimatedText } from "./ui/animated-shiny-text";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const formData = new FormData(e.currentTarget);
            await submitContact(formData);
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 5000);
        } catch (error) {
            console.error("Error submitting form", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const fadeUpVariant: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
    };

    const staggerContainer: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    };

    return (
        <section className="relative bg-[#0f0f0f] py-32 px-6 overflow-hidden" id="contact">
            {/* Background Glows */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full point-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative container mx-auto max-w-6xl z-10">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid lg:grid-cols-2 gap-16 items-center"
                >
                    {/* Left Side: Contact Info */}
                    <motion.div variants={fadeUpVariant} className="space-y-8">
                        <div>
                            <AnimatedText
                                text="Let's Work Together"
                                textClassName="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-left w-full"
                                gradientColors="linear-gradient(90deg, #ffffff, #22d3ee, #a855f7, #ffffff)"
                                className="justify-start py-0"
                                gradientAnimationDuration={3}
                            />
                            <p className="text-white/60 text-lg max-w-md leading-relaxed">
                                Interested in working together or have any questions? Feel free to contact me. I’m always open to new opportunities and collaborations.                            </p>
                        </div>

                        <div className="space-y-6 pt-4">
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan-400/50 group-hover:bg-cyan-400/10 transition-colors">
                                    <Mail className="w-5 h-5 text-cyan-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-white/40 mb-1">Email</p>
                                    <p className="text-white font-medium">SATYAMSINGH.82844@GMAIL.COM</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-purple-500/50 group-hover:bg-purple-500/10 transition-colors">
                                    <Phone className="w-5 h-5 text-purple-500" />
                                </div>
                                <div>
                                    <p className="text-sm text-white/40 mb-1">Phone</p>
                                    <p className="text-white font-medium">+91 93242 73931</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan-400/50 group-hover:bg-cyan-400/10 transition-colors">
                                    <MapPin className="w-5 h-5 text-cyan-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-white/40 mb-1">Location</p>
                                    <p className="text-white font-medium">India</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: The Form */}
                    <motion.div variants={fadeUpVariant}>
                        <div className="p-8 md:p-10 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="firstName" className="text-sm font-medium text-white/70 ml-1">First Name</label>
                                        <input
                                            id="firstName"
                                            name="firstName"
                                            type="text"
                                            required
                                            placeholder="Enter a name"
                                            className="w-full px-5 py-4 rounded-2xl bg-black/40 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-cyan-400 focus:bg-white/5 transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="lastName" className="text-sm font-medium text-white/70 ml-1">Last Name</label>
                                        <input
                                            id="lastName"
                                            name="lastName"
                                            type="text"
                                            required
                                            placeholder="Enter a last name"
                                            className="w-full px-5 py-4 rounded-2xl bg-black/40 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-cyan-400 focus:bg-white/5 transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-white/70 ml-1">Email Address</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        placeholder="Enter a email"
                                        className="w-full px-5 py-4 rounded-2xl bg-black/40 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-cyan-400 focus:bg-white/5 transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-white/70 ml-1">Your Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={4}
                                        placeholder="Tell me about your project..."
                                        className="w-full px-5 py-4 rounded-2xl bg-black/40 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-cyan-400 focus:bg-white/5 transition-all resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting || submitted}
                                    className="w-full relative group overflow-hidden py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-semibold transition-all duration-300 hover:border-cyan-400/50"
                                    style={{
                                        boxShadow: submitted ? "0 0 20px rgba(16, 185, 129, 0.4)" : "none"
                                    }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative flex items-center justify-center gap-2">
                                        {isSubmitting ? (
                                            <span className="flex items-center gap-2">
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                                />
                                                Sending...
                                            </span>
                                        ) : submitted ? (
                                            <span className="text-emerald-400 font-bold flex items-center gap-2">
                                                <CheckCircle className="w-5 h-5" />
                                                Message Sent Successfully!
                                            </span>
                                        ) : (
                                            <>
                                                <span>Send Message</span>
                                                <Send className="w-4 h-4 group-hover:-mt-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                            </>
                                        )}
                                    </div>
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
