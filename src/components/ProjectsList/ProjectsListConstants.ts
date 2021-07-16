import { DiDrupal, DiJavascript1, DiPhp, DiReact } from "react-icons/di";
import { Project } from "./ProjectListTypes";

import RaiseYourDivision from "../../images/raiseyourdivision.png";

export const Projects: Project[] = [
  {
    Name: "IndieScreening",
    Client: "Dr. Dale Okorodudu",
    Year: 2020,
    URL: "https://indiescreening.com/",
    Technologies: [
      {
        Icon: DiDrupal,
      },
    ],
  },
  {
    Name: "Raise Your Division",
    Client: "Cristian-Alexandru Rîpă",
    Description: `RaiseYourDivision is a "boosting" service for an online game called League of Legends. 
    It features multiple calculators that are separated by tabs. 
    Payment is handled via PayPal and there is even a live chat option. 
    Boosting is when you pay someone else to play a game for you in order to increase your in-game rank.`,
    Year: 2020,
    Image: RaiseYourDivision,
    URL: "https://raiseyourdivision.com/",
    Technologies: [
      {
        Icon: DiReact,
      },
    ],
    Testimonial: `Zvonimir created a really good looking website for me, although I must admit that I wasn't sure what it should look like. 
    He managed to surprise me and I was very happy with his explanations, hence I can say that he is a very skilled developer.`,
  },
  {
    Name: "lolboostelo.net",
    Client: "Nebojša Popović",
    Year: 2019,
    Technologies: [
      {
        Icon: DiPhp,
      },
      {
        Icon: DiJavascript1,
      },
    ],
  },
];
