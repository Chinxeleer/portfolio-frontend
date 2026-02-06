import { link } from "fs";
import React from "react";

function ConsumingCard() {
  const consuming = [
    {
      type: "Book",
      link: "https://www.amazon.com/Mere-Christianity-C-S-Lewis/dp/0060652926",
      title: "Mere Christianity",
      author: "CS Lewis",
      image: "/images/mere.jpg",
    },
    {
      type: "Book",
      link: "https://www.amazon.com/Almanack-Naval-Ravikant-Wealth-Happiness/dp/B0FBCVCC7M/ref=sr_1_1?dib=eyJ2IjoiMSJ9.nplEulW1MfFYOXD3zrSm6UyQ1BxBu_JT7GtKlI3s8mvx-1x4Kkmph-Plr0mJLwijUoWRdy8KgaLI0O7jrZHHnHxAR6c5hMcLvzB3qHzVDQRe22W3aWvSJEUcRgbpKrgJuTMJ_1fMILTMI8GTIK_mteXZHzw8Ebt_MgyUWA_YGxU8-QcohASDzjR_mH5XVOZVHytoMUHTp9V3ZEfLFXnmaheiIm7cPpUQY7HpDbGuifw.5UMUPZIZD02Ntp8v4HW0_pzw3yzvGqllmHIp8sw_wsU&dib_tag=se&keywords=the+almanack&qid=1768399340&sr=8-1",
      title: "The Almanack of Naval Ravikant",
      author: "Eric Jorgenson",
      image: "/images/naval.jpg",
    },
    {
      type: "Book",
      link: "https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299",
      title: "Atomic Habits",
      author: "James Clear",
      image: "/images/habits.jpg",
    },
    {
      type: "Book",
      link: "https://www.amazon.com/Option-Volatility-Pricing-Strategies-Techniques-dp-0071818774/dp/0071818774/ref=dp_ob_title_bk",
      title: "Option Volatility & Pricing",
      author: "Sheldon Natenberg",
      image: "/images/options.jpg",
    },
    {
      type: "Game",
      link: "https://www.leagueoflegends.com/en-us/",
      title: "League of Legends",
      image: "/images/league.jpg",
    },
    {
      type: "Game",
      link: "https://hollowknightsilksong.com/",
      title: "Silksong",
      image: "/images/silksong.avif",
    },
    {
      type: "Game",
      link: "https://forza.net/horizon/",
      title: "Forza Horizon 5",
      image: "/images/forza-horizon.jpg",
    },
    {
      type: "Game",
      link: "https://www.tombraider.com/products/games/shadow-of-the-tomb-raider-definitive-edition",
      title: "Shadow of The Tomb Raider",
      image: "/images/tombraider.avif",
    },
    {
      type: "Podcast",
      link: "https://www.youtube.com/@ChrisWillx",
      title: "Modern Wisdom",
      author: "Chris Williamson",
      image: "/images/modern-wisdom.webp",
    },
  ];
  return (
    <section className="col-span-2 min-h-20 card-background space-y-4 rounded-4xl px-6 py-4">
      <h3>Consuming...</h3>
      <div className="grid grid-cols-2 gap-4 p-4">
        {consuming.map((item) => {
          return (
            <figure className="flex gap-2">
              <img
                className="object-cover rounded-sm shrink-0"
                src={item.image}
                width={50}
                height={70}
                alt={item.title}
              />
              <figcaption className="text-sm flex flex-col justify-end flex-1 min-w-0">
                <div className="flex flex-col space-y-1 truncate">
                  <a href={item.link} className="truncate">{item.type}</a>
                  <p className="sub-text truncate">{item?.author}</p>
                  <p className="sub-text truncate">{item.title}</p>
                </div>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
}

export default ConsumingCard;
