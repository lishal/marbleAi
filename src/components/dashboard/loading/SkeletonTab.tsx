import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
function SkeletonTab() {
    return (
        <>
            <div className="metricPill metricPill-Skeleton">
                <Stack spacing={1}>
                    <Skeleton variant="rectangular" sx={{ width: '90%' }} />
                    <Skeleton variant="rectangular" sx={{ width: '80%' }} />
                </Stack>
            </div>
        </>
    )
}

export default SkeletonTab