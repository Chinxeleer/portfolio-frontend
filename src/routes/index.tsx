import { createFileRoute } from "@tanstack/react-router";
import Experience from "~/components/ExperienceCard";
import SideProjectsCard from "~/components/SideProjectsCard";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const consuming = [
    {
      type: "Book",
      title: "Mere Christianity",
      author: "CS Lewis",
      image: "/images/mere.jpg",
    },
    {
      type: "Book",
      title: "The Almanack of Naval Ravikant",
      author: "Eric Jorgenson",
      image: "/images/naval.jpg",
    },
    {
      type: "Book",
      title: "Atomic Habits",
      author: "James Clear",
      image: "/images/habits.jpg",
    },
    {
      type: "Book",
      title: "Option Volatility & Pricing",
      author: "Sheldon Natenberg",
      image: "/images/options.jpg",
    },
    {
      type: "Game",
      title: "League of Legends",
      image: "/images/league.jpg",
    },
    {
      type: "Game",
      title: "Silksong",
      image: "/images/silksong.avif",
    },
    {
      type: "Game",
      title: "Forza Horizon",
      image: "/images/forza-horizon.jpg",
    },
    {
      type: "Game",
      title: "Shadow of The Tomb Raider",
      image: "/images/tombraider.avif",
    },{
      type: "Podcast",
      title: "Modern Wisdom",
      author: "Chris Williamson",
      image: "/images/tombraider.avif",
    },
  ];

  return (
    <main className="min-h-screen w-7xl mx-auto p-8">
      <section className="grid grid-cols-4 grid-row-6 gap-4">
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
          <p className="text-start sub-text">
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
        <section className="col-span-2 min-h-20 bg-gray-800 space-y-4 rounded-4xl px-6 py-4">
          <h2>Consuming...</h2>
          <div className="grid grid-cols-2 gap-4 p-4">
            {consuming.map((item) => {
              return (
                <figure className="flex gap-2">
                  <img
                    src={item.image}
                    width={60}
                    height={60}
                    alt="mere christianity"
                  />
                  <figcaption className="text-sm flex flex-col items-center justify-end">
                    <div>
                      <p>{item.type}</p>
                      <p className="sub-text">{item?.author}</p>
                      <p className="sub-text">{item.title}</p>
                    </div>
                  </figcaption>
                </figure>
              );
            })}
          </div>
          <h2>Podcasts</h2>
        </section>
      </section>
    </main>
  );
}
