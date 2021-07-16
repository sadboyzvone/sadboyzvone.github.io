var e,t,n;import{q as a,R as l,G as r,D as i,S as o,a as c,b as m,c as s,d,e as p,f as u,g,h as f,i as y,j as h,k as E,l as x,m as b,n as v,o as w,p as k,r as $,P as I,s as S,L as F,t as R,u as z,v as N,w as C,A as T,x as D,I as j,y as P,z as L,B as A,C as O,E as M,F as U,H as B,J as q,K as W,M as Y,N as G,O as H,Q as J,T as Z,U as _,V as Q,W as V,X as K,Y as X,Z as ee,_ as te}from"./vendor.3af8c3ed.js";const ne={background:{primary:"#141414"},text:{primary:"#FFFAFF",information:"#3E92CC",warning:"#F5853F",error:"#7A0E00",success:"rgb(16, 204, 82)"}},ae={xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1440},le={fontFamily:"Fira Sans",heading:{fontFamily:"Zen Loop"},navigationItem:{fontFamily:"Fira Sans"}},re=a.div`
  padding: 2rem;
  border-bottom: 1px solid ${ne.text.primary};
`,ie=a.div`
  display: flex;
  flex-direction: column;

  font-family: ${le.fontFamily};
  font-size: 3rem;
  font-weight: 300;
  color: ${ne.text.primary};
  & > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  & > span {
    font-size: 2rem;
    font-weight: 100;
  }
`,oe=a.div`
  font-family: ${le.fontFamily};
  font-size: 2rem;
  font-weight: 200;
  color: ${ne.text.primary};
  font-style: italic;
`;function ce(){return l.createElement(re,null,l.createElement(ie,null,"About me"),l.createElement(oe,null,"A young but, very ambitious developer, always looking for a new problem to tackle head on. With years of experience under the belt, I can assure you that my skills and expertise will provide you with a great product."))}const me=a.div`
  overflow-x: hidden;
  overflow-y: auto;
  height: calc(100vh - 168px) !important;
  scrollbar-color: #33333391 transparent;
  scrollbar-width: thin;

  @media (max-width: ${ae.sm}px) {
    height: calc(100vh - 212px) !important;
  }
`,se=a.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  background-color: ${ne.background.primary};

  & > :nth-child(2) {
    display: flex;
    flex: 1 auto;
    align-items: center;

    & > :first-child {
      height: 100%;
      width: 100%;
    }
  }

  & #tsparticles {
    display: flex;
    align-items: center;

    height: 100%;

    & > canvas {
      max-height: calc(100vh - 200px);
    }
  }

  & > :last-child {
    flex-shrink: 0;
  }
`,de=a.div`
  padding: 2rem;
  border-bottom: 1px solid ${ne.text.primary};
`,pe=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: ${le.fontFamily};
  font-size: 3rem;
  font-weight: 300;
  color: ${ne.text.primary};
  & > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  & > span {
    font-size: 1.5rem;
    font-weight: 100;
  }
`,ue=a.div`
  margin-top: 0.5rem;
  color: ${ne.text.primary};
  font-family: ${le.fontFamily};
  font-size: 5rem;
  gap: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-wrap: wrap;
`,ge=a.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  align-items: center;

  & > span {
    font-size: 0.75rem;
  }
