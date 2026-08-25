'use client';

import { useMemo, useState } from 'react';

const caseTabs = ['阿驰二手车', 'GEO Pilot', 'AI 商品视觉', '场景化实训', '青创社群'];

const schedule = [
  ['课前线上', '协商安排 · 60 分钟', '运营负责人 + 助教 + 讲师团队', '开营、资料包、工具检查、业务任务诊断', '个人任务卡'],
  ['第一天上午', '09:00–10:30', '李英和', 'AI 文档、方案、PPT 与商业图片', '方案 / PPT 初稿与商业图片'],
  ['第一天上午', '10:40–12:10', '施博士', 'AI + 飞书多维表格团队协同', '客户、任务、项目与内容排期表'],
  ['第一天下午', '13:30–15:30', '施博士', 'Vibe coding + Codex + Git + 微信助手', '营销网页雏形与 AI 办公助理 SOP'],
  ['第一天下午', '15:40–17:10', '杰瑞米', 'AI Agent 与内容工作流设计', '角色地图、任务卡与人工确认节点'],
  ['第一天晚上', '19:00–21:00', '讲师团队 + 助教', '项目冲刺：串联文案、图片、飞书工作台与网页', '可演示的第一版 AI 工作系统'],
  ['第二天上午', '09:00–10:30', '杰瑞米', '新媒体内容采集 + 飞书内容工作台', '素材库、采集记录与内容任务清单'],
  ['第二天上午', '10:40–12:10', '杰瑞米', '数字人、图文内容与合规二创', '多平台内容包、数字人样稿与授权清单'],
  ['第二天下午', '13:30–14:45', '杰瑞米', '自动发布 + 评论助手', '待发内容包、发布流程与评论话术库'],
  ['第二天下午', '14:55–16:10', '杰瑞米', '视频剪辑与剪映草稿实操', '剪映草稿、字幕 / 封面模板与检查清单'],
  ['第二天下午', '16:20–17:20', '三位讲师 + 助教', '成果整合、作品展示与问题复盘', '完整成果包与 14 天陪跑计划'],
];

const modules = [
  ['01', '李英和', 'AI 文档、方案、PPT 与商业图片', '从一句需求生成方案框架、PPT 结构、讲解词与多种商业图片。'],
  ['02', '施博士', 'AI + 飞书多维表格团队协同', '搭建客户、任务、项目、内容排期与团队协作看板。'],
  ['03', '施博士', 'Vibe coding + Codex + Git + 微信助手', '生成营销网页雏形，保存版本，并把微信业务资料结构化归档。'],
  ['04', '杰瑞米', 'AI Agent 与内容工作流设计', '建立数字员工角色地图、任务卡、工作流图与人工确认点。'],
  ['05', '杰瑞米', '新媒体采集 + 飞书内容工作台', '在授权与平台规则内完成采集、转写、去重、入库和任务排期。'],
  ['06', '杰瑞米', '数字人、图文内容与合规二创', '一份素材转成多平台内容，并形成数字人口播样片与授权清单。'],
  ['07', '杰瑞米', '自动发布 + 评论助手', '建立待发任务、人工确认机制、评论话术库与最小发布 SOP。'],
  ['08', '杰瑞米', '视频剪辑与剪映草稿实操', '完成剪映工程、字幕、封面、平台适配和成片检查清单。'],
];

const deliverables = [
  ['AI 办公提效工作台', 'Codex、Git 基础版本保存、微信助手及飞书客户 / 任务 / 项目 / 内容管理。'],
  ['AI 商业图片与内容系统', '产品场景图、私域图、宣传海报、封面图与商业出图提示词。'],
  ['AI Agent 工作流', '数字员工角色地图、任务卡、内容工作流图和人工确认节点。'],
  ['飞书新媒体内容工作台', '采集记录、素材库、内容任务清单与来源说明。'],
  ['数字人与合规二创内容包', '多平台文案、数字人口播样片或出镜方案、授权清单。'],
  ['自动发布与评论助手 SOP', '待发内容包、人工确认清单、评论话术库与互动任务表。'],
  ['视频剪辑交付物', '剪映草稿、字幕轨、封面模板与成片检查清单。'],
];

