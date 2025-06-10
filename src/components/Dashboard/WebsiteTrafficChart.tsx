import React from 'react';
import { cn } from '@/lib/utils';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface TrafficDataPoint {
  date: string;
  websiteVisits: number;
  websitePageViews: number;
}

// Data defined directly in the component
const websiteTrafficData: TrafficDataPoint[] = [
  { date: '2024-06-19', websiteVisits: 30, websitePageViews: 70 },
  { date: '2024-06-20', websiteVisits: 45, websitePageViews: 110 },
  { date: '2024-06-21', websiteVisits: 20, websitePageViews: 40 },
  { date: '2024-06-22', websiteVisits: 55, websitePageViews: 125 },
  { date: '2024-06-23', websiteVisits: 35, websitePageViews: 80 },
  { date: '2024-06-24', websiteVisits: 15, websitePageViews: 45 },
  { date: '2024-06-25', websiteVisits: 50, websitePageViews: 115 },
];

interface WebsiteTrafficChartProps {
  className?: string;
}

const WebsiteTrafficChart: React.FC<WebsiteTrafficChartProps> = ({ className }) => {
  // Colors for dark theme (referencing CSS variables conceptually)
  const primaryColor = 'hsl(193, 100%, 49%)'; // hsl(var(--primary))
  const foregroundColor = 'hsl(0, 0%, 100%)'; // hsl(var(--foreground))
  const mutedForegroundColor = 'hsl(213, 27%, 82%)'; // hsl(var(--muted-foreground))
  const gridAndAxisColor = 'hsl(214, 24%, 27%)'; // hsl(var(--border))
  const popoverBgColor = 'hsl(218, 23%, 21%)'; // hsl(var(--popover))

  return (
    <Card className={cn('shadow-md', className)}>
      <CardHeader>
        <CardTitle className="text-base font-semibold text-card-foreground">WEBSITE TRAFFIC</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={websiteTrafficData} margin={{ top: 5, right: 20, left: -20, bottom: 40 }}>
              <defs>
                <linearGradient id="colorVisitsArea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={foregroundColor} stopOpacity={0.3}/>
                  <stop offset="95%" stopColor={foregroundColor} stopOpacity={0.05}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke={gridAndAxisColor} vertical={false} />
              <XAxis 
                dataKey="date" 
                tickFormatter={(str) => new Date(str + 'T00:00:00Z').toLocaleDateString('en-US', { month: '2-digit', day: '2-digit'})} 
                tick={{ fill: mutedForegroundColor, fontSize: 10 }}
                axisLine={{ stroke: gridAndAxisColor }}
                tickLine={{ stroke: gridAndAxisColor }}
                padding={{left: 10, right: 10}}
                interval="preserveStartEnd"
              />
              <YAxis 
                yAxisId="left" 
                orientation="left" 
                stroke={gridAndAxisColor} 
                tick={{ fill: mutedForegroundColor, fontSize: 10 }}
                axisLine={{ stroke: gridAndAxisColor }}
                tickLine={{ stroke: gridAndAxisColor }}
                domain={[0, 140]}
                ticks={[0, 20, 40, 60, 80, 100, 120, 140]}
              />
              <YAxis 
                yAxisId="right" 
                orientation="right" 
                stroke={gridAndAxisColor} 
                tick={{ fill: mutedForegroundColor, fontSize: 10 }}
                axisLine={{ stroke: gridAndAxisColor }}
                tickLine={{ stroke: gridAndAxisColor }}
                domain={[0, 60]}
                ticks={[0, 10, 20, 30, 40, 50, 60]}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: popoverBgColor, 
                  borderColor: gridAndAxisColor,
                  color: mutedForegroundColor,
                  borderRadius: 'var(--radius)'
                }}
                labelFormatter={(label) => new Date(label + 'T00:00:00Z').toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })}
              />
              <Legend 
                verticalAlign="bottom" 
                align="left"
                height={50}
                iconType="rect"
                wrapperStyle={{ color: mutedForegroundColor, fontSize: 12, paddingLeft: '20px' }}
                formatter={(value, entry) => {
                  const colorClass = entry.color === primaryColor ? 'text-primary' : 'text-foreground';
                  return <span className={`font-medium ${colorClass}`}>{value}</span>;
                }}
              />
              <Area 
                yAxisId="right" 
                type="monotone" 
                dataKey="websiteVisits" 
                stroke={foregroundColor} 
                fillOpacity={1}
                fill="url(#colorVisitsArea)" 
                strokeWidth={2} 
                name="Website Visits"
                dot={false}
              />
              <Area // Using Area for the line to match the Recharts Line type but can use Line as well
                yAxisId="left" 
                type="monotone" 
                dataKey="websitePageViews" 
                stroke={primaryColor} 
                fillOpacity={0} // No fill for this line, just stroke
                strokeWidth={2.5} 
                dot={{ r: 3, strokeWidth: 1.5, fill: primaryColor }}
                activeDot={{ r: 5, strokeWidth: 1.5, stroke: primaryColor, fill: 'hsl(var(--background))'}}
                name="Website Page Views"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default WebsiteTrafficChart;
