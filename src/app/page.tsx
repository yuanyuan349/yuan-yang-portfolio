import { About, Contact, Education, Experience, Footer, Header, Hero, Projects, Toolkit } from '@/components/site';

export default function HomePage() {
  return <><a className="skip-link" href="#main">Skip to content</a><Header/><main id="main"><Hero/><Projects/><Experience/><About/><Toolkit/><Education/><Contact/></main><Footer/></>;
}
