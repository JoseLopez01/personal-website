import Skills from "./Skills";

export default function Hero() {
  return (
    <>
      <div className="flex items-center p-10 md:h-3/5 md:my-4 md:rounded">
        <div className="w-full md:w-1/2">
          <div className="w-full mb-4">
            <p className="text-4xl font-bold md:text-6xl">
              Hi, I'm José López A.
            </p>
            <p className="text-lg mt-4">
              I'm a Colombian web developer, with over a year of experience in
              the making of web-apps using Angular, React and NextJs. I'm also a
              mobile developer using technologies like Flutter, React-Native,
              Ionic, Cordova and Capacitor.
            </p>
          </div>
          <button className="bg-green-400 w-2/5 px-4 py-2 rounded-full text-white">
            Contact Me
          </button>
        </div>
        <div className="w-full md:w-1/2 h-full">
          <div className="h-full ml-auto rounded w-3/5 p-4 bg-gray-600"></div>
        </div>
      </div>
      <Skills />
    </>
  );
}
