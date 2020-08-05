// Global Imports
import React, { Component, Fragment } from "react"
import { Route } from "react-router"
// Local Imports
import Home from "../components/home/Home"
import Repositories from "../components/repository/Repository"

class WebsiteRouter extends Component {
    render() {
        return (
            <Fragment>
                <Route path="/" exact component={Home} />
                <Route path="/repositories" exact component={Repositories} />
            </Fragment>
        )
    }
}

export default WebsiteRouter;