`;function fe(){return l.createElement(de,null,l.createElement(pe,null,l.createElement("div",null,l.createElement(r,null),l.createElement("span",null,"Skills:")),l.createElement("span",null,"My skillset includes but is not limited to:")),l.createElement(ue,null,l.createElement(ge,null,l.createElement(i,null),l.createElement("span",null,"JavaScript")),l.createElement(ge,null,l.createElement(o,null),l.createElement("span",null,"TypeScript")),l.createElement(ge,null,l.createElement(c,null),l.createElement("span",null,"NodeJS")),l.createElement(ge,null,l.createElement(m,null),l.createElement("span",null,"React")),l.createElement(ge,null,l.createElement(s,null),l.createElement("span",null,"Bootstrap"))),l.createElement(ue,null,l.createElement(ge,null,l.createElement(d,null),l.createElement("span",null,"PHP")),l.createElement(ge,null,l.createElement(p,null),l.createElement("span",null,"Drupal")),l.createElement(ge,null,l.createElement(u,null),l.createElement("span",null,"WordPress")),l.createElement(ge,null,l.createElement(g,null),l.createElement("span",null,"Laravel")),l.createElement(ge,null,l.createElement(f,null),l.createElement("span",null,"Symfony"))),l.createElement(ue,null,l.createElement(ge,null,l.createElement(y,null),l.createElement("span",null,"MySQL / MariaDB")),l.createElement(ge,null,l.createElement(h,null),l.createElement("span",null,"PostgreSQL")),l.createElement(ge,null,l.createElement(E,null),l.createElement("span",null,"MongoDB")),l.createElement(ge,null,l.createElement(x,null),l.createElement("span",null,"Neo4J")),l.createElement(ge,null,l.createElement(b,null),l.createElement("span",null,"GraphQL"))),l.createElement(ue,null,l.createElement(ge,null,l.createElement(v,null),l.createElement("span",null,"Git")),l.createElement(ge,null,l.createElement(w,null),l.createElement("span",null,"Docker")),l.createElement(ge,null,l.createElement(k,null),l.createElement("span",null,"CI / CD Pipelines"))))}const ye=a.div`
  padding: 2rem;
  padding-bottom: 0;
`,he=a($.VerticalTimelineElement)`
  font-family: ${le.fontFamily};
  & > div > h3 > a {
    transition: all 300ms ease;
    will-change: color, background-color;
    text-decoration: none;
    color: ${ne.text.primary};
    font-weight: 200;
    border: 1px solid ${ne.text.primary};
    display: block;
    padding: 0.25rem;
    width: max-content;
    max-width: 100%;
    margin-bottom: 0.5rem;
    &:hover {
      background-color: ${ne.text.primary};
      color: ${ne.background.primary};
    }
  }
  & > div > p {
    margin-top: 0.5rem;
    font-weight: 400;

    & > img {
      width: 100%;
    }

    & > .technologies {
      display: flex;
      justify-content: center;
      font-size: 3rem;
      border-top: none !important;
      margin: 0 !important;
      padding: 0 !important;
    }

    & > div:last-child {
      margin-top: 1rem;
      padding-top: 1rem;
      border-top: 1px solid ${ne.text.primary};
      & > span {
        font-style: italic;
        font-weight: 200;
      }
    }
  }
`,Ee=a.span`
  & > a {
    will-change: background-color, border-bottom-color, color;
    transition: all 300ms ease;
    background-color: ${ne.text.primary};
    color: ${ne.background.primary};
    border-bottom: 1px solid transparent;
    text-decoration: none;

    &:hover {
      background-color: ${ne.background.primary};
      color: ${ne.text.primary};
      border-bottom: 1px solid ${ne.text.primary};
    }
  }
