"use client";

import { useState, useEffect } from "react";
import Header from "../components/Header";
import { getWorkoutData } from "../utils/storage";
import { workouts } from "../data/workouts";
import Link from "next/link";
import ExportImportData from "../components/ExportImportData";
import { DailyProgress, WorkoutProgress } from "../types";

export default function ReportsPage() {
  const [historyData, setHistoryData] = useState<DailyProgress>({});
  const [isClient, setIsClient] = useState(false);
  const [stats, setStats] = useState({
    totalWorkouts: 0,
    completedWorkouts: 0,
    completionRate: 0,
    averageExercisesPerWorkout: 0,
    totalExercises: 0,
    mostPopularDay: "",
    streakDays: 0
  });

  // Days of the week mapping
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Get the day code (mon-thu, tue-fri, etc.) for a given date
  const getDayCodeForDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDay();
    const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    const dayCode = days[day];
    
    if (dayCode === 'mon' || dayCode === 'thu') return 'mon-thu';
    if (dayCode === 'tue' || dayCode === 'fri') return 'tue-fri';
    if (dayCode === 'wed' || dayCode === 'sat') return 'wed-sat';
    return 'sun';
  };

  // Get workout title for a given day code
  const getWorkoutTitle = (dayCode: string) => {
    const workout = workouts.find(w => w.dayCode === dayCode);
    return workout ? workout.title : 'Unknown';
  };

  // Calculate completion percentage for a date
  const getCompletionPercentage = (dateString: string): number => {
    if (!historyData[dateString]) return 0;
    
    const dayCode = getDayCodeForDate(dateString);
    const workout = workouts.find(w => w.dayCode === dayCode);
    if (!workout) return 0;
    
    let totalExercises = 0;
    let completedExercises = 0;
    
    workout.sections.forEach(section => {
      section.exercises.forEach(exercise => {
        totalExercises++;
        if (historyData[dateString][exercise.name]?.completed) {
          completedExercises++;
        }
      });
    });
    
    return totalExercises > 0 ? Math.round((completedExercises / totalExercises) * 100) : 0;
  };

  // Calculate time spent on a workout
  const getTimeSpent = (workoutData: WorkoutProgress): number => {
    let totalDuration = 0;
    
    // Sum up all durations
    Object.values(workoutData).forEach(exercise => {
      if (exercise.duration) {
        totalDuration += exercise.duration;
      }
    });
    
    return totalDuration;
  };

  // Calculate workout statistics
  const calculateStats = (data: DailyProgress) => {
    const dates = Object.keys(data);
    if (dates.length === 0) {
      return {
        totalWorkouts: 0,
        completedWorkouts: 0,
        completionRate: 0,
        averageExercisesPerWorkout: 0,
        totalExercises: 0,
        mostPopularDay: "",
        streakDays: 0
      };
    }
    
    // Count workouts per day of week
    const dayCount = [0, 0, 0, 0, 0, 0, 0]; // Sun, Mon, Tue, Wed, Thu, Fri, Sat
    
    let totalCompletedExercises = 0;
    const completedWorkouts = dates.filter(date => {
      const percentage = getCompletionPercentage(date);
      return percentage === 100;
    }).length;
    
    dates.forEach(date => {
      const dateObj = new Date(date);
      const dayOfWeek = dateObj.getDay();
      dayCount[dayOfWeek]++;
      
      // Count completed exercises
      Object.values(data[date]).forEach(exercise => {
        if (typeof exercise === 'object' && exercise.completed) {
          totalCompletedExercises++;
        }
      });
    });
    
    // Find most popular day
    const maxDayCount = Math.max(...dayCount);
    const mostPopularDayIndex = dayCount.indexOf(maxDayCount);
    const mostPopularDay = dayNames[mostPopularDayIndex];
    
    // Calculate streak (consecutive days with workouts)
    let currentStreak = 0;
    let maxStreak = 0;
    
    // Sort dates in descending order
    const sortedDates = dates.sort((a, b) => new Date(b).getTime() - new Date(a).getTime());
    
    if (sortedDates.length > 0) {
      let previousDate: Date | null = null;
      
      for (const dateStr of sortedDates) {
        const currentDate = new Date(dateStr);
        
        if (previousDate === null) {
          // First date in the streak
          currentStreak = 1;
        } else {
          // Check if dates are consecutive
          const diffTime = previousDate.getTime() - currentDate.getTime();
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          
          if (diffDays === 1) {
            // Consecutive day
            currentStreak++;
          } else {
            // Break in streak
            if (currentStreak > maxStreak) {
              maxStreak = currentStreak;
            }
            currentStreak = 1;
          }
        }
        
        previousDate = currentDate;
      }
      
      // Update max streak if current streak is greater
      if (currentStreak > maxStreak) {
        maxStreak = currentStreak;
      }
    }
    
    return {
      totalWorkouts: dates.length,
      completedWorkouts,
      completionRate: dates.length > 0 ? Math.round((completedWorkouts / dates.length) * 100) : 0,
      averageExercisesPerWorkout: dates.length > 0 ? Math.round(totalCompletedExercises / dates.length) : 0,
      totalExercises: totalCompletedExercises,
      mostPopularDay,
      streakDays: maxStreak
    };
  };

  // Group data by month
  const getMonthlyData = () => {
    const monthlySummary: { [key: string]: { workouts: number, completion: number } } = {};
    
    Object.keys(historyData).forEach(date => {
      const dateObj = new Date(date);
      const monthYear = `${monthNames[dateObj.getMonth()]} ${dateObj.getFullYear()}`;
      
      if (!monthlySummary[monthYear]) {
        monthlySummary[monthYear] = { workouts: 0, completion: 0 };
      }
      
      monthlySummary[monthYear].workouts += 1;
      monthlySummary[monthYear].completion += getCompletionPercentage(date);
    });
    
    // Calculate average completion for each month
    Object.keys(monthlySummary).forEach(month => {
      if (monthlySummary[month].workouts > 0) {
        monthlySummary[month].completion = Math.round(
          monthlySummary[month].completion / monthlySummary[month].workouts
        );
      }
    });
    
    return monthlySummary;
  };

  // Load data and calculate stats
  useEffect(() => {
    setIsClient(true);
    const data = getWorkoutData();
    setHistoryData(data);
    setStats(calculateStats(data));
  }, []);

  // Handle data refresh after import
  const handleDataRefresh = () => {
    const data = getWorkoutData();
    setHistoryData(data);
    setStats(calculateStats(data));
  };

  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-neutral-600 dark:text-neutral-400">
          Loading reports data...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="bg-neutral-100 dark:bg-neutral-900 px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">Workout Reports</h1>
        <div className="flex gap-2">
          <Link 
            href="/history"
            className="px-3 py-1.5 text-sm bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 rounded-full"
          >
            History
          </Link>
          <Link 
            href="/"
            className="px-3 py-1.5 text-sm bg-neutral-800 dark:bg-white text-white dark:text-neutral-900 rounded-full"
          >
            Today
          </Link>
        </div>
      </div>
      
      <ExportImportData onDataImported={handleDataRefresh} />
      
      <main className="flex-1 p-4">
        {Object.keys(historyData).length === 0 ? (
          <div className="text-center py-8 text-neutral-500 dark:text-neutral-400">
            <p className="mb-4">No workout history found.</p>
            <p className="text-sm">Complete some workouts to see your reports here.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Stats Overview */}
            <div className="bg-white dark:bg-neutral-950 rounded-lg shadow p-6">
              <h2 className="text-lg font-medium mb-4">Workout Overview</h2>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="bg-neutral-50 dark:bg-neutral-900 p-4 rounded-lg">
                  <div className="text-sm text-neutral-500 dark:text-neutral-400">Total Workouts</div>
                  <div className="text-2xl font-bold mt-1">{stats.totalWorkouts}</div>
                </div>
                
                <div className="bg-neutral-50 dark:bg-neutral-900 p-4 rounded-lg">
                  <div className="text-sm text-neutral-500 dark:text-neutral-400">Completion Rate</div>
                  <div className="text-2xl font-bold mt-1">{stats.completionRate}%</div>
                </div>
                
                <div className="bg-neutral-50 dark:bg-neutral-900 p-4 rounded-lg">
                  <div className="text-sm text-neutral-500 dark:text-neutral-400">Completed Workouts</div>
                  <div className="text-2xl font-bold mt-1">{stats.completedWorkouts}</div>
                </div>
                
                <div className="bg-neutral-50 dark:bg-neutral-900 p-4 rounded-lg">
                  <div className="text-sm text-neutral-500 dark:text-neutral-400">Exercises Per Workout</div>
                  <div className="text-2xl font-bold mt-1">{stats.averageExercisesPerWorkout}</div>
                </div>
                
                <div className="bg-neutral-50 dark:bg-neutral-900 p-4 rounded-lg">
                  <div className="text-sm text-neutral-500 dark:text-neutral-400">Total Exercises Done</div>
                  <div className="text-2xl font-bold mt-1">{stats.totalExercises}</div>
                </div>
                
                <div className="bg-neutral-50 dark:bg-neutral-900 p-4 rounded-lg">
                  <div className="text-sm text-neutral-500 dark:text-neutral-400">Best Streak</div>
                  <div className="text-2xl font-bold mt-1">{stats.streakDays} days</div>
                </div>
              </div>
              
              <div className="mt-6 bg-neutral-50 dark:bg-neutral-900 p-4 rounded-lg">
                <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">Most Popular Workout Day</div>
                <div className="text-xl font-bold">{stats.mostPopularDay}</div>
              </div>
            </div>
            
            {/* Monthly Progress */}
            <div className="bg-white dark:bg-neutral-950 rounded-lg shadow p-6">
              <h2 className="text-lg font-medium mb-4">Monthly Progress</h2>
              
              <div className="space-y-4">
                {Object.entries(getMonthlyData())
                  .sort((a, b) => {
                    // Sort in descending order (most recent first)
                    const monthYearA = a[0].split(' ');
                    const monthYearB = b[0].split(' ');
                    
                    const yearA = parseInt(monthYearA[1]);
                    const yearB = parseInt(monthYearB[1]);
                    
                    if (yearA !== yearB) return yearB - yearA;
                    
                    const monthA = monthNames.indexOf(monthYearA[0]);
                    const monthB = monthNames.indexOf(monthYearB[0]);
                    
                    return monthB - monthA;
                  })
                  .map(([month, data]) => (
                    <div key={month} className="bg-neutral-50 dark:bg-neutral-900 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <div className="font-medium">{month}</div>
                        <div className="text-sm text-neutral-500 dark:text-neutral-400">
                          {data.workouts} workout{data.workouts !== 1 ? 's' : ''}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="flex-1">
                          <div className="h-2 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-emerald-500 dark:bg-emerald-600 transition-all duration-300 ease-in-out"
                              style={{ width: `${data.completion}%` }}
                            />
                          </div>
                        </div>
                        <div className={`text-sm font-medium ${
                          data.completion >= 80 
                            ? 'text-emerald-600 dark:text-emerald-400' 
                            : data.completion >= 50
                              ? 'text-amber-600 dark:text-amber-400'
                              : 'text-red-600 dark:text-red-400'
                        }`}>
                          {data.completion}%
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
            
            {/* Recent Workouts */}
            <div className="bg-white dark:bg-neutral-950 rounded-lg shadow p-6">
              <h2 className="text-lg font-medium mb-4">Recent Workouts</h2>
              
              <div className="space-y-3">
                {Object.keys(historyData)
                  .sort((a, b) => new Date(b).getTime() - new Date(a).getTime())
                  .slice(0, 5)
                  .map(date => {
                    const completion = getCompletionPercentage(date);
                    const timeSpent = getTimeSpent(historyData[date]);
                    const workout = getWorkoutTitle(getDayCodeForDate(date));
                    
                    return (
                      <div key={date} className="bg-neutral-50 dark:bg-neutral-900 p-4 rounded-lg">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-3">
                          <div>
                            <div className="font-medium">{new Date(date).toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}</div>
                            <div className="text-sm text-neutral-500 dark:text-neutral-400">{workout}</div>
                          </div>
                          
                          <div className="flex gap-2 text-sm">
                            <div className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 rounded-full">
                              {Math.floor(timeSpent / 60)}m {timeSpent % 60}s
                            </div>
                            <div className={`px-2 py-1 rounded-full ${
                              completion === 100 
                                ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400' 
                                : completion >= 50
                                  ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400'
                                  : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                            }`}>
                              {completion}% Complete
                            </div>
                          </div>
                        </div>
                        
                        <div className="h-2 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-emerald-500 dark:bg-emerald-600 transition-all duration-300 ease-in-out"
                            style={{ width: `${completion}%` }}
                          />
                        </div>
                      </div>
                    );
                  })
                }
              </div>
              
              <div className="mt-4">
                <Link
                  href="/history"
                  className="text-sm text-emerald-600 dark:text-emerald-400 font-medium hover:underline"
                >
                  View all workout history →
                </Link>
              </div>
            </div>
            
            {/* Workout Type Distribution */}
            <div className="bg-white dark:bg-neutral-950 rounded-lg shadow p-6">
              <h2 className="text-lg font-medium mb-4">Workout Distribution</h2>
              
              {(() => {
                const workoutTypes: {[key: string]: number} = {};
                const totalDays = Object.keys(historyData).length;
                
                Object.keys(historyData).forEach(date => {
                  const dayCode = getDayCodeForDate(date);
                  const workoutTitle = getWorkoutTitle(dayCode);
                  
                  if (!workoutTypes[workoutTitle]) {
                    workoutTypes[workoutTitle] = 0;
                  }
                  
                  workoutTypes[workoutTitle]++;
                });
                
                return (
                  <div className="space-y-4">
                    {Object.entries(workoutTypes)
                      .sort((a, b) => b[1] - a[1])
                      .map(([type, count]) => {
                        const percentage = Math.round((count / totalDays) * 100);
                        
                        return (
                          <div key={type} className="bg-neutral-50 dark:bg-neutral-900 p-4 rounded-lg">
                            <div className="flex justify-between items-center mb-2">
                              <div className="font-medium">{type}</div>
                              <div className="text-sm text-neutral-500 dark:text-neutral-400">
                                {count} workout{count !== 1 ? 's' : ''} ({percentage}%)
                              </div>
                            </div>
                            
                            <div className="h-2 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-emerald-500 dark:bg-emerald-600 transition-all duration-300 ease-in-out"
                                style={{ width: `${percentage}%` }}
                              />
                            </div>
                          </div>
                        );
                      })
                    }
                  </div>
                );
              })()}
            </div>
          </div>
        )}
      </main>
    </div>
  );
} 