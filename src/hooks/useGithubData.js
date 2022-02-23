import { useContext } from "react";
import { GithubContext } from "../Providers/GithubProvider";

export const useGithubData = () => useContext(GithubContext);
