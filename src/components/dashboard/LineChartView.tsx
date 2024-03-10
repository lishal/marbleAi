import React, { useEffect, useState } from 'react'
import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Line, ResponsiveContainer } from 'recharts';
import { DateRangePicker } from './DateRangePicker';

interface chartDataProps {
  chartData: any
}

const DateConverterFromEngMonth = (date: string) => {
  const dateParts = date.split(' ');
  const year = parseInt(dateParts[2], 10);
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const month = monthNames.indexOf(dateParts[0]);
  const day = parseInt(dateParts[1].replace(',', ''), 10);
  const convertedDate = new Date(year, month, day);
  return convertedDate
}

const DateConverterFromFileld = (date: string) => {
  const dateParts = date.split('-');
  const year = parseInt(dateParts[0], 10);
  const month = parseInt(dateParts[1], 10) - 1; // Zero-based month
  const day = parseInt(dateParts[2], 10);
  const convertedDate = new Date(year, month, day);
  return convertedDate
}

export const LineChartView: React.FC<chartDataProps> = ({ chartData }) => {
  const [filteredData, setFilteredData] = useState<any[]>([]);

  useEffect(() => {
    const newFilteredData = chartData.data.filter((item: any) => {
      const convertedDate = DateConverterFromEngMonth(item.date);
      const startDate = new Date(2020, 1, 1);
      const endDate = new Date(2024, 10, 1);
      return convertedDate >= startDate && convertedDate <= endDate;
    });
    setFilteredData(newFilteredData);
  }, [chartData]);

  const handleSample1DateChange = (sample1: any) => {
    const newFilteredData = chartData.data.filter((item: any) => {
      const convertedDate = DateConverterFromEngMonth(item.date);
      const startDate = DateConverterFromFileld(sample1.startDate);
      const endDate = DateConverterFromFileld(sample1.endDate);
      return convertedDate >= startDate && convertedDate <= endDate;
    });
    setFilteredData(newFilteredData);
  };

  const handleSample2DateChange = (sample2: any) => {
    const newFilteredData = chartData.data.filter((item: any) => {
      const convertedDate = DateConverterFromEngMonth(item.date);
      const startDate = DateConverterFromFileld(sample2.startDate);
      const endDate = DateConverterFromFileld(sample2.endDate);
      return convertedDate >= startDate && convertedDate <= endDate;
    });
    setFilteredData(newFilteredData);
  };

  return (
    <>
      <ResponsiveContainer height={250} width='100%'>
        <LineChart
          data={filteredData}
          margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis axisLine={false} dataKey="date" />
          <YAxis domain={[0, 5000]} axisLine={false} tickFormatter={(value) => {
            if (value === 0) {
              return '0';
            }
            return `${value}K`;
          }} />
          <Tooltip />
          <Line type="monotone" dataKey="sampleData1" dot={false} stroke="#489AD2" strokeWidth={2} />
          <Line type="monotone" dataKey="sampleData2" dot={false} strokeDasharray="5 5" stroke="#489AD2" opacity={0.3} strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>

      <DateRangePicker onSample1DateChange={handleSample1DateChange} onSample2DateChange={handleSample2DateChange} />

    </>

  )
}