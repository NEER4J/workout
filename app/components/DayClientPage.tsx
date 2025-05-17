"use client";

import { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import { workouts } from "../data/workouts";
import { getWorkoutDayCode } from "../utils/storage";
import Header from "./Header";
import DayTabs from "./DayTabs";
import WorkoutPage from "./WorkoutPage";

export default function DayClientPage({ dayCode }: { dayCode: string }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Find the workout for this day
  const workout = workouts.find((w) => w.dayCode === dayCode);

  // If no workout is found, return 404
  if (!workout && isClient) {
    notFound();
  }

  // If still on server or loading, show a placeholder
  if (!isClient || !workout) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-neutral-600 dark:text-neutral-400">
          Loading workout data...
        </div>
      </div>
    );
  }

  // Highlight the current day's workout if it's the same as the user's current day
  const isCurrentDay = getWorkoutDayCode() === dayCode;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <DayTabs activeDay={dayCode} />
      <main className="flex-1">
        {isCurrentDay && (
          <div className="bg-emerald-50 dark:bg-emerald-950/20 py-1 px-2 text-center text-xs text-emerald-800 dark:text-emerald-300">
            Today's workout
          </div>
        )}
        <WorkoutPage workout={workout} />
      </main>
    </div>
  );
} 