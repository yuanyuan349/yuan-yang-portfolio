import { profile } from '@/data/profile';

export function Header() {
  return <header className="site-header"><a className="wordmark" href="#home" aria-label={`${profile.name} 首页`}>{profile.name}<span> / AI PRODUCT</span></a><nav aria-label="主导航"><a href="#projects">Projects</a><a href="#experience">Experience</a><a href="#about">About</a><a href="#resume-todo">Resume</a></nav><a className="header-contact" href={`mailto:${profile.email}`}>Let’s talk <span aria-hidden="true">↗</span></a></header>;
}

export function Hero() {
  return <section className="hero section-wrap" id="home"><div className="hero-kicker"><span className="status-dot"/> PORTFOLIO · 2026</div><div className="hero-main"><div><h1>{profile.name}<span className="hero-period">.</span></h1><p className="hero-role">{profile.role}</p></div><p className="hero-tagline">{profile.tagline}</p></div><div className="hero-bottom"><p>{profile.positioning}</p><a href="#projects" className="text-link">Explore selected work <span aria-hidden="true">↓</span></a></div></section>;
}

export function Projects() {
  const { project } = profile;
  return <section className="section-wrap section-block" id="projects"><div className="section-heading"><div><p className="eyebrow">01 / SELECTED PROJECT</p><h2>Research that<br/>shapes the product.</h2></div><span className="section-index">01 — 01</span></div><article className="project-card"><div className="project-top"><div><p className="eyebrow">AI EMOTIONAL COMPANION · {project.period}</p><h3>{project.name}<span> / {project.englishName}</span></h3></div><span className="award">{project.award}</span></div><p className="project-summary">{project.summary}</p><div className="metric-grid">{project.metrics.map((metric)=><div className="metric" key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div><div className="project-story">{project.story.map((item,index)=><div className="story-item" key={item.title}><span className="story-number">0{index+1}</span><div><h4>{item.title}</h4><p>{item.text}</p></div></div>)}</div><div className="project-foot"><span>Project Lead · User Research · AI Product Design</span><span>ESP32S3 Prototype <b aria-hidden="true">↗</b></span></div></article></section>;
}

export function Experience() {
  return <section className="section-wrap section-block" id="experience"><div className="section-heading"><div><p className="eyebrow">02 / EXPERIENCE</p><h2>Turning ambiguity<br/>into a working loop.</h2></div><span className="section-index">2 ROLES</span></div><div className="experience-list">{profile.experience.map((item,index)=><article className="experience-item" key={item.company}><div className="experience-meta"><span>0{index+1}</span><span>{item.dates}</span></div><div className="experience-content"><div className="experience-title"><div><h3>{item.company}</h3><p>{item.english} · {item.role}</p></div><div className="tag-list">{item.focus.map((tag)=><span key={tag}>{tag}</span>)}</div></div><div className="problem-action-result"><div><span>PROBLEM</span><p>{item.problem}</p></div><div><span>ACTION</span><p>{item.action}</p></div><div><span>RESULT</span><p>{item.result}</p></div></div></div></article>)}</div></section>;
}

export function About() {
  return <section className="section-wrap about-section section-block" id="about"><div><p className="eyebrow">03 / ABOUT</p><h2>Public Administration<br/><span>×</span> AI <span>×</span> Product</h2></div><div className="about-copy"><p className="about-lead">理解复杂的人与组织，再把洞察落到 AI 产品体验里。</p><p>公共管理训练让我从真实场景、利益相关者与系统关系理解问题；用户研究和数据分析帮助我验证需求、找到优先级。我的关注点，是让 AI 能力回应具体的人，而不止停留在技术概念。</p><a className="text-link" href="#education">More about my foundation <span aria-hidden="true">↓</span></a></div></section>;
}

export function Toolkit() {
  return <section className="section-wrap section-block" id="toolkit"><div className="section-heading compact-heading"><div><p className="eyebrow">04 / TOOLKIT</p><h2>Methods, product, build.</h2></div></div><div className="toolkit-grid">{profile.toolkit.map((group)=><article className="toolkit-card" key={group.title}><p className="eyebrow">{group.title}</p><ul>{group.items.map((item)=><li key={item}>{item}<span aria-hidden="true">↗</span></li>)}</ul></article>)}</div></section>;
}

export function Education() {
  return <section className="section-wrap section-block education-section" id="education"><div className="section-heading compact-heading"><div><p className="eyebrow">05 / EDUCATION</p><h2>A foundation in people<br/>and systems.</h2></div></div><div className="education-list">{profile.education.map((item,index)=><article className="education-item" key={item.school}><span className="education-index">0{index+1}</span><div className="education-main"><h3>{item.school}</h3><p>{item.degree}</p></div><span className="education-date">{item.dates}</span>{item.gpa&&<div className="education-highlights"><span>GPA <b>{item.gpa}</b></span><span>RANK <b>{item.rank}</b></span><span>{item.scholarship}</span></div>}</article>)}</div></section>;
}

export function Contact() {
  return <section className="contact-section" id="contact"><div className="section-wrap contact-inner"><div><p className="eyebrow">06 / CONTACT</p><h2>Let’s make AI<br/>more useful.</h2></div><div className="contact-links"><a href={`mailto:${profile.email}`}>Email <span>{profile.email}</span><b aria-hidden="true">↗</b></a><a href="#resume-todo" id="resume-todo">Resume <span>TODO · PDF to be added</span><b aria-hidden="true">↓</b></a><p className="social-todo">GitHub — Coming soon <i> / </i> LinkedIn — Coming soon</p></div></div></section>;
}

export function Footer() {
  return <footer className="site-footer section-wrap"><a className="wordmark" href="#home">{profile.name}<span> / AI PRODUCT</span></a><p>Thoughtful products begin with better questions.</p><a href="#home">Back to top ↑</a><span>© {new Date().getFullYear()} {profile.name}</span></footer>;
}
