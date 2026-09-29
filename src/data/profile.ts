export const profile = {
  name: '袁杨', role: 'AI Product Manager', tagline: 'Turning user insight into thoughtful AI products.',
  positioning: 'Public Administration × AI × Product', email: '2339961054@qq.com', phone: '+86 18080108420',
  resumeHref: '#resume-todo', github: null as string | null, linkedin: null as string | null,
  project: {
    name: '正暖暖', englishName: 'AI Emotional Companion', period: '2024.09 — 2025.04', award: '国家级三等奖',
    summary: '从持续使用意愿出发，把用户研究与数据分析转化为情感陪伴产品定义，并以 ESP32S3 完成原型。',
    metrics: [{ value: '962', label: 'Valid Responses' }, { value: '4', label: 'User Segments' }, { value: 'AI', label: 'Product Design' }, { value: 'ESP32S3', label: 'Prototype' }],
    story: [
      { title: 'Problem', text: '针对 AI 情感陪伴产品用户持续使用意愿不足的问题，探索用户需求与体验痛点。' },
      { title: 'Research', text: '主导研究方案，通过深度访谈、问卷调查和社交媒体评论分析，回收 962 份有效问卷。' },
      { title: 'Insight', text: '用 K-means 识别四类用户；结合 BTM / LDA、SEM 与 XGBoost + SHAP 分析反馈和持续使用意愿影响因素。' },
      { title: 'Product', text: '完成 Character.AI、Replika、星野与 ElliQ 竞品分析，围绕长效记忆、多模态交互和科学防依赖设计产品方案。' },
      { title: 'Prototype', text: '基于 ESP32S3 芯片完成“正暖暖”产品原型。' },
      { title: 'Impact', text: '项目获国家级三等奖。简历未提供上线、用户测试或商业结果数据。' }
    ]
  },
  experience: [
    { company: '小红书', english: 'Xiaohongshu', role: '内容运营实习生', dates: '2025.07 — 2025.08', focus: ['Content Strategy', 'User Insight', 'Growth'], problem: '产品需要持续触达“有上进心、缺行动力”的目标用户。', action: '拆分官方号产品机制内容与小号热点曝光内容，围绕学习方法、戒手机、时间管理稳定供稿；按目标人群训练推荐流，并设计评论区引流闭环。', result: '保障官方号每周 2 更；小号每周 2–4 更，累计点赞超 1 万。高相关笔记进入信息流后，单条有效流量获取成本降低 2 元；单条引流评论获赞 500+。' },
    { company: '滴滴出行', english: 'DiDi', role: 'HR 实习生', dates: '2025.11 — 2026.05', focus: ['Requirement Analysis', 'Candidate Matching', 'AI Workflow', 'Process Optimization'], problem: '多技术团队并行招聘，岗位要求、候选人匹配与信息准备需要形成清晰闭环。', action: '拆解岗位画像和需求优先级，运营招聘渠道并结构化候选人信息；使用平台 AI 工具检索、核验岗位信息，将高频场景沉淀为模板。', result: '推动招聘需求至面试的流程闭环，为团队输入人才 30+；实习期间两个月获评“月度之星”。' }
  ],
  toolkit: [
    { title: 'AI Product', items: ['Prompt Design', 'RAG', 'Agent Workflow', 'Model Evaluation', 'Data Annotation'] },
    { title: 'Product', items: ['User Research', 'Product Design', 'Competitor Analysis', 'Data Analysis'] },
    { title: 'Build', items: ['Python', 'SQL', 'Figma', 'Cursor', 'Claude', 'HTML / CSS'] }
  ],
  education: [
    { school: '北京师范大学', degree: '公共管理学硕士', dates: '2026.09 — 2029.07' },
    { school: '电子科技大学', degree: '公共管理学学士', dates: '2022.09 — 2026.07', gpa: '3.99 / 4.00', rank: '1 / 36', scholarship: '国家奖学金 ×3' }
  ]
};
