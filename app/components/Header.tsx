import React from "react";
import Link from "next/link";
import { getCurrentDayCode } from "../utils/storage";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const pathname = usePathname();
  const isHistoryPage = pathname === '/history';
  
  return (
    <header className="py-6 px-4 sm:px-6 border-b border-neutral-200 dark:border-neutral-800">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          <Link href="/" className="text-xl font-bold tracking-tight">
            Bodyweight Tracker
          </Link>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Your minimalist workout companion
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-sm px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full">
            Today: {getCurrentDayCode().toUpperCase()}
          </div>
          {isHistoryPage ? (
            <Link 
              href="/" 
              className="px-3 py-1 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 rounded-full text-sm font-medium flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Today
            </Link>
          ) : (
            <Link 
              href="/history" 
              className="px-3 py-1 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 rounded-full text-sm font-medium flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              History
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header; 