import React, { useState } from "react";
import { Tile } from "./Tile";

export function Map({ tiles, changeTileType, interactEnabled }) {


    return (
        <div className={`bg-transparent grid grid-cols-10 grid-rows-10 ${interactEnabled ? 'gap-1' : 'gap-0'}`}>
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