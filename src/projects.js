import {
  PROJECT_TYPE,
  FEATURE_TYPE,
  STACK,
  LANGUAGE,
  FRAMEWORK,
  DATABASE,
  HOMBOUND_ORG,
  GITHUB_USERNAME,
} from "./constants";
import hombound1 from "./images/hombound1.png";
import movieme1 from "./images/movieme1.png";
import graphtheory1 from "./images/graphtheory.png";
import greentours1 from "./images/green-tours.png";
import hackertracker1 from "./images/hacker-tracker.png";
import rhaz1 from "./images/rhaz.png";
import wisedb1 from "./images/wisedb1.png";
import wisedb2 from "./images/wisedb2.png";
import wisedb3 from "./images/wisedb3.png";
import sprintbot1 from "./images/sprintbot1.png";
import sprintbot2 from './images/sprintbot2.png'
import sprintbot3 from './images/sprintbot3.png'
import sprintbot4 from './images/sprintbot4.png'

export const PROJECTS = {
  HomBound: {
    name: "HomBound",
    description:
      "HomBound allows sick or at-risk users to make “hombound” requests so fellow members of the community can assist in picking up essentials so they can remain quarantined and we can flatten the curve.",
    notes:
      "The current standing of this project is as of the end of the hackathon but development will pick back up in August 2020.",
    images: [
      {
        src: hombound1,
        alt: "",
      },
      {
        src: "",
        alt: "",
      },
      {
        src: "",
        alt: "",
      },
    ],
    liveLink: "https://hombound.us/",
    demoLink: "https://youtu.be/3YJ3iIcwvm8",
    clientRepo: "https://github.com/HomBound/hombound-client",
    serverRepo: "https://github.com/HomBound/hombound-server",
    trello: "https://trello.com/b/oqqVkaia/hombound",
    individual: true,
    type: PROJECT_TYPE.personal,
    features: [
      {
        name: "feature: ...",
        url: "...",
        type: FEATURE_TYPE.api,
      },
    ],
    stack: [
      LANGUAGE.javascript,
      FRAMEWORK.react,
      LANGUAGE.java,
      FRAMEWORK.spring,
      LANGUAGE.html,
      LANGUAGE.css,
      DATABASE.postgresql,
    ],
    repo: {
      name: "hombound-client",
      owner: HOMBOUND_ORG,
    },
  },
  MovieMe: {
    name: "Movie Me",
    description:
      "Movie Me allows users to add friends and share Movie Lists, add or check-off movies, and manage their lists with different groups of people.",
    notes: "This app is currently in progress.",
    images: [
      {
        src: movieme1,
        alt: "",
      },
      {
        src: "",
        alt: "",
      },
      {
        src: "",
        alt: "",
      },
    ],
    liveLink: "https://movie-mee.netlify.app/",
    demoLink: "",
    clientRepo: "https://github.com/Jarriola989/movie-me-client",
    serverRepo: "https://github.com/Jarriola989/movie-me-server",
    trello: "https://trello.com/b/IJi11iQY/movie-me",
    individual: true,
    type: PROJECT_TYPE.personal,
    features: [
      {
        name: "feature: ...",
        url: "...",
        type: FEATURE_TYPE.api,
      },
    ],
    stack: [
      LANGUAGE.javascript,
      FRAMEWORK.react,
      LANGUAGE.java,
      FRAMEWORK.spring,
      LANGUAGE.html,
      LANGUAGE.css,
      DATABASE.postgresql,
    ],
    repo: {
      name: "movie-me-client",
      owner: GITHUB_USERNAME,
    },
  },
  GreenTours: {
    name: "Green Tours",
    description:
      "Green Tours is a front facing app mainly showcasing advanced CSS and SASS concepts.",
    notes: "",
    images: [
      {
        src: greentours1,
        alt: "green tours homepage",
      },
      {
        src: "",
        alt: "",
      },
      {
        src: "",
        alt: "",
      },
    ],
    liveLink: "https://green-tours.netlify.app/",
    demoLink: "",
    clientRepo: "https://github.com/Jarriola989/green-tours",
    serverRepo: "",
    trello: "",
    individual: true,
    type: PROJECT_TYPE.personal,
    features: [],
    stack: [LANGUAGE.html, LANGUAGE.css, LANGUAGE.sass],
    repo: {
      name: "green-tours",
      owner: GITHUB_USERNAME,
    },
  },
  GraphTheory: {
    name: "Graph Theory",
    description:
      "Graph Theory is a graph algorithm visualization app. It generates random graphs based on the number of nodes selected by a user. ",
    notes: "This app is currently in progress and not deployed yet.",
    images: [
      {
        src: graphtheory1,
        alt: "graph theory app zoom in",
      },
      {
        src: "",
        alt: "",
      },
      {
        src: "",
        alt: "",
      },
    ],
    liveLink: "",
    demoLink: "",
    clientRepo: "https://github.com/Jarriola989/graph-theory-ui",
    serverRepo: "https://github.com/Jarriola989/graph-theory-api",
    trello: "https://trello.com/b/IAJVfRGm/graph-algorithms",
    individual: true,
    type: PROJECT_TYPE.personal,
    features: [
      {
        name: "Randomly generate a graph with desired amount of nodes.",
        url: "",
        type: FEATURE_TYPE.api,
      },
      {
        name: "UI for graph generation visualization.",
        url: "",
        type: FEATURE_TYPE.ui,
      },
      {
        name: "Logic for Dijkstra's algorithm.",
        url: "",
        type: FEATURE_TYPE.api,
      },
    ],
    stack: [
      LANGUAGE.javascript,
      FRAMEWORK.react,
      FRAMEWORK.node,
      LANGUAGE.html,
      LANGUAGE.css,
    ],
    repo: {
      name: "graph-theory-ui",
      owner: GITHUB_USERNAME,
    },
  },
  HackerTracker: {
    name: "Hacker Tracker",
    description:
      "Hacker Tracker is an app to check if your password has been hacked! The password you check is immediately hashed, and then the first four characters are compared to a database of hacked hashed passwords. Once we get those passwords back, we compare to see if yours matches any of them.",
    notes: "",
    images: [
      {
        src: hackertracker1,
        alt: "hacker tracker app homepage",
      },
      {
        src: "",
        alt: "",
      },
      {
        src: "",
        alt: "",
      },
    ],
    liveLink: "https://hacker-tracker.netlify.app/",
    demoLink: "",
    clientRepo: "https://github.com/Jarriola989/password-checker-ui",
    serverRepo: "https://github.com/Jarriola989/password-checker",
    trello: "",
    individual: true,
    type: PROJECT_TYPE.personal,
    features: [],
    stack: [
      LANGUAGE.javascript,
      FRAMEWORK.react,
      LANGUAGE.python,
      FRAMEWORK.flask,
      LANGUAGE.html,
      LANGUAGE.css,
    ],
    repo: {
      name: "password-checker",
      owner: GITHUB_USERNAME,
    },
  },
  Rhaz: {
    name: "Rhaz",
    description:
      "RHAZ was completed during Global Game Jam 2020, a 36hr gaming hackathon. The theme was 'repair' and our astronaut must repair his ship by killing aliens and collecting their mechanical orbs.",
    notes: "",
    images: [
      {
        src: rhaz1,
        alt: "rhaz video game zoom in",
      },
      {
        src: "",
        alt: "rhaz video game",
      },
      {
        src: "",
        alt: "rhaz video game",
      },
    ],
    liveLink: "https://simmer.io/@Dazen/rhaz",
    demoLink: "",
    clientRepo: "",
    serverRepo: "https://github.com/wangscs/RHAZ",
    trello: "",
    individual: false,
    type: PROJECT_TYPE.personal,
    features: [
      {
        name: "Logic for alien movement and re-generation.",
        url: "",
        type: FEATURE_TYPE.api,
      },
    ],
    stack: [LANGUAGE.csharp, STACK.unity],
    repo: {
      name: "rhaz",
      owner: "wangscs",
    },
  },
  WiseDB: {
    name: "WISEdb",
    description:
      "WISEdb is a data management app that allows a team of data analysts to easily parse and match validated ingredients to thousands of recipes and foods. This allows the team to have a complete and accurate nutrient profile on hundreds of thousands of foods eaten daily by Americans.",
    notes: "Internal application.",
    images: [
      {
        src: wisedb1,
        alt: "wise db web app",
      },
      {
        src: wisedb2,
        alt: "wise db web app",
      },
      {
        src: wisedb3,
        alt: "wise db web app",
      },
    ],
    liveLink: "",
    demoLink: "",
    clientRepo: "",
    serverRepo: "",
    trello: "",
    individual: false,
    type: PROJECT_TYPE.professional,
    features: [
      {
        name:
          "Architected and implemented features to parse, match and create large amounts of nutritional data.",
        url: "",
        type: FEATURE_TYPE.api,
      },
      {
        name: "Data migrations for multiple app versions and schema changes",
        url: "",
        type: FEATURE_TYPE.api,
      },
    ],
    stack: [
      LANGUAGE.typescript,
      FRAMEWORK.node,
      LANGUAGE.graphql,
      STACK.prisma,
      DATABASE.redis,
      STACK.docker,
      DATABASE.mongo,
    ],
  },
  BOLO: {
    name: "BOLO",
    description:
      "BOLO allows multiple police agencies to share information in as close to real time as possible.",
    notes:
      "This is an internal application being used by the Pinecrest Police department. I cannot share any further information.",
    images: [
      {
        src: "",
        alt: "",
      },
      {
        src: "",
        alt: "",
      },
      {
        src: "",
        alt: "",
      },
    ],
    liveLink: "",
    demoLink: "",
    clientRepo: "",
    serverRepo: "",
    trello: "",
    individual: false,
    type: PROJECT_TYPE.professional,
    features: [
      {
        name:
          "Ability for administrators to create/modify userguides for new or existing workflows, as well as set permissions to what tier a police must be in order to view.",
        url: "",
        type: FEATURE_TYPE.api,
      },
      {
        name:
          "Timestamped changelog for all major actions done by policemen within the app.",
        url: "",
        type: FEATURE_TYPE.api,
      },
    ],
    stack: [
      LANGUAGE.typescript,
      LANGUAGE.java,
      FRAMEWORK.spring,
      DATABASE.sqlserver,
      STACK.docker,
      STACK.aws,
      LANGUAGE.html,
      LANGUAGE.css,
    ],
  },
  SprintBot: {
    name: "Sprint Bot",
    description:
      "Sprint Bot works through Slack as a virtual scrum master. It assists an agile team in maintaining sprint hygiene by utilizing Asana, Harvest, and Slack API's.",
    notes: "This bot is yet to be released. All repos are private.",
    images: [
      {
        src: sprintbot1,
        alt: "sprint bot logo",
      },
      {
        src: sprintbot2,
        alt: "sprint bot - sprint review dialog",
      },
      {
        src: sprintbot3,
        alt: "sprint bot - select projects view",
      },
      {
        src: sprintbot4,
        alt: "sprint bot - sprint planning dialog",
      },
    ],
    liveLink: "",
    demoLink: "",
    clientRepo: "",
    serverRepo: "",
    trello: "",
    individual: false,
    type: PROJECT_TYPE.professional,
    features: [
      {
        name: "",
        url: "",
        type: FEATURE_TYPE.api,
      },
      {
        name: "Data migrations for multiple app versions and schema changes",
        url: "",
        type: FEATURE_TYPE.api,
      },
    ],
    stack: [
      LANGUAGE.typescript,
      FRAMEWORK.node,
      STACK.docker,
      DATABASE.postgresql,
    ],
  },
};
