import React from 'react';
import { cn } from '@/lib/utils';
import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
} from 'recharts';
import { Card, CardContent } from '@/components/ui/card';

interface ScoreDataItem {
  id: string;
  label: string;
  value: number;
  max: number;
}

// Data defined directly in the component
const scoresData: ScoreDataItem[] = [
  { id: 'score1', label: 'SCORE #1', value: 85, max: 100 },
  { id: 'score2', label: 'SCORE #2', value: 73, max: 100 },
  { id: 'score3', label: 'SCORE #3', value: 92, max: 100 },
  { id: 'score4', label: 'SCORE #4', value: 54, max: 100 },
  { id: 'score5', label: 'SCORE #5', value: 75, max: 100 },
];

interface ScoresDisplayProps {
  className?: string;
}

const ScoresDisplay: React.FC<ScoresDisplayProps> = ({ className }) => {
  // Colors for dark theme (referencing CSS variables conceptually)
  const primaryColor = 'hsl(193, 100%, 49%)'; // hsl(var(--primary))
  const trackColor = 'hsla(0, 0%, 100%, 0.15)'; // White with opacity for track on dark background
                                                // Could also use 'hsl(var(--border))' or similar

  return (
    <Card className={cn('shadow-md', className)}>
      <CardContent className="p-4 sm:p-6">
        <div className="flex flex-wrap justify-around items-center gap-x-4 gap-y-6 sm:gap-x-6 sm:gap-y-8">
          {scoresData.map((score) => (
            <div key={score.id} className="flex flex-col items-center w-[100px] sm:w-[120px]">
              <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RadialBarChart
                    cx="50%"
                    cy="50%"
                    innerRadius="65%" // Adjusted for thickness
                    outerRadius="85%" // Adjusted for thickness
                    barSize={10}    // Corresponds to outerRadius - innerRadius percentage
                    data={[{ name: score.label, value: score.value, fill: primaryColor }]}
                    startAngle={90}   // Start from top
                    endAngle={-270} // Full circle (90 - 360 = -270)
                  >
                    <PolarAngleAxis 
                      type="number" 
                      domain={[0, score.max]} 
                      angleAxisId={0} 
                      tick={false} 
                    />
                    <RadialBar
                      background={{ fill: trackColor }}
                      dataKey="value"
                      angleAxisId={0}
                      cornerRadius="50%" // Rounded ends for the bar
                    />
                    <text 
                      x="50%" 
                      y="50%" 
                      textAnchor="middle" 
                      dominantBaseline="middle" 
                      style={{ fill: primaryColor, fontSize: '1.5rem', fontWeight: '600' }} // Tailwind text-2xl font-semibold equivalent
                      className="text-primary"
                    >
                      {score.value}
                    </text>
                  </RadialBarChart>
                </ResponsiveContainer>
              </div>
              <p className="mt-2 sm:mt-3 text-xs font-medium text-muted-foreground tracking-wider text-center">
                {score.label}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ScoresDisplay;
