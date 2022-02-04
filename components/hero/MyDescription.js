import React from 'react';

function MyDescription() {
  return (
    <>
      <p className="text-5xl font-bold mb-8">
        Hi, I'm <span className="text-blue-700 text-7xl">José López</span>{' '}
        <br />
      </p>
      <p className="text-gray-600 text-sm mb-1">
        An experienced software developer from Colombia.
      </p>
      <p className="text-gray-600 text-xs">
        Two years in full-stack development with Js frameworks as React,
        Angular, NestJs, etc.
      </p>
    </>
  );
}

export default MyDescription;
