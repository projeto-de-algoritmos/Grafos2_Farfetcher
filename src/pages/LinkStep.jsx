import React, { useState, useEffect } from 'react';
import {
    Box,
    TextField,
    Button,
    Grid,
    Typography,
    MenuItem,
    Stack,
    Tooltip
} from '@mui/material'
import { getRandomInt } from '../utils/randNames';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

export function LinkStep({ individuals, connectionsList, setConnectionsList }) {
    const [firstIndividual, setFirstIndividual] = useState('')
    const [secondIndividual, setSecondIndividual] = useState('')
    const [hasError, setHasError] = useState(false)
    const [buttonEnabled, setButtonEnabled] = useState(true);

    function handleClick() {
        let connection = {}
        connection.firstIndividual = firstIndividual;
        connection.secondIndividual = secondIndividual;

        setConnectionsList([...connectionsList, connection]);

        setFirstIndividual('');
        setSecondIndividual('');
    }

    function setRandomConnections() {
     
        const connectionsNum = getRandomInt(individuals);
        let randConnections = [];

        for (let i = 0; i < connectionsNum; i++) {
            let newConnection = {}
            let reverseConnection = false

            newConnection.firstIndividual = individuals[Math.floor(Math.random() * individuals.length)];
            newConnection.secondIndividual = individuals[Math.floor(Math.random() * individuals.length)];

            
            while (newConnection.firstIndividual == newConnection.secondIndividual || reverseConnection) {
                newConnection.secondIndividual = individuals[Math.floor(Math.random() * individuals.length)];

                reverseConnection = connectionsList.find(connection => 
                    connection.firstIndividual == newConnection.secondIndividual && 
                    connection.secondIndividual == newConnection.firstIndividual)
            }

            randConnections.push(newConnection);
        }

        setConnectionsList([...randConnections]);
        console.log('saiu do loop');

        setFirstIndividual('');
        setSecondIndividual('');
    }

    function cleanList() {
        if (connectionsList.length)
            setConnectionsList([])
    }

    useEffect(() => {
        if ((firstIndividual && secondIndividual) !== '')
            setButtonEnabled(false);
        else
            setButtonEnabled(true);

        if ((firstIndividual == secondIndividual) && (firstIndividual && secondIndividual !== '')) {
            setButtonEnabled(true);
            setHasError(true);
        }
        else
            setHasError(false);
    }, [firstIndividual, secondIndividual])

    return (
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={2} />

                <Grid item xs={2}>
                    <TextField
                        select
                        fullWidth
                        id="primeiro-membro"
                        label="Primeiro membro"
                        variant="outlined"
                        value={firstIndividual}
                        onChange={(event) => { setFirstIndividual(event.target.value) }}
                        error={hasError}
                        helperText={hasError ? 'Nome já escolhido, escolha outro nome' : ''}
                    >
                        {individuals.map((item) => (
                            <MenuItem key={item} value={item}>
                                {item}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField
                        select
                        fullWidth
                        id="segundo-membro"
                        label="Segundo membro"
                        variant="outlined"
                        value={secondIndividual}
                        onChange={(event) => { setSecondIndividual(event.target.value) }}
                        error={hasError}
                        helperText={hasError ? 'Nome já escolhido, escolha outro nome' : ''}
                    >
                        {individuals.map((item) => (
                            <MenuItem key={item} value={item}>
                                {item}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>

                <Grid item xs={2}>
                    <Button
                        variant="contained"
                        onClick={handleClick}
                        sx={{ height: '3.5rem', width: '100%' }}
                        disabled={buttonEnabled}
                    >
                        Adicionar
                    </Button>
                </Grid>

                <Grid item xs={1}>
                    <Tooltip title="Gerar conexões aleatórias">
                        <Button
                            variant="contained"
                            onClick={setRandomConnections}
                            sx={{ height: '3.5rem', width: '100%' }}
                        >
                            <ConnectWithoutContactIcon />
                        </Button>
                    </Tooltip>
                </Grid>

                <Grid item xs={1}>
                    <Button
                        variant="contained"
                        onClick={cleanList}
                        sx={{ height: '3.5rem', width: '100%' }}
                        disabled={!connectionsList.length}
                    >
                        Limpar
                    </Button>
                </Grid>

                <Grid item xs={2} />
            </Grid>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={3} />

                <Grid item xs={4} sx={{
                    my: 2,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    {connectionsList.map((item, index) => {
                        return (
                            <Stack
                                sx={{ mt: 2, justifyContent: 'space-evenly', alignItems: 'center' }}
                                direction="row"
                                spacing={2}
                                key={index}
                            >
                                <Typography>{item.firstIndividual}</Typography>
                                <HandshakeIcon />
                                <Typography>{item.secondIndividual}</Typography>
                            </Stack>
                        )
                    })}
                </Grid>

                <Grid item xs={5} />
            </Grid>
        </Box>
    )
}