import React, { useState } from "react";
import { Tile } from "./Tile";

export function Map({ interactEnabled }) {
    const [walkableTiles, setWalkableTiles] = useState();

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

        if (currentType == 'tree') newType = 'floor';
        else if (currentType == 'floor') newType = 'sticks';
        else newType = 'tree';

        tiles.find(tile => tile.position == position).type = newType;
    }

    return (
        <div className={`bg-slate-600 grid grid-cols-10 grid-rows-10 ${interactEnabled ? 'gap-1' : 'gap-0'}`}>
            {
                tiles.map((tile, index) => (
                    <Tile
                        key={index}
                        tile={tile}
                        isInteractive={interactEnabled}
                        changeType={changeTileType}
                    />
                ))
            }
        </div>
    )
}