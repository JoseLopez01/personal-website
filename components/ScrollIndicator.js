import Image from 'next/image';

function ScrollIndicator() {
  return (
    <div className="flex justify-center">
      <Image src="/icons/scroll.svg" height={20} width={20} />
      <p className="text-sm text-gray-500">
        Scroll to explore
      </p>
    </div>
  );
}

export default ScrollIndicator;

/* <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */
