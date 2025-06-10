import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Boxes } from 'lucide-react';

interface TotalProductsSoldProps {
  className?: string;
}

const TotalProductsSold: React.FC<TotalProductsSoldProps> = ({ className }) => {
  // Data defined directly in the component
  const totalSold: number = 364;
  const dateRange: string = '06/19/2024 - 06/25/2024';

  return (
    <Card className={cn('shadow-md text-center', className)}>
      <CardHeader>
        <CardTitle className="text-base font-semibold text-card-foreground">
          TOTAL PRODUCTS SOLD
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center pt-4 pb-8">
        <div className="text-5xl sm:text-6xl font-bold text-primary mb-3 sm:mb-4">
          {totalSold}
        </div>
        <Boxes className="h-12 w-12 sm:h-16 sm:w-16 text-primary mb-2 sm:mb-3" strokeWidth={1.5}/>
        <p className="text-xs text-muted-foreground">{dateRange}</p>
      </CardContent>
    </Card>
  );
};

export default TotalProductsSold;
