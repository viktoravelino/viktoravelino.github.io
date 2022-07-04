import Image from 'next/image';
import { Eye, GithubLogo } from 'phosphor-react';
import React from 'react';
import { Section } from './Section';

import projects from '../data/projects.json';

export function Projects() {
  return (
    <Section id="projects" className="">
      <h2 className="text-2xl font-semibold">
        <span className="text-blue-500"> P</span>rojects
      </h2>
      <div className="container flex-1 flex justify-center items-center flex-wrap gap-4 mt-5">
        {projects.map((project, index) => (
          <Card key={index} item={project} />
        ))}
      </div>
    </Section>
  );
}

function Card({ item }: any) {
  return (
    <div className="border border-gray-700 w-[18rem] min-h-[20rem] flex flex-col rounded-lg  shadow-zinc-800 shadow-md hover:scale-105 transition overflow-hidden">
      <div className="img-container h-3/6 text-center p-1">
        <Image
          src={item.img}
          alt=""
          height={300}
          width={500}
          className="rounded-md"
        />
      </div>
      <div className="body h-2/6 p-2 flex flex-col flex-1">
        <span className="title text-xl font-semibold ">{item.name}</span>
        <p className="desc text-sm text-gray-300 block line-clamp-3">
          {item.desc}
        </p>
        <div className="flex flex-row justify-center items-center gap-5 mt-auto mb-2">
          {item.github && (
            <a
              target="blank"
              href={item.github}
              className="transition flex flex-row items-center gap-1 hover:text-blue-500 hover:cursor-pointer"
            >
              <GithubLogo size={20} weight="fill" />
              <span className="text-xs">Github</span>
            </a>
          )}

          {item.liveUrl && (
            <a
              href={item.liveUrl}
              target="blank"
              className=" transition flex flex-row items-center gap-1 hover:text-blue-500 hover:cursor-pointer"
            >
              <Eye size={20} weight="fill" />
              <span className="text-xs">Live</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
