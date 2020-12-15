import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import RankingPage from "./components/pages/RankingPage";
import GamePage from "./components/pages/GamePage";

export default function MastermindRouter() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <LoginPage />
                    </Route>
                    <Route exact path="/game">
                        <GamePage />
                    </Route>
                    <Route path="/ranking">
                        <RankingPage />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