const digitalEmployees = [
  ['01', 'AI 办公助理', '事务处理 · 资料检索', '承接资料归档、会议纪要、信息查询与日常办公任务。'],
  ['02', '内容策划员', '选题策划 · 文案创作', '读取业务素材，生成选题库、内容日历与多平台文案。'],
  ['03', '图文生产员', '图文生成 · 排版美化', '把选题转成海报、封面、长图与商业图片等视觉内容。'],
  ['04', '视频制作员', '视频脚本 · 剪辑制作', '完成脚本、分镜、数字人口播与短视频剪辑任务。'],
  ['05', '发布复盘员', '定时发布 · 数据复盘', '协助多平台发布、记录数据，并把结论回流到下一轮内容。'],
];

const courseTracks = [
  ['MODULE 01', 'AI 办公提效实战', 'Codex + 微信助手、AI + 飞书多维表格、AI 文档 / 方案 / PPT 与商业图片'],
  ['MODULE 02', 'AI 内容营销创作实战', '多媒体素材采集与选题策划、AI 图文、短视频与真人数字人内容生产'],
  ['MODULE 03', '自动发布与 GEO 增长实战', '内容定时发布、GEO 工作台、关键数据跟踪、复盘优化与增长闭环'],
];

const growthPhases = [
  {
    phase: '第一期', date: '2026.06.06–06.07', role: 'AI 小白 → AI 实践者', question: 'AI 是什么？我能不能学会？', insight: 'AI 是效率杠杆，IP 是价值放大器；未来第一个客户是 AI。', tools: '提示词、知识库、数字人、智能体、Obsidian、Codex', geo: '让品牌进入 AI 知识体系，让 AI 理解、信任并推荐品牌。', capability: '从会听、会学走向第一次落地。', quote: '让 AI 帮我干活，让 GEO 帮我获客。',
  },
  {
    phase: '第二期', date: '2026.07.11–07.12', role: '课程学员 → 价值贡献者', question: 'AI 如何进入业务，并让我从学习者走向价值贡献者？', insight: 'AI 是协作基础设施和推荐系统；GEO 是品牌信任资产。', tools: '工具协作、大模型与 Skill 分工、GPT + Codex 融合方法', geo: '建设可被 AI 识别、验证和调用的品牌信任资产。', capability: '把经验、流程和方法沉淀为可复用技能包。', quote: '硬核交付 + 美学视觉 + 私域传播，形成自循环商业闭环。',
  },
  {
    phase: '第三期', date: '2026.08.08–08.09', role: '价值贡献者 → 城市合伙人', question: '如何把 AI、IP 和 GEO 变成可复制商业体系？', insight: 'AI = 可复制智力；IP = 长期价值；GEO = 面向 AI 的内容营销。', tools: '个人 IP 技能包、短视频流水线、GEO 发布工具', geo: 'GEO 同样适合个人品牌：用内容营销 AI，再借助 AI 影响用户。', capability: '建设 Skill、GEO 交付、内容流水线与课程体系。', quote: '工具入门 → 业务贡献 → 商业体系。',
  },
];