`,xe=a.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  color: ${ne.text.primary};
  font-family: ${le.fontFamily};
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 300;

  @media (max-width: 1169px) {
    justify-content: flex-start;
  }
`;function be({date:e,title:t,subtitle:n,description:a,icon:r}){return l.createElement(he,{className:"vertical-timeline-element--work",contentStyle:{background:ne.background.primary,color:ne.text.primary,border:`1px solid ${ne.text.primary}`},contentArrowStyle:{borderRight:`7px solid ${ne.text.primary}`},date:e,icon:r,iconStyle:{background:ne.background.primary,color:ne.text.primary}},l.createElement("h3",{className:"vertical-timeline-element-title"},t),l.createElement("h4",{className:"vertical-timeline-element-subtitle"},n),l.createElement("p",null,a))}function ve(){return l.createElement(ye,null,l.createElement(xe,null,l.createElement(S,null),l.createElement("span",null,"Timeline:")),l.createElement($.VerticalTimeline,null,l.createElement(be,{date:"2016 - Present",title:"Freelance Web Developer",description:l.createElement(l.Fragment,null,"Utilizing modern approaches I'm able to increase your web presence efficiently and quickly. If this something you want, don't be afraid to"," ",l.createElement(Ee,null,l.createElement(F,{to:"/contact"},"contact me")),"."),icon:l.createElement(R,null)}),l.createElement(be,{date:"2021 - Present",title:"Software Developer",subtitle:"Noubis d.o.o",description:"I've worked on multiple complex projects which utilized modern techniques and methods to create high-performance applications which scale.",icon:l.createElement(c,null)}),l.createElement(be,{date:"2019 - 2021",title:"Private Tutor",description:"I've been teaching programming to high school and college students who were struggling with the curriculum which included multiple programming languages like JavaScript, C#, C++ etc.",icon:l.createElement(z,null)}),l.createElement(be,{date:"2019 - 2020",title:"Backend Web Developer",subtitle:"Studio Present",description:"I was working on multiple Drupal 7 and Drupal 8 projects. My responsibilities included: fixing bugs, developing new complex modules and features as well as site-building.",icon:l.createElement(p,null)}),l.createElement(be,{date:"2017 - 2019",title:"Software Engineer",subtitle:"Cardio-Phoenix Inc.",description:"I've been tasked with working on a medical software that communicates with a device called Cardio Tri-Test that helps doctors diagnose heart problems. These include both fixing the old version and adding new features so that the software can be approved by the FDA.",icon:l.createElement(N,null)})))}function we(){return l.createElement(C.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},l.createElement(me,null,l.createElement(ce,null),l.createElement(fe,null),l.createElement(ve,null)))}be.propTypes={title:I.string.isRequired,subtitle:I.string,description:I.any.isRequired,date:I.string.isRequired,icon:I.any};const ke=a.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,$e=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${ne.text.primary};
  font-family: ${le.fontFamily};
  font-size: 5rem;
  font-weight: 200;

  @media (max-width: ${ae.sm}px) {
    font-size: 2.5rem;
  }

  > span {
    color: transparent;
    -webkit-text-stroke: 1px ${ne.text.primary};
  }

  & > svg {
    stroke-width: 10;
    fill: none;
    stroke: ${ne.text.primary};
  }
