import React from 'react';

interface ProgressBarProps {
  completed: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ completed, total }) => {
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  
  return (
    <div className="mb-3">
      <div className="relative h-1.5 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
        <div 
          className="absolute left-0 top-0 h-full bg-emerald-500 dark:bg-emerald-600 transition-all duration-300 ease-in-out" 
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar; 