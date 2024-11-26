import { Hero } from '../features/hero/container/hero';
import { ExperienceSection } from '../features/experience-section/containers/experience-section';

export default function Index() {
  return (
    <>
      <Hero />
      <ExperienceSection />
      <Hero />
    </>
  );
}
