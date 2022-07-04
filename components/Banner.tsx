import React, { useRef } from 'react';
import { Link } from 'react-scroll';
import { Section } from './Section';

export function Banner() {
  return (
    <Section id="banner">
      <p className="text-sm sm:text-base text-gray-200 font-semibold tracking-wide">
        Hey there!👋 I&apos;m
      </p>
      <div className="mt-2">
        <h1
          className="
    tracking-wide text-gray-300 text-5xl md:whitespace-no-wrap"
        >
          <span className="text-blue-500">Viktor</span> Avelino!
        </h1>
        <h2 className="tracking-tight text-gray-400 text-xl sm:text-2xl leading-tight mt-2">
          I love building scalable web and mobile applications.
        </h2>
      </div>
      <h3 className="text-md sm:text-lg text-gray-400 text-justify mt-10 lg:w-2/3">
        I am a Full Stack Software Developer specialized in{' '}
        <span className="text-blue-500">React</span> and{' '}
        <span className="text-blue-500">NodeJS</span>. <br />
        Bring ideas into life by writing clean and scalable code.
        <br />
        Check it out some of my projects or if you&apos;d like to have a word
        please get in touch
      </h3>
      <div className="flex gap-3 mt-5 mx-auto sm:mx-0">
        <Link
          to="projects"
          className="bg-blue-500 py-2 px-3 rounded-xl hover:brightness-75 transition hover:cursor-pointer"
        >
          PROJECTS
        </Link>
        <Link
          to="contact"
          className="border-2 border-blue-500 py-2 px-3 rounded-xl hover:brightness-75 transition hover:cursor-pointer"
        >
          GET IN TOUCH
        </Link>
      </div>
    </Section>
  );
}
