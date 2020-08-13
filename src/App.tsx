// Global Imports
import React, { FC, lazy, Suspense } from "react"
import { HashRouter as Router } from "react-router-dom"
import { Provider } from "react-redux";
// Local Imports
import Base from "./layout/base/Base"
import Loading from "./layout/loading/Loading"
import Error from "./layout/error/ErrorBoundary";
import store from "./redux/store"

const WebsiteRouter = lazy(() => import("./routes/router"))

const App: FC = () => {
    return (
        <Error>
            <Suspense fallback={<Loading />}>
                <Router basename="/">
                    <Provider store={store}>
                        <Base>
                            <WebsiteRouter />
                        </Base>
                    </Provider>
                </Router>
            </Suspense>
        </Error>
    )
}

export default App