`,Ie=a.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`,Se=a.label`
  color: ${ne.text.primary};
  font-family: ${le.fontFamily};
  font-weight: 300;
  font-style: italic;
`,Fe=a.input`
  background: transparent;
  border: none;
  font-family: ${le.fontFamily};
  font-size: 1.5rem;
  font-weight: 300;
  color: ${ne.text.primary};
  border-bottom: 1px solid ${ne.text.primary};
`,Re=a.div`
  margin-top: 2rem;
  width: 90%;
  min-width: 300px;
  display: flex;
  flex-direction: column-reverse;
`,ze=a.textarea`
  background: transparent;
  border: 1px solid ${ne.text.primary};
  font-family: ${le.fontFamily};
  font-size: 1.5rem;
  font-weight: 300;
  padding: 0.5rem;
  color: ${ne.text.primary};
`,Ne=a.div`
  ${e=>!e.isSubmitting&&T`
      cursor: pointer;
    `}
  margin-top: 5px;
  transition: all 300ms ease;
  will-change: color, background-color;
  padding: 0.5rem;
  font-weight: 200;
  font-size: 2rem;
  font-family: ${null==(e=le.navigationItem)?void 0:e.fontFamily};

  color: ${ne.text.primary};
  background-color: transparent;
  border: 1px solid ${ne.text.primary};

  &:hover {
    ${e=>!e.isSubmitting&&T`
        color: ${ne.background.primary};
        background-color: ${ne.text.primary};
      `}
  }
`,Ce="https://44740a9a3236c9900081281697531250.m.pipedream.net";var Te,De;function je(){const[e,t]=D.exports.useState(""),[n,a]=D.exports.useState(""),[r,i]=D.exports.useState(""),[o,c]=D.exports.useState(!1),m=(e,t=Te.INFO)=>{switch(t){case Te.INFO:A.info(e);break;case Te.ERROR:A.error(e);break;case Te.SUCCESS:A.success(e);break;case Te.WARNING:A.warning(e)}};return l.createElement(me,null,l.createElement(ke,null,l.createElement($e,null,l.createElement(j,null),l.createElement("span",null,"Contact me")),l.createElement(Ie,null,l.createElement(Re,null,l.createElement(Se,null,"Name"),l.createElement(Fe,{type:"text",value:e,onChange:e=>{t(e.target.value)},disabled:o})),l.createElement(Re,null,l.createElement(Se,null,"E-mail"),l.createElement(Fe,{type:"email",value:n,onChange:e=>{a(e.target.value)},disabled:o})),l.createElement(Re,null,l.createElement(Se,null,"Message"),l.createElement(ze,{rows:3,value:r,onChange:e=>{i(e.target.value)},disabled:o})),l.createElement(Ne,{onClick:t=>{t.preventDefault(),o||(async()=>{if(e.length<1)m("Please enter your name.",Te.ERROR);else if(P(n))if(r.length<1)m("Please enter a message.",Te.ERROR);else{c(!0);try{await L.post(Ce,{name:e,email:n,message:r}),m("Your message has been sent.",Te.SUCCESS)}catch{m("A problem has occurred while sending the message.",Te.WARNING)}c(!1)}else m("Please a valid e-mail address.",Te.ERROR)})()},isSubmitting:o},"Send message"))))}function Pe(){return l.createElement(C.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},l.createElement(je,null))}(De=Te||(Te={}))[De.INFO=0]="INFO",De[De.SUCCESS=1]="SUCCESS",De[De.WARNING=2]="WARNING",De[De.ERROR=3]="ERROR";const Le=a.div``,Ae=a.div`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`,Oe=a.div`
  font-family: ${le.fontFamily};
  font-size: 3rem;
  text-align: center;
  color: ${ne.text.primary};
`,Me=a.div`
  font-family: ${le.fontFamily};
  text-align: center;
  font-size: 2rem;
  font-weight: 200;
  padding-top: 2rem;

  & > a {
    transition: all 300ms ease;
    will-change: color, background-color;
    padding: 1rem;

    color: ${ne.text.primary};
    background-color: transparent;
    border: 1px solid ${ne.text.primary};

    text-decoration: none;

    &:hover {
      color: ${ne.background.primary};
      background-color: ${ne.text.primary};
    }
  }
`;function Ue(){return l.createElement(Le,null,l.createElement(O,{width:"100%",options:{fpsLimit:60,interactivity:{detectsOn:"canvas",events:{onClick:{enable:!0,mode:"push"},onHover:{enable:!0,mode:"repulse"},resize:!0},modes:{bubble:{distance:400,duration:2,opacity:.8,size:40},push:{quantity:4},repulse:{distance:200,duration:.4}}},particles:{color:{value:"#ffffff"},links:{color:"#ffffff",distance:150,enable:!0,opacity:.5,width:1},collisions:{enable:!0},move:{direction:"none",enable:!0,outMode:"bounce",random:!1,speed:6,straight:!1},number:{density:{enable:!0,value_area:800},value:80},opacity:{value:.5},shape:{type:"circle"},size:{random:!0,value:5}},detectRetina:!0}}),l.createElement(Ae,null,l.createElement(Oe,null,"Need to boost your online presence?"),l.createElement(Me,null,l.createElement(F,{to:"/contact"},"Let's talk."))))}function Be(){return l.createElement(C.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},l.createElement(Ue,null))}const qe=a.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > a {
    text-decoration: none;
  }

  @media (max-width: ${ae.sm}px) {
    gap: 1rem;
    flex-direction: column;
  }
`,We=a.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,Ye=a.div`
  -webkit-text-stroke: 1px white;
  color: transparent;
  text-align: center;
  font-size: 5rem;
  font-family: ${le.fontFamily};
`,Ge=a.div`
  font-family: ${le.fontFamily};
  color: ${ne.text.primary};
  text-align: center;

  & > a {
    transition: all 300ms ease;
    will-change: color, background-color;
    text-decoration: none;
    background-color: ${ne.text.primary};
    color: ${ne.background.primary};

    &:hover {
      color: ${ne.text.primary};
      background-color: ${M(.1,ne.background.primary)};
    }
  }
