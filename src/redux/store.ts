import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { github_repos_reducer } from "./reducers/github/reducer";

export const reducer = combineReducers({
    github: github_repos_reducer
});

export type rootState = ReturnType<typeof reducer>

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
