import React, { Fragment, useState } from 'react';
import { List } from 'phosphor-react';
import useViewport from '../hooks/useViewport';
import { Link as LinkTo } from 'react-scroll';

const MENU_ITEMS = [
  { name: 'Home', link: 'banner' },
  { name: 'Projects', link: 'projects' },
  { name: 'Skills', link: 'skills' },
  // { name: 'About', link: 'about' },
  // { name: 'Contact', link: 'contact' },
];

export function Header() {
  const { width } = useViewport();
  const [openMenu, setOpenMenu] = useState(false);

  if (width >= 1024 && openMenu === true) {
    setOpenMenu(false);
  }

  return (
    <header
      id="nav"
      className="bg-gray-800 sticky top-0 z-10 py-4 lg:py-5 bg-main lg:flex lg:justify-between lg:items-center sm:px-2 md:px-4 lg:px-10 "
    >
      <div className="flex items-center justify-between px-5">
        <div className="text-2xl font-semibold">
          <span>
            <span className="text-blue-500">Viktor</span>
            Avelino
          </span>
        </div>
        <div className=" menu-wrap relative flex items-center justify-center z-10 lg:hidden p-2">
          <button
            className="p-2 hover:bg-blue-500 rounded-full"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <List size={32} />
          </button>
        </div>
      </div>
      {/*  */}
      <div
        className={
          openMenu
            ? 'absolute top-0 right-0 w-full h-100 flex justify-end h-screen lg:h-auto lg:opacity-100'
            : 'hidden lg:block'
        }
        onClick={() => setOpenMenu(false)}
      >
        <div
          className="px-4 -mt-20 w-full bg-opacity-95 flex flex-col text-center justify-center items-center bg-gray-900 text-xl
                    lg:mt-auto lg:w-auto lg:text-right lg:flex-row lg:text-base lg:bg-opacity-0"
        >
          {MENU_ITEMS.map((item, index) => (
            <Fragment key={index}>
              <div
                className="
          whitespace-no-wrap 
          rounded-sm cursor-pointer 
          flex justify-center items-baseline 
          font-semibold py-2 px-4 w-4/5 mt-5 lg:mt-0 lg:w-full 
           bg-gray-800 lg:bg-transparent hover:text-blue-500 transition"
              >
                <LinkTo
                  activeClass="active"
                  className={` h-full w-full `}
                  to={item.link}
                  offset={-95}
                >
                  {item.name}
                </LinkTo>
              </div>
            </Fragment>
          ))}
          {/* <button
            className="
          whitespace-no-wrap 
          cursor-pointer
        
          font-semibold py-2 lg:py-1 px-4 w-4/5 mt-5 lg:mt-0 lg:w-full lg:ml-2
          bg-blue-500 text-gray-100
          transition lg:rounded-xl rounded-sm
          hover:brightness-75 "
          >
            Resume
          </button> */}
        </div>
      </div>
    </header>
  );
}

function Link({ item }: any) {
  return (
    <div
      className="
          whitespace-no-wrap
          rounded-sm cursor-pointer
          flex justify-center items-baseline
          font-semibold py-2 px-4 w-4/5 mt-5 lg:mt-0 lg:w-full
          bg-gray-800 lg:bg-main hover:text-blue-500 transition ease-in"
    >
      <a href="#">{item.name}</a>
    </div>
  );
}
