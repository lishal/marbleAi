import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import DropDownMenu from './DropDownMenu';
interface MetricPillProps {
    label: string;
    onClick: () => void;
    data: any;
    active: boolean;
    dataValue: string;
    increaseRate?: string;
    decreaseRate?: string;
}
const CustomToolTip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#FFFFFF',
        color: 'rgba(0, 0, 0, 0.87)',
        width: 450,
        fontSize: theme.typography.pxToRem(12),
        cursor: 'pointer',
        borderRadius: '10px',
        border: '1px solid #dadde9',
    },
}));
export const MetricPill: React.FC<MetricPillProps> = ({ label, data, onClick, active, increaseRate, decreaseRate, dataValue }) => {

    return (
        <div className={`metricPill ${active ? 'active' : ''}`} onClick={() => onClick()}>
            <div className="metricHeader">
                <div className="metricTitle">
                    {label}
                </div>
                {active && <div className="metricEdit">
                    <CustomToolTip title={
                        <DropDownMenu />
                    }>
                        <IconButton>
                            <EditIcon className='editIcon' />
                        </IconButton>
                    </CustomToolTip>
                </div>}
            </div>
            <div className="metricData">
                <div className="dataValue">
                    {dataValue}
                </div>
                {increaseRate && <div className="increaseRate"><ArrowDropUpIcon sx={{ fontSize: '16px' }} /> {increaseRate}</div>}
                {decreaseRate && <div className="decreaseRate"><ArrowDropDownIcon sx={{ fontSize: '16px' }} /> {decreaseRate}</div>}

            </div>


        </div>
    )
}
