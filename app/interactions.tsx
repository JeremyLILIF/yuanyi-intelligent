'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

const caseTabs = ['阿驰 GEO 官网', '青创盟 GEO 增长'];

const visualCases = [
  { src: 'visual-portrait.webp', label: '海南农垦 · 人物品牌视觉', alt: '海南农垦集团茶叶宣传片人物品牌视觉案例' },
  { src: 'visual-tea.webp', label: '茶叶品牌商品视觉', alt: '中国红茶原图到 AI 商品视觉案例' },
  { src: 'visual-vitality.webp', label: '产品场景视觉', alt: '东方元气 AI 商品场景视觉案例' },
];

const platformScreens = [
  { src: 'digital-ip-login.webp', label: '平台入口', detail: '本地优先的数字人内容工作台', alt: '数字人 IP 智能体平台登录界面' },
  { src: 'digital-ip-home.webp', label: '智能工作台', detail: '一套软件连接八个内容生产环节', alt: '数字人 IP 智能体平台工作台首页' },
  { src: 'digital-ip-capabilities.webp', label: '产品能力', detail: '从爆款解析到发布准备的模块能力', alt: '数字人 IP 智能体平台产品能力界面' },
  { src: 'digital-ip-history.webp', label: '任务与结果', detail: '批次进度、视频结果与历史任务可追踪', alt: '数字人 IP 智能体平台视频结果与历史记录' },
];

const incubatorImages = [
  { src: 'incubator-building.webp', label: '孵化基地外景', alt: '元一智能科技所在的海口 AI 海景孵化基地写字楼' },
  { src: 'incubator-reception.webp', label: '海浪形象前厅', alt: 'AI 海景孵化基地接待前厅' },
  { src: 'incubator-office-sea.webp', label: '海景独立办公室', alt: '可俯瞰海口湾的独立办公室' },
  { src: 'incubator-office-city.webp', label: '城市景观办公室', alt: 'AI 海景孵化基地城市景观办公室' },
  { src: 'incubator-lounge.webp', label: '海景会客空间', alt: 'AI 海景孵化基地海景会客与交流空间' },
  { src: 'incubator-workstations.webp', label: '团队办公工位', alt: 'AI 海景孵化基地团队办公工位' },
  { src: 'incubator-meeting.webp', label: '会议与培训空间', alt: 'AI 海景孵化基地会议与培训空间' },
];

const trainingGalleryImages = [
  { src: 'training-case-01.webp', label: 'AI 实战工作坊', detail: '真实业务场景拆解与任务推进', alt: '元一智能 AI 实战提效营会议室工作坊现场' },
  { src: 'training-case-02.webp', label: '小组讨论与协作', detail: '任务共创与现场答疑', alt: 'AI 实战提效营学员进行小组讨论' },
  { src: 'training-case-03.webp', label: 'AI 工具现场实操', detail: '边学边做，完成真实交付', alt: 'AI 实战提效营学员使用电脑进行工具实操' },
  { src: 'training-case-04.webp', label: '海南 Codex 交流会', detail: '小班深度交流与学习合影', alt: '海南 Codex 交流会往期学员合影' },
  { src: 'training-case-05.webp', label: 'AI 图片与视频训练', detail: '面向企业与机构的场景实训', alt: 'AI 图片和视频主题培训课堂现场' },
  { src: 'training-case-06.webp', label: '往期学员合影', detail: '学习成果与实战结营见证', alt: '元一智能 AI 实战课程往期学员大合影' },
  { src: 'training-case-07.webp', label: '主题交流专场', detail: '技术、业务与资源同场连接', alt: '海南 Codex 主题交流活动学员合影' },
  { src: 'training-case-08.webp', label: '海景实训课堂', detail: '沉浸式学习与项目练习', alt: '元一智能海景教室 AI 实战培训现场' },
];

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

