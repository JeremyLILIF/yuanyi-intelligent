'use client';

import { useMemo, useState } from 'react';

const geoScreens = [
  { title: '运营总览', note: '任务、内容与关键指标统一可视', image: 'geo-overview.webp' },
  { title: '平台管理', note: '多平台账号与分发节奏集中管理', image: 'geo-platforms.webp' },
  { title: '数字人视频', note: '脚本到数字人口播的一体化生产', image: 'geo-avatar.webp' },
  { title: '增长闭环', note: '从洞察到反馈，持续优化下一轮内容', image: 'geo-loop.webp' },
];

const visualCases = [
  { title: '东方元气', tag: '包装场景重构', image: 'visual-vitality.webp' },
  { title: '中国红茶', tag: '商品视觉升级', image: 'visual-tea.webp' },
  { title: '人物品牌', tag: '品牌人物视觉', image: 'visual-portrait.webp' },
];

export function GeoShowcase({ basePath }: { basePath: string }) {
  const [active, setActive] = useState(0);

  return (
    <section className="section geo-preview" id="geo">
      <div className="geo-copy">
        <p className="section-kicker">FLAGSHIP SOLUTION · 01</p>
        <h2>GEO Pilot<br /><em>内容增长系统</em></h2>
        <p>洞察、生产、分发、反馈，每一个环节都可看见、可管理、可优化。</p>
        <div className="screen-tabs" role="tablist" aria-label="GEO Pilot 功能界面">
          {geoScreens.map((screen, index) => (
            <button key={screen.title} className={active === index ? 'active' : ''} onClick={() => setActive(index)} role="tab" aria-selected={active === index}>
              <span>0{index + 1}</span><strong>{screen.title}</strong><small>{screen.note}</small>
            </button>
          ))}
        </div>
      </div>
      <div className="geo-image-wrap">
        <div className="geo-meta"><span>{geoScreens[active].title}</span><b>HUMAN IN THE LOOP</b></div>
        <img key={geoScreens[active].image} src={`${basePath}/assets/${geoScreens[active].image}`} alt={`GEO Pilot ${geoScreens[active].title}界面`} />
      </div>
    </section>
  );
}

export function VisualShowcase({ basePath }: { basePath: string }) {
  const [active, setActive] = useState(0);

  return (
    <div className="visual-showcase">
      <div className="visual-stage">
        <img key={visualCases[active].image} src={`${basePath}/assets/${visualCases[active].image}`} alt={`${visualCases[active].title} AI 商品视觉案例`} />
        <div className="visual-badge"><span>AI REBUILD</span><strong>{visualCases[active].tag}</strong></div>
      </div>
      <div className="visual-selector" role="tablist" aria-label="AI 商品视觉案例">
        {visualCases.map((item, index) => (
          <button key={item.title} className={active === index ? 'active' : ''} onClick={() => setActive(index)} role="tab" aria-selected={active === index}>
            <span>0{index + 1}</span><div><strong>{item.title}</strong><small>{item.tag}</small></div><i>→</i>
          </button>
        ))}
      </div>
    </div>
  );
}

export function BriefForm() {
  const [projectType, setProjectType] = useState('AI 技术应用');
  const [organization, setOrganization] = useState('企业');
  const [challenge, setChallenge] = useState('');
  const [copied, setCopied] = useState(false);

  const brief = useMemo(
    () => `海南元一智能｜项目合作需求\n合作方向：${projectType}\n机构类型：${organization}\n当前问题：${challenge || '待进一步沟通'}\n期望下一步：预约一次场景诊断`,
    [projectType, organization, challenge],
  );

  async function copyBrief() {
    await navigator.clipboard.writeText(brief);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="brief-form" aria-label="项目合作需求生成器">
      <div className="form-head"><span>PROJECT BRIEF</span><i>● READY</i></div>
      <label>合作方向
        <select value={projectType} onChange={(event) => setProjectType(event.target.value)}>
          <option>AI 技术应用</option><option>AI 数字人 / 个人 IP</option><option>AI 实战训练</option><option>综合项目共建</option>
        </select>
      </label>
      <label>机构类型
        <select value={organization} onChange={(event) => setOrganization(event.target.value)}>
          <option>企业</option><option>政府 / 公共机构</option><option>培训机构 / 学校</option><option>创业团队 / 个人品牌</option>
        </select>
      </label>
      <label>当前最想解决的问题
        <textarea value={challenge} onChange={(event) => setChallenge(event.target.value)} placeholder="例如：希望搭建持续产出内容并分发到多个平台的工作流……" rows={4} />
      </label>
      <button className="copy-button" type="button" onClick={copyBrief}>{copied ? '已复制需求简报 ✓' : '生成并复制需求简报'}<span>→</span></button>
    </div>
  );
}
