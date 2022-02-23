import { useState } from "react";
import * as S from "./styles";
export function Repositories() {
  const [typeRepositoryView, setTypeRepositoryView] = useState("repository");

  function handleSwitchTo(typeToView) {
    return () => {
      if (typeToView === typeRepositoryView) return;
      setTypeRepositoryView(typeToView);
    };
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
        <article>
          <h2>electron-typescript-react</h2>
          <p>An Electron boilerplate including Typescript, Jest and ESlint</p>
          <S.Link>link-to-repo</S.Link>
        </article>
        <article>
          <h2>electron-typescript-react</h2>
          <p>An Electron boilerplate including Typescript, Jest and ESlint</p>
          <S.Link>link-to-repo</S.Link>
        </article>
        <article>
          <h2>electron-typescript-react</h2>
          <p>An Electron boilerplate including Typescript, Jest and ESlint</p>
          <S.Link>link-to-repo</S.Link>
        </article>
        <article>
          <h2>electron-typescript-react</h2>
          <p>An Electron boilerplate including Typescript, Jest and ESlint</p>
          <S.Link>link-to-repo</S.Link>
        </article>
      </S.Repositories>
    </S.Wrapper>
  );
}
