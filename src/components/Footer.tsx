import React from "react";
import { Facebook, Instagram, Linkedin, X } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-[#0f0f0f] pt-16 pb-8 px-6 overflow-hidden border-t border-white/5">

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none" />

            <div className="relative container mx-auto max-w-6xl z-10 flex flex-col md:flex-row justify-between items-center gap-6">

                <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
                        Raj Santosh Singh
                    </h3>
                    <p className="text-white/50 text-sm max-w-xs">
                        Crafting digital experiences with precision, code, and design.
                    </p>
                </div>

                {/* Social Media Links */}
                <div className="flex items-center gap-4">

                    {/* Facebook */}
                    <a
                        href="https://facebook.com/rajsantoshsingh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-blue-500 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
                        aria-label="Facebook"
                    >
                        <Facebook className="w-4 h-4" />
                    </a>

                    {/* X (Twitter) */}
                    <a
                        href="https://twitter.com/rajsantoshsingh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 hover:bg-white/10 transition-all duration-300"
                        aria-label="X"
                    >
                        <X className="w-4 h-4" />
                    </a>

                    {/* Instagram */}
                    <a
                        href="https://instagram.com/rajsantoshsingh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-pink-500 hover:border-pink-500/50 hover:bg-pink-500/10 transition-all duration-300"
                        aria-label="Instagram"
                    >
                        <Instagram className="w-4 h-4" />
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://linkedin.com/in/rajsantoshsingh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-blue-400 hover:border-blue-400/50 hover:bg-blue-400/10 transition-all duration-300"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="w-4 h-4" />
                    </a>

                </div>
            </div>

            <div className="relative container mx-auto max-w-6xl z-10 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-white/40 text-sm">
                    © {currentYear} Raj Santosh Singh. All rights reserved.
                </p>

                <div className="flex gap-6 text-sm text-white/40">
                    <a href="#" className="hover:text-white transition-colors">
                        Privacy Policy
                    </a>
                    <a href="#" className="hover:text-white transition-colors">
                        Terms of Service
                    </a>
                </div>
            </div>
        </footer>
    );
}