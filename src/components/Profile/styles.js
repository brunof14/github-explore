import styled from "styled-components";
import { Link as LinkBase } from "../../styles/Link";

export const Wrapper = styled.section`
  margin-bottom: 2.4rem;
`;

export const Info = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3.2rem;

  img {
    display: block;
    border-radius: 50%;
    width: 15.6rem;
    object-fit: cover;
    margin-bottom: 2.4rem;
  }

  figcaption {
    font-size: 3.2rem;
    color: var(--gray-950);
    font-weight: 500;
    margin-bottom: 1.2rem;
  }
`;

export const Statistics = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 16.4rem);
  justify-content: center;
  gap: 2.4rem;

  @media (max-width: 820px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    background-color: var(--gray-100);
    padding: 1.6rem 2.4rem;
    border-radius: var(--border-radius);

    p {
      font-size: 2.2rem;
      font-weight: 500;
      color: var(--gray-900);
    }

    span {
      font-size: 1.6rem;
      color: var(--gray-600);
    }
  }
`;

export const Link = styled(LinkBase)`
  font-size: 1.8rem;
`;
