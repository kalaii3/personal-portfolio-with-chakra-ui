import type { Portfolio } from "@/types";

export const portfolioList: Portfolio[] = [
 {
    title: "Portfolio V1",
    imageThumbnail: "/assets/images/portfolio.webp",
    description:
      "This is my first portfolio website that I created using React JS and Bootstrap. This website is a website that can display information about me, my skills, my experiences, my projects and my contact information.",
    livePreviewURL: "https://kalaii.me/",
    repositoryURL: "https://github.com/Kalai2773/portfolio",
    techStack: [
      {
        tech: "React JS",
        logo: "/assets/svg/react.svg",
      },
      {
        tech: "Bootstrap",
        logo: "/assets/svg/bootstrap.svg",
      },
    ],
  },
 
  {
    title: "Weather Forcaste",
    imageThumbnail: "/assets/images/weather.png",
    description:
      "This is a website that I created using React JS and Tailwind CSS. This website is a website that can display weather information in a city. This website uses the OpenWeatherMap API to get weather information.",
    livePreviewURL: "https://kalai-weather.vercel.app/",
    repositoryURL: "https://github.com/Kalai2773/weather-forecast",
    techStack: [
      {
        tech: "react Js",
        logo: "/assets/svg/react.svg",
      },
      {
        tech: "Tailwind",
        logo: "/assets/svg/tailwind.svg",
      },
    ],
  },
  {
    title: "YoDoo",
    imageThumbnail: "/assets/images/yodooo.png",
    description:
      "YoDoo is a website that I created using React JS. This website is a simple to do list application. This website allows users to add, edit, delete, and mark as done their tasks. This website aims to help users manage their daily activities and goals in an easy and fun way.",
    livePreviewURL: "https://yodooo.vercel.app/",
    repositoryURL: "https://github.com/Kalai2773/yodoo",
    techStack: [
      {
        tech: "React JS",
        logo: "/assets/svg/react.svg",
      },
    ],
  },
  {
    title: "Arti Discord Bot ",
    imageThumbnail: "/assets/images/Arti.webp",
    description:
      "Crappo is a website that I created using React JS and Tailwind CSS technologies. This website is about cryptocurrency investment. This website allows users to view, buy, and sell various cryptocurrencies such as Bitcoin, Ethereum, and Dogecoin. This website also has features such as charts, news, and alerts. This website aims to provide users with a convenient and secure platform to invest in the growing and volatile cryptocurrency market.",
    livePreviewURL: "https://discord.com/channels/@me/1017603739462402170/",
    repositoryURL: "https://github.com/Kalai2773/Discord-bot-template",
    techStack: [
      {
        tech: "discord Js",
        logo: "/assets/svg/discord.svg",
      },
      {
        tech: "Node Js",
        logo: "/assets/svg/node js.svg",
      },
      {
        tech: "MongoDB",
        logo: "/assets/svg/mongodb.svg",
      },
    ],
  },
 
];
