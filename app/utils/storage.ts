import { DailyProgress, WorkoutProgress } from "../types";

const STORAGE_KEY = "workout_tracker_data";

// Helper to get current date string
export const getCurrentDateString = (): string => {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
};

// Get current day of week as string (mon, tue, etc.)
export const getCurrentDayCode = (): string => {
  const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  const now = new Date();
  return days[now.getDay()];
};

// Get workout day code based on current day
export const getWorkoutDayCode = (): string => {
  const day = getCurrentDayCode();
  if (day === 'mon' || day === 'thu') return 'mon-thu';
  if (day === 'tue' || day === 'fri') return 'tue-fri';
  if (day === 'wed' || day === 'sat') return 'wed-sat';
  return 'sun';
};

// Initialize empty progress data for a day
export const initializeEmptyProgress = (exerciseNames: string[]): WorkoutProgress => {
  const progress: WorkoutProgress = {};
  
  exerciseNames.forEach(name => {
    progress[name] = {
      completed: false,
      sets: 0,
      reps: [],
      duration: 0
    };
  });
  
  return progress;
};

// Get all workout progress data
export const getWorkoutData = (): DailyProgress => {
  if (typeof window === 'undefined') return {};
  
  const storedData = localStorage.getItem(STORAGE_KEY);
  if (!storedData) return {};
  
  try {
    return JSON.parse(storedData) as DailyProgress;
  } catch (e) {
    console.error('Error parsing workout data:', e);
    return {};
  }
};

// Get workout progress for a specific day
export const getDayWorkoutData = (dateString: string): WorkoutProgress | null => {
  const allData = getWorkoutData();
  return allData[dateString] || null;
};

// Get workout progress for the current day
export const getCurrentDayWorkoutData = (): WorkoutProgress | null => {
  return getDayWorkoutData(getCurrentDateString());
};

// Save workout progress data
export const saveWorkoutData = (data: DailyProgress): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

// Update progress for a specific exercise
export const updateExerciseProgress = (
  exerciseName: string, 
  progress: { 
    completed?: boolean; 
    sets?: number; 
    reps?: number[];
    duration?: number;
  }
): void => {
  const currentDate = getCurrentDateString();
  const allData = getWorkoutData();
  
  // Initialize if needed
  if (!allData[currentDate]) {
    allData[currentDate] = {};
  }
  
  // Initialize exercise if needed
  if (!allData[currentDate][exerciseName]) {
    allData[currentDate][exerciseName] = {
      completed: false,
      sets: 0,
      reps: [],
      duration: 0
    };
  }
  
  // Update with new data
  allData[currentDate][exerciseName] = {
    ...allData[currentDate][exerciseName],
    ...progress
  };
  
  saveWorkoutData(allData);
};

// Reset progress for current day
export const resetTodayProgress = (): void => {
  const currentDate = getCurrentDateString();
  const allData = getWorkoutData();
  
  delete allData[currentDate];
  saveWorkoutData(allData);
};

// Reset all progress data
export const resetAllProgress = (): void => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
}; 