export function CaseTabs({ basePath }: { basePath: string }) {
  const [active, setActive] = useState(0);

  return (
    <div className="case-tabs-wrap">
      <div className="tab-rail" role="tablist" aria-label="解决方案与客户案例">
        {caseTabs.map((tab, index) => <button key={tab} className={active === index ? 'active' : ''} onClick={() => setActive(index)} role="tab" aria-selected={active === index}><span>0{index + 1}</span>{tab}</button>)}
      </div>

      {active === 0 && (
        <div className="case-panel case-achi">
          <div className="case-copy">
            <p className="panel-kicker">CLIENT CASE · HAIKOU</p><h3>海南阿驰二手车<br /><em>数字人内容 × 品牌官网</em></h3>
            <p>账号需要持续输出车辆介绍、行业知识和业务宣传内容。元一把数字人口播能力继续延展为品牌官网，让内容触达之后，有一个清晰、可信、可持续承接咨询的线上阵地。</p>
            <dl className="case-facts">
              <div><dt>客户场景</dt><dd>海口本地二手车品牌</dd></div><div><dt>核心需求</dt><dd>降低重复出镜成本，建立自有线上展示入口</dd></div>
              <div><dt>交付内容</dt><dd>数字人口播内容方式 + 品牌展示 / 车源咨询官网</dd></div><div><dt>应用价值</dt><dd>把真人专业表达转化为可持续复用的内容与转化资产</dd></div>
            </dl>
            <a className="case-link" href="https://1822881038-droid.github.io/achi-used-car/" target="_blank" rel="noreferrer">访问阿驰二手车官网 <span>↗</span></a>
          </div>
          <a className="client-site-preview" href="https://1822881038-droid.github.io/achi-used-car/" target="_blank" rel="noreferrer" aria-label="访问海南阿驰二手车官网">
            <div className="browser-top"><i /><i /><i /><span>achi-used-car</span></div>
            <div className="achi-preview-body"><small>海口本地 · 品牌官网</small><h4>你有好车<br /><em>驰有好价</em></h4><p>品牌展示 · 车源咨询 · 卖车估价</p><div><span>海南阿驰二手车</span><b>LIVE ↗</b></div></div>
          </a>
        </div>
      )}

      {active === 1 && (
        <div className="case-panel">
          <div className="case-copy"><p className="panel-kicker">PRODUCT SYSTEM · GEO PILOT</p><h3>从问题发现，走到<br /><em>人工确认发布</em></h3><p>围绕关键词洞察、企业知识沉淀、内容生成、数字人视频、多平台草稿与数据反馈，构建可以追踪和持续优化的内容增长闭环。</p><div className="case-step-list">{['用户问题与关键词洞察', '企业知识库与素材资产', '智能内容与数字人生产', '多平台草稿与人工确认', '数据回流与下一轮优化'].map((item, index) => <span key={item}><b>0{index + 1}</b>{item}</span>)}</div></div>
          <div className="case-media"><div className="case-media-bar"><span>GEO CLOSED LOOP</span><b>HUMAN IN THE LOOP</b></div><img src={`${basePath}/assets/geo-loop.webp`} alt="GEO Pilot 内容增长闭环界面" /></div>
        </div>
      )}

      {active === 2 && (
        <div className="case-panel">
          <div className="case-copy"><p className="panel-kicker">AI PRODUCT VISUAL</p><h3>从一张原图，延展为<br /><em>一套品牌内容资产</em></h3><p>提取包装、品牌信息和卖点，优化构图、光影与质感，再延展到电商详情、社交媒体、宣传海报和短视频封面。</p><div className="case-step-list">{['素材识别', '视觉重构', '场景延展', '多类型内容输出'].map((item, index) => <span key={item}><b>0{index + 1}</b>{item}</span>)}</div></div>
          <div className="case-media visual-case-gallery"><div className="case-media-bar"><span>ORIGINAL → AI VISUAL</span><b>BRAND ASSET</b></div><div><img src={`${basePath}/assets/visual-tea.webp`} alt="中国红茶原图到 AI 商品视觉案例" /><img src={`${basePath}/assets/visual-vitality.webp`} alt="东方元气 AI 商品视觉案例" /><img src={`${basePath}/assets/visual-portrait.webp`} alt="人物品牌 AI 视觉案例" /></div></div>
        </div>
      )}

      {active === 3 && (
        <div className="case-panel">
          <div className="case-copy"><p className="panel-kicker">SCENARIO TRAINING</p><h3>同一套 AI 能力，进入<br /><em>不同组织的岗位任务</em></h3><p>社区和夜校强调低门槛实操，党群与公共服务机构聚焦办公和宣传，职业院校结合专业开展编程、内容创作与项目实践。</p><div className="tag-cloud"><span>社区与夜校</span><span>党群与公共服务</span><span>职业院校</span><span>企业专项培训</span></div></div>
          <div className="case-media case-photo"><img src={`${basePath}/assets/training-community.webp`} alt="海南场景化 AI 实训" /><div><span>交付标准</span><strong>独立完成一项真实任务</strong></div></div>
        </div>
      )}

      {active === 4 && (
        <div className="case-panel">
          <div className="case-copy"><p className="panel-kicker">COMMUNITY GROWTH</p><h3>把一次活动，变成<br /><em>长期社群关系</em></h3><p>围绕创业者真实问题持续输出内容，通过工作坊和主题分享建立连接，再把活动参与者沉淀为长期成员，推动资源协同和项目合作。</p><div className="case-step-list">{['内容触达', '线下连接', '社群沉淀', '资源协同'].map((item, index) => <span key={item}><b>0{index + 1}</b>{item}</span>)}</div></div>
          <div className="case-media case-photo"><img src={`${basePath}/assets/training-workshop.webp`} alt="青年创业者 AI 工作坊" /><div><span>增长闭环</span><strong>内容 × 活动 × 资源</strong></div></div>
        </div>
      )}
    </div>
  );
}

