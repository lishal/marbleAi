import React, { useState, useEffect } from 'react'
import "./dashboard.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SkeletonChart from '../../components/dashboard/loading/SkeletonChart';
import { MetricPill } from '../../components/dashboard/MetricPill';
import { metricsData } from '../../components/dashboard/MetricsData';
import SkeletonTab from '../../components/dashboard/loading/SkeletonTab';
import { LineChartView } from '../../components/dashboard/LineChartView';


export const Dashboard: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [chartData, setChartData] = useState<{ data: any } | null>(null);
  const [expanded, setExpanded] = useState<boolean>(false)
  const [activeMetric, setActiveMetric] = useState<number | null>(null);
  setTimeout(() => {
    setLoading(false)
  }, 3000);
  const handleExpandedIcon = () => {
    setExpanded(!expanded);
  }

  const handlePillClick = (data: any, index: number) => {
    setActiveMetric(index);
    setChartData(data);
  };
  useEffect(() => {
    setActiveMetric(0);
    setChartData(metricsData[0])
  }, [])

  return (
    <div className="content-wrapper h-full">
      <div className="basetemplate">
        <div className="headerTabs">
          <div className="metrices">
            {metricsData.map((metric, index) => (
              loading ?
                <SkeletonTab key={metric.label} /> :
                <MetricPill key={metric.label} label={metric.label} dataValue={metric.dataValue} increaseRate={metric.increaseRate} decreaseRate={metric.decreaseRate} active={activeMetric === index} data={metric.data} onClick={() => handlePillClick(metric, index)} />
            ))}


          </div>
          <div className="dropdownBtn" onClick={handleExpandedIcon}>
            {expanded ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}

          </div>
        </div>
        <div className={`chart ${expanded ? 'chartExpanded' : ''}`}>
          {loading ? <SkeletonChart /> : <LineChartView chartData={chartData} />}
        </div>

      </div>
    </div>
  )
}
