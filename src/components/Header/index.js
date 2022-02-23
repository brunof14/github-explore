import { useState } from "react";
import * as S from "./styles";

export function Header() {
  const [username, setUsername] = useState("");

  function handleChange(e) {
    setUsername(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
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