export function CourseTabs() {
  const [active, setActive] = useState(0);
  const tabs = ['课程概览', '5 个数字员工', '完整课表', '核心模块', '成果系统', '14 天陪跑'];

  return (
    <div className="course-tabs-wrap">
      <div className="course-tab-rail" role="tablist" aria-label="AI 实战提效营内容">
        {tabs.map((tab, index) => <button key={tab} className={active === index ? 'active' : ''} onClick={() => setActive(index)} role="tab" aria-selected={active === index}><span>0{index + 1}</span>{tab}</button>)}
      </div>

      {active === 0 && <div className="course-panel course-overview">
        <div className="course-metrics"><article><strong>14 天</strong><span>搭建 AI 数字内容团队</span></article><article><strong>6 次</strong><span>任务制实战课程</span></article><article><strong>12 小时</strong><span>系统学习与实操</span></article><article><strong>5 个</strong><span>24 小时候命数字员工</span></article></div>
        <div className="course-command"><div><span>1 名运营</span><strong>你负责方向与确认</strong><small>统筹全局 · 指挥团队</small></div><i>→</i><div><span>5 个数字员工</span><strong>AI 负责协作与执行</strong><small>持续生产 · 自动运转</small></div></div>
        <div className="content-workflow">{[['01','信息进入','收集需求与素材'],['02','智能体分工','AI 团队自动接单'],['03','内容生产','图文 / 视频 / 数字人'],['04','自动发布','多平台定时发布'],['05','数据复盘','效果分析与优化']].map((item)=><article key={item[0]}><span>{item[0]}</span><strong>{item[1]}</strong><small>{item[2]}</small></article>)}</div>
        <p className="course-note">可按企业需求选择 2 天 1 晚线下集中实训，或 14 天 6 次线上 / 混合实战；核心目标一致：做完并带走 1 套 Codex 自动内容工作法。</p>
      </div>}

      {active === 1 && <div className="course-panel agent-team-panel">
        <div className="agent-team-head"><div><span>DIGITAL CONTENT TEAM</span><h3>一名运营，指挥一支<br />24 小时候命的数字内容团队</h3></div><p>每个智能体都有明确岗位、输入与交付物；关键节点由人确认，让自动化既高效又可控。</p></div>
        <div className="agent-team-grid">{digitalEmployees.map((item)=><article key={item[0]}><span>{item[0]}</span><div className="agent-avatar">AI</div><h4>{item[1]}</h4><strong>{item[2]}</strong><p>{item[3]}</p></article>)}</div>
        <div className="agent-system-result"><span>最终带走</span><strong>1 套全自动内容工作台</strong><p>任务自动分配 · 内容全流程自动化 · 多平台一键发布 · 数据自动复盘</p></div>
      </div>}

      {active === 2 && <div className="course-panel schedule-panel"><div className="schedule-head"><span>阶段 / 时间</span><span>授课人 / 主题</span><span>核心成果</span></div>{schedule.map((item,index)=><article className="schedule-row" key={`${item[0]}-${item[1]}`}><div><b>0{index+1}</b><strong>{item[0]}</strong><small>{item[1]}</small></div><div><strong>{item[2]}</strong><p>{item[3]}</p></div><p>{item[4]}</p></article>)}<p className="course-note">以上为 2 天 1 晚集中实训推荐节奏；也可拆分为 14 天 6 次任务制课程，正式安排以学员、讲师和运营方确认为准。</p></div>}

      {active === 3 && <div className="course-panel modules-panel"><div className="course-track-grid">{courseTracks.map((item)=><article key={item[0]}><span>{item[0]}</span><h4>{item[1]}</h4><p>{item[2]}</p></article>)}</div><div className="modules-grid">{modules.map((item)=><article key={item[0]}><div><span>{item[0]}</span><small>{item[1]}</small></div><h4>{item[2]}</h4><p>{item[3]}</p></article>)}</div></div>}

      {active === 4 && <div className="course-panel deliverables-grid">{deliverables.map((item,index)=><article key={item[0]}><span>0{index+1}</span><div><h4>{item[0]}</h4><p>{item[1]}</p></div></article>)}<div className="deliverable-summary"><strong>三套核心系统</strong><p>AI 办公提效工作台 + AI 内容自动生产系统 + AI 发布与 GEO 增长系统，形成可展示、可复用、可继续迭代的成果包。</p></div></div>}

      {active === 5 && <div className="course-panel follow-panel"><div className="follow-intro"><strong>14 DAY SUPPORT</strong><h4>结营不是结束，应用才刚开始。</h4><p>14 天社群陪跑由助教收集问题，讲师安排答疑、作品点评和最终复盘；并提供商业咨询与工作流使用指导。</p></div><div className="practice-grid">{[['竞品分析','拆解同行账号的标题、封面、结构与行动引导'],['内容审核','检查敏感词、事实、授权、平台表达和人工确认点'],['发布日历','建立 7 天或 30 天发布计划与内容状态表'],['数据复盘','记录曝光、互动、线索或订单，形成优化结论'],['数据回流','把发布内容和数据回填到飞书或系统'],['持续服务','课程答疑、商业咨询、复训与工作流使用指导']].map((item,index)=><article key={item[0]}><span>0{index+1}</span><h4>{item[0]}</h4><p>{item[1]}</p></article>)}</div><p className="compliance-note">合规提醒：素材采集、自动发布、声音克隆、形象克隆和 GEO 不做违规承诺；涉及第三方素材、声音或人物形象时必须确认授权。</p></div>}
    </div>
  );
}

