export type Exercise = {
  name: string;
  instructions: string;
  isHold?: boolean;
};

export type WorkoutSection = {
  title: string;
  exercises: Exercise[];
};

export type Workout = {
  title: string;
  dayCode: string;
  sections: WorkoutSection[];
};

export type WorkoutProgress = {
  [exerciseName: string]: {
    completed: boolean;
    sets: number;
    reps: number[];
    duration?: number;
  };
};

export type DailyProgress = {
  [day: string]: WorkoutProgress;
}; 