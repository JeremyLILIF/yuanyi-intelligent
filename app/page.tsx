import { BriefForm, CaseTabs, CourseTabs, DigitalIpShowcase, GrowthTabs, HeroOceanBackdrop, IncubatorShowcase, SiteMotionEffects, TrainingGallery } from './interactions';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const products = [
  { index: '01', title: 'AI 海景孵化基地', label: '空间与生态', text: '1500㎡ 海景空间，提供独立办公室与开放工位，连接 AI 创业、培训及项目合作。' },
  { index: '02', title: 'AI 技术应用', label: '效率与系统', text: '面向内容、运营、办公与业务流程，设计 AI 工具、工作流及系统应用。' },
  { index: '03', title: '数字人 × IP', label: '触达与增长', text: '通过数字人、内容矩阵与个人 IP 运营，提升品牌触达、客户信任和持续转化。' },
  { index: '04', title: 'GEO Pilot', label: '内容增长系统', text: '把洞察、知识、生成、分发与反馈串成可追踪、可持续优化的增长闭环。' },
  { index: '05', title: 'AI 训练营', label: '能力共建', text: '围绕真实岗位任务开展工具实操、项目训练和应用辅导，把学习转化为成果。' },
];

const team = [
  {
    name: '杰瑞米', role: '技术架构与模型优化', image: 'team-jeremy.webp',
    background: ['前 Fetch Rewards 软件开发工程师', '前洛杉矶字节跳动算法工程师', 'USC 计算机科学硕士', '专长全栈开发、系统架构和模型优化'],
  },
  {
    name: '哈德森', role: '系统工程与企业级交付', image: 'team-hudson.webp',
    background: ['前 IBM 银行后端技术专家', '计算机硕士与博士背景', '专长 Java 后端、IT 咨询和智慧城市', '熟悉复杂系统仿真建模与集成交付'],
  },
  {
    name: '李老师', role: '商业化与市场战略', image: 'team-franklin.webp',
    background: ['前央企金融高管', '财富管理与上市孵化经验', 'AI 智能体商业化路径设计', '推动企业级应用落地与复制'],
  },
];

const deliverySteps = ['需求诊断', '方案设计', '样板验证', '实施交付', '持续优化'];

