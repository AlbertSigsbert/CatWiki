<!-- Please update value in the {}  -->

<h1 align="center">{CatWiki}</h1>

<div align="center">
   Solution for a challenge from  <a href="http://devchallenges.io" target="_blank">Devchallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="https://cat-wiki-phi.vercel.app/">
      Demo
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/solutions/gu1fU08DlObSiwvpSMTk">
      Solution
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/challenges/f4NJ53rcfgrP6sBMD2jt">
      Challenge
    </a>
  </h3>
</div>

<!-- OVERVIEW -->

## Overview

![cat-wiki(screenshot)](https://user-images.githubusercontent.com/66664314/216924870-95c1b143-ac42-41ba-8311-3cb9f8fd5d6d.png)

To create this project I used Nextjs due to many reasons but mainly because the challenge requirements stated that **the client-side should not use the API directly. Everything should be handled on the server-side.** So instead of using different frameworks for client and server code I opted for Nextjs which provides you with both.

For styling, I reached out to tailwind CSS due to its great compatibility with NextJS and also it's so natural and easy to use at least for me

Another feature that was a little bit tricky to implement was the most searched cat breeds because it's not directly supported by the given API so I had to get 
creative to implement it manually and I did achieve it using ContextAPI and LocalStorage

Finally, I it was so fun building this project since I am a cat lover, it's always great to be able to use code to build the things you love :-)


### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

- [Nextjs](https://nextjs.org/)
- [Tailwind](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [TheCatAPI](https://thecatapi.com/)

## Features

<!-- List the features of your application or follow the template. Don't share the figma file here :) -->

This application/site was created as a submission to a [DevChallenges](https://devchallenges.io/challenges) challenge. The [challenge](https://devchallenges.io/challenges/f4NJ53rcfgrP6sBMD2jt) was to build an application the following user stories.

- User can search for cat breeds and select a breed of his/her choice
- User can see the most popular searched cat breeds summary on the homepage
- User can see the top 10 most searched cat breeds
- User can see the breed details including description, temperament, origin, life span, adaptability, affection level, child-friendly, grooming, intelligence, health    issues, social needs, stranger friendly
- User can see more photo of the breed
- User on mobile, when he/she select the search option, a modal for breed search should pop up
- (optional): User  can go to an article about cats when he/she click read more on Why you should have a cat section
- (optional): User can go to the top 10 cats by clicking see more in the dashboard

## How To Use

<!-- Example: -->

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/your-user-name/your-project-name

# Install dependencies
$ npm install

# SignUp at the catsAPI

# Add your API KEY to your .env file

# Run the app
$ npm run dev
```

## Acknowledgements

<!-- This section should list any articles or add-ons/plugins that helps you to complete the project. This is optional but it will help you in the future. For example: -->

- [Steps to replicate a design with only HTML and CSS](https://devchallenges-blogs.web.app/how-to-replicate-design/)
- [Node.js](https://nodejs.org/)
- [Marked - a markdown parser](https://github.com/chjj/marked)

## Contact

- Website [your-website.com](https://{your-web-site-link})
- GitHub [@your-username](https://{github.com/your-usermame})
- Twitter [@your-twitter](https://{twitter.com/your-username})
