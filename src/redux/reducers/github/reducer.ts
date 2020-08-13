import { GITHUB_REPOS_GET } from "../../actions/github/github_action_types"

import { IGithubReposGet, IGithubReposGetData } from "../../actions/github/get_respositories_types"

export interface IReposGetState {
    data?: IGithubReposGetData,
    error?: Error,
    loading: boolean
}

export const reposGetStateInitialState: IReposGetState = {
    data: undefined,
    error: undefined,
    loading: false
};

export const github_repos_reducer = (state: IReposGetState = reposGetStateInitialState, action: IGithubReposGet): IReposGetState => {
    switch (action.type) {
        case GITHUB_REPOS_GET.START:
            return {
                data: undefined,
                error: undefined,
                loading: true
            };
        case GITHUB_REPOS_GET.FAIL:
            return {
                data: undefined,
                error: action.error,
                loading: false
            }
        case GITHUB_REPOS_GET.SUCCESS:
            return {
                data: action.data,
                error: undefined,
                loading: false
            }
        default:
            return state;
    }
}
