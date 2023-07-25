import styled from '@emotion/styled';

export const Container = styled.div`
  height: 100%;
  padding: 20px 450px;
  background-image: linear-gradient(
    to bottom,
    var(--background),
    var(--accent)
  );
  text-align: center;
`;

export const PhonebookTitle = styled.h2`
  text-align: center;
  font-size: 30px;
  padding: 20px;
  border: 1px solid var(--section);
  border-radius: 20px;
  background-color: var(--section);
  color: var(--text);
`;

export const ContactTitle = styled.h2`
  text-align: center;
  padding: 20px;
  font-size: 30px;
  border: 1px solid var(--section);
  border-radius: 20px;
  background-color: var(--section);
  color: var(--text);
`;

export const ContactTotal = styled.p`
  margin-top: 20px;
  display: inline-block;
  text-align: center;
  font-weight: 700;
  padding: 20px;
  border: 1px solid var(--section);
  border-radius: 20px;
  background-color: var(--section);
  color: var(--text);
`;
