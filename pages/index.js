import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Work from '../components/Work';

export default function Home() {
  console.log(process.env.EMAILJS_SERVICE_ID)
  return (
    <>
      <Hero />
      <Work />
      <Contact />
    </>
  );
}
