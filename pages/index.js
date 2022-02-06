import Blog from '../components/blog/Blog';
import Contact from '../components/contact/Contact';
import Hero from '../components/hero/Hero';
import Work from '../components/work/Work';

export default function Home() {
  return (
    <>
      <Hero />
      <Work />
      <Blog />
      <Contact />
    </>
  );
}
