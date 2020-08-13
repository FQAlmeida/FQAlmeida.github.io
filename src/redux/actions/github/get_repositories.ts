// Global Imports
import { ThunkAction } from "redux-thunk";
// Local Imports
import { rootState } from "../../store";
import github_client from "./client";
import { IGithubReposGet, IGithubReposGetData, IReposData } from "./get_respositories_types";
import { GITHUB_REPOS_GET } from "./github_action_types";

export const reposGetStart = (): IGithubReposGet => {
    return {
        type: GITHUB_REPOS_GET.START,
        data: undefined,
        error: undefined
    };
};

export const reposGetSuccess = (data: Array<IReposData>): IGithubReposGet => {
    return {
        type: GITHUB_REPOS_GET.SUCCESS,
        data: data,
        error: undefined
    };
};

export const reposGetFail = (error: Error): IGithubReposGet => {
    return {
        type: GITHUB_REPOS_GET.FAIL,
        error: error,
        data: undefined
    };
};



export const getPublicRepositories = (): ThunkAction<Promise<void>, rootState, unknown, IGithubReposGet> => {
    return async dispatch => {
        dispatch(reposGetStart());
        const owner = process.env.REACT_APP_GITHUB_ACCOUNT;
        if (!owner) {
            dispatch(reposGetFail(new Error("No owner")))
        } else {
            await github_client.get<IGithubReposGetData>(`/users/${owner}/repos`).then(
                resp => {
                    const data: IGithubReposGetData = resp.data.map(repo => {
                        return {
                            ...repo,
                            created_at: new Date(repo.created_at),
                            pushed_at: new Date(repo.pushed_at),
                            updated_at: new Date(repo.updated_at)
                        }
                    });
                    console.log(data);

                    dispatch(reposGetSuccess(data));
                }
            ).catch(err => {
                dispatch(reposGetFail(err));
            });
        }
    };
};