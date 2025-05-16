import React, { useState } from 'react';
import { WorkoutSection as WorkoutSectionType } from '../types';
import ExerciseCard from './ExerciseCard';

interface WorkoutSectionProps {
  section: WorkoutSectionType;
}

const WorkoutSection: React.FC<WorkoutSectionProps> = ({ section }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-100">
          {section.title}
        </h2>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"
          aria-label={isCollapsed ? "Expand section" : "Collapse section"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 transition-transform ${isCollapsed ? 'rotate-180' : ''}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {!isCollapsed && (
        <div className="space-y-4">
          {section.exercises.map((exercise) => (
            <ExerciseCard key={exercise.name} exercise={exercise} />
          ))}
        </div>
      )}
    </div>
  );
};

export default WorkoutSection; 