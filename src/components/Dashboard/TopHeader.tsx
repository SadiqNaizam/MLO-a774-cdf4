import React from 'react';
import { cn } from '@/lib/utils';
import { CalendarDays } from 'lucide-react';

// NOTE: The Project Context mentions 'DateRangeSelectors'. 
// In a real application, these would likely use Shadcn's Popover and Calendar, or a pre-built DatePicker.
// For this static representation matching the image, styled divs are used.

interface TopHeaderProps {
  className?: string;
}

const TopHeader: React.FC<TopHeaderProps> = ({ className }) => {
  // Static dates as per the image and 'dummy data' requirement
  const startDateDisplay = '06/19/2024';
  const endDateDisplay = '06/25/2024';

  return (
    <header
      className={cn(
        'flex flex-wrap justify-between items-center px-6 py-4 bg-card text-card-foreground border-b h-auto md:h-20 sticky top-0 z-50',
        className
      )}
    >
      <h1 className="text-lg sm:text-xl font-bold tracking-tight whitespace-nowrap mb-2 md:mb-0">
        WEEKLY STATUS DASHBOARD
      </h1>
      <div className="flex flex-wrap items-center gap-2 sm:gap-4">
        <div className="flex items-center gap-1 sm:gap-2">
          <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">ENTER START DATE ▸</span>
          <div className="flex items-center gap-2 px-3 py-2 text-xs sm:text-sm font-medium bg-background rounded-md border min-w-[100px] sm:min-w-[120px] justify-center">
            <CalendarDays className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground" />
            <span>{startDateDisplay}</span>
          </div>
        </div>
        <span className="text-xs sm:text-sm text-muted-foreground">THROUGH</span>
        <div className="flex items-center gap-1 sm:gap-2">
          <div className="flex items-center gap-2 px-3 py-2 text-xs sm:text-sm font-medium bg-background rounded-md border min-w-[100px] sm:min-w-[120px] justify-center">
            <CalendarDays className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground" />
            <span>{endDateDisplay}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
