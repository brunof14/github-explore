import { createContext, useState } from "react";
import { api } from "../services/api";

export const GithubContext = createContext(null);

export function GithubProvider({ children }) {
  const [githubData, setGithubData] = useState({
    user: null,
    repositories: [],
    starredRepositories: [],
  });
  const [isLoading, setIsLoading] = useState(false);

  async function searchGithubUser(username) {
    if (isLoading) return;
    if (!username) return;

    setIsLoading(true);
    const user = await api.getUser(username);
    const repositories = await api.getRepositories(username);
    const starredRepositories = await api.getStarredRepositories(username);

    setIsLoading(false);
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
        isLoading,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
}
