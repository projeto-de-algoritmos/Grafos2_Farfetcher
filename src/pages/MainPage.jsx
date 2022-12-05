import React, { useState } from "react";
import { Map } from "../components/Map";

export function MainPage() {
    const [interactEnabled, setInteractEnabled] = useState(false);

    return (
        <div className="bg-slate-600 h-full w-full flex flex-col items-center justify-center">
            <h1>
                Bem vindo ao Farfetcher!!!
            </h1>
            <h2>
                Monte o mapa de acordo com a puzzle que você quer resolver. Troque o tipo dos qudrados clicando neles
            </h2>

            <Map interactEnabled={interactEnabled} />

            <button
                onClick={() => setInteractEnabled(!interactEnabled)}
            >
                {interactEnabled ? 'Montar mapa' : 'Mudar mapa'}
            </button>
        </div>
    )
}
