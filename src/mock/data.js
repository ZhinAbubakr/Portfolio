import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Zhin Abubakr', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Zhin Abubakr',
  subtitle: 'Front End Web Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Seasoned and independent Front End Web Developer with 1 year experience in the skill of programming to deliver an immersive ',
  paragraphTwo:
    'and engaging user experience through efficient website development, proactive feature optimization.',
  paragraphThree: 'Very passionate about aesthetics and UI design.',
  resume:
    'https://docs.google.com/document/d/1-px7gWVdLa70YdYIm362Qeo8UGzAgLZnN9OXS-Rgv68/edit#heading=h.4egklwel34dj', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Screenshot.png',
    title: 'FindYours',
    info:
      '"FindYours" is a web application that helps people who have lost a valuable item to easily find it ',
    info2: 'and to allow people who find things to share them on our platform.',
    url: 'https://findyours.netlify.app/',
    repo: 'https://github.com/ZhinAbubakr/find_yours', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'top-app.png',
    title: 'Weather app',
    info: 'Weather App is a web based Application ',
    info2: 'which is there show weather data based on the location that the user wants',
    url: '',
    repo: 'https://github.com/ZhinAbubakr/weather_app_js', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'zheen99abubakr@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/zhin-ahmad',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/zhin-abubakr-473910181/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ZhinAbubakr',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
