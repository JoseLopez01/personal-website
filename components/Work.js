import Project from './Project.js';

function Work() {
  return (
    <div className="pt-10" id="work">
      <div className="text-4xl mb-6 font-bold md:text-5xl text-center md:m-10">
        Projects I've <span className="text-blue-800">worked</span> in
      </div>
      <div className="grid grid-cols-4 gap-6">
        <Project />
        <Project />
      </div>
    </div>
  );
}

export default Work;
