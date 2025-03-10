"use client";
import { useState } from 'react';
import LLMEvaluationDashboard from '@/components/LLMEvaluationDashboard';
import ResumeVisual from '@/components/IFanrTimeline';

export default function Home() {
  const [currentView, setCurrentView] = useState('resume');
  
  return (
    <div>
      {currentView === 'resume' ? (
        <ResumeVisual onViewChange={setCurrentView} />
      ) : (
        <LLMEvaluationDashboard 
        onViewChange={setCurrentView} 
        currentView={currentView} // 添加这一行
      />
      )}
    </div>
  );
}