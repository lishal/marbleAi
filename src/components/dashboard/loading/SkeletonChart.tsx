import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
function SkeletonChart() {
    return (
        <>
            <div className="chart chart-Skeleton">
                <Stack spacing={1}>
                    <Skeleton variant="rectangular" sx={{ height: '250px', borderRadius: '10px', background: '#E3E3E3' }} />
                </Stack>
            </div>
        </>
    )
}

export default SkeletonChart