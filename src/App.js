import React, {Fragment} from 'react';
import Header from './components/molecules/Header';
import Router from './Router'

function App() {
    return (
        <Fragment>
            <Header title={"MASTERMIND"}/>
            <Router></Router>
        </Fragment>
    );
}

export default App;
