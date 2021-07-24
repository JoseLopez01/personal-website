import Project from './Project.js';

function Work() {
  return (
    <div className="pt-10" id="work">
      <div className="text-4xl font-bold md:text-5xl text-center md:m-10">
        My <span className="text-blue-800">work</span>
      </div>
      <div className="grid grid-cols-4 gap-6">
        <Project />
      </div>
    </div>
  );
}

export default Work;
