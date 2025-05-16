import React, { useState, useEffect } from "react";
import { Exercise } from "../types";
import { updateExerciseProgress, getCurrentDayWorkoutData } from "../utils/storage";

interface ExerciseCardProps {
  exercise: Exercise;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState<number[]>([]);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    // Load saved data from localStorage
    const currentData = getCurrentDayWorkoutData();
    if (currentData && currentData[exercise.name]) {
      const exerciseData = currentData[exercise.name];
      setIsCompleted(exerciseData.completed || false);
      setSets(exerciseData.sets || 0);
      setReps(exerciseData.reps || []);
      setDuration(exerciseData.duration || 0);
    }
  }, [exercise.name]);

  // Helper to notify parent components about updates
  const notifyUpdate = () => {
    // Create and dispatch a custom event
    const event = new CustomEvent('exercise-updated', {
      bubbles: true,
      detail: { exerciseName: exercise.name }
    });
    document.dispatchEvent(event);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.checked;
    setIsCompleted(newValue);
    updateExerciseProgress(exercise.name, { completed: newValue });
    notifyUpdate();
  };

  const handleSetsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSets = parseInt(e.target.value) || 0;
    setSets(newSets);
    
    // Adjust reps array length to match sets
    const newReps = [...reps];
    while (newReps.length < newSets) {
      newReps.push(0);
    }
    while (newReps.length > newSets) {
      newReps.pop();
    }
    
    setReps(newReps);
    updateExerciseProgress(exercise.name, { sets: newSets, reps: newReps });
    notifyUpdate();
  };

  const handleRepChange = (index: number, value: number) => {
    const newReps = [...reps];
    newReps[index] = value;
    setReps(newReps);
    updateExerciseProgress(exercise.name, { reps: newReps });
    notifyUpdate();
  };

  const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDuration = parseInt(e.target.value) || 0;
    setDuration(newDuration);
    updateExerciseProgress(exercise.name, { duration: newDuration });
    notifyUpdate();
  };

  // Get a color gradient based on exercise name for the icon
  const getIconBackground = (name: string) => {
    // Generate a consistent hash from the exercise name
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    // Use the hash to generate a hue (0-360)
    const hue = hash % 360;
    return `hsla(${hue}, 70%, 50%, 0.2)`;
  };

  // Generate icon text from exercise name (first letters of each word)
  const getIconText = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <div 
      className={`rounded-xl overflow-hidden mb-4 transition-all duration-200 transform ${
        isCompleted ? 'bg-white/90 dark:bg-neutral-900/90' : 'bg-white dark:bg-neutral-950'
      } ${isExpanded ? 'shadow-md' : 'shadow-sm'}`}
    >
      <div 
        className={`p-4 border border-neutral-200 dark:border-neutral-800 rounded-xl`}
      >
        <div className="flex items-start space-x-3">
          <div 
            className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold"
            style={{ 
              backgroundColor: getIconBackground(exercise.name),
              color: isCompleted ? '#9CA3AF' : 'inherit'
            }}
          >
            {getIconText(exercise.name)}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <div>
                <h3 className={`font-medium text-lg truncate ${isCompleted ? 'line-through text-neutral-500 dark:text-neutral-400' : ''}`}>
                  {exercise.name}
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-0.5 line-clamp-2">
                  {exercise.instructions.split('.')[0]}.
                </p>
              </div>
              
              <div className="flex items-center ml-4">
                <input 
                  type="checkbox" 
                  checked={isCompleted}
                  onChange={handleCheckboxChange}
                  className="h-5 w-5 text-emerald-600 rounded border-neutral-300 dark:border-neutral-700 focus:ring-emerald-500"
                />
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="ml-3 text-neutral-500 hover:text-neutral-900 dark:hover:text-white p-1 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  aria-label={isExpanded ? "Collapse details" : "Expand details"}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-5 w-5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* For small screen, show a set counter underneath without expanding */}
            {!isExpanded && (sets > 0 || duration > 0) && (
              <div className="mt-2 flex flex-wrap gap-2">
                {sets > 0 && (
                  <div className="text-xs inline-flex items-center px-2 py-1 rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                    </svg>
                    {sets} sets
                  </div>
                )}
                {duration > 0 && (
                  <div className="text-xs inline-flex items-center px-2 py-1 rounded-full bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    {duration} sec
                  </div>
                )}
                {reps.length > 0 && (
                  <div className="text-xs inline-flex items-center px-2 py-1 rounded-full bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 3a1 1 0 00-1 1v5H6a1 1 0 100 2h3v5a1 1 0 102 0v-5h3a1 1 0 100-2h-3V4a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {reps.reduce((sum, val) => sum + val, 0)} reps
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="p-4 border-t border-neutral-200 dark:border-neutral-800 animated-height">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <h4 className="font-medium mb-2 text-sm uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Instructions</h4>
              <div className="bg-neutral-50 dark:bg-neutral-900 p-4 rounded-lg mb-6">
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  {exercise.instructions}
                </p>
              </div>
              
              <h4 className="font-medium mb-2 text-sm uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Progress Tracking</h4>
              <div className="bg-neutral-50 dark:bg-neutral-900 p-4 rounded-lg">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Number of sets:
                  </label>
                  <div className="flex">
                    <button 
                      onClick={() => handleSetsChange({ target: { value: Math.max(0, sets - 1).toString() } } as React.ChangeEvent<HTMLInputElement>)}
                      className="bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 w-10 h-10 flex items-center justify-center rounded-l-md"
                      disabled={sets <= 0}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <input 
                      type="number" 
                      min="0" 
                      max="10"
                      value={sets} 
                      onChange={handleSetsChange}
                      className="w-16 text-center px-0 border-y border-neutral-300 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-neutral-800 dark:text-white"
                    />
                    <button 
                      onClick={() => handleSetsChange({ target: { value: (sets + 1).toString() } } as React.ChangeEvent<HTMLInputElement>)}
                      className="bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 w-10 h-10 flex items-center justify-center rounded-r-md"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>

                {!exercise.isHold && (
                  <div>
                    {sets > 0 && (
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                          Reps per set:
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          {Array.from({ length: sets }).map((_, index) => (
                            <div key={index} className="flex items-center">
                              <div className="mr-2 text-sm text-neutral-500 dark:text-neutral-400 w-14">Set {index + 1}:</div>
                              <div className="flex flex-1">
                                <button 
                                  onClick={() => handleRepChange(index, Math.max(0, (reps[index] || 0) - 1))}
                                  className="bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 w-8 h-8 flex items-center justify-center rounded-l-md"
                                  disabled={(reps[index] || 0) <= 0}
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                  </svg>
                                </button>
                                <input
                                  type="number"
                                  min="0"
                                  value={reps[index] || 0}
                                  onChange={(e) => handleRepChange(index, parseInt(e.target.value) || 0)}
                                  className="w-12 text-center px-0 border-y border-neutral-300 dark:border-neutral-700 focus:outline-none focus:ring-1 focus:ring-emerald-500 dark:bg-neutral-800 dark:text-white"
                                />
                                <button 
                                  onClick={() => handleRepChange(index, (reps[index] || 0) + 1)}
                                  className="bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 w-8 h-8 flex items-center justify-center rounded-r-md"
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {exercise.isHold && (
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                      Duration (seconds):
                    </label>
                    <div className="flex">
                      <button 
                        onClick={() => handleDurationChange({ target: { value: Math.max(0, duration - 5).toString() } } as React.ChangeEvent<HTMLInputElement>)}
                        className="bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 w-10 h-10 flex items-center justify-center rounded-l-md"
                        disabled={duration <= 0}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                      </button>
                      <input 
                        type="number" 
                        min="0" 
                        value={duration} 
                        onChange={handleDurationChange}
                        className="w-20 text-center px-0 border-y border-neutral-300 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-neutral-800 dark:text-white"
                      />
                      <button 
                        onClick={() => handleDurationChange({ target: { value: (duration + 5).toString() } } as React.ChangeEvent<HTMLInputElement>)}
                        className="bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 w-10 h-10 flex items-center justify-center rounded-r-md"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExerciseCard; 