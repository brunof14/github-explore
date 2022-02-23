import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2.4rem;

  @media (min-height: 720px) {
    padding-top: 3.2rem;
  }

  img {
    display: block;
    margin-bottom: 4.8rem;
  }

  h1 {
    font-size: 3.2rem;
    font-weight: 500;
    color: var(--gray-950);
    margin-bottom: 1.4rem;
  }

  p {
    font-size: 1.8rem;
    color: var(--gray-700);
  }
`;
