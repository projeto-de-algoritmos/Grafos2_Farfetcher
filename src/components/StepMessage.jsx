import React from 'react';
import { Box, Typography } from '@mui/material'

export function StepMessage({ page }) {

    const messages = [
        'Cadastre o nome dos indivíduos que deseja conectar',
        'Ótimo! Agora forme as conexões entre os indivíduos',
        'Pronto! Agora selecione os indivíduos para realizar a busca'
    ]

    return (
        <Box sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            my: '2.5rem'
        }}>
            <Typography sx={{
                fontFamily: 'Roboto',
                fontSize: '1.2rem',
                fontWeight: '400',
                mr: 0.5
            }}>
                {messages[page]}
            </Typography>
        </Box>
    )
}