`;function He(){return l.createElement(We,null,l.createElement(Ye,null,"404"),l.createElement(Ye,null,"Page Not Found"),l.createElement(Ge,null,"Are you maybe ",l.createElement(F,{to:"/"},"lost?")))}function Je(){return l.createElement(C.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},l.createElement(qe,null,l.createElement(He,null)))}const Ze=[{Name:"IndieScreening",Client:"Dr. Dale Okorodudu",Description:"IndieScreening is an online screening platform built for filmmakers. \n    It provides an easy way for filmmakers to sell their movies online.\n    Users who want to organize screenings of their favorite movies can do so easily as well.",Year:"Oct. 2020",Image:"/assets/indiescreening.525b5ae2.png",URL:"https://indiescreening.com/",Technologies:[{Icon:p},{Icon:i},{Icon:U}]},{Name:"Raise Your Division",Client:"Cristian-Alexandru Rîpă",Description:'RaiseYourDivision is a "boosting" service for an online game called League of Legends. \n    It features multiple calculators that are separated by tabs. \n    Payment is handled via PayPal and there is even a live chat option. \n    Boosting is when you pay someone else to play a game for you in order to increase your in-game rank.',Year:"Sep. 2020",Image:"/assets/raiseyourdivision.7b1c3247.png",URL:"https://raiseyourdivision.com/",Technologies:[{Icon:m},{Icon:U},{Icon:d}],Testimonial:"Zvonimir created a really good looking website for me, although I must admit that I wasn't sure what it should look like. \n    He managed to surprise me and I was very happy with his explanations, hence I can say that he is a very skilled developer."},{Name:"lolboostelo.net",Client:"Nebojša Popović",Description:'LoLBoostElo is a website that provides "boosting services" for a popular MOBA game League of Legends. \n    Boosting is when you pay someone else to play a game for you in order to increase your in-game rank.',Year:"Oct. 2019",Image:"/assets/lolboostelo.ffece79d.png",Technologies:[{Icon:d},{Icon:B},{Icon:i}],Testimonial:"When I hired Zvonimir I didn't expect him to be that quick. \n    He was easy to communicate with and was ready to answer any questions I had."},{Name:"Miami Street Photography Contest 2017",Client:"Juan Jose Reyes",Description:"The Miami Street Photography Festival is an international street photography festival showcasing the best of contemporary street and documentary photography.\n    Established in 2012, it is the largest and leading street photography festival in the world.",Year:"Sep. 2017",Image:"/assets/mspfcontest.64dfd3c9.png",URL:"https://www.miamistreetphotographyfestival.org/",Technologies:[{Icon:d},{Icon:i},{Icon:B},{Icon:y}],Testimonial:"I highly recommend Zvonimir. He upgraded our website in a very timely manner and it works great. \n    He is a highly knowledgeable and skilled developer and I would recommend him."}];function _e({project:e}){return l.createElement(he,{key:e.Name,className:"vertical-timeline-element--work",contentStyle:{background:ne.background.primary,color:ne.text.primary,border:`1px solid ${ne.text.primary}`},contentArrowStyle:{borderRight:`7px solid ${ne.text.primary}`},date:e.Year.toString(),icon:l.createElement((e=>{if(e&&e.Technologies){return e.Technologies.filter((e=>void 0!==e.Icon))[0].Icon}return q})(e)),iconStyle:{background:ne.background.primary,color:ne.text.primary}},l.createElement("h3",{className:"vertical-timeline-element-title"},e.URL?l.createElement("a",{href:e.URL,target:"_blank",rel:"noopener noreferrer"},e.Name):e.Name),l.createElement("h4",{className:"vertical-timeline-element-subtitle"},e.Client),l.createElement("p",null,e.Image&&l.createElement("img",{src:e.Image,alt:e.Name}),l.createElement("div",{className:"technologies"},e.Technologies&&e.Technologies.map((e=>l.createElement(e.Icon)))),e.Description,e.Testimonial&&l.createElement("div",null,l.createElement("span",null,'"',e.Testimonial,'"'))))}function Qe(){return l.createElement(me,null,l.createElement($.VerticalTimeline,null,Ze.map((e=>l.createElement(_e,{project:e})))))}function Ve(){return l.createElement(me,null,l.createElement(Qe,null))}_e.propTypes={project:I.object.isRequired};const Ke=a.div`
  border-top: 1px solid ${ne.text.primary};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > a {
    text-decoration: none;
  }

  @media (max-width: ${ae.sm}px) {
    gap: 1rem;
    flex-direction: column;
  }
