import { createFileRoute } from "@tanstack/react-router";
import AboutCard from "~/components/AboutCard";
import ConsumingCard from "~/components/ConsumingCard";
import ContactCard from "~/components/ContactCard";
import Experience from "~/components/ExperienceCard";
import Footer from "~/components/Footer";
import InspirationCard from "~/components/InspirationCard";
import SideProjectsCard from "~/components/SideProjectsCard";
import SkillsCard from "~/components/SkillsCard";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <main className="min-h-screen w-7xl mx-auto p-8">
        <section className="flex flex-col md:grid md:grid-cols-4 md:grid-row-6 gap-4">
          <AboutCard />
          <Experience />
          <SideProjectsCard />
          <ConsumingCard />{" "}
        </section>
        <SkillsCard />
        <div className="mt-2 flex gap-4">
          <ContactCard />
          <InspirationCard />
        </div>
      </main>
      <Footer />
    </>
  );
}
