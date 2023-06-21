import Github from '../images/night/github.png'
import Twitter from '../images/night/twitter.png'
import LinkedIn from '../images/night/linkedin.png'
import Medium from '../images/night/medium.png'
import GithubLight from '../images/day/github.png'
import TwitterLight from '../images/day/twitter.png'
import LinkedInLight from '../images/day/linkedin.png'
import MediumLight from '../images/day/medium.png'

import Achievement1 from '../images/achievement1.png'
import Achievement2 from '../images/achievement2.png'
import Achievement3 from '../images/achievement3.png'

import Blog1 from '../images/blog1.png'
import Blog2 from '../images/blog2.png'
import Blog3 from '../images/blog3.png'
import Blog4 from '../images/blog4.png'
import Blog5 from '../images/blog5.png'


//BLOGS CONSTANTS

export const Blogs_Main_Heading = "Blogs";

export const Blog_1_Heading = "Master the Android Interview";
export const Blog_1_Content = "This blog covers the basic level of android knowledge which includes life cycles of activity, intents, permissions, sending data from one activity to another, back stack and fragments, networking and API calls, android debug bridge (ADB) and socket Programming in Android";
export const Blog_2_Heading = "Four Pillars of OOP";
export const Blog_2_Content = "This blog covers real life examples of four pillars of object oriented programming";
export const Blog_3_Heading = "A biginners guide to REACTJS";
export const Blog_3_Content = "This blog covers basic introduction of React JS framework using real life examples (Youtube page structure)";
export const Blog_4_Heading = "Design a circle in Android";
export const Blog_4_Content = "This blog is about designing a circular screen or circular design using linear layout.";
export const Blog_5_Heading = "Design a bar chart in Android";
export const Blog_5_Content = "This blog is about designing a bar chart screen or bar chart design using linear layout.";
export const Blog_1_URL = "https://medium.com/@hamzzza.ahmed95/master-the-android-interview-basics-3f7511a4a2fc";
export const Blog_2_URL = "https://medium.com/@hamzzza.ahmed95/four-pillars-of-object-oriented-programming-oop-e8d7822aa219";
export const Blog_3_URL = "https://medium.com/@hamzzza.ahmed95/a-beginners-guide-to-reactjs-2b59db83fa18";
export const Blog_4_URL = "https://medium.com/@hamzzza.ahmed95/designing-a-circle-with-linearlayout-in-android-625baa1bf4f6";
export const Blog_5_URL = "https://medium.com/@hamzzza.ahmed95/designing-bar-charts-using-linearlayouts-in-android-d01e9846678e";


//About Me

export const NAME = "Hamza Ahmed";
export const ABOUT_ME = "About Me";
export const PROJECTS = "Projects";
export const ACHIEVEMENT = "Achievements";
export const BLOGS = "Blogs";
export const LINKEDIN_URL = "https://www.linkedin.com/in/hamzaahmed95/"
export const MEDIUM_URL = "https://medium.com/@hamzzza.ahmed95"
export const GITHUB_URL = "https://github.com/hamzaahmed95"
export const TWITTER_URL = "https://twitter.com/hagab95"

//INTRODUCTION

export const OCCUPATION = "Software Engineer"
export const JAVASCRIPT = "Javascript"
export const INTRO = " I am a highly skilled Senior Frontend Engineer with over 5 years of experience specializing in"
export const REACT = " REACT"
export const TYPESCRIPT = " TYPESCRIPT "
export const EMAIL = "hamza.ahmed0402@gmail.com"
export const COMPANY = "Hong Leong Bank, Kuala Lumpur, Malaysia"
export const PROFESSION = "Android Developer"
export const CONTACT_NUMBER = "(+60) 18 390 8407"
export const CONTACT_DETAILS = "Currently working as an"

//ACHIEVEMENTS

export const Achievements_Main_Heading = "Achievements"
export const Achievement_1_Heading = "Winner of PROCOM 2018"
export const Achievement_1_Content = "I won national level mobile development competition held in 2018. Our team consist of three and we are top among 20 teams"
export const Achievement_2_Heading = "Awarded for Creating League App"
export const Achievement_2_Content = "I was awarded by sportics society for creating an android app which has been downloaded by 2k people from playstore. The purpose of this app is to digitalised the sports league. All the scores, team records, points table, man of the match and live scores can be foundd in the app"
export const Achievement_3_Heading = "App head award in DevDay 2018"
export const Achievement_3_Content = "It was honoured for me to design question set for National level competition and also I was given award of appreciation by ACM society for becoming head of mobile development competition at DEV DAY 2018"


//MY PROJECTS

export const details = " With a passion for creating interactive and user-friendly web applications, I strive to deliver high-quality code and exceptional user experiences. Throughout my career, I have worked on a variety of projects, ranging from small startups to large-scale enterprise applications. My strong knowledge of frontend technologies, combined with my expertise in React and Typescript, allows me to build robust and scalable solutions."


//Utilities
export const icons = [
    {
        name: { dark: Twitter, light: TwitterLight },
        url: TWITTER_URL
    },
    {
        name: { dark: Github, light: GithubLight },
        url: GITHUB_URL
    },
    {
        name: { dark: LinkedIn, light: LinkedInLight },
        url: LINKEDIN_URL
    },
    {
        name: { dark: Medium, light: MediumLight },
        url: MEDIUM_URL
    }
]

export const sections = [
    {
        name: "aboutMe",
        text: ABOUT_ME
    },
    {
        name: "achievements",
        text: ACHIEVEMENT
    },
    {
        name: "blogs",
        text: BLOGS
    },
    {
        name: "projects",
        text: PROJECTS
    }
]

export const achievements = [
    {
        img_url: Achievement1,
        heading: Achievement_1_Heading,
        content: Achievement_1_Content
    },
    {
        img_url: Achievement2,
        heading: Achievement_2_Heading,
        content: Achievement_2_Content
    },
    {
        img_url: Achievement3,
        heading: Achievement_3_Heading,
        content: Achievement_3_Content
    }
]


export const blogs = [
    {
        name: Blog_1_Heading,
        description: Blog_1_Content,
        img_url: Blog1,
        link: Blog_1_URL,
    },
    {
        name: Blog_2_Heading,
        description: Blog_2_Content,
        img_url: Blog2,
        link: Blog_2_URL,
    },
    {
        name: Blog_3_Heading,
        description: Blog_3_Content,
        img_url: Blog3,
        link: Blog_3_URL,
    },
    {
        name: Blog_4_Heading,
        description: Blog_4_Content,
        img_url: Blog4,
        link: Blog_4_URL,
    },
    {
        name: Blog_5_Heading,
        description: Blog_5_Content,
        img_url: Blog5,
        link: Blog_5_URL,
    },
]






