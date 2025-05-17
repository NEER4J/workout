import React, { useState, useEffect } from 'react';
import { Workout } from '../types';
import WorkoutSection from './WorkoutSection';
import ProgressBar from './ProgressBar';
import ResetButtons from './ResetButtons';
import { getCurrentDayWorkoutData } from '../utils/storage';

interface WorkoutPageProps {
  workout: Workout;
}

const WorkoutPage: React.FC<WorkoutPageProps> = ({ workout }) => {
  const [completedExercises, setCompletedExercises] = useState(0);
  const [totalExercises, setTotalExercises] = useState(0);
  
  // Calculate total number of exercises and completed exercises
  const calculateProgress = () => {
    // Count total exercises
    let total = 0;
    workout.sections.forEach(section => {
      total += section.exercises.length;
    });
    setTotalExercises(total);
    
    // Count completed exercises
    const currentData = getCurrentDayWorkoutData();
    if (!currentData) {
      setCompletedExercises(0);
      return;
    }
    
    let completed = 0;
    workout.sections.forEach(section => {
      section.exercises.forEach(exercise => {
        if (currentData[exercise.name]?.completed) {
          completed++;
        }
      });
    });
    setCompletedExercises(completed);
  };
  
  useEffect(() => {
    calculateProgress();
    
    // Add event listener for storage changes
    const handleStorageChange = () => {
      calculateProgress();
    };
    
    window.addEventListener('storage', handleStorageChange);
    document.addEventListener('exercise-updated', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      document.removeEventListener('exercise-updated', handleStorageChange);
    };
  }, [workout]);
  
  return (
    <div className="px-3 py-3">
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-xl font-bold">
          {workout.title} Workout
        </h1>
        <div className="text-xs text-neutral-500 dark:text-neutral-400">
          {completedExercises}/{totalExercises} exercises ({Math.round((completedExercises / totalExercises) * 100) || 0}%)
        </div>
      </div>
      
      <ProgressBar completed={completedExercises} total={totalExercises} />
      
      {workout.sections.map((section) => (
        <WorkoutSection key={section.title} section={section} />
      ))}
      
      <ResetButtons onReset={calculateProgress} />
    </div>
  );
};

export default WorkoutPage; 