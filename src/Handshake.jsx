import React, { useState } from 'react';
import { Header } from './components/Header';
import { StepTabs } from './components/StepTabs';
import { StepMessage } from './components/StepMessage';
import { RegisterStep } from './pages/RegisterStep';
import { LinkStep } from './pages/LinkStep';
import { SearchStep } from './pages/SearchStep';


export function Handshake() {
    const [page, setPage] = useState(0);
    const [individuals, setIndividuals] = useState([]);
    const [connectionsList, setConnectionsList] = useState([]);
    const [searchList, setSearchList] = useState([]);


    return (
        <>
            <Header />
            <StepTabs
                page={page}
                setPage={setPage}
                individuals={individuals}
                connectionsList={connectionsList}
            />
            <StepMessage page={page} />

            {page == 0 &&
                <RegisterStep
                    individuals={individuals}
                    setIndividuals={setIndividuals}
                />
            }
            {page == 1 &&
                <LinkStep
                    individuals={individuals}
                    connectionsList={connectionsList}
                    setConnectionsList={setConnectionsList}
                />
            }
            {page == 2 &&
                <SearchStep
                    individuals={individuals}
                    connectionsList={connectionsList}
                    searchList={searchList}
                    setSearchList={setSearchList}
                />
            }
        </>
    )
}