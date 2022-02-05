import Project from './Project';

const PROJECTS = [
  {
    appName: 'Tissini App',
    description:
      "My current job, where I'm responsible for the migration process. We're currently working on passing our tech stack from Laravel and VueJs, to NextJs and NestJS.",
    stack: 'VueJs, NextJs, NestJS, MongoDb',
    company: 'Tissini',
    route: 'https://tissini.com/',
  },
  {
    appName: 'Trip2',
    description:
      'My first job, where I gave support and added new features to the app.',
    stack: 'Angular',
    company: 'Soft-G Net',
    route: 'https://www.trip2.com/',
  },
  {
    appName: 'Trip2 Rider',
    description:
      "A mobile app for the company's final clients, where they can create, modify and see in real-time the trip location and it's driver.",
    stack: 'Ionic, Capacitor, Angular',
    company: 'Soft-G Net',
    route: 'https://www.trip2.com/',
  },
  {
    appName: 'Trip2 Driver',
    description:
      'A mobile app for the company drivers, where they can see accept or decline trips in real-time based on their location.',
    stack: 'Ionic, Capacitor, Angular',
    company: 'Soft-G Net',
    route: 'https://www.trip2.com/',
  },
];

function Work() {
  return (
    <div className="pt-10" id="work">
      <div className="text-4xl font-bold md:text-5xl text-center md:m-10">
        My work
      </div>
      <div className="flex justify-between">
        {PROJECTS.map(({ appName, company, description, stack, route }) => (
          <Project
            appName={appName}
            company={company}
            description={description}
            stack={stack}
            route={route}
          />
        ))}
      </div>
    </div>
  );
}

export default Work;
