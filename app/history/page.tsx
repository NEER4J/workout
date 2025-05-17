"use client";

import { useState, useEffect } from "react";
import Header from "../components/Header";
import { getWorkoutData } from "../utils/storage";
import { workouts } from "../data/workouts";
import Link from "next/link";
import ExportImportData from "../components/ExportImportData";

export default function HistoryPage() {
  const [historyData, setHistoryData] = useState<{[date: string]: any}>({});
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const data = getWorkoutData();
    setHistoryData(data);
    
    // Select the most recent date by default
    if (Object.keys(data).length > 0) {
      const dates = Object.keys(data).sort().reverse();
      setSelectedDate(dates[0]);
    }
  }, []);

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

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      weekday: 'short', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    }).format(date);
  };

  // Calculate completion percentage for a date
  const getCompletionPercentage = (dateString: string) => {
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

  // Handle data refresh after import
  const handleDataRefresh = () => {
    const data = getWorkoutData();
    setHistoryData(data);
    
    if (Object.keys(data).length > 0) {
      const dates = Object.keys(data).sort().reverse();
      setSelectedDate(dates[0]);
    } else {
      setSelectedDate(null);
    }
  };

  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-neutral-600 dark:text-neutral-400">
          Loading history data...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="bg-neutral-100 dark:bg-neutral-900 px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">Workout History</h1>
        <div className="flex gap-2">
          <Link 
            href="/reports"
            className="px-3 py-1.5 text-sm bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 rounded-full"
          >
            Reports
          </Link>
          <Link 
            href="/"
            className="px-3 py-1.5 text-sm bg-neutral-800 dark:bg-white text-white dark:text-neutral-900 rounded-full"
          >
            Go to Today
          </Link>
        </div>
      </div>
      
      <ExportImportData onDataImported={handleDataRefresh} />
      
      <main className="flex-1 p-4">
        {Object.keys(historyData).length === 0 ? (
          <div className="text-center py-8 text-neutral-500 dark:text-neutral-400">
            <p className="mb-4">No workout history found.</p>
            <p className="text-sm">Complete some workouts to see your history here.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1 order-2 md:order-1">
              <h2 className="text-lg font-medium mb-3">Workout Dates</h2>
              <div className="bg-white dark:bg-neutral-950 rounded-lg shadow overflow-hidden">
                <div className="max-h-[calc(100vh-300px)] overflow-auto px-1">
                  {Object.keys(historyData)
                    .sort((a, b) => new Date(b).getTime() - new Date(a).getTime())
                    .map(date => (
                      <button
                        key={date}
                        onClick={() => setSelectedDate(date)}
                        className={`w-full text-left px-4 py-3 border-b border-neutral-100 dark:border-neutral-800 flex justify-between items-center ${
                          selectedDate === date 
                            ? 'bg-emerald-50 dark:bg-emerald-950/30' 
                            : 'hover:bg-neutral-50 dark:hover:bg-neutral-900'
                        }`}
                      >
                        <div>
                          <div className="font-medium">{formatDate(date)}</div>
                          <div className="text-sm text-neutral-500 dark:text-neutral-400">
                            {getWorkoutTitle(getDayCodeForDate(date))}
                          </div>
                        </div>
                        <div className={`text-sm font-medium px-2 py-1 rounded-full ${
                          getCompletionPercentage(date) === 100 
                            ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400' 
                            : 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400'
                        }`}>
                          {getCompletionPercentage(date)}%
                        </div>
                      </button>
                    ))
                  }
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2 order-1 md:order-2">
              {selectedDate ? (
                <div>
                  <h2 className="text-lg font-medium mb-3">
                    {formatDate(selectedDate)} - {getWorkoutTitle(getDayCodeForDate(selectedDate))}
                  </h2>
                  <div className="bg-white dark:bg-neutral-950 rounded-lg shadow p-4 mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <div className="text-sm font-medium">Completion</div>
                      <div className={`text-sm font-medium ${
                        getCompletionPercentage(selectedDate) === 100 
                          ? 'text-emerald-600 dark:text-emerald-400' 
                          : 'text-amber-600 dark:text-amber-400'
                      }`}>
                        {getCompletionPercentage(selectedDate)}%
                      </div>
                    </div>
                    <div className="h-2 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-emerald-500 dark:bg-emerald-600 transition-all duration-300 ease-in-out"
                        style={{ width: `${getCompletionPercentage(selectedDate)}%` }}
                      />
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-neutral-950 rounded-lg shadow overflow-hidden">
                    <div className="max-h-[calc(100vh-300px)] overflow-auto p-4">
                      {Object.entries(historyData[selectedDate]).map(([exerciseName, data]: [string, any]) => (
                        <div key={exerciseName} className="mb-4 pb-4 border-b border-neutral-100 dark:border-neutral-800 last:border-0 last:mb-0 last:pb-0">
                          <div className="flex items-center mb-2">
                            <div className={`w-4 h-4 rounded-full mr-2 ${data.completed ? 'bg-emerald-500' : 'bg-neutral-300 dark:bg-neutral-700'}`} />
                            <h3 className="font-medium">{exerciseName}</h3>
                          </div>
                          
                          {data.sets > 0 && !data.duration && (
                            <div className="ml-6 mt-2">
                              <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">Sets: {data.sets}</div>
                              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                {data.reps.map((rep: number, idx: number) => (
                                  <div key={idx} className="px-3 py-2 bg-neutral-50 dark:bg-neutral-900 rounded text-sm">
                                    Set {idx + 1}: <span className="font-medium">{rep} reps</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                          
                          {data.duration > 0 && (
                            <div className="ml-6 mt-2">
                              <div className="px-3 py-2 bg-neutral-50 dark:bg-neutral-900 rounded text-sm">
                                Duration: <span className="font-medium">{data.duration} seconds</span>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white dark:bg-neutral-950 rounded-lg shadow p-6 text-center">
                  <p className="text-neutral-500 dark:text-neutral-400">
                    Select a date from the list to view workout details.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
} 