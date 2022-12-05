import React, { useState } from "react";
import { Tile } from "./Tile";

export function Map() {
    const [selectEnabled, setSelectEnabled] = useState(false);
    const [walkableTiles, setWalkableTiles] = useState();

    const tiles = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

    return (
        <div className="bg-slate-600 grid gap-1 grid-cols-10 grid-rows-10">
            {
                tiles.map((tile, index) => (<Tile key={index} name={tile} />))
            }
        </div>
    )
}