export function GrowthTabs() {
  const [active, setActive] = useState(0);
  const phase = growthPhases[active];

  return (
    <div className="growth-tabs-wrap">
      <div className="growth-rail" role="tablist" aria-label="私教班三期成长档案">
        {growthPhases.map((item,index)=><button key={item.phase} className={active===index?'active':''} onClick={()=>setActive(index)} role="tab" aria-selected={active===index}><span>{item.phase}</span><strong>{item.role}</strong><small>{item.date}</small></button>)}
      </div>
      <div className="growth-panel">
        <div className="growth-main"><span>{phase.phase} · {phase.date}</span><h3>{phase.role}</h3><p className="growth-question">“{phase.question}”</p><blockquote>{phase.quote}</blockquote></div>
        <dl className="growth-facts"><div><dt>核心认知</dt><dd>{phase.insight}</dd></div><div><dt>工具学习</dt><dd>{phase.tools}</dd></div><div><dt>GEO 认知</dt><dd>{phase.geo}</dd></div><div><dt>能力沉淀</dt><dd>{phase.capability}</dd></div></dl>
      </div>
    </div>
  );
}

export function BriefForm() {
  const [projectType, setProjectType] = useState('AI 技术应用');
  const [organization, setOrganization] = useState('企业');
  const [challenge, setChallenge] = useState('');
  const [copied, setCopied] = useState(false);
  const brief = useMemo(() => `元一智能科技｜项目合作需求\n合作方向：${projectType}\n机构类型：${organization}\n当前问题：${challenge || '待进一步沟通'}\n期望下一步：预约一次场景诊断`, [projectType, organization, challenge]);

  async function copyBrief() {
    await navigator.clipboard.writeText(brief); setCopied(true); window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="brief-form" aria-label="项目合作需求生成器">
      <div className="form-head"><span>PROJECT BRIEF</span><i>● READY</i></div>
      <label>合作方向<select value={projectType} onChange={(event) => setProjectType(event.target.value)}><option>AI 技术应用</option><option>AI 数字人 / 个人 IP</option><option>GEO 内容增长</option><option>AI 实战训练</option><option>综合项目共建</option></select></label>
      <label>机构类型<select value={organization} onChange={(event) => setOrganization(event.target.value)}><option>企业</option><option>政府 / 公共机构</option><option>培训机构 / 学校</option><option>创业团队 / 个人品牌</option></select></label>
      <label>当前最想解决的问题<textarea value={challenge} onChange={(event) => setChallenge(event.target.value)} placeholder="例如：希望搭建持续产出内容并分发到多个平台的工作流……" rows={4} /></label>
      <button className="copy-button" type="button" onClick={copyBrief}>{copied ? '已复制需求简报 ✓' : '生成并复制需求简报'}<span>→</span></button>
    </div>
  );
}
