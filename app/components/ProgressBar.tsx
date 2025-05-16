import React from 'react';

interface ProgressBarProps {
  completed: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ completed, total }) => {
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <div className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
          Today's progress
        </div>
        <div className="text-sm font-medium text-emerald-600 dark:text-emerald-500">
          {completed}/{total} exercises ({percentage}%)
        </div>
      </div>
      <div className="h-2 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
        <div 
          className="h-full bg-emerald-500 dark:bg-emerald-600 transition-all duration-300 ease-in-out"
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
};

export default ProgressBar; 