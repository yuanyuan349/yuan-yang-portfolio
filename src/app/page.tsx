import { About, Contact, Education, Experience, Footer, Hero, Projects, Thoughts, Toolkit } from '@/components/site';
import { Header } from '@/components/site-header';

export default function HomePage() {
  return <><a className="skip-link" href="#main">跳到正文</a><Header/><main id="main"><Hero/><Experience/><Projects/><About/><Thoughts/><Education/><Toolkit/><Contact/></main><Footer/></>;
}
