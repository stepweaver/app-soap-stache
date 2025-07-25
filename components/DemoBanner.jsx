'use client';

export default function DemoBanner() {
  // Demo mode detection
  const isDemoMode =
    process.env.NODE_ENV === 'development' ||
    process.env.NEXT_PUBLIC_DEMO_MODE === 'true';

  if (!isDemoMode) return null;

  return (
    <div className="bg-yellow-500 text-black text-center py-3 px-4 font-bold text-sm sticky top-0 z-50">
      🚫 DEMO SITE - This is a demonstration. No real orders will be processed.
    </div>
  );
} 