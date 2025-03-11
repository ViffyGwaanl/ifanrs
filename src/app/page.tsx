"use client";
import { useState } from 'react';
import LLMEvaluationDashboard from '@/components/LLMEvaluationDashboard';
import ResumeVisual from '@/components/IFanrTimeline';

export default function Home() {
  const [currentView, setCurrentView] = useState('resume');
  
  const handleViewChange = (view: string) => {
    setCurrentView(view);
  };
  
  return (
    <div>
      {currentView === 'resume' ? (
        <ResumeVisual onViewChange={handleViewChange} />
      ) : (
        <LLMEvaluationDashboard 
          onViewChange={handleViewChange} 
          currentView={currentView}
        />
      )}
    </div>
  );
}