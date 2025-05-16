import React from "react";
import Link from "next/link";
import { getWorkoutDayCode } from "../utils/storage";

interface DayTabsProps {
  activeDay: string;
}

const DayTabs: React.FC<DayTabsProps> = ({ activeDay }) => {
  const currentWorkoutDay = getWorkoutDayCode();
  
  const tabs = [
    { id: "mon-thu", label: "Mon/Thu" },
    { id: "tue-fri", label: "Tue/Fri" },
    { id: "wed-sat", label: "Wed/Sat" },
    { id: "sun", label: "Sun" },
  ];

  return (
    <div className="flex overflow-x-auto py-4 px-2 no-scrollbar">
      <div className="flex space-x-2 mx-auto">
        {tabs.map((tab) => {
          const isActive = activeDay === tab.id;
          const isCurrent = currentWorkoutDay === tab.id;
          
          return (
            <Link
              key={tab.id}
              href={`/${tab.id}`}
              className={`
                px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap
                transition-colors
                ${isActive 
                  ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900" 
                  : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"}
                ${isCurrent && !isActive ? "ring-2 ring-neutral-400 dark:ring-neutral-500" : ""}
              `}
            >
              {tab.label}
              {isCurrent && (
                <span className="ml-1.5 inline-block w-2 h-2 rounded-full bg-emerald-500" />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default DayTabs; 