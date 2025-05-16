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
    <div className="px-4 sm:px-6 py-6">
      <h1 className="text-2xl font-bold mb-4 text-center sm:text-left">
        {workout.title} Workout
      </h1>
      
      <ProgressBar completed={completedExercises} total={totalExercises} />
      
      {workout.sections.map((section) => (
        <WorkoutSection key={section.title} section={section} />
      ))}
      
      <ResetButtons onReset={calculateProgress} />
    </div>
  );
};

export default WorkoutPage; 