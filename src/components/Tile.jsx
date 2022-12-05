import React, { useState } from "react";

export function Tile({ isTouchable }) {
    const tileVariants = [
        {
            type: 'floor',
            img: ''
        },
        {
            type: 'sticks',
            img: ''
        },
        {
            type: 'tree',
            img: ''
        }
    ]

    const [mode, setMode] = useState(tileVariants[0]);
    const [touchable, setTouchable] = useState(isTouchable);

    const changeMode = () => {
        if(mode.type == 'tree') setMode(tileVariants[0]);
        else if (mode.type == 'floor') setMode(tileVariants[1])
        else setMode(tileVariants[2])
    }

    return (
        <button
            onClick={changeMode}
            disabled={touchable}
            className="bg-slate-400 h-10 w-10 flex items-center justify-center"
        >
            {mode.type}
        </button>
    )
}