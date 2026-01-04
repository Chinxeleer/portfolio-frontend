import { createFileRoute } from "@tanstack/react-router";
import Experience from "~/components/ExperienceCard";
import SideProjectsCard from "~/components/SideProjectsCard";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <main className="min-h-screen w-7xl mx-auto p-8">
      <section className="grid grid-cols-4 grid-row-6 gap-2">
        <section className="col-span-2  min-h-20 bg-gray-800 space-y-4 rounded-4xl px-6 py-4">
          <div className="flex items-center space-x-10">
            <div>
              <img
                className="size-30 rounded-full bg-white object-cover"
                src="/images/profile.png"
                alt="profile"
              />
            </div>
            <div>
              <h4>Blessing Kodze</h4>
              <p>Software Engineer</p>
            </div>
          </div>
          <h3>About</h3>
          <p className="text-start">
            Hey I'm Josh, a UX designer currently crafting beautiful experiences
            for BBC. I'm seriously passionate about the intersection of art and
            design. I am dedicated to crafting human-centred design experiences
            that feel like magic when you use them. I have over ten years
            experience solving complex problems and building sustainable
            products.{" "}
          </p>
        </section>

        <Experience />
        <SideProjectsCard />
        <section className="col-span-2 min-h-20 bg-gray-800 space-y-4 rounded-lg px-6 py-4"></section>
        <section className="col-span-2 min-h-20 bg-gray-800 space-y-4 rounded-lg px-6 py-4"></section>
        <section className="col-span-2 min-h-20 bg-gray-800 space-y-4 rounded-lg px-6 py-4"></section>
      </section>
    </main>
  );
}
