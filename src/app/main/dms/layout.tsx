import { DMsSidebar } from '@components/dms/sidebar';

export default function DMsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid h-full w-full grid-cols-4 sm:h-auto">
      <div className="m-3 mr-0 hidden rounded-lg border border-gray-800 bg-gray-900 sm:col-span-1 sm:block">
        <DMsSidebar />
      </div>
      <div className="col-span-4 m-3 rounded-lg border border-gray-800 bg-gray-900 sm:col-span-3">{children}</div>
    </div>
  );
}
