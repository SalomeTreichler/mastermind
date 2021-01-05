import React, {Fragment} from 'react';
import Header from './components/molecules/Header';
import Router from './Router'
import Button from "@material-ui/core/Button";

function App() {
    return (
        <Fragment>
            <Header title={"MASTERMIND"}/>
            <Button/>
            <Router></Router>
        </Fragment>
    );
}

export default App;
