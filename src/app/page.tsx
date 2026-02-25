import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import CustomCursor from "@/components/CustomCursor";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

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
