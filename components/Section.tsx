import React from 'react';

export function Section({ id, children, className, ...rest }: any) {
  return (
    <div
      id={id}
      className={`flex flex-col justify-center min-h-[calc(100vh-6rem)] px-6 mx-auto
      lg:min-h-[calc(100vh-5rem)] lg:w-3/4
      xl:w-4/6
      items-start ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
