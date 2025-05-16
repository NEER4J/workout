"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getWorkoutDayCode } from "./utils/storage";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the current day's workout
    const dayCode = getWorkoutDayCode();
    router.push(`/${dayCode}`);
  }, [router]);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="animate-pulse text-neutral-600 dark:text-neutral-400">
        Loading your workout...
      </div>
    </div>
  );
}
