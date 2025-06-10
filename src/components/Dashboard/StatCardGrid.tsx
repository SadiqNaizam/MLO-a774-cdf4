import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// Icons are not shown in the reference image for these specific stat cards, so they are omitted.
// If icons were needed, they would be imported from lucide-react, e.g.:
// import { DollarSign, Factory, Smile, UserCheck } from 'lucide-react';

interface StatCardItem {
  id: string;
  title: string;
  value: string;
  // icon?: React.ElementType; // Optional icon type
}

const statCardData: StatCardItem[] = [
  {
    id: 'revenue',
    title: 'REVENUE',
    value: '$92,463',
  },
  {
    id: 'production',
    title: 'PRODUCTION OUTPUT',
    value: '315',
  },
  {
    id: 'satisfaction',
    title: 'CUSTOMER SATISFACTION SCORE',
    value: '91%',
  },
  {
    id: 'attendance',
    title: 'EMPLOYEE ATTENDANCE',
    value: '96%',
  },
];

interface StatCardGridProps {
  className?: string;
}

const StatCardGrid: React.FC<StatCardGridProps> = ({ className }) => {
  return (
    <div
      className={cn('grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6', className)}
    >
      {statCardData.map((stat) => (
        <Card key={stat.id} className="bg-card text-card-foreground shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {stat.title}
            </CardTitle>
            {/* {stat.icon && <stat.icon className="h-4 w-4 text-muted-foreground" />} */}
          </CardHeader>
          <CardContent>
            <div className="text-3xl md:text-4xl font-bold text-primary">
              {stat.value}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatCardGrid;
