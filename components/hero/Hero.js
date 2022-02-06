import Skills from './Skills';
import MyDescription from './MyDescription';

export default function Hero() {
  return (
    <>
      <div className="flex h-1/2" id="about-me">
        <div className="pl-4 lg:pl-0 flex justify-center items-center">
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
