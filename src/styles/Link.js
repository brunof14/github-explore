import styled from "styled-components";

export const Link = styled.a`
  font-size: 1.6rem;
  color: var(--blue-600);
  transition: color var(--transition-time);

  &:hover {
    color: var(--blue-700);
  }
`;
