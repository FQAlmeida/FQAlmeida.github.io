// Global Imports
import React, { Component, lazy, Suspense } from "react"
import { Route, Switch } from "react-router-dom"
// Local Imports
import Loading from "../layout/loading/Loading"

const Home = lazy(() => import("../components/home/Home"))
const Repositories = lazy(() => import("../components/repository/Repository"))

class WebsiteRouter extends Component {
    render() {
        return (
            <Suspense fallback={<Loading />}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/repositories" exact component={Repositories} />
                </Switch>
            </Suspense>
        )
    }
}

export default WebsiteRouter;
