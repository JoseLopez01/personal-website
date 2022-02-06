import React from 'react';

function Project({ description, stack, company, appName, route }) {
  return (
    <div className="w-4/5 md:w-52 min-w-52 shadow-md p-4">
      <h3 className="text-xl font-medium mb-4">{appName}</h3>
      <div>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
      <div className="mt-1">
        <span className="text-gray-500 text-sm font-semibold">
          Tech stack:{' '}
        </span>
        <span className="text-gray-500 text-xs">{stack}</span>
      </div>
      <div className="mt-1">
        <span className="text-gray-500 text-sm font-semibold">Company: </span>
        <a href={route} target="_blank">
          <span className="text-gray-500 text-xs underline cursor-pointer">
            {company}
          </span>
        </a>
      </div>
    </div>
  );
}

export default Project;
