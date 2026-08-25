import type { Metadata } from 'next';
import './globals.css';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const metadata: Metadata = {
  title: '元一智能科技｜AI 技术应用、GEO 内容增长与实战提效营',
  description: '元一智能科技提供 AI 技术应用、GEO 内容增长、数字人获客、个人 IP 孵化、企业官网与 AI 实战提效营。',
  metadataBase: new URL('https://jeremylilif.github.io'),
  openGraph: {
    title: '元一智能科技｜让 AI 真正进入业务现场',
    description: '产品系统、客户案例、AI 实战提效营与 AI+IP+GEO 私教成长体系。',
    type: 'website',
    url: 'https://jeremylilif.github.io/yuanyi-intelligent/',
    images: [{ url: `${basePath}/assets/og-yuanyi.png`, width: 1200, height: 630, alt: '元一智能科技品牌视觉' }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
