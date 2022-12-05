import React, { useState } from "react";

export function Tile({ tile, isInteractive, changeType }) {
    const tileVariants = {
        "floor": {
            img: 'floor'
        },
        "sticks": {
            img: 'sticks'
        },
        "tree": {
            img: 'tree'
        },
    }
    const [mode, setMode] = useState(tile.type);

    return (
        <button
            onClick={() => {
                changeType(tile.position);
                setMode(tile.type);
            }}
            disabled={!isInteractive}
            className="bg-slate-400 h-10 w-10 flex items-center justify-center"
        >
            {tileVariants[mode].img}
        </button>
    )
}