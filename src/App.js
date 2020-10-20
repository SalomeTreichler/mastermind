import React, {Fragment} from 'react';
import Header from './components/molecules/Header'
import LoginPage from "./components/pages/LoginPage";

function App() {
    return (
        <Fragment>
            <Header title={"MASTERMIND"}/>
            <LoginPage/>
        </Fragment>
    );
}

export default App;