export default function Home() {
  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <SiteMotionEffects />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="元一智能科技首页">
          <span className="brand-symbol"><img src={`${basePath}/assets/brand-symbol-cutout.png`} alt="" /></span>
          <span className="brand-wordmark"><strong>元一智能科技</strong><small>YUANYI INTELLIGENT</small></span>
        </a>
        <nav className="main-nav" aria-label="主导航">
          <a href="#incubator">海景孵化基地</a><a href="#cases">产品案例</a><a href="#digital-ip">数字人 × IP</a><a href="#course">实战提效营</a>
          <a href="#growth">私教成长</a><a href="#contact">项目合作</a>
        </nav>
        <a className="nav-cta" href="#contact">预约场景诊断 <span>↗</span></a>
      </header>

      <section className="hero" id="top">
        <HeroOceanBackdrop />
        <div className="hero-copy">
          <div className="eyebrow"><i /> HAINAN · AI SEAVIEW INCUBATION BASE</div>
          <h1>让 AI 真正进入<span>业务现场</span></h1>
          <p className="hero-lead">元一智能科技坐落于海口 1500㎡ AI 海景孵化基地，为政府、企业、创业者与机构提供空间、技术、培训和增长服务。</p>
          <a className="hero-base-link" href="#incubator"><span>1500㎡ 海景空间</span><strong>独立办公室与开放工位入驻 <b>→</b></strong></a>
          <div className="hero-actions">
            <a className="button button-primary" href="#cases">查看产品与案例 <span>→</span></a>
            <a className="button button-ghost" href="#course">了解 AI 实战提效营</a>
          </div>
          <div className="hero-proof">
            <div><strong>5</strong><span>大核心产品</span></div><div><strong>5</strong><span>步项目交付法</span></div><div><strong>1:1</strong><span>场景诊断起步</span></div>
          </div>
        </div>

        <div className="hero-visual" aria-label="GEO Pilot 产品界面预览">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="signal-card signal-top"><i /> 工作流运行中<strong>12</strong><span>今日任务</span></div>
          <div className="dashboard-shell">
            <div className="dashboard-bar"><div className="window-dots"><i /><i /><i /></div><span>GEO PILOT / 智能运营总览</span><b>LIVE</b></div>
            <img src={`${basePath}/assets/geo-overview.webp`} alt="GEO Pilot 智能运营总览界面" /><div className="scanline" />
          </div>
          <div className="signal-card signal-bottom"><span className="signal-icon">✓</span><div><strong>人工确认节点</strong><span>让每一次输出可控、可用</span></div></div>
        </div>
      </section>

      <section className="trust-strip" aria-label="业务定位">
        <span>AI 海景孵化基地</span><i /><span>AI 技术应用</span><i /><span>数字人 × IP</span><i /><span>GEO 内容增长</span><i /><span className="hainan-mark">扎根海南 · 服务本地</span>
      </section>

      <section className="incubator-section" id="incubator">
        <div className="incubator-seaview-bg" style={{ backgroundImage: `linear-gradient(90deg, rgba(7,9,7,.82) 0%, rgba(7,9,7,.46) 52%, rgba(7,9,7,.22) 100%), url(${basePath}/assets/hero-seaview-base.webp)` }} aria-hidden="true" />
        <div className="section incubator-inner">
          <div className="section-heading incubator-heading">
            <div><p className="section-kicker">YUANYI AI SEAVIEW INCUBATION BASE</p><h2><span className="incubator-title-line">海南最大 AI 海景孵化基地</span><br /><em>让团队在这里开始生长</em></h2></div>
            <p>元一智能科技坐落于海口湾畔的 1500㎡ AI 孵化空间，面向 AI 创业团队、内容团队、企业项目组与培训合作方开放独立办公室和灵活工位。</p>
          </div>
          <div className="incubator-features">
            <article><strong>1500㎡</strong><span>海南 AI 海景孵化空间</span></article>
            <article><strong>独立单间</strong><span>适合团队长期办公与项目交付</span></article>
            <article><strong>灵活工位</strong><span>个人与小团队均可申请入驻</span></article>
            <article><strong>配套全免</strong><span>水电 · 物业 · 网络 · 停车免费</span></article>
          </div>
          <IncubatorShowcase basePath={basePath} />
          <div className="incubator-footer"><p><span>SEA VIEW · HAIKOU</span>窗外可眺望海口湾、世纪大桥与云洞公园片区，空间同时支持办公、会议、路演、培训与项目共创。</p><a className="button button-primary" href="#contact">咨询入驻与合作 <span>→</span></a></div>
        </div>
      </section>

      <section className="section products-section motion-surface" id="products">
        <div className="section-heading">
          <div><p className="section-kicker">PRODUCT ECOSYSTEM</p><h2>用技术解决效率，<br /><em>用内容推动增长</em></h2></div>
          <p>五项能力从空间载体、技术落地、内容增长到组织训练彼此连接，形成可交付、可持续迭代的服务体系。</p>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.index}>
              <div className="product-top"><span>{product.index}</span><i>↗</i></div><p>{product.label}</p><h3>{product.title}</h3><div className="product-line" /><p className="product-desc">{product.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section motion-surface" id="about">
        <div className="section about-inner">
          <div className="about-intro">
            <div><p className="section-kicker">ABOUT YUANYI</p><h2><span className="title-keep-line">AI 落地不是交付工具，</span><br /><em>而是建立可运行的业务能力。</em></h2></div>
            <div className="about-values">
              <article><span>01</span><strong>看懂业务</strong><p>从真实场景、业务目标和现有流程出发，明确最值得解决的问题。</p></article>
              <article><span>02</span><strong>做得出方案</strong><p>把模型、工具、内容与流程组合成可实施、可交付的解决方案。</p></article>
              <article><span>03</span><strong>陪得到结果</strong><p>通过实施、培训和运营迭代，让团队会使用、业务有改善。</p></article>
            </div>
          </div>
          <div className="team-grid">
            {team.map((member, index) => (
              <article className={`team-card team-card-${index + 1}`} key={member.name}>
                <div className="team-photo"><img src={`${basePath}/assets/${member.image}`} alt={member.name} /></div>
                <div className="team-info">
                  <span>CORE TEAM · 0{index + 1}</span><h3>{member.name}</h3><strong>{member.role}</strong>
                  <ul>{member.background.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section cases-section motion-surface" id="cases">
        <div className="section-heading">
          <div><p className="section-kicker">SOLUTIONS & CLIENT CASES</p><h2>从一个具体问题，<br /><em>走到真实交付</em></h2></div>
          <p>以阿驰二手车 GEO 品牌官网、青创社群 GEO 内容增长为真实落地结果，同时展示 AI 商品视觉及政府、企业 AI 培训的交付方式。</p>
        </div>
        <CaseTabs basePath={basePath} />
      </section>

      <section className="digital-ip-section motion-surface" id="digital-ip">
        <div className="section digital-ip-inner">
          <div className="section-heading digital-ip-heading">
            <div><p className="section-kicker">DIGITAL HUMAN × IP AGENT PLATFORM</p><h2>一个真实形象，<br /><em>持续生成可发布内容</em></h2></div>
            <p>把选题、文案、授权声音、数字人形象、素材识别、智能剪辑与发布准备串成一条可恢复的内容生产线，让个人 IP 和本地商家稳定出片。</p>
          </div>
          <div className="digital-ip-metrics">
            <article><strong>08</strong><span>环节内容生产流水线</span></article>
            <article><strong>≈ 3 min</strong><span>样板任务进入视频预览*</span></article>
            <article><strong>02</strong><span>抖音 / 小红书发布准备</span></article>
            <article><strong>LOCAL</strong><span>素材与任务记录本地优先</span></article>
          </div>
          <DigitalIpShowcase basePath={basePath} />
          <div className="digital-ip-flow">
            {['爆款解析', '选题文案', '声音克隆', '真人形象', '素材识别', '智能剪辑', '剪映草稿', '发布准备'].map((step,index)=><article key={step}><span>{String(index+1).padStart(2,'0')}</span><strong>{step}</strong></article>)}
          </div>
          <p className="digital-ip-note">* 样板时长不含首次形象训练；声音与人物形象仅在获得本人或合法授权后使用，发布前保留人工确认。</p>
        </div>
      </section>

      <section className="course-section motion-surface" id="course">
        <div className="section course-inner">
          <div className="course-heading">
            <p className="section-kicker">AI PRACTICAL PRODUCTIVITY CAMP</p>
            <h2>AI 实战提效营</h2>
            <p>以 2 天 1 晚集中实训或 14 天 6 次实战课推进：由 1 名运营指挥 5 个数字员工，亲手搭建一套可以持续运转的 AI 数字内容团队。</p>
            <div className="course-pills"><span>5 个数字员工</span><span>AI 办公提效</span><span>全自动内容工作台</span><span>发布与 GEO 增长</span></div>
          </div>
          <CourseTabs />
          <TrainingGallery basePath={basePath} />
        </div>
      </section>

      <section className="section growth-section motion-surface" id="growth">
        <div className="section-heading">
          <div><p className="section-kicker">AI + IP + GEO PRIVATE CLASS</p><h2>从工具入门，<br />走向 <em>可复制商业体系</em></h2></div>
          <p>元一 AI+IP+GEO 私教班三期成长档案：学习者的角色从 AI 小白、价值贡献者，逐步走向城市合伙人与体系共建者。</p>
        </div>
        <GrowthTabs />
      </section>

      <section className="delivery-section motion-surface">
        <div className="section delivery-inner">
          <div className="delivery-title"><p className="section-kicker">DELIVERY METHOD</p><h2>先验证价值<br />再进入流程<br /><em>陪得到结果</em></h2></div>
          <div className="delivery-flow">
            {deliverySteps.map((step, index) => (
              <div className="delivery-step" key={step}><span>0{index + 1}</span><i /><strong>{step}</strong><p>{['梳理目标、现有流程与关键问题，形成 AI 机会清单。', '明确应用场景、工具组合、实施路径与责任分工。', '通过样稿、工作流或功能原型验证方向和价值。', '完成系统配置、内容制作、项目实施或团队培训。', '根据反馈复盘问题，让团队逐步自主应用和迭代。'][index]}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="brief-section motion-surface" id="contact">
        <div className="section brief-inner">
          <div className="brief-copy">
            <p className="section-kicker">START WITH A REAL SCENARIO</p><h2><span className="title-keep-line">从一个真实场景开始</span><br /><em>让 AI 产生真实价值。</em></h2>
            <p>告诉我们你想解决的问题，先生成一份简明合作需求。它将帮助双方更快进入场景诊断。</p>
            <div className="brief-principles"><span>场景诊断与试点</span><span>专项项目交付</span><span>长期运营与共建</span></div>
          </div>
          <BriefForm />
        </div>
      </section>

      <footer>
        <div className="footer-main">
          <span className="footer-logo"><img src={`${basePath}/assets/brand-symbol-cutout.png`} alt="元一智能科技" /><b>元一智能科技</b></span>
          <p>AI 落地不是交付一个工具，<br />而是建立一套可运行的业务能力。</p>
          <div><span>LOCATION</span><strong>中国 · 海南</strong></div>
        </div>
        <div className="footer-bottom"><span>© 2026 元一智能科技</span><a href="#top">返回顶部 ↑</a></div>
      </footer>
    </main>
  );
}
