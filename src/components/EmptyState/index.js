import * as S from "./styles";

import emptyStateSVG from "../../assets/empty-state.svg";

export function EmptyState() {
  return (
    <S.Wrapper>
      <img src={emptyStateSVG} alt="Empty place" />
      <h1>Nenhum usuário pesquisado</h1>
      <p>Digite um nome de usuário do github para começar a navegar.</p>
    </S.Wrapper>
  );
}
