'use client';
import { useState } from 'react';
import { profile } from '@/data/profile';

const links = [{ href: '#experience', label: '经历' }, { href: '#projects', label: '作品' }, { href: '#thoughts', label: '随想' }, { href: '#contact', label: '联系我' }];

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="header-inner section-wrap">
    <a className="wordmark" href="#home" aria-label={`${profile.name}，回到首页`}>{profile.name}</a>
    <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen(!open)}>{open ? '收起' : '菜单'}</button>
    <nav className={open ? 'site-nav is-open' : 'site-nav'} id="site-navigation" aria-label="主导航">{links.map((link) => <a href={link.href} key={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}</nav>
  </div></header>;
}
