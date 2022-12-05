import React, { useState } from "react";
import { Map } from "../components/Map";

export function MainPage() {
    const [interactEnabled, setInteractEnabled] = useState(false);
    const [walkableTiles, setWalkableTiles] = useState([]);
    const [startingTile, setStartingTile] = useState();
    const [endTile, setEndTile] = useState();
    const [errorMessage, setErrorMessage] = useState("");

    const tiles = []
    for (var i = 1; i <= 100; i++) {
        tiles.push(
            {
                position: i,
                type: 'floor'
            }
        );
    }

    const changeTileType = (position) => {
        const currentType = tiles.find(tile => tile.position == position).type;
        let newType = "";

        if (currentType == 'tree') newType = 'sticks';
        else if (currentType == 'floor') newType = 'tree';
        else newType = 'floor';

        tiles.find(tile => tile.position == position).type = newType;
    }


    return (
        <div className="bg-slate-600 h-full w-full flex flex-col items-center justify-center">
            <h1>
                Bem vindo ao Farfetcher!!!
            </h1>
            <h2>
                Monte o mapa de acordo com a puzzle que você quer resolver. Troque o tipo dos qudrados clicando neles
            </h2>

            <Map
                interactEnabled={interactEnabled}
                tiles={tiles}
                changeTileType={changeTileType}
            />

            <button
                onClick={() => setInteractEnabled(!interactEnabled)}
            >
                {interactEnabled ? 'Finalizar mapa' : 'Alterar mapa'}
            </button>

            <p className="text-left">
                {startingTile ? `Posição inicial: ${startingTile}` : "Posição inicial não selecionada"}
            </p>
            <input
                value={startingTile}
                type="number"
                min={1}
                max={100}
            />

            <p className="text-left">
                {endTile ? `Posição do Farfecth'd: ${endTile}` : "Posição do Farfecth'd não selecionada"}
            </p>
            <input
                value={endTile}
                type="number"
                min={1}
                max={100}
            />


            <p className="text-left">
                {errorMessage}
            </p>

            <button
                onClick={() => { }}
                disabled={walkableTiles.length && startingTile && endTile}
            >
                Calcular caminho
            </button>
        </div>
    )
}
