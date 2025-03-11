"use client";

import React, { useState, useEffect } from 'react';
import { Calendar, TrendingUp, Layout, FileText, Award, BarChart2, BookOpen } from 'lucide-react';
import { PieChart, Pie, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

interface LLMEvaluationDashboardProps {
  onViewChange: (view: string) => void;
  currentView?: string;
}

const LLMEvaluationDashboard: React.FC<LLMEvaluationDashboardProps> = ({ 
  onViewChange, 
  currentView = 'work'
}) => {
  // State for active section
  const [activeSection, setActiveSection] = useState<string>('chronology');

  // Scroll tracking effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'chronology',
        'categories',
        'methods',
        'papers',
        'performance',
        'findings'
      ];
      
      const sectionElements = sections.map(id => 
        document.getElementById(id)
      );
      
      const scrollPosition = window.scrollY + 200; // Offset to trigger earlier
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial active section
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array, only run on mount and unmount

  // Color scheme
  const colors = {
    primary: "#3B82F6", // Blue
    secondary: "#10B981", // Emerald
    background: "#F8FAFC",
    lightBackground: "#F1F5F9",
    text: "#1E293B",
    textSecondary: "#64748B",
    cardBg: "#FFFFFF",
    border: "#E2E8F0",
  };
  
  // Timeline data
  const timelinePeriods = {
    'foundation': [
      {
        year: '2017-2019',
        title: '基础阶段',
        description: '以GLUE和SQuAD为代表，关注基础语言理解和简单问答能力，基准数量少且范围有限。',
        highlight: '这一阶段奠定了大语言模型评测的基础框架，强调基本语言理解能力。',
        icon: '📚'
      }
    ],
    'expansion': [
      {
        year: '2020-2022',
        title: '扩展阶段',
        description: '随着模型能力提升，出现了SuperGLUE和MMLU等更复杂的基准，开始测试多样化的能力。',
        highlight: '评测基准开始关注更复杂的推理能力和多样化任务，如常识推理与跨领域知识。',
        icon: '🔍'
      }
    ],
    'explosion': [
      {
        year: '2023-2024',
        title: '爆发阶段',
        description: '随着GPT-4等大模型突破，评测基准呈爆发式增长，2024年单年发布100个基准，显著高于历史水平。',
        highlight: '评测领域呈现出多元化发展，包括推理能力、多模态理解、代码生成等专业化方向。',
        icon: '🚀'
      }
    ],
    'frontier': [
      {
        year: '2025',
        title: '极限挑战阶段',
        description: '以Humanity\'s Last Exam为代表，开始探索模型能力的极限边界，提供更具挑战性的评测。',
        highlight: '当前最佳模型在HLE上仅达到14%准确率，为模型进步提供了清晰的衡量空间。',
        icon: '🔬'
      }
    ]
  };
  
  // Benchmark categories data
  const benchmarkCategoriesData = [
    { name: '推理能力', count: 41, percentage: 19.5 },
    { name: '多模态理解', count: 34, percentage: 16.2 },
    { name: '知识评测', count: 27, percentage: 12.9 },
    { name: '数学能力', count: 17, percentage: 8.1 },
    { name: '安全性', count: 16, percentage: 7.6 },
    { name: '代码生成', count: 14, percentage: 6.7 },
    { name: '智能体评测', count: 12, percentage: 5.7 },
    { name: '其他类别', count: 49, percentage: 23.3 }
  ];
  
  // Evaluation methods data
  const evaluationMethodsData = [
    { 
      name: '人类评测',
      advantages: '专业性强，评价全面',
      limitations: '成本高昂，难以规模化',
      examples: 'Humanity\'s Last Exam采用严格的两阶段评审流程，由具备研究生及以上学位的专家团队评估'
    },
    { 
      name: '自动化指标',
      advantages: '低成本，易于规模化',
      limitations: '难以捕捉回答的全部质量维度',
      examples: 'SuperGPQA主要通过准确率评估模型回答研究生学科问题的能力'
    },
    { 
      name: 'LLM-as-Judge',
      advantages: '成本低于人类评测且更灵活',
      limitations: '评估模型本身存在偏见问题',
      examples: 'FailSafe使用Qwen2.5-72B-Instruct作为评判者进行细粒度评分'
    },
    { 
      name: '混合评测',
      advantages: '结合多种方法优势',
      limitations: '协调复杂，标准一致性挑战',
      examples: 'Humanity\'s Last Exam先由模型筛选难题，再由专家团队进行人工评审'
    },
    { 
      name: '竞赛式评测',
      advantages: '与人类能力直接对比',
      limitations: '仅适用于特定任务类型',
      examples: 'CODEELO通过自动提交代码至CodeForces平台评测，获取平台反馈'
    }
  ];
  
  // Key papers data
  const keyPapersData = [
    {
      name: 'Humanity\'s Last Exam',
      focus: '极限学术知识挑战',
      innovation: '两阶段筛选机制确保评测问题质量',
      finding: '最佳模型仅达到14%准确率，校准误差超过80%'
    },
    {
      name: 'PROCESSBENCH',
      focus: '数学推理过程错误识别',
      innovation: '流程奖励模型(PRM)评估推理步骤正确性',
      finding: 'o1-mini在数学推理批评能力方面表现最佳'
    },
    {
      name: 'CODEELO',
      focus: '代码生成能力评测',
      innovation: 'Elo评级系统实现与人类编程能力对标',
      finding: 'o1-mini达到1578 Elo分，显著领先其他模型'
    },
    {
      name: 'FailSafe',
      focus: '金融长上下文鲁棒性',
      innovation: '系统构造故障情境测试模型表现',
      finding: '发现鲁棒性与上下文理解能力呈明显负相关'
    },
    {
      name: 'MLGym',
      focus: 'AI研究能力评测',
      innovation: '提供完整研究环境与文件系统交互',
      finding: '模型可改进已知方法但很少产生原创性突破'
    },
    {
      name: 'MotionBench',
      focus: '视频动作理解能力',
      innovation: '细粒度视频动作理解任务',
      finding: '所有模型在细粒度动作理解上准确率不足60%'
    },
    {
      name: 'SuperGPQA',
      focus: '研究生学科知识',
      innovation: '涵盖285个研究生学科的专业知识测试',
      finding: 'o1-mini和QwQ在研究生知识方面表现突出'
    }
  ];
  
  // Model performance data
  const modelPerformanceData = [
    {
      name: 'o1-mini',
      codeElo: 1578,
      mathReasoning: 0.879,
      aiResearch: 1.141,
      academicExam: 12.3
    },
    {
      name: 'GPT-4o',
      codeElo: 1423,
      mathReasoning: 0.811,
      aiResearch: 1.156,
      academicExam: 3.1
    },
    {
      name: 'Claude-3.5-Sonnet',
      codeElo: 1385,
      mathReasoning: 0.792,
      aiResearch: 1.145,
      academicExam: 7.2
    },
    {
      name: 'Gemini Pro',
      codeElo: 1210,
      mathReasoning: 0.756,
      aiResearch: 1.132,
      academicExam: 5.8
    },
    {
      name: 'QwQ-32B-Preview',
      codeElo: 1261,
      mathReasoning: 0.715,
      aiResearch: 0.923,
      academicExam: 6.9
    }
  ];
  
  // Benchmark saturation data
  const benchmarkSaturationData = [
    { name: 'MMLU', '2021': 43, '2022': 70, '2023': 86, '2025': 92 },
    { name: 'GSM8K', '2021': 15, '2022': 55, '2023': 85, '2025': 95 },
    { name: 'HumanEval', '2021': 30, '2022': 52, '2023': 74, '2025': 91 },
    { name: 'HLE', '2021': 0, '2022': 0, '2023': 2, '2025': 14 }
  ];
  
  // Domain-specific evaluation data
  const domainEvaluationData = [
    { 
      domain: '金融领域', 
      papers: 'FailSafe, Fino1',
      findings: '发现模型鲁棒性与上下文理解能力存在明显权衡，OCR错误和跨领域查询对模型影响最大',
      recommendations: '金融应用最佳选择为Palmyra-Fin-128k-Instruct，提供最平衡的表现' 
    },
    { 
      domain: '医学领域', 
      papers: '多项专业评测',
      findings: '模型在医学知识准确性和临床决策支持能力方面有明显提升，但仍需进一步改进',
      recommendations: '医学应用中建议结合专家监督，确保决策安全' 
    },
    { 
      domain: '法律领域', 
      papers: '多项专业评测',
      findings: '法律推理能力、法规理解和案例分析能力是主要评测焦点',
      recommendations: '法律应用中需特别关注模型在特定法律体系下的表现' 
    },
    { 
      domain: '教育领域', 
      papers: 'SuperGPQA等',
      findings: '覆盖285个研究生学科，评估LLM在高等教育中的潜力',
      recommendations: '教育应用中需考虑模型在不同学科领域的差异化表现' 
    }
  ];
  
  // Research findings data
  const researchFindingsData = [
    {
      category: '能力极限',
      findings: [
        '在高难度学术问题上，所有模型表现均较差(Humanity\'s Last Exam)',
        '在细粒度视频动作理解上普遍准确率不足60%(MotionBench)',
        '模型可以改进已知方法但很少产生原创性突破(MLGym)'
      ]
    },
    {
      category: '专业能力差异',
      findings: [
        '特定领域训练的模型表现优于通用模型(PROCESSBENCH)',
        '在代码生成领域，顶级模型已达到人类参赛者水平(CODEELO)',
        '模型在简单实现类问题上表现好于复杂算法问题(CODEELO)'
      ]
    },
    {
      category: '可靠性问题',
      findings: [
        '高自信错误普遍，校准误差超过80%(Humanity\'s Last Exam)',
        '最鲁棒模型在41%案例中仍产生幻觉(FailSafe)',
        '最合规模型在17%情况下未能保持鲁棒表现(FailSafe)'
      ]
    },
    {
      category: '扰动敏感性',
      findings: [
        '对OCR错误和跨领域查询特别敏感(FailSafe)',
        '上下文缺失时更易产生幻觉，特别是文本生成任务(FailSafe)'
      ]
    },
    {
      category: '开源与商业模型',
      findings: [
        '在代码生成领域，QwQ-32B-Preview与商业模型差距明显缩小(CODEELO)',
        '在数学推理批评能力上，开源模型与商业模型差距缩小(PROCESSBENCH)',
        '但在高难度跨领域问题上，仍存在显著差距(Humanity\'s Last Exam)'
      ]
    }
  ];
  
  // Evaluation trends data for radar chart
  const evaluationTrendsData = [
    { subject: '推理能力', '2020': 30, '2023': 70, '2025': 90 },
    { subject: '多模态', '2020': 20, '2023': 60, '2025': 85 },
    { subject: '代码生成', '2020': 15, '2023': 55, '2025': 80 },
    { subject: '安全性', '2020': 10, '2023': 40, '2025': 70 },
    { subject: '精细知识', '2020': 25, '2023': 50, '2025': 75 },
    { subject: '智能体能力', '2020': 5, '2023': 30, '2025': 65 }
  ];
  
  // Chronology events
  const chronologyEvents = [
    { year: '2017', content: 'GLUE基准发布', highlight: true },
    { year: '2018', content: 'SQuAD 2.0发布', highlight: false },
    { year: '2019', content: 'SuperGLUE基准发布', highlight: false },
    { year: '2020', content: 'MMLU基准发布', highlight: true },
    { year: '2021', content: 'HumanEval和GSM8K基准发布', highlight: false },
    { year: '2022', content: 'HELM和BIG-Bench基准发布', highlight: false },
    { year: '2023', content: '评测基准爆发式增长，单年50+基准发布', highlight: true },
    { year: '2024', content: '评测基准高速发展，单年100+基准发布', highlight: false },
    { year: '2025', content: 'Humanity\'s Last Exam发布，极限挑战基准', highlight: true }
  ];

  // Styling constants
  const sectionStyle = "bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 mb-6 md:mb-8";
  const sectionHeaderStyle = "flex items-center justify-between mb-6";
  const sectionTitleStyle = "text-xl md:text-2xl font-bold";
  const sectionIconStyle = "w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white";

  return (
    <div className="w-full max-w-6xl mx-auto p-2 sm:p-4" style={{ background: colors.background }}>
    {/* Header */}
    <div className="bg-white p-4 sm:p-8 rounded-xl shadow-sm border border-gray-100 mb-4 sm:mb-8">
      <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between mb-2 sm:mb-4">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <h1 className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">大语言模型评测基准</h1>
          <h2 className="text-base sm:text-xl font-light text-gray-600">从基础语言理解到极限学术挑战的评测演进</h2>
        </div>
        <div className="flex items-center space-x-4">
          {/* View switcher */}
          <div className="bg-gray-100 rounded-lg p-1 flex text-sm font-medium">
            <button 
              className={`px-3 py-1.5 rounded-md transition-colors ${currentView === 'resume' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}`}
              onClick={() => {
                if (onViewChange) onViewChange('resume');
              }}
            >
              简历
            </button>
            <button 
              className={`px-3 py-1.5 rounded-md transition-colors ${currentView === 'work' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}`}
              onClick={() => {
                if (onViewChange) onViewChange('work');
              }}
            >
              作品
            </button>
          </div>
          
          <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-white" style={{ background: colors.primary }}>
            <BookOpen className="w-6 h-6 sm:w-10 sm:h-10" />
          </div>
        </div>
      </div>
      
      <p className="text-gray-500 italic text-sm sm:text-base mb-4">
        基于7篇重点论文和210篇相关研究的系统分析 (2017-2025)
      </p>
      
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
        <div className="p-3 rounded-lg border border-gray-100 bg-white shadow-sm text-center">
          <div className="text-lg sm:text-2xl font-bold" style={{ color: colors.primary }}>7篇</div>
          <div className="text-xs text-gray-500">重点论文</div>
        </div>
        <div className="p-3 rounded-lg border border-gray-100 bg-white shadow-sm text-center">
          <div className="text-lg sm:text-2xl font-bold" style={{ color: colors.secondary }}>210+</div>
          <div className="text-xs text-gray-500">相关研究</div>
        </div>
        <div className="p-3 rounded-lg border border-gray-100 bg-white shadow-sm text-center">
          <div className="text-lg sm:text-2xl font-bold" style={{ color: "#38B2AC" }}>2017</div>
          <div className="text-xs text-gray-500">起始年份</div>
        </div>
        <div className="p-3 rounded-lg border border-gray-100 bg-white shadow-sm text-center">
          <div className="text-lg sm:text-2xl font-bold" style={{ color: "#ED8936" }}>2025</div>
          <div className="text-xs text-gray-500">最新数据</div>
        </div>
      </div>
    </div>
      {/* Navigation Menu */}
      <div className="bg-white p-2 sm:p-4 rounded-xl shadow-sm border border-gray-100 mb-4 sm:mb-8 sticky top-1 z-50">
        <div className="hidden md:flex justify-between items-center">
          <a href="#chronology" 
             className={`flex items-center px-3 py-2 rounded-lg ${activeSection === 'chronology' ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
             onClick={() => setActiveSection('chronology')}>
            <Calendar className="w-4 h-4 mr-2" /> 历史演进
          </a>
          <a href="#categories" 
             className={`flex items-center px-3 py-2 rounded-lg ${activeSection === 'categories' ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
             onClick={() => setActiveSection('categories')}>
            <Layout className="w-4 h-4 mr-2" /> 评测类别
          </a>
          <a href="#methods" 
             className={`flex items-center px-3 py-2 rounded-lg ${activeSection === 'methods' ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
             onClick={() => setActiveSection('methods')}>
            <FileText className="w-4 h-4 mr-2" /> 评测方法
          </a>
          <a href="#papers" 
             className={`flex items-center px-3 py-2 rounded-lg ${activeSection === 'papers' ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
             onClick={() => setActiveSection('papers')}>
            <BookOpen className="w-4 h-4 mr-2" /> 重点论文
          </a>
          <a href="#performance" 
             className={`flex items-center px-3 py-2 rounded-lg ${activeSection === 'performance' ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
             onClick={() => setActiveSection('performance')}>
            <BarChart2 className="w-4 h-4 mr-2" /> 模型表现
          </a>
          <a href="#findings" 
             className={`flex items-center px-3 py-2 rounded-lg ${activeSection === 'findings' ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
             onClick={() => setActiveSection('findings')}>
            <Award className="w-4 h-4 mr-2" /> 研究发现
          </a>
        </div>
        
        {/* Mobile navigation */}
        <div className="md:hidden grid grid-cols-3 gap-2 text-xs">
          <a href="#chronology" 
             className={`flex flex-col items-center py-2 px-1 rounded-lg ${activeSection === 'chronology' ? 'bg-blue-100' : 'hover:bg-gray-100'} text-center`}
             onClick={() => setActiveSection('chronology')}>
            <Calendar className="w-4 h-4 mb-1" />
            <span>历史演进</span>
          </a>
          <a href="#categories" 
             className={`flex flex-col items-center py-2 px-1 rounded-lg ${activeSection === 'categories' ? 'bg-blue-100' : 'hover:bg-gray-100'} text-center`}
             onClick={() => setActiveSection('categories')}>
            <Layout className="w-4 h-4 mb-1" />
            <span>评测类别</span>
          </a>
          <a href="#methods"
             className={`flex flex-col items-center py-2 px-1 rounded-lg ${activeSection === 'methods' ? 'bg-blue-100' : 'hover:bg-gray-100'} text-center`}
             onClick={() => setActiveSection('methods')}>
            <FileText className="w-4 h-4 mb-1" />
            <span>评测方法</span>
          </a>
          <a href="#papers"
             className={`flex flex-col items-center py-2 px-1 rounded-lg ${activeSection === 'papers' ? 'bg-blue-100' : 'hover:bg-gray-100'} text-center`}
             onClick={() => setActiveSection('papers')}>
            <BookOpen className="w-4 h-4 mb-1" />
            <span>重点论文</span>
          </a>
          <a href="#performance"
             className={`flex flex-col items-center py-2 px-1 rounded-lg ${activeSection === 'performance' ? 'bg-blue-100' : 'hover:bg-gray-100'} text-center`}
             onClick={() => setActiveSection('performance')}>
            <BarChart2 className="w-4 h-4 mb-1" />
            <span>模型表现</span>
          </a>
          <a href="#findings"
             className={`flex flex-col items-center py-2 px-1 rounded-lg ${activeSection === 'findings' ? 'bg-blue-100' : 'hover:bg-gray-100'} text-center`}
             onClick={() => setActiveSection('findings')}>
            <Award className="w-4 h-4 mb-1" />
            <span>研究发现</span>
          </a>
        </div>
      </div>
      
      {/* Section 1: Chronology */}
      <div id="chronology" className={sectionStyle}>
        <div className={sectionHeaderStyle}>
          <h2 className={sectionTitleStyle}>大语言模型评测基准的历史演进</h2>
          <div className={sectionIconStyle} style={{ background: colors.primary }}>
            <Calendar className="w-6 h-6" />
          </div>
        </div>
        
        <p className="mb-8 text-gray-600 text-center text-lg italic">从简单语言理解测试到极限学术挑战的八年演进</p>
        
        <div className="relative p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
          {/* Timeline central line */}
          <div className="absolute left-14 sm:left-24 top-0 bottom-0 w-1" style={{ background: colors.primary }}></div>
          
          {/* Timeline events - SIMPLIFIED */}
          {chronologyEvents.map((event, index) => (
            <div key={index} className="flex mb-14 sm:mb-10 group">
              {/* Left column with year */}
              <div className="relative flex-none w-14 sm:w-24 text-right pr-2 sm:pr-4">
                <div className="inline-block bg-black text-white px-2 py-1 rounded text-xs sm:text-sm font-medium">
                  {event.year}
                </div>
              </div>
              
              {/* Timeline vertical line */}
              <div className="relative flex-none w-0 border-r border-gray-300">
                <div className="absolute top-8 sm:top-8 left-0 w-4 sm:w-12 h-0.5 bg-gradient-to-r from-transparent to-gray-300"></div>
              </div>
              
              {/* Content column */}
              <div className="flex-grow pl-4 sm:pl-12">
                <div className={`p-4 sm:p-6 rounded-xl shadow-sm group-hover:shadow-md transition-all duration-300 bg-white border-l-4`} 
                    style={{ borderLeftColor: event.highlight ? colors.secondary : colors.primary }}>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-black">
                    {event.content}
                  </h3>
                  
                  {/* Custom content for key years */}
                  {event.year === '2017' && (
                    <div className="mt-4 p-4 rounded-lg text-sm border" style={{ background: colors.lightBackground }}>
                      <p className="font-medium">GLUE基准包含9个自然语言理解任务，奠定了大语言模型评测的基础，此后的几年，各种评测基准陆续发布，但数量有限。</p>
                    </div>
                  )}
                  
                  {event.year === '2020' && (
                    <div className="mt-4 p-4 rounded-lg text-sm border" style={{ background: colors.lightBackground }}>
                      <p className="font-medium">MMLU测试模型在57个学科的知识，标志着评测向多领域知识方向扩展，模型能力的提升促使更复杂评测的出现。</p>
                    </div>
                  )}
                  
                  {event.year === '2023' && (
                    <div className="mt-4 p-4 rounded-lg text-sm border" style={{ background: colors.lightBackground }}>
                      <p className="font-medium">随着GPT-4等大模型的出现，评测基准数量呈爆发式增长，更多专业化、细分化评测基准被提出，涵盖多样化能力维度。</p>
                    </div>
                  )}
                  
                  {event.year === '2025' && (
                    <div className="mt-4 p-4 rounded-lg text-sm border" style={{ background: colors.lightBackground }}>
                      <p className="font-medium">Humanity&apos;s Last Exam由近1000名学科专家创建，涵盖13种学科，设定极高门槛，目前最佳模型仅达14%准确率，为模型能力评估提供了新的极限挑战。</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
          
          {/* Timeline bottom */}
          <div className="absolute left-14 sm:left-24 bottom-0 -mb-4">
            <div className="w-6 h-6 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white shadow-md" style={{ background: colors.secondary }}>
              <span className="font-bold text-xs sm:text-base">今</span>
            </div>
          </div>
        </div>
        
        {/* Development stages */}
        <div className="mt-14 p-6 rounded-xl shadow-sm border border-gray-100" style={{ background: colors.lightBackground }}>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold">评测基准的发展阶段</h3>
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-white" style={{ background: colors.primary }}>
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {Object.keys(timelinePeriods).map((period, idx) => {
              const data = timelinePeriods[period as keyof typeof timelinePeriods][0];
              return (
                <div key={idx} className="p-5 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                  <h4 className="font-bold text-lg mb-2">{data.title}</h4>
                  <p className="text-sm text-gray-600 font-medium">{data.year}</p>
                  <div className="h-0.5 w-full my-3" style={{ background: colors.primary }}></div>
                  <p className="text-gray-700">{data.description}</p>
                  <div className="mt-3 text-sm italic" style={{ color: colors.primary }}>{data.icon} {data.highlight}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Section 2: Evaluation Categories */}
      <div id="categories" className={sectionStyle}>
        <div className={sectionHeaderStyle}>
          <h2 className={sectionTitleStyle}>评测类别与领域分布</h2>
          <div className={sectionIconStyle} style={{ background: colors.primary }}>
            <Layout className="w-6 h-6" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">评测基准类别分布</h3>
            <p className="mb-4 text-gray-700">从210篇论文数据分析发现，推理能力和多模态理解是最主要的评测方向，知识评测和数学能力也占据重要位置。</p>
            
            <div className="mt-6 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={benchmarkCategoriesData}
                    layout="vertical"
                    margin={{ top: 10, right: 30, left: 100, bottom: 10 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" domain={[0, 45]} />
                    <YAxis dataKey="name" type="category" width={100} />
                    <Tooltip formatter={(value) => [`${value}个基准`, "数量"]} />
                    <Legend />
                    <Bar dataKey="count" name="基准数量" fill={colors.primary} barSize={20} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">评测领域演变趋势</h3>
            <p className="mb-4 text-gray-700">评测重点从通用能力逐渐转向专业领域细分，趋势更加多元化和专业化。</p>
            
            <div className="mt-6 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart outerRadius={90} width={500} height={320} data={evaluationTrendsData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} />
                    <Radar name="2020年" dataKey="2020" stroke="#8884d8" fill="#8884d8" fillOpacity={0.2} />
                    <Radar name="2023年" dataKey="2023" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.2} />
                    <Radar name="2025年" dataKey="2025" stroke={colors.primary} fill={colors.primary} fillOpacity={0.2} />
                    <Legend />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-6">评测任务类型分类</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border p-5 rounded-xl bg-white shadow-sm hover:shadow-md transition-all">
              <h4 className="text-lg font-bold mb-3 flex items-center">
                <div className="w-2 h-8 mr-3 rounded-sm" style={{ background: colors.primary }}></div>
                通用理解与生成能力
              </h4>
              <p className="text-gray-700">早期评测集如MMLU、BIG-Bench主要关注LLM在多领域的通用理解能力，通过多选题、完形填空等任务形式进行测试，逐渐转向更具挑战性的专项能力评测。</p>
            </div>
            
            <div className="border p-5 rounded-xl bg-white shadow-sm hover:shadow-md transition-all">
              <h4 className="text-lg font-bold mb-3 flex items-center">
                <div className="w-2 h-8 mr-3 rounded-sm" style={{ background: colors.primary }}></div>
                推理能力评测
              </h4>
              <p className="text-gray-700">推理能力评测从数学推理(GSM8K, MATH)到逻辑推理，再到最近的PROCESSBENCH和Humanity&apos;s Last Exam，专注于评估模型的推理过程和深度分析能力。</p>
            </div>
            
            <div className="border p-5 rounded-xl bg-white shadow-sm hover:shadow-md transition-all">
              <h4 className="text-lg font-bold mb-3 flex items-center">
                <div className="w-2 h-8 mr-3 rounded-sm" style={{ background: colors.primary }}></div>
                代码能力评测
              </h4>
              <p className="text-gray-700">代码生成评测已从简单功能测试(HumanEval)发展至竞赛级别的综合评估，如CODEELO创新性地将模型与人类程序员在相同条件下的表现进行对比。</p>
            </div>
            
            <div className="border p-5 rounded-xl bg-white shadow-sm hover:shadow-md transition-all">
              <h4 className="text-lg font-bold mb-3 flex items-center">
                <div className="w-2 h-8 mr-3 rounded-sm" style={{ background: colors.primary }}></div>
                多模态理解能力
              </h4>
              <p className="text-gray-700">多模态评测已从简单图像描述转向复杂的视频理解，如MotionBench专注评估视觉语言模型(VLM)对细粒度视频动作的理解能力。</p>
            </div>
            
            <div className="border p-5 rounded-xl bg-white shadow-sm hover:shadow-md transition-all">
              <h4 className="text-lg font-bold mb-3 flex items-center">
                <div className="w-2 h-8 mr-3 rounded-sm" style={{ background: colors.primary }}></div>
                领域专业知识评测
              </h4>
              <p className="text-gray-700">领域专业知识评测从通用专业知识扩展到更深入的学科细分，如SuperGPQA涵盖285个研究生学科的专业知识测试。</p>
            </div>
            
            <div className="border p-5 rounded-xl bg-white shadow-sm hover:shadow-md transition-all">
              <h4 className="text-lg font-bold mb-3 flex items-center">
                <div className="w-2 h-8 mr-3 rounded-sm" style={{ background: colors.primary }}></div>
                长上下文能力评测
              </h4>
              <p className="text-gray-700">长上下文理解能力评测关注模型处理长文本的效果，如FailSafe Long Context QA for Finance通过金融长文本问答评估LLM的鲁棒性和上下文理解能力。</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Section 3: Evaluation Methods */}
      <div id="methods" className={sectionStyle}>
        <div className={sectionHeaderStyle}>
          <h2 className={sectionTitleStyle}>评测方法学与指标分析</h2>
          <div className={sectionIconStyle} style={{ background: colors.primary }}>
            <FileText className="w-6 h-6" />
          </div>
        </div>
        
        <p className="mb-6 text-gray-700">评测方法从单一的人工评测发展为多元化评估体系，指标也从简单准确率扩展为多维度指标框架</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">评测方法类型分布</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={[
                      { name: '自动化评测', value: 43 },
                      { name: '人类评测', value: 18 },
                      { name: 'LLM-as-Judge', value: 24 },
                      { name: '混合评测', value: 12 },
                      { name: '竞赛式评测', value: 3 }
                    ]}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {[
                      { name: '自动化评测', value: 43 },
                      { name: '人类评测', value: 18 },
                      { name: 'LLM-as-Judge', value: 24 },
                      { name: '混合评测', value: 12 },
                      { name: '竞赛式评测', value: 3 }
                    ].map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={[colors.primary, '#8884d8', '#82ca9d', '#ffc658', '#ff8042'][index % 5]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Legend layout="vertical" verticalAlign="bottom" align="center" />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">评测指标趋势变化</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={[
                    { name: '2018-2020', accuracy: 80, calibration: 5, robustness: 10, fairness: 5 },
                    { name: '2021-2022', accuracy: 60, calibration: 15, robustness: 15, fairness: 10 },
                    { name: '2023-2024', accuracy: 40, calibration: 20, robustness: 25, fairness: 15 },
                    { name: '2025', accuracy: 30, calibration: 25, robustness: 30, fairness: 15 }
                  ]}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="accuracy" stackId="a" name="准确率指标" fill={colors.primary} />
                  <Bar dataKey="calibration" stackId="a" name="校准性指标" fill="#8884d8" />
                  <Bar dataKey="robustness" stackId="a" name="鲁棒性指标" fill="#82ca9d" />
                  <Bar dataKey="fairness" stackId="a" name="公平性指标" fill="#ffc658" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        
        {/* Evaluation methods cards */}
        <h3 className="text-xl font-semibold mb-6">评测方法详解</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {evaluationMethodsData.map((method, idx) => (
            <div key={idx} className="border p-5 rounded-xl bg-white shadow-sm hover:shadow-md transition-all">
              <h4 className="font-bold text-lg mb-3">{method.name}</h4>
              <div className="mb-3">
                <span className="inline-block px-2 py-1 text-xs font-medium rounded mr-2 mb-2" style={{ background: colors.lightBackground, color: colors.primary }}>优势: {method.advantages}</span>
                <span className="inline-block px-2 py-1 text-xs font-medium rounded mb-2" style={{ background: colors.lightBackground, color: colors.textSecondary }}>局限: {method.limitations}</span>
              </div>
              <p className="text-sm text-gray-700">
                <span className="font-medium">代表案例:</span> {method.examples}
              </p>
            </div>
          ))}
        </div>
        
        {/* Evaluation indicators */}
        <div className="mt-10 p-6 rounded-xl border border-gray-100" style={{ background: colors.lightBackground }}>
          <h3 className="text-xl font-bold mb-4">评测指标体系</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-lg border border-gray-100">
              <h4 className="font-medium mb-2">任务完成度指标</h4>
              <p className="text-sm text-gray-700">传统指标如准确率、F1分数等用于衡量任务完成的基本能力，如CODEELO使用通过率和Elo评分、SuperGPQA使用准确率评估学科知识掌握水平。</p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-100">
              <h4 className="font-medium mb-2">鲁棒性指标</h4>
              <p className="text-sm text-gray-700">鲁棒性指标评估模型处理非理想输入的能力，如FailSafe引入Robustness指标测试模型在各种扰动下的一致性表现。</p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-100">
              <h4 className="font-medium mb-2">校准性指标</h4>
              <p className="text-sm text-gray-700">校准性指标评估模型置信度与实际准确率的一致性，如Humanity&apos;s Last Exam评估模型的校准误差，发现多数模型在错误答案上仍显示高置信度。</p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-100">
              <h4 className="font-medium mb-2">综合评测指标</h4>
              <p className="text-sm text-gray-700">创新的综合评测指标框架，如FailSafe提出LLM Compliance指标，平衡模型的鲁棒性和上下文理解能力。</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Section 4: Key Papers */}
      <div id="papers" className={sectionStyle}>
        <div className={sectionHeaderStyle}>
          <h2 className={sectionTitleStyle}>7篇重点论文分析</h2>
          <div className={sectionIconStyle} style={{ background: colors.primary }}>
            <BookOpen className="w-6 h-6" />
          </div>
        </div>
        
        <div className="mb-8">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border-collapse">
              <thead>
                <tr>
                  <th className="py-3 px-4 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">论文名称</th>
                  <th className="py-3 px-4 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">研究重点</th>
                  <th className="py-3 px-4 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">创新点</th>
                  <th className="py-3 px-4 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">主要发现</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {keyPapersData.map((paper, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm font-medium">{paper.name}</td>
                    <td className="py-3 px-4 text-sm text-gray-700">{paper.focus}</td>
                    <td className="py-3 px-4 text-sm text-gray-700">{paper.innovation}</td>
                    <td className="py-3 px-4 text-sm text-gray-700">{paper.finding}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Paper spotlight: FailSafe */}
        <div className="mt-10 p-6 rounded-xl border border-gray-100" style={{ background: colors.lightBackground }}>
          <h3 className="text-xl font-bold mb-4">论文聚焦: FailSafe金融长上下文问答</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">研究亮点</h4>
              <p className="text-gray-700 mb-4">FailSafe评测专注于金融领域长上下文问答的鲁棒性研究，通过系统构造故障情境来评估模型表现。</p>
              
              <h4 className="font-semibold mb-3">关键发现</h4>
              <div className="space-y-2">
                <div className="flex items-start">
                  <div className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-xs text-white mt-0.5 mr-2" style={{ background: colors.primary }}>1</div>
                  <p className="text-sm text-gray-700">模型的鲁棒性与上下文理解能力呈现明显的负相关</p>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-xs text-white mt-0.5 mr-2" style={{ background: colors.primary }}>2</div>
                  <p className="text-sm text-gray-700">最鲁棒的模型在41%的测试案例中产生幻觉</p>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-xs text-white mt-0.5 mr-2" style={{ background: colors.primary }}>3</div>
                  <p className="text-sm text-gray-700">最合规的模型在17%的情况下未能保持鲁棒表现</p>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-xs text-white mt-0.5 mr-2" style={{ background: colors.primary }}>4</div>
                  <p className="text-sm text-gray-700">文本生成任务的幻觉率(52%)显著高于问答任务(35%)</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">扰动类型影响（从高到低）</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-28 text-sm">OCR错误</div>
                  <div className="flex-grow h-5 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: '51%', background: colors.primary }}></div>
                  </div>
                  <div className="w-12 text-right text-sm">-51%</div>
                </div>
                <div className="flex items-center">
                  <div className="w-28 text-sm">跨领域查询</div>
                  <div className="flex-grow h-5 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: '47%', background: colors.primary }}></div>
                  </div>
                  <div className="w-12 text-right text-sm">-47%</div>
                </div>
                <div className="flex items-center">
                  <div className="w-28 text-sm">无关上下文</div>
                  <div className="flex-grow h-5 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: '44%', background: colors.primary }}></div>
                  </div>
                  <div className="w-12 text-right text-sm">-44%</div>
                </div>
                <div className="flex items-center">
                  <div className="w-28 text-sm">缺失上下文</div>
                  <div className="flex-grow h-5 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: '40%', background: colors.primary }}></div>
                  </div>
                  <div className="w-12 text-right text-sm">-40%</div>
                </div>
                <div className="flex items-center">
                  <div className="w-28 text-sm">不完整查询</div>
                  <div className="flex-grow h-5 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: '27%', background: colors.primary }}></div>
                  </div>
                  <div className="w-12 text-right text-sm">-27%</div>
                </div>
                <div className="flex items-center">
                  <div className="w-28 text-sm">拼写错误</div>
                  <div className="flex-grow h-5 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: '21%', background: colors.primary }}></div>
                  </div>
                  <div className="w-12 text-right text-sm">-21%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Paper spotlight: Humanity's Last Exam */}
        <div className="mt-6 p-6 rounded-xl border border-gray-100" style={{ background: colors.lightBackground }}>
          <h3 className="text-xl font-bold mb-4">论文聚焦: Humanity&apos;s Last Exam</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">研究概述</h4>
              <p className="text-gray-700 mb-4">HLE是一个极具挑战性的学术基准测试，涵盖13个学科领域，由近1000名专家创建，经过严格的多阶段筛选流程。</p>
              
              <h4 className="font-semibold mb-3">筛选过程</h4>
              <div className="relative py-8">
                <div className="absolute left-3 top-0 bottom-0 w-1 bg-gray-200"></div>
                
                <div className="relative flex items-start mb-6">
                  <div className="absolute left-0 w-7 h-7 rounded-full flex items-center justify-center text-white" style={{ background: colors.primary }}>1</div>
                  <div className="ml-12">
                    <h5 className="font-medium">初始问题集</h5>
                    <p className="text-sm text-gray-600">70,000个原始问题由学科专家提出</p>
                  </div>
                </div>
                
                <div className="relative flex items-start mb-6">
                  <div className="absolute left-0 w-7 h-7 rounded-full flex items-center justify-center text-white" style={{ background: colors.primary }}>2</div>
                  <div className="ml-12">
                    <h5 className="font-medium">LLM难度测试</h5>
                    <p className="text-sm text-gray-600">筛选至13,000个具挑战性问题</p>
                  </div>
                </div>
                
                <div className="relative flex items-start mb-6">
                  <div className="absolute left-0 w-7 h-7 rounded-full flex items-center justify-center text-white" style={{ background: colors.primary }}>3</div>
                  <div className="ml-12">
                    <h5 className="font-medium">专家评审</h5>
                    <p className="text-sm text-gray-600">进一步筛选至6,000个候选问题</p>
                  </div>
                </div>
                
                <div className="relative flex items-start">
                  <div className="absolute left-0 w-7 h-7 rounded-full flex items-center justify-center text-white" style={{ background: colors.primary }}>4</div>
                  <div className="ml-12">
                    <h5 className="font-medium">最终筛选</h5>
                    <p className="text-sm text-gray-600">最终仅2,700个问题(3.9%)纳入数据集</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">模型表现分析</h4>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={[
                      { name: 'O3-mini', score: 14.0 },
                      { name: 'O1', score: 10.5 },
                      { name: 'Claude-3.5', score: 7.2 },
                      { name: 'GEMINI-2.0', score: 5.8 },
                      { name: 'GPT-4o', score: 3.1 }
                    ]}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[0, 15]} />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Legend />
                    <Bar dataKey="score" name="准确率" fill={colors.primary} barSize={30} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="mt-6">
                <h4 className="font-semibold mb-2">关键发现</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• 所有模型准确率均低于15%，远低于其他基准测试</li>
                  <li>• 所有模型校准误差均超过80%，表明自身不确定性认知不足</li>
                  <li>• 数学领域O3-mini表现最佳(18.8%)，其他学科表现均较差</li>
                  <li>• 推理模型需生成大量标记(token)来处理问题，成本高昂</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Section 5: Model Performance */}
      <div id="performance" className={sectionStyle}>
        <div className={sectionHeaderStyle}>
          <h2 className={sectionTitleStyle}>模型表现分析</h2>
          <div className={sectionIconStyle} style={{ background: colors.primary }}>
            <BarChart2 className="w-6 h-6" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">顶尖模型能力对比</h3>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={modelPerformanceData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="codeElo" name="代码生成 (Elo)" fill="#8884d8" />
                    <Bar dataKey="mathReasoning" name="数学推理批评" fill="#82ca9d" />
                    <Bar dataKey="aiResearch" name="AI研究能力" fill={colors.primary} />
                    <Bar dataKey="academicExam" name="学术挑战 (%)" fill="#ffc658" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-semibold mb-2">关键能力差异</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <div className="w-4 h-4 rounded-full flex-shrink-0 mt-1 mr-2" style={{ background: colors.primary }}></div>
                  <div><span className="font-medium">推理模型优势:</span> o1和o3-mini在Humanity&apos;s Last Exam和推理任务上表现突出</div>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 rounded-full flex-shrink-0 mt-1 mr-2" style={{ background: colors.primary }}></div>
                  <div><span className="font-medium">模型专长差异:</span> 同一模型在不同任务上表现差异巨大</div>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 rounded-full flex-shrink-0 mt-1 mr-2" style={{ background: colors.primary }}></div>
                  <div><span className="font-medium">开源模型进展:</span> 如QwQ-32B-Preview在特定任务上已接近闭源模型表现</div>
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">评测基准饱和分析</h3>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={benchmarkSaturationData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Legend />
                    <Line type="monotone" dataKey="2021" name="2021年" stroke="#8884d8" />
                    <Line type="monotone" dataKey="2022" name="2022年" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="2023" name="2023年" stroke="#ffc658" />
                    <Line type="monotone" dataKey="2025" name="2025年" stroke={colors.primary} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-semibold mb-2">基准饱和问题</h4>
              <p className="text-sm text-gray-700 mb-4">数据分析显示主流评测基准已接近饱和，难以区分顶尖模型能力：</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• MMLU：从2021年的43%到2025年的92%</li>
                <li>• GSM8K：从2021年的15%到2025年的95%</li>
                <li>• HumanEval：从2021年的30%到2025年的91%</li>
                <li>• 相比之下，HLE在2025年的最佳模型表现仅为14%，为模型进步提供了清晰的衡量空间</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Domain-specific evaluations */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-6">领域特定评测分析</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {domainEvaluationData.map((domain, idx) => (
              <div key={idx} className="border p-5 rounded-xl bg-white shadow-sm hover:shadow-md transition-all">
                <h4 className="text-lg font-bold mb-3 flex items-center">
                  <div className="w-2 h-8 mr-3 rounded-sm" style={{ background: colors.primary }}></div>
                  {domain.domain}
                </h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium">代表论文:</span> {domain.papers}
                  </div>
                  <div>
                    <span className="font-medium">主要发现:</span> {domain.findings}
                  </div>
                  <div>
                    <span className="font-medium">应用建议:</span> {domain.recommendations}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Model error analysis */}
        <div className="mt-10 p-6 rounded-xl border border-gray-100" style={{ background: colors.lightBackground }}>
          <h3 className="text-xl font-bold mb-4">模型错误分析</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-lg border border-gray-100">
              <h4 className="font-medium mb-2">典型错误模式</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <div className="w-4 h-4 rounded-full flex-shrink-0 mt-1 mr-2" style={{ background: colors.primary }}></div>
                  <div><span className="font-medium">过度推理:</span> DeepSeek-R1等推理增强模型倾向于提供过多细节而非直接回答</div>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 rounded-full flex-shrink-0 mt-1 mr-2" style={{ background: colors.primary }}></div>
                  <div><span className="font-medium">专业领域敏感性不足:</span> 推理模型对金融等专业概念理解不充分</div>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 rounded-full flex-shrink-0 mt-1 mr-2" style={{ background: colors.primary }}></div>
                  <div><span className="font-medium">校准问题:</span> 模型对自身预测错误的问题仍给出高置信度</div>
                </li>
              </ul>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-100">
              <h4 className="font-medium mb-2">特定情境表现</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <div className="w-4 h-4 rounded-full flex-shrink-0 mt-1 mr-2" style={{ background: colors.primary }}></div>
                  <div><span className="font-medium">OCR错误:</span> 对模型性能影响最大(-51%)</div>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 rounded-full flex-shrink-0 mt-1 mr-2" style={{ background: colors.primary }}></div>
                  <div><span className="font-medium">文本生成vs问答:</span> 生成任务幻觉率(52%)显著高于问答任务(35%)</div>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 rounded-full flex-shrink-0 mt-1 mr-2" style={{ background: colors.primary }}></div>
                  <div><span className="font-medium">上下文长度:</span> 随上下文增长，所有模型性能呈线性下降</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Section 6: Research Findings */}
      <div id="findings" className={sectionStyle}>
        <div className={sectionHeaderStyle}>
          <h2 className={sectionTitleStyle}>主要研究发现与未来方向</h2>
          <div className={sectionIconStyle} style={{ background: colors.primary }}>
            <Award className="w-6 h-6" />
          </div>
        </div>
        
        <div className="mb-10">
          {researchFindingsData.map((category, idx) => (
            <div key={idx} className="mb-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <div className="w-3 h-3 mr-2 rounded-full" style={{ background: colors.primary }}></div>
                {category.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {category.findings.map((finding, fidx) => (
                  <div key={fidx} className="border p-4 rounded-lg bg-white">
                    <p className="text-gray-700">{finding}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Future directions */}
        <div className="mt-10 p-6 rounded-xl border border-gray-100" style={{ background: colors.lightBackground }}>
          <h3 className="text-xl font-bold mb-4">未来研究与评测方向</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-lg border border-gray-100 flex flex-col">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white mb-3" style={{ background: colors.primary }}>1</div>
              <h4 className="font-medium mb-2">平衡鲁棒性与上下文理解</h4>
              <p className="text-sm text-gray-700 flex-grow">开发能同时兼顾鲁棒性和上下文理解的新架构或训练方法，破解当前权衡关系</p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-100 flex flex-col">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white mb-3" style={{ background: colors.primary }}>2</div>
              <h4 className="font-medium mb-2">改进校准能力</h4>
              <p className="text-sm text-gray-700 flex-grow">提高模型对自身预测准确性的认知，减少高自信错误，提升不确定性表达</p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-100 flex flex-col">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white mb-3" style={{ background: colors.primary }}>3</div>
              <h4 className="font-medium mb-2">跨域泛化能力</h4>
              <p className="text-sm text-gray-700 flex-grow">增强模型在未见过领域的推理能力，提高对跨领域概念的理解与应用</p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-100 flex flex-col">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white mb-3" style={{ background: colors.primary }}>4</div>
              <h4 className="font-medium mb-2">更有效的评测方法</h4>
              <p className="text-sm text-gray-700 flex-grow">开发成本更低、更可扩展的评测方法，平衡自动化与专业评估的优势</p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-100 flex flex-col">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white mb-3" style={{ background: colors.primary }}>5</div>
              <h4 className="font-medium mb-2">极限能力探索</h4>
              <p className="text-sm text-gray-700 flex-grow">继续探索模型在高难度学术问题上的极限，推动模型向人类专家水平迈进</p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-100 flex flex-col">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white mb-3" style={{ background: colors.primary }}>6</div>
              <h4 className="font-medium mb-2">多模态评测创新</h4>
              <p className="text-sm text-gray-700 flex-grow">开发更具挑战性的多模态评测，考验模型跨模态理解和推理能力</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="text-center text-gray-500 text-sm mt-8 pt-6 border-t border-gray-200">
        <p>数据来源：基于7篇重点论文和210篇相关研究的系统评估 (2017-2025)</p>
        <p className="mt-2">大语言模型评测基准研究综述 © 2025</p>
      </div>
    </div>
  );
};

export default LLMEvaluationDashboard;