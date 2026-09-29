import { profile } from '@/data/profile';
import { CopyWechatButton } from './copy-wechat-button';

export function Hero() {
  return <section className="intro section-wrap" id="home" aria-labelledby="intro-title">
    <div className="intro-copy">
      <p className="hello">你好，我是袁杨</p>
      <h1 id="intro-title">AI 产品经理，关注面向用户的 AI 产品。</h1>
      <p className="intro-description">我喜欢从用户真实的问题出发，<br className="desktop-break" />用研究、数据和 AI 工具把想法做成产品。</p>
      <div className="intro-education">{profile.educationIntro.map((item) => <p key={item}>{item}</p>)}</div>
      <div className="intro-actions"><a className="plain-link" href={`mailto:${profile.email}`}>发送邮件 <span aria-hidden="true">↗</span></a><CopyWechatButton value={profile.wechat} /></div>
    </div>
    <div className="photo-placeholder" role="img" aria-label="个人照片占位，等待添加真实照片"><span>[ Photo ]</span><small>public/images/yuan-yang.jpg</small></div>
  </section>;
}

export function Experience() {
  return <section className="section-wrap content-section" id="experience" aria-labelledby="experience-title"><SectionTitle id="experience-title">经历</SectionTitle>
    <div className="timeline">{profile.experience.map((item) => <article className="timeline-item" key={item.company}>
      <p className="timeline-date">{item.dates}</p><div className="timeline-body"><div className="item-heading"><h3>{item.company}</h3><span>{item.role}</span></div>
      <p className="body-copy">{item.description}</p><ul className="result-list">{item.results.map((result) => <li key={result}>{result}</li>)}</ul></div>
    </article>)}</div>
  </section>;
}

export function Projects() {
  const { zhennuan, jobAssistant } = profile.projects;
  return <section className="section-wrap content-section" id="projects" aria-labelledby="projects-title"><SectionTitle id="projects-title">作品</SectionTitle>
    <article className="project-entry"><div className="project-heading"><div><h3>{zhennuan.name}</h3><p>{zhennuan.type}</p></div><span className="project-award">{zhennuan.award}</span></div>
      <p className="body-copy project-description">{zhennuan.description}</p><ul className="fact-list" aria-label="项目关键事实">{zhennuan.facts.map((fact) => <li key={fact}>{fact}</li>)}</ul>
      <details className="case-details"><summary>查看项目 <span aria-hidden="true">↗</span></summary><div className="case-content">{zhennuan.caseStudy.map((section) => <div className="case-row" key={section.heading}><h4>{section.heading}</h4><p>{section.body}</p></div>)}</div></details>
    </article>
    <article className="project-entry upcoming-project"><div className="project-heading"><div><h3>{jobAssistant.name}</h3><p>{jobAssistant.type}</p></div><span className="coming-soon">{jobAssistant.status}</span></div><p className="body-copy project-description">{jobAssistant.description}</p></article>
  </section>;
}

export function About() {
  return <section className="section-wrap content-section" id="about" aria-labelledby="about-title"><SectionTitle id="about-title">关于我</SectionTitle><div className="text-section-copy">{profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section>;
}

export function Thoughts() {
  return <section className="section-wrap content-section thoughts-section" id="thoughts" aria-labelledby="thoughts-title"><SectionTitle id="thoughts-title">随想</SectionTitle><p className="thought-copy">{profile.thought}</p></section>;
}

export function Education() {
  return <section className="section-wrap content-section" id="education" aria-labelledby="education-title"><SectionTitle id="education-title">教育经历</SectionTitle><div className="education-list">{profile.education.map((item) => <article className="education-item" key={item.school}>
    <div className="education-heading"><h3>{item.school}</h3><span>{item.dates}</span></div><p>{item.degree}</p>{item.distinctions && <ul className="distinction-list">{item.distinctions.map((distinction) => <li key={distinction}>{distinction}</li>)}</ul>}
  </article>)}</div></section>;
}

export function Toolkit() {
  return <section className="section-wrap content-section toolkit-section" id="toolkit" aria-labelledby="toolkit-title"><SectionTitle id="toolkit-title">工具与方法</SectionTitle><div className="toolkit-list">{profile.toolkit.map((group) => <p key={group.name}><span>{group.name}</span><span>{group.items.join(' · ')}</span></p>)}</div></section>;
}

export function Contact() {
  return <section className="section-wrap content-section contact-section" id="contact" aria-labelledby="contact-title"><SectionTitle id="contact-title">联系我</SectionTitle>
    <p>如果你想聊聊 AI 产品、<br className="mobile-break" />用户研究，或者一个正在做的产品：</p><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a><div className="contact-wechat">微信：<CopyWechatButton value={profile.wechat} /></div>
  </section>;
}

export function Footer() {
  return <footer className="site-footer"><div className="section-wrap"><span>{profile.name}</span><a href="#home">回到顶部 ↑</a></div></footer>;
}

function SectionTitle({ children, id }: { children: React.ReactNode; id: string }) {
  return <h2 className="section-title" id={id}>{children}</h2>;
}
