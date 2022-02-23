import { useGithubData } from "../../hooks/useGithubData";
import * as S from "./styles";

export function Profile() {
  const {
    githubData: { user },
  } = useGithubData();

  return (
    <S.Wrapper>
      <S.Info>
        <img src={user.avatar} alt={user.name} />
        <figcaption>{user.name}</figcaption>

        <S.Link href={user.htmlUrl}>{user.login}</S.Link>
      </S.Info>
      <S.Statistics>
        <div>
          <p>Followers</p>
          <span>{user.followers}</span>
        </div>
        <div>
          <p>Following</p>
          <span>{user.following}</span>
        </div>
        <div>
          <p>Gists</p>
          <span>{user.publicGists}</span>
        </div>
        <div>
          <p>Repos</p>
          <span>{user.publicRepos}</span>
        </div>
      </S.Statistics>
    </S.Wrapper>
  );
}
