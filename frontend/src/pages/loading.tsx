interface LoadingOverlayProps {
  show: boolean;
  message?: string;
}

export function LoadingOverlay({ show, message }: LoadingOverlayProps) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white dark:bg-black">
      {/* Logo-style loader */}

      <h1
          className="text-6xl md:text-8xl font-extrabold tracking-tight"
        >
          Medium<span className="text-amber-500">.</span>
        </h1>
      {message && (
        <p className="mt-4 text-lg font-medium text-gray-600 animate-pulse">{message}</p>
      )}
    </div>
  );
}
