import Skills from './Skills';
import MyDescription from './MyDescription';

export default function Hero() {
  return (
    <>
      <div className="grid grid-cols-2 h-1/2" id="about-me">
        <div className="col-span-1 relative">
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
            <MyDescription />
          </div>
        </div>
        <div className="col-span-1 relative"></div>
      </div>
      <Skills />
    </>
  );
}
