import React from 'react'
import Typography from '@mui/material/Typography';
import HelpIcon from '@mui/icons-material/Help';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';

function DropDownMenu() {

    return (
        <Typography>
            <div className="drowndownMenuItems">
                <div className="drowndownMenuItem active">
                    <div className="menuItem">
                        <div className="graphIcon">
                            <AutoGraphIcon />
                        </div>
                        <div className="menuItemName">
                            Average Order Value
                        </div>
                    </div>
                    <div className="help">
                        <HelpIcon />
                    </div>
                </div>
                <div className="drowndownMenuItem">
                    <div className="menuItem">
                        <div className="graphIcon">
                            <AutoGraphIcon />
                        </div>
                        <div className="menuItemName">
                            Conversion Rate
                        </div>
                    </div>
                </div>
                <div className="drowndownMenuItem">
                    <div className="menuItem">
                        <div className="graphIcon">
                            <AutoGraphIcon />
                        </div>
                        <div className="menuItemName">
                            Gross Sales
                        </div>
                    </div>
                </div>
                <div className="drowndownMenuItem">
                    <div className="menuItem">
                        <div className="graphIcon">
                            <AutoGraphIcon />
                        </div>
                        <div className="menuItemName">
                            Net return value
                        </div>
                    </div>
                </div>
                <div className="drowndownMenuItem">
                    <div className="menuItem">
                        <div className="graphIcon">
                            <AutoGraphIcon />
                        </div>
                        <div className="menuItemName">
                            Store search conversion
                        </div>
                    </div>
                </div>
                <div className="drowndownMenuItem">
                    <div className="menuItem">
                        <div className="graphIcon">
                            <AutoGraphIcon />
                        </div>
                        <div className="menuItemName">
                            Return rate
                        </div>
                    </div>
                </div>
            </div>
        </Typography >
    )
}

export default DropDownMenu