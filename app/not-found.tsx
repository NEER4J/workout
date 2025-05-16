import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h2 className="text-2xl font-bold mb-4">Workout Not Found</h2>
      <p className="text-neutral-600 dark:text-neutral-400 mb-8 text-center">
        The workout you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-4 py-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-md hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
      >
        Go to Today's Workout
      </Link>
    </div>
  );
} 