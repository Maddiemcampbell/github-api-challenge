import React from "react";
import { AppBar, Typography } from '@mui/material';

export default function Header() {
  return <AppBar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                GitHub API Challenge
            </Typography>
        </AppBar>;
}
