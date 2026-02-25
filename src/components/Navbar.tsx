"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // ✅ Updated Links
    const links = [
        { name: "Home", href: "#home" },
        { name: "Skills", href: "#projects" },
        { name: "About", href: "#about" }, // 🔥 Changed Here
        { name: "Contact", href: "#contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="fixed top-0 left-0 w-full z-50 flex justify-center"
        >
            <div className="w-full px-4 md:px-8 mt-2 md:max-w-7xl">
                <div
                    className={`flex items-center justify-between transition-all duration-500 rounded-full
                    ${scrolled
                        ? "py-3 px-8 bg-black/50 backdrop-blur-xl border border-white/10 shadow-xl"
                        : "py-4 px-10 bg-transparent"
                    }`}
                >
                    {/* Logo */}
                    <Link href="/" className="flex items-center shrink-0">
                        <div className="relative group flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full bg-gradient-to-br from-black to-[#1a1a1a] border border-white/20 shadow-[0_0_15px_rgba(34,211,238,0.2)] overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:border-purple-500/50">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <span className="relative z-10 font-serif text-lg md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 tracking-tighter">
                                RS
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-10 ml-auto mr-12">
                        {links.map((link, i) => (
                            <Link
                                key={i}
                                href={link.href}
                                className="relative text-sm font-medium text-white/70 hover:text-white transition group"
                            >
                                {link.name}
                                <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 h-1 w-1 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-300"></span>
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Link
                            href="#contact"
                            className="inline-flex h-11 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 px-7 text-sm font-semibold text-white shadow-lg hover:shadow-cyan-500/30 transition"
                        >
                            Let's Talk
                        </Link>
                    </div>

                    {/* Mobile Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-white"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-full mt-4 w-[90%] max-w-[600px] rounded-2xl backdrop-blur-xl bg-black/70 border border-white/10 shadow-lg md:hidden"
                    >
                        <div className="flex flex-col items-center gap-6 py-8">
                            {links.map((link, i) => (
                                <Link
                                    key={i}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium text-white/80 hover:text-cyan-400 transition"
                                >
                                    {link.name}
                                </Link>
                            ))}

                            <Link
                                href="#contact"
                                onClick={() => setIsOpen(false)}
                                className="mt-4 inline-flex h-12 w-[80%] items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-base font-semibold text-white shadow-lg"
                            >
                                Let's Talk
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}