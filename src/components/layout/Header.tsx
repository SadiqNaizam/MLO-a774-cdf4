import React from 'react';
import { cn } from '@/lib/utils';
import { CalendarDays } from 'lucide-react';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  // Static dates as per the image and 'dummy data' requirement
  const startDateDisplay = '06/19/2024';
  const endDateDisplay = '06/25/2024';

  return (
    <header
      className={cn(
        'bg-card text-card-foreground border-b sticky top-0 z-50 flex items-center justify-between px-6 py-4 h-20',
        className
      )}
    >
      <h1 className="text-lg sm:text-xl font-bold tracking-tight whitespace-nowrap">
        WEEKLY STATUS DASHBOARD
      </h1>
      <div className="flex items-center gap-2 sm:gap-4">
        <div className="flex items-center gap-1 sm:gap-2">
          <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">ENTER START DATE \u25b8</span>
          <div className="flex items-center gap-2 px-3 py-2 text-xs sm:text-sm font-medium bg-background text-foreground rounded-md border min-w-[100px] sm:min-w-[120px] justify-center">
            <CalendarDays className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground" />
            <span>{startDateDisplay}</span>
          </div>
        </div>
        <span className="text-xs sm:text-sm text-muted-foreground">THROUGH</span>
        <div className="flex items-center gap-1 sm:gap-2">
          <div className="flex items-center gap-2 px-3 py-2 text-xs sm:text-sm font-medium bg-background text-foreground rounded-md border min-w-[100px] sm:min-w-[120px] justify-center">
            <CalendarDays className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground" />
            <span>{endDateDisplay}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
