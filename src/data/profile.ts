export const profile = {
  name: '袁杨',
  email: '2339961054@qq.com',
  wechat: 'Y18080108420',
  educationIntro: ['北京师范大学 · 公共管理学硕士', '电子科技大学 · 公共管理学学士'],
  experience: [
    { company: '滴滴出行', role: '平台技术 HR 实习生', dates: '2025.11 — 2026.05', description: '多技术团队并行招聘，负责招聘需求分析、岗位画像和候选人匹配；使用 AI 工具辅助岗位信息检索与核验，并将高频场景沉淀为标准化流程。', results: ['为团队输入人才 30+', '实习期间两个月获评「月度之星」'] },
    { company: '小红书', role: '内容运营实习生', dates: '2025.07 — 2025.08', description: '参与官方账号和小号内容策略、用户洞察与流量运营，通过目标用户分析优化内容供给和引流闭环。', results: ['小号累计点赞超 1 万', '单条有效流量获取成本降低 2 元', '单条引流评论获赞 500+'] }
  ],
  projects: {
    zhennuan: {
      name: '正暖暖', type: 'AI 情感陪伴产品', award: '国家级三等奖',
      description: '从用户研究、数据分析到 AI 产品设计，我负责完整推进的一次 AI 产品实践。',
      facts: ['962 份有效问卷', '4 类用户细分', 'XGBoost + SHAP', 'ESP32S3 原型'],
      caseStudy: [
        { heading: '问题', body: '围绕 AI 情感陪伴产品用户持续使用意愿不足，探索用户需求与体验痛点。' },
        { heading: '研究', body: '设计并开展深度访谈、问卷调查与社交媒体评论分析，回收 962 份有效问卷。' },
        { heading: '发现', body: '通过 K-means 将用户划分为情境驱动型、高频沉浸型、深度依赖型和平衡调节型；结合 BTM / LDA、SEM 与 XGBoost + SHAP 分析反馈和持续使用意愿的影响因素。' },
        { heading: '产品设计', body: '分析 Character.AI、Replika、星野和 ElliQ，围绕长效记忆、多模态交互与科学防依赖设计产品方案。' },
        { heading: '原型与结果', body: '基于 ESP32S3 完成产品原型，项目获得国家级三等奖。' }
      ]
    },
    jobAssistant: { name: 'AI 求职助手', type: '独立 AI 产品实践', description: '计划使用 Codex、Cursor 与 Claude，从 0 到 1 探索 JD 分析、简历匹配和 AI 面试 Agent。', status: 'Coming soon' }
  },
  about: ['公共管理让我习惯从复杂的人与组织关系中理解问题。', 'AI 产品实践让我开始关注：如何把这些理解转化成真正有人使用的产品。'],
  thought: '我希望长期做面向用户的 AI 产品。',
  education: [
    { school: '北京师范大学', degree: '公共管理 · 硕士', dates: '2026.09 — 2029.07' },
    { school: '电子科技大学', degree: '公共管理 · 本科', dates: '2022.09 — 2026.07', distinctions: ['GPA 3.99 / 4.00', '专业排名 1 / 36', '国家奖学金 ×3', '优秀学生一等奖学金 ×3'] }
  ],
  toolkit: [
    { name: 'AI', items: ['Prompt', 'RAG', 'Agent Workflow', 'Model Evaluation'] },
    { name: 'Product', items: ['User Research', 'Product Design', 'Competitor Analysis', 'Data Analysis'] },
    { name: 'Build', items: ['Python', 'SQL', 'Figma', 'Cursor', 'Claude'] }
  ]
};
