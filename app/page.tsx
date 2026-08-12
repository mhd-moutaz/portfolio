import { Background } from "./components/background";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { StackSection } from "./components/stack-section";
import { WorkSection } from "./components/work-section";
import { ExperienceSection } from "./components/experience-section";
import { ContactSection } from "./components/contact-section";
import { Footer } from "./components/footer";

export default function HomePage() {
  return (
    <>
      <Background />
      <Header />
      <main>
        <Hero />
        <StackSection />
        <WorkSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
