import Project from './Project.js';

function Work() {
  return (
    <div className="my-6 md:p-10">
      <div className="text-4xl font-bold md:text-5xl text-center md:m-10">
        Projects I've <span className="text-blue-800">worked</span> in
      </div>
      <div>
        <Project />
      </div>
    </div>
  );
}

export default Work;
