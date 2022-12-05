import React from 'react';
import { AppBar, Typography, Toolbar } from '@mui/material'
import HandshakeIcon from '@mui/icons-material/Handshake';

export function Header() {
    return (
        <AppBar position="static">
            <Toolbar sx={{
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Typography variant="h1" sx={{
                    fontFamily: 'Roboto',
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    mr: 0.5
                }}>
                    Handshake 2.0
                </Typography>
                <HandshakeIcon />
            </Toolbar>
        </AppBar>
    )
}