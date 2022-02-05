import AngularSvg from '../../icons/AngularSvg';
import IonicSvg from '../../icons/IonicSvg';
import ReactSvg from '../../icons/ReactSvg';
import ReduxSvg from '../../icons/ReduxSvg';
import TailwindSvg from '../../icons/TailwindSvg';
import NestjsSvg from '../../icons/NestjsSvg';
import NextjsSvg from '../../icons/NextjsSvg';

import Skill from './Skill';

export default function Skills() {
  const skills = [
    {
      name: 'Angular',
      color: '#DD0031',
      percent: 80,
      icon: AngularSvg,
    },
    {
      name: 'React',
      color: '#61DAFB',
      percent: 70,
      icon: ReactSvg,
    },
    {
      name: 'NestJs',
      color: '#E0234E',
      percent: 80,
      icon: NestjsSvg,
    },
    {
      name: 'Ionic',
      color: '#3880FF',
      percent: 80,
      icon: IonicSvg,
    },
    {
      name: 'NextJs',
      color: '#000000',
      percent: 80,
      icon: NextjsSvg,
    },
    {
      name: 'Redux',
      color: '#764ABC',
      percent: 80,
      icon: ReduxSvg,
    },
    {
      name: 'Tailwind',
      color: '#38B2AC',
      percent: 80,
      icon: TailwindSvg,
    },
    /* {
      name: 'Laravel',
      color: '#FF2D20',
      percent: 80,
      icon: LaravelSvg,
    }, */
    /* {
      name: 'Sass',
      color: '#CC6699',
      percent: 80,
      icon: SassSvg,
    }, */
    /* {
      name: 'Flutter',
      color: '#02569B',
      percent: 80,
      icon: FlutterSvg,
    }, */
    /* {
      name: 'Capacitor',
      color: '#119EFF',
      percent: 80,
      icon: CapacitorSvg,
    }, */
  ];

  return (
    <div className="pt-10">
      <div className="text-4xl font-bold md:text-5xl text-center mb-6">
        <span className="text-blue-700">Skills</span>
      </div>
      <div className="flex flex-wrap justify-around">
        {skills.map((skill, index) => (
          <Skill
            percent={skill.percent}
            name={skill.name}
            color={skill.color}
            icon={skill.icon}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
