import type { Metadata } from 'next';
import './globals.css';
import { profile } from '@/data/profile';

export const metadata: Metadata = {
  title: `${profile.name} — AI Product Manager`,
  description: '袁杨的 AI Product Manager 个人作品集：以用户研究、数据分析与产品设计连接 Public Administration × AI × Product。',
  openGraph: { title: `${profile.name} — AI Product Manager`, description: profile.tagline, type: 'website' },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
