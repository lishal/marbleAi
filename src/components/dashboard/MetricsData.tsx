const generateData = (count: number) => {
    const data = [];
    const startYear = 2020;
    const endYear = 2024;
    const startValue = 1000;

    for (let i = 0; i < count; i++) {
        const year = Math.floor(Math.random() * (endYear - startYear + 1)) + startYear;
        const month = Math.floor(Math.random() * 12) + 1;
        const day = Math.floor(Math.random() * 31) + 1;
        const date = new Date(year, month - 1, day);

        const sampleData1 = startValue + Math.floor(Math.random() * 4000);
        const sampleData2 = startValue + Math.floor(Math.random() * 4000);

        data.push({
            date: `${date.toLocaleString('default', { month: 'short' })} ${date.getDate()}, ${date.getFullYear()}`,
            sampleData1: sampleData1,
            sampleData2: sampleData2
        });
    }

    return data;
};

export const metricsData = [
    { label: 'Online store sessions', dataValue: '255,581', increaseRate: '9%', data: generateData(10) },
    { label: 'Net return value', dataValue: '-$15,07.44', increaseRate: '14%', data: generateData(10) },
    { label: 'Total orders', dataValue: '10,511', decreaseRate: '2%', data: generateData(10) },
    { label: 'Conversion rate', dataValue: '3.18%', increaseRate: '7%', data: generateData(10) },
];