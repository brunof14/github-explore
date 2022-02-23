import { useState } from "react";
import { useGithubData } from "../../hooks/useGithubData";
import * as S from "./styles";
export function Repositories() {
  const { githubData } = useGithubData();
  const [typeRepositoryView, setTypeRepositoryView] = useState("repository");

  function handleSwitchTo(typeToView) {
    return () => {
      if (typeToView === typeRepositoryView) return;
      setTypeRepositoryView(typeToView);
    };
  }

  function makeRepositoriesList(repos) {
    return repos.map((repo) => (
      <article key={repo.id}>
        <h2>{repo.name}</h2>
        <p>{repo.description}</p>
        <S.Link href={repo.htmlUrl}>link-to-repo</S.Link>
      </article>
    ));
  }

  return (
    <S.Wrapper>
      <S.SwitchTabsWrapper>
        <S.SwitchTabs>
          <S.Tab
            active={typeRepositoryView === "repository"}
            onClick={handleSwitchTo("repository")}
          >
            Repositories
          </S.Tab>
          <S.Tab
            active={typeRepositoryView === "starred"}
            onClick={handleSwitchTo("starred")}
          >
            Starred
          </S.Tab>
        </S.SwitchTabs>
      </S.SwitchTabsWrapper>

      <S.Repositories>
        {makeRepositoriesList(
          typeRepositoryView === "repository"
            ? githubData.repositories
            : githubData.starredRepositories
        )}
      </S.Repositories>
    </S.Wrapper>
  );
}
