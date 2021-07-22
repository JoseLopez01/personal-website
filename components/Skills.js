import AngularSvg from '../icons/AngularSvg';
import CapacitorSvg from '../icons/CapacitorSvg';
import FlutterSvg from '../icons/FlutterSvg';
import IonicSvg from '../icons/IonicSvg';
import LaravelSvg from '../icons/LaravelSvg';
import ReactSvg from '../icons/ReactSvg';
import ReduxSvg from '../icons/ReduxSvg';
import SassSvg from '../icons/SassSvg';
import TailwindSvg from '../icons/TailwindSvg';
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
      name: 'Ionic',
      color: '#3880FF',
      percent: 80,
      icon: IonicSvg,
    },
    {
      name: 'Laravel',
      color: '#FF2D20',
      percent: 80,
      icon: LaravelSvg,
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
    {
      name: 'Sass',
      color: '#CC6699',
      percent: 80,
      icon: SassSvg,
    },
    {
      name: 'Flutter',
      color: '#02569B',
      percent: 80,
      icon: FlutterSvg,
    },
    {
      name: 'Capacitor',
      color: '#119EFF',
      percent: 80,
      icon: CapacitorSvg,
    },
  ];

  return (
    <>
      <div className="text-4xl font-bold md:text-5xl text-center m-6">
        Technical <span className="text-blue-800">Skills</span>
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
    </>
  );
}
