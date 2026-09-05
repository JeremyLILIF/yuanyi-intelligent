import { BriefForm, CaseTabs, ContactTrigger, CourseTabs, DigitalIpShowcase, GeoPilotShowcase, GrowthTabs, HeroOceanBackdrop, IncubatorShowcase, SiteMotionEffects, SpecialDeliveryShowcase, TrainingGallery } from './interactions';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const products = [
  { index: '01', title: '海南 Codex 社群', label: '持续学习与共创', text: '连接教程、资料、案例、答疑与项目实践，为海南 AI 从业者和创业者提供长期交流场域。' },
  { index: '02', title: 'AI 海景孵化基地', label: '空间与生态', text: '1500㎡ 海景空间，提供独立办公室与开放工位，连接 AI 创业、培训及项目合作。' },
  { index: '03', title: 'AI 技术应用', label: '效率与系统', text: '面向内容、运营、办公与业务流程，设计 AI 工具、工作流及系统应用。' },
  { index: '04', title: '数字人 × IP', label: '触达与增长', text: '通过数字人、内容矩阵与个人 IP 运营，提升品牌触达、客户信任和持续转化。' },
  { index: '05', title: 'GEO Pilot', label: '内容增长系统', text: '把洞察、知识、生成、分发与反馈串成可追踪、可持续优化的增长闭环。' },
  { index: '06', title: 'AI 训练营', label: '能力共建', text: '围绕真实岗位任务开展工具实操、项目训练和应用辅导，把学习转化为成果。' },
];

const communityBenefits = [
  ['01', 'Codex 安装教程', '从环境准备到工具配置，降低第一次上手的门槛。'],
  ['02', 'AI 工具资料库', '持续整理实用工具、工作流与可复用学习资料。'],
  ['03', '每周 AI 案例分享', '拆解真实应用场景、项目方法与可落地的实践路径。'],
  ['04', '每日 AI 问题答疑', '围绕工具使用、内容生产和项目实施交流解决思路。'],
  ['05', 'AI 项目实践挑战', '用真实任务推动动手实践，让学习沉淀为作品与能力。'],
  ['06', 'AI 创业交流机会', '连接海南本地创业者、技术人才与业务合作资源。'],
];