`,Xe=a.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${ne.text.primary};
  font-family: ${le.fontFamily};
`,et=a.div`
  font-size: 1rem;

  @media (max-width: ${ae.sm}px) {
    font-size: 0.5rem;
  }
`,tt=a.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,nt=a.a`
  color: ${ne.text.primary};

  &:hover {
    color: ${W(.3,ne.text.primary)};
  }
`;function at(){return l.createElement(Ke,null,l.createElement(Xe,null,l.createElement(et,null,"Zvonimir Rudinski © ",(new Date).getFullYear()," All rights reserved."),l.createElement(tt,null,l.createElement(nt,{href:"https://github.com/sadboyzvone",rel:"noopener nofollow",target:"_blank"},l.createElement(Y,{size:"2rem"})),l.createElement(nt,{href:"https://www.linkedin.com/in/zvonimirr/",rel:"noopener nofollow",target:"_blank"},l.createElement(G,{size:"2rem"})),l.createElement(nt,{href:"https://www.facebook.com/rudinskiz/",rel:"noopener nofollow",target:"_blank"},l.createElement(H,{size:"1.8rem"})),l.createElement(nt,{href:"https://www.instagram.com/prasak.za.pecivo/",rel:"noopener nofollow",target:"_blank"},l.createElement(J,{size:"2.2rem"})))))}const lt=a.div`
  border-bottom: 1px solid ${ne.text.primary};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > a {
    text-decoration: none;
  }

  @media (max-width: ${ae.sm}px) {
    gap: 1rem;
    flex-direction: column;
  }
`,rt=a.div`
  transition: all 300ms ease;
  will-change: color;
  display: flex;
  align-items: center;
  font-size: 1.75rem;
  gap: 1rem;
  color: ${ne.text.primary};

  & > svg {
    stroke-width: 10;
    fill: none;
    stroke: ${ne.text.primary};
    transform: scale(1.5);
  }

  &:hover {
    & > svg {
      fill: ${ne.text.primary};
    }

    & > h1 {
      color: ${ne.text.primary};
    }
  }

  @media (max-width: ${ae.md}px) {
    gap: 2rem;
    font-size: 1.5rem;
  }
`,it=a.h1`
  margin: 0;
  padding: 0;
  color: transparent;
  -webkit-text-stroke: 1px white;
  font-family: ${null==(t=le.heading)?void 0:t.fontFamily};
`,ot=a.div`
  display: flex;
  gap: 1rem;
  & > a {
    text-decoration: none;
  }
`,ct=a.div`
  transition: all 300ms ease;
  will-change: color, background-color;
  padding: 0.5rem;
  font-weight: 200;
  font-size: 1rem;
  font-family: ${null==(n=le.navigationItem)?void 0:n.fontFamily};

  color: ${ne.text.primary};
  background-color: transparent;
  border: 1px solid ${ne.text.primary};

  &:hover {
    color: ${ne.background.primary};
    background-color: ${ne.text.primary};
  }
`;function mt(){return l.createElement(lt,null,l.createElement(F,{to:"/"},l.createElement(rt,null,l.createElement(Z,{size:"2rem"}),l.createElement(it,null,"Zvonimir Rudinski"))),l.createElement(ot,null,l.createElement(F,{to:"/projects"},l.createElement(ct,null,"Projects")),l.createElement(F,{to:"/about"},l.createElement(ct,null,"About")),l.createElement(F,{to:"/contact"},l.createElement(ct,null,"Contact"))))}function st(){const e=Q();return l.createElement(l.Fragment,null,l.createElement(mt,null),l.createElement(V,{exitBeforeEnter:!0},l.createElement(K,{location:e,key:e.pathname},l.createElement(X,{path:"/projects",exact:!0,component:Ve}),l.createElement(X,{path:"/about",exact:!0,component:we}),l.createElement(X,{path:"/contact",exact:!0,component:Pe}),l.createElement(X,{path:"/",exact:!0,component:Be}),l.createElement(X,{component:Je}))),l.createElement(ee,null),l.createElement(at,null))}function dt(){return l.createElement(se,null,l.createElement(_,null,l.createElement(st,null)))}te.render(l.createElement(l.StrictMode,null,l.createElement(dt,null)),document.getElementById("root"));
