import axios from "axios";

const client = axios.create({
  baseURL: "https://api.github.com/users/",
});

async function getUser(username) {
  const { data } = await client.get(username);

  return {
    name: data.name,
    avatar: data.avatar_url,
    htmlUrl: data.html_url,
    login: data.login,
    followers: data.followers,
    following: data.following,
    publicGists: data.public_gists,
    publicRepos: data.public_repos,
  };
}

const shortRepoInfo = (repo) => ({
  id: repo.id,
  name: repo.name,
  description: repo.description,
  htmlUrl: repo.html_url,
});
async function getRepositories(username) {
  const { data: repositories } = await client.get(`/${username}/repos`);
  return repositories.map(shortRepoInfo);
}
async function getStarredRepositories(username) {
  const { data: repositories } = await client.get(`/${username}/starred`);
  return repositories.map(shortRepoInfo);
}

export const api = {
  getUser,
  getRepositories,
  getStarredRepositories,
};
