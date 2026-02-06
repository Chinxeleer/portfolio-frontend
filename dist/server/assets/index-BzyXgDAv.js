import { jsxs, jsx, Fragment } from "react/jsx-runtime";
function AboutCard() {
  return /* @__PURE__ */ jsxs("section", { className: "md:col-span-2 card-background space-y-4 rounded-4xl px-6 py-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-10", children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        "img",
        {
          className: "size-30 rounded-full bg-white object-cover",
          src: "/images/profile.png",
          alt: "profile"
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "text-2xl", children: "Blessing Kodze" }),
        /* @__PURE__ */ jsx("p", { children: "Software Engineer" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("h3", { children: "About" }),
    /* @__PURE__ */ jsx("p", { className: "text-start sub-text", children: "Hey, I'm Blessing, a systems engineer and researcher building at the intersection of blockchain and artificial intelligence. I'm seriously passionate about decentralized systems, cryptographic protocols, and how Rust enables us to write safe, performant code for Web3 applications. I am dedicated to exploring how blockchain can transform traditional systems while leveraging my background in machine learning and full-stack development. I have experience shipping production software, conducting deep learning research that demonstrated Mamba's superiority over transformers in financial forecasting, and now focusing on building secure, scalable blockchain applications with Rust" })
  ] });
}
function ConsumingCard() {
  const consuming = [
    {
      type: "Book",
      link: "https://www.amazon.com/Mere-Christianity-C-S-Lewis/dp/0060652926",
      title: "Mere Christianity",
      author: "CS Lewis",
      image: "/images/mere.jpg"
    },
    {
      type: "Book",
      link: "https://www.amazon.com/Almanack-Naval-Ravikant-Wealth-Happiness/dp/B0FBCVCC7M/ref=sr_1_1?dib=eyJ2IjoiMSJ9.nplEulW1MfFYOXD3zrSm6UyQ1BxBu_JT7GtKlI3s8mvx-1x4Kkmph-Plr0mJLwijUoWRdy8KgaLI0O7jrZHHnHxAR6c5hMcLvzB3qHzVDQRe22W3aWvSJEUcRgbpKrgJuTMJ_1fMILTMI8GTIK_mteXZHzw8Ebt_MgyUWA_YGxU8-QcohASDzjR_mH5XVOZVHytoMUHTp9V3ZEfLFXnmaheiIm7cPpUQY7HpDbGuifw.5UMUPZIZD02Ntp8v4HW0_pzw3yzvGqllmHIp8sw_wsU&dib_tag=se&keywords=the+almanack&qid=1768399340&sr=8-1",
      title: "The Almanack of Naval Ravikant",
      author: "Eric Jorgenson",
      image: "/images/naval.jpg"
    },
    {
      type: "Book",
      link: "https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299",
      title: "Atomic Habits",
      author: "James Clear",
      image: "/images/habits.jpg"
    },
    {
      type: "Book",
      link: "https://www.amazon.com/Option-Volatility-Pricing-Strategies-Techniques-dp-0071818774/dp/0071818774/ref=dp_ob_title_bk",
      title: "Option Volatility & Pricing",
      author: "Sheldon Natenberg",
      image: "/images/options.jpg"
    },
    {
      type: "Game",
      link: "https://www.leagueoflegends.com/en-us/",
      title: "League of Legends",
      image: "/images/league.jpg"
    },
    {
      type: "Game",
      link: "https://hollowknightsilksong.com/",
      title: "Silksong",
      image: "/images/silksong.avif"
    },
    {
      type: "Game",
      link: "https://forza.net/horizon/",
      title: "Forza Horizon 5",
      image: "/images/forza-horizon.jpg"
    },
    {
      type: "Game",
      link: "https://www.tombraider.com/products/games/shadow-of-the-tomb-raider-definitive-edition",
      title: "Shadow of The Tomb Raider",
      image: "/images/tombraider.avif"
    },
    {
      type: "Podcast",
      link: "https://www.youtube.com/@ChrisWillx",
      title: "Modern Wisdom",
      author: "Chris Williamson",
      image: "/images/modern-wisdom.webp"
    }
  ];
  return /* @__PURE__ */ jsxs("section", { className: "col-span-2 min-h-20 card-background space-y-4 rounded-4xl px-6 py-4", children: [
    /* @__PURE__ */ jsx("h3", { children: "Consuming..." }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4 p-4", children: consuming.map((item, index) => {
      return /* @__PURE__ */ jsxs("figure", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            className: "object-cover rounded-sm shrink-0",
            src: item.image,
            width: 50,
            height: 70,
            alt: item.title
          }
        ),
        /* @__PURE__ */ jsx("figcaption", { className: "text-sm flex flex-col justify-end flex-1 min-w-0", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-1 truncate", children: [
          /* @__PURE__ */ jsx("a", { href: item.link, className: "truncate", children: item.type }),
          /* @__PURE__ */ jsx("p", { className: "sub-text truncate", children: item?.author }),
          /* @__PURE__ */ jsx("p", { className: "sub-text truncate", children: item.title })
        ] }) })
      ] }, index);
    }) })
  ] });
}
function ContactCard() {
  return /* @__PURE__ */ jsxs("section", { className: "w-full card-background rounded-4xl px-6 py-4 mt-4 h-[20vh]", children: [
    /* @__PURE__ */ jsx("h1", { children: "Contact" }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4 p-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://www.linkedin.com/in/blessingkodze",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "LinkedIn"
          }
        ),
        " ",
        /* @__PURE__ */ jsx("p", { children: "Connect with me" }),
        " "
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://github.com/chinxeleer",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "Github"
          }
        ),
        /* @__PURE__ */ jsx("p", { children: "Follow me on github" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "mailto:blessingeleer.programming@gmail.com",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "Email"
          }
        ),
        /* @__PURE__ */ jsx("p", { children: "Send me an email" })
      ] })
    ] })
  ] });
}
function Experience() {
  return /* @__PURE__ */ jsxs("section", { className: "md:col-span-2 md:min-h-20 card-background space-y-4 rounded-4xl px-6 py-4", children: [
    /* @__PURE__ */ jsx("h3", { children: "Experience" }),
    /* @__PURE__ */ jsx("table", { className: "w-full", children: /* @__PURE__ */ jsxs("tbody", { className: "space-y-20", children: [
      /* @__PURE__ */ jsxs("tr", { className: "", children: [
        /* @__PURE__ */ jsx("td", { className: "py-4 w-1/4 align-top", children: /* @__PURE__ */ jsx("span", { className: "rounded-full px-2 py-1 text-blue-900 text-[12px] bg-[#42fd55]", children: "Present" }) }),
        /* @__PURE__ */ jsx("td", { className: "py-4 w-3/4 align-top", children: /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { children: "Junior Software Developer" }),
          /* @__PURE__ */ jsx("a", { href: "", target: "_blank", children: "RiskCafe" }),
          /* @__PURE__ */ jsx("p", { className: "sub-text", children: "Rosebank, Johannesburg" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("tr", { className: "", children: [
        /* @__PURE__ */ jsx("td", { className: "py-4 w-1/4 align-top", children: /* @__PURE__ */ jsx("p", { children: "2025" }) }),
        /* @__PURE__ */ jsx("td", { className: "py-4 w-3/4 align-top", children: /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { children: "Software Developer" }),
          /* @__PURE__ */ jsx("a", { href: "", target: "_blank", children: "AnalyticsX" }),
          /* @__PURE__ */ jsx("p", { className: "sub-text", children: "Sandton, Johannesburg" })
        ] }) })
      ] })
    ] }) })
  ] });
}
function Footer() {
  let time2 = /* @__PURE__ */ new Date();
  return /* @__PURE__ */ jsx("footer", { className: "w-7xl mx-auto text-white py-4 px-6 h-24", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
    /* @__PURE__ */ jsxs("h1", { children: [
      /* @__PURE__ */ jsx("span", { children: "©" }),
      " Blessing Kodze"
    ] }),
    /* @__PURE__ */ jsx("p", { children: time2.getFullYear() }),
    /* @__PURE__ */ jsx("p", { children: "Software Engineer" })
  ] }) });
}
function InspirationCard() {
  return /* @__PURE__ */ jsxs("section", { className: "w-full card-background rounded-4xl px-6 py-4 mt-4 h-[20vh]", children: [
    /* @__PURE__ */ jsx("h1", { children: "Inspiration" }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4 p-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://thesquareplanet.com/",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "Jon Jengset"
          }
        ),
        /* @__PURE__ */ jsx("p", { children: "Avid Rust Educator" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://www.seesaw.website/",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "SeeSaw"
          }
        ),
        /* @__PURE__ */ jsx("p", { children: "World of Stunning Websites" })
      ] })
    ] })
  ] });
}
function SideProjectsCard() {
  return /* @__PURE__ */ jsxs("section", { className: "col-span-2 card-background space-y-8 rounded-4xl px-6 py-4", children: [
    /* @__PURE__ */ jsx("h3", { children: "Side Projects" }),
    /* @__PURE__ */ jsx("table", { className: "w-full", children: /* @__PURE__ */ jsxs("tbody", { children: [
      /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("td", { className: "py-4 w-1/4 align-top", children: /* @__PURE__ */ jsx("p", { children: "2025" }) }),
        /* @__PURE__ */ jsx("td", { className: "py-4 w-3/4 align-top", children: /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://github.com/Chinxeleer/research_project",
              target: "_blank",
              children: "Comparative Forecasting and Prediction Research"
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "sub-text", children: "Evaluated transformer based and state space models for financial time series forecasting under non stationary, high noise conditions." })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("td", { className: "py-4 w-1/4 align-top", children: /* @__PURE__ */ jsx("p", { children: "2024" }) }),
        /* @__PURE__ */ jsx("td", { className: "py-4 w-3/4 align-top", children: /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("a", { href: "AnalyticsX", target: "_blank", children: "Rust Portfolio Website" }),
          /* @__PURE__ */ jsxs("p", { className: "sub-text", children: [
            "Designed and deployed a full-stack Rust system using",
            " ",
            /* @__PURE__ */ jsx("a", { href: "https://www.leptos.dev/", target: "_blank", children: "Leptos framework" }),
            " ",
            "and",
            " ",
            /* @__PURE__ */ jsx("a", { href: "https://docs.rs/axum/latest/axum/", target: "_blank", children: "Axum" }),
            " ",
            ", with emphasis on async execution, containerization with Docker, file and Markdown content management, and production deployment on",
            " ",
            /* @__PURE__ */ jsx("a", { href: "https://fly.io/", target: "_blank", children: "fly.io" }),
            "."
          ] })
        ] }) })
      ] })
    ] }) })
  ] });
}
function SkillsCard() {
  return /* @__PURE__ */ jsxs("section", { className: "w-full card-background rounded-4xl px-6 py-4 mt-4 h-[30vh]", children: [
    /* @__PURE__ */ jsx("h1", { children: "Skills" }),
    /* @__PURE__ */ jsx("div", { className: "h-[20vh] mt-8", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400 text-center", children: "Skills slide show coming soon..." }) })
  ] });
}
function Home() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("main", { className: "min-h-screen w-7xl mx-auto p-8", children: [
      /* @__PURE__ */ jsxs("section", { className: "flex flex-col md:grid md:grid-cols-4 md:grid-row-6 gap-4", children: [
        /* @__PURE__ */ jsx(AboutCard, {}),
        /* @__PURE__ */ jsx(Experience, {}),
        /* @__PURE__ */ jsx(SideProjectsCard, {}),
        /* @__PURE__ */ jsx(ConsumingCard, {}),
        " "
      ] }),
      /* @__PURE__ */ jsx(SkillsCard, {}),
      /* @__PURE__ */ jsxs("div", { className: "mt-2 flex gap-4", children: [
        /* @__PURE__ */ jsx(ContactCard, {}),
        /* @__PURE__ */ jsx(InspirationCard, {})
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Home as component
};
