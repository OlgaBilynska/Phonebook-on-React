import styled from '@emotion/styled';

export const ContactItem = styled.li`
  border: 1px solid var(--section);
  border-radius: 20%;
  background-color: var(--section);
  color: var(--text);
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonDelete = styled.button`
  background-color: var(--accent);
  outline: none;
  border: none;
  border: 0.5px solid var(--accent);
  border-radius: 15%;
  max-width: 20%;
  color: var(--text);
  font-weight: 500;
`;
