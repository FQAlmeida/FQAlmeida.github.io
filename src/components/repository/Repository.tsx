// Global Imports
import React, { Component } from "react";
import { connect, ConnectedProps } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
// Local Imports
import { rootState } from "../../redux/store";
import { IGithubReposGet, IGithubReposGetData } from "../../redux/actions/github/get_respositories_types";
import { getPublicRepositories } from "../../redux/actions/github/get_repositories";


interface IRepositoryState { }

interface IRepositoryProps { }

interface IRepositoryStateProps { 
    loading: boolean
    error?: Error
    repositories?: IGithubReposGetData
}
interface IRepositoryDispatchProps {
    getRepositories: () => Promise<void>
 }

const mapStateToProps = (state: rootState): IRepositoryStateProps => {
    return {
        loading: state.github.loading,
        error: state.github.error,
        repositories: state.github.data
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<rootState, undefined, IGithubReposGet>): IRepositoryDispatchProps => {
    return {
        getRepositories: () => {
            return dispatch(getPublicRepositories())
        }
    }
}

const connector = connect<
    IRepositoryStateProps,
    IRepositoryDispatchProps,
    IRepositoryProps,
    rootState>
    (mapStateToProps, mapDispatchToProps);

    type PropsFromRedux = ConnectedProps<typeof connector>

type RepositoryProps = PropsFromRedux & IRepositoryProps

class Repositories extends Component<RepositoryProps, IRepositoryState> {
    componentDidMount(){
        this.props.getRepositories();
    }
    render() {
        return (
            <p>repos</p>
        )
    }
}

export default connector(Repositories);
