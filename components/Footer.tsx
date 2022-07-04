import { Coffee, LinkedinLogo, GithubLogo } from 'phosphor-react';
import React from 'react';

const SOCIAL_MEDIA = [
  {
    Icon: (
      <GithubLogo
        size={25}
        className="hover:text-blue-500 transition hover:cursor-pointer"
      />
    ),
    link: 'https://github.com/viktoravelino',
  },
  {
    Icon: (
      <LinkedinLogo
        size={25}
        className="hover:text-blue-500 transition hover:cursor-pointer"
      />
    ),
    link: 'https://www.linkedin.com/in/viktoravelino/',
  },
];

export function Footer() {
  return (
    <footer className="flex flex-col items-center py-3 bg-gray-800 text-xs">
      <div className="flex flex-row items-center gap-2">
        <span>Built with</span>
        <Coffee size={18} className="text-blue-500" weight="fill" />
        <span>by Viktor Avelino</span>
      </div>
      <div className="flex flex-row items-center gap-2 mt-2">
        {SOCIAL_MEDIA.map((media, index) => (
          <a href={media.link} key={index} target="blank">
            {media.Icon}
          </a>
        ))}
      </div>
    </footer>
  );
}
