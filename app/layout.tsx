import type { Metadata } from 'next';
import './globals.css';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const metadata: Metadata = {
  title: '海南元一智能｜让 AI 真正进入业务现场',
  description: '立足海南，为政府、企业与机构提供 AI 技术应用、数字人获客、个人 IP 孵化与 AI 实战训练。',
  metadataBase: new URL('https://jeremylilif.github.io'),
  openGraph: {
    title: '海南元一智能｜让 AI 真正进入业务现场',
    description: '从真实业务问题出发，完成场景设计、项目交付与能力沉淀。',
    type: 'website',
    url: 'https://jeremylilif.github.io/yuanyi-intelligent/',
    images: [{ url: `${basePath}/assets/og-yuanyi.png`, width: 1200, height: 630, alt: '海南元一智能科技视觉' }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
