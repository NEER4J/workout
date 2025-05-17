import React from "react";
import Link from "next/link";
import { getCurrentDayCode } from "../utils/storage";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const pathname = usePathname();
  const isHistoryPage = pathname === '/history';
  const isReportsPage = pathname === '/reports';
  
  return (
    <header className="py-2 px-4 sm:px-6 border-b border-neutral-200 dark:border-neutral-800">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-lg font-bold tracking-tight">
            Bodyweight Tracker
          </Link>
          <div className="text-xs px-1.5 py-0.5 bg-neutral-100 dark:bg-neutral-800 rounded-full">
            {getCurrentDayCode().toUpperCase()}
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          {!isHistoryPage && !isReportsPage ? (
            <Link 
              href="/history" 
              className="px-2.5 py-1 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 rounded-full text-xs font-medium flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              History
            </Link>
          ) : (
            <Link 
              href="/" 
              className="px-2.5 py-1 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 rounded-full text-xs font-medium flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Today
            </Link>
          )}
        </div>
      </div>
      <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 hidden sm:block">
        Your minimalist workout companion
      </p>
    </header>
  );
};

export default Header; 