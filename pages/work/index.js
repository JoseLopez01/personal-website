export default function Work() {
  return (
    <div className="p-10">
      <div className="w-full">
        <p className="text-lg text-center font-semibold text-gray-500">
          Portfolio
        </p>
      </div>
      <div className="grid grid-cols-4 grid-rows-1 h-1/2 gap-4 w-full mt-10 h-10">
        <div className="col-span-2 flex mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="flex-shrink-0">
            <img src="/images/trip2-map.jpeg" className="h-48 w-full object-cover md:h-full md:w-48" />
          </div>
          <div className="p-8">
            <div class="uppercase tracking-wide text-gray-600 text-medium font-bold">
              Trip2 On Demand
            </div>
            <a href="#" class="block mt-1 text-lg text-gray-400 leading-tight font-sm text-black hover:underline">
              Trip2 Site
            </a>
            <p className="mt-2 text-gray-600">
              This app was making using Ionic with Capacitor and Angular.
              In this app, basically uses real time geolocation and web sockets
              to recieve certain data and that was handled using redux pattern
            </p>
          </div>
        </div>
        <div className="col-span-2 flex mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="flex-shrink-0">
            <img src="/images/trip2-map.jpeg" className="h-48 w-full object-cover md:h-full md:w-48" />
          </div>
          <div className="p-8">
            <div class="uppercase tracking-wide text-gray-600 text-medium font-bold">
              Trip2 On Demand
            </div>
            <a href="#" class="block mt-1 text-lg text-gray-400 leading-tight font-sm text-black hover:underline">
              Trip2 Site
            </a>
            <p className="mt-2 text-gray-600">
              This app was making using Ionic with Capacitor and Angular.
              In this app, basically uses real time geolocation and web sockets
              to recieve certain data and that was handled using redux pattern
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}