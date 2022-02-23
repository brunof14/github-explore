import styled from "styled-components";

export const Wrapper = styled.header`
  padding: 4rem 0 6rem;
  display: flex;
  justify-content: center;
`;

export const FormSearchUser = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 1.6rem;

  @media (max-width: 420px) {
    flex-direction: column;

    button {
      width: 100%;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  label {
    font-size: 1.4rem;
    color: var(--gray-800);
  }

  input {
    border: none;
    box-shadow: 0 0 0 1px var(--gray-200);
    color: var(--gray-900);
    padding: 1.2rem;

    &:focus {
      box-shadow: 0 0 0 2px var(--blue-500);
    }
  }

  button {
    font-weight: 500;
    border: none;
    background-color: var(--blue-500);
    color: var(--white);
    padding: 1.2rem 3.2rem;

    &:focus {
      box-shadow: 0 0 0 4px var(--blue-300);
    }
  }

  input,
  button {
    font-size: 1.6rem;
    height: 4.2rem;
    outline: none;
    border-radius: var(--border-radius);
    transition: box-shadow var(--transition-time);
  }
`;
