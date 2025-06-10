import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import StatCardGrid from '../components/Dashboard/StatCardGrid';
import RegionBarChart from '../components/Dashboard/RegionBarChart';
import TotalProductsSold from '../components/Dashboard/TotalProductsSold';
import WebsiteTrafficChart from '../components/Dashboard/WebsiteTrafficChart';
import ScoresDisplay from '../components/Dashboard/ScoresDisplay';

const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      {/* Stat Cards Grid - Full Width */}
      <StatCardGrid />

      {/* Main Charting Area - 2 Columns on Larger Screens */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: RegionBarChart and TotalProductsSold stacked vertically */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <RegionBarChart />
          <TotalProductsSold />
        </div>

        {/* Right Column: WebsiteTrafficChart taking more space */}
        <div className="lg:col-span-2">
          <WebsiteTrafficChart />
        </div>
      </div>

      {/* Scores Display - Full Width */}
      <ScoresDisplay />
    </MainAppLayout>
  );
};

export default IndexPage;
