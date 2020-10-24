import React, {Fragment} from 'react';
import Header from './components/molecules/Header';
import RankingPage from "./components/pages/RankingPage";

function App() {
    return (
        <Fragment>
            <Header title={"MASTERMIND"}/>
            <RankingPage/>
        </Fragment>
    );
}

export default App;
