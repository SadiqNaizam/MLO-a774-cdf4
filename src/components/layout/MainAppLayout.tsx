import React from 'react';
import { cn } from '@/lib/utils';
import Header from './Header';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 grid-rows-[auto_1fr] min-h-screen bg-background text-foreground',
        className
      )}
    >
      <Header />
      <main className="overflow-y-auto">
        <div className="max-w-full flex flex-col gap-6 px-6 py-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainAppLayout;