const team = [
  {
    name: '杰瑞米', role: '创始人 · 技术架构与模型优化', image: 'team-jeremy.webp',
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
          <a href="#course">实战提效营</a><a href="#about">核心团队</a><a href="#community">AI 社群</a><a href="#incubator">孵化基地</a><a href="#geo-pilot">GEO</a><a href="#digital-ip">数字人</a>
          <ContactTrigger basePath={basePath} className="nav-contact-trigger" label="项目合作" arrow="" title="添加微信，沟通项目合作" />
        </nav>
        <ContactTrigger basePath={basePath} className="nav-cta" label="预约场景诊断" arrow="↗" title="添加微信，预约场景诊断" />
      </header>

      <section className="hero" id="top">
        <HeroOceanBackdrop />
        <div className="hero-copy">
          <div className="eyebrow"><i /> HAINAN · AI SEAVIEW INCUBATION BASE</div>
          <h1>让 AI 真正进入<span>业务现场</span></h1>
          <p className="hero-lead">元一智能科技坐落于海口 1500㎡ AI 海景孵化基地，为政府、企业、创业者与机构提供空间、技术、培训和增长服务。</p>
          <a className="hero-base-link" href="#incubator"><span>AI 海景孵化基地入驻</span><strong>独立办公室 · 开放工位 <b>→</b></strong></a>
          <div className="hero-actions">
            <a className="button button-primary" href="#course">了解 AI 实战提效营 <span>→</span></a>
            <a className="button button-ghost" href="#incubator">查看孵化基地</a>
          </div>
          <div className="hero-proof">
            <div><strong>6</strong><span>大核心产品</span></div><div><strong>3</strong><span>位核心团队</span></div><div><strong>1:1</strong><span>场景诊断起步</span></div>
          </div>
        </div>

        <div className="hero-visual" aria-label="元一 AI 海景孵化基地实景">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="signal-card signal-top"><i /> 海口湾一线海景<strong>1500㎡</strong><span>AI 创业与办公空间</span></div>
          <div className="dashboard-shell hero-building-shell">
            <div className="dashboard-bar"><div className="window-dots"><i /><i /><i /></div><span>AI 海景孵化基地 / 入驻实景</span><b>HAIKOU</b></div>
            <picture><source media="(max-width: 640px)" srcSet={`${basePath}/assets/mobile/hero-incubator-building.webp`} /><img src={`${basePath}/assets/hero-incubator-building.webp`} alt="元一 AI 海景孵化基地所在海景写字楼" width="900" height="1600" fetchPriority="high" decoding="async" /></picture><div className="scanline" />
          </div>
          <div className="signal-card signal-bottom"><span className="signal-icon">✓</span><div><strong>独立办公室与开放工位</strong><span>水电 · 物业 · 网络 · 停车免费</span></div></div>
        </div>
      </section>

      <section className="trust-strip" aria-label="业务定位">
        <span>AI 海景孵化基地</span><i /><span>AI 技术应用</span><i /><span>数字人 × IP</span><i /><span>GEO 内容增长</span><i /><span className="hainan-mark">扎根海南 · 服务本地</span>
      </section>

      <section className="section products-section motion-surface" id="products">
        <div className="section-heading">
          <div><p className="section-kicker">PRODUCT ECOSYSTEM</p><h2>用技术解决效率，<br /><em>用内容推动增长</em></h2></div>
          <p>六项能力从空间载体、技术落地、内容增长到组织训练与长期社群彼此连接，形成可交付、可持续迭代的服务体系。</p>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.index}>
              <div className="product-top"><span>{product.index}</span><i>↗</i></div><p>{product.label}</p><h3>{product.title}</h3><div className="product-line" /><p className="product-desc">{product.text}</p>
            </article>
          ))}
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

      <section className="about-section motion-surface" id="about">
        <div className="section about-inner">
          <div className="about-intro">
            <div><p className="section-kicker">ABOUT YUANYI</p><h2><span className="title-keep-line">我们是一支懂业务、懂技术，</span><br /><em>也懂商业增长的 AI 实战团队。</em></h2></div>
            <div className="about-values">
              <article><span>01</span><strong>看懂业务</strong><p>从真实场景、业务目标和现有流程出发，明确最值得解决的问题。</p></article>
              <article><span>02</span><strong>做得出方案</strong><p>把模型、工具、内容与流程组合成可实施、可交付的解决方案。</p></article>
              <article><span>03</span><strong>陪得到结果</strong><p>通过实施、培训和运营迭代，让团队会使用、业务有改善。</p></article>
            </div>
          </div>
          <div className="team-grid">
            {team.map((member, index) => (
              <article className={`team-card team-card-${index + 1}`} key={member.name}>
                <div className="team-photo"><picture><source media="(max-width: 640px)" srcSet={`${basePath}/assets/mobile/${member.image}`} /><img src={`${basePath}/assets/${member.image}`} alt={member.name} loading="lazy" decoding="async" /></picture></div>
                <span className="team-badge">CORE TEAM · 0{index + 1}</span>
                <div className="team-info">
                  <h3>{member.name}</h3><strong>{member.role}</strong>
                  <ul>{member.background.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="community-section motion-surface" id="community">
        <div className="section community-inner">
          <div className="section-heading community-heading">
            <div><p className="section-kicker">HAINAN CODEX · AI AGENT COMMUNITY</p><h2><span className="community-title-line"><span>海南最大的 AI</span><span> 智能体社群，</span></span><br /><em>让学习与实战持续发生</em></h2></div>
            <p>这不只是一个交流群，而是连接 AI 工具学习、真实案例、日常答疑、项目实践与创业合作的长期入口。</p>
          </div>

          <div className="community-showcase">
            <article className="community-host-card">
              <span className="community-card-code">COMMUNITY HOST · HAIKOU</span>
              <div className="community-host-profile">
                <div className="community-host-photo"><picture><source media="(max-width: 640px)" srcSet={`${basePath}/assets/mobile/team-jeremy.webp`} /><img src={`${basePath}/assets/team-jeremy.webp`} alt="海南 Codex 智能体社群主理人杰瑞米" loading="lazy" decoding="async" /></picture></div>
                <div><small>主理人</small><h3>Jeremy Li / 杰瑞米</h3><strong>元一智能科技创始人</strong></div>
              </div>
              <p className="community-promise">面向海南 AI 从业者、创业者、企业管理者与内容团队，分享可复用的方法，也连接真实项目与同频伙伴。</p>
              <ul className="community-host-credentials">
                <li>前 Fetch Rewards 软件开发工程师</li>
                <li>前字节跳动算法工程师</li>
                <li>USC 计算机科学硕士</li>
                <li>长期推动 AI 工具与业务场景结合</li>
              </ul>
            </article>

            <article className="community-proof-card">
              <div className="community-proof-head"><div><span>REAL COMMUNITY</span><strong>真实交流与每日答疑</strong></div><b>持续共创</b></div>
              <a className="community-proof-image" href={`${basePath}/assets/community-proof.webp`} target="_blank" rel="noreferrer" aria-label="查看海南 Codex 智能体社群交流截图大图">
                <img src={`${basePath}/assets/community-proof.webp`} alt="海南 Codex 智能体社群真实交流记录" loading="lazy" decoding="async" />
                <span>点击查看完整交流记录 ↗</span>
              </a>
              <p>群内围绕 Codex 开发、内容工作流、平台适配与 AI 项目落地展开真实讨论，让问题有人回应、经验能够复用。</p>
            </article>
          </div>

          <div className="community-benefits">
            {communityBenefits.map(([index, title, text]) => (
              <article key={index}><span>{index}</span><div><h3>{title}</h3><p>{text}</p></div></article>
            ))}
          </div>

          <div className="community-footer">
            <p><span>COMMUNITY AS A SERVICE</span>把一次学习延展为持续更新、持续答疑和持续连接，让每一次工具升级都能更快转化为个人与团队的行动。</p>
            <ContactTrigger basePath={basePath} className="button button-primary" label="咨询社群加入方式" title="添加微信，加入海南 AI 社群" note="扫码添加杰瑞米，备注“AI 社群”，获取加入方式与社群说明。" />
          </div>
        </div>
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
          <div className="incubator-footer"><p><span>SEA VIEW · HAIKOU</span>窗外可眺望海口湾、世纪大桥与云洞公园片区，空间同时支持办公、会议、路演、培训与项目共创。</p><ContactTrigger basePath={basePath} className="button button-primary" label="咨询入驻与合作" title="添加微信，咨询基地入驻" note="扫码添加杰瑞米，备注“基地入驻”，沟通办公室、工位、培训或项目合作。" /></div>
        </div>
      </section>

      <section className="geo-pilot-section motion-surface" id="geo-pilot">
        <div className="section geo-pilot-inner">
          <div className="section-heading">
            <div><p className="section-kicker">GEO PILOT · CONTENT GROWTH SYSTEM</p><h2>先建立增长系统，<br /><em>再复制内容成果</em></h2></div>
            <p>GEO Pilot 把用户问题、企业知识、内容生产、多平台发布和数据复盘串成一条可追踪的增长链路，并在关键节点保留人工确认。</p>
          </div>
          <GeoPilotShowcase basePath={basePath} />
          <div className="geo-cases-block" id="cases">
            <div className="section-heading geo-cases-heading">
              <div><p className="section-kicker">GEO CLIENT CASES</p><h2>从增长系统，<br /><em>走到两个真实案例</em></h2></div>
              <p>阿驰二手车以品牌官网形成企业可控的 GEO 内容阵地；海南最大创业社群“青创盟”则通过 GEO 内容连接活动、社群与项目合作。</p>
            </div>
            <CaseTabs basePath={basePath} />
          </div>
        </div>
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

      <section className="special-delivery-section motion-surface" id="special-cases">
        <div className="section special-delivery-inner">
          <div className="section-heading">
            <div><p className="section-kicker">SPECIALIZED DELIVERY</p><h2>视觉内容与组织训练，<br /><em>放进同一个业务体系</em></h2></div>
            <p>一边为品牌生产可传播的视觉内容，一边帮助政府与企业团队掌握可执行的 AI 工作方法，形成内容与能力的双重交付。</p>
          </div>
          <SpecialDeliveryShowcase basePath={basePath} />
        </div>
      </section>

      <section className="section growth-section motion-surface" id="growth">
        <div className="section-heading">
          <div><p className="section-kicker">AI + IP + GEO PRIVATE CLASS</p><h2>从工具入门，<br />走向 <em>可复制商业体系</em></h2></div>
          <p>元一 AI+IP+GEO 私教班三期成长档案：学习者的角色从 AI 小白、价值贡献者，逐步走向城市合伙人与体系共建者。</p>
        </div>
        <GrowthTabs />
      </section>

      <section className="brief-section motion-surface" id="contact">
        <div className="section brief-inner">
          <div className="brief-copy">
            <p className="section-kicker">START WITH A REAL SCENARIO</p><h2><span className="title-keep-line">从一个真实场景开始</span><br /><em>让 AI 产生真实价值。</em></h2>
            <p>告诉我们你想解决的问题，先生成一份简明合作需求。它将帮助双方更快进入场景诊断。</p>
            <div className="brief-principles"><span>场景诊断与试点</span><span>专项项目交付</span><span>长期运营与共建</span></div>
            <ContactTrigger basePath={basePath} className="button button-primary brief-contact-button" label="直接微信联系" title="添加微信，直接沟通需求" note="扫码添加杰瑞米，沟通 AI 社群、基地入驻、企业培训或项目合作。" />
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
