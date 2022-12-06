import React, { useState, useEffect } from "react";
import { Map } from "../components/Map";
import { WeightedGraph } from '../utils/graph';
import bg_tile from '../assets/bg_tile.png'

export function MainPage() {
    const [tiles, setTiles] = useState([]);
    const [walkableTiles, setWalkableTiles] = useState([]);
    const [interactEnabled, setInteractEnabled] = useState(false);
    const [startPosition, setStartPosition] = useState();
    const [endPosition, setEndPosition] = useState();
    const [errorMessage, setErrorMessage] = useState("");

    const handleLinkTiles = (graph) => {
        walkableTiles.map(tile => {
            walkableTiles
                .filter(other => {
                    if (Math.abs(tile.position - other.position) == 1) return other;
                    else if (Math.abs(tile.position - other.position) == 10) return other;
                })
                .map(neighbor => {
                    if (!graph.adjList[tile.position].find(element => element.node == neighbor.position))
                        graph.addEdge(tile.position, neighbor.position, 1);
                })
        })
    }

    const handleSearch = () => {
        const graph = new WeightedGraph();

        walkableTiles.map(tile => graph.addVertex(tile.position));

        handleLinkTiles(graph);

        const result = graph.dijkstraSearch(parseInt(startPosition), parseInt(endPosition));
        // console.log(graph.adjList)
        // console.log(startPosition, endPosition)
        console.log(result);

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
        setWalkableTiles([...newTiles]);
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
    }

    const handleSetStartPosition = (position) => {
        if (interactEnabled) setErrorMessage("*Termine seu mapa antes de selecionar as posições!");
        else if (!walkableTiles.find(tile => tile.position == parseInt(position)))
            setErrorMessage("*Posição inicial inválida! Escolha uma posição nos quadrados de chão");
        else if (endPosition && endPosition == position)
            setErrorMessage("*A posição inicial não pode ser a mesma da final!");
        else {
            setStartPosition(position);
            setErrorMessage("");
        }
    }

    const handleSetEndPosition = (position) => {
        if (interactEnabled) setErrorMessage("*Termine seu mapa antes de selecionar as posições!");
        else if (!walkableTiles.find(tile => tile.position == parseInt(position)))
            setErrorMessage("*Posição final inválida! Escolha uma posição nos quadrados de chão");
        else if (startPosition && startPosition == position)
            setErrorMessage("*A posição final não pode ser a mesma da inicial!");
        else {
            setEndPosition(position);
            setErrorMessage("");
        }
    }

    useEffect(() => {
        changeMap();
    }, [interactEnabled]);


    return (
        <div
            className="bg-repeat font-bit font-normal h-full w-full flex flex-col items-center justify-start"
            style={{ backgroundImage: `url(${bg_tile})` }}
        >
            <div className="w-full bg-zinc-900 flex flex-col justify-center items-center py-6">
                <h1 className="text-center text-lg font-bold text-lime-100">
                    Bem vindo ao Farfetcher!!!
                </h1>
                <h2 className="w-full md:w-2/3 text-lime-100 text-center">
                    Monte o mapa de acordo com a puzzle que você quer resolver. Troque o tipo dos qudrados clicando neles
                </h2>
            </div>

            <div className="lg:w-[500px] flex flex-col items-center justify-center gap-6 mt-6 px-6">

                <div className="h-96 md:h-[525px] flex items-center justify-center">
                    <Map
                        interactEnabled={interactEnabled}
                        tiles={tiles}
                        changeTileType={changeTileType}
                        startPosition={startPosition}
                        endPosition={endPosition}
                    />
                </div>


                <button
                    onClick={() => setInteractEnabled(!interactEnabled)}
                    className="bg-zinc-900 text-lime-100 py-2 px-4 rounded-full"
                >
                    {interactEnabled ? 'Finalizar mapa' : 'Alterar mapa'}
                </button>

                {errorMessage &&
                    <p className="w-full text-left text-red-500">
                        {errorMessage}
                    </p>
                }

                <div className="w-full flex flex-col gap-2">
                    <div className="w-full flex gap-2 justify-start items-center">
                        <p className="text-left">
                            Selecione a posição inicial:
                        </p>
                        <input
                            className="bg-green-100 bg-opacity-50 text-end outline-none w-16"
                            onChange={(e) => handleSetStartPosition(e.target.value)}
                            value={startPosition}
                            type="number"
                            min={1}
                            max={100}
                        />
                    </div>

                    <div className="w-full flex gap-2 justify-start items-center">
                        <p cLlassName="text-left">
                            Selecione a posição do Farfetch'd:
                        </p>
                        <input
                            className="bg-green-100 bg-opacity-50 text-end outline-none w-16"
                            onChange={(e) => handleSetEndPosition(e.target.value)}
                            value={endPosition}
                            type="number"
                            min={1}
                            max={100}
                        />
                    </div>
                </div>

                <button
                    onClick={handleSearch}
                    // disabled={walkableTiles.length && startPosition && endPosition}
                    className="bg-zinc-900 text-lime-100 py-2 px-4 rounded-full"
                >
                    Calcular caminho
                </button>
            </div>
        </div>
    )
}