export function HeroOceanBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;

    let width = 0;
    let height = 0;
    let frame = 0;
    let seed = 27;
    const random = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };
    const motes = Array.from({ length: 72 }, () => ({
      x: random(), y: random() * .72, radius: .45 + random() * 1.25,
      alpha: .24 + random() * .52, speed: .000003 + random() * .000009, phase: random() * Math.PI * 2,
    }));
    const meteors = Array.from({ length: 5 }, (_, index) => ({
      period: 4400 + index * 760 + random() * 900,
      offset: index * 1050 + random() * 650,
      duration: 1050 + random() * 480,
      x: .64 + random() * .34,
      y: .04 + random() * .3,
      travelX: .19 + random() * .12,
      travelY: .12 + random() * .1,
      length: 70 + random() * 85,
    }));
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(1, bounds.width);
      height = Math.max(1, bounds.height);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const draw = (time: number) => {
      context.clearRect(0, 0, width, height);

      const horizon = context.createRadialGradient(width * .7, height * .57, 0, width * .7, height * .57, width * .62);
      horizon.addColorStop(0, 'rgba(84, 255, 205, .26)');
      horizon.addColorStop(.32, 'rgba(33, 197, 211, .15)');
      horizon.addColorStop(1, 'rgba(0, 0, 0, 0)');
      context.fillStyle = horizon;
      context.fillRect(0, height * .2, width, height * .8);

      const horizonLine = context.createLinearGradient(0, 0, width, 0);
      horizonLine.addColorStop(0, 'rgba(84, 242, 203, 0)');
      horizonLine.addColorStop(.38, 'rgba(84, 242, 203, .08)');
      horizonLine.addColorStop(.7, 'rgba(201, 255, 80, .38)');
      horizonLine.addColorStop(1, 'rgba(201, 255, 80, 0)');
      context.fillStyle = horizonLine;
      context.fillRect(0, height * .555, width, 1.4);

      motes.forEach((mote) => {
        const x = ((mote.x + time * mote.speed) % 1) * width;
        const pulse = .5 + Math.sin(time * .0012 + mote.phase) * .5;
        context.beginPath();
        context.arc(x, mote.y * height, mote.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(208, 255, 157, ${mote.alpha * (.35 + pulse * .65)})`;
        context.fill();
      });

      for (let row = 0; row < 12; row += 1) {
        const baseY = height * (.48 + row * .047);
        const stroke = context.createLinearGradient(0, 0, width, 0);
        stroke.addColorStop(0, 'rgba(62, 215, 208, 0)');
        stroke.addColorStop(.27, `rgba(62, 226, 218, ${.085 + row * .007})`);
        stroke.addColorStop(.72, `rgba(198, 255, 84, ${.15 + row * .012})`);
        stroke.addColorStop(1, 'rgba(198, 255, 84, 0)');
        context.beginPath();
        for (let x = -24; x <= width + 24; x += 18) {
          const y = baseY
            + Math.sin(x * .009 + time * .00042 + row * .68) * (3.5 + row * .72)
            + Math.sin(x * .0031 - time * .00025) * (3 + row * .4);
          if (x === -24) context.moveTo(x, y); else context.lineTo(x, y);
        }
        context.strokeStyle = stroke;
        context.lineWidth = 1.05 + row * .09;
        context.stroke();
      }

      meteors.forEach((meteor) => {
        const cycle = (time + meteor.offset) % meteor.period;
        if (cycle > meteor.duration) return;
        const progress = cycle / meteor.duration;
        const opacity = Math.sin(progress * Math.PI) * .95;
        const headX = width * (meteor.x - meteor.travelX * progress);
        const headY = height * (meteor.y + meteor.travelY * progress);
        const tailX = headX + meteor.length;
        const tailY = headY - meteor.length * .42;
        const streak = context.createLinearGradient(headX, headY, tailX, tailY);
        streak.addColorStop(0, `rgba(218, 255, 174, ${opacity})`);
        streak.addColorStop(.18, `rgba(111, 245, 213, ${opacity * .75})`);
        streak.addColorStop(1, 'rgba(111, 245, 213, 0)');
        context.beginPath();
        context.moveTo(headX, headY);
        context.lineTo(tailX, tailY);
        context.strokeStyle = streak;
        context.lineWidth = 2;
        context.stroke();
        context.beginPath();
        context.arc(headX, headY, 1.7, 0, Math.PI * 2);
        context.fillStyle = `rgba(235, 255, 215, ${opacity})`;
        context.fill();
      });

      if (!reducedMotion) frame = window.requestAnimationFrame(draw);
    };

    resize();
    draw(0);
    const observer = new ResizeObserver(() => {
      resize();
      if (reducedMotion) draw(0);
    });
    observer.observe(canvas);
    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return <div className="hero-motion-bg" aria-hidden="true"><canvas ref={canvasRef} className="hero-ocean-canvas" /></div>;
}

export function SiteMotionEffects() {
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>('main .section > *'));
    if (!targets.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: .08, rootMargin: '0px 0px -7% 0px' });

    targets.forEach((target, index) => {
      target.classList.add('motion-reveal');
      target.style.setProperty('--reveal-delay', `${(index % 3) * 70}ms`);
      observer.observe(target);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}

export function GeoPilotShowcase({ basePath }: { basePath: string }) {
  return (
    <div className="geo-pilot-showcase">
      <div className="case-copy geo-pilot-copy">
        <p className="panel-kicker">PRODUCT SYSTEM · GEO PILOT</p>
        <h3>从用户问题出发，<br /><em>形成可持续增长闭环</em></h3>
        <p>围绕关键词洞察、企业知识沉淀、内容生成、数字人视频、多平台草稿与数据反馈，让内容从“被看见”走向“被理解、被信任、被转化”。</p>
        <div className="geo-pilot-metrics"><article><strong>05</strong><span>增长闭环环节</span></article><article><strong>HITL</strong><span>人工确认发布</span></article><article><strong>LOOP</strong><span>数据持续回流</span></article></div>
        <div className="case-step-list">{['用户问题与关键词洞察', '企业知识库与素材资产', '智能内容与数字人生产', '多平台草稿与人工确认', '数据回流与下一轮优化'].map((item, index) => <span key={item}><b>0{index + 1}</b>{item}</span>)}</div>
      </div>
      <div className="case-media geo-pilot-media">
        <div className="case-media-bar"><span>GEO PILOT · CONTENT GROWTH SYSTEM</span><b>HUMAN IN THE LOOP</b></div>
        <img src={`${basePath}/assets/geo-loop.webp`} alt="GEO Pilot 内容增长闭环界面" loading="lazy" decoding="async" />
        <div className="geo-pilot-status"><span>问题洞察</span><i>→</i><span>知识沉淀</span><i>→</i><span>内容生产</span><i>→</i><span>发布复盘</span></div>
      </div>
    </div>
  );
}

export function CaseTabs({ basePath }: { basePath: string }) {
  const [active, setActive] = useState(0);

  return (
    <div className="case-tabs-wrap client-case-tabs-wrap">
      <div className="tab-rail" role="tablist" aria-label="解决方案与客户案例">
        {caseTabs.map((tab, index) => <button key={tab} className={active === index ? 'active' : ''} onClick={() => setActive(index)} role="tab" aria-selected={active === index}><span>0{index + 1}</span>{tab}</button>)}
      </div>

      {active === 0 && (
        <div className="case-panel case-achi">
          <div className="case-copy">
            <p className="panel-kicker">GEO WEBSITE CASE · HAIKOU</p><h3>海南阿驰二手车<br /><em>GEO 品牌官网落地案例</em></h3>
            <p>围绕海口二手车用户关心的买车、卖车、估价与服务问题，把品牌信息、本地业务与问答型内容组织成更容易被搜索引擎和 AI 理解的官网结构，并形成可持续更新的公开知识入口。</p>
            <dl className="case-facts">
              <div><dt>案例结果</dt><dd>品牌官网正式上线，形成企业可控的 GEO 内容阵地</dd></div><div><dt>内容策略</dt><dd>品牌实体、本地服务、用户问题与业务信息结构化呈现</dd></div>
              <div><dt>交付内容</dt><dd>官网信息架构、业务页面、问答内容与咨询承接入口</dd></div><div><dt>应用价值</dt><dd>让品牌内容更易被检索、理解，并持续承接客户咨询</dd></div>
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
          <div className="case-copy"><p className="panel-kicker">HAINAN&apos;S LARGEST ENTREPRENEUR COMMUNITY</p><h3>海南青创盟<br /><em>GEO 内容增长落地案例</em></h3><p>面向海南最大创业社群“青创盟”，围绕青年创业者关心的 AI 应用、创业增长与资源链接问题，持续建设可被搜索和 AI 理解的主题内容，再把线上触达导向活动报名、社群沉淀与项目合作。</p><div className="case-step-list">{['用户问题与主题词库', 'GEO 内容持续生产', '搜索与内容平台触达', '活动报名与线下连接', '社群沉淀与项目合作'].map((item, index) => <span key={item}><b>0{index + 1}</b>{item}</span>)}</div></div>
          <div className="case-media case-photo"><img src={`${basePath}/assets/training-workshop.webp`} alt="海南青创盟 GEO 内容增长活动" loading="lazy" decoding="async" /><div><span>案例结果</span><strong>GEO 内容 × 活动 × 社群转化</strong></div></div>
        </div>
      )}
    </div>
  );
}

export function SpecialDeliveryShowcase({ basePath }: { basePath: string }) {
  const [visualIndex, setVisualIndex] = useState(0);
  const [expandedVisual, setExpandedVisual] = useState<number | null>(null);

  useEffect(() => {
    if (expandedVisual === null) return;
    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setExpandedVisual(null);
      if (event.key === 'ArrowLeft') setExpandedVisual((current) => current === null ? null : (current + visualCases.length - 1) % visualCases.length);
      if (event.key === 'ArrowRight') setExpandedVisual((current) => current === null ? null : (current + 1) % visualCases.length);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [expandedVisual]);

  return (
    <div className="special-case-grid">
      <article className="special-case-card">
        <div className="case-copy special-case-copy">
          <p className="panel-kicker">01 · AI PRODUCT VISUAL</p>
          <h3>AI 商品视觉<br /><em>从原图到品牌内容资产</em></h3>
          <p>为海南农垦集团茶叶项目打造宣传片人物品牌视觉，并延展商品主视觉、消费场景、社交媒体素材与短视频内容。</p>
          <div className="visual-client-case"><span>CLIENT CASE</span><strong>海南农垦集团 · 茶叶宣传片</strong><small>人物品牌视觉 × 商品视觉 × 产品场景</small></div>
        </div>
        <div className="case-media visual-case-gallery">
          <div className="case-media-bar"><span>{visualCases[visualIndex].label}</span><b>点击大图查看</b></div>
          <button className="visual-main" type="button" onClick={() => setExpandedVisual(visualIndex)} aria-label={`放大查看${visualCases[visualIndex].label}`}><img src={`${basePath}/assets/${visualCases[visualIndex].src}`} alt={visualCases[visualIndex].alt} loading="lazy" decoding="async" /><span>展开查看 ↗</span></button>
          <div className="visual-thumbnails">{visualCases.map((item,index)=><button className={visualIndex===index?'active':''} type="button" key={item.src} onClick={()=>setVisualIndex(index)} aria-label={`切换到${item.label}`}><img src={`${basePath}/assets/${item.src}`} alt="" loading="lazy" decoding="async" /><span>{item.label}</span></button>)}</div>
        </div>
      </article>

      <article className="special-case-card">
        <div className="case-copy special-case-copy">
          <p className="panel-kicker">02 · GOVERNMENT & ENTERPRISE TRAINING</p>
          <h3>政企 AI 培训<br /><em>把 AI 用进真实岗位任务</em></h3>
          <p>面向政府及公共机构开展办公提效、材料整理、政务宣传和安全合规实训；面向企业，则围绕部门流程与岗位任务进行内部提效训练。</p>
          <div className="tag-cloud"><span>政府与公共机构</span><span>企业内部培训</span><span>部门专项工作坊</span><span>真实业务任务共创</span></div>
        </div>
        <div className="case-media case-photo special-training-photo"><img src={`${basePath}/assets/training-community.webp`} alt="政府 AI 培训与企业内训现场" loading="lazy" decoding="async" /><div><span>培训目标</span><strong>现场实操 · 完成真实任务</strong></div></div>
      </article>

      {expandedVisual !== null && <div className="image-lightbox" role="dialog" aria-modal="true" aria-label="AI 商品视觉大图" onClick={() => setExpandedVisual(null)}>
        <button className="lightbox-close" type="button" onClick={() => setExpandedVisual(null)} aria-label="关闭大图">×</button>
        <button className="lightbox-arrow lightbox-prev" type="button" onClick={(event) => { event.stopPropagation(); setExpandedVisual((expandedVisual + visualCases.length - 1) % visualCases.length); }} aria-label="上一张">‹</button>
        <figure onClick={(event) => event.stopPropagation()}><img src={`${basePath}/assets/${visualCases[expandedVisual].src}`} alt={visualCases[expandedVisual].alt} /><figcaption><span>{String(expandedVisual + 1).padStart(2,'0')} / {String(visualCases.length).padStart(2,'0')}</span>{visualCases[expandedVisual].label}</figcaption></figure>
        <button className="lightbox-arrow lightbox-next" type="button" onClick={(event) => { event.stopPropagation(); setExpandedVisual((expandedVisual + 1) % visualCases.length); }} aria-label="下一张">›</button>
      </div>}
    </div>
  );
}

export function IncubatorShowcase({ basePath }: { basePath: string }) {
  const [activeImage, setActiveImage] = useState(2);
  const [expandedImage, setExpandedImage] = useState<number | null>(null);
  const selected = incubatorImages[activeImage];

  useEffect(() => {
    if (expandedImage === null) return;
    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setExpandedImage(null);
      if (event.key === 'ArrowLeft') setExpandedImage((current) => current === null ? null : (current + incubatorImages.length - 1) % incubatorImages.length);
      if (event.key === 'ArrowRight') setExpandedImage((current) => current === null ? null : (current + 1) % incubatorImages.length);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [expandedImage]);

  return (
    <div className="incubator-showcase">
      <div className="incubator-gallery">
        <div className="incubator-media-bar"><span>REAL SPACE · 0{activeImage + 1}</span><b>{selected.label}</b></div>
        <button className="incubator-main-image" type="button" onClick={() => setExpandedImage(activeImage)} aria-label={`放大查看${selected.label}`}><img src={`${basePath}/assets/${selected.src}`} alt={selected.alt} /><span>查看实景大图 ↗</span></button>
        <div className="incubator-thumbs" aria-label="孵化基地实景图集">{incubatorImages.map((item,index)=><button className={activeImage===index?'active':''} type="button" key={item.src} onClick={()=>setActiveImage(index)} aria-label={`切换到${item.label}`}><img src={`${basePath}/assets/${item.src}`} alt="" /><span>{item.label}</span></button>)}</div>
      </div>
      <div className="incubator-tour-card">
        <div className="incubator-tour-head"><div><span>SPACE TOUR</span><strong>35 秒实景探访</strong></div><b>HAIKOU</b></div>
        <div className="incubator-tour-video"><video controls playsInline preload="metadata" poster={`${basePath}/assets/incubator-tour-poster.webp`} aria-label="元一 AI 海景孵化基地实景视频"><source src={`${basePath}/assets/incubator-tour.mp4`} type="video/mp4" /></video></div>
        <div className="incubator-tour-meta"><span>独立办公室</span><span>共享工位</span><span>会议培训</span></div>
        <p>真实空间、真实海景、真实办公条件。可根据团队人数与项目周期匹配入驻方式。</p>
      </div>

      {expandedImage !== null && <div className="image-lightbox" role="dialog" aria-modal="true" aria-label="AI 海景孵化基地实景大图" onClick={() => setExpandedImage(null)}>
        <button className="lightbox-close" type="button" onClick={() => setExpandedImage(null)} aria-label="关闭大图">×</button>
        <button className="lightbox-arrow lightbox-prev" type="button" onClick={(event) => { event.stopPropagation(); setExpandedImage((expandedImage + incubatorImages.length - 1) % incubatorImages.length); }} aria-label="上一张">‹</button>
        <figure className="incubator-lightbox-figure" onClick={(event) => event.stopPropagation()}><img src={`${basePath}/assets/${incubatorImages[expandedImage].src}`} alt={incubatorImages[expandedImage].alt} /><figcaption><span>{String(expandedImage + 1).padStart(2,'0')} / {String(incubatorImages.length).padStart(2,'0')}</span>{incubatorImages[expandedImage].label}</figcaption></figure>
        <button className="lightbox-arrow lightbox-next" type="button" onClick={(event) => { event.stopPropagation(); setExpandedImage((expandedImage + 1) % incubatorImages.length); }} aria-label="下一张">›</button>
      </div>}
    </div>
  );
}

export function DigitalIpShowcase({ basePath }: { basePath: string }) {
  const [activeScreen, setActiveScreen] = useState(1);
  const screen = platformScreens[activeScreen];

  return (
    <div className="digital-ip-showcase">
      <div className="platform-demo">
        <div className="platform-demo-bar"><span>元一智能 · AI 内容获客工作台</span><b>PLATFORM CASE</b></div>
        <a className="platform-screen" href={`${basePath}/assets/${screen.src}`} target="_blank" rel="noreferrer" aria-label={`查看${screen.label}完整界面`}>
          <img src={`${basePath}/assets/${screen.src}`} alt={screen.alt} />
          <span>查看完整界面 ↗</span>
        </a>
        <div className="platform-screen-tabs" role="tablist" aria-label="数字人 IP 智能体平台界面">
          {platformScreens.map((item,index)=><button key={item.src} className={activeScreen===index?'active':''} type="button" onClick={()=>setActiveScreen(index)} role="tab" aria-selected={activeScreen===index}><span>0{index+1}</span><strong>{item.label}</strong><small>{item.detail}</small></button>)}
        </div>
      </div>
      <div className="digital-result-card">
        <div className="digital-result-head"><div><span>OUTPUT · 01</span><strong>数字人成片结果</strong></div><b>27 SEC</b></div>
        <div className="digital-video-wrap">
          <video controls playsInline preload="metadata" poster={`${basePath}/assets/digital-ip-video-poster.webp`} onLoadedMetadata={(event) => { event.currentTarget.currentTime = 0; }} aria-label="数字人 IP 智能体平台生成的视频案例，从 0 分 00 秒开始播放">
            <source src={`${basePath}/assets/digital-ip-result.mp4`} type="video/mp4" />
          </video>
        </div>
        <div className="digital-result-meta"><span>真人授权形象</span><span>智能剪辑</span><span>竖屏成片</span></div>
        <p>从平台任务进入成片结果，适用于个人 IP、本地商家口播与持续内容运营。</p>
      </div>
    </div>
  );
}

export function TrainingGallery({ basePath }: { basePath: string }) {
  const [expandedImage, setExpandedImage] = useState<number | null>(null);

  useEffect(() => {
    if (expandedImage === null) return;
    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setExpandedImage(null);
      if (event.key === 'ArrowLeft') setExpandedImage((current) => current === null ? null : (current + trainingGalleryImages.length - 1) % trainingGalleryImages.length);
      if (event.key === 'ArrowRight') setExpandedImage((current) => current === null ? null : (current + 1) % trainingGalleryImages.length);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [expandedImage]);

  return (
    <div className="training-gallery-block">
      <div className="training-gallery-heading">
        <div><span>PAST TRAINING HIGHLIGHTS</span><h3>往期实战现场</h3></div>
        <p>从小班工作坊、企业培训到海南 Codex 交流会，记录真实学习、协作与成果共创。每一场都从业务问题出发，在现场完成练习与交付。</p>
      </div>
      <div className="training-gallery-grid" aria-label="AI 实战提效营往期现场案例">
        {trainingGalleryImages.map((item, index) => (
          <button className={`training-gallery-card training-gallery-card-${index + 1}`} type="button" key={item.src} onClick={() => setExpandedImage(index)} aria-label={`放大查看${item.label}`}>
            <img src={`${basePath}/assets/${item.src}`} alt={item.alt} loading="lazy" decoding="async" />
            <span className="training-gallery-index">{String(index + 1).padStart(2, '0')}</span>
            <span className="training-gallery-caption"><strong>{item.label}</strong><small>{item.detail}</small></span>
          </button>
        ))}
      </div>

      {expandedImage !== null && <div className="image-lightbox training-lightbox" role="dialog" aria-modal="true" aria-label="AI 实战提效营往期现场大图" onClick={() => setExpandedImage(null)}>
        <button className="lightbox-close" type="button" onClick={() => setExpandedImage(null)} aria-label="关闭大图">×</button>
        <button className="lightbox-arrow lightbox-prev" type="button" onClick={(event) => { event.stopPropagation(); setExpandedImage((expandedImage + trainingGalleryImages.length - 1) % trainingGalleryImages.length); }} aria-label="上一张">‹</button>
        <figure className="training-lightbox-figure" onClick={(event) => event.stopPropagation()}>
          <img src={`${basePath}/assets/${trainingGalleryImages[expandedImage].src}`} alt={trainingGalleryImages[expandedImage].alt} />
          <figcaption><span>{String(expandedImage + 1).padStart(2, '0')} / {String(trainingGalleryImages.length).padStart(2, '0')}</span><strong>{trainingGalleryImages[expandedImage].label}</strong><small>{trainingGalleryImages[expandedImage].detail}</small></figcaption>
        </figure>
        <button className="lightbox-arrow lightbox-next" type="button" onClick={(event) => { event.stopPropagation(); setExpandedImage((expandedImage + 1) % trainingGalleryImages.length); }} aria-label="下一张">›</button>
      </div>}
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

type ContactTriggerProps = {
  basePath: string;
  className?: string;
  label: string;
  arrow?: string;
  title?: string;
  note?: string;
};

export function ContactTrigger({
  basePath,
  className = '',
  label,
  arrow = '→',
  title = '添加微信，开始沟通',
  note = '扫码添加杰瑞米，备注你的合作方向，我们会尽快回复。',
}: ContactTriggerProps) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [open]);

  async function copyWechat() {
    await navigator.clipboard.writeText('b352543239');
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <>
      <button className={`${className} contact-trigger`.trim()} type="button" onClick={() => setOpen(true)}>
        {label}{arrow && <span>{arrow}</span>}
      </button>
      {open && createPortal(
        <div className="contact-modal" role="presentation" onMouseDown={(event) => { if (event.currentTarget === event.target) setOpen(false); }}>
          <section className="contact-modal-card" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
            <button className="contact-modal-close" type="button" aria-label="关闭联系二维码" onClick={() => setOpen(false)} autoFocus>×</button>
            <div className="contact-modal-copy">
              <span>WECHAT CONTACT</span>
              <h2 id="contact-modal-title">{title}</h2>
              <p>{note}</p>
              <div className="contact-modal-id"><small>微信号</small><strong>b352543239</strong><button type="button" onClick={copyWechat}>{copied ? '已复制 ✓' : '复制微信号'}</button></div>
            </div>
            <div className="contact-modal-qr"><img src={`${basePath}/assets/contact-wechat.jpg`} alt="杰瑞米微信二维码" /></div>
          </section>
        </div>,
        document.body,
      )}
    </>
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
