import React, { useState } from "react";
import { Tile } from "./Tile";

export function Map({
    tiles,
    changeTileType,
    interactEnabled,
    startPosition,
    endPosition,
    path
}) {


    return (
        <div className={`bg-transparent grid grid-cols-10 grid-rows-10 ${interactEnabled ? 'gap-1' : 'gap-0'}`}>
            {
                tiles.map((tile, index) => (
                    <Tile
                        key={index}
                        tile={tile}
                        isInteractive={interactEnabled}
                        changeType={changeTileType}
                        isStartTile={tile.position == parseInt(startPosition)}
                        isEndTile={tile.position == parseInt(endPosition)}
                        inPath={path.find(element => parseInt(element) == tile.position)}
                    />
                ))
            }
        </div>
    )
}