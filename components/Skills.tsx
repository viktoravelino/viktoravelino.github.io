import React from 'react';
import { Section } from './Section';
import Image from 'next/image';

import reactIcon from '../assets/react-icon.png';
import nodeIcon from '../assets/node-icon.png';
import tsIcon from '../assets/ts-icon.png';
import htmlIcon from '../assets/html-icon.png';
import cssIcon from '../assets/css-icon.png';
import bootstrapIcon from '../assets/bootstrap-icon.png';
import gitIcon from '../assets/git-icon.png';
import graphqlIcon from '../assets/graphql-icon.png';
import mongoIcon from '../assets/mongo-icon.png';
import nextIcon from '../assets/next-icon.png';
import tailwindIcon from '../assets/tailwind-icon.png';
import cognitoIcon from '../assets/cognito-icon.png';
import gatewayIcon from '../assets/gateway-icon.png';
import firebaseIcon from '../assets/firebase-icon.png';
import lambdaIcon from '../assets/lambda-icon.png';
import amplifyIcon from '../assets/amplify-icon.png';
import expressIcon from '../assets/express-icon.png';

const skills = [
  { title: 'NodeJS', img: nodeIcon },
  { title: 'React', img: reactIcon },
  { title: 'TypeScript', img: tsIcon },
  { title: 'HTML', img: htmlIcon },
  { title: 'CSS', img: cssIcon },
  { title: 'Bootstrap', img: bootstrapIcon },
  { title: 'Git', img: gitIcon },
  { title: 'GraphQL', img: graphqlIcon },
  { title: 'MongoDB', img: mongoIcon },
  { title: 'Express', img: expressIcon },
  { title: 'Tailwind', img: tailwindIcon },
  { title: 'NextJS', img: nextIcon },
  { title: 'Firebase', img: firebaseIcon },
  { title: 'AWS API Gateway', img: gatewayIcon },
  { title: 'AWS Lambda', img: lambdaIcon },
  { title: 'AWS Cognito', img: cognitoIcon },
  { title: 'AWS Amplify', img: amplifyIcon },
];

export function Skills() {
  return (
    <Section id="skills" className="pt-16">
      <h2 className="text-2xl font-semibold">
        <span className="text-blue-500"> S</span>kills
      </h2>
      <div
        className="container flex-1 flex flex-row justify-center items-start mt-5
        sm:items-center
        "
      >
        <div className="flex flex-row gap-5 flex-wrap  justify-center">
          {skills.map((skill, index) => (
            <Skill key={index} skill={skill} />
          ))}
        </div>
      </div>
    </Section>
  );
}

function Skill({ skill }: any) {
  return (
    <div className="flex flex-row items-center gap-4 py-3 px-4 rounded-2xl shadow-[1px_1px_8px_0.5px_rgba(150,150,150,0.2)] ">
      {skill.img && (
        <Image
          src={skill.img}
          alt="React Logo"
          width={30}
          height={30}
          layout="intrinsic"
        />
      )}
      <h4 className="text-lg">{skill.title}</h4>
    </div>
  );
}
