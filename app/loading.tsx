import LoadingSpinner from '@/components/LoadingSpinner';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-softGray">
      <div className="text-center space-y-6">
        <LoadingSpinner />
        <p className="text-xl text-gray-600 font-tajawal animate-pulse">
          جاري التحميل...
        </p>
      </div>
    </div>
  );
}
