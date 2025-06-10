import React from 'react';
import { cn } from '@/lib/utils';
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface RegionSale {
  name: string;
  sales: number;
}

// Data defined directly in the component
const regionSalesData: RegionSale[] = [
  { name: 'Region 5', sales: 40 },
  { name: 'Region 4', sales: 35 },
  { name: 'Region 3', sales: 116 },
  { name: 'Region 2', sales: 103 },
  { name: 'Region 1', sales: 70 },
];

interface RegionBarChartProps {
  className?: string;
}

const RegionBarChart: React.FC<RegionBarChartProps> = ({ className }) => {
  // Colors for dark theme (referencing CSS variables conceptually)
  const primaryColor = 'hsl(193, 100%, 49%)'; // hsl(var(--primary))
  const mutedForegroundColor = 'hsl(213, 27%, 82%)'; // hsl(var(--muted-foreground))
  const popoverBgColor = 'hsl(218, 23%, 21%)'; // hsl(var(--popover))
  const borderColor = 'hsl(214, 24%, 27%)'; // hsl(var(--border))

  return (
    <Card className={cn('shadow-md', className)}>
      <CardHeader>
        <CardTitle className="text-base font-semibold text-card-foreground">PRODUCT SALES</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[280px]">
          <ResponsiveContainer width="100%" height="100%">
            <RechartsBarChart
              layout="vertical"
              data={regionSalesData}
              margin={{ top: 5, right: 40, left: 10, bottom: 5 }} // Adjusted right margin for LabelList
            >
              <XAxis type="number" hide />
              <YAxis 
                type="category" 
                dataKey="name" 
                axisLine={false} 
                tickLine={false}
                tick={{ fill: mutedForegroundColor, fontSize: 12 }}
                dx={-5} // Adjust distance of Y-axis labels from bars
                interval={0} // Ensure all labels are shown
              />
              <Tooltip
                cursor={{ fill: 'hsla(218, 23%, 21%, 0.5)' }} 
                contentStyle={{ 
                  backgroundColor: popoverBgColor, 
                  borderColor: borderColor,
                  color: mutedForegroundColor,
                  borderRadius: 'var(--radius)'
                }}
              />
              <Bar dataKey="sales" fill={primaryColor} barSize={25} radius={[0, 4, 4, 0]}>
                 <LabelList 
                    dataKey="sales" 
                    position="right" 
                    style={{ fill: mutedForegroundColor, fontSize: 12 }} 
                    offset={8}
                 />
              </Bar>
            </RechartsBarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default RegionBarChart;
