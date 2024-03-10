import React, { useState } from 'react'
interface DateRange {
    startDate: string;
    endDate: string;
}

interface DateRangePickerProps {
    onSample1DateChange: (sample1: DateRange) => void;
    onSample2DateChange: (sample2: DateRange) => void;
}
export const DateRangePicker: React.FC<DateRangePickerProps> = ({ onSample1DateChange, onSample2DateChange }) => {
    const [sample1, setSample1] = useState({ startDate: '2020-01-01', endDate: '2024-10-01' });
    const [sample2, setSample2] = useState({ startDate: '2020-01-01', endDate: '2024-09-01' });

    const handleSampl1StartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newSample1startDate = event.target.value;
        const updatedSample1 = { 'startDate': newSample1startDate, 'endDate': sample1.endDate };
        setSample1(updatedSample1)
        onSample1DateChange(updatedSample1)
    };
    const handleSampl1EndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newSample1EndDate = event.target.value;
        const updatedSample1 = { 'startDate': sample1.startDate, 'endDate': newSample1EndDate };
        setSample1(updatedSample1)
        onSample1DateChange(updatedSample1)
    };
    const handleSampl2StartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newSample2startDate = event.target.value;
        const updatedSample2 = { 'startDate': newSample2startDate, 'endDate': sample2.endDate };
        setSample2(updatedSample2)
        onSample2DateChange(updatedSample2)
    };
    const handleSampl2EndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newSample2EndDate = event.target.value;
        const updatedSample2 = { 'startDate': sample2.startDate, 'endDate': newSample2EndDate };
        setSample2(updatedSample2)
        onSample2DateChange(updatedSample2)
    };
    return (
        <>
            <div className="dateContainer">
                <div className="dateSection">
                    <div className="legendArea">
                        <svg className='legendSvg'>
                            <line className='chartLegend' x1="0" y1="0" x2="10" y2="0" />
                        </svg>
                    </div>
                    <div className="dateArea">
                        <input type="date" className='legendDate' value={sample1.startDate} onChange={handleSampl1StartDateChange} />
                        <div className="dateDivider">
                            -
                        </div>
                        <input type="date" className='legendDate' value={sample1.endDate} onChange={handleSampl1EndDateChange} />
                    </div>
                </div>
                <div className="dateSection">
                    <div className="legendArea">
                        <svg className='legendSvg'>
                            <line className="chartLegend dotted" x1="0" y1="00" x2="20" y2="00" />
                        </svg>
                    </div>
                    <div className="dateArea">
                        <input type="date" className='legendDate' value={sample2.startDate} onChange={handleSampl2StartDateChange} />
                        <div className="dateDivider">
                            -
                        </div>
                        <input type="date" className='legendDate' value={sample2.endDate} onChange={handleSampl2EndDateChange} />
                    </div>
                </div>

            </div>
        </>
    )
}