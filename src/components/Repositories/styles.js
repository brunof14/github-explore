import styled, { css } from "styled-components";
import { Link as LinkBase } from "../../styles/Link";

export const Wrapper = styled.section`
  padding: 6.4rem 0;
`;

export const Tab = styled.button`
  padding: 1.2rem 1.6rem;
  border: none;
  background-color: transparent;
  border-radius: var(--border-radius);

  font-size: 1.6rem;
  text-align: center;
  color: var(--gray-600);

  transition: color var(--transition-time),
    background-color var(--transition-time);

  ${(props) =>
    props.active
      ? css`
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.06);
          background-color: var(--white);
          color: var(--gray-950);
        `
      : css`
          &:hover {
            color: var(--gray-950);
            background-color: var(--white);
          }
        `}
`;

export const SwitchTabs = styled.div`
  border-radius: var(--border-radius);
  background-color: var(--gray-100);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.2rem;

  padding: 0.8rem 1.2rem;
  margin-bottom: 6.4rem;
`;

export const SwitchTabsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Repositories = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.8rem 2rem;

  @media (max-width: 920px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    gap: 1.6rem;
  }

  article {
    border: 2px solid var(--gray-100);
    border-radius: var(--border-radius);
    padding: 2.3rem 1.8rem;

    h2 {
      font-size: 1.8rem;
      color: var(--gray-950);
      margin-bottom: 1.2rem;
    }

    p {
      font-size: 1.4rem;
      color: var(--gray-600);
      margin-bottom: 2.2rem;
    }
  }
`;

export const Link = styled(LinkBase)`
  font-size: 1.4rem;
`;
