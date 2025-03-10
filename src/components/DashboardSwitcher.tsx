"use client";

import React, { useState } from 'react';
import IFanrTimeline from './IFanrTimeline';
import LLMEvaluationDashboard from './LLMEvaluationDashboard';

export default function DashboardSwitcher() {
  const [currentView, setCurrentView] = useState('resume'); // 'resume' or 'work'
  
  return (
    <div className="w-full mx-auto">
      {currentView === 'resume' ? (
        <IFanrTimeline onViewChange={(view) => setCurrentView(view)} />
      ) : (
        <LLMEvaluationDashboard 
        onViewChange={setCurrentView} 
        currentView={currentView} // 添加这一行
      />
      )}
    </div>
  );
}