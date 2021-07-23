import React from "react"
import {Link, Route, Switch, BrowserRouter as Router} from "react-router-dom"
import Game from "./Game"
import Rules from "./Rules"

function Header() {
    return (
        <Router>
            <header>
                <Link to="/game"><h2>Game</h2></Link>
                <Link to="/rules"><h2>Rules</h2></Link>
            </header>
            <Switch>
                <Route exact path="/game">
                    <Game />
                </Route>
                <Route exact path="/rules">
                    <Rules />
                </Route>
            </Switch>

        </Router>

    )
}
export default Header