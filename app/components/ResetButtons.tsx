import React, { useState } from 'react';
import { resetTodayProgress, resetAllProgress } from '../utils/storage';

interface ResetButtonsProps {
  onReset: () => void;
}

const ResetButtons: React.FC<ResetButtonsProps> = ({ onReset }) => {
  const [showConfirm, setShowConfirm] = useState<string | null>(null);

  const handleResetToday = () => {
    resetTodayProgress();
    setShowConfirm(null);
    onReset();
  };

  const handleResetAll = () => {
    resetAllProgress();
    setShowConfirm(null);
    onReset();
  };

  return (
    <div className="mt-8 border-t border-neutral-200 dark:border-neutral-800 pt-6">
      <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
        {showConfirm === 'today' ? (
          <div className="flex space-x-2">
            <button
              onClick={handleResetToday}
              className="px-4 py-2 bg-red-600 text-white rounded-md text-sm"
            >
              Confirm Reset
            </button>
            <button
              onClick={() => setShowConfirm(null)}
              className="px-4 py-2 bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-white rounded-md text-sm"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={() => setShowConfirm('today')}
            className="px-4 py-2 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-200 rounded-md text-sm transition-colors"
          >
            Reset Today's Progress
          </button>
        )}

        {showConfirm === 'all' ? (
          <div className="flex space-x-2">
            <button
              onClick={handleResetAll}
              className="px-4 py-2 bg-red-600 text-white rounded-md text-sm"
            >
              Confirm Reset All
            </button>
            <button
              onClick={() => setShowConfirm(null)}
              className="px-4 py-2 bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-white rounded-md text-sm"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={() => setShowConfirm('all')}
            className="px-4 py-2 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-200 rounded-md text-sm transition-colors"
          >
            Reset All Progress
          </button>
        )}
      </div>
    </div>
  );
};

export default ResetButtons; 