import React, { useState, useEffect } from "react";
import { Map } from "../components/Map";
import { Graph } from '../utils/graph';

export function MainPage() {
    const [tiles, setTiles] = useState([]);
    const [walkableTiles, setWalkableTiles] = useState([]);
    const [interactEnabled, setInteractEnabled] = useState(false);
    const [startingTile, setStartingTile] = useState();
    const [endTile, setEndTile] = useState();
    const [errorMessage, setErrorMessage] = useState("");

    const handleLinkTiles = (graph) => {
        walkableTiles.map(tile => {
            walkableTiles
                .filter(other => {
                    if (Math.abs(tile.position - other.position) == 1) return other;
                    else if (Math.abs(tile.position - other.position) == 10) return other;
                })
                .map(neighbor => {
                    if (!graph.AdjList.get(tile).find(element => element == neighbor))
                        graph.addEdge(tile, neighbor);
                })
        })
    }

    const handleSearch = () => {
        const graph = new Graph();

        walkableTiles.map(tile => graph.addVertex(tile));

        walkableTiles.map(tile => {
            walkableTiles
                .filter(other => {
                    if (Math.abs(tile.position - other.position) == 1) return other;
                    else if (Math.abs(tile.position - other.position) == 10) return other;
                })
                .map(neighbor => {
                    if (!graph.AdjList.get(tile).find(element => element == neighbor))
                        graph.addEdge(tile, neighbor);
                })
        })

        console.log(graph.AdjList);

        // setSearchList(graph.bfs(firstIndividual, secondIndividual));
    }

    const buildMap = () => {
        let newTiles = [];
        for (var i = 1; i <= 100; i++) {
            newTiles.push(
                {
                    position: i,
                    type: 'floor'
                }
            );
        }

        setTiles([...newTiles]);
    }

    useEffect(() => {
        buildMap();
    }, []);

    const changeTileType = (position) => {
        let newTiles = tiles;

        const currentType = newTiles.find(tile => tile.position == position).type;
        let newType = "";

        if (currentType == 'tree') newType = 'sticks';
        else if (currentType == 'floor') newType = 'tree';
        else newType = 'floor';

        newTiles.find(tile => tile.position == position).type = newType;
        setTiles([...newTiles]);
    }

    const changeMap = () => {
        let newWalkables = [];

        tiles.map((tile) => {
            if (tile.type != 'tree') newWalkables.push(tile);
        })

        setWalkableTiles([...newWalkables]);
        console.log(walkableTiles)
    }

    useEffect(() => {
        changeMap();
    }, [interactEnabled]);


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
                onClick={handleSearch}
                disabled={walkableTiles.length && startingTile && endTile}
            >
                Calcular caminho
            </button>
        </div>
    )
}
