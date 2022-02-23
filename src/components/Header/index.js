import { useState } from "react";
import { useGithubData } from "../../hooks/useGithubData";
import * as S from "./styles";

export function Header() {
  const { searchGithubUser } = useGithubData();
  const [username, setUsername] = useState("");

  function handleChange(e) {
    setUsername(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    searchGithubUser(username);
  }

  return (
    <S.Wrapper>
      <S.FormSearchUser onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="github username"
            onChange={handleChange}
            value={username}
          />
        </div>
        <button type="submit">Search</button>
      </S.FormSearchUser>
    </S.Wrapper>
  );
}
