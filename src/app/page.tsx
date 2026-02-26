import dynamic from "next/dynamic";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Navbar from "@/components/Navbar";

const Projects = dynamic(() => import("@/components/Projects"), { ssr: true });
const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: true });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });
const CustomCursor = dynamic(() => import("@/components/CustomCursor"));

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen text-white relative">
      <div className="relative">
        <ScrollyCanvas />
        <Overlay />
      </div>
      <Navbar />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
      <CustomCursor />
    </main>
  );
}
