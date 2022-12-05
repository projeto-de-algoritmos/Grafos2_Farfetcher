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
            className="bg-slate-400 h-10 w-10 flex items-center justify-center relative"
        >
            {tileVariants[mode].img}

            <div className="absolute text-xs bottom-0 right-0">
                {tile.position}
            </div>
        </button>
    )
}