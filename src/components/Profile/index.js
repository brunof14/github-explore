import * as S from "./styles";

export function Profile() {
  return (
    <S.Wrapper>
      <S.Info>
        <img
          src="https://avatars.githubusercontent.com/u/50248121?v=4"
          alt="brunof14"
        />
        <figcaption>Bruno Felipe</figcaption>

        <S.Link href="https://github.com/brunof14">brunof14</S.Link>
      </S.Info>
      <S.Statistics>
        <div>
          <p>Followers</p>
          <span>21504</span>
        </div>
        <div>
          <p>Followers</p>
          <span>21504</span>
        </div>
        <div>
          <p>Followers</p>
          <span>21504</span>
        </div>
        <div>
          <p>Followers</p>
          <span>21504</span>
        </div>
      </S.Statistics>
    </S.Wrapper>
  );
}
