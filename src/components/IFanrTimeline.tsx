"use client";
import React from 'react';
import { ArrowRight, Calendar, Award, Briefcase, Code, Terminal, Pencil, Zap, BookOpen, Image, FileText, Video, MessageCircle } from 'lucide-react';

// 添加视图切换属性接口
interface ResumeVisualProps {
  onViewChange?: (view: string) => void;
}

const ResumeVisual: React.FC<ResumeVisualProps> = ({ onViewChange }) => {
  // Styling constants with brand colors
  const colors = {
    primary: "#FF4500",
    secondary: "#2563EB",
    background: "#FAF3E8",
    lightBackground: "#FFF8EF",
    text: "#000000",
    textSecondary: "#555555",
    cardBg: "#FFFFFF",
    border: "#EEEEEE"
  };
  
  // Section styling
  const sectionStyle = "bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6";
  const sectionHeaderStyle = "flex items-center justify-between mb-4";
  const sectionTitleStyle = "text-xl font-bold";
  const sectionIconStyle = "w-10 h-10 rounded-full flex items-center justify-center text-white";

  // Work experience data
  const workExperience = [
    {
      company: "广州海事科技有限公司",
      position: "财务兼总经理助理",
      period: "2022.03-至今",
      duration: "3年",
      location: "广州",
      key_achievements: [
        "负责公司财务工作以及外联宣传交流，与各大协会、政府领导进行合作沟通",
        "负责公司展位布置策划、产品介绍宣传、产品手册制作和后期宣传",
        "全程负责参加中国创新创业大赛，多次获得名次奖励，为公司累计获得十多万奖金",
        "引入AI工具优化公司工作流程，将原本需3天的发票处理优化至几分钟完成"
      ],
      color: colors.primary,
      icon: '🚢'
    },
    {
      company: "广州芳禾数据服务有限公司",
      position: "数据分析师",
      period: "2020.09-2021.02",
      duration: "5个月",
      location: "广州",
      key_achievements: [
        "通过机器学习算法处理消费大数据，并建立描绘用户画像",
        "维护与中国移动和银联的合作数据开发平台",
        "分析建模并输出数据字典与消费行为研究大数据报告",
        "参与摩登百货、步步高商业集团、联邦家私等公司的全程数据报告项目工作"
      ],
      color: colors.secondary,
      icon: '📊'
    },
    {
      company: "广州天榜文化传播有限公司",
      position: "数据分析师",
      period: "2019.06-2020.02",
      duration: "8个月",
      location: "广州",
      key_achievements: [
        "负责公司业务部门每天的销售数据核对处理",
        "对每周公司销售数据进行可视化报表制作",
        "使用Python对公司旧销售数据进行批量清洗与处理",
        "负责部门报销单据填写、核对与上交"
      ],
      color: "#38B2AC",
      icon: '📈'
    },
    {
      company: "深圳证券信息有限公司",
      position: "金融数据分析(实习)",
      period: "2019.01-2019.05",
      duration: "5个月",
      location: "深圳",
      key_achievements: [
        "负责深交所财报的数据分析提取，通过Python完成财报字段提取",
        "爬取投资公告数据、对数据进行清洗提取，汇总到MySQL进行分析",
        "负责摘要提取的维护，编写Python与正则表达式规则进行数据清洗"
      ],
      color: "#ED8936",
      icon: '💹'
    }
  ];

  // Education data
  const education = [
    {
      school: "北京理工大学珠海学院",
      degree: "会计学 本科",
      period: "2015.09-2019.06",
      achievements: [
        "2018年广东省创青春大学生创业大赛省赛铜奖",
        "2018学年获优秀学生奖学金二等奖",
        "2017学年获优秀学生奖学金一等奖"
      ],
      icon: '🎓'
    }
  ];

  // Skills data with proficiency levels
  const skills = [
    { name: "数据分析", category: "技术能力", level: 85, icon: <Terminal size={16} /> },
    { name: "Python", category: "技术能力", level: 75, icon: <Code size={16} /> },
    { name: "财务管理", category: "专业知识", level: 90, icon: <Briefcase size={16} /> },
    { name: "内容创作", category: "内容能力", level: 80, icon: <Pencil size={16} /> },
    { name: "视频制作", category: "内容能力", level: 65, icon: <Video size={16} /> },
    { name: "摄影", category: "创意能力", level: 75, icon: <Image size={16} /> },
    { name: "AI应用", category: "技术能力", level: 80, icon: <Zap size={16} /> },
    { name: "演讲分享", category: "沟通能力", level: 85, icon: <BookOpen size={16} /> }
  ];

  // Projects data
  const projects = [
    {
      name: "书同文Suwin",
      type: "AI领域公众号",
      description: "专注AI领域，近期发表十余篇关注AI领域的深度分析文章，撰写近8年AI和大语言模型评测集的发展综述",
      metrics: [
        { name: "文章数", value: "10+" },
        { name: "阅读量", value: "高增长" }
      ],
      icon: <FileText size={20} />,
      color: colors.primary
    },
    {
      name: "gwaanl",
      type: "B站数码评测",
      description: "制作数码产品专业评测视频，深入解析产品特性与使用体验",
      metrics: [
        { name: "播放量", value: "多篇破万" },
        { name: "视频数", value: "持续更新" }
      ],
      url: "https://space.bilibili.com/11468410",
      icon: <Video size={20} />,
      color: colors.secondary
    },
    {
      name: "GitHub开源项目",
      type: "技术项目",
      description: "在GitHub上开源多个AI相关项目，获20+star，展示技术实力与创新思维",
      metrics: [
        { name: "项目数", value: "多个" },
        { name: "Star数", value: "20+" }
      ],
      url: "https://github.com/ViffyGwaanl",
      icon: <Code size={20} />,
      color: "#38B2AC"
    },
    {
      name: "技术社区参与",
      type: "行业交流",
      description: "参加机智流AI论文分享会，成为优秀分享者。参加Way to AGI切磋大会，在数千人直播前分享AI应用经验",
      metrics: [
        { name: "活动数", value: "多次" },
        { name: "影响力", value: "行业认可" }
      ],
      icon: <MessageCircle size={20} />,
      color: "#ED8936"
    }
  ];

  // 删除未使用的 interestData 变量

  return (
    <div className="w-full max-w-4xl mx-auto p-2 sm:p-4" style={{ background: colors.background }}>
      {/* Header - 添加视图切换器 */}
      <div className="bg-white p-4 sm:p-8 rounded-xl shadow-sm border border-gray-100 mb-4 sm:mb-8">
        <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <h1 className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">关文飞</h1>
            <h2 className="text-base sm:text-xl font-light text-gray-600">数据分析 · AI内容创作 · 财务管理</h2>
            <div className="flex flex-wrap justify-center sm:justify-start mt-3 gap-2">
              <div className="bg-gray-100 rounded-full px-3 py-1 text-xs flex items-center">
                <Calendar size={12} className="mr-1" />
                广州
              </div>
              <div className="bg-gray-100 rounded-full px-3 py-1 text-xs flex items-center">
                <Calendar size={12} className="mr-1" />
                13612206403
              </div>
              <div className="bg-gray-100 rounded-full px-3 py-1 text-xs flex items-center">
                <Calendar size={12} className="mr-1" />
                gwaanl@foxmail.com
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {/* 添加视图切换器 */}
            <div className="bg-gray-100 rounded-lg p-1 flex text-sm font-medium">
              <button 
                className="px-3 py-1.5 rounded-md transition-colors bg-white shadow-sm"
                onClick={() => onViewChange && onViewChange('resume')}
              >
                简历
              </button>
              <button 
                className="px-3 py-1.5 rounded-md transition-colors hover:bg-gray-200"
                onClick={() => onViewChange && onViewChange('work')}
              >
                作品
              </button>
            </div>
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center text-white text-3xl font-bold" style={{ background: colors.primary }}>关</div>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
          <div className="p-3 rounded-lg border border-gray-100 bg-white shadow-sm text-center">
            <div className="text-2xl font-bold" style={{ color: colors.primary }}>5</div>
            <div className="text-xs text-gray-500">年工作经验</div>
          </div>
          <div className="p-3 rounded-lg border border-gray-100 bg-white shadow-sm text-center">
            <div className="text-2xl font-bold" style={{ color: colors.secondary }}>10+</div>
            <div className="text-xs text-gray-500">AI领域文章</div>
          </div>
          <div className="p-3 rounded-lg border border-gray-100 bg-white shadow-sm text-center">
            <div className="text-2xl font-bold" style={{ color: "#38B2AC" }}>多篇</div>
            <div className="text-xs text-gray-500">万播放视频</div>
          </div>
          <div className="p-3 rounded-lg border border-gray-100 bg-white shadow-sm text-center">
            <div className="text-2xl font-bold" style={{ color: "#ED8936" }}>20+</div>
            <div className="text-xs text-gray-500">GitHub星标</div>
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <div className="bg-white p-2 sm:p-4 rounded-xl shadow-sm border border-gray-100 mb-4 sm:mb-8 sticky top-1 z-50">
        <div className="flex justify-between items-center overflow-x-auto hide-scrollbar">
          <a href="#about" className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100">
            <FileText className="w-4 h-4 mr-1 inline" /> 个人简介
          </a>
          <a href="#experience" className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100">
            <Briefcase className="w-4 h-4 mr-1 inline" /> 工作经历
          </a>
          <a href="#projects" className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100">
            <Zap className="w-4 h-4 mr-1 inline" /> 个人项目
          </a>
          <a href="#skills" className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100">
            <Award className="w-4 h-4 mr-1 inline" /> 技能分析
          </a>
          <a href="#education" className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100">
            <BookOpen className="w-4 h-4 mr-1 inline" /> 教育背景
          </a>
        </div>
      </div>
      
      {/* Job Intention */}
      <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100 mb-6">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div>
            <h2 className="text-xl font-bold mb-2">求职意向</h2>
            <p className="text-gray-700">广州爱范儿科技股份有限公司 · 产品评测编辑 / AI方向编辑</p>
          </div>
          <div className="flex mt-4 sm:mt-0 space-x-2">
            <div className="px-3 py-1 rounded-full text-sm font-medium" style={{ background: `${colors.primary}20`, color: colors.primary }}>
              内容创作
            </div>
            <div className="px-3 py-1 rounded-full text-sm font-medium" style={{ background: `${colors.secondary}20`, color: colors.secondary }}>
              AI技术
            </div>
            <div className="px-3 py-1 rounded-full text-sm font-medium" style={{ background: '#38B2AC20', color: '#38B2AC' }}>
              产品评测
            </div>
          </div>
        </div>
      </div>
      
      {/* About Me - MODIFIED: 移除两个图表 */}
      <div id="about" className={sectionStyle}>
        <div className={sectionHeaderStyle}>
          <h2 className={sectionTitleStyle}>个人简介</h2>
          <div className={sectionIconStyle} style={{ background: colors.primary }}>
            <FileText size={18} color="white" />
          </div>
        </div>
        
        <p className="text-gray-700">
          在数据分析与财务管理领域拥有扎实基础，同时对AI技术和数码产品有浓厚兴趣。目前运营AI领域公众号&quot;书同文&quot;和B站数码评测账号&quot;gwaanl&quot;。擅长将复杂技术转化为易懂内容，善于产品分析与数据可视化。热爱摄影，作品丰富。在机智流AI论文分享会和Way to AGI切磋大会等技术社区活跃，分享AI实践经验。
        </p>
      </div>
      
      {/* Work Experience Section */}
      <div id="experience" className={sectionStyle}>
        <div className={sectionHeaderStyle}>
          <h2 className={sectionTitleStyle}>工作经历</h2>
          <div className={sectionIconStyle} style={{ background: colors.primary }}>
            <Briefcase size={18} color="white" />
          </div>
        </div>
        
        <div className="relative">
          {/* Timeline events - removed central line */}
          {workExperience.map((job, index) => (
            <div key={index} className="flex mb-10 sm:mb-12 group">
              {/* Content - moved Time marker inside */}
              <div className="flex-grow">
                <div className="p-4 sm:p-6 rounded-xl shadow-sm group-hover:shadow-md transition-all duration-300 bg-white border-l-4"
                    style={{ borderLeftColor: job.color }}>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    {/* Icon moved inside company name area */}
                    <h3 className="text-lg font-bold flex items-center">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shadow-sm text-white mr-2"
                          style={{ background: job.color }}>
                        <span className="text-lg">{job.icon}</span>
                      </div>
                      {job.company}
                    </h3>
                    <div className="text-sm text-gray-600 mt-1 sm:mt-0">{job.period} ({job.duration})</div>
                  </div>
                  <div className="inline-block mb-3 px-2 py-1 rounded-full text-sm font-medium"
                      style={{ background: `${job.color}20`, color: job.color }}>
                    {job.position}
                  </div>
                  <ul className="mt-3 space-y-2">
                    {job.key_achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <ArrowRight size={18} style={{ color: job.color }} className="flex-shrink-0 mr-2 mt-0.5" />
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Projects Section */}
      <div id="projects" className={sectionStyle}>
        <div className={sectionHeaderStyle}>
          <h2 className={sectionTitleStyle}>个人项目与影响力</h2>
          <div className={sectionIconStyle} style={{ background: colors.primary }}>
            <Zap size={18} color="white" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <div key={index} className="border p-4 rounded-xl hover:shadow-md transition-all duration-300 bg-white">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white mr-3" style={{ background: project.color }}>
                  {project.icon}
                </div>
                <div>
                  {project.url ? (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                      <h3 className="font-bold hover:underline">{project.name}</h3>
                      <ArrowRight size={12} className="ml-1" />
                    </a>
                  ) : (
                    <h3 className="font-bold">{project.name}</h3>
                  )}
                  <div className="text-xs text-gray-500">{project.type}</div>
                </div>
              </div>
              <p className="text-gray-700 text-sm mb-4">{project.description}</p>
              <div className="flex space-x-3">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="bg-gray-50 px-3 py-1 rounded-lg text-xs">
                    <span className="font-medium">{metric.name}:</span> {metric.value}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 p-4 rounded-xl border border-gray-100" style={{ background: colors.lightBackground }}>
          <h3 className="text-lg font-bold mb-4">项目影响力统计</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-3 bg-white rounded-lg border border-gray-100 text-center">
              <h4 className="font-medium mb-1 text-sm">AI文章</h4>
              <p className="text-2xl font-bold mb-1" style={{ color: colors.primary }}>10+</p>
              <p className="text-xs text-gray-600">公众号发布</p>
            </div>
            <div className="p-3 bg-white rounded-lg border border-gray-100 text-center">
              <h4 className="font-medium mb-1 text-sm">B站视频</h4>
              <p className="text-2xl font-bold mb-1" style={{ color: colors.secondary }}>多篇破万</p>
              <p className="text-xs text-gray-600">播放量</p>
            </div>
            <div className="p-3 bg-white rounded-lg border border-gray-100 text-center">
              <h4 className="font-medium mb-1 text-sm">GitHub</h4>
              <p className="text-2xl font-bold mb-1" style={{ color: colors.primary }}>20+</p>
              <p className="text-xs text-gray-600">项目星标</p>
            </div>
            <div className="p-3 bg-white rounded-lg border border-gray-100 text-center">
              <h4 className="font-medium mb-1 text-sm">技术分享</h4>
              <p className="text-2xl font-bold mb-1" style={{ color: colors.secondary }}>数千</p>
              <p className="text-xs text-gray-600">观看量</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Skills Section - MODIFIED: 优化设计, 去掉图表 */}
      <div id="skills" className={sectionStyle}>
        <div className={sectionHeaderStyle}>
          <h2 className={sectionTitleStyle}>专业技能</h2>
          <div className={sectionIconStyle} style={{ background: colors.primary }}>
            <Award size={18} color="white" />
          </div>
        </div>
        
        {/* 优化后的技能部分 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {['技术能力', '内容能力', '专业知识', '沟通能力'].map((category, catIdx) => (
            <div key={catIdx} className="p-4 border border-gray-100 rounded-lg bg-white">
              <h3 className="font-medium mb-3 flex items-center">
                <div className="w-3 h-3 mr-2 rounded-full" style={{ 
                  background: 
                    category === '技术能力' ? colors.primary : 
                    category === '内容能力' ? colors.secondary : 
                    category === '专业知识' ? "#38B2AC" : "#ED8936" 
                }}></div>
                {category}
              </h3>
              <div className="space-y-3">
                {skills.filter(skill => skill.category === category).map((skill, skillIdx) => (
                  <div key={skillIdx} className="mb-2">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center">
                        <span className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center mr-2">
                          {skill.icon}
                        </span>
                        <span className="text-sm font-medium">{skill.name}</span>
                      </div>
                      <span className="text-xs font-bold" style={{ color: colors.primary }}>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-1.5">
                      <div 
                        className="h-1.5 rounded-full" 
                        style={{ 
                          width: `${skill.level}%`, 
                          background: 
                            category === '技术能力' ? colors.primary : 
                            category === '内容能力' ? colors.secondary : 
                            category === '专业知识' ? "#38B2AC" : "#ED8936"
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 rounded-xl border border-gray-100" style={{ background: colors.lightBackground }}>
          <h3 className="text-lg font-bold mb-4">核心技能统计</h3>
          <div className="grid grid-cols-4 gap-2">
            {skills.sort((a, b) => b.level - a.level).slice(0, 4).map((skill, idx) => (
              <div key={idx} className="p-3 bg-white rounded-lg border border-gray-100 text-center">
                <div className="w-8 h-8 mx-auto mb-2 rounded-full flex items-center justify-center" 
                    style={{ background: `${colors.primary}20` }}>
                  {skill.icon}
                </div>
                <h4 className="text-sm font-medium">{skill.name}</h4>
                <p className="text-lg font-bold mt-1" style={{ color: colors.primary }}>{skill.level}%</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Education Section */}
      <div id="education" className={sectionStyle}>
        <div className={sectionHeaderStyle}>
          <h2 className={sectionTitleStyle}>教育背景</h2>
          <div className={sectionIconStyle} style={{ background: colors.primary }}>
            <BookOpen size={18} color="white" />
          </div>
        </div>
        
        <div className="relative">
          {/* Timeline events - removed central line */}
          {education.map((edu, index) => (
            <div key={index} className="flex mb-10 group">
              {/* Content - moved Time marker inside */}
              <div className="flex-grow">
                <div className="p-4 sm:p-6 rounded-xl shadow-sm group-hover:shadow-md transition-all duration-300 bg-white border-l-4"
                    style={{ borderLeftColor: colors.primary }}>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    {/* Icon moved inside school name area */}
                    <h3 className="text-lg font-bold flex items-center">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shadow-sm text-white mr-2"
                          style={{ background: colors.primary }}>
                        <span className="text-lg">{edu.icon}</span>
                      </div>
                      {edu.school}
                    </h3>
                    <div className="text-sm text-gray-600 mt-1 sm:mt-0">{edu.period}</div>
                  </div>
                  <div className="inline-block mb-3 px-2 py-1 rounded-full text-sm font-medium"
                      style={{ background: `${colors.primary}20`, color: colors.primary }}>
                    {edu.degree}
                  </div>
                  <div className="mt-4 p-4 rounded-lg bg-gray-50">
                    <h4 className="font-medium mb-2">获奖情况</h4>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <Award size={16} className="flex-shrink-0 mr-2 mt-0.5" style={{ color: colors.primary }} />
                          <span className="text-gray-700 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 p-4 rounded-xl border border-gray-100" style={{ background: colors.lightBackground }}>
          <h3 className="text-lg font-bold mb-4">专业技能证书</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-white rounded-lg border border-gray-100 flex items-center">
              <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3" style={{ background: `${colors.primary}20` }}>
                <Award size={20} style={{ color: colors.primary }} />
              </div>
              <div>
                <div className="font-medium">初级会计证书</div>
                <div className="text-xs text-gray-500">专业认证</div>
              </div>
            </div>
            <div className="p-3 bg-white rounded-lg border border-gray-100 flex items-center">
              <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3" style={{ background: `${colors.secondary}20` }}>
                <Terminal size={20} style={{ color: colors.secondary }} />
              </div>
              <div>
                <div className="font-medium">计算机二级</div>
                <div className="text-xs text-gray-500">技能认证</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="rounded-xl p-4 bg-white shadow-sm border border-gray-100 mt-4 flex flex-col sm:flex-row items-center justify-between">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <h3 className="font-bold mb-1">联系方式</h3>
          <p className="text-gray-600 text-sm">电话: 13612206403 · 邮箱: gwaanl@foxmail.com</p>
        </div>
        <div className="flex space-x-2">
          <a href="https://space.bilibili.com/11468410" target="_blank" rel="noopener noreferrer" 
            className="px-3 py-1 rounded-full text-sm font-medium inline-flex items-center" 
            style={{ background: `${colors.secondary}20`, color: colors.secondary }}>
            <Video size={14} className="mr-1" /> B站主页
          </a>
          <a href="https://github.com/ViffyGwaanl" target="_blank" rel="noopener noreferrer"
            className="px-3 py-1 rounded-full text-sm font-medium inline-flex items-center" 
            style={{ background: `${colors.primary}20`, color: colors.primary }}>
            <Code size={14} className="mr-1" /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumeVisual;