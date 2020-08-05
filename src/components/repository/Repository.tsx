// Global Imports
import React, { Component, Fragment } from "react";
import { loader } from "graphql.macro"
import { Query } from "@apollo/client/react/components"

const repo_query = loader("../../graphql/queries/repositories.gql")

interface RepositoryState { }

interface RepositoryProps { }

interface Language {
    name: string
}

interface PageInfo {
    endCursor: string,
    hasNextPage: boolean
}

interface Repository {
    name: string
    createdAt: Date
    owner: {
        login: string
    }
    description: string
    languages: { nodes: Array<Language> }
}

interface Data {
    viewer: {
        repositories: {
            totalCount: number
            nodes: Array<Repository>
            pageInfo: PageInfo
        }
    }
}


class Repositories extends Component<RepositoryProps, RepositoryState> {
    render() {
        return (
            <Query<Data, undefined> query={repo_query}>
                {({ loading, error, data }) => {
                    if (loading) { return <p>loading</p> }
                    else if (data) {
                        return <Fragment>
                            {data?.viewer.repositories.nodes.map((repo, index) => {
                                repo = { ...repo, createdAt: new Date(repo.createdAt) }
                                return (
                                    <div key={index}>
                                        <p>{repo.name}</p>
                                        <span>Created At: {repo.createdAt.toLocaleString()}</span>
                                    </div>
                                )
                            })}
                        </Fragment>
                    }
                    return <p>{error}</p>
                }}
            </Query>
        )
    }
}

export default Repositories;
