import Image from 'next/image';

export default function Project() {
  return (
    <div className="flex my-4 w-2/4 bg-gray-600 rounded-md">
      <div className="flex-none w-48 relative">
        <Image
          src="/images/trip2-map.webp"
          height={350}
          width={168}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="p-6 flex-auto">
        <div>
          <div className="flex-auto text-xl font-bold">Trip2 Driver</div>
          <div className="font-semibold text-gray-700">Trip2 Site</div>
        </div>
        <div className="my-6">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sit amet ipsum hendrerit, finibus nunc nec, tristique neque. Fusce
            iaculis lectus vitae massa elementum vulputate. Duis suscipit
            laoreet ex. Mauris ut egestas sapien, a pulvinar lorem. Nulla
            efficitur efficitur convallis.
          </p>
        </div>
      </div>
    </div>
  );
}
