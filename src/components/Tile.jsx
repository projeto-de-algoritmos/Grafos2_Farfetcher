import React, { useState } from "react";
import floor_tile from '../assets/floor_tile.png';
import sticks_tile from '../assets/sticks_tile.png';
import tree_tile from '../assets/tree_tile.png';
import player from '../assets/player.png';
import farfetch_d from '../assets/farfetch_d.png';


export function Tile({
    tile,
    isInteractive,
    changeType,
    isStartTile,
    isEndTile
}) {
    const tileVariants = {
        "floor": {
            img: floor_tile
        },
        "sticks": {
            img: sticks_tile
        },
        "tree": {
            img: tree_tile
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
            className="bg-transparent h-8 w-8 md:h-12 md:w-12 flex items-center justify-center relative"
        >

            <img
                src={tileVariants[mode].img}
                alt="img"
                className="w-full h-full"
            />

            {isStartTile &&
                <img
                    src={player}
                    alt="player"
                    className="absolute bottom-4 w-[80%] h-[80%]"
                />
            }

            {isEndTile &&
                <img
                    src={farfetch_d}
                    alt="farfetch_d"
                    className="absolute bottom-4 w-[80%] h-[80%]"
                />
            }

            <div className={`absolute font-medium text-xs bottom-0 right-1 ${tile.type == 'tree' ? 'text-white' : ''}`}>
                {tile.position}
            </div>
        </button>
    )
}