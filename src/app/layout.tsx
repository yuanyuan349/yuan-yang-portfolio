import type { Metadata } from 'next';
import './globals.css';
import { profile } from '@/data/profile';

export const metadata: Metadata = {
  title: `${profile.name} — AI Product Manager`,
  description: '袁杨，AI 产品经理，关注面向用户的 AI 产品。',
  openGraph: { title: `${profile.name} — AI Product Manager`, description: '袁杨的个人主页，分享 AI 产品实践、用户研究与产品思考', type: 'website' },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
