import { createContext, useState } from "react";
import { api } from "../services/api";

export const GithubContext = createContext(null);

export function GithubProvider({ children }) {
  const [githubData, setGithubData] = useState({
    user: null,
    repositories: [],
    starredRepositories: [],
  });

  async function searchGithubUser(username) {
    const user = await api.getUser(username);
    const repositories = await api.getRepositories(username);
    const starredRepositories = await api.getStarredRepositories(username);

    setGithubData({
      user,
      repositories,
      starredRepositories,
    });
  }

  return (
    <GithubContext.Provider
      value={{
        githubData,
        searchGithubUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
}
