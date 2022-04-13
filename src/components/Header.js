import React from "react";
import { AppBar, Typography } from '@mui/material';

export default function Header() {
  return <AppBar style={{backgroundColor: "#212121"}}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{marginLeft: "20px"}}>
                GitHub API Challenge
            </Typography>
        </AppBar>;
}
