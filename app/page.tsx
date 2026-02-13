import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import EducationSkills from "@/components/EducationSkills";
import Contact from "@/components/Contact";
import About from "@/components/About";
import NoiseBackground from "@/components/NoiseBackground";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      {/* Pro Effects */}
      <NoiseBackground />

      {/* Scroll Container (500vh height) */}
      <div className="relative h-[500vh]">
        {/* Sticky Viewport */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <ScrollyCanvas />
          <Overlay />
        </div>
      </div>

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Projects />

      {/* Experience Section */}
      <Experience />

      {/* Education & Skills Section */}
      <EducationSkills />

      {/* Contact Section */}
      <Contact />
    </main>
  );
}
