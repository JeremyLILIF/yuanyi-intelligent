import { BriefForm, GeoShowcase, VisualShowcase } from './interactions';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const products = [
  { index: '01', title: 'GEO Pilot', label: 'AI 内容增长系统', text: '把洞察、生成、分发与反馈串成一套可持续运行的内容增长闭环。' },
  { index: '02', title: 'AI 商品视觉', label: '品牌内容生产', text: '从原始素材到商业视觉、场景延展与多平台内容，一次生产，多端复用。' },
  { index: '03', title: 'AI 数字人', label: '获客与个人 IP', text: '围绕真实身份授权、内容矩阵和持续运营，建立可复用的表达资产。' },
  { index: '04', title: 'AI 实战训练', label: '组织能力共建', text: '以真实岗位任务为训练场，让团队学得会、做得出、带得走。' },
];

const trainingCases = [
  { title: '企业专项培训', image: 'training-enterprise.webp' },
  { title: '场景化夜校实训', image: 'training-community.webp' },
  { title: '青年创业者工作坊', image: 'training-workshop.webp' },
  { title: 'AI 商业实战课堂', image: 'training-seminar.webp' },
];

const deliverySteps = ['需求诊断', '方案设计', '样板验证', '实施交付', '持续优化'];

export default function Home() {
  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="海南元一智能首页">
          <span className="brand-logo-wrap">
            <img src={`${basePath}/assets/brand-logo.webp`} alt="海南元一智能科技有限公司" />
          </span>
        </a>
        <nav className="main-nav" aria-label="主导航">
          <a href="#products">产品服务</a>
          <a href="#geo">核心系统</a>
          <a href="#cases">落地场景</a>
          <a href="#contact">项目合作</a>
        </nav>
        <a className="nav-cta" href="#contact">预约场景诊断 <span>↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><i /> HAINAN · AI DELIVERY PARTNER</div>
          <h1>让 AI 真正进入<span>业务现场</span></h1>
          <p className="hero-lead">立足海南，为政府、企业与机构提供可落地、可交付、可持续的 AI 服务。</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#products">探索产品能力 <span>→</span></a>
            <a className="button button-ghost" href="#contact">发起项目合作</a>
          </div>
          <div className="hero-proof">
            <div><strong>3</strong><span>大核心业务</span></div>
            <div><strong>5</strong><span>步项目交付法</span></div>
            <div><strong>1:1</strong><span>场景诊断起步</span></div>
          </div>
        </div>

        <div className="hero-visual" aria-label="GEO Pilot 产品界面预览">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="signal-card signal-top"><i /> 工作流运行中<strong>12</strong><span>今日任务</span></div>
          <div className="dashboard-shell">
            <div className="dashboard-bar">
              <div className="window-dots"><i /><i /><i /></div>
              <span>GEO PILOT / 智能运营总览</span><b>LIVE</b>
            </div>
            <img src={`${basePath}/assets/geo-overview.webp`} alt="GEO Pilot 智能运营总览界面" />
            <div className="scanline" />
          </div>
          <div className="signal-card signal-bottom">
            <span className="signal-icon">✓</span>
            <div><strong>人工确认节点</strong><span>让每一次输出可控、可用</span></div>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="业务定位">
        <span>从工具到结果</span><i /><span>从单点到系统</span><i />
        <span>从培训到共建</span><i /><span className="hainan-mark">扎根海南 · 服务本地</span>
      </section>

      <section className="section products-section" id="products">
        <div className="section-heading">
          <div><p className="section-kicker">PRODUCT ECOSYSTEM</p><h2>把 AI 转化为<br /><em>业务增长力</em></h2></div>
          <p>我们不只是提供工具，而是从真实业务问题出发，完成场景设计、项目交付与能力沉淀。</p>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.index}>
              <div className="product-top"><span>{product.index}</span><i>↗</i></div>
              <p>{product.label}</p><h3>{product.title}</h3><div className="product-line" />
              <p className="product-desc">{product.text}</p>
            </article>
          ))}
        </div>
      </section>

      <GeoShowcase basePath={basePath} />

      <section className="visual-section" id="cases">
        <div className="section visual-inner">
          <div className="section-heading visual-heading">
            <div><p className="section-kicker">AI PRODUCT VISUAL</p><h2>把普通素材，变成<br /><em>可用的品牌内容</em></h2></div>
            <p>素材识别 → 视觉重构 → 场景延展 → 内容输出，适配电商、社媒和品牌传播的多种需要。</p>
          </div>
          <VisualShowcase basePath={basePath} />
        </div>
      </section>

      <section className="section training-section">
        <div className="section-heading">
          <div><p className="section-kicker">AI PRACTICAL TRAINING</p><h2>不是听懂 AI，<br /><em>而是当场做出来</em></h2></div>
          <p>围绕真实岗位任务开展实训，覆盖办公提效、内容生产、智能体工作流、数字人和多平台运营。</p>
        </div>
        <div className="training-grid">
          {trainingCases.map((item, index) => (
            <figure className={`training-card training-${index + 1}`} key={item.title}>
              <img src={`${basePath}/assets/${item.image}`} alt={item.title} />
              <figcaption><span>0{index + 1}</span><strong>{item.title}</strong></figcaption>
            </figure>
          ))}
        </div>
        <div className="training-facts">
          <div><strong>8</strong><span>核心学习小时</span></div>
          <div><strong>7:1</strong><span>实操 / 方法比例</span></div>
          <div><strong>14</strong><span>天陪跑与作业反馈</span></div>
          <p>AI 实战提效营 · 线下场景课 · 企业专项内训</p>
        </div>
      </section>

      <section className="delivery-section">
        <div className="section delivery-inner">
          <div className="delivery-title">
            <p className="section-kicker">DELIVERY METHOD</p>
            <h2>看懂业务，<br />做得出方案，<br /><em>陪得到结果。</em></h2>
          </div>
          <div className="delivery-flow">
            {deliverySteps.map((step, index) => (
              <div className="delivery-step" key={step}>
                <span>0{index + 1}</span><i /><strong>{step}</strong>
                <p>{['先看现场与目标，不从工具清单出发。', '明确边界、路径与可以衡量的结果。', '先做小样板，验证业务价值与可行性。', '系统、流程、培训与文档同步落地。', '根据数据反馈，持续迭代运营机制。'][index]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="brief-section" id="contact">
        <div className="section brief-inner">
          <div className="brief-copy">
            <p className="section-kicker">START WITH A REAL SCENARIO</p>
            <h2>从一个真实场景开始，<br /><em>让 AI 产生真实价值。</em></h2>
            <p>告诉我们你想解决的问题，先生成一份简明合作需求。它将帮助双方更快进入场景诊断。</p>
            <div className="brief-principles"><span>场景诊断与试点</span><span>专项项目交付</span><span>长期运营与共建</span></div>
          </div>
          <BriefForm />
        </div>
      </section>

      <footer>
        <div className="footer-main">
          <span className="footer-brand"><img src={`${basePath}/assets/brand-logo.webp`} alt="海南元一智能科技有限公司" /></span>
          <p>AI 落地不是交付一个工具，<br />而是建立一套可运行的业务能力。</p>
          <div><span>LOCATION</span><strong>中国 · 海南</strong></div>
        </div>
        <div className="footer-bottom"><span>© 2026 海南元一智能科技有限公司</span><a href="#top">返回顶部 ↑</a></div>
      </footer>
    </main>
  );
}
