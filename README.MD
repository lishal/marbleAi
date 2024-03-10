Component Created for the dashboard
1.	DateRangePicker.tsx: This component is created to pick the date and update the chart accordingly
2.	DropDownMenu.tsx: This component displays all the menu items in metric pill of edit button.
3.	LineChartView.tsx: This component helps to render the chart according to the values passed.
4.	MetricPill.tsx: This component renders all the metric component so that we don’t have to write the same code for similar metric
5.	MetricsData.tsx: This component contains all the dummy data that is used throughout the dashboard.
6.	SkeletonChart.tsx, SkeletonTab.tsx: These component is rendered when data is not fetched from server side.
7.	dashboard.css: This file contains all the necessary style for the dashboard component.

Tools used:<br>
	Recharts for charts <br>
    Material UI for useful component <br>
Note:
•	setTimeout function is used for the loading animation for 3 seconds. <br>
•	metricData component keeps track for all the metric present in dashboard <br>
   [ { label: 'Online store sessions', dataValue: '255,581', increaseRate: '9%', data: generateData(10) },
    { label: 'Net return value', dataValue: '-$15,07.44', increaseRate: '14%', data: generateData(10) },
    { label: 'Total orders', dataValue: '10,511', decreaseRate: '2%', data: generateData(10) },
    { label: 'Conversion rate', dataValue: '3.18%', increaseRate: '7%', data: generateData(10) }] <br>
Above is the data used in the metricData component and it circulates the data throughout the dashboard.<br>


