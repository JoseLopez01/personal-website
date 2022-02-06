import Skills from './Skills';
import MyDescription from './MyDescription';

export default function Hero() {
  return (
    <>
      <div className="grid grid-cols-2 h-1/2" id="about-me">
        <div className="pl-4 lg:pl-0 col-span-2 lg:col-span-1 flex justify-center items-center">
          <div>
            <MyDescription />
          </div>
        </div>
        <div className="col-span-1 relative"></div>
      </div>
      <Skills />
    </>
  );